

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


describe('PopularEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TMDB_TEST_LIVE=TRUE.
  afterEach(liveDelay('TMDB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TmdbSDK.test()
    const ent = testsdk.Popular()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('popular hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of TmdbSDK.test(offline).Popular().stream('list')) { }
    }, /offline/)

    for await (const _item of TmdbSDK.test(offline).Popular()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = TmdbSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.Popular().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of TmdbSDK.test().Popular().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new TmdbSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.Popular().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.Popular().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = TmdbSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Popular().list({"language":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TMDB_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'popular.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"adult":{"a":true,"h":"Adult","n":"adult","r":false,"t":"`$BOOLEAN`","key$":"adult","index$":0},"backdrop_path":{"a":true,"h":"Backdrop Path","n":"backdrop_path","r":false,"t":"`$STRING`","key$":"backdrop_path","index$":1},"first_air_date":{"a":true,"h":"First Air Date","n":"first_air_date","r":false,"t":"`$STRING`","key$":"first_air_date","index$":2},"gender":{"a":true,"h":"Gender","n":"gender","r":false,"t":"`$INTEGER`","key$":"gender","index$":3},"genre_ids":{"a":true,"h":"Genre Ids","n":"genre_ids","r":false,"t":"`$ARRAY`","key$":"genre_ids","index$":4},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$INTEGER`","key$":"id","index$":5},"known_for":{"a":true,"h":"Known For","n":"known_for","r":false,"t":"`$ARRAY`","key$":"known_for","index$":6},"known_for_department":{"a":true,"h":"Known For Department","n":"known_for_department","r":false,"t":"`$STRING`","key$":"known_for_department","index$":7},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":8},"origin_country":{"a":true,"h":"Origin Country","n":"origin_country","r":false,"t":"`$ARRAY`","key$":"origin_country","index$":9},"original_language":{"a":true,"h":"Original Language","n":"original_language","r":false,"t":"`$STRING`","key$":"original_language","index$":10},"original_name":{"a":true,"h":"Original Name","n":"original_name","r":false,"t":"`$STRING`","key$":"original_name","index$":11},"original_title":{"a":true,"h":"Original Title","n":"original_title","r":false,"t":"`$STRING`","key$":"original_title","index$":12},"overview":{"a":true,"h":"Overview","n":"overview","r":false,"t":"`$STRING`","key$":"overview","index$":13},"popularity":{"a":true,"h":"Popularity","n":"popularity","r":false,"t":"`$NUMBER`","key$":"popularity","index$":14},"poster_path":{"a":true,"h":"Poster Path","n":"poster_path","r":false,"t":"`$STRING`","key$":"poster_path","index$":15},"profile_path":{"a":true,"h":"Profile Path","n":"profile_path","r":false,"t":"`$STRING`","key$":"profile_path","index$":16},"release_date":{"a":true,"h":"Release Date","n":"release_date","r":false,"t":"`$STRING`","key$":"release_date","index$":17},"title":{"a":true,"h":"Title","n":"title","r":false,"t":"`$STRING`","key$":"title","index$":18},"video":{"a":true,"h":"Video","n":"video","r":false,"t":"`$BOOLEAN`","key$":"video","index$":19},"vote_average":{"a":true,"h":"Vote Average","n":"vote_average","r":false,"t":"`$NUMBER`","key$":"vote_average","index$":20},"vote_count":{"a":true,"h":"Vote Count","n":"vote_count","r":false,"t":"`$INTEGER`","key$":"vote_count","index$":21}},"id":{"field":"id","name":"id"},"name":"popular","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /3/movie/popular","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"en-US","k":"query","n":"language","or":"language","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"region","or":"region","r":false,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/3/movie/popular","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"3"},{"lit":"movie"},{"lit":"popular"}],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":0},{"a":true,"co":{"id":"GET /3/person/popular","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"en-US","k":"query","n":"language","or":"language","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/3/person/popular","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"3"},{"lit":"person"},{"lit":"popular"}],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":1},{"a":true,"co":{"id":"GET /3/tv/popular","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"en-US","k":"query","n":"language","or":"language","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/3/tv/popular","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"3"},{"lit":"tv"},{"lit":"popular"}],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":2}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"popular","name__orig":"popular","Name":"Popular","name_":"popular","name-":"popular","NAME":"POPULAR","index$":65}, {"active":true,"entity":"popular","key$":"BasicPopularFlow","kind":"basic","name":"BasicPopularFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"popular_ref01"}}]}]}, 'Popular', {"GET /3/movie/popular":{"protocol":"http","parameters":[{"name":"language","in":"query","schema":{"type":"string","default":"en-US"},"index$":0},{"name":"page","in":"query","schema":{"type":"integer","format":"int32","default":1},"index$":1},{"name":"region","in":"query","description":"ISO-3166-1 code","schema":{"type":"string"},"index$":2}]},"GET /3/person/popular":{"protocol":"http","parameters":[{"name":"language","in":"query","schema":{"type":"string","default":"en-US"},"index$":0},{"name":"page","in":"query","schema":{"type":"integer","format":"int32","default":1},"index$":1}]},"GET /3/tv/popular":{"protocol":"http","parameters":[{"name":"language","in":"query","schema":{"type":"string","default":"en-US"},"index$":0},{"name":"page","in":"query","schema":{"type":"integer","format":"int32","default":1},"index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let popular_ref01_data = Object.values(setup.data.existing.popular)[0] as any

    // LIST
    const popular_ref01_ent = client.Popular()
    const popular_ref01_match: any = {}

    const popular_ref01_list = (await popular_ref01_ent.list(popular_ref01_match)).map((e: any) => e.data())


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
      '../../../../.sdk/test/entity/popular/PopularTestData.json')

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
    ['popular01','popular02','popular03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TMDB_TEST_POPULAR_ENTID': idmap,
    'TMDB_TEST_LIVE': 'FALSE',
    'TMDB_TEST_EXPLAIN': 'FALSE',
    'TMDB_APIKEY': '',
  })

  idmap = env['TMDB_TEST_POPULAR_ENTID']

  const live = 'TRUE' === env.TMDB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TMDB_TEST_POPULAR_ENTID']
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
  
