

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


describe('OnTheAirEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TMDB_TEST_LIVE=TRUE.
  afterEach(liveDelay('TMDB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TmdbSDK.test()
    const ent = testsdk.OnTheAir()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('on_the_air hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of TmdbSDK.test(offline).OnTheAir().stream('list')) { }
    }, /offline/)

    for await (const _item of TmdbSDK.test(offline).OnTheAir()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = TmdbSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.OnTheAir().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of TmdbSDK.test().OnTheAir().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new TmdbSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.OnTheAir().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.OnTheAir().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = TmdbSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.OnTheAir().list({"language":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TMDB_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'on_the_air.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"backdrop_path":{"a":true,"h":"Backdrop Path","n":"backdrop_path","r":false,"t":"`$STRING`","key$":"backdrop_path","index$":0},"first_air_date":{"a":true,"h":"First Air Date","n":"first_air_date","r":false,"t":"`$STRING`","key$":"first_air_date","index$":1},"genre_ids":{"a":true,"h":"Genre Ids","n":"genre_ids","r":false,"t":"`$ARRAY`","key$":"genre_ids","index$":2},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$INTEGER`","key$":"id","index$":3},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":4},"origin_country":{"a":true,"h":"Origin Country","n":"origin_country","r":false,"t":"`$ARRAY`","key$":"origin_country","index$":5},"original_language":{"a":true,"h":"Original Language","n":"original_language","r":false,"t":"`$STRING`","key$":"original_language","index$":6},"original_name":{"a":true,"h":"Original Name","n":"original_name","r":false,"t":"`$STRING`","key$":"original_name","index$":7},"overview":{"a":true,"h":"Overview","n":"overview","r":false,"t":"`$STRING`","key$":"overview","index$":8},"popularity":{"a":true,"h":"Popularity","n":"popularity","r":false,"t":"`$NUMBER`","key$":"popularity","index$":9},"poster_path":{"a":true,"h":"Poster Path","n":"poster_path","r":false,"t":"`$STRING`","key$":"poster_path","index$":10},"vote_average":{"a":true,"h":"Vote Average","n":"vote_average","r":false,"t":"`$INTEGER`","key$":"vote_average","index$":11},"vote_count":{"a":true,"h":"Vote Count","n":"vote_count","r":false,"t":"`$INTEGER`","key$":"vote_count","index$":12}},"id":{"field":"id","name":"id"},"name":"on_the_air","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /3/tv/on_the_air","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"en-US","k":"query","n":"language","or":"language","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"timezone","or":"timezone","r":false,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/3/tv/on_the_air","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"3"},{"lit":"tv"},{"lit":"on_the_air"}],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"on_the_air","name__orig":"on_the_air","Name":"OnTheAir","name_":"on_the_air","name-":"on-the-air","NAME":"ON_THE_AIR","index$":55}, {"active":true,"entity":"on_the_air","key$":"BasicOnTheAirFlow","kind":"basic","name":"BasicOnTheAirFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"on_the_air_ref01"}}]}]}, 'OnTheAir', {"GET /3/tv/on_the_air":{"protocol":"http","parameters":[{"name":"language","in":"query","schema":{"type":"string","default":"en-US"},"index$":0},{"name":"page","in":"query","schema":{"type":"integer","format":"int32","default":1},"index$":1},{"name":"timezone","in":"query","schema":{"type":"string"},"index$":2}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let on_the_air_ref01_data = Object.values(setup.data.existing.on_the_air)[0] as any

    // LIST
    const on_the_air_ref01_ent = client.OnTheAir()
    const on_the_air_ref01_match: any = {}

    const on_the_air_ref01_list = (await on_the_air_ref01_ent.list(on_the_air_ref01_match)).map((e: any) => e.data())


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
      '../../../../.sdk/test/entity/on_the_air/OnTheAirTestData.json')

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
    ['on_the_air01','on_the_air02','on_the_air03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TMDB_TEST_ON_THE_AIR_ENTID': idmap,
    'TMDB_TEST_LIVE': 'FALSE',
    'TMDB_TEST_EXPLAIN': 'FALSE',
    'TMDB_APIKEY': '',
  })

  idmap = env['TMDB_TEST_ON_THE_AIR_ENTID']

  const live = 'TRUE' === env.TMDB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TMDB_TEST_ON_THE_AIR_ENTID']
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
  
