

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


describe('MovieChangeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TMDB_TEST_LIVE=TRUE.
  afterEach(liveDelay('TMDB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TmdbSDK.test()
    const ent = testsdk.MovieChange()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = TmdbSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.MovieChange().list({"id":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TMDB_TEST_LIVE
    for (const op of []) {
      if (!live && maybeSkipControl(t, 'entityOp', 'movie_change.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0},"items":{"a":true,"h":"Items","n":"items","r":false,"t":"`$ARRAY`","key$":"items","index$":1},"key":{"a":true,"h":"Key","n":"key","r":false,"t":"`$STRING`","key$":"key","index$":2}},"id":{"field":"id","name":"id"},"name":"movie_change","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /3/movie/{movie_id}/changes","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"movie_id","r":true,"t":"`$INTEGER`","index$":0}],"query":[{"a":true,"k":"query","n":"end_date","or":"end_date","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"start_date","or":"start_date","r":false,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/3/movie/{movie_id}/changes","q":{"exist":["id"]},"r":{"param":{"movie_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"3"},{"lit":"movie"},{"var":"id"},{"lit":"changes"}],"t":{"req":"`reqdata`","res":"`body.changes`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"movie_change","name__orig":"movie_change","Name":"MovieChange","name_":"movie_change","name-":"movie-change","NAME":"MOVIE_CHANGE","index$":36}, {"active":true,"entity":"movie_change","key$":"BasicMovieChangeFlow","kind":"basic","name":"BasicMovieChangeFlow","param":{},"step":[{"a":false,"d":{},"i":{},"m":{"movie_id":"movie01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"movie_change_ref01"}}],"unreachable":true}]}, 'MovieChange', {"GET /3/movie/{movie_id}/changes":{"protocol":"http","parameters":[{"name":"movie_id","in":"path","schema":{"type":"integer","format":"int32"},"required":true,"index$":0},{"name":"end_date","in":"query","schema":{"type":"string","format":"date"},"index$":1},{"name":"page","in":"query","schema":{"type":"integer","format":"int32","default":1},"index$":2},{"name":"start_date","in":"query","schema":{"type":"string","format":"date"},"index$":3}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let movie_change_ref01_data = Object.values(setup.data.existing.movie_change)[0] as any

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
      '../../../../.sdk/test/entity/movie_change/MovieChangeTestData.json')

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
    ['movie_change01','movie_change02','movie_change03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TMDB_TEST_MOVIE_CHANGE_ENTID': idmap,
    'TMDB_TEST_LIVE': 'FALSE',
    'TMDB_TEST_EXPLAIN': 'FALSE',
    'TMDB_APIKEY': '',
  })

  idmap = env['TMDB_TEST_MOVIE_CHANGE_ENTID']

  const live = 'TRUE' === env.TMDB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TMDB_TEST_MOVIE_CHANGE_ENTID']
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
  
