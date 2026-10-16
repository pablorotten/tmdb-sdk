

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


describe('TvnEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TMDB_TEST_LIVE=TRUE.
  afterEach(liveDelay('TMDB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TmdbSDK.test()
    const ent = testsdk.Tvn()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('tvn hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of TmdbSDK.test(offline).Tvn().stream('list')) { }
    }, /offline/)

    for await (const _item of TmdbSDK.test(offline).Tvn()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = TmdbSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.Tvn().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of TmdbSDK.test().Tvn().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new TmdbSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.Tvn().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.Tvn().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = TmdbSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Tvn().list({"first_air_date_year":"x","query":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TMDB_TEST_LIVE
    for (const op of ['create', 'list', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'tvn.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"RAW_BODY":{"a":true,"fo":"json","h":"Raw Body","n":"RAW_BODY","r":true,"t":"`$STRING`","key$":"RAW_BODY","index$":0},"adult":{"a":true,"h":"Adult","n":"adult","r":false,"t":"`$BOOLEAN`","key$":"adult","index$":1},"backdrop_path":{"a":true,"h":"Backdrop Path","n":"backdrop_path","r":false,"t":"`$STRING`","key$":"backdrop_path","index$":2},"created_by":{"a":true,"h":"Created By","n":"created_by","r":false,"t":"`$ARRAY`","key$":"created_by","index$":3},"display_priorities":{"a":true,"h":"Display Priorities","n":"display_priorities","r":false,"t":"`$OBJECT`","key$":"display_priorities","index$":4},"display_priority":{"a":true,"h":"Display Priority","n":"display_priority","r":false,"t":"`$INTEGER`","key$":"display_priority","index$":5},"episode_run_time":{"a":true,"h":"Episode Run Time","n":"episode_run_time","r":false,"t":"`$ARRAY`","key$":"episode_run_time","index$":6},"first_air_date":{"a":true,"h":"First Air Date","n":"first_air_date","r":false,"t":"`$STRING`","key$":"first_air_date","index$":7},"genre_ids":{"a":true,"h":"Genre Ids","n":"genre_ids","r":false,"t":"`$ARRAY`","key$":"genre_ids","index$":8},"genres":{"a":true,"h":"Genres","n":"genres","r":false,"t":"`$ARRAY`","key$":"genres","index$":9},"homepage":{"a":true,"h":"Homepage","n":"homepage","r":false,"t":"`$STRING`","key$":"homepage","index$":10},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$INTEGER`","key$":"id","index$":11},"in_production":{"a":true,"h":"In Production","n":"in_production","r":false,"t":"`$BOOLEAN`","key$":"in_production","index$":12},"languages":{"a":true,"h":"Languages","n":"languages","r":false,"t":"`$ARRAY`","key$":"languages","index$":13},"last_air_date":{"a":true,"h":"Last Air Date","n":"last_air_date","r":false,"t":"`$STRING`","key$":"last_air_date","index$":14},"last_episode_to_air":{"a":true,"h":"Last Episode To Air","n":"last_episode_to_air","r":false,"t":"`$OBJECT`","key$":"last_episode_to_air","index$":15},"logo_path":{"a":true,"h":"Logo Path","n":"logo_path","r":false,"t":"`$STRING`","key$":"logo_path","index$":16},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":17},"networks":{"a":true,"h":"Networks","n":"networks","r":false,"t":"`$ARRAY`","key$":"networks","index$":18},"next_episode_to_air":{"a":true,"h":"Next Episode To Air","n":"next_episode_to_air","r":false,"t":"`$ANY`","key$":"next_episode_to_air","index$":19},"number_of_episodes":{"a":true,"h":"Number Of Episodes","n":"number_of_episodes","r":false,"t":"`$INTEGER`","key$":"number_of_episodes","index$":20},"number_of_seasons":{"a":true,"h":"Number Of Seasons","n":"number_of_seasons","r":false,"t":"`$INTEGER`","key$":"number_of_seasons","index$":21},"origin_country":{"a":true,"h":"Origin Country","n":"origin_country","r":false,"t":"`$ARRAY`","key$":"origin_country","index$":22},"original_language":{"a":true,"h":"Original Language","n":"original_language","r":false,"t":"`$STRING`","key$":"original_language","index$":23},"original_name":{"a":true,"h":"Original Name","n":"original_name","r":false,"t":"`$STRING`","key$":"original_name","index$":24},"overview":{"a":true,"h":"Overview","n":"overview","r":false,"t":"`$STRING`","key$":"overview","index$":25},"page":{"a":true,"h":"Page","n":"page","r":false,"t":"`$INTEGER`","key$":"page","index$":26},"popularity":{"a":true,"h":"Popularity","n":"popularity","r":false,"t":"`$NUMBER`","key$":"popularity","index$":27},"poster_path":{"a":true,"h":"Poster Path","n":"poster_path","r":false,"t":"`$STRING`","key$":"poster_path","index$":28},"production_companies":{"a":true,"h":"Production Companies","n":"production_companies","r":false,"t":"`$ARRAY`","key$":"production_companies","index$":29},"production_countries":{"a":true,"h":"Production Countries","n":"production_countries","r":false,"t":"`$ARRAY`","key$":"production_countries","index$":30},"provider_id":{"a":true,"h":"Provider Id","n":"provider_id","r":false,"t":"`$INTEGER`","key$":"provider_id","index$":31},"provider_name":{"a":true,"h":"Provider Name","n":"provider_name","r":false,"t":"`$STRING`","key$":"provider_name","index$":32},"rating":{"a":true,"h":"Rating","n":"rating","r":false,"t":"`$INTEGER`","key$":"rating","index$":33},"results":{"a":true,"h":"Results","n":"results","r":false,"t":"`$ARRAY`","key$":"results","index$":34},"seasons":{"a":true,"h":"Seasons","n":"seasons","r":false,"t":"`$ARRAY`","key$":"seasons","index$":35},"spoken_languages":{"a":true,"h":"Spoken Languages","n":"spoken_languages","r":false,"t":"`$ARRAY`","key$":"spoken_languages","index$":36},"status":{"a":true,"h":"Status","n":"status","r":false,"t":"`$STRING`","key$":"status","index$":37},"status_code":{"a":true,"h":"Status Code","n":"status_code","r":false,"t":"`$INTEGER`","key$":"status_code","index$":38},"status_message":{"a":true,"h":"Status Message","n":"status_message","r":false,"t":"`$STRING`","key$":"status_message","index$":39},"tagline":{"a":true,"h":"Tagline","n":"tagline","r":false,"t":"`$STRING`","key$":"tagline","index$":40},"total_pages":{"a":true,"h":"Total Pages","n":"total_pages","r":false,"t":"`$INTEGER`","key$":"total_pages","index$":41},"total_results":{"a":true,"h":"Total Results","n":"total_results","r":false,"t":"`$INTEGER`","key$":"total_results","index$":42},"type":{"a":true,"h":"Type","n":"type","r":false,"t":"`$STRING`","key$":"type","index$":43},"vote_average":{"a":true,"h":"Vote Average","n":"vote_average","r":false,"t":"`$NUMBER`","key$":"vote_average","index$":44},"vote_count":{"a":true,"h":"Vote Count","n":"vote_count","r":false,"t":"`$INTEGER`","key$":"vote_count","index$":45}},"id":{"field":"id","name":"id"},"name":"tvn","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["RAW_BODY"],"co":{"id":"POST /3/tv/{series_id}/rating","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"application/json;charset=utf-8","k":"header","n":"content_type","or":"Content-Type","r":true,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"series_id","or":"series_id","r":true,"t":"`$INTEGER`","index$":0}],"query":[{"a":true,"k":"query","n":"guest_session_id","or":"guest_session_id","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"session_id","or":"session_id","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/3/tv/{series_id}/rating","q":{"exist":["content_type","series_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"3"},{"lit":"tv"},{"var":"series_id"},{"lit":"rating"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /3/account/{account_id}/favorite/tv","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$INTEGER`","index$":0}],"query":[{"a":true,"ex":"en-US","k":"query","n":"language","or":"language","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"session_id","or":"session_id","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":"created_at.asc","k":"query","n":"sort_by","or":"sort_by","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/3/account/{account_id}/favorite/tv","q":{"exist":["account_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"3"},{"lit":"account"},{"var":"account_id"},{"lit":"favorite"},{"lit":"tv"}],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":0},{"a":true,"co":{"id":"GET /3/account/{account_id}/rated/tv","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$INTEGER`","index$":0}],"query":[{"a":true,"ex":"en-US","k":"query","n":"language","or":"language","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"session_id","or":"session_id","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":"created_at.asc","k":"query","n":"sort_by","or":"sort_by","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/3/account/{account_id}/rated/tv","q":{"exist":["account_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"3"},{"lit":"account"},{"var":"account_id"},{"lit":"rated"},{"lit":"tv"}],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":1},{"a":true,"co":{"id":"GET /3/account/{account_id}/watchlist/tv","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":null,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$INTEGER`","index$":0}],"query":[{"a":true,"ex":"en-US","k":"query","n":"language","or":"language","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"session_id","or":"session_id","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":"created_at.asc","k":"query","n":"sort_by","or":"sort_by","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/3/account/{account_id}/watchlist/tv","q":{"exist":["account_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"3"},{"lit":"account"},{"var":"account_id"},{"lit":"watchlist"},{"lit":"tv"}],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":2},{"a":true,"co":{"id":"GET /3/guest_session/{guest_session_id}/rated/tv","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"guest_session_id","or":"guest_session_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"en-US","k":"query","n":"language","or":"language","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":"created_at.asc","k":"query","n":"sort_by","or":"sort_by","r":false,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/3/guest_session/{guest_session_id}/rated/tv","q":{"exist":["guest_session_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"3"},{"lit":"guest_session"},{"var":"guest_session_id"},{"lit":"rated"},{"lit":"tv"}],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":3},{"a":true,"co":{"id":"GET /3/search/tv","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"first_air_date_year","or":"first_air_date_year","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":false,"k":"query","n":"include_adult","or":"include_adult","r":false,"t":"`$BOOLEAN`","index$":1},{"a":true,"ex":"en-US","k":"query","n":"language","or":"language","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"k":"query","n":"query","or":"query","r":true,"t":"`$STRING`","index$":4},{"a":true,"k":"query","n":"year","or":"year","r":false,"t":"`$INTEGER`","index$":5}]},"k":"http","m":"GET","o":"/3/search/tv","q":{"exist":["query"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"3"},{"lit":"search"},{"lit":"tv"}],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":4},{"a":true,"co":{"id":"GET /3/discover/tv","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"air_date_gte","or":"air_date.gte","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"air_date_lte","or":"air_date.lte","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"first_air_date_gte","or":"first_air_date.gte","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"first_air_date_lte","or":"first_air_date.lte","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"first_air_date_year","or":"first_air_date_year","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"ex":false,"k":"query","n":"include_adult","or":"include_adult","r":false,"t":"`$BOOLEAN`","index$":5},{"a":true,"ex":false,"k":"query","n":"include_null_first_air_date","or":"include_null_first_air_dates","r":false,"t":"`$BOOLEAN`","index$":6},{"a":true,"ex":"en-US","k":"query","n":"language","or":"language","r":false,"t":"`$STRING`","index$":7},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":8},{"a":true,"k":"query","n":"screened_theatrically","or":"screened_theatrically","r":false,"t":"`$BOOLEAN`","index$":9},{"a":true,"ex":"popularity.desc","k":"query","n":"sort_by","or":"sort_by","r":false,"t":"`$STRING`","index$":10},{"a":true,"k":"query","n":"timezone","or":"timezone","r":false,"t":"`$STRING`","index$":11},{"a":true,"k":"query","n":"vote_average_gte","or":"vote_average.gte","r":false,"t":"`$NUMBER`","index$":12},{"a":true,"k":"query","n":"vote_average_lte","or":"vote_average.lte","r":false,"t":"`$NUMBER`","index$":13},{"a":true,"k":"query","n":"vote_count_gte","or":"vote_count.gte","r":false,"t":"`$NUMBER`","index$":14},{"a":true,"k":"query","n":"vote_count_lte","or":"vote_count.lte","r":false,"t":"`$NUMBER`","index$":15},{"a":true,"k":"query","n":"watch_region","or":"watch_region","r":false,"t":"`$STRING`","index$":16},{"a":true,"k":"query","n":"with_company","or":"with_companies","r":false,"t":"`$STRING`","index$":17},{"a":true,"k":"query","n":"with_genre","or":"with_genres","r":false,"t":"`$STRING`","index$":18},{"a":true,"k":"query","n":"with_keyword","or":"with_keywords","r":false,"t":"`$STRING`","index$":19},{"a":true,"k":"query","n":"with_network","or":"with_networks","r":false,"t":"`$INTEGER`","index$":20},{"a":true,"k":"query","n":"with_origin_country","or":"with_origin_country","r":false,"t":"`$STRING`","index$":21},{"a":true,"k":"query","n":"with_original_language","or":"with_original_language","r":false,"t":"`$STRING`","index$":22},{"a":true,"k":"query","n":"with_runtime_gte","or":"with_runtime.gte","r":false,"t":"`$INTEGER`","index$":23},{"a":true,"k":"query","n":"with_runtime_lte","or":"with_runtime.lte","r":false,"t":"`$INTEGER`","index$":24},{"a":true,"k":"query","n":"with_status","or":"with_status","r":false,"t":"`$STRING`","index$":25},{"a":true,"k":"query","n":"with_type","or":"with_type","r":false,"t":"`$STRING`","index$":26},{"a":true,"k":"query","n":"with_watch_monetization_type","or":"with_watch_monetization_types","r":false,"t":"`$STRING`","index$":27},{"a":true,"k":"query","n":"with_watch_provider","or":"with_watch_providers","r":false,"t":"`$STRING`","index$":28},{"a":true,"k":"query","n":"without_company","or":"without_companies","r":false,"t":"`$STRING`","index$":29},{"a":true,"k":"query","n":"without_genre","or":"without_genres","r":false,"t":"`$STRING`","index$":30},{"a":true,"k":"query","n":"without_keyword","or":"without_keywords","r":false,"t":"`$STRING`","index$":31},{"a":true,"k":"query","n":"without_watch_provider","or":"without_watch_providers","r":false,"t":"`$STRING`","index$":32}]},"k":"http","m":"GET","o":"/3/discover/tv","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"3"},{"lit":"discover"},{"lit":"tv"}],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":5},{"a":true,"co":{"id":"GET /3/watch/providers/tv","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"en-US","k":"query","n":"language","or":"language","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"watch_region","or":"watch_region","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/3/watch/providers/tv","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"3"},{"lit":"watch"},{"lit":"providers"},{"lit":"tv"}],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":6}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /3/tv/{series_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"series_id","or":"series_id","r":true,"t":"`$INTEGER`","index$":0}],"query":[{"a":true,"k":"query","n":"append_to_response","or":"append_to_response","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"en-US","k":"query","n":"language","or":"language","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/3/tv/{series_id}","q":{"exist":["series_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"3"},{"lit":"tv"},{"var":"series_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /3/trending/tv/{time_window}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"day","k":"param","n":"time_window","or":"time_window","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"en-US","k":"query","n":"language","or":"language","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/3/trending/tv/{time_window}","q":{"exist":["time_window"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"3"},{"lit":"trending"},{"lit":"tv"},{"var":"time_window"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /3/tv/{series_id}/rating","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"application/json;charset=utf-8","k":"header","n":"content_type","or":"Content-Type","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"series_id","or":"series_id","r":true,"t":"`$INTEGER`","index$":0}],"query":[{"a":true,"k":"query","n":"guest_session_id","or":"guest_session_id","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"session_id","or":"session_id","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/3/tv/{series_id}/rating","q":{"exist":["series_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"3"},{"lit":"tv"},{"var":"series_id"},{"lit":"rating"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[["$.main.kit.entity.account"]]},"key$":"tvn","name__orig":"tvn","Name":"Tvn","name_":"tvn","name-":"tvn","NAME":"TVN","index$":99}, {"active":true,"entity":"tvn","key$":"BasicTvnFlow","kind":"basic","name":"BasicTvnFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"tvn_ref01"},"m":{"account_id":"account01","guest_session_id":"guest_session01","series_id":"series01"},"o":"create","s":[],"v":[]},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"tvn_ref01"}}]},{"a":true,"d":{},"i":{"ref":"tvn_ref01","srcdatavar":"tvn_ref01_data","suffix":"_dt0"},"m":{"id":"tvn01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-tvn_ref01"}}]},{"a":true,"d":{},"i":{"ref":"tvn_ref01","suffix":"_rm0"},"m":{"id":"tvn01"},"o":"remove","s":[],"v":[]},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"tvn_ref01"}}]}]}, 'Tvn', {"POST /3/tv/{series_id}/rating":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","required":["RAW_BODY"],"properties":{"RAW_BODY":{"type":"string","format":"json","key$":"RAW_BODY"}},"index$":1},"examples":{"Request Example":{"value":{"value":8.5}}}}}},"parameters":[{"name":"series_id","in":"path","schema":{"type":"integer","format":"int32"},"required":true,"index$":0},{"name":"guest_session_id","in":"query","schema":{"type":"string"},"index$":1},{"name":"session_id","in":"query","schema":{"type":"string"},"index$":2},{"name":"Content-Type","in":"header","required":true,"schema":{"type":"string","default":"application/json;charset=utf-8"},"index$":3}]},"GET /3/account/{account_id}/favorite/tv":{"protocol":"http","parameters":[{"name":"account_id","in":"path","schema":{"type":"integer","format":"int32","default":null},"required":true,"index$":0},{"name":"language","in":"query","schema":{"type":"string","default":"en-US"},"index$":1},{"name":"page","in":"query","schema":{"type":"integer","format":"int32","default":1},"index$":2},{"name":"session_id","in":"query","schema":{"type":"string"},"index$":3},{"name":"sort_by","in":"query","schema":{"type":"string","enum":["created_at.asc","created_at.desc"],"default":"created_at.asc"},"index$":4}]},"GET /3/account/{account_id}/rated/tv":{"protocol":"http","parameters":[{"name":"account_id","in":"path","schema":{"type":"integer","format":"int32","default":null},"required":true,"index$":0},{"name":"language","in":"query","schema":{"type":"string","default":"en-US"},"index$":1},{"name":"page","in":"query","schema":{"type":"integer","format":"int32","default":1},"index$":2},{"name":"session_id","in":"query","schema":{"type":"string"},"index$":3},{"name":"sort_by","in":"query","schema":{"type":"string","enum":["created_at.asc","created_at.desc"],"default":"created_at.asc"},"index$":4}]},"GET /3/account/{account_id}/watchlist/tv":{"protocol":"http","parameters":[{"name":"account_id","in":"path","schema":{"type":"integer","format":"int32","default":null},"required":true,"index$":0},{"name":"language","in":"query","schema":{"type":"string","default":"en-US"},"index$":1},{"name":"page","in":"query","schema":{"type":"integer","format":"int32","default":1},"index$":2},{"name":"session_id","in":"query","schema":{"type":"string"},"index$":3},{"name":"sort_by","in":"query","schema":{"type":"string","enum":["created_at.asc","created_at.desc"],"default":"created_at.asc"},"index$":4}]},"GET /3/guest_session/{guest_session_id}/rated/tv":{"protocol":"http","parameters":[{"name":"guest_session_id","in":"path","schema":{"type":"string"},"required":true,"index$":0},{"name":"language","in":"query","schema":{"type":"string","default":"en-US"},"index$":1},{"name":"page","in":"query","schema":{"type":"integer","format":"int32","default":1},"index$":2},{"name":"sort_by","in":"query","schema":{"type":"string","enum":["created_at.asc","created_at.desc"],"default":"created_at.asc"},"index$":3}]},"GET /3/search/tv":{"protocol":"http","parameters":[{"name":"query","in":"query","required":true,"schema":{"type":"string"},"index$":0},{"name":"first_air_date_year","in":"query","description":"Search only the first air date. Valid values are: 1000..9999","schema":{"type":"integer","format":"int32"},"index$":1},{"name":"include_adult","in":"query","schema":{"type":"boolean","default":false},"index$":2},{"name":"language","in":"query","schema":{"type":"string","default":"en-US"},"index$":3},{"name":"page","in":"query","schema":{"type":"integer","format":"int32","default":1},"index$":4},{"name":"year","in":"query","description":"Search the first air date and all episode air dates. Valid values are: 1000..9999","schema":{"type":"integer","format":"int32"},"index$":5}]},"GET /3/discover/tv":{"protocol":"http","parameters":[{"name":"air_date.gte","in":"query","schema":{"type":"string","format":"date"},"index$":0},{"name":"air_date.lte","in":"query","schema":{"type":"string","format":"date"},"index$":1},{"name":"first_air_date_year","in":"query","schema":{"type":"integer","format":"int32"},"index$":2},{"name":"first_air_date.gte","in":"query","schema":{"type":"string","format":"date"},"index$":3},{"name":"first_air_date.lte","in":"query","schema":{"type":"string","format":"date"},"index$":4},{"name":"include_adult","in":"query","schema":{"type":"boolean","default":false},"index$":5},{"name":"include_null_first_air_dates","in":"query","schema":{"type":"boolean","default":false},"index$":6},{"name":"language","in":"query","schema":{"type":"string","default":"en-US"},"index$":7},{"name":"page","in":"query","schema":{"type":"integer","format":"int32","default":1},"index$":8},{"name":"screened_theatrically","in":"query","schema":{"type":"boolean"},"index$":9},{"name":"sort_by","in":"query","schema":{"type":"string","enum":["first_air_date.asc","first_air_date.desc","name.asc","name.desc","original_name.asc","original_name.desc","popularity.asc","popularity.desc","vote_average.asc","vote_average.desc","vote_count.asc","vote_count.desc"],"default":"popularity.desc"},"index$":10},{"name":"timezone","in":"query","schema":{"type":"string"},"index$":11},{"name":"vote_average.gte","in":"query","schema":{"type":"number","format":"float"},"index$":12},{"name":"vote_average.lte","in":"query","schema":{"type":"number","format":"float"},"index$":13},{"name":"vote_count.gte","in":"query","schema":{"type":"number","format":"float"},"index$":14},{"name":"vote_count.lte","in":"query","schema":{"type":"number","format":"float"},"index$":15},{"name":"watch_region","in":"query","description":"use in conjunction with `with_watch_monetization_types ` or `with_watch_providers `","schema":{"type":"string"},"index$":16},{"name":"with_companies","in":"query","description":"can be a comma (`AND`) or pipe (`OR`) separated query","schema":{"type":"string"},"index$":17},{"name":"with_genres","in":"query","description":"can be a comma (`AND`) or pipe (`OR`) separated query","schema":{"type":"string"},"index$":18},{"name":"with_keywords","in":"query","description":"can be a comma (`AND`) or pipe (`OR`) separated query","schema":{"type":"string"},"index$":19},{"name":"with_networks","in":"query","schema":{"type":"integer","format":"int32"},"index$":20},{"name":"with_origin_country","in":"query","schema":{"type":"string"},"index$":21},{"name":"with_original_language","in":"query","schema":{"type":"string"},"index$":22},{"name":"with_runtime.gte","in":"query","schema":{"type":"integer","format":"int32"},"index$":23},{"name":"with_runtime.lte","in":"query","schema":{"type":"integer","format":"int32"},"index$":24},{"name":"with_status","in":"query","description":"possible values are: [0, 1, 2, 3, 4, 5], can be a comma (`AND`) or pipe (`OR`) separated query","schema":{"type":"string"},"index$":25},{"name":"with_watch_monetization_types","in":"query","description":"possible values are: [flatrate, free, ads, rent, buy] use in conjunction with `watch_region`, can be a comma (`AND`) or pipe (`OR`) separated query","schema":{"type":"string"},"index$":26},{"name":"with_watch_providers","in":"query","description":"use in conjunction with `watch_region`, can be a comma (`AND`) or pipe (`OR`) separated query","schema":{"type":"string"},"index$":27},{"name":"without_companies","in":"query","schema":{"type":"string"},"index$":28},{"name":"without_genres","in":"query","schema":{"type":"string"},"index$":29},{"name":"without_keywords","in":"query","schema":{"type":"string"},"index$":30},{"name":"without_watch_providers","in":"query","schema":{"type":"string"},"index$":31},{"name":"with_type","in":"query","description":"possible values are: [0, 1, 2, 3, 4, 5, 6], can be a comma (`AND`) or pipe (`OR`) separated query","schema":{"type":"string"},"index$":32}]},"GET /3/watch/providers/tv":{"protocol":"http","parameters":[{"name":"language","in":"query","schema":{"type":"string","default":"en-US"},"index$":0},{"name":"watch_region","in":"query","schema":{"type":"string"},"index$":1}]},"GET /3/tv/{series_id}":{"protocol":"http","parameters":[{"name":"series_id","in":"path","schema":{"type":"integer","format":"int32"},"required":true,"index$":0},{"name":"append_to_response","in":"query","description":"comma separated list of endpoints within this namespace, 20 items max","schema":{"type":"string"},"index$":1},{"name":"language","in":"query","schema":{"type":"string","default":"en-US"},"index$":2}]},"GET /3/trending/tv/{time_window}":{"protocol":"http","parameters":[{"name":"time_window","in":"path","schema":{"type":"string","enum":["day","week"],"default":"day"},"required":true,"index$":0},{"name":"language","in":"query","description":"`ISO-639-1`-`ISO-3166-1` code","schema":{"type":"string","default":"en-US"},"index$":1}]},"DELETE /3/tv/{series_id}/rating":{"protocol":"http","parameters":[{"name":"series_id","in":"path","schema":{"type":"integer","format":"int32"},"required":true,"index$":0},{"name":"Content-Type","in":"header","schema":{"type":"string","default":"application/json;charset=utf-8"},"index$":1},{"name":"guest_session_id","in":"query","schema":{"type":"string"},"index$":2},{"name":"session_id","in":"query","schema":{"type":"string"},"index$":3}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const tvn_ref01_ent = client.Tvn()
    let tvn_ref01_data = setup.data.new.tvn['tvn_ref01']
    tvn_ref01_data['account_id'] = setup.idmap['account01']
    tvn_ref01_data['guest_session_id'] = setup.idmap['guest_session01']
    tvn_ref01_data['series_id'] = setup.idmap['series01']

    tvn_ref01_data = (await tvn_ref01_ent.create(tvn_ref01_data)).data()
    assert(null != tvn_ref01_data.id)


    // LIST
    const tvn_ref01_match: any = {}

    const tvn_ref01_list = (await tvn_ref01_ent.list(tvn_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(tvn_ref01_list, { id: tvn_ref01_data.id })))


    // LOAD
    const tvn_ref01_match_dt0: any = {}
    tvn_ref01_match_dt0.id = tvn_ref01_data.id
    const tvn_ref01_data_dt0 = (await tvn_ref01_ent.load(tvn_ref01_match_dt0)).data()
    assert(tvn_ref01_data_dt0.id === tvn_ref01_data.id)


    // REMOVE
    const tvn_ref01_match_rm0: any = { id: tvn_ref01_data.id }
    await tvn_ref01_ent.remove(tvn_ref01_match_rm0)
  

    // LIST
    const tvn_ref01_match_rt0: any = {}

    const tvn_ref01_list_rt0 = (await tvn_ref01_ent.list(tvn_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(tvn_ref01_list_rt0, { id: tvn_ref01_data.id })))


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
      '../../../../.sdk/test/entity/tvn/TvnTestData.json')

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
    ['tvn01','tvn02','tvn03','account01','account02','account03','guest_session01','series01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TMDB_TEST_TVN_ENTID': idmap,
    'TMDB_TEST_LIVE': 'FALSE',
    'TMDB_TEST_EXPLAIN': 'FALSE',
    'TMDB_APIKEY': '',
  })

  idmap = env['TMDB_TEST_TVN_ENTID']

  const live = 'TRUE' === env.TMDB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TMDB_TEST_TVN_ENTID']
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
  
