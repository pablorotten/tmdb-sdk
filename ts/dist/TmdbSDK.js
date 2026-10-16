"use strict";
// Tmdb Ts SDK
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.TmdbSDK = exports.TmdbEntityBase = exports.BaseFeature = exports.config = exports.stdutil = void 0;
const AccountEntity_1 = require("./entity/AccountEntity");
const AccountListEntity_1 = require("./entity/AccountListEntity");
const AiringTodayEntity_1 = require("./entity/AiringTodayEntity");
const AllEntity_1 = require("./entity/AllEntity");
const AuthenticationEntity_1 = require("./entity/AuthenticationEntity");
const ChangeEntity_1 = require("./entity/ChangeEntity");
const CollectionEntity_1 = require("./entity/CollectionEntity");
const CollectionImageEntity_1 = require("./entity/CollectionImageEntity");
const CollectionTranslationEntity_1 = require("./entity/CollectionTranslationEntity");
const CompanyEntity_1 = require("./entity/CompanyEntity");
const CompanyAlternativeNameEntity_1 = require("./entity/CompanyAlternativeNameEntity");
const CompanyImageEntity_1 = require("./entity/CompanyImageEntity");
const ConfigurationEntity_1 = require("./entity/ConfigurationEntity");
const CountryEntity_1 = require("./entity/CountryEntity");
const CreditEntity_1 = require("./entity/CreditEntity");
const EpisodeEntity_1 = require("./entity/EpisodeEntity");
const EpisodeAccountStateEntity_1 = require("./entity/EpisodeAccountStateEntity");
const EpisodeChangeEntity_1 = require("./entity/EpisodeChangeEntity");
const EpisodeCreditEntity_1 = require("./entity/EpisodeCreditEntity");
const EpisodeExternalIdEntity_1 = require("./entity/EpisodeExternalIdEntity");
const EpisodeGroupEntity_1 = require("./entity/EpisodeGroupEntity");
const EpisodeImageEntity_1 = require("./entity/EpisodeImageEntity");
const EpisodeTranslationEntity_1 = require("./entity/EpisodeTranslationEntity");
const EpisodeVideoEntity_1 = require("./entity/EpisodeVideoEntity");
const FavoriteEntity_1 = require("./entity/FavoriteEntity");
const FindEntity_1 = require("./entity/FindEntity");
const JobEntity_1 = require("./entity/JobEntity");
const KeywordEntity_1 = require("./entity/KeywordEntity");
const KeywordMovieEntity_1 = require("./entity/KeywordMovieEntity");
const LanguageEntity_1 = require("./entity/LanguageEntity");
const LatestEntity_1 = require("./entity/LatestEntity");
const ListEntity_1 = require("./entity/ListEntity");
const ListItemStatusEntity_1 = require("./entity/ListItemStatusEntity");
const MovieEntity_1 = require("./entity/MovieEntity");
const MovieAccountStateEntity_1 = require("./entity/MovieAccountStateEntity");
const MovieAlternativeTitleEntity_1 = require("./entity/MovieAlternativeTitleEntity");
const MovieChangeEntity_1 = require("./entity/MovieChangeEntity");
const MovieCreditEntity_1 = require("./entity/MovieCreditEntity");
const MovieExternalIdEntity_1 = require("./entity/MovieExternalIdEntity");
const MovieImageEntity_1 = require("./entity/MovieImageEntity");
const MovieKeywordEntity_1 = require("./entity/MovieKeywordEntity");
const MovieListEntity_1 = require("./entity/MovieListEntity");
const MovieRecommendationEntity_1 = require("./entity/MovieRecommendationEntity");
const MovieReleaseDateEntity_1 = require("./entity/MovieReleaseDateEntity");
const MovieReviewEntity_1 = require("./entity/MovieReviewEntity");
const MovieSimilarEntity_1 = require("./entity/MovieSimilarEntity");
const MovieTranslationEntity_1 = require("./entity/MovieTranslationEntity");
const MovieVideoEntity_1 = require("./entity/MovieVideoEntity");
const MultiEntity_1 = require("./entity/MultiEntity");
const N4nEntity_1 = require("./entity/N4nEntity");
const NetworkEntity_1 = require("./entity/NetworkEntity");
const NetworkAlternativeNameEntity_1 = require("./entity/NetworkAlternativeNameEntity");
const NetworkImageEntity_1 = require("./entity/NetworkImageEntity");
const NewEntity_1 = require("./entity/NewEntity");
const NowPlayingEntity_1 = require("./entity/NowPlayingEntity");
const OnTheAirEntity_1 = require("./entity/OnTheAirEntity");
const PersonEntity_1 = require("./entity/PersonEntity");
const PersonChangeEntity_1 = require("./entity/PersonChangeEntity");
const PersonCombinedCreditEntity_1 = require("./entity/PersonCombinedCreditEntity");
const PersonExternalIdEntity_1 = require("./entity/PersonExternalIdEntity");
const PersonImageEntity_1 = require("./entity/PersonImageEntity");
const PersonMovieCreditEntity_1 = require("./entity/PersonMovieCreditEntity");
const PersonTaggedImageEntity_1 = require("./entity/PersonTaggedImageEntity");
const PersonTranslationEntity_1 = require("./entity/PersonTranslationEntity");
const PersonTvCreditEntity_1 = require("./entity/PersonTvCreditEntity");
const PopularEntity_1 = require("./entity/PopularEntity");
const PrimaryTranslationEntity_1 = require("./entity/PrimaryTranslationEntity");
const ProviderEntity_1 = require("./entity/ProviderEntity");
const RegionEntity_1 = require("./entity/RegionEntity");
const ReviewEntity_1 = require("./entity/ReviewEntity");
const SeasonEntity_1 = require("./entity/SeasonEntity");
const SeasonAccountStateEntity_1 = require("./entity/SeasonAccountStateEntity");
const SeasonAggregateCreditEntity_1 = require("./entity/SeasonAggregateCreditEntity");
const SeasonChangeEntity_1 = require("./entity/SeasonChangeEntity");
const SeasonCreditEntity_1 = require("./entity/SeasonCreditEntity");
const SeasonExternalIdEntity_1 = require("./entity/SeasonExternalIdEntity");
const SeasonImageEntity_1 = require("./entity/SeasonImageEntity");
const SeasonTranslationEntity_1 = require("./entity/SeasonTranslationEntity");
const SeasonVideoEntity_1 = require("./entity/SeasonVideoEntity");
const SessionEntity_1 = require("./entity/SessionEntity");
const TimezoneEntity_1 = require("./entity/TimezoneEntity");
const TopRatedEntity_1 = require("./entity/TopRatedEntity");
const TvAccountStateEntity_1 = require("./entity/TvAccountStateEntity");
const TvAggregateCreditEntity_1 = require("./entity/TvAggregateCreditEntity");
const TvAlternativeTitleEntity_1 = require("./entity/TvAlternativeTitleEntity");
const TvChangeEntity_1 = require("./entity/TvChangeEntity");
const TvContentRatingEntity_1 = require("./entity/TvContentRatingEntity");
const TvCreditEntity_1 = require("./entity/TvCreditEntity");
const TvEpisodeGroupEntity_1 = require("./entity/TvEpisodeGroupEntity");
const TvExternalIdEntity_1 = require("./entity/TvExternalIdEntity");
const TvImageEntity_1 = require("./entity/TvImageEntity");
const TvKeywordEntity_1 = require("./entity/TvKeywordEntity");
const TvListEntity_1 = require("./entity/TvListEntity");
const TvRecommendationEntity_1 = require("./entity/TvRecommendationEntity");
const TvReviewEntity_1 = require("./entity/TvReviewEntity");
const TvScreenedTheatricallyEntity_1 = require("./entity/TvScreenedTheatricallyEntity");
const TvSimilarEntity_1 = require("./entity/TvSimilarEntity");
const TvTranslationEntity_1 = require("./entity/TvTranslationEntity");
const TvVideoEntity_1 = require("./entity/TvVideoEntity");
const TvnEntity_1 = require("./entity/TvnEntity");
const UpcomingEntity_1 = require("./entity/UpcomingEntity");
const ValidateWithLoginEntity_1 = require("./entity/ValidateWithLoginEntity");
const WatchlistEntity_1 = require("./entity/WatchlistEntity");
const node_util_1 = require("node:util");
const Config_1 = require("./Config");
Object.defineProperty(exports, "config", { enumerable: true, get: function () { return Config_1.config; } });
const TmdbEntityBase_1 = require("./TmdbEntityBase");
Object.defineProperty(exports, "TmdbEntityBase", { enumerable: true, get: function () { return TmdbEntityBase_1.TmdbEntityBase; } });
const Utility_1 = require("./utility/Utility");
const ResultBodyUtility_1 = require("./utility/ResultBodyUtility");
const MakeRequestUtility_1 = require("./utility/MakeRequestUtility");
const PrepareMethodUtility_1 = require("./utility/PrepareMethodUtility");
const BaseFeature_1 = require("./feature/base/BaseFeature");
Object.defineProperty(exports, "BaseFeature", { enumerable: true, get: function () { return BaseFeature_1.BaseFeature; } });
const stdutil = new Utility_1.Utility();
exports.stdutil = stdutil;
class TmdbSDK {
    _mode = 'live';
    _options;
    _utility = new Utility_1.Utility();
    _features;
    _rootctx;
    constructor(options) {
        this._rootctx = this._utility.makeContext({
            client: this,
            utility: this._utility,
            config: Config_1.config,
            options,
            shared: new WeakMap()
        });
        this._options = this._utility.makeOptions(this._rootctx);
        for (const key of ['_options', '_rootctx', '_features']) {
            Object.defineProperty(this, key, {
                value: this[key], enumerable: false, writable: true, configurable: true
            });
        }
        const struct = this._utility.struct;
        const getpath = struct.getpath;
        if (true === getpath(this._options.feature, 'test.active')) {
            this._mode = 'test';
        }
        this._rootctx.options = this._options;
        this._features = [];
        const featureAdd = this._utility.featureAdd;
        const featureInit = this._utility.featureInit;
        // Add features in the resolved order (makeOptions puts an explicit
        // array order first, else defaults to test-first). Ordering matters:
        // the `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
        // so `test` must be added before them to sit at the base of the chain.
        const extend = this._options.extend || [];
        const featureorder = getpath(this._options, '__derived__.featureorder') || [];
        for (const fname of featureorder) {
            const fopts = this._options.feature[fname] || {};
            if (fopts.active) {
                // An active name with no generated class is legal when an
                // extend-supplied instance carries that name (station's adopt
                // path): the instance is added below, positioned by its own
                // __after__ entry, so skip it here rather than fail construction.
                if (!this._rootctx.config.hasFeature(fname) &&
                    extend.some((f) => fname === f.name)) {
                    continue;
                }
                featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname));
            }
        }
        for (let f of extend) {
            featureAdd(this._rootctx, f);
        }
        for (let f of this._features) {
            featureInit(this._rootctx, f);
        }
        const featureHook = this._utility.featureHook;
        featureHook(this._rootctx, 'PostConstruct');
    }
    options() {
        return this._utility.struct.clone(this._options);
    }
    utility() {
        return this._utility.struct.clone(this._utility);
    }
    async prepare(fetchargs) {
        const utility = this._utility;
        const struct = utility.struct;
        const clone = struct.clone;
        const { makeContext, makeFetchDef, prepareHeaders, prepareAuth, } = utility;
        fetchargs = fetchargs || {};
        let ctx = makeContext({
            opname: 'prepare',
            ctrl: fetchargs.ctrl || {},
        }, this._rootctx);
        const options = this._options;
        const method = String(fetchargs.method || 'GET').toUpperCase();
        if (!(0, PrepareMethodUtility_1.allowed)(options.allow.method, method)) {
            return ctx.error('spec_method_allow', 'Method "' + method +
                '" not allowed by SDK option allow.method value: "' + options.allow.method + '"');
        }
        const spec = {
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
        };
        ctx.spec = spec;
        if (fetchargs.headers) {
            const uheaders = fetchargs.headers;
            for (let key in uheaders) {
                spec.headers[key] = uheaders[key];
            }
        }
        const authResult = prepareAuth(ctx);
        if (authResult instanceof Error) {
            return authResult;
        }
        return makeFetchDef(ctx);
    }
    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    // either one reaches the same endpoint.
    async direct(fetchargs) {
        if (!(0, PrepareMethodUtility_1.allowed)(this._options.allow.op, 'direct')) {
            return {
                ok: false,
                err: new Error('TmdbSDK: direct: operation not allowed by' +
                    ' SDK option allow.op value: "' + this._options.allow.op + '"'),
            };
        }
        return this._rawRequest(fetchargs);
    }
    // Ungated request path shared by direct() and graphql(), each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    async _rawRequest(fetchargs) {
        const utility = this._utility;
        const fetcher = utility.fetcher;
        const makeContext = utility.makeContext;
        const fetchdef = await this.prepare(fetchargs);
        if (fetchdef instanceof Error) {
            return { ok: false, err: utility.clean(this._rootctx, fetchdef) };
        }
        let ctx = makeContext({
            opname: 'direct',
            ctrl: (fetchargs || {}).ctrl || {},
        }, this._rootctx);
        try {
            if (true === fetchdef.signal?.aborted) {
                throw fetchdef.signal.reason;
            }
            const fetched = await fetcher(ctx, fetchdef.url, fetchdef);
            if (null == fetched) {
                return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') };
            }
            else if (fetched instanceof Error) {
                return { ok: false, err: utility.clean(ctx, (0, MakeRequestUtility_1.abortError)(ctx, fetched)) };
            }
            const status = fetched.status;
            // No body responses (204 No Content, 304 Not Modified) and explicit
            // zero content-length must skip JSON parsing — fetched.json() would
            // throw `Unexpected end of JSON input` on an empty body.
            const headers = fetched.headers;
            const contentLength = headers && 'function' === typeof headers.get
                ? headers.get('content-length')
                : (headers || {})['content-length'];
            const noBody = 204 === status || 304 === status || '0' === String(contentLength);
            let json = undefined;
            let err = undefined;
            if (!noBody) {
                let text = undefined;
                try {
                    const raw = fetched;
                    if ('function' === typeof raw.text) {
                        text = await raw.text();
                        json = '' === text.trim() ? undefined : JSON.parse(text);
                    }
                    else {
                        json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json;
                    }
                }
                catch (parseErr) {
                    if ('SyntaxError' !== parseErr?.name) {
                        throw parseErr;
                    }
                    err = (0, ResultBodyUtility_1.unreadableBody)(ctx, {
                        status, headers, text: text ?? parseErr.text, sent: fetchdef.headers,
                        failed: 200 <= status && status < 300 ? undefined :
                            ctx.error('request_status', 'request: ' + status + ': ' + fetched.statusText),
                    });
                }
            }
            return {
                ok: null == err && status >= 200 && status < 300,
                status,
                headers: fetched.headers,
                data: json,
                ...(null == err ? {} : { err: utility.clean(ctx, err) }),
            };
        }
        catch (err) {
            return { ok: false, err: utility.clean(ctx, (0, MakeRequestUtility_1.abortError)(ctx, err)) };
        }
    }
    async graphql(query, variables, ctrl) {
        const options = this._options;
        if (!(0, PrepareMethodUtility_1.allowed)(options.allow.op, 'graphql')) {
            return {
                ok: false,
                err: new Error('TmdbSDK: graphql: operation not allowed by' +
                    ' SDK option allow.op value: "' + options.allow.op + '"'),
            };
        }
        const res = await this._rawRequest({
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: { query, variables: variables || {} },
            ctrl,
        });
        // Errors are read BEFORE any status check: a GraphQL parse or validation
        // failure comes back as HTTP 400 carrying the standard { errors: [...] }
        // body, and the raw path represents a non-2xx as { ok: false } with no
        // err — so returning early on status would discard the server's own
        // diagnostics, which are the only useful part of that response.
        const errors = null == res.data ? undefined : res.data.errors;
        if (null != errors && Array.isArray(errors) && 0 < errors.length) {
            const first = errors[0] || {};
            const err = new Error('TmdbSDK: graphql: ' +
                (first.message || 'graphql error'));
            err.graphql = errors;
            return { ok: false, status: res.status, headers: res.headers, err, data: res.data };
        }
        return res;
    }
    // Entity access: `client.Account().list()` / `client.Account().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Account(entopts) {
        const self = this;
        return new AccountEntity_1.AccountEntity(self, entopts);
    }
    // Entity access: `client.AccountList().list()` / `client.AccountList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AccountList(entopts) {
        const self = this;
        return new AccountListEntity_1.AccountListEntity(self, entopts);
    }
    // Entity access: `client.AiringToday().list()` / `client.AiringToday().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AiringToday(entopts) {
        const self = this;
        return new AiringTodayEntity_1.AiringTodayEntity(self, entopts);
    }
    // Entity access: `client.All().list()` / `client.All().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    All(entopts) {
        const self = this;
        return new AllEntity_1.AllEntity(self, entopts);
    }
    // Entity access: `client.Authentication().list()` / `client.Authentication().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Authentication(entopts) {
        const self = this;
        return new AuthenticationEntity_1.AuthenticationEntity(self, entopts);
    }
    // Entity access: `client.Change().list()` / `client.Change().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Change(entopts) {
        const self = this;
        return new ChangeEntity_1.ChangeEntity(self, entopts);
    }
    // Entity access: `client.Collection().list()` / `client.Collection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Collection(entopts) {
        const self = this;
        return new CollectionEntity_1.CollectionEntity(self, entopts);
    }
    // Entity access: `client.CollectionImage().list()` / `client.CollectionImage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CollectionImage(entopts) {
        const self = this;
        return new CollectionImageEntity_1.CollectionImageEntity(self, entopts);
    }
    // Entity access: `client.CollectionTranslation().list()` / `client.CollectionTranslation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CollectionTranslation(entopts) {
        const self = this;
        return new CollectionTranslationEntity_1.CollectionTranslationEntity(self, entopts);
    }
    // Entity access: `client.Company().list()` / `client.Company().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Company(entopts) {
        const self = this;
        return new CompanyEntity_1.CompanyEntity(self, entopts);
    }
    // Entity access: `client.CompanyAlternativeName().list()` / `client.CompanyAlternativeName().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CompanyAlternativeName(entopts) {
        const self = this;
        return new CompanyAlternativeNameEntity_1.CompanyAlternativeNameEntity(self, entopts);
    }
    // Entity access: `client.CompanyImage().list()` / `client.CompanyImage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CompanyImage(entopts) {
        const self = this;
        return new CompanyImageEntity_1.CompanyImageEntity(self, entopts);
    }
    // Entity access: `client.Configuration().list()` / `client.Configuration().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Configuration(entopts) {
        const self = this;
        return new ConfigurationEntity_1.ConfigurationEntity(self, entopts);
    }
    // Entity access: `client.Country().list()` / `client.Country().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Country(entopts) {
        const self = this;
        return new CountryEntity_1.CountryEntity(self, entopts);
    }
    // Entity access: `client.Credit().list()` / `client.Credit().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Credit(entopts) {
        const self = this;
        return new CreditEntity_1.CreditEntity(self, entopts);
    }
    // Entity access: `client.Episode().list()` / `client.Episode().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Episode(entopts) {
        const self = this;
        return new EpisodeEntity_1.EpisodeEntity(self, entopts);
    }
    // Entity access: `client.EpisodeAccountState().list()` / `client.EpisodeAccountState().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EpisodeAccountState(entopts) {
        const self = this;
        return new EpisodeAccountStateEntity_1.EpisodeAccountStateEntity(self, entopts);
    }
    // Entity access: `client.EpisodeChange().list()` / `client.EpisodeChange().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EpisodeChange(entopts) {
        const self = this;
        return new EpisodeChangeEntity_1.EpisodeChangeEntity(self, entopts);
    }
    // Entity access: `client.EpisodeCredit().list()` / `client.EpisodeCredit().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EpisodeCredit(entopts) {
        const self = this;
        return new EpisodeCreditEntity_1.EpisodeCreditEntity(self, entopts);
    }
    // Entity access: `client.EpisodeExternalId().list()` / `client.EpisodeExternalId().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EpisodeExternalId(entopts) {
        const self = this;
        return new EpisodeExternalIdEntity_1.EpisodeExternalIdEntity(self, entopts);
    }
    // Entity access: `client.EpisodeGroup().list()` / `client.EpisodeGroup().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EpisodeGroup(entopts) {
        const self = this;
        return new EpisodeGroupEntity_1.EpisodeGroupEntity(self, entopts);
    }
    // Entity access: `client.EpisodeImage().list()` / `client.EpisodeImage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EpisodeImage(entopts) {
        const self = this;
        return new EpisodeImageEntity_1.EpisodeImageEntity(self, entopts);
    }
    // Entity access: `client.EpisodeTranslation().list()` / `client.EpisodeTranslation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EpisodeTranslation(entopts) {
        const self = this;
        return new EpisodeTranslationEntity_1.EpisodeTranslationEntity(self, entopts);
    }
    // Entity access: `client.EpisodeVideo().list()` / `client.EpisodeVideo().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EpisodeVideo(entopts) {
        const self = this;
        return new EpisodeVideoEntity_1.EpisodeVideoEntity(self, entopts);
    }
    // Entity access: `client.Favorite().list()` / `client.Favorite().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Favorite(entopts) {
        const self = this;
        return new FavoriteEntity_1.FavoriteEntity(self, entopts);
    }
    // Entity access: `client.Find().list()` / `client.Find().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Find(entopts) {
        const self = this;
        return new FindEntity_1.FindEntity(self, entopts);
    }
    // Entity access: `client.Job().list()` / `client.Job().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Job(entopts) {
        const self = this;
        return new JobEntity_1.JobEntity(self, entopts);
    }
    // Entity access: `client.Keyword().list()` / `client.Keyword().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Keyword(entopts) {
        const self = this;
        return new KeywordEntity_1.KeywordEntity(self, entopts);
    }
    // Entity access: `client.KeywordMovie().list()` / `client.KeywordMovie().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    KeywordMovie(entopts) {
        const self = this;
        return new KeywordMovieEntity_1.KeywordMovieEntity(self, entopts);
    }
    // Entity access: `client.Language().list()` / `client.Language().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Language(entopts) {
        const self = this;
        return new LanguageEntity_1.LanguageEntity(self, entopts);
    }
    // Entity access: `client.Latest().list()` / `client.Latest().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Latest(entopts) {
        const self = this;
        return new LatestEntity_1.LatestEntity(self, entopts);
    }
    // Entity access: `client.List().list()` / `client.List().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    List(entopts) {
        const self = this;
        return new ListEntity_1.ListEntity(self, entopts);
    }
    // Entity access: `client.ListItemStatus().list()` / `client.ListItemStatus().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListItemStatus(entopts) {
        const self = this;
        return new ListItemStatusEntity_1.ListItemStatusEntity(self, entopts);
    }
    // Entity access: `client.Movie().list()` / `client.Movie().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Movie(entopts) {
        const self = this;
        return new MovieEntity_1.MovieEntity(self, entopts);
    }
    // Entity access: `client.MovieAccountState().list()` / `client.MovieAccountState().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    MovieAccountState(entopts) {
        const self = this;
        return new MovieAccountStateEntity_1.MovieAccountStateEntity(self, entopts);
    }
    // Entity access: `client.MovieAlternativeTitle().list()` / `client.MovieAlternativeTitle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    MovieAlternativeTitle(entopts) {
        const self = this;
        return new MovieAlternativeTitleEntity_1.MovieAlternativeTitleEntity(self, entopts);
    }
    // Entity access: `client.MovieChange().list()` / `client.MovieChange().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    MovieChange(entopts) {
        const self = this;
        return new MovieChangeEntity_1.MovieChangeEntity(self, entopts);
    }
    // Entity access: `client.MovieCredit().list()` / `client.MovieCredit().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    MovieCredit(entopts) {
        const self = this;
        return new MovieCreditEntity_1.MovieCreditEntity(self, entopts);
    }
    // Entity access: `client.MovieExternalId().list()` / `client.MovieExternalId().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    MovieExternalId(entopts) {
        const self = this;
        return new MovieExternalIdEntity_1.MovieExternalIdEntity(self, entopts);
    }
    // Entity access: `client.MovieImage().list()` / `client.MovieImage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    MovieImage(entopts) {
        const self = this;
        return new MovieImageEntity_1.MovieImageEntity(self, entopts);
    }
    // Entity access: `client.MovieKeyword().list()` / `client.MovieKeyword().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    MovieKeyword(entopts) {
        const self = this;
        return new MovieKeywordEntity_1.MovieKeywordEntity(self, entopts);
    }
    // Entity access: `client.MovieList().list()` / `client.MovieList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    MovieList(entopts) {
        const self = this;
        return new MovieListEntity_1.MovieListEntity(self, entopts);
    }
    // Entity access: `client.MovieRecommendation().list()` / `client.MovieRecommendation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    MovieRecommendation(entopts) {
        const self = this;
        return new MovieRecommendationEntity_1.MovieRecommendationEntity(self, entopts);
    }
    // Entity access: `client.MovieReleaseDate().list()` / `client.MovieReleaseDate().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    MovieReleaseDate(entopts) {
        const self = this;
        return new MovieReleaseDateEntity_1.MovieReleaseDateEntity(self, entopts);
    }
    // Entity access: `client.MovieReview().list()` / `client.MovieReview().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    MovieReview(entopts) {
        const self = this;
        return new MovieReviewEntity_1.MovieReviewEntity(self, entopts);
    }
    // Entity access: `client.MovieSimilar().list()` / `client.MovieSimilar().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    MovieSimilar(entopts) {
        const self = this;
        return new MovieSimilarEntity_1.MovieSimilarEntity(self, entopts);
    }
    // Entity access: `client.MovieTranslation().list()` / `client.MovieTranslation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    MovieTranslation(entopts) {
        const self = this;
        return new MovieTranslationEntity_1.MovieTranslationEntity(self, entopts);
    }
    // Entity access: `client.MovieVideo().list()` / `client.MovieVideo().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    MovieVideo(entopts) {
        const self = this;
        return new MovieVideoEntity_1.MovieVideoEntity(self, entopts);
    }
    // Entity access: `client.Multi().list()` / `client.Multi().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Multi(entopts) {
        const self = this;
        return new MultiEntity_1.MultiEntity(self, entopts);
    }
    // Entity access: `client.N4n().list()` / `client.N4n().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    N4n(entopts) {
        const self = this;
        return new N4nEntity_1.N4nEntity(self, entopts);
    }
    // Entity access: `client.Network().list()` / `client.Network().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Network(entopts) {
        const self = this;
        return new NetworkEntity_1.NetworkEntity(self, entopts);
    }
    // Entity access: `client.NetworkAlternativeName().list()` / `client.NetworkAlternativeName().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    NetworkAlternativeName(entopts) {
        const self = this;
        return new NetworkAlternativeNameEntity_1.NetworkAlternativeNameEntity(self, entopts);
    }
    // Entity access: `client.NetworkImage().list()` / `client.NetworkImage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    NetworkImage(entopts) {
        const self = this;
        return new NetworkImageEntity_1.NetworkImageEntity(self, entopts);
    }
    // Entity access: `client.New().list()` / `client.New().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    New(entopts) {
        const self = this;
        return new NewEntity_1.NewEntity(self, entopts);
    }
    // Entity access: `client.NowPlaying().list()` / `client.NowPlaying().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    NowPlaying(entopts) {
        const self = this;
        return new NowPlayingEntity_1.NowPlayingEntity(self, entopts);
    }
    // Entity access: `client.OnTheAir().list()` / `client.OnTheAir().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OnTheAir(entopts) {
        const self = this;
        return new OnTheAirEntity_1.OnTheAirEntity(self, entopts);
    }
    // Entity access: `client.Person().list()` / `client.Person().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Person(entopts) {
        const self = this;
        return new PersonEntity_1.PersonEntity(self, entopts);
    }
    // Entity access: `client.PersonChange().list()` / `client.PersonChange().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PersonChange(entopts) {
        const self = this;
        return new PersonChangeEntity_1.PersonChangeEntity(self, entopts);
    }
    // Entity access: `client.PersonCombinedCredit().list()` / `client.PersonCombinedCredit().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PersonCombinedCredit(entopts) {
        const self = this;
        return new PersonCombinedCreditEntity_1.PersonCombinedCreditEntity(self, entopts);
    }
    // Entity access: `client.PersonExternalId().list()` / `client.PersonExternalId().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PersonExternalId(entopts) {
        const self = this;
        return new PersonExternalIdEntity_1.PersonExternalIdEntity(self, entopts);
    }
    // Entity access: `client.PersonImage().list()` / `client.PersonImage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PersonImage(entopts) {
        const self = this;
        return new PersonImageEntity_1.PersonImageEntity(self, entopts);
    }
    // Entity access: `client.PersonMovieCredit().list()` / `client.PersonMovieCredit().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PersonMovieCredit(entopts) {
        const self = this;
        return new PersonMovieCreditEntity_1.PersonMovieCreditEntity(self, entopts);
    }
    // Entity access: `client.PersonTaggedImage().list()` / `client.PersonTaggedImage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PersonTaggedImage(entopts) {
        const self = this;
        return new PersonTaggedImageEntity_1.PersonTaggedImageEntity(self, entopts);
    }
    // Entity access: `client.PersonTranslation().list()` / `client.PersonTranslation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PersonTranslation(entopts) {
        const self = this;
        return new PersonTranslationEntity_1.PersonTranslationEntity(self, entopts);
    }
    // Entity access: `client.PersonTvCredit().list()` / `client.PersonTvCredit().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PersonTvCredit(entopts) {
        const self = this;
        return new PersonTvCreditEntity_1.PersonTvCreditEntity(self, entopts);
    }
    // Entity access: `client.Popular().list()` / `client.Popular().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Popular(entopts) {
        const self = this;
        return new PopularEntity_1.PopularEntity(self, entopts);
    }
    // Entity access: `client.PrimaryTranslation().list()` / `client.PrimaryTranslation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PrimaryTranslation(entopts) {
        const self = this;
        return new PrimaryTranslationEntity_1.PrimaryTranslationEntity(self, entopts);
    }
    // Entity access: `client.Provider().list()` / `client.Provider().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Provider(entopts) {
        const self = this;
        return new ProviderEntity_1.ProviderEntity(self, entopts);
    }
    // Entity access: `client.Region().list()` / `client.Region().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Region(entopts) {
        const self = this;
        return new RegionEntity_1.RegionEntity(self, entopts);
    }
    // Entity access: `client.Review().list()` / `client.Review().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Review(entopts) {
        const self = this;
        return new ReviewEntity_1.ReviewEntity(self, entopts);
    }
    // Entity access: `client.Season().list()` / `client.Season().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Season(entopts) {
        const self = this;
        return new SeasonEntity_1.SeasonEntity(self, entopts);
    }
    // Entity access: `client.SeasonAccountState().list()` / `client.SeasonAccountState().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SeasonAccountState(entopts) {
        const self = this;
        return new SeasonAccountStateEntity_1.SeasonAccountStateEntity(self, entopts);
    }
    // Entity access: `client.SeasonAggregateCredit().list()` / `client.SeasonAggregateCredit().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SeasonAggregateCredit(entopts) {
        const self = this;
        return new SeasonAggregateCreditEntity_1.SeasonAggregateCreditEntity(self, entopts);
    }
    // Entity access: `client.SeasonChange().list()` / `client.SeasonChange().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SeasonChange(entopts) {
        const self = this;
        return new SeasonChangeEntity_1.SeasonChangeEntity(self, entopts);
    }
    // Entity access: `client.SeasonCredit().list()` / `client.SeasonCredit().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SeasonCredit(entopts) {
        const self = this;
        return new SeasonCreditEntity_1.SeasonCreditEntity(self, entopts);
    }
    // Entity access: `client.SeasonExternalId().list()` / `client.SeasonExternalId().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SeasonExternalId(entopts) {
        const self = this;
        return new SeasonExternalIdEntity_1.SeasonExternalIdEntity(self, entopts);
    }
    // Entity access: `client.SeasonImage().list()` / `client.SeasonImage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SeasonImage(entopts) {
        const self = this;
        return new SeasonImageEntity_1.SeasonImageEntity(self, entopts);
    }
    // Entity access: `client.SeasonTranslation().list()` / `client.SeasonTranslation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SeasonTranslation(entopts) {
        const self = this;
        return new SeasonTranslationEntity_1.SeasonTranslationEntity(self, entopts);
    }
    // Entity access: `client.SeasonVideo().list()` / `client.SeasonVideo().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SeasonVideo(entopts) {
        const self = this;
        return new SeasonVideoEntity_1.SeasonVideoEntity(self, entopts);
    }
    // Entity access: `client.Session().list()` / `client.Session().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Session(entopts) {
        const self = this;
        return new SessionEntity_1.SessionEntity(self, entopts);
    }
    // Entity access: `client.Timezone().list()` / `client.Timezone().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Timezone(entopts) {
        const self = this;
        return new TimezoneEntity_1.TimezoneEntity(self, entopts);
    }
    // Entity access: `client.TopRated().list()` / `client.TopRated().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TopRated(entopts) {
        const self = this;
        return new TopRatedEntity_1.TopRatedEntity(self, entopts);
    }
    // Entity access: `client.TvAccountState().list()` / `client.TvAccountState().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TvAccountState(entopts) {
        const self = this;
        return new TvAccountStateEntity_1.TvAccountStateEntity(self, entopts);
    }
    // Entity access: `client.TvAggregateCredit().list()` / `client.TvAggregateCredit().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TvAggregateCredit(entopts) {
        const self = this;
        return new TvAggregateCreditEntity_1.TvAggregateCreditEntity(self, entopts);
    }
    // Entity access: `client.TvAlternativeTitle().list()` / `client.TvAlternativeTitle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TvAlternativeTitle(entopts) {
        const self = this;
        return new TvAlternativeTitleEntity_1.TvAlternativeTitleEntity(self, entopts);
    }
    // Entity access: `client.TvChange().list()` / `client.TvChange().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TvChange(entopts) {
        const self = this;
        return new TvChangeEntity_1.TvChangeEntity(self, entopts);
    }
    // Entity access: `client.TvContentRating().list()` / `client.TvContentRating().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TvContentRating(entopts) {
        const self = this;
        return new TvContentRatingEntity_1.TvContentRatingEntity(self, entopts);
    }
    // Entity access: `client.TvCredit().list()` / `client.TvCredit().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TvCredit(entopts) {
        const self = this;
        return new TvCreditEntity_1.TvCreditEntity(self, entopts);
    }
    // Entity access: `client.TvEpisodeGroup().list()` / `client.TvEpisodeGroup().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TvEpisodeGroup(entopts) {
        const self = this;
        return new TvEpisodeGroupEntity_1.TvEpisodeGroupEntity(self, entopts);
    }
    // Entity access: `client.TvExternalId().list()` / `client.TvExternalId().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TvExternalId(entopts) {
        const self = this;
        return new TvExternalIdEntity_1.TvExternalIdEntity(self, entopts);
    }
    // Entity access: `client.TvImage().list()` / `client.TvImage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TvImage(entopts) {
        const self = this;
        return new TvImageEntity_1.TvImageEntity(self, entopts);
    }
    // Entity access: `client.TvKeyword().list()` / `client.TvKeyword().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TvKeyword(entopts) {
        const self = this;
        return new TvKeywordEntity_1.TvKeywordEntity(self, entopts);
    }
    // Entity access: `client.TvList().list()` / `client.TvList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TvList(entopts) {
        const self = this;
        return new TvListEntity_1.TvListEntity(self, entopts);
    }
    // Entity access: `client.TvRecommendation().list()` / `client.TvRecommendation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TvRecommendation(entopts) {
        const self = this;
        return new TvRecommendationEntity_1.TvRecommendationEntity(self, entopts);
    }
    // Entity access: `client.TvReview().list()` / `client.TvReview().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TvReview(entopts) {
        const self = this;
        return new TvReviewEntity_1.TvReviewEntity(self, entopts);
    }
    // Entity access: `client.TvScreenedTheatrically().list()` / `client.TvScreenedTheatrically().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TvScreenedTheatrically(entopts) {
        const self = this;
        return new TvScreenedTheatricallyEntity_1.TvScreenedTheatricallyEntity(self, entopts);
    }
    // Entity access: `client.TvSimilar().list()` / `client.TvSimilar().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TvSimilar(entopts) {
        const self = this;
        return new TvSimilarEntity_1.TvSimilarEntity(self, entopts);
    }
    // Entity access: `client.TvTranslation().list()` / `client.TvTranslation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TvTranslation(entopts) {
        const self = this;
        return new TvTranslationEntity_1.TvTranslationEntity(self, entopts);
    }
    // Entity access: `client.TvVideo().list()` / `client.TvVideo().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TvVideo(entopts) {
        const self = this;
        return new TvVideoEntity_1.TvVideoEntity(self, entopts);
    }
    // Entity access: `client.Tvn().list()` / `client.Tvn().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Tvn(entopts) {
        const self = this;
        return new TvnEntity_1.TvnEntity(self, entopts);
    }
    // Entity access: `client.Upcoming().list()` / `client.Upcoming().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Upcoming(entopts) {
        const self = this;
        return new UpcomingEntity_1.UpcomingEntity(self, entopts);
    }
    // Entity access: `client.ValidateWithLogin().list()` / `client.ValidateWithLogin().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ValidateWithLogin(entopts) {
        const self = this;
        return new ValidateWithLoginEntity_1.ValidateWithLoginEntity(self, entopts);
    }
    // Entity access: `client.Watchlist().list()` / `client.Watchlist().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Watchlist(entopts) {
        const self = this;
        return new WatchlistEntity_1.WatchlistEntity(self, entopts);
    }
    static test(testoptsarg, sdkoptsarg) {
        const struct = stdutil.struct;
        const setpath = struct.setpath;
        const getdef = struct.getdef;
        const clone = struct.clone;
        const setprop = struct.setprop;
        const sdkopts = getdef(clone(sdkoptsarg), {});
        const testopts = getdef(clone(testoptsarg), {});
        setprop(testopts, 'active', true);
        setpath(sdkopts, 'feature.test', testopts);
        const testsdk = new TmdbSDK(sdkopts);
        testsdk._mode = 'test';
        return testsdk;
    }
    tester(testopts, sdkopts) {
        return TmdbSDK.test(testopts, sdkopts);
    }
    toJSON() {
        return { name: 'Tmdb' };
    }
    toString() {
        return 'Tmdb ' + this._utility.struct.jsonify(this.toJSON());
    }
    [node_util_1.inspect.custom]() {
        return this.toString();
    }
}
exports.TmdbSDK = TmdbSDK;
const SDK = TmdbSDK;
exports.SDK = SDK;
//# sourceMappingURL=TmdbSDK.js.map