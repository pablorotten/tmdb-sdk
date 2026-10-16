# Tmdb TypeScript SDK Reference

Complete API reference for the Tmdb TypeScript SDK.


## TmdbSDK

### Constructor

```ts
new TmdbSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `TmdbSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = TmdbSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `TmdbSDK` instance in test mode.


### Instance Methods

#### `Account(data?: object)`

Create a new `Account` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AccountEntity` instance.

#### `AccountList(data?: object)`

Create a new `AccountList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AccountListEntity` instance.

#### `AiringToday(data?: object)`

Create a new `AiringToday` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AiringTodayEntity` instance.

#### `All(data?: object)`

Create a new `All` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AllEntity` instance.

#### `Authentication(data?: object)`

Create a new `Authentication` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AuthenticationEntity` instance.

#### `Change(data?: object)`

Create a new `Change` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ChangeEntity` instance.

#### `Collection(data?: object)`

Create a new `Collection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CollectionEntity` instance.

#### `CollectionImage(data?: object)`

Create a new `CollectionImage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CollectionImageEntity` instance.

#### `CollectionTranslation(data?: object)`

Create a new `CollectionTranslation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CollectionTranslationEntity` instance.

#### `Company(data?: object)`

Create a new `Company` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CompanyEntity` instance.

#### `CompanyAlternativeName(data?: object)`

Create a new `CompanyAlternativeName` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CompanyAlternativeNameEntity` instance.

#### `CompanyImage(data?: object)`

Create a new `CompanyImage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CompanyImageEntity` instance.

#### `Configuration(data?: object)`

Create a new `Configuration` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConfigurationEntity` instance.

#### `Country(data?: object)`

Create a new `Country` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CountryEntity` instance.

#### `Credit(data?: object)`

Create a new `Credit` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CreditEntity` instance.

#### `Episode(data?: object)`

Create a new `Episode` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EpisodeEntity` instance.

#### `EpisodeAccountState(data?: object)`

Create a new `EpisodeAccountState` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EpisodeAccountStateEntity` instance.

#### `EpisodeChange(data?: object)`

Create a new `EpisodeChange` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EpisodeChangeEntity` instance.

#### `EpisodeCredit(data?: object)`

Create a new `EpisodeCredit` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EpisodeCreditEntity` instance.

#### `EpisodeExternalId(data?: object)`

Create a new `EpisodeExternalId` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EpisodeExternalIdEntity` instance.

#### `EpisodeGroup(data?: object)`

Create a new `EpisodeGroup` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EpisodeGroupEntity` instance.

#### `EpisodeImage(data?: object)`

Create a new `EpisodeImage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EpisodeImageEntity` instance.

#### `EpisodeTranslation(data?: object)`

Create a new `EpisodeTranslation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EpisodeTranslationEntity` instance.

#### `EpisodeVideo(data?: object)`

Create a new `EpisodeVideo` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EpisodeVideoEntity` instance.

#### `Favorite(data?: object)`

Create a new `Favorite` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FavoriteEntity` instance.

#### `Find(data?: object)`

Create a new `Find` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FindEntity` instance.

#### `Job(data?: object)`

Create a new `Job` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `JobEntity` instance.

#### `Keyword(data?: object)`

Create a new `Keyword` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `KeywordEntity` instance.

#### `KeywordMovie(data?: object)`

Create a new `KeywordMovie` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `KeywordMovieEntity` instance.

#### `Language(data?: object)`

Create a new `Language` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LanguageEntity` instance.

#### `Latest(data?: object)`

Create a new `Latest` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LatestEntity` instance.

#### `List(data?: object)`

Create a new `List` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListEntity` instance.

#### `ListItemStatus(data?: object)`

Create a new `ListItemStatus` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListItemStatusEntity` instance.

#### `Movie(data?: object)`

Create a new `Movie` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MovieEntity` instance.

#### `MovieAccountState(data?: object)`

Create a new `MovieAccountState` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MovieAccountStateEntity` instance.

#### `MovieAlternativeTitle(data?: object)`

Create a new `MovieAlternativeTitle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MovieAlternativeTitleEntity` instance.

#### `MovieChange(data?: object)`

Create a new `MovieChange` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MovieChangeEntity` instance.

#### `MovieCredit(data?: object)`

Create a new `MovieCredit` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MovieCreditEntity` instance.

#### `MovieExternalId(data?: object)`

Create a new `MovieExternalId` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MovieExternalIdEntity` instance.

#### `MovieImage(data?: object)`

Create a new `MovieImage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MovieImageEntity` instance.

#### `MovieKeyword(data?: object)`

Create a new `MovieKeyword` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MovieKeywordEntity` instance.

#### `MovieList(data?: object)`

Create a new `MovieList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MovieListEntity` instance.

#### `MovieRecommendation(data?: object)`

Create a new `MovieRecommendation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MovieRecommendationEntity` instance.

#### `MovieReleaseDate(data?: object)`

Create a new `MovieReleaseDate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MovieReleaseDateEntity` instance.

#### `MovieReview(data?: object)`

Create a new `MovieReview` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MovieReviewEntity` instance.

#### `MovieSimilar(data?: object)`

Create a new `MovieSimilar` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MovieSimilarEntity` instance.

#### `MovieTranslation(data?: object)`

Create a new `MovieTranslation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MovieTranslationEntity` instance.

#### `MovieVideo(data?: object)`

Create a new `MovieVideo` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MovieVideoEntity` instance.

#### `Multi(data?: object)`

Create a new `Multi` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MultiEntity` instance.

#### `N4n(data?: object)`

Create a new `N4n` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `N4nEntity` instance.

#### `Network(data?: object)`

Create a new `Network` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NetworkEntity` instance.

#### `NetworkAlternativeName(data?: object)`

Create a new `NetworkAlternativeName` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NetworkAlternativeNameEntity` instance.

#### `NetworkImage(data?: object)`

Create a new `NetworkImage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NetworkImageEntity` instance.

#### `New(data?: object)`

Create a new `New` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NewEntity` instance.

#### `NowPlaying(data?: object)`

Create a new `NowPlaying` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NowPlayingEntity` instance.

#### `OnTheAir(data?: object)`

Create a new `OnTheAir` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OnTheAirEntity` instance.

#### `Person(data?: object)`

Create a new `Person` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PersonEntity` instance.

#### `PersonChange(data?: object)`

Create a new `PersonChange` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PersonChangeEntity` instance.

#### `PersonCombinedCredit(data?: object)`

Create a new `PersonCombinedCredit` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PersonCombinedCreditEntity` instance.

#### `PersonExternalId(data?: object)`

Create a new `PersonExternalId` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PersonExternalIdEntity` instance.

#### `PersonImage(data?: object)`

Create a new `PersonImage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PersonImageEntity` instance.

#### `PersonMovieCredit(data?: object)`

Create a new `PersonMovieCredit` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PersonMovieCreditEntity` instance.

#### `PersonTaggedImage(data?: object)`

Create a new `PersonTaggedImage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PersonTaggedImageEntity` instance.

#### `PersonTranslation(data?: object)`

Create a new `PersonTranslation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PersonTranslationEntity` instance.

#### `PersonTvCredit(data?: object)`

Create a new `PersonTvCredit` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PersonTvCreditEntity` instance.

