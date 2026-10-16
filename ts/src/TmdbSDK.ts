// Tmdb Ts SDK

import { AccountEntity } from './entity/AccountEntity'
import { AccountListEntity } from './entity/AccountListEntity'
import { AiringTodayEntity } from './entity/AiringTodayEntity'
import { AllEntity } from './entity/AllEntity'
import { AuthenticationEntity } from './entity/AuthenticationEntity'
import { ChangeEntity } from './entity/ChangeEntity'
import { CollectionEntity } from './entity/CollectionEntity'
import { CollectionImageEntity } from './entity/CollectionImageEntity'
import { CollectionTranslationEntity } from './entity/CollectionTranslationEntity'
import { CompanyEntity } from './entity/CompanyEntity'
import { CompanyAlternativeNameEntity } from './entity/CompanyAlternativeNameEntity'
import { CompanyImageEntity } from './entity/CompanyImageEntity'
import { ConfigurationEntity } from './entity/ConfigurationEntity'
import { CountryEntity } from './entity/CountryEntity'
import { CreditEntity } from './entity/CreditEntity'
import { EpisodeEntity } from './entity/EpisodeEntity'
import { EpisodeAccountStateEntity } from './entity/EpisodeAccountStateEntity'
import { EpisodeChangeEntity } from './entity/EpisodeChangeEntity'
import { EpisodeCreditEntity } from './entity/EpisodeCreditEntity'
import { EpisodeExternalIdEntity } from './entity/EpisodeExternalIdEntity'
import { EpisodeGroupEntity } from './entity/EpisodeGroupEntity'
import { EpisodeImageEntity } from './entity/EpisodeImageEntity'
import { EpisodeTranslationEntity } from './entity/EpisodeTranslationEntity'
import { EpisodeVideoEntity } from './entity/EpisodeVideoEntity'
import { FavoriteEntity } from './entity/FavoriteEntity'
import { FindEntity } from './entity/FindEntity'
import { JobEntity } from './entity/JobEntity'
import { KeywordEntity } from './entity/KeywordEntity'
import { KeywordMovieEntity } from './entity/KeywordMovieEntity'
import { LanguageEntity } from './entity/LanguageEntity'
import { LatestEntity } from './entity/LatestEntity'
import { ListEntity } from './entity/ListEntity'
import { ListItemStatusEntity } from './entity/ListItemStatusEntity'
import { MovieEntity } from './entity/MovieEntity'
import { MovieAccountStateEntity } from './entity/MovieAccountStateEntity'
import { MovieAlternativeTitleEntity } from './entity/MovieAlternativeTitleEntity'
import { MovieChangeEntity } from './entity/MovieChangeEntity'
import { MovieCreditEntity } from './entity/MovieCreditEntity'
import { MovieExternalIdEntity } from './entity/MovieExternalIdEntity'
import { MovieImageEntity } from './entity/MovieImageEntity'
import { MovieKeywordEntity } from './entity/MovieKeywordEntity'
import { MovieListEntity } from './entity/MovieListEntity'
import { MovieRecommendationEntity } from './entity/MovieRecommendationEntity'
import { MovieReleaseDateEntity } from './entity/MovieReleaseDateEntity'
import { MovieReviewEntity } from './entity/MovieReviewEntity'
import { MovieSimilarEntity } from './entity/MovieSimilarEntity'
import { MovieTranslationEntity } from './entity/MovieTranslationEntity'
import { MovieVideoEntity } from './entity/MovieVideoEntity'
import { MultiEntity } from './entity/MultiEntity'
import { N4nEntity } from './entity/N4nEntity'
import { NetworkEntity } from './entity/NetworkEntity'
import { NetworkAlternativeNameEntity } from './entity/NetworkAlternativeNameEntity'
import { NetworkImageEntity } from './entity/NetworkImageEntity'
import { NewEntity } from './entity/NewEntity'
import { NowPlayingEntity } from './entity/NowPlayingEntity'
import { OnTheAirEntity } from './entity/OnTheAirEntity'
import { PersonEntity } from './entity/PersonEntity'
import { PersonChangeEntity } from './entity/PersonChangeEntity'
import { PersonCombinedCreditEntity } from './entity/PersonCombinedCreditEntity'
import { PersonExternalIdEntity } from './entity/PersonExternalIdEntity'
import { PersonImageEntity } from './entity/PersonImageEntity'
import { PersonMovieCreditEntity } from './entity/PersonMovieCreditEntity'
import { PersonTaggedImageEntity } from './entity/PersonTaggedImageEntity'
import { PersonTranslationEntity } from './entity/PersonTranslationEntity'
import { PersonTvCreditEntity } from './entity/PersonTvCreditEntity'
import { PopularEntity } from './entity/PopularEntity'
import { PrimaryTranslationEntity } from './entity/PrimaryTranslationEntity'
import { ProviderEntity } from './entity/ProviderEntity'
import { RegionEntity } from './entity/RegionEntity'
import { ReviewEntity } from './entity/ReviewEntity'
import { SeasonEntity } from './entity/SeasonEntity'
import { SeasonAccountStateEntity } from './entity/SeasonAccountStateEntity'
import { SeasonAggregateCreditEntity } from './entity/SeasonAggregateCreditEntity'
import { SeasonChangeEntity } from './entity/SeasonChangeEntity'
import { SeasonCreditEntity } from './entity/SeasonCreditEntity'
import { SeasonExternalIdEntity } from './entity/SeasonExternalIdEntity'
import { SeasonImageEntity } from './entity/SeasonImageEntity'
import { SeasonTranslationEntity } from './entity/SeasonTranslationEntity'
import { SeasonVideoEntity } from './entity/SeasonVideoEntity'
import { SessionEntity } from './entity/SessionEntity'
import { TimezoneEntity } from './entity/TimezoneEntity'
import { TopRatedEntity } from './entity/TopRatedEntity'
import { TvAccountStateEntity } from './entity/TvAccountStateEntity'
import { TvAggregateCreditEntity } from './entity/TvAggregateCreditEntity'
import { TvAlternativeTitleEntity } from './entity/TvAlternativeTitleEntity'
import { TvChangeEntity } from './entity/TvChangeEntity'
import { TvContentRatingEntity } from './entity/TvContentRatingEntity'
import { TvCreditEntity } from './entity/TvCreditEntity'
import { TvEpisodeGroupEntity } from './entity/TvEpisodeGroupEntity'
import { TvExternalIdEntity } from './entity/TvExternalIdEntity'
import { TvImageEntity } from './entity/TvImageEntity'
import { TvKeywordEntity } from './entity/TvKeywordEntity'
import { TvListEntity } from './entity/TvListEntity'
import { TvRecommendationEntity } from './entity/TvRecommendationEntity'
import { TvReviewEntity } from './entity/TvReviewEntity'
import { TvScreenedTheatricallyEntity } from './entity/TvScreenedTheatricallyEntity'
import { TvSimilarEntity } from './entity/TvSimilarEntity'
import { TvTranslationEntity } from './entity/TvTranslationEntity'
import { TvVideoEntity } from './entity/TvVideoEntity'
import { TvnEntity } from './entity/TvnEntity'
import { UpcomingEntity } from './entity/UpcomingEntity'
import { ValidateWithLoginEntity } from './entity/ValidateWithLoginEntity'
import { WatchlistEntity } from './entity/WatchlistEntity'

