

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


describe('TvSimilarEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TMDB_TEST_LIVE=TRUE.
  afterEach(liveDelay('TMDB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TmdbSDK.test()
    const ent = testsdk.TvSimilar()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = TmdbSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.TvSimilar().list({"id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TMDB_TEST_LIVE
    for (const op of []) {
      if (!live && maybeSkipControl(t, 'entityOp', 'tv_similar.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"adult":{"a":true,"h":"Adult","n":"adult","r":false,"t":"`$BOOLEAN`","key$":"adult","index$":0},"backdrop_path":{"a":true,"h":"Backdrop Path","n":"backdrop_path","r":false,"t":"`$STRING`","key$":"backdrop_path","index$":1},"first_air_date":{"a":true,"h":"First Air Date","n":"first_air_date","r":false,"t":"`$STRING`","key$":"first_air_date","index$":2},"genre_ids":{"a":true,"h":"Genre Ids","n":"genre_ids","r":false,"t":"`$ARRAY`","key$":"genre_ids","index$":3},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$INTEGER`","key$":"id","index$":4},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":5},"origin_country":{"a":true,"h":"Origin Country","n":"origin_country","r":false,"t":"`$ARRAY`","key$":"origin_country","index$":6},"original_language":{"a":true,"h":"Original Language","n":"original_language","r":false,"t":"`$STRING`","key$":"original_language","index$":7},"original_name":{"a":true,"h":"Original Name","n":"original_name","r":false,"t":"`$STRING`","key$":"original_name","index$":8},"overview":{"a":true,"h":"Overview","n":"overview","r":false,"t":"`$STRING`","key$":"overview","index$":9},"popularity":{"a":true,"h":"Popularity","n":"popularity","r":false,"t":"`$NUMBER`","key$":"popularity","index$":10},"poster_path":{"a":true,"h":"Poster Path","n":"poster_path","r":false,"t":"`$STRING`","key$":"poster_path","index$":11},"vote_average":{"a":true,"h":"Vote Average","n":"vote_average","r":false,"t":"`$INTEGER`","key$":"vote_average","index$":12},"vote_count":{"a":true,"h":"Vote Count","n":"vote_count","r":false,"t":"`$INTEGER`","key$":"vote_count","index$":13}},"id":{"field":"id","name":"id"},"name":"tv_similar","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /3/tv/{series_id}/similar","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"series_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"en-US","k":"query","n":"language","or":"language","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/3/tv/{series_id}/similar","q":{"exist":["id"]},"r":{"param":{"series_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"3"},{"lit":"tv"},{"var":"id"},{"lit":"similar"}],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"tv_similar","name__orig":"tv_similar","Name":"TvSimilar","name_":"tv_similar","name-":"tv-similar","NAME":"TV_SIMILAR","index$":96}, {"active":true,"entity":"tv_similar","key$":"BasicTvSimilarFlow","kind":"basic","name":"BasicTvSimilarFlow","param":{},"step":[{"a":false,"d":{},"i":{},"m":{"series_id":"series01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"tv_similar_ref01"}}],"unreachable":true}]}, 'TvSimilar', {"GET /3/tv/{series_id}/similar":{"protocol":"http","parameters":[{"name":"series_id","in":"path","schema":{"type":"string"},"required":true,"index$":0},{"name":"language","in":"query","schema":{"type":"string","default":"en-US"},"index$":1},{"name":"page","in":"query","schema":{"type":"integer","format":"int32","default":1},"index$":2}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let tv_similar_ref01_data = Object.values(setup.data.existing.tv_similar)[0] as any

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
      '../../../../.sdk/test/entity/tv_similar/TvSimilarTestData.json')

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
    ['tv_similar01','tv_similar02','tv_similar03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TMDB_TEST_TV_SIMILAR_ENTID': idmap,
    'TMDB_TEST_LIVE': 'FALSE',
    'TMDB_TEST_EXPLAIN': 'FALSE',
    'TMDB_APIKEY': '',
  })

  idmap = env['TMDB_TEST_TV_SIMILAR_ENTID']

  const live = 'TRUE' === env.TMDB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TMDB_TEST_TV_SIMILAR_ENTID']
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
  
