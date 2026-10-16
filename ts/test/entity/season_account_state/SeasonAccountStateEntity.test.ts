

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


describe('SeasonAccountStateEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TMDB_TEST_LIVE=TRUE.
  afterEach(liveDelay('TMDB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TmdbSDK.test()
    const ent = testsdk.SeasonAccountState()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = TmdbSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.SeasonAccountState().list({"season_number":"x","tv_id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TMDB_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'season_account_state.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"episode_number":{"a":true,"h":"Episode Number","n":"episode_number","r":false,"t":"`$INTEGER`","key$":"episode_number","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$INTEGER`","key$":"id","index$":1},"rated":{"a":true,"h":"Rated","n":"rated","r":false,"t":"`$OBJECT`","key$":"rated","index$":2}},"id":{"field":"id","name":"id"},"name":"season_account_state","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /3/tv/{series_id}/season/{season_number}/account_states","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"season_number","or":"season_number","r":true,"t":"`$INTEGER`","index$":0},{"a":true,"k":"param","n":"tv_id","or":"series_id","r":true,"t":"`$INTEGER`","index$":1}],"query":[{"a":true,"k":"query","n":"guest_session_id","or":"guest_session_id","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"session_id","or":"session_id","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/3/tv/{series_id}/season/{season_number}/account_states","q":{"exist":["season_number","tv_id"]},"r":{"param":{"series_id":"tv_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"3"},{"lit":"tv"},{"var":"tv_id"},{"lit":"season"},{"var":"season_number"},{"lit":"account_states"}],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.season"]]},"key$":"season_account_state","name__orig":"season_account_state","Name":"SeasonAccountState","name_":"season_account_state","name-":"season-account-state","NAME":"SEASON_ACCOUNT_STATE","index$":71}, {"active":true,"entity":"season_account_state","key$":"BasicSeasonAccountStateFlow","kind":"basic","name":"BasicSeasonAccountStateFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"season_number":"season_number01","tv_id":"tv01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"season_account_state_ref01"}}]}]}, 'SeasonAccountState', {"GET /3/tv/{series_id}/season/{season_number}/account_states":{"protocol":"http","parameters":[{"name":"series_id","in":"path","schema":{"type":"integer","format":"int32"},"required":true,"index$":0},{"name":"session_id","in":"query","schema":{"type":"string"},"index$":1},{"name":"guest_session_id","in":"query","schema":{"type":"string"},"index$":2},{"name":"season_number","in":"path","schema":{"type":"integer","format":"int32"},"required":true,"index$":3}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let season_account_state_ref01_data = Object.values(setup.data.existing.season_account_state)[0] as any

    // LIST
    const season_account_state_ref01_ent = client.SeasonAccountState()
    const season_account_state_ref01_match: any = {}
    season_account_state_ref01_match['season_number'] = setup.idmap['season_number01']
    season_account_state_ref01_match['tv_id'] = setup.idmap['tv01']

    const season_account_state_ref01_list = (await season_account_state_ref01_ent.list(season_account_state_ref01_match)).map((e: any) => e.data())


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
      '../../../../.sdk/test/entity/season_account_state/SeasonAccountStateTestData.json')

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
    ['season_account_state01','season_account_state02','season_account_state03','season01','season02','season03','season_number01','tv01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TMDB_TEST_SEASON_ACCOUNT_STATE_ENTID': idmap,
    'TMDB_TEST_LIVE': 'FALSE',
    'TMDB_TEST_EXPLAIN': 'FALSE',
    'TMDB_APIKEY': '',
  })

  idmap = env['TMDB_TEST_SEASON_ACCOUNT_STATE_ENTID']

  const live = 'TRUE' === env.TMDB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TMDB_TEST_SEASON_ACCOUNT_STATE_ENTID']
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
  
