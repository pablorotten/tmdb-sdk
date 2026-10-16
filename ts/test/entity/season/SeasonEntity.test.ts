

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


describe('SeasonEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TMDB_TEST_LIVE=TRUE.
  afterEach(liveDelay('TMDB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TmdbSDK.test()
    const ent = testsdk.Season()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = TmdbSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Season().load({"id":"x","tv_id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TMDB_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'season.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"air_date":{"a":true,"h":"Air Date","n":"air_date","r":false,"t":"`$STRING`","key$":"air_date","index$":0},"episodes":{"a":true,"h":"Episodes","n":"episodes","r":false,"t":"`$ARRAY`","key$":"episodes","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":2},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":3},"networks":{"a":true,"h":"Networks","n":"networks","r":false,"t":"`$ARRAY`","key$":"networks","index$":4},"overview":{"a":true,"h":"Overview","n":"overview","r":false,"t":"`$STRING`","key$":"overview","index$":5},"poster_path":{"a":true,"h":"Poster Path","n":"poster_path","r":false,"t":"`$STRING`","key$":"poster_path","index$":6},"season_number":{"a":true,"h":"Season Number","n":"season_number","r":false,"t":"`$INTEGER`","key$":"season_number","index$":7},"vote_average":{"a":true,"h":"Vote Average","n":"vote_average","r":false,"t":"`$NUMBER`","key$":"vote_average","index$":8}},"id":{"field":"id","name":"id"},"name":"season","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /3/tv/{series_id}/season/{season_number}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"season_number","r":true,"t":"`$INTEGER`","index$":0},{"a":true,"k":"param","n":"tv_id","or":"series_id","r":true,"t":"`$INTEGER`","index$":1}],"query":[{"a":true,"k":"query","n":"append_to_response","or":"append_to_response","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"en-US","k":"query","n":"language","or":"language","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/3/tv/{series_id}/season/{season_number}","q":{"exist":["id","tv_id"]},"r":{"param":{"season_number":"id","series_id":"tv_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"3"},{"lit":"tv"},{"var":"tv_id"},{"lit":"season"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"season","name__orig":"season","Name":"Season","name_":"season","name-":"season","NAME":"SEASON","index$":70}, {"active":true,"entity":"season","key$":"BasicSeasonFlow","kind":"basic","name":"BasicSeasonFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"season_ref01","srcdatavar":"season_ref01_data","suffix":"_dt0"},"m":{"id":"season01","tv_id":"tv01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-season_ref01"}}]}]}, 'Season', {"GET /3/tv/{series_id}/season/{season_number}":{"protocol":"http","parameters":[{"name":"series_id","in":"path","schema":{"type":"integer","format":"int32"},"required":true,"index$":0},{"name":"season_number","in":"path","schema":{"type":"integer","format":"int32"},"required":true,"index$":1},{"name":"append_to_response","in":"query","description":"comma separated list of endpoints within this namespace, 20 items max","schema":{"type":"string"},"index$":2},{"name":"language","in":"query","schema":{"type":"string","default":"en-US"},"index$":3}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let season_ref01_data = Object.values(setup.data.existing.season)[0] as any

    // LOAD
    const season_ref01_ent = client.Season()
    const season_ref01_match_dt0: any = {}
    season_ref01_match_dt0.id = season_ref01_data.id
    season_ref01_match_dt0['tv_id'] = setup.idmap['tv_id'] ?? setup.idmap['tv01']
    const season_ref01_data_dt0 = (await season_ref01_ent.load(season_ref01_match_dt0)).data()
    assert(season_ref01_data_dt0.id === season_ref01_data.id)


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
      '../../../../.sdk/test/entity/season/SeasonTestData.json')

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
    ['season01','season02','season03','tv01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TMDB_TEST_SEASON_ENTID': idmap,
    'TMDB_TEST_LIVE': 'FALSE',
    'TMDB_TEST_EXPLAIN': 'FALSE',
    'TMDB_APIKEY': '',
  })

  idmap = env['TMDB_TEST_SEASON_ENTID']

  const live = 'TRUE' === env.TMDB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TMDB_TEST_SEASON_ENTID']
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
  
