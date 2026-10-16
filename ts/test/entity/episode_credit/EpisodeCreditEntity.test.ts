

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


describe('EpisodeCreditEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TMDB_TEST_LIVE=TRUE.
  afterEach(liveDelay('TMDB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TmdbSDK.test()
    const ent = testsdk.EpisodeCredit()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = TmdbSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.EpisodeCredit().list({"episode_number":"x","season_id":1,"tv_id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TMDB_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'episode_credit.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"cast":{"a":true,"h":"Cast","n":"cast","r":false,"t":"`$ARRAY`","key$":"cast","index$":0},"crew":{"a":true,"h":"Crew","n":"crew","r":false,"t":"`$ARRAY`","key$":"crew","index$":1},"guest_stars":{"a":true,"h":"Guest Stars","n":"guest_stars","r":false,"t":"`$ARRAY`","key$":"guest_stars","index$":2},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$INTEGER`","key$":"id","index$":3}},"id":{"field":"id","name":"id"},"name":"episode_credit","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /3/tv/{series_id}/season/{season_number}/episode/{episode_number}/credits","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"episode_number","or":"episode_number","r":true,"t":"`$INTEGER`","index$":0},{"a":true,"k":"param","n":"season_id","or":"season_number","r":true,"t":"`$INTEGER`","index$":1},{"a":true,"k":"param","n":"tv_id","or":"series_id","r":true,"t":"`$INTEGER`","index$":2}],"query":[{"a":true,"ex":"en-US","k":"query","n":"language","or":"language","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/3/tv/{series_id}/season/{season_number}/episode/{episode_number}/credits","q":{"exist":["episode_number","season_id","tv_id"]},"r":{"param":{"season_number":"season_id","series_id":"tv_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"3"},{"lit":"tv"},{"var":"tv_id"},{"lit":"season"},{"var":"season_id"},{"lit":"episode"},{"var":"episode_number"},{"lit":"credits"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.season","$.main.kit.entity.episode"]]},"key$":"episode_credit","name__orig":"episode_credit","Name":"EpisodeCredit","name_":"episode_credit","name-":"episode-credit","NAME":"EPISODE_CREDIT","index$":18}, {"active":true,"entity":"episode_credit","key$":"BasicEpisodeCreditFlow","kind":"basic","name":"BasicEpisodeCreditFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"episode_number":"episode_number01","season_id":"season01","tv_id":"tv01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"episode_credit_ref01"}}]}]}, 'EpisodeCredit', {"GET /3/tv/{series_id}/season/{season_number}/episode/{episode_number}/credits":{"protocol":"http","parameters":[{"name":"series_id","in":"path","schema":{"type":"integer","format":"int32"},"required":true,"index$":0},{"name":"season_number","in":"path","schema":{"type":"integer","format":"int32"},"required":true,"index$":1},{"name":"language","in":"query","schema":{"type":"string","default":"en-US"},"index$":2},{"name":"episode_number","in":"path","schema":{"type":"integer","format":"int32"},"required":true,"index$":3}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let episode_credit_ref01_data = Object.values(setup.data.existing.episode_credit)[0] as any

    // LIST
    const episode_credit_ref01_ent = client.EpisodeCredit()
    const episode_credit_ref01_match: any = {}
    episode_credit_ref01_match['episode_number'] = setup.idmap['episode_number01']
    episode_credit_ref01_match['season_id'] = setup.idmap['season01']
    episode_credit_ref01_match['tv_id'] = setup.idmap['tv01']

    const episode_credit_ref01_list = (await episode_credit_ref01_ent.list(episode_credit_ref01_match)).map((e: any) => e.data())


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
      '../../../../.sdk/test/entity/episode_credit/EpisodeCreditTestData.json')

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
    ['episode_credit01','episode_credit02','episode_credit03','season01','season02','season03','episode01','episode02','episode03','episode_number01','tv01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TMDB_TEST_EPISODE_CREDIT_ENTID': idmap,
    'TMDB_TEST_LIVE': 'FALSE',
    'TMDB_TEST_EXPLAIN': 'FALSE',
    'TMDB_APIKEY': '',
  })

  idmap = env['TMDB_TEST_EPISODE_CREDIT_ENTID']

  const live = 'TRUE' === env.TMDB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TMDB_TEST_EPISODE_CREDIT_ENTID']
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
  
