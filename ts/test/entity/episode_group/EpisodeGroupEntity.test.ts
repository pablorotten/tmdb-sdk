

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


describe('EpisodeGroupEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TMDB_TEST_LIVE=TRUE.
  afterEach(liveDelay('TMDB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TmdbSDK.test()
    const ent = testsdk.EpisodeGroup()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = TmdbSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.EpisodeGroup().load({"id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TMDB_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'episode_group.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"description":{"a":true,"h":"Description","n":"description","r":false,"t":"`$STRING`","key$":"description","index$":0},"episode_count":{"a":true,"h":"Episode Count","n":"episode_count","r":false,"t":"`$INTEGER`","key$":"episode_count","index$":1},"group_count":{"a":true,"h":"Group Count","n":"group_count","r":false,"t":"`$INTEGER`","key$":"group_count","index$":2},"groups":{"a":true,"h":"Groups","n":"groups","r":false,"t":"`$ARRAY`","key$":"groups","index$":3},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":4},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":5},"network":{"a":true,"h":"Network","n":"network","r":false,"t":"`$OBJECT`","key$":"network","index$":6},"type":{"a":true,"h":"Type","n":"type","r":false,"t":"`$INTEGER`","key$":"type","index$":7}},"id":{"field":"id","name":"id"},"name":"episode_group","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /3/tv/episode_group/{tv_episode_group_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"tv_episode_group_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/3/tv/episode_group/{tv_episode_group_id}","q":{"exist":["id"]},"r":{"param":{"tv_episode_group_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"3"},{"lit":"tv"},{"lit":"episode_group"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"episode_group","name__orig":"episode_group","Name":"EpisodeGroup","name_":"episode_group","name-":"episode-group","NAME":"EPISODE_GROUP","index$":20}, {"active":true,"entity":"episode_group","key$":"BasicEpisodeGroupFlow","kind":"basic","name":"BasicEpisodeGroupFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"episode_group_ref01","srcdatavar":"episode_group_ref01_data","suffix":"_dt0"},"m":{"id":"episode_group01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-episode_group_ref01"}}]}]}, 'EpisodeGroup', {"GET /3/tv/episode_group/{tv_episode_group_id}":{"protocol":"http","parameters":[{"name":"tv_episode_group_id","in":"path","schema":{"type":"string"},"required":true,"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let episode_group_ref01_data = Object.values(setup.data.existing.episode_group)[0] as any

    // LOAD
    const episode_group_ref01_ent = client.EpisodeGroup()
    const episode_group_ref01_match_dt0: any = {}
    episode_group_ref01_match_dt0.id = episode_group_ref01_data.id
    const episode_group_ref01_data_dt0 = (await episode_group_ref01_ent.load(episode_group_ref01_match_dt0)).data()
    assert(episode_group_ref01_data_dt0.id === episode_group_ref01_data.id)


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
      '../../../../.sdk/test/entity/episode_group/EpisodeGroupTestData.json')

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
    ['episode_group01','episode_group02','episode_group03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TMDB_TEST_EPISODE_GROUP_ENTID': idmap,
    'TMDB_TEST_LIVE': 'FALSE',
    'TMDB_TEST_EXPLAIN': 'FALSE',
    'TMDB_APIKEY': '',
  })

  idmap = env['TMDB_TEST_EPISODE_GROUP_ENTID']

  const live = 'TRUE' === env.TMDB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TMDB_TEST_EPISODE_GROUP_ENTID']
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
  
