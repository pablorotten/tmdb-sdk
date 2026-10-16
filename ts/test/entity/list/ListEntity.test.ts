

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { TmdbSDK, BaseFeature, config, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('ListEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TMDB_TEST_LIVE=TRUE.
  afterEach(liveDelay('TMDB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TmdbSDK.test()
    const ent = testsdk.List()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('list hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of TmdbSDK.test(offline).List().stream('list')) { }
    }, /offline/)

    for await (const _item of TmdbSDK.test(offline).List()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = TmdbSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.List().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of TmdbSDK.test().List().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new TmdbSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.List().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.List().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = TmdbSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.List().list({"language":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TMDB_TEST_LIVE
    for (const op of ['create', 'list', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'list.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"AR":{"a":true,"h":"Ar","n":"AR","r":false,"t":"`$ARRAY`","key$":"AR","index$":0},"AU":{"a":true,"h":"Au","n":"AU","r":false,"t":"`$ARRAY`","key$":"AU","index$":1},"BG":{"a":true,"h":"Bg","n":"BG","r":false,"t":"`$ARRAY`","key$":"BG","index$":2},"BR":{"a":true,"h":"Br","n":"BR","r":false,"t":"`$ARRAY`","key$":"BR","index$":3},"CA":{"a":true,"h":"Ca","n":"CA","r":false,"t":"`$ARRAY`","key$":"CA","index$":4},"CAQC":{"a":true,"h":"Caqc","n":"CAQC","r":false,"t":"`$ARRAY`","key$":"CAQC","index$":5},"CH":{"a":true,"h":"Ch","n":"CH","r":false,"t":"`$ARRAY`","key$":"CH","index$":6},"DE":{"a":true,"h":"De","n":"DE","r":false,"t":"`$ARRAY`","key$":"DE","index$":7},"DK":{"a":true,"h":"Dk","n":"DK","r":false,"t":"`$ARRAY`","key$":"DK","index$":8},"ES":{"a":true,"h":"Es","n":"ES","r":false,"t":"`$ARRAY`","key$":"ES","index$":9},"FI":{"a":true,"h":"Fi","n":"FI","r":false,"t":"`$ARRAY`","key$":"FI","index$":10},"FR":{"a":true,"h":"Fr","n":"FR","r":false,"t":"`$ARRAY`","key$":"FR","index$":11},"GB":{"a":true,"h":"Gb","n":"GB","r":false,"t":"`$ARRAY`","key$":"GB","index$":12},"GR":{"a":true,"h":"Gr","n":"GR","r":false,"t":"`$ARRAY`","key$":"GR","index$":13},"HK":{"a":true,"h":"Hk","n":"HK","r":false,"t":"`$ARRAY`","key$":"HK","index$":14},"HU":{"a":true,"h":"Hu","n":"HU","r":false,"t":"`$ARRAY`","key$":"HU","index$":15},"ID":{"a":true,"h":"Id","n":"ID","r":false,"t":"`$ARRAY`","key$":"ID","index$":16},"IE":{"a":true,"h":"Ie","n":"IE","r":false,"t":"`$ARRAY`","key$":"IE","index$":17},"IL":{"a":true,"h":"Il","n":"IL","r":false,"t":"`$ARRAY`","key$":"IL","index$":18},"IN":{"a":true,"h":"In","n":"IN","r":false,"t":"`$ARRAY`","key$":"IN","index$":19},"IT":{"a":true,"h":"It","n":"IT","r":false,"t":"`$ARRAY`","key$":"IT","index$":20},"JP":{"a":true,"h":"Jp","n":"JP","r":false,"t":"`$ARRAY`","key$":"JP","index$":21},"KR":{"a":true,"h":"Kr","n":"KR","r":false,"t":"`$ARRAY`","key$":"KR","index$":22},"LT":{"a":true,"h":"Lt","n":"LT","r":false,"t":"`$ARRAY`","key$":"LT","index$":23},"LU":{"a":true,"h":"Lu","n":"LU","r":false,"t":"`$ARRAY`","key$":"LU","index$":24},"LV":{"a":true,"h":"Lv","n":"LV","r":false,"t":"`$ARRAY`","key$":"LV","index$":25},"MA":{"a":true,"h":"Ma","n":"MA","r":false,"t":"`$ARRAY`","key$":"MA","index$":26},"MO":{"a":true,"h":"Mo","n":"MO","r":false,"t":"`$ARRAY`","key$":"MO","index$":27},"MX":{"a":true,"h":"Mx","n":"MX","r":false,"t":"`$ARRAY`","key$":"MX","index$":28},"MY":{"a":true,"h":"My","n":"MY","r":false,"t":"`$ARRAY`","key$":"MY","index$":29},"NL":{"a":true,"h":"Nl","n":"NL","r":false,"t":"`$ARRAY`","key$":"NL","index$":30},"NO":{"a":true,"h":"No","n":"NO","r":false,"t":"`$ARRAY`","key$":"NO","index$":31},"NZ":{"a":true,"h":"Nz","n":"NZ","r":false,"t":"`$ARRAY`","key$":"NZ","index$":32},"PH":{"a":true,"h":"Ph","n":"PH","r":false,"t":"`$ARRAY`","key$":"PH","index$":33},"PL":{"a":true,"h":"Pl","n":"PL","r":false,"t":"`$ARRAY`","key$":"PL","index$":34},"PR":{"a":true,"h":"Pr","n":"PR","r":false,"t":"`$ARRAY`","key$":"PR","index$":35},"PT":{"a":true,"h":"Pt","n":"PT","r":false,"t":"`$ARRAY`","key$":"PT","index$":36},"RAW_BODY":{"a":true,"fo":"json","h":"Raw Body","n":"RAW_BODY","r":true,"t":"`$STRING`","key$":"RAW_BODY","index$":37},"RU":{"a":true,"h":"Ru","n":"RU","r":false,"t":"`$ARRAY`","key$":"RU","index$":38},"SE":{"a":true,"h":"Se","n":"SE","r":false,"t":"`$ARRAY`","key$":"SE","index$":39},"SG":{"a":true,"h":"Sg","n":"SG","r":false,"t":"`$ARRAY`","key$":"SG","index$":40},"SK":{"a":true,"h":"Sk","n":"SK","r":false,"t":"`$ARRAY`","key$":"SK","index$":41},"TH":{"a":true,"h":"Th","n":"TH","r":false,"t":"`$ARRAY`","key$":"TH","index$":42},"TR":{"a":true,"h":"Tr","n":"TR","r":false,"t":"`$ARRAY`","key$":"TR","index$":43},"TW":{"a":true,"h":"Tw","n":"TW","r":false,"t":"`$ARRAY`","key$":"TW","index$":44},"US":{"a":true,"h":"Us","n":"US","r":false,"t":"`$ARRAY`","key$":"US","index$":45},"VI":{"a":true,"h":"Vi","n":"VI","r":false,"t":"`$ARRAY`","key$":"VI","index$":46},"ZA":{"a":true,"h":"Za","n":"ZA","r":false,"t":"`$ARRAY`","key$":"ZA","index$":47},"created_by":{"a":true,"h":"Created By","n":"created_by","r":false,"t":"`$STRING`","key$":"created_by","index$":48},"description":{"a":true,"h":"Description","n":"description","r":false,"t":"`$STRING`","key$":"description","index$":49},"favorite_count":{"a":true,"h":"Favorite Count","n":"favorite_count","r":false,"t":"`$INTEGER`","key$":"favorite_count","index$":50},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":51},"iso_639_1":{"a":true,"h":"Iso 639 1","n":"iso_639_1","r":false,"t":"`$STRING`","key$":"iso_639_1","index$":52},"item_count":{"a":true,"h":"Item Count","n":"item_count","r":false,"t":"`$INTEGER`","key$":"item_count","index$":53},"items":{"a":true,"h":"Items","n":"items","r":false,"t":"`$ARRAY`","key$":"items","index$":54},"list_id":{"a":true,"h":"List Id","n":"list_id","r":false,"t":"`$INTEGER`","key$":"list_id","index$":55},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":56},"poster_path":{"a":true,"h":"Poster Path","n":"poster_path","r":false,"t":"`$STRING`","key$":"poster_path","index$":57},"status_code":{"a":true,"h":"Status Code","n":"status_code","r":false,"t":"`$INTEGER`","key$":"status_code","index$":58},"status_message":{"a":true,"h":"Status Message","n":"status_message","r":false,"t":"`$STRING`","key$":"status_message","index$":59},"success":{"a":true,"h":"Success","n":"success","r":false,"t":"`$BOOLEAN`","key$":"success","index$":60}},"id":{"field":"id","name":"id"},"name":"list","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /3/list/{list_id}/clear","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"list_id","r":true,"t":"`$INTEGER`","index$":0}],"query":[{"a":true,"ex":false,"k":"query","n":"confirm","or":"confirm","r":true,"t":"`$BOOLEAN`","index$":0},{"a":true,"k":"query","n":"session_id","or":"session_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/3/list/{list_id}/clear","q":{"$action":"clear","exist":["confirm","id","session_id"]},"r":{"param":{"list_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"3"},{"lit":"list"},{"var":"id"},{"lit":"clear"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"bf":["RAW_BODY"],"co":{"id":"POST /3/list/{list_id}/add_item","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"list_id","r":true,"t":"`$INTEGER`","index$":0}],"query":[{"a":true,"k":"query","n":"session_id","or":"session_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/3/list/{list_id}/add_item","q":{"$action":"add_item","exist":["id","session_id"]},"r":{"param":{"list_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"3"},{"lit":"list"},{"var":"id"},{"lit":"add_item"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"bf":["RAW_BODY"],"co":{"id":"POST /3/list/{list_id}/remove_item","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"list_id","r":true,"t":"`$INTEGER`","index$":0}],"query":[{"a":true,"k":"query","n":"session_id","or":"session_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/3/list/{list_id}/remove_item","q":{"$action":"remove_item","exist":["id","session_id"]},"r":{"param":{"list_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"3"},{"lit":"list"},{"var":"id"},{"lit":"remove_item"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"bf":["RAW_BODY"],"co":{"id":"POST /3/list","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"session_id","or":"session_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/3/list","q":{"exist":["session_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"3"},{"lit":"list"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /3/genre/movie/list","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"en","k":"query","n":"language","or":"language","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/3/genre/movie/list","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"3"},{"lit":"genre"},{"lit":"movie"},{"lit":"list"}],"t":{"req":"`reqdata`","res":"`body.genres`"},"index$":0},{"a":true,"co":{"id":"GET /3/genre/tv/list","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"en","k":"query","n":"language","or":"language","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/3/genre/tv/list","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"3"},{"lit":"genre"},{"lit":"tv"},{"lit":"list"}],"t":{"req":"`reqdata`","res":"`body.genres`"},"index$":1}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /3/list/{list_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"list_id","r":true,"t":"`$INTEGER`","index$":0}],"query":[{"a":true,"ex":"en-US","k":"query","n":"language","or":"language","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/3/list/{list_id}","q":{"exist":["id"]},"r":{"param":{"list_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"3"},{"lit":"list"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /3/certification/movie/list","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/3/certification/movie/list","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"3"},{"lit":"certification"},{"lit":"movie"},{"lit":"list"}],"t":{"req":"`reqdata`","res":"`body.certifications`"},"index$":1},{"a":true,"co":{"id":"GET /3/certification/tv/list","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/3/certification/tv/list","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"3"},{"lit":"certification"},{"lit":"tv"},{"lit":"list"}],"t":{"req":"`reqdata`","res":"`body.certifications`"},"index$":2}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /3/list/{list_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"list_id","r":true,"t":"`$INTEGER`","index$":0}],"query":[{"a":true,"k":"query","n":"session_id","or":"session_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/3/list/{list_id}","q":{"exist":["id","session_id"]},"r":{"param":{"list_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"3"},{"lit":"list"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[]},"key$":"list","name__orig":"list","Name":"List","name_":"list","name-":"list","NAME":"LIST","index$":31}, {"active":true,"entity":"list","key$":"BasicListFlow","kind":"basic","name":"BasicListFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"list_ref01"},"m":{},"o":"create","s":[],"v":[]},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"list_ref01"}}]},{"a":true,"d":{},"i":{"ref":"list_ref01","srcdatavar":"list_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-list_ref01"}}]},{"a":true,"d":{},"i":{"ref":"list_ref01","suffix":"_rm0"},"m":{"id":"list01"},"o":"remove","s":[],"v":[]},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"list_ref01"}}]}]}, 'List', {"POST /3/list/{list_id}/clear":{"protocol":"http","parameters":[{"name":"list_id","in":"path","schema":{"type":"integer","format":"int32"},"required":true,"index$":0},{"name":"session_id","in":"query","required":true,"schema":{"type":"string"},"index$":1},{"name":"confirm","in":"query","required":true,"schema":{"type":"boolean","default":false},"index$":2}]},"POST /3/list/{list_id}/add_item":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"RAW_BODY":{"type":"string","format":"json"}}},"examples":{"Request Example":{"value":{"media_id":18}}}}}},"parameters":[{"name":"list_id","in":"path","schema":{"type":"integer","format":"int32"},"required":true,"index$":0},{"name":"session_id","in":"query","required":true,"schema":{"type":"string"},"index$":1}]},"POST /3/list/{list_id}/remove_item":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","required":["RAW_BODY"],"properties":{"RAW_BODY":{"type":"string","format":"json"}}},"examples":{"Request Example":{"value":{"media_id":18}}}}}},"parameters":[{"name":"list_id","in":"path","schema":{"type":"integer","format":"int32"},"required":true,"index$":0},{"name":"session_id","in":"query","required":true,"schema":{"type":"string"},"index$":1}]},"POST /3/list":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","required":["RAW_BODY"],"properties":{"RAW_BODY":{"type":"string","format":"json","key$":"RAW_BODY"}},"index$":1},"examples":{"Request Example":{"value":{"name":"This is my awesome test list.","description":"Just an awesome list.","language":"en"}}}}}},"parameters":[{"name":"session_id","in":"query","required":true,"schema":{"type":"string"},"index$":0}]},"GET /3/genre/movie/list":{"protocol":"http","parameters":[{"name":"language","in":"query","schema":{"type":"string","default":"en"},"index$":0}]},"GET /3/genre/tv/list":{"protocol":"http","parameters":[{"name":"language","in":"query","schema":{"type":"string","default":"en"},"index$":0}]},"GET /3/list/{list_id}":{"protocol":"http","parameters":[{"name":"list_id","in":"path","schema":{"type":"integer","format":"int32"},"required":true,"index$":0},{"name":"language","in":"query","schema":{"type":"string","default":"en-US"},"index$":1},{"name":"page","in":"query","schema":{"type":"integer","format":"int32","default":1},"index$":2}]},"GET /3/certification/movie/list":{"protocol":"http","parameters":[]},"GET /3/certification/tv/list":{"protocol":"http","parameters":[]},"DELETE /3/list/{list_id}":{"protocol":"http","parameters":[{"name":"list_id","in":"path","schema":{"type":"integer","format":"int32"},"required":true,"index$":0},{"name":"session_id","in":"query","required":true,"schema":{"type":"string"},"index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const list_ref01_ent = client.List()
    let list_ref01_data = setup.data.new.list['list_ref01']

    list_ref01_data = (await list_ref01_ent.create(list_ref01_data)).data()
    assert(null != list_ref01_data.id)


    // LIST
    const list_ref01_match: any = {}

    const list_ref01_list = (await list_ref01_ent.list(list_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(list_ref01_list, { id: list_ref01_data.id })))


    // LOAD
    const list_ref01_match_dt0: any = {}
    list_ref01_match_dt0.id = list_ref01_data.id
    const list_ref01_data_dt0 = (await list_ref01_ent.load(list_ref01_match_dt0)).data()
    assert(list_ref01_data_dt0.id === list_ref01_data.id)


    // REMOVE
    const list_ref01_match_rm0: any = { id: list_ref01_data.id }
    await list_ref01_ent.remove(list_ref01_match_rm0)
  

    // LIST
    const list_ref01_match_rt0: any = {}

    const list_ref01_list_rt0 = (await list_ref01_ent.list(list_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(list_ref01_list_rt0, { id: list_ref01_data.id })))


  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/list/ListTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = TmdbSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['list01','list02','list03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TMDB_TEST_LIST_ENTID': idmap,
    'TMDB_TEST_LIVE': 'FALSE',
    'TMDB_TEST_EXPLAIN': 'FALSE',
    'TMDB_APIKEY': '',
  })

  idmap = env['TMDB_TEST_LIST_ENTID']

  const live = 'TRUE' === env.TMDB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TMDB_TEST_LIST_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new TmdbSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.TMDB_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.TMDB_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
