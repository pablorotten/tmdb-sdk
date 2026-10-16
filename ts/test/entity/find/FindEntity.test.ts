

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


describe('FindEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TMDB_TEST_LIVE=TRUE.
  afterEach(liveDelay('TMDB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TmdbSDK.test()
    const ent = testsdk.Find()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = TmdbSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Find().load({"id":1,"external_source":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TMDB_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'find.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0},"movie_results":{"a":true,"h":"Movie Results","n":"movie_results","r":false,"t":"`$ARRAY`","key$":"movie_results","index$":1},"person_results":{"a":true,"h":"Person Results","n":"person_results","r":false,"t":"`$ARRAY`","key$":"person_results","index$":2},"tv_episode_results":{"a":true,"h":"Tv Episode Results","n":"tv_episode_results","r":false,"t":"`$ARRAY`","key$":"tv_episode_results","index$":3},"tv_results":{"a":true,"h":"Tv Results","n":"tv_results","r":false,"t":"`$ARRAY`","key$":"tv_results","index$":4},"tv_season_results":{"a":true,"h":"Tv Season Results","n":"tv_season_results","r":false,"t":"`$ARRAY`","key$":"tv_season_results","index$":5}},"id":{"field":"id","name":"id"},"name":"find","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /3/find/{external_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"external_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"external_source","or":"external_source","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"en-US","k":"query","n":"language","or":"language","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/3/find/{external_id}","q":{"exist":["external_source","id"]},"r":{"param":{"external_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"3"},{"lit":"find"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"find","name__orig":"find","Name":"Find","name_":"find","name-":"find","NAME":"FIND","index$":25}, {"active":true,"entity":"find","key$":"BasicFindFlow","kind":"basic","name":"BasicFindFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"find_ref01","srcdatavar":"find_ref01_data","suffix":"_dt0"},"m":{"id":"find01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-find_ref01"}}]}]}, 'Find', {"GET /3/find/{external_id}":{"protocol":"http","parameters":[{"name":"external_id","in":"path","schema":{"type":"string"},"required":true,"index$":0},{"name":"external_source","in":"query","required":true,"schema":{"type":"string","enum":["imdb_id","facebook_id","instagram_id","tvdb_id","tiktok_id","twitter_id","wikidata_id","youtube_id"]},"index$":1},{"name":"language","in":"query","schema":{"type":"string","default":"en-US"},"index$":2}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let find_ref01_data = Object.values(setup.data.existing.find)[0] as any

    // LOAD
    const find_ref01_ent = client.Find()
    const find_ref01_match_dt0: any = {}
    find_ref01_match_dt0.id = find_ref01_data.id
    const find_ref01_data_dt0 = (await find_ref01_ent.load(find_ref01_match_dt0)).data()
    assert(find_ref01_data_dt0.id === find_ref01_data.id)


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
      '../../../../.sdk/test/entity/find/FindTestData.json')

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
    ['find01','find02','find03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TMDB_TEST_FIND_ENTID': idmap,
    'TMDB_TEST_LIVE': 'FALSE',
    'TMDB_TEST_EXPLAIN': 'FALSE',
    'TMDB_APIKEY': '',
  })

  idmap = env['TMDB_TEST_FIND_ENTID']

  const live = 'TRUE' === env.TMDB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TMDB_TEST_FIND_ENTID']
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
  
