

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


describe('ValidateWithLoginEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TMDB_TEST_LIVE=TRUE.
  afterEach(liveDelay('TMDB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TmdbSDK.test()
    const ent = testsdk.ValidateWithLogin()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = TmdbSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.ValidateWithLogin().create({"RAW_BODY":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TMDB_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'validate_with_login.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"RAW_BODY":{"a":true,"fo":"json","h":"Raw Body","n":"RAW_BODY","r":true,"t":"`$STRING`","key$":"RAW_BODY","index$":0},"expires_at":{"a":true,"h":"Expires At","n":"expires_at","r":false,"t":"`$STRING`","key$":"expires_at","index$":1},"request_token":{"a":true,"h":"Request Token","n":"request_token","r":false,"t":"`$STRING`","key$":"request_token","index$":2},"success":{"a":true,"h":"Success","n":"success","r":false,"t":"`$BOOLEAN`","key$":"success","index$":3}},"name":"validate_with_login","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["RAW_BODY"],"co":{"id":"POST /3/authentication/token/validate_with_login","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/3/authentication/token/validate_with_login","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"3"},{"lit":"authentication"},{"lit":"token"},{"lit":"validate_with_login"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"validate_with_login","name__orig":"validate_with_login","Name":"ValidateWithLogin","name_":"validate_with_login","name-":"validate-with-login","NAME":"VALIDATE_WITH_LOGIN","index$":101}, {"active":true,"entity":"validate_with_login","key$":"BasicValidateWithLoginFlow","kind":"basic","name":"BasicValidateWithLoginFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"validate_with_login_ref01"},"m":{},"o":"create","s":[],"v":[]}]}, 'ValidateWithLogin', {"POST /3/authentication/token/validate_with_login":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","required":["RAW_BODY"],"properties":{"RAW_BODY":{"type":"string","format":"json","key$":"RAW_BODY"}},"index$":1},"examples":{"Request Example":{"value":{"username":"johnny_appleseed","password":"test123","request_token":"1531f1a558c8357ce8990cf887ff196e8f5402ec"}}}}}},"parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const validate_with_login_ref01_ent = client.ValidateWithLogin()
    let validate_with_login_ref01_data = setup.data.new.validate_with_login['validate_with_login_ref01']

    validate_with_login_ref01_data = (await validate_with_login_ref01_ent.create(validate_with_login_ref01_data)).data()
    assert(null != validate_with_login_ref01_data)


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
      '../../../../.sdk/test/entity/validate_with_login/ValidateWithLoginTestData.json')

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
    ['validate_with_login01','validate_with_login02','validate_with_login03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TMDB_TEST_VALIDATE_WITH_LOGIN_ENTID': idmap,
    'TMDB_TEST_LIVE': 'FALSE',
    'TMDB_TEST_EXPLAIN': 'FALSE',
    'TMDB_APIKEY': '',
  })

  idmap = env['TMDB_TEST_VALIDATE_WITH_LOGIN_ENTID']

  const live = 'TRUE' === env.TMDB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TMDB_TEST_VALIDATE_WITH_LOGIN_ENTID']
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
  
