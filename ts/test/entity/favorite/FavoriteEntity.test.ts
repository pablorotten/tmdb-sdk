

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


describe('FavoriteEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TMDB_TEST_LIVE=TRUE.
  afterEach(liveDelay('TMDB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TmdbSDK.test()
    const ent = testsdk.Favorite()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = TmdbSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Favorite().create({"account_id":"x","RAW_BODY":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TMDB_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'favorite.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"RAW_BODY":{"a":true,"fo":"json","h":"Raw Body","n":"RAW_BODY","r":true,"t":"`$STRING`","key$":"RAW_BODY","index$":0},"status_code":{"a":true,"h":"Status Code","n":"status_code","r":false,"t":"`$INTEGER`","key$":"status_code","index$":1},"status_message":{"a":true,"h":"Status Message","n":"status_message","r":false,"t":"`$STRING`","key$":"status_message","index$":2}},"name":"favorite","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["RAW_BODY"],"co":{"id":"POST /3/account/{account_id}/favorite","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$INTEGER`","index$":0}],"query":[{"a":true,"k":"query","n":"session_id","or":"session_id","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/3/account/{account_id}/favorite","q":{"exist":["account_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"3"},{"lit":"account"},{"var":"account_id"},{"lit":"favorite"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.account"]]},"key$":"favorite","name__orig":"favorite","Name":"Favorite","name_":"favorite","name-":"favorite","NAME":"FAVORITE","index$":24}, {"active":true,"entity":"favorite","key$":"BasicFavoriteFlow","kind":"basic","name":"BasicFavoriteFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"favorite_ref01"},"m":{"account_id":"account01"},"o":"create","s":[],"v":[]}]}, 'Favorite', {"POST /3/account/{account_id}/favorite":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","required":["RAW_BODY"],"properties":{"RAW_BODY":{"type":"string","format":"json","key$":"RAW_BODY"}},"index$":1},"examples":{"Request Example":{"value":{"media_type":"movie","media_id":550,"favorite":true}}}}}},"parameters":[{"name":"account_id","in":"path","schema":{"type":"integer","format":"int32","default":null},"required":true,"index$":0},{"name":"session_id","in":"query","schema":{"type":"string"},"index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const favorite_ref01_ent = client.Favorite()
    let favorite_ref01_data = setup.data.new.favorite['favorite_ref01']
    favorite_ref01_data['account_id'] = setup.idmap['account01']

    favorite_ref01_data = (await favorite_ref01_ent.create(favorite_ref01_data)).data()
    assert(null != favorite_ref01_data)


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
      '../../../../.sdk/test/entity/favorite/FavoriteTestData.json')

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
    ['favorite01','favorite02','favorite03','account01','account02','account03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TMDB_TEST_FAVORITE_ENTID': idmap,
    'TMDB_TEST_LIVE': 'FALSE',
    'TMDB_TEST_EXPLAIN': 'FALSE',
    'TMDB_APIKEY': '',
  })

  idmap = env['TMDB_TEST_FAVORITE_ENTID']

  const live = 'TRUE' === env.TMDB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TMDB_TEST_FAVORITE_ENTID']
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
  