#### `Popular(data?: object)`

Create a new `Popular` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PopularEntity` instance.

#### `PrimaryTranslation(data?: object)`

Create a new `PrimaryTranslation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PrimaryTranslationEntity` instance.

#### `Provider(data?: object)`

Create a new `Provider` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProviderEntity` instance.

#### `Region(data?: object)`

Create a new `Region` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RegionEntity` instance.

#### `Review(data?: object)`

Create a new `Review` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ReviewEntity` instance.

#### `Season(data?: object)`

Create a new `Season` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SeasonEntity` instance.

#### `SeasonAccountState(data?: object)`

Create a new `SeasonAccountState` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SeasonAccountStateEntity` instance.

#### `SeasonAggregateCredit(data?: object)`

Create a new `SeasonAggregateCredit` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SeasonAggregateCreditEntity` instance.

#### `SeasonChange(data?: object)`

Create a new `SeasonChange` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SeasonChangeEntity` instance.

#### `SeasonCredit(data?: object)`

Create a new `SeasonCredit` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SeasonCreditEntity` instance.

#### `SeasonExternalId(data?: object)`

Create a new `SeasonExternalId` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SeasonExternalIdEntity` instance.

#### `SeasonImage(data?: object)`

Create a new `SeasonImage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SeasonImageEntity` instance.

#### `SeasonTranslation(data?: object)`

Create a new `SeasonTranslation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SeasonTranslationEntity` instance.

#### `SeasonVideo(data?: object)`

Create a new `SeasonVideo` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SeasonVideoEntity` instance.

#### `Session(data?: object)`

Create a new `Session` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SessionEntity` instance.

#### `Timezone(data?: object)`

Create a new `Timezone` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TimezoneEntity` instance.

#### `TopRated(data?: object)`

Create a new `TopRated` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TopRatedEntity` instance.

#### `TvAccountState(data?: object)`

Create a new `TvAccountState` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TvAccountStateEntity` instance.

#### `TvAggregateCredit(data?: object)`

Create a new `TvAggregateCredit` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TvAggregateCreditEntity` instance.

#### `TvAlternativeTitle(data?: object)`

Create a new `TvAlternativeTitle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TvAlternativeTitleEntity` instance.

#### `TvChange(data?: object)`

Create a new `TvChange` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TvChangeEntity` instance.

#### `TvContentRating(data?: object)`

Create a new `TvContentRating` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TvContentRatingEntity` instance.

#### `TvCredit(data?: object)`

Create a new `TvCredit` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TvCreditEntity` instance.

#### `TvEpisodeGroup(data?: object)`

Create a new `TvEpisodeGroup` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TvEpisodeGroupEntity` instance.

#### `TvExternalId(data?: object)`

Create a new `TvExternalId` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TvExternalIdEntity` instance.

#### `TvImage(data?: object)`

Create a new `TvImage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TvImageEntity` instance.

#### `TvKeyword(data?: object)`

Create a new `TvKeyword` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TvKeywordEntity` instance.

#### `TvList(data?: object)`

Create a new `TvList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TvListEntity` instance.

#### `TvRecommendation(data?: object)`

Create a new `TvRecommendation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TvRecommendationEntity` instance.

#### `TvReview(data?: object)`

Create a new `TvReview` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TvReviewEntity` instance.

#### `TvScreenedTheatrically(data?: object)`

Create a new `TvScreenedTheatrically` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TvScreenedTheatricallyEntity` instance.

#### `TvSimilar(data?: object)`

Create a new `TvSimilar` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TvSimilarEntity` instance.

#### `TvTranslation(data?: object)`

Create a new `TvTranslation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TvTranslationEntity` instance.

#### `TvVideo(data?: object)`

Create a new `TvVideo` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TvVideoEntity` instance.

#### `Tvn(data?: object)`

Create a new `Tvn` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TvnEntity` instance.

#### `Upcoming(data?: object)`

Create a new `Upcoming` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UpcomingEntity` instance.

#### `ValidateWithLogin(data?: object)`