export type * from './TmdbTypes'


import { inspect } from 'node:util'

import type { Context, Feature } from './types'

import { config } from './Config'
import { TmdbEntityBase } from './TmdbEntityBase'
import { Utility } from './utility/Utility'
import { unreadableBody } from './utility/ResultBodyUtility'
import { abortError } from './utility/MakeRequestUtility'
import { allowed } from './utility/PrepareMethodUtility'


import { BaseFeature } from './feature/base/BaseFeature'



const stdutil = new Utility()


// A request's outcome: ok is false alone on an error with no response, so a
// caller narrowing on it reaches the status and the data.
type DirectResult =
  | { ok: false, err: any, status?: undefined, headers?: undefined, data?: undefined }
  | { ok: boolean, status: number, headers: any, data: any, err?: any }


class TmdbSDK {
  _mode: string = 'live'
  _options: any
  _utility = new Utility()
  _features: Feature[]
  _rootctx: Context
  

  constructor(options?: any) {

    this._rootctx = this._utility.makeContext({
      client: this,
      utility: this._utility,
      config,
      options,
      shared: new WeakMap()
    })

    this._options = this._utility.makeOptions(this._rootctx)

    for (const key of ['_options', '_rootctx', '_features']) {
      Object.defineProperty(this, key, {
        value: (this as any)[key], enumerable: false, writable: true, configurable: true
      })
    }

    const struct = this._utility.struct
    const getpath = struct.getpath

    if (true === getpath(this._options.feature, 'test.active')) {
      this._mode = 'test'
    }

    this._rootctx.options = this._options

    this._features = []

    const featureAdd = this._utility.featureAdd
    const featureInit = this._utility.featureInit

    // Add features in the resolved order (makeOptions puts an explicit
    // array order first, else defaults to test-first). Ordering matters:
    // the `test` feature installs the base mock transport and the transport
    // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
    // so `test` must be added before them to sit at the base of the chain.
    const extend = this._options.extend || []

    const featureorder = getpath(this._options, '__derived__.featureorder') || []
    for (const fname of featureorder) {
      const fopts = this._options.feature[fname] || {}
      if (fopts.active) {
        // An active name with no generated class is legal when an
        // extend-supplied instance carries that name (station's adopt
        // path): the instance is added below, positioned by its own
        // __after__ entry, so skip it here rather than fail construction.
        if (!this._rootctx.config.hasFeature(fname) &&
          extend.some((f: any) => fname === f.name)) {
          continue
        }
        featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname))
      }
    }

    for (let f of extend) {
      featureAdd(this._rootctx, f)
    }

    for (let f of this._features) {
      featureInit(this._rootctx, f)
    }

    const featureHook = this._utility.featureHook
    featureHook(this._rootctx, 'PostConstruct')
  }


  options() {
    return this._utility.struct.clone(this._options)
  }


  utility() {
    return this._utility.struct.clone(this._utility)
  }

  


  async prepare(fetchargs?: any) {
    const utility = this._utility
    const struct = utility.struct
    const clone = struct.clone

    const {
      makeContext,
      makeFetchDef,
      prepareHeaders,
      prepareAuth,
    } = utility

    fetchargs = fetchargs || {}

    let ctx: Context = makeContext({
      opname: 'prepare',
      ctrl: fetchargs.ctrl || {},
    }, this._rootctx)

    const options = this._options
    const method = String(fetchargs.method || 'GET').toUpperCase()

    if (!allowed(options.allow.method, method)) {
      return ctx.error('spec_method_allow', 'Method "' + method +
        '" not allowed by SDK option allow.method value: "' + options.allow.method + '"')
    }

    const spec: any = {
      base: options.base,
      prefix: options.prefix,
      suffix: options.suffix,
      path: fetchargs.path || '',
      method,
      params: fetchargs.params || {},
      query: fetchargs.query || {},
      headers: prepareHeaders(ctx),
      body: fetchargs.body,
      step: 'start',
    }

    ctx.spec = spec

    if (fetchargs.headers) {
      const uheaders = fetchargs.headers
      for (let key in uheaders) {
        spec.headers[key] = uheaders[key]
      }
    }

    

    const authResult = prepareAuth(ctx)
    if (authResult instanceof Error) {
      return authResult
    }

    return makeFetchDef(ctx)
  }


  // Raw endpoint access is operator-controllable, like every entity op.
  // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  // either one reaches the same endpoint.
  async direct(fetchargs?: any): Promise<DirectResult> {
    if (!allowed(this._options.allow.op, 'direct')) {
      return {
        ok: false,
        err: new Error('TmdbSDK: direct: operation not allowed by' +
          ' SDK option allow.op value: "' + this._options.allow.op + '"'),
      }
    }

    return this._rawRequest(fetchargs)
  }


  // Ungated request path shared by direct() and graphql(), each of which
  // checks its own allow.op token first. Private, rather than a flag on
  // fetchargs: a caller-supplied marker would let anyone opt straight back
  // out of the gate by passing it.
  async _rawRequest(fetchargs?: any): Promise<DirectResult> {
    const utility = this._utility

    const fetcher = utility.fetcher
    const makeContext = utility.makeContext

    const fetchdef = await this.prepare(fetchargs)
    if (fetchdef instanceof Error) {
      return { ok: false, err: utility.clean(this._rootctx, fetchdef) }
    }

    let ctx: Context = makeContext({
      opname: 'direct',
      ctrl: (fetchargs || {}).ctrl || {},
    }, this._rootctx)

    try {
      if (true === fetchdef.signal?.aborted) {
        throw fetchdef.signal.reason
      }

      const fetched = await fetcher(ctx, fetchdef.url, fetchdef)

      if (null == fetched) {
        return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') }
      }
      else if (fetched instanceof Error) {
        return { ok: false, err: utility.clean(ctx, abortError(ctx, fetched)) }
      }

      const status = fetched.status

      // No body responses (204 No Content, 304 Not Modified) and explicit
      // zero content-length must skip JSON parsing — fetched.json() would
      // throw `Unexpected end of JSON input` on an empty body.
      const headers = fetched.headers
      const contentLength = headers && 'function' === typeof headers.get
        ? headers.get('content-length')
        : (headers || {})['content-length']
      const noBody = 204 === status || 304 === status || '0' === String(contentLength)

      let json: any = undefined
      let err: any = undefined
      if (!noBody) {
        let text: any = undefined
        try {
          const raw: any = fetched
          if ('function' === typeof raw.text) {
            text = await raw.text()
            json = '' === text.trim() ? undefined : JSON.parse(text)
          }
          else {
            json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json
          }
        }
        catch (parseErr: any) {
          if ('SyntaxError' !== parseErr?.name) {
            throw parseErr
          }
          err = unreadableBody(ctx, {
            status, headers, text: text ?? parseErr.text, sent: fetchdef.headers,
            failed: 200 <= status && status < 300 ? undefined :
              ctx.error('request_status', 'request: ' + status + ': ' + fetched.statusText),
          })
        }
      }

      return {
        ok: null == err && status >= 200 && status < 300,
        status,
        headers: fetched.headers,
        data: json,
        ...(null == err ? {} : { err: utility.clean(ctx, err) }),
      }
    }
    catch (err: any) {
      return { ok: false, err: utility.clean(ctx, abortError(ctx, err)) }
    }
  }



  async graphql(query: string, variables?: any, ctrl?: any) {
    const options = this._options

    if (!allowed(options.allow.op, 'graphql')) {
      return {
        ok: false,
        err: new Error('TmdbSDK: graphql: operation not allowed by' +
          ' SDK option allow.op value: "' + options.allow.op + '"'),
      }
    }

    const res: any = await this._rawRequest({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: { query, variables: variables || {} },
      ctrl,
    })

    // Errors are read BEFORE any status check: a GraphQL parse or validation
    // failure comes back as HTTP 400 carrying the standard { errors: [...] }
    // body, and the raw path represents a non-2xx as { ok: false } with no
    // err — so returning early on status would discard the server's own
    // diagnostics, which are the only useful part of that response.
    const errors = null == res.data ? undefined : res.data.errors

    if (null != errors && Array.isArray(errors) && 0 < errors.length) {
      const first = errors[0] || {}
      const err: any = new Error('TmdbSDK: graphql: ' +
        (first.message || 'graphql error'))
      err.graphql = errors
      return { ok: false, status: res.status, headers: res.headers, err, data: res.data }
    }

    return res
  }



  // Entity access: `client.Account().list()` / `client.Account().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Account(entopts?: Record<string, any>) {
    const self = this
    return new AccountEntity(self, entopts)
  }


  // Entity access: `client.AccountList().list()` / `client.AccountList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AccountList(entopts?: Record<string, any>) {
    const self = this
    return new AccountListEntity(self, entopts)
  }


  // Entity access: `client.AiringToday().list()` / `client.AiringToday().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AiringToday(entopts?: Record<string, any>) {
    const self = this
    return new AiringTodayEntity(self, entopts)
  }


  // Entity access: `client.All().list()` / `client.All().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  All(entopts?: Record<string, any>) {
    const self = this
    return new AllEntity(self, entopts)
  }


  // Entity access: `client.Authentication().list()` / `client.Authentication().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Authentication(entopts?: Record<string, any>) {
    const self = this
    return new AuthenticationEntity(self, entopts)
  }


  // Entity access: `client.Change().list()` / `client.Change().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Change(entopts?: Record<string, any>) {
    const self = this
    return new ChangeEntity(self, entopts)
  }


  // Entity access: `client.Collection().list()` / `client.Collection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Collection(entopts?: Record<string, any>) {
    const self = this
    return new CollectionEntity(self, entopts)
  }


  // Entity access: `client.CollectionImage().list()` / `client.CollectionImage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CollectionImage(entopts?: Record<string, any>) {
    const self = this
    return new CollectionImageEntity(self, entopts)
  }


  // Entity access: `client.CollectionTranslation().list()` / `client.CollectionTranslation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CollectionTranslation(entopts?: Record<string, any>) {
    const self = this
    return new CollectionTranslationEntity(self, entopts)
  }


  // Entity access: `client.Company().list()` / `client.Company().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Company(entopts?: Record<string, any>) {
    const self = this
    return new CompanyEntity(self, entopts)
  }


  // Entity access: `client.CompanyAlternativeName().list()` / `client.CompanyAlternativeName().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CompanyAlternativeName(entopts?: Record<string, any>) {
    const self = this
    return new CompanyAlternativeNameEntity(self, entopts)
  }


  // Entity access: `client.CompanyImage().list()` / `client.CompanyImage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CompanyImage(entopts?: Record<string, any>) {
    const self = this
    return new CompanyImageEntity(self, entopts)
  }


  // Entity access: `client.Configuration().list()` / `client.Configuration().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Configuration(entopts?: Record<string, any>) {
    const self = this
    return new ConfigurationEntity(self, entopts)
  }


  // Entity access: `client.Country().list()` / `client.Country().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Country(entopts?: Record<string, any>) {
    const self = this
    return new CountryEntity(self, entopts)
  }


  // Entity access: `client.Credit().list()` / `client.Credit().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Credit(entopts?: Record<string, any>) {
    const self = this
    return new CreditEntity(self, entopts)
  }


  // Entity access: `client.Episode().list()` / `client.Episode().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Episode(entopts?: Record<string, any>) {
    const self = this
    return new EpisodeEntity(self, entopts)
  }


  // Entity access: `client.EpisodeAccountState().list()` / `client.EpisodeAccountState().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EpisodeAccountState(entopts?: Record<string, any>) {
    const self = this
    return new EpisodeAccountStateEntity(self, entopts)
  }


  // Entity access: `client.EpisodeChange().list()` / `client.EpisodeChange().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EpisodeChange(entopts?: Record<string, any>) {
    const self = this
    return new EpisodeChangeEntity(self, entopts)
  }


  // Entity access: `client.EpisodeCredit().list()` / `client.EpisodeCredit().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EpisodeCredit(entopts?: Record<string, any>) {
    const self = this
    return new EpisodeCreditEntity(self, entopts)
  }


  // Entity access: `client.EpisodeExternalId().list()` / `client.EpisodeExternalId().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EpisodeExternalId(entopts?: Record<string, any>) {
    const self = this
    return new EpisodeExternalIdEntity(self, entopts)
  }


  // Entity access: `client.EpisodeGroup().list()` / `client.EpisodeGroup().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EpisodeGroup(entopts?: Record<string, any>) {
    const self = this
    return new EpisodeGroupEntity(self, entopts)
  }


  // Entity access: `client.EpisodeImage().list()` / `client.EpisodeImage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EpisodeImage(entopts?: Record<string, any>) {
    const self = this
    return new EpisodeImageEntity(self, entopts)
  }


  // Entity access: `client.EpisodeTranslation().list()` / `client.EpisodeTranslation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EpisodeTranslation(entopts?: Record<string, any>) {
    const self = this
    return new EpisodeTranslationEntity(self, entopts)
  }


  // Entity access: `client.EpisodeVideo().list()` / `client.EpisodeVideo().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EpisodeVideo(entopts?: Record<string, any>) {
    const self = this
    return new EpisodeVideoEntity(self, entopts)
  }


  // Entity access: `client.Favorite().list()` / `client.Favorite().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Favorite(entopts?: Record<string, any>) {
    const self = this
    return new FavoriteEntity(self, entopts)
  }


  // Entity access: `client.Find().list()` / `client.Find().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Find(entopts?: Record<string, any>) {
    const self = this
    return new FindEntity(self, entopts)
  }


  // Entity access: `client.Job().list()` / `client.Job().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Job(entopts?: Record<string, any>) {
    const self = this
    return new JobEntity(self, entopts)
  }


  // Entity access: `client.Keyword().list()` / `client.Keyword().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Keyword(entopts?: Record<string, any>) {
    const self = this
    return new KeywordEntity(self, entopts)
  }


  // Entity access: `client.KeywordMovie().list()` / `client.KeywordMovie().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  KeywordMovie(entopts?: Record<string, any>) {
    const self = this
    return new KeywordMovieEntity(self, entopts)
  }


  // Entity access: `client.Language().list()` / `client.Language().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Language(entopts?: Record<string, any>) {
    const self = this
    return new LanguageEntity(self, entopts)
  }


  // Entity access: `client.Latest().list()` / `client.Latest().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Latest(entopts?: Record<string, any>) {
    const self = this
    return new LatestEntity(self, entopts)
  }


  // Entity access: `client.List().list()` / `client.List().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  List(entopts?: Record<string, any>) {
    const self = this
    return new ListEntity(self, entopts)
  }


  // Entity access: `client.ListItemStatus().list()` / `client.ListItemStatus().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListItemStatus(entopts?: Record<string, any>) {
    const self = this
    return new ListItemStatusEntity(self, entopts)
  }


  // Entity access: `client.Movie().list()` / `client.Movie().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Movie(entopts?: Record<string, any>) {
    const self = this
    return new MovieEntity(self, entopts)
  }


  // Entity access: `client.MovieAccountState().list()` / `client.MovieAccountState().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  MovieAccountState(entopts?: Record<string, any>) {
    const self = this
    return new MovieAccountStateEntity(self, entopts)
  }


  // Entity access: `client.MovieAlternativeTitle().list()` / `client.MovieAlternativeTitle().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  MovieAlternativeTitle(entopts?: Record<string, any>) {
    const self = this
    return new MovieAlternativeTitleEntity(self, entopts)
  }


  // Entity access: `client.MovieChange().list()` / `client.MovieChange().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  MovieChange(entopts?: Record<string, any>) {
    const self = this
    return new MovieChangeEntity(self, entopts)
  }


  // Entity access: `client.MovieCredit().list()` / `client.MovieCredit().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  MovieCredit(entopts?: Record<string, any>) {
    const self = this
    return new MovieCreditEntity(self, entopts)
  }


  // Entity access: `client.MovieExternalId().list()` / `client.MovieExternalId().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  MovieExternalId(entopts?: Record<string, any>) {
    const self = this
    return new MovieExternalIdEntity(self, entopts)
  }


  // Entity access: `client.MovieImage().list()` / `client.MovieImage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  MovieImage(entopts?: Record<string, any>) {
    const self = this
    return new MovieImageEntity(self, entopts)
  }


  // Entity access: `client.MovieKeyword().list()` / `client.MovieKeyword().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  MovieKeyword(entopts?: Record<string, any>) {
    const self = this
    return new MovieKeywordEntity(self, entopts)
  }


  // Entity access: `client.MovieList().list()` / `client.MovieList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  MovieList(entopts?: Record<string, any>) {
    const self = this
    return new MovieListEntity(self, entopts)
  }


  // Entity access: `client.MovieRecommendation().list()` / `client.MovieRecommendation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  MovieRecommendation(entopts?: Record<string, any>) {
    const self = this
    return new MovieRecommendationEntity(self, entopts)
  }


  // Entity access: `client.MovieReleaseDate().list()` / `client.MovieReleaseDate().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  MovieReleaseDate(entopts?: Record<string, any>) {
    const self = this
    return new MovieReleaseDateEntity(self, entopts)
  }


  // Entity access: `client.MovieReview().list()` / `client.MovieReview().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  MovieReview(entopts?: Record<string, any>) {
    const self = this
    return new MovieReviewEntity(self, entopts)
  }


  // Entity access: `client.MovieSimilar().list()` / `client.MovieSimilar().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  MovieSimilar(entopts?: Record<string, any>) {
    const self = this
    return new MovieSimilarEntity(self, entopts)
  }


  // Entity access: `client.MovieTranslation().list()` / `client.MovieTranslation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  MovieTranslation(entopts?: Record<string, any>) {
    const self = this
    return new MovieTranslationEntity(self, entopts)
  }


  // Entity access: `client.MovieVideo().list()` / `client.MovieVideo().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  MovieVideo(entopts?: Record<string, any>) {
    const self = this
    return new MovieVideoEntity(self, entopts)
  }


  // Entity access: `client.Multi().list()` / `client.Multi().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Multi(entopts?: Record<string, any>) {
    const self = this
    return new MultiEntity(self, entopts)
  }


  // Entity access: `client.N4n().list()` / `client.N4n().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  N4n(entopts?: Record<string, any>) {
    const self = this
    return new N4nEntity(self, entopts)
  }


  // Entity access: `client.Network().list()` / `client.Network().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Network(entopts?: Record<string, any>) {
    const self = this
    return new NetworkEntity(self, entopts)
  }


  // Entity access: `client.NetworkAlternativeName().list()` / `client.NetworkAlternativeName().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  NetworkAlternativeName(entopts?: Record<string, any>) {
    const self = this
    return new NetworkAlternativeNameEntity(self, entopts)
  }


  // Entity access: `client.NetworkImage().list()` / `client.NetworkImage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  NetworkImage(entopts?: Record<string, any>) {
    const self = this
    return new NetworkImageEntity(self, entopts)
  }


  // Entity access: `client.New().list()` / `client.New().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  New(entopts?: Record<string, any>) {
    const self = this
    return new NewEntity(self, entopts)
  }


  // Entity access: `client.NowPlaying().list()` / `client.NowPlaying().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  NowPlaying(entopts?: Record<string, any>) {
    const self = this
    return new NowPlayingEntity(self, entopts)
  }


  // Entity access: `client.OnTheAir().list()` / `client.OnTheAir().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OnTheAir(entopts?: Record<string, any>) {
    const self = this
    return new OnTheAirEntity(self, entopts)
  }


  // Entity access: `client.Person().list()` / `client.Person().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Person(entopts?: Record<string, any>) {
    const self = this
    return new PersonEntity(self, entopts)
  }


  // Entity access: `client.PersonChange().list()` / `client.PersonChange().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PersonChange(entopts?: Record<string, any>) {
    const self = this
    return new PersonChangeEntity(self, entopts)
  }


  // Entity access: `client.PersonCombinedCredit().list()` / `client.PersonCombinedCredit().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PersonCombinedCredit(entopts?: Record<string, any>) {
    const self = this
    return new PersonCombinedCreditEntity(self, entopts)
  }


  // Entity access: `client.PersonExternalId().list()` / `client.PersonExternalId().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PersonExternalId(entopts?: Record<string, any>) {
    const self = this
    return new PersonExternalIdEntity(self, entopts)
  }


  // Entity access: `client.PersonImage().list()` / `client.PersonImage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PersonImage(entopts?: Record<string, any>) {
    const self = this
    return new PersonImageEntity(self, entopts)
  }


  // Entity access: `client.PersonMovieCredit().list()` / `client.PersonMovieCredit().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PersonMovieCredit(entopts?: Record<string, any>) {
    const self = this
    return new PersonMovieCreditEntity(self, entopts)
  }


  // Entity access: `client.PersonTaggedImage().list()` / `client.PersonTaggedImage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PersonTaggedImage(entopts?: Record<string, any>) {
    const self = this
    return new PersonTaggedImageEntity(self, entopts)
  }


  // Entity access: `client.PersonTranslation().list()` / `client.PersonTranslation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PersonTranslation(entopts?: Record<string, any>) {
    const self = this
    return new PersonTranslationEntity(self, entopts)
  }


  // Entity access: `client.PersonTvCredit().list()` / `client.PersonTvCredit().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PersonTvCredit(entopts?: Record<string, any>) {
    const self = this
    return new PersonTvCreditEntity(self, entopts)
  }


  // Entity access: `client.Popular().list()` / `client.Popular().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Popular(entopts?: Record<string, any>) {
    const self = this
    return new PopularEntity(self, entopts)
  }


  // Entity access: `client.PrimaryTranslation().list()` / `client.PrimaryTranslation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PrimaryTranslation(entopts?: Record<string, any>) {
    const self = this
    return new PrimaryTranslationEntity(self, entopts)
  }


  // Entity access: `client.Provider().list()` / `client.Provider().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Provider(entopts?: Record<string, any>) {
    const self = this
    return new ProviderEntity(self, entopts)
  }


  // Entity access: `client.Region().list()` / `client.Region().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Region(entopts?: Record<string, any>) {
    const self = this
    return new RegionEntity(self, entopts)
  }


  // Entity access: `client.Review().list()` / `client.Review().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Review(entopts?: Record<string, any>) {
    const self = this
    return new ReviewEntity(self, entopts)
  }


  // Entity access: `client.Season().list()` / `client.Season().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Season(entopts?: Record<string, any>) {
    const self = this
    return new SeasonEntity(self, entopts)
  }


  // Entity access: `client.SeasonAccountState().list()` / `client.SeasonAccountState().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SeasonAccountState(entopts?: Record<string, any>) {
    const self = this
    return new SeasonAccountStateEntity(self, entopts)
  }


  // Entity access: `client.SeasonAggregateCredit().list()` / `client.SeasonAggregateCredit().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SeasonAggregateCredit(entopts?: Record<string, any>) {
    const self = this
    return new SeasonAggregateCreditEntity(self, entopts)
  }


  // Entity access: `client.SeasonChange().list()` / `client.SeasonChange().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SeasonChange(entopts?: Record<string, any>) {
    const self = this
    return new SeasonChangeEntity(self, entopts)
  }


  // Entity access: `client.SeasonCredit().list()` / `client.SeasonCredit().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SeasonCredit(entopts?: Record<string, any>) {
    const self = this
    return new SeasonCreditEntity(self, entopts)
  }


  // Entity access: `client.SeasonExternalId().list()` / `client.SeasonExternalId().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SeasonExternalId(entopts?: Record<string, any>) {
    const self = this
    return new SeasonExternalIdEntity(self, entopts)
  }


  // Entity access: `client.SeasonImage().list()` / `client.SeasonImage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SeasonImage(entopts?: Record<string, any>) {
    const self = this
    return new SeasonImageEntity(self, entopts)
  }


  // Entity access: `client.SeasonTranslation().list()` / `client.SeasonTranslation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SeasonTranslation(entopts?: Record<string, any>) {
    const self = this
    return new SeasonTranslationEntity(self, entopts)
  }


  // Entity access: `client.SeasonVideo().list()` / `client.SeasonVideo().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SeasonVideo(entopts?: Record<string, any>) {
    const self = this
    return new SeasonVideoEntity(self, entopts)
  }


  // Entity access: `client.Session().list()` / `client.Session().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Session(entopts?: Record<string, any>) {
    const self = this
    return new SessionEntity(self, entopts)
  }


  // Entity access: `client.Timezone().list()` / `client.Timezone().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Timezone(entopts?: Record<string, any>) {
    const self = this
    return new TimezoneEntity(self, entopts)
  }


  // Entity access: `client.TopRated().list()` / `client.TopRated().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TopRated(entopts?: Record<string, any>) {
    const self = this
    return new TopRatedEntity(self, entopts)
  }


  // Entity access: `client.TvAccountState().list()` / `client.TvAccountState().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TvAccountState(entopts?: Record<string, any>) {
    const self = this
    return new TvAccountStateEntity(self, entopts)
  }


  // Entity access: `client.TvAggregateCredit().list()` / `client.TvAggregateCredit().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TvAggregateCredit(entopts?: Record<string, any>) {
    const self = this
    return new TvAggregateCreditEntity(self, entopts)
  }


  // Entity access: `client.TvAlternativeTitle().list()` / `client.TvAlternativeTitle().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TvAlternativeTitle(entopts?: Record<string, any>) {
    const self = this
    return new TvAlternativeTitleEntity(self, entopts)
  }


  // Entity access: `client.TvChange().list()` / `client.TvChange().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TvChange(entopts?: Record<string, any>) {
    const self = this
    return new TvChangeEntity(self, entopts)
  }


  // Entity access: `client.TvContentRating().list()` / `client.TvContentRating().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TvContentRating(entopts?: Record<string, any>) {
    const self = this
    return new TvContentRatingEntity(self, entopts)
  }


  // Entity access: `client.TvCredit().list()` / `client.TvCredit().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TvCredit(entopts?: Record<string, any>) {
    const self = this
    return new TvCreditEntity(self, entopts)
  }


  // Entity access: `client.TvEpisodeGroup().list()` / `client.TvEpisodeGroup().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TvEpisodeGroup(entopts?: Record<string, any>) {
    const self = this
    return new TvEpisodeGroupEntity(self, entopts)
  }


  // Entity access: `client.TvExternalId().list()` / `client.TvExternalId().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TvExternalId(entopts?: Record<string, any>) {
    const self = this
    return new TvExternalIdEntity(self, entopts)
  }


  // Entity access: `client.TvImage().list()` / `client.TvImage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TvImage(entopts?: Record<string, any>) {
    const self = this
    return new TvImageEntity(self, entopts)
  }


  // Entity access: `client.TvKeyword().list()` / `client.TvKeyword().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TvKeyword(entopts?: Record<string, any>) {
    const self = this
    return new TvKeywordEntity(self, entopts)
  }


  // Entity access: `client.TvList().list()` / `client.TvList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TvList(entopts?: Record<string, any>) {
    const self = this
    return new TvListEntity(self, entopts)
  }


  // Entity access: `client.TvRecommendation().list()` / `client.TvRecommendation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TvRecommendation(entopts?: Record<string, any>) {
    const self = this
    return new TvRecommendationEntity(self, entopts)
  }


  // Entity access: `client.TvReview().list()` / `client.TvReview().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TvReview(entopts?: Record<string, any>) {
    const self = this
    return new TvReviewEntity(self, entopts)
  }


  // Entity access: `client.TvScreenedTheatrically().list()` / `client.TvScreenedTheatrically().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TvScreenedTheatrically(entopts?: Record<string, any>) {
    const self = this
    return new TvScreenedTheatricallyEntity(self, entopts)
  }


  // Entity access: `client.TvSimilar().list()` / `client.TvSimilar().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TvSimilar(entopts?: Record<string, any>) {
    const self = this
    return new TvSimilarEntity(self, entopts)
  }


  // Entity access: `client.TvTranslation().list()` / `client.TvTranslation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TvTranslation(entopts?: Record<string, any>) {
    const self = this
    return new TvTranslationEntity(self, entopts)
  }


  // Entity access: `client.TvVideo().list()` / `client.TvVideo().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TvVideo(entopts?: Record<string, any>) {
    const self = this
    return new TvVideoEntity(self, entopts)
  }


  // Entity access: `client.Tvn().list()` / `client.Tvn().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Tvn(entopts?: Record<string, any>) {
    const self = this
    return new TvnEntity(self, entopts)
  }


  // Entity access: `client.Upcoming().list()` / `client.Upcoming().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Upcoming(entopts?: Record<string, any>) {
    const self = this
    return new UpcomingEntity(self, entopts)
  }


  // Entity access: `client.ValidateWithLogin().list()` / `client.ValidateWithLogin().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ValidateWithLogin(entopts?: Record<string, any>) {
    const self = this
    return new ValidateWithLoginEntity(self, entopts)
  }


  // Entity access: `client.Watchlist().list()` / `client.Watchlist().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Watchlist(entopts?: Record<string, any>) {
    const self = this
    return new WatchlistEntity(self, entopts)
  }




  static test(testoptsarg?: any, sdkoptsarg?: any) {
    const struct = stdutil.struct
    const setpath = struct.setpath
    const getdef = struct.getdef
    const clone = struct.clone
    const setprop = struct.setprop

    const sdkopts = getdef(clone(sdkoptsarg), {})
    const testopts = getdef(clone(testoptsarg), {})
    setprop(testopts, 'active', true)
    setpath(sdkopts, 'feature.test', testopts)

    const testsdk = new TmdbSDK(sdkopts)
    testsdk._mode = 'test'

    return testsdk
  }


  tester(testopts?: any, sdkopts?: any) {
    return TmdbSDK.test(testopts, sdkopts)
  }


  toJSON() {
    return { name: 'Tmdb' }
  }

  toString() {
    return 'Tmdb ' + this._utility.struct.jsonify(this.toJSON())
  }

  [inspect.custom]() {
    return this.toString()
  }

}




const SDK = TmdbSDK


export {
  stdutil,
  config,
  

  BaseFeature,
  TmdbEntityBase,

  TmdbSDK,
  SDK,
}


export type { DirectResult }
