

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


describe('PersonExternalIdEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TMDB_TEST_LIVE=TRUE.
  afterEach(liveDelay('TMDB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TmdbSDK.test()
    const ent = testsdk.PersonExternalId()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = TmdbSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.PersonExternalId().load({"id":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TMDB_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'person_external_id.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"facebook_id":{"a":true,"h":"Facebook Id","n":"facebook_id","r":false,"t":"`$STRING`","key$":"facebook_id","index$":0},"freebase_id":{"a":true,"h":"Freebase Id","n":"freebase_id","r":false,"t":"`$STRING`","key$":"freebase_id","index$":1},"freebase_mid":{"a":true,"h":"Freebase Mid","n":"freebase_mid","r":false,"t":"`$STRING`","key$":"freebase_mid","index$":2},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$INTEGER`","key$":"id","index$":3},"imdb_id":{"a":true,"h":"Imdb Id","n":"imdb_id","r":false,"t":"`$STRING`","key$":"imdb_id","index$":4},"instagram_id":{"a":true,"h":"Instagram Id","n":"instagram_id","r":false,"t":"`$STRING`","key$":"instagram_id","index$":5},"tiktok_id":{"a":true,"h":"Tiktok Id","n":"tiktok_id","r":false,"t":"`$STRING`","key$":"tiktok_id","index$":6},"tvrage_id":{"a":true,"h":"Tvrage Id","n":"tvrage_id","r":false,"t":"`$INTEGER`","key$":"tvrage_id","index$":7},"twitter_id":{"a":true,"h":"Twitter Id","n":"twitter_id","r":false,"t":"`$STRING`","key$":"twitter_id","index$":8},"wikidata_id":{"a":true,"h":"Wikidata Id","n":"wikidata_id","r":false,"t":"`$STRING`","key$":"wikidata_id","index$":9},"youtube_id":{"a":true,"h":"Youtube Id","n":"youtube_id","r":false,"t":"`$STRING`","key$":"youtube_id","index$":10}},"id":{"field":"id","name":"id"},"name":"person_external_id","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /3/person/{person_id}/external_ids","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"person_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/3/person/{person_id}/external_ids","q":{"exist":["id"]},"r":{"param":{"person_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"3"},{"lit":"person"},{"var":"id"},{"lit":"external_ids"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"person_external_id","name__orig":"person_external_id","Name":"PersonExternalId","name_":"person_external_id","name-":"person-external-id","NAME":"PERSON_EXTERNAL_ID","index$":59}, {"active":true,"entity":"person_external_id","key$":"BasicPersonExternalIdFlow","kind":"basic","name":"BasicPersonExternalIdFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"person_external_id_ref01","srcdatavar":"person_external_id_ref01_data","suffix":"_dt0"},"m":{"id":"person_external_id01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-person_external_id_ref01"}}]}]}, 'PersonExternalId', {"GET /3/person/{person_id}/external_ids":{"protocol":"http","parameters":[{"name":"person_id","in":"path","schema":{"type":"integer","format":"int32"},"required":true,"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let person_external_id_ref01_data = Object.values(setup.data.existing.person_external_id)[0] as any

    // LOAD
    const person_external_id_ref01_ent = client.PersonExternalId()
    const person_external_id_ref01_match_dt0: any = {}
    person_external_id_ref01_match_dt0.id = person_external_id_ref01_data.id
    const person_external_id_ref01_data_dt0 = (await person_external_id_ref01_ent.load(person_external_id_ref01_match_dt0)).data()
    assert(person_external_id_ref01_data_dt0.id === person_external_id_ref01_data.id)


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
      '../../../../.sdk/test/entity/person_external_id/PersonExternalIdTestData.json')

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
    ['person_external_id01','person_external_id02','person_external_id03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TMDB_TEST_PERSON_EXTERNAL_ID_ENTID': idmap,
    'TMDB_TEST_LIVE': 'FALSE',
    'TMDB_TEST_EXPLAIN': 'FALSE',
    'TMDB_APIKEY': '',
  })

  idmap = env['TMDB_TEST_PERSON_EXTERNAL_ID_ENTID']

  const live = 'TRUE' === env.TMDB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TMDB_TEST_PERSON_EXTERNAL_ID_ENTID']
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
  
