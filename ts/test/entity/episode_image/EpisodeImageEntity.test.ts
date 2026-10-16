

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


describe('EpisodeImageEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TMDB_TEST_LIVE=TRUE.
  afterEach(liveDelay('TMDB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TmdbSDK.test()
    const ent = testsdk.EpisodeImage()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = TmdbSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.EpisodeImage().list({"episode_number":"x","season_id":1,"tv_id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TMDB_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'episode_image.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"aspect_ratio":{"a":true,"h":"Aspect Ratio","n":"aspect_ratio","r":false,"t":"`$NUMBER`","key$":"aspect_ratio","index$":0},"file_path":{"a":true,"h":"File Path","n":"file_path","r":false,"t":"`$STRING`","key$":"file_path","index$":1},"height":{"a":true,"h":"Height","n":"height","r":false,"t":"`$INTEGER`","key$":"height","index$":2},"iso_639_1":{"a":true,"h":"Iso 639 1","n":"iso_639_1","r":false,"t":"`$ANY`","key$":"iso_639_1","index$":3},"vote_average":{"a":true,"h":"Vote Average","n":"vote_average","r":false,"t":"`$NUMBER`","key$":"vote_average","index$":4},"vote_count":{"a":true,"h":"Vote Count","n":"vote_count","r":false,"t":"`$INTEGER`","key$":"vote_count","index$":5},"width":{"a":true,"h":"Width","n":"width","r":false,"t":"`$INTEGER`","key$":"width","index$":6}},"name":"episode_image","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /3/tv/{series_id}/season/{season_number}/episode/{episode_number}/images","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"episode_number","or":"episode_number","r":true,"t":"`$INTEGER`","index$":0},{"a":true,"k":"param","n":"season_id","or":"season_number","r":true,"t":"`$INTEGER`","index$":1},{"a":true,"k":"param","n":"tv_id","or":"series_id","r":true,"t":"`$INTEGER`","index$":2}],"query":[{"a":true,"k":"query","n":"include_image_language","or":"include_image_language","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"language","or":"language","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/3/tv/{series_id}/season/{season_number}/episode/{episode_number}/images","q":{"exist":["episode_number","season_id","tv_id"]},"r":{"param":{"season_number":"season_id","series_id":"tv_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"3"},{"lit":"tv"},{"var":"tv_id"},{"lit":"season"},{"var":"season_id"},{"lit":"episode"},{"var":"episode_number"},{"lit":"images"}],"t":{"req":"`reqdata`","res":"`body.stills`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.season","$.main.kit.entity.episode"]]},"key$":"episode_image","name__orig":"episode_image","Name":"EpisodeImage","name_":"episode_image","name-":"episode-image","NAME":"EPISODE_IMAGE","index$":21}, {"active":true,"entity":"episode_image","key$":"BasicEpisodeImageFlow","kind":"basic","name":"BasicEpisodeImageFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"episode_number":"episode_number01","season_id":"season01","tv_id":"tv01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"episode_image_ref01"}}]}]}, 'EpisodeImage', {"GET /3/tv/{series_id}/season/{season_number}/episode/{episode_number}/images":{"protocol":"http","parameters":[{"name":"series_id","in":"path","schema":{"type":"integer","format":"int32"},"required":true,"index$":0},{"name":"include_image_language","in":"query","description":"specify a comma separated list of ISO-639-1 values to query, for example: `en-US,null`","schema":{"type":"string"},"index$":1},{"name":"language","in":"query","schema":{"type":"string"},"index$":2},{"name":"season_number","in":"path","schema":{"type":"integer","format":"int32"},"required":true,"index$":3},{"name":"episode_number","in":"path","schema":{"type":"integer","format":"int32"},"required":true,"index$":4}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let episode_image_ref01_data = Object.values(setup.data.existing.episode_image)[0] as any

    // LIST
    const episode_image_ref01_ent = client.EpisodeImage()
    const episode_image_ref01_match: any = {}
    episode_image_ref01_match['episode_number'] = setup.idmap['episode_number01']
    episode_image_ref01_match['season_id'] = setup.idmap['season01']
    episode_image_ref01_match['tv_id'] = setup.idmap['tv01']

    const episode_image_ref01_list = (await episode_image_ref01_ent.list(episode_image_ref01_match)).map((e: any) => e.data())


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
      '../../../../.sdk/test/entity/episode_image/EpisodeImageTestData.json')

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
    ['episode_image01','episode_image02','episode_image03','season01','season02','season03','episode01','episode02','episode03','episode_number01','tv01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TMDB_TEST_EPISODE_IMAGE_ENTID': idmap,
    'TMDB_TEST_LIVE': 'FALSE',
    'TMDB_TEST_EXPLAIN': 'FALSE',
    'TMDB_APIKEY': '',
  })

  idmap = env['TMDB_TEST_EPISODE_IMAGE_ENTID']

  const live = 'TRUE' === env.TMDB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TMDB_TEST_EPISODE_IMAGE_ENTID']
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
  