Create a new `ValidateWithLogin` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ValidateWithLoginEntity` instance.

#### `Watchlist(data?: object)`

Create a new `Watchlist` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WatchlistEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |
| `fetchargs.ctrl.signal` | `AbortSignal` | Aborts the request in flight: `ok` is then `false` and `err.code` is `request_aborted`. |

**Returns:** `Promise<{ ok, status, headers, data }>`. On a failure
`ok` is `false` and `err` holds the error.

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `TmdbSDK.test()`.

**Returns:** `TmdbSDK` instance in test mode.

#### Cancelling a call

Every entity operation takes an optional `ctrl` object after its match or
data, and an `AbortSignal` in `ctrl.signal` cancels the request in flight.
The operation then rejects with an error whose `code` is
`request_aborted` and whose `cause` is the signal's reason. A request
whose signal has already aborted is not sent. `stream()` takes the signal
as `callopts.signal`, and ends when it aborts.


---

## AccountEntity

```ts
const account = client.Account()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar` | `Record<string, any>` | No |  |
| `id` | `number` | No |  |
| `include_adult` | `boolean` | No |  |
| `iso_3166_1` | `string` | No |  |
| `iso_639_1` | `string` | No |  |
| `name` | `string` | No |  |
| `username` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Account().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AccountEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AccountListEntity

```ts
const account_list = client.AccountList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `favorite_count` | `number` | No |  |
| `id` | `number` | No |  |
| `iso_639_1` | `string` | No |  |
| `item_count` | `number` | No |  |
| `list_type` | `string` | No |  |
| `name` | `string` | No |  |
| `poster_path` | `any` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.AccountList().list({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AccountListEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AiringTodayEntity

```ts
const airing_today = client.AiringToday()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `backdrop_path` | `string` | No |  |
| `first_air_date` | `string` | No |  |
| `genre_ids` | `any[]` | No |  |
| `id` | `number` | No |  |
| `name` | `string` | No |  |
| `origin_country` | `any[]` | No |  |
| `original_language` | `string` | No |  |
| `original_name` | `string` | No |  |
| `overview` | `string` | No |  |
| `popularity` | `number` | No |  |
| `poster_path` | `string` | No |  |
| `vote_average` | `number` | No |  |
| `vote_count` | `number` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.AiringToday().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AiringTodayEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AllEntity

```ts
const all = client.All()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `page` | `number` | No |  |
| `results` | `any[]` | No |  |
| `total_pages` | `number` | No |  |
| `total_results` | `number` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.All().load({ id: 'all_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AllEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AuthenticationEntity

```ts
const authentication = client.Authentication()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status_code` | `number` | No |  |
| `status_message` | `string` | No |  |
| `success` | `boolean` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Authentication().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AuthenticationEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ChangeEntity

```ts
const change = client.Change()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `adult` | `boolean` | No |  |
| `id` | `number` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Change().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ChangeEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CollectionEntity

```ts
const collection = client.Collection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `adult` | `boolean` | No |  |
| `backdrop_path` | `string` | No |  |
| `id` | `number` | No |  |
| `name` | `string` | No |  |
| `original_language` | `string` | No |  |
| `original_name` | `string` | No |  |
| `overview` | `string` | No |  |
| `parts` | `any[]` | No |  |
| `poster_path` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Collection().list({ query: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Collection().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CollectionImageEntity

```ts
const collection_image = client.CollectionImage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `backdrops` | `any[]` | No |  |
| `id` | `number` | No |  |
| `posters` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.CollectionImage().list({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CollectionImageEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CollectionTranslationEntity

```ts
const collection_translation = client.CollectionTranslation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Record<string, any>` | No |  |
| `english_name` | `string` | No |  |
| `id` | `string` | No |  |
| `iso_3166_1` | `string` | No |  |
| `iso_639_1` | `string` | No |  |
| `name` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.CollectionTranslation().list({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CollectionTranslationEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CompanyEntity

```ts
const company = client.Company()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `headquarters` | `string` | No |  |
| `homepage` | `string` | No |  |
| `id` | `number` | No |  |
| `logo_path` | `string` | No |  |
| `name` | `string` | No |  |
| `origin_country` | `string` | No |  |
| `parent_company` | `any` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Company().list({ query: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Company().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CompanyEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CompanyAlternativeNameEntity

```ts
const company_alternative_name = client.CompanyAlternativeName()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `name` | `string` | No |  |
| `type` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.CompanyAlternativeName().list({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CompanyAlternativeNameEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CompanyImageEntity

```ts
const company_image = client.CompanyImage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aspect_ratio` | `number` | No |  |
| `file_path` | `string` | No |  |
| `file_type` | `string` | No |  |
| `height` | `number` | No |  |
| `id` | `string` | No |  |
| `vote_average` | `number` | No |  |
| `vote_count` | `number` | No |  |
| `width` | `number` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.CompanyImage().list({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CompanyImageEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConfigurationEntity

```ts
const configuration = client.Configuration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `change_keys` | `any[]` | No |  |
| `images` | `Record<string, any>` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Configuration().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConfigurationEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CountryEntity

```ts
const country = client.Country()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `english_name` | `string` | No |  |
| `iso_3166_1` | `string` | No |  |
| `native_name` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Country().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CountryEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CreditEntity

```ts
const credit = client.Credit()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `credit_type` | `string` | No |  |
| `department` | `string` | No |  |
| `id` | `string` | No |  |
| `job` | `string` | No |  |
| `media` | `Record<string, any>` | No |  |
| `media_type` | `string` | No |  |
| `person` | `Record<string, any>` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Credit().load({ id: 'credit_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CreditEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EpisodeEntity

```ts
const episode = client.Episode()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `air_date` | `string` | No |  |
| `crew` | `any[]` | No |  |
| `episode_number` | `number` | No |  |
| `guest_stars` | `any[]` | No |  |
| `id` | `number` | No |  |
| `name` | `string` | No |  |
| `overview` | `string` | No |  |
| `production_code` | `string` | No |  |
| `rating` | `number` | No |  |
| `runtime` | `number` | No |  |
| `season_number` | `number` | No |  |
| `show_id` | `number` | No |  |
| `still_path` | `string` | No |  |
| `vote_average` | `number` | No |  |
| `vote_count` | `number` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `rating` | `/3/tv/{series_id}/season/{season_number}/episode/{episode_number}/rating` | `client.Episode().create({ $action: 'rating', ... })` |
| `rating` | `/3/tv/{series_id}/season/{season_number}/episode/{episode_number}/rating` | `client.Episode().remove({ $action: 'rating', ... })` |

An action returns that action's OWN response, which is not necessarily a
Episode record — check the API definition for its shape.

```ts
const result = await client.Episode().create({
  $action: 'rating',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Episode().create({
  id: 1,
  season_id: 1,
  tv_id: 1,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Episode().list({ account_id: 1 })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Episode().load({ id: 1, season_id: 1, tv_id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.Episode().remove({ id: 1, season_id: 1, tv_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EpisodeEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EpisodeAccountStateEntity

```ts
const episode_account_state = client.EpisodeAccountState()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `favorite` | `boolean` | No |  |
| `id` | `number` | No |  |
| `rated` | `Record<string, any>` | No |  |
| `watchlist` | `boolean` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.EpisodeAccountState().load({ episode_number: 1, season_id: 1, tv_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EpisodeAccountStateEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EpisodeChangeEntity

```ts
const episode_change = client.EpisodeChange()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `items` | `any[]` | No |  |
| `key` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.EpisodeChange().list({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EpisodeChangeEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EpisodeCreditEntity

```ts
const episode_credit = client.EpisodeCredit()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cast` | `any[]` | No |  |
| `crew` | `any[]` | No |  |
| `guest_stars` | `any[]` | No |  |
| `id` | `number` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.EpisodeCredit().list({ episode_number: 1, season_id: 1, tv_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EpisodeCreditEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EpisodeExternalIdEntity

```ts
const episode_external_id = client.EpisodeExternalId()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `freebase_id` | `string` | No |  |
| `freebase_mid` | `string` | No |  |
| `id` | `number` | No |  |
| `imdb_id` | `string` | No |  |
| `tvdb_id` | `number` | No |  |
| `tvrage_id` | `number` | No |  |
| `wikidata_id` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.EpisodeExternalId().load({ episode_number: 'episode_number', season_id: 1, tv_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EpisodeExternalIdEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EpisodeGroupEntity

```ts
const episode_group = client.EpisodeGroup()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `episode_count` | `number` | No |  |
| `group_count` | `number` | No |  |
| `groups` | `any[]` | No |  |
| `id` | `string` | No |  |
| `name` | `string` | No |  |
| `network` | `Record<string, any>` | No |  |
| `type` | `number` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.EpisodeGroup().load({ id: 'episode_group_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EpisodeGroupEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EpisodeImageEntity

```ts
const episode_image = client.EpisodeImage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aspect_ratio` | `number` | No |  |
| `file_path` | `string` | No |  |
| `height` | `number` | No |  |
| `iso_639_1` | `any` | No |  |
| `vote_average` | `number` | No |  |
| `vote_count` | `number` | No |  |
| `width` | `number` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.EpisodeImage().list({ episode_number: 1, season_id: 1, tv_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EpisodeImageEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EpisodeTranslationEntity

```ts
const episode_translation = client.EpisodeTranslation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Record<string, any>` | No |  |
| `english_name` | `string` | No |  |
| `iso_3166_1` | `string` | No |  |
| `iso_639_1` | `string` | No |  |
| `name` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.EpisodeTranslation().list({ episode_number: 1, season_id: 1, tv_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EpisodeTranslationEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EpisodeVideoEntity

```ts
const episode_video = client.EpisodeVideo()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `iso_3166_1` | `string` | No |  |
| `iso_639_1` | `string` | No |  |
| `key` | `string` | No |  |
| `name` | `string` | No |  |
| `official` | `boolean` | No |  |
| `published_at` | `string` | No |  |
| `site` | `string` | No |  |
| `size` | `number` | No |  |
| `type` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.EpisodeVideo().list({ episode_number: 1, season_id: 1, tv_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EpisodeVideoEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FavoriteEntity

```ts
const favorite = client.Favorite()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `RAW_BODY` | `string` | Yes |  |
| `status_code` | `number` | No |  |
| `status_message` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Favorite().create({
  account_id: 1,
  RAW_BODY: 'example_RAW_BODY',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FavoriteEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FindEntity

```ts
const find = client.Find()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `movie_results` | `any[]` | No |  |
| `person_results` | `any[]` | No |  |
| `tv_episode_results` | `any[]` | No |  |
| `tv_results` | `any[]` | No |  |
| `tv_season_results` | `any[]` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Find().load({ id: 'find_id', external_source: 'external_source' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FindEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## JobEntity

```ts
const job = client.Job()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `department` | `string` | No |  |
| `jobs` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Job().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `JobEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## KeywordEntity

```ts
const keyword = client.Keyword()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `number` | No |  |
| `name` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Keyword().list({ query: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Keyword().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `KeywordEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## KeywordMovieEntity

```ts
const keyword_movie = client.KeywordMovie()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `adult` | `boolean` | No |  |
| `backdrop_path` | `string` | No |  |
| `genre_ids` | `any[]` | No |  |
| `id` | `number` | No |  |
| `original_language` | `string` | No |  |
| `original_title` | `string` | No |  |
| `overview` | `string` | No |  |
| `popularity` | `number` | No |  |
| `poster_path` | `string` | No |  |
| `release_date` | `string` | No |  |
| `title` | `string` | No |  |
| `video` | `boolean` | No |  |
| `vote_average` | `number` | No |  |
| `vote_count` | `number` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.KeywordMovie().list({ id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `KeywordMovieEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LanguageEntity

```ts
const language = client.Language()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `english_name` | `string` | No |  |
| `iso_639_1` | `string` | No |  |
| `name` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Language().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LanguageEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LatestEntity

```ts
const latest = client.Latest()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `adult` | `boolean` | No |  |
| `air_date` | `any` | No |  |
| `also_known_as` | `any[]` | No |  |
| `backdrop_path` | `any` | No |  |
| `belongs_to_collection` | `any` | No |  |
| `biography` | `string` | No |  |
| `birthday` | `any` | No |  |
| `budget` | `number` | No |  |
| `deathday` | `any` | No |  |
| `episode_count` | `number` | No |  |
| `gender` | `number` | No |  |
| `genres` | `any[]` | No |  |
| `homepage` | `string` | No |  |
| `id` | `number` | No |  |
| `imdb_id` | `string` | No |  |
| `known_for_department` | `any` | No |  |
| `name` | `string` | No |  |
| `original_language` | `string` | No |  |
| `original_title` | `string` | No |  |
| `overview` | `string` | No |  |
| `place_of_birth` | `any` | No |  |
| `popularity` | `number` | No |  |
| `poster_path` | `any` | No |  |
| `production_companies` | `any[]` | No |  |
| `production_countries` | `any[]` | No |  |
| `profile_path` | `any` | No |  |
| `release_date` | `string` | No |  |
| `revenue` | `number` | No |  |
| `runtime` | `number` | No |  |
| `season_number` | `number` | No |  |
| `spoken_languages` | `any[]` | No |  |
| `status` | `string` | No |  |
| `tagline` | `string` | No |  |
| `title` | `string` | No |  |
| `video` | `boolean` | No |  |
| `vote_average` | `number` | No |  |
| `vote_count` | `number` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Latest().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LatestEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListEntity

```ts
const list = client.List()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `AR` | `any[]` | No |  |
| `AU` | `any[]` | No |  |
| `BG` | `any[]` | No |  |
| `BR` | `any[]` | No |  |
| `CA` | `any[]` | No |  |
| `CAQC` | `any[]` | No |  |
| `CH` | `any[]` | No |  |
| `DE` | `any[]` | No |  |
| `DK` | `any[]` | No |  |
| `ES` | `any[]` | No |  |
| `FI` | `any[]` | No |  |
| `FR` | `any[]` | No |  |
| `GB` | `any[]` | No |  |
| `GR` | `any[]` | No |  |
| `HK` | `any[]` | No |  |
| `HU` | `any[]` | No |  |
| `ID` | `any[]` | No |  |
| `IE` | `any[]` | No |  |
| `IL` | `any[]` | No |  |
| `IN` | `any[]` | No |  |
| `IT` | `any[]` | No |  |
| `JP` | `any[]` | No |  |
| `KR` | `any[]` | No |  |
| `LT` | `any[]` | No |  |
| `LU` | `any[]` | No |  |
| `LV` | `any[]` | No |  |
| `MA` | `any[]` | No |  |
| `MO` | `any[]` | No |  |
| `MX` | `any[]` | No |  |
| `MY` | `any[]` | No |  |
| `NL` | `any[]` | No |  |
| `NO` | `any[]` | No |  |
| `NZ` | `any[]` | No |  |
| `PH` | `any[]` | No |  |
| `PL` | `any[]` | No |  |
| `PR` | `any[]` | No |  |
| `PT` | `any[]` | No |  |
| `RAW_BODY` | `string` | Yes |  |
| `RU` | `any[]` | No |  |
| `SE` | `any[]` | No |  |
| `SG` | `any[]` | No |  |
| `SK` | `any[]` | No |  |
| `TH` | `any[]` | No |  |
| `TR` | `any[]` | No |  |
| `TW` | `any[]` | No |  |
| `US` | `any[]` | No |  |
| `VI` | `any[]` | No |  |
| `ZA` | `any[]` | No |  |
| `created_by` | `string` | No |  |
| `description` | `string` | No |  |
| `favorite_count` | `number` | No |  |
| `id` | `string` | No |  |
| `iso_639_1` | `string` | No |  |
| `item_count` | `number` | No |  |
| `items` | `any[]` | No |  |
| `list_id` | `number` | No |  |
| `name` | `string` | No |  |
| `poster_path` | `string` | No |  |
| `status_code` | `number` | No |  |
| `status_message` | `string` | No |  |
| `success` | `boolean` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `add_item` | `/3/list/{list_id}/add_item` | `client.List().create({ $action: 'add_item', ... })` |
| `clear` | `/3/list/{list_id}/clear` | `client.List().create({ $action: 'clear', ... })` |
| `remove_item` | `/3/list/{list_id}/remove_item` | `client.List().create({ $action: 'remove_item', ... })` |

An action returns that action's OWN response, which is not necessarily a
List record — check the API definition for its shape.

```ts
const result = await client.List().create({
  $action: 'add_item',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.List().create({
  session_id: 'example_session_id',
  RAW_BODY: 'example_RAW_BODY',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.List().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.List().load({ id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.List().remove({ id: 1, session_id: 'session_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListItemStatusEntity

```ts
const list_item_status = client.ListItemStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `number` | No |  |
| `item_present` | `boolean` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.ListItemStatus().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListItemStatusEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MovieEntity

```ts
const movie = client.Movie()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `adult` | `boolean` | No |  |
| `backdrop_path` | `string` | No |  |
| `belongs_to_collection` | `Record<string, any>` | No |  |
| `budget` | `number` | No |  |
| `display_priorities` | `Record<string, any>` | No |  |
| `display_priority` | `number` | No |  |
| `genre_ids` | `any[]` | No |  |
| `genres` | `any[]` | No |  |
| `homepage` | `string` | No |  |
| `id` | `number` | No |  |
| `imdb_id` | `string` | No |  |
| `logo_path` | `string` | No |  |
| `origin_country` | `any[]` | No |  |
| `original_language` | `string` | No |  |
| `original_title` | `string` | No |  |
| `overview` | `string` | No |  |
| `page` | `number` | No |  |
| `popularity` | `number` | No |  |
| `poster_path` | `string` | No |  |
| `production_companies` | `any[]` | No |  |
| `production_countries` | `any[]` | No |  |
| `provider_id` | `number` | No |  |
| `provider_name` | `string` | No |  |
| `rating` | `number` | No |  |
| `release_date` | `string` | No |  |
| `results` | `any[]` | No |  |
| `revenue` | `number` | No |  |
| `runtime` | `number` | No |  |
| `spoken_languages` | `any[]` | No |  |
| `status` | `string` | No |  |
| `tagline` | `string` | No |  |
| `title` | `string` | No |  |
| `total_pages` | `number` | No |  |
| `total_results` | `number` | No |  |
| `video` | `boolean` | No |  |
| `vote_average` | `number` | No |  |
| `vote_count` | `number` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `rating` | `/3/movie/{movie_id}/rating` | `client.Movie().create({ $action: 'rating', ... })` |
| `rating` | `/3/movie/{movie_id}/rating` | `client.Movie().remove({ $action: 'rating', ... })` |

An action returns that action's OWN response, which is not necessarily a
Movie record — check the API definition for its shape.

```ts
const result = await client.Movie().create({
  $action: 'rating',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Movie().create({
  id: 1,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Movie().list({ query: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Movie().load({ id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.Movie().remove({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MovieEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MovieAccountStateEntity

```ts
const movie_account_state = client.MovieAccountState()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `favorite` | `boolean` | No |  |
| `id` | `number` | No |  |
| `rated` | `Record<string, any>` | No |  |
| `watchlist` | `boolean` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.MovieAccountState().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MovieAccountStateEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MovieAlternativeTitleEntity

```ts
const movie_alternative_title = client.MovieAlternativeTitle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `iso_3166_1` | `string` | No |  |
| `title` | `string` | No |  |
| `type` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.MovieAlternativeTitle().list({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MovieAlternativeTitleEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MovieChangeEntity

```ts
const movie_change = client.MovieChange()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `items` | `any[]` | No |  |
| `key` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.MovieChange().list({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MovieChangeEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MovieCreditEntity

```ts
const movie_credit = client.MovieCredit()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cast` | `any[]` | No |  |
| `crew` | `any[]` | No |  |
| `id` | `number` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.MovieCredit().list({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MovieCreditEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MovieExternalIdEntity

```ts
const movie_external_id = client.MovieExternalId()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `facebook_id` | `string` | No |  |
| `id` | `number` | No |  |
| `imdb_id` | `string` | No |  |
| `instagram_id` | `string` | No |  |
| `twitter_id` | `string` | No |  |
| `wikidata_id` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.MovieExternalId().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MovieExternalIdEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MovieImageEntity

```ts
const movie_image = client.MovieImage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `backdrops` | `any[]` | No |  |
| `id` | `number` | No |  |
| `logos` | `any[]` | No |  |
| `posters` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.MovieImage().list({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MovieImageEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MovieKeywordEntity

```ts
const movie_keyword = client.MovieKeyword()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `number` | No |  |
| `name` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.MovieKeyword().list({ id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MovieKeywordEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MovieListEntity

```ts
const movie_list = client.MovieList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `favorite_count` | `number` | No |  |
| `id` | `number` | No |  |
| `iso_639_1` | `string` | No |  |
| `item_count` | `number` | No |  |
| `list_type` | `string` | No |  |
| `name` | `string` | No |  |
| `poster_path` | `any` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.MovieList().list({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MovieListEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MovieRecommendationEntity

```ts
const movie_recommendation = client.MovieRecommendation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.MovieRecommendation().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MovieRecommendationEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MovieReleaseDateEntity

```ts
const movie_release_date = client.MovieReleaseDate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `iso_3166_1` | `string` | No |  |
| `release_dates` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.MovieReleaseDate().list({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MovieReleaseDateEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MovieReviewEntity

```ts
const movie_review = client.MovieReview()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `string` | No |  |
| `author_details` | `Record<string, any>` | No |  |
| `content` | `string` | No |  |
| `created_at` | `string` | No |  |
| `id` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `url` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.MovieReview().list({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MovieReviewEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MovieSimilarEntity

```ts
const movie_similar = client.MovieSimilar()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `adult` | `boolean` | No |  |
| `backdrop_path` | `string` | No |  |
| `genre_ids` | `any[]` | No |  |
| `id` | `number` | No |  |
| `original_language` | `string` | No |  |
| `original_title` | `string` | No |  |
| `overview` | `string` | No |  |
| `popularity` | `number` | No |  |
| `poster_path` | `string` | No |  |
| `release_date` | `string` | No |  |
| `title` | `string` | No |  |
| `video` | `boolean` | No |  |
| `vote_average` | `number` | No |  |
| `vote_count` | `number` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.MovieSimilar().list({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MovieSimilarEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MovieTranslationEntity

```ts
const movie_translation = client.MovieTranslation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Record<string, any>` | No |  |
| `english_name` | `string` | No |  |
| `id` | `string` | No |  |
| `iso_3166_1` | `string` | No |  |
| `iso_639_1` | `string` | No |  |
| `name` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.MovieTranslation().list({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MovieTranslationEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MovieVideoEntity

```ts
const movie_video = client.MovieVideo()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `iso_3166_1` | `string` | No |  |
| `iso_639_1` | `string` | No |  |
| `key` | `string` | No |  |
| `name` | `string` | No |  |
| `official` | `boolean` | No |  |
| `published_at` | `string` | No |  |
| `site` | `string` | No |  |
| `size` | `number` | No |  |
| `type` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.MovieVideo().list({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MovieVideoEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MultiEntity

```ts
const multi = client.Multi()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `adult` | `boolean` | No |  |
| `backdrop_path` | `string` | No |  |
| `genre_ids` | `any[]` | No |  |
| `id` | `number` | No |  |
| `media_type` | `string` | No |  |
| `name` | `string` | No |  |
| `original_language` | `string` | No |  |
| `original_name` | `string` | No |  |
| `original_title` | `string` | No |  |
| `overview` | `string` | No |  |
| `popularity` | `number` | No |  |
| `poster_path` | `string` | No |  |
| `release_date` | `string` | No |  |
| `title` | `string` | No |  |
| `video` | `boolean` | No |  |
| `vote_average` | `number` | No |  |
| `vote_count` | `number` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Multi().list({ query: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MultiEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## N4nEntity

```ts
const n4n = client.N4n()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `RAW_BODY` | `string` | Yes |  |
| `session_id` | `string` | No |  |
| `success` | `boolean` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.N4n().create({
  RAW_BODY: 'example_RAW_BODY',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `N4nEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NetworkEntity

```ts
const network = client.Network()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `headquarters` | `string` | No |  |
| `homepage` | `string` | No |  |
| `id` | `number` | No |  |
| `logo_path` | `string` | No |  |
| `name` | `string` | No |  |
| `origin_country` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Network().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NetworkEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NetworkAlternativeNameEntity

```ts
const network_alternative_name = client.NetworkAlternativeName()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `name` | `string` | No |  |
| `type` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.NetworkAlternativeName().list({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NetworkAlternativeNameEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NetworkImageEntity

```ts
const network_image = client.NetworkImage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aspect_ratio` | `number` | No |  |
| `file_path` | `string` | No |  |
| `file_type` | `string` | No |  |
| `height` | `number` | No |  |
| `id` | `string` | No |  |
| `vote_average` | `number` | No |  |
| `vote_count` | `number` | No |  |
| `width` | `number` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.NetworkImage().list({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NetworkImageEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NewEntity

```ts
const new_ = client.New()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `RAW_BODY` | `string` | Yes |  |
| `expires_at` | `string` | No |  |
| `guest_session_id` | `string` | No |  |
| `request_token` | `string` | No |  |
| `session_id` | `string` | No |  |
| `success` | `boolean` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.New().create({
  RAW_BODY: 'example_RAW_BODY',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.New().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NewEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NowPlayingEntity

```ts
const now_playing = client.NowPlaying()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `adult` | `boolean` | No |  |
| `backdrop_path` | `string` | No |  |
| `genre_ids` | `any[]` | No |  |
| `id` | `number` | No |  |
| `original_language` | `string` | No |  |
| `original_title` | `string` | No |  |
| `overview` | `string` | No |  |
| `popularity` | `number` | No |  |
| `poster_path` | `string` | No |  |
| `release_date` | `string` | No |  |
| `title` | `string` | No |  |
| `video` | `boolean` | No |  |
| `vote_average` | `number` | No |  |
| `vote_count` | `number` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.NowPlaying().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NowPlayingEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OnTheAirEntity

```ts
const on_the_air = client.OnTheAir()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `backdrop_path` | `string` | No |  |
| `first_air_date` | `string` | No |  |
| `genre_ids` | `any[]` | No |  |
| `id` | `number` | No |  |
| `name` | `string` | No |  |
| `origin_country` | `any[]` | No |  |
| `original_language` | `string` | No |  |
| `original_name` | `string` | No |  |
| `overview` | `string` | No |  |
| `popularity` | `number` | No |  |
| `poster_path` | `string` | No |  |
| `vote_average` | `number` | No |  |
| `vote_count` | `number` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.OnTheAir().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OnTheAirEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PersonEntity

```ts
const person = client.Person()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `adult` | `boolean` | No |  |
| `also_known_as` | `any[]` | No |  |
| `biography` | `string` | No |  |
| `birthday` | `string` | No |  |
| `deathday` | `any` | No |  |
| `gender` | `number` | No |  |
| `homepage` | `any` | No |  |
| `id` | `number` | No |  |
| `imdb_id` | `string` | No |  |
| `known_for` | `any[]` | No |  |
| `known_for_department` | `string` | No |  |
| `name` | `string` | No |  |
| `original_name` | `string` | No |  |
| `page` | `number` | No |  |
| `place_of_birth` | `string` | No |  |
| `popularity` | `number` | No |  |
| `profile_path` | `string` | No |  |
| `results` | `any[]` | No |  |
| `total_pages` | `number` | No |  |
| `total_results` | `number` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Person().list({ query: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Person().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PersonEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PersonChangeEntity

```ts
const person_change = client.PersonChange()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `items` | `any[]` | No |  |
| `key` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PersonChange().list({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PersonChangeEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PersonCombinedCreditEntity

```ts
const person_combined_credit = client.PersonCombinedCredit()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cast` | `any[]` | No |  |
| `crew` | `any[]` | No |  |
| `id` | `number` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PersonCombinedCredit().list({ id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PersonCombinedCreditEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PersonExternalIdEntity

```ts
const person_external_id = client.PersonExternalId()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `facebook_id` | `string` | No |  |
| `freebase_id` | `string` | No |  |
| `freebase_mid` | `string` | No |  |
| `id` | `number` | No |  |
| `imdb_id` | `string` | No |  |
| `instagram_id` | `string` | No |  |
| `tiktok_id` | `string` | No |  |
| `tvrage_id` | `number` | No |  |
| `twitter_id` | `string` | No |  |
| `wikidata_id` | `string` | No |  |
| `youtube_id` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.PersonExternalId().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PersonExternalIdEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PersonImageEntity

```ts
const person_image = client.PersonImage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aspect_ratio` | `number` | No |  |
| `file_path` | `string` | No |  |
| `height` | `number` | No |  |
| `id` | `string` | No |  |
| `iso_639_1` | `any` | No |  |
| `vote_average` | `number` | No |  |
| `vote_count` | `number` | No |  |
| `width` | `number` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PersonImage().list({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PersonImageEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PersonMovieCreditEntity

```ts
const person_movie_credit = client.PersonMovieCredit()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cast` | `any[]` | No |  |
| `crew` | `any[]` | No |  |
| `id` | `number` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PersonMovieCredit().list({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PersonMovieCreditEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PersonTaggedImageEntity

```ts
const person_tagged_image = client.PersonTaggedImage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aspect_ratio` | `number` | No |  |
| `file_path` | `string` | No |  |
| `height` | `number` | No |  |
| `id` | `string` | No |  |
| `image_type` | `string` | No |  |
| `iso_639_1` | `string` | No |  |
| `media` | `Record<string, any>` | No |  |
| `media_type` | `string` | No |  |
| `vote_average` | `number` | No |  |
| `vote_count` | `number` | No |  |
| `width` | `number` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PersonTaggedImage().list({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PersonTaggedImageEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PersonTranslationEntity

```ts
const person_translation = client.PersonTranslation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Record<string, any>` | No |  |
| `english_name` | `string` | No |  |
| `id` | `string` | No |  |
| `iso_3166_1` | `string` | No |  |
| `iso_639_1` | `string` | No |  |
| `name` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PersonTranslation().list({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PersonTranslationEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PersonTvCreditEntity

```ts
const person_tv_credit = client.PersonTvCredit()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cast` | `any[]` | No |  |
| `crew` | `any[]` | No |  |
| `id` | `number` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PersonTvCredit().list({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PersonTvCreditEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PopularEntity

```ts
const popular = client.Popular()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `adult` | `boolean` | No |  |
| `backdrop_path` | `string` | No |  |
| `first_air_date` | `string` | No |  |
| `gender` | `number` | No |  |
| `genre_ids` | `any[]` | No |  |
| `id` | `number` | No |  |
| `known_for` | `any[]` | No |  |
| `known_for_department` | `string` | No |  |
| `name` | `string` | No |  |
| `origin_country` | `any[]` | No |  |
| `original_language` | `string` | No |  |
| `original_name` | `string` | No |  |
| `original_title` | `string` | No |  |
| `overview` | `string` | No |  |
| `popularity` | `number` | No |  |
| `poster_path` | `string` | No |  |
| `profile_path` | `string` | No |  |
| `release_date` | `string` | No |  |
| `title` | `string` | No |  |
| `video` | `boolean` | No |  |
| `vote_average` | `number` | No |  |
| `vote_count` | `number` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Popular().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PopularEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PrimaryTranslationEntity

```ts
const primary_translation = client.PrimaryTranslation()
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PrimaryTranslation().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PrimaryTranslationEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProviderEntity

```ts
const provider = client.Provider()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `number` | No |  |
| `results` | `Record<string, any>` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Provider().load({ movie_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProviderEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RegionEntity

```ts
const region = client.Region()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `english_name` | `string` | No |  |
| `iso_3166_1` | `string` | No |  |
| `native_name` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Region().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RegionEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ReviewEntity

```ts
const review = client.Review()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `string` | No |  |
| `author_details` | `Record<string, any>` | No |  |
| `content` | `string` | No |  |
| `created_at` | `string` | No |  |
| `id` | `string` | No |  |
| `iso_639_1` | `string` | No |  |
| `media_id` | `number` | No |  |
| `media_title` | `string` | No |  |
| `media_type` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `url` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Review().load({ id: 'review_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ReviewEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SeasonEntity

```ts
const season = client.Season()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `air_date` | `string` | No |  |
| `episodes` | `any[]` | No |  |
| `id` | `string` | No |  |
| `name` | `string` | No |  |
| `networks` | `any[]` | No |  |
| `overview` | `string` | No |  |
| `poster_path` | `string` | No |  |
| `season_number` | `number` | No |  |
| `vote_average` | `number` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Season().load({ id: 1, tv_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SeasonEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SeasonAccountStateEntity

```ts
const season_account_state = client.SeasonAccountState()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `episode_number` | `number` | No |  |
| `id` | `number` | No |  |
| `rated` | `Record<string, any>` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.SeasonAccountState().list({ season_number: 1, tv_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SeasonAccountStateEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SeasonAggregateCreditEntity

```ts
const season_aggregate_credit = client.SeasonAggregateCredit()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cast` | `any[]` | No |  |
| `crew` | `any[]` | No |  |
| `id` | `number` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.SeasonAggregateCredit().list({ season_number: 1, tv_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SeasonAggregateCreditEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SeasonChangeEntity

```ts
const season_change = client.SeasonChange()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `items` | `any[]` | No |  |
| `key` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.SeasonChange().list({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SeasonChangeEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SeasonCreditEntity

```ts
const season_credit = client.SeasonCredit()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cast` | `any[]` | No |  |
| `crew` | `any[]` | No |  |
| `id` | `number` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.SeasonCredit().list({ season_number: 1, tv_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SeasonCreditEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SeasonExternalIdEntity

```ts
const season_external_id = client.SeasonExternalId()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `freebase_id` | `string` | No |  |
| `freebase_mid` | `string` | No |  |
| `id` | `number` | No |  |
| `tvdb_id` | `number` | No |  |
| `tvrage_id` | `string` | No |  |
| `wikidata_id` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.SeasonExternalId().load({ season_number: 1, tv_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SeasonExternalIdEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SeasonImageEntity

```ts
const season_image = client.SeasonImage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aspect_ratio` | `number` | No |  |
| `file_path` | `string` | No |  |
| `height` | `number` | No |  |
| `iso_639_1` | `string` | No |  |
| `vote_average` | `number` | No |  |
| `vote_count` | `number` | No |  |
| `width` | `number` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.SeasonImage().list({ season_number: 1, tv_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SeasonImageEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SeasonTranslationEntity

```ts
const season_translation = client.SeasonTranslation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Record<string, any>` | No |  |
| `english_name` | `string` | No |  |
| `iso_3166_1` | `string` | No |  |
| `iso_639_1` | `string` | No |  |
| `name` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.SeasonTranslation().list({ season_number: 1, tv_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SeasonTranslationEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SeasonVideoEntity

```ts
const season_video = client.SeasonVideo()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `iso_3166_1` | `string` | No |  |
| `iso_639_1` | `string` | No |  |
| `key` | `string` | No |  |
| `name` | `string` | No |  |
| `official` | `boolean` | No |  |
| `published_at` | `string` | No |  |
| `site` | `string` | No |  |
| `size` | `number` | No |  |
| `type` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.SeasonVideo().list({ season_number: 1, tv_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SeasonVideoEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SessionEntity

```ts
const session = client.Session()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.Session().remove()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SessionEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TimezoneEntity

```ts
const timezone = client.Timezone()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `iso_3166_1` | `string` | No |  |
| `zones` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Timezone().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TimezoneEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TopRatedEntity

```ts
const top_rated = client.TopRated()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `adult` | `boolean` | No |  |
| `backdrop_path` | `string` | No |  |
| `first_air_date` | `string` | No |  |
| `genre_ids` | `any[]` | No |  |
| `id` | `number` | No |  |
| `name` | `string` | No |  |
| `origin_country` | `any[]` | No |  |
| `original_language` | `string` | No |  |
| `original_name` | `string` | No |  |
| `original_title` | `string` | No |  |
| `overview` | `string` | No |  |
| `popularity` | `number` | No |  |
| `poster_path` | `string` | No |  |
| `release_date` | `string` | No |  |
| `title` | `string` | No |  |
| `video` | `boolean` | No |  |
| `vote_average` | `number` | No |  |
| `vote_count` | `number` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.TopRated().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TopRatedEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TvAccountStateEntity

```ts
const tv_account_state = client.TvAccountState()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `favorite` | `boolean` | No |  |
| `id` | `number` | No |  |
| `rated` | `Record<string, any>` | No |  |
| `watchlist` | `boolean` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.TvAccountState().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TvAccountStateEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TvAggregateCreditEntity

```ts
const tv_aggregate_credit = client.TvAggregateCredit()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cast` | `any[]` | No |  |
| `crew` | `any[]` | No |  |
| `id` | `number` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.TvAggregateCredit().list({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TvAggregateCreditEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TvAlternativeTitleEntity

```ts
const tv_alternative_title = client.TvAlternativeTitle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `iso_3166_1` | `string` | No |  |
| `title` | `string` | No |  |
| `type` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.TvAlternativeTitle().list({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TvAlternativeTitleEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TvChangeEntity

```ts
const tv_change = client.TvChange()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `items` | `any[]` | No |  |
| `key` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.TvChange().list({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TvChangeEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TvContentRatingEntity

```ts
const tv_content_rating = client.TvContentRating()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `descriptors` | `any[]` | No |  |
| `id` | `string` | No |  |
| `iso_3166_1` | `string` | No |  |
| `rating` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.TvContentRating().list({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TvContentRatingEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TvCreditEntity

```ts
const tv_credit = client.TvCredit()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cast` | `any[]` | No |  |
| `crew` | `any[]` | No |  |
| `id` | `number` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.TvCredit().list({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TvCreditEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TvEpisodeGroupEntity

```ts
const tv_episode_group = client.TvEpisodeGroup()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `episode_count` | `number` | No |  |
| `group_count` | `number` | No |  |
| `id` | `string` | No |  |
| `name` | `string` | No |  |
| `network` | `Record<string, any>` | No |  |
| `type` | `number` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.TvEpisodeGroup().list({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TvEpisodeGroupEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TvExternalIdEntity

```ts
const tv_external_id = client.TvExternalId()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `facebook_id` | `string` | No |  |
| `freebase_id` | `string` | No |  |
| `freebase_mid` | `string` | No |  |
| `id` | `number` | No |  |
| `imdb_id` | `string` | No |  |
| `instagram_id` | `string` | No |  |
| `tvdb_id` | `number` | No |  |
| `tvrage_id` | `number` | No |  |
| `twitter_id` | `string` | No |  |
| `wikidata_id` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.TvExternalId().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TvExternalIdEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TvImageEntity

```ts
const tv_image = client.TvImage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `backdrops` | `any[]` | No |  |
| `id` | `number` | No |  |
| `logos` | `any[]` | No |  |
| `posters` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.TvImage().list({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TvImageEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TvKeywordEntity

```ts
const tv_keyword = client.TvKeyword()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `number` | No |  |
| `name` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.TvKeyword().list({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TvKeywordEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TvListEntity

```ts
const tv_list = client.TvList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `favorite_count` | `number` | No |  |
| `id` | `number` | No |  |
| `iso_3166_1` | `string` | No |  |
| `iso_639_1` | `string` | No |  |
| `item_count` | `number` | No |  |
| `name` | `string` | No |  |
| `poster_path` | `any` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.TvList().list({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TvListEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TvRecommendationEntity

```ts
const tv_recommendation = client.TvRecommendation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `adult` | `boolean` | No |  |
| `backdrop_path` | `string` | No |  |
| `first_air_date` | `string` | No |  |
| `genre_ids` | `any[]` | No |  |
| `id` | `number` | No |  |
| `media_type` | `string` | No |  |
| `name` | `string` | No |  |
| `origin_country` | `any[]` | No |  |
| `original_language` | `string` | No |  |
| `original_name` | `string` | No |  |
| `overview` | `string` | No |  |
| `popularity` | `number` | No |  |
| `poster_path` | `string` | No |  |
| `vote_average` | `number` | No |  |
| `vote_count` | `number` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.TvRecommendation().list({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TvRecommendationEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TvReviewEntity

```ts
const tv_review = client.TvReview()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `string` | No |  |
| `author_details` | `Record<string, any>` | No |  |
| `content` | `string` | No |  |
| `created_at` | `string` | No |  |
| `id` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `url` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.TvReview().list({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TvReviewEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TvScreenedTheatricallyEntity

```ts
const tv_screened_theatrically = client.TvScreenedTheatrically()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `episode_number` | `number` | No |  |
| `id` | `number` | No |  |
| `season_number` | `number` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.TvScreenedTheatrically().list({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TvScreenedTheatricallyEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TvSimilarEntity

```ts
const tv_similar = client.TvSimilar()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `adult` | `boolean` | No |  |
| `backdrop_path` | `string` | No |  |
| `first_air_date` | `string` | No |  |
| `genre_ids` | `any[]` | No |  |
| `id` | `number` | No |  |
| `name` | `string` | No |  |
| `origin_country` | `any[]` | No |  |
| `original_language` | `string` | No |  |
| `original_name` | `string` | No |  |
| `overview` | `string` | No |  |
| `popularity` | `number` | No |  |
| `poster_path` | `string` | No |  |
| `vote_average` | `number` | No |  |
| `vote_count` | `number` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.TvSimilar().list({ id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TvSimilarEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TvTranslationEntity

```ts
const tv_translation = client.TvTranslation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Record<string, any>` | No |  |
| `english_name` | `string` | No |  |
| `id` | `string` | No |  |
| `iso_3166_1` | `string` | No |  |
| `iso_639_1` | `string` | No |  |
| `name` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.TvTranslation().list({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TvTranslationEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TvVideoEntity

```ts
const tv_video = client.TvVideo()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `iso_3166_1` | `string` | No |  |
| `iso_639_1` | `string` | No |  |
| `key` | `string` | No |  |
| `name` | `string` | No |  |
| `official` | `boolean` | No |  |
| `published_at` | `string` | No |  |
| `site` | `string` | No |  |
| `size` | `number` | No |  |
| `type` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.TvVideo().list({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TvVideoEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TvnEntity

```ts
const tvn = client.Tvn()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `RAW_BODY` | `string` | Yes |  |
| `adult` | `boolean` | No |  |
| `backdrop_path` | `string` | No |  |
| `created_by` | `any[]` | No |  |
| `display_priorities` | `Record<string, any>` | No |  |
| `display_priority` | `number` | No |  |
| `episode_run_time` | `any[]` | No |  |
| `first_air_date` | `string` | No |  |
| `genre_ids` | `any[]` | No |  |
| `genres` | `any[]` | No |  |
| `homepage` | `string` | No |  |
| `id` | `number` | No |  |
| `in_production` | `boolean` | No |  |
| `languages` | `any[]` | No |  |
| `last_air_date` | `string` | No |  |
| `last_episode_to_air` | `Record<string, any>` | No |  |
| `logo_path` | `string` | No |  |
| `name` | `string` | No |  |
| `networks` | `any[]` | No |  |
| `next_episode_to_air` | `any` | No |  |
| `number_of_episodes` | `number` | No |  |
| `number_of_seasons` | `number` | No |  |
| `origin_country` | `any[]` | No |  |
| `original_language` | `string` | No |  |
| `original_name` | `string` | No |  |
| `overview` | `string` | No |  |
| `page` | `number` | No |  |
| `popularity` | `number` | No |  |
| `poster_path` | `string` | No |  |
| `production_companies` | `any[]` | No |  |
| `production_countries` | `any[]` | No |  |
| `provider_id` | `number` | No |  |
| `provider_name` | `string` | No |  |
| `rating` | `number` | No |  |
| `results` | `any[]` | No |  |
| `seasons` | `any[]` | No |  |
| `spoken_languages` | `any[]` | No |  |
| `status` | `string` | No |  |
| `status_code` | `number` | No |  |
| `status_message` | `string` | No |  |
| `tagline` | `string` | No |  |
| `total_pages` | `number` | No |  |
| `total_results` | `number` | No |  |
| `type` | `string` | No |  |
| `vote_average` | `number` | No |  |
| `vote_count` | `number` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Tvn().create({
  series_id: 1,
  RAW_BODY: 'example_RAW_BODY',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Tvn().list({ query: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Tvn().load({ series_id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.Tvn().remove({ series_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TvnEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UpcomingEntity

```ts
const upcoming = client.Upcoming()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `adult` | `boolean` | No |  |
| `backdrop_path` | `string` | No |  |
| `genre_ids` | `any[]` | No |  |
| `id` | `number` | No |  |
| `original_language` | `string` | No |  |
| `original_title` | `string` | No |  |
| `overview` | `string` | No |  |
| `popularity` | `number` | No |  |
| `poster_path` | `string` | No |  |
| `release_date` | `string` | No |  |
| `title` | `string` | No |  |
| `video` | `boolean` | No |  |
| `vote_average` | `number` | No |  |
| `vote_count` | `number` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Upcoming().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UpcomingEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ValidateWithLoginEntity

```ts
const validate_with_login = client.ValidateWithLogin()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `RAW_BODY` | `string` | Yes |  |
| `expires_at` | `string` | No |  |
| `request_token` | `string` | No |  |
| `success` | `boolean` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.ValidateWithLogin().create({
  RAW_BODY: 'example_RAW_BODY',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ValidateWithLoginEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WatchlistEntity

```ts
const watchlist = client.Watchlist()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `RAW_BODY` | `string` | Yes |  |
| `status_code` | `number` | No |  |
| `status_message` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Watchlist().create({
  account_id: 1,
  RAW_BODY: 'example_RAW_BODY',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WatchlistEntity` instance with the same client and
options.

#### `client()`

Return the parent `TmdbSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```ts
const client = new TmdbSDK({
  feature: {
    test: { active: true },
  }
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

Test transport.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

