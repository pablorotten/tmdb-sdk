# Tmdb TypeScript SDK



The TypeScript SDK for the Tmdb API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Account()` — each with a small set of operations (`list`, `load`, `create`, `remove`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`, see [Tags](https://github.com/voxgig-sdk/tmdb-sdk/tags)), or from a
clone, which carries the compiled `dist/`:

```bash
git clone https://github.com/voxgig-sdk/tmdb-sdk
npm install ./tmdb-sdk/ts
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { TmdbSDK } from '@voxgig-sdk/tmdb-sdk'

const client = new TmdbSDK({
  apikey: process.env.TMDB_APIKEY,
})
```

### 3. Load an episode

Episode is nested under season, so provide the `season_id`.
`load()` returns the entity and throws on failure; `.data()` reads its record:

```ts
try {
  const episode = await client.Episode().load({
    season_id: 1,
    tv_id: 1,
    id: 1,
  })
  console.log(episode.data())
} catch (err) {
  console.error('load failed:', err)
}
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const account = await client.Account().load({ id: 1 })
  console.log(account.data())
} catch (err) {
  console.error('load failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
result envelope. Branch on `ok`; on failure `status` holds the HTTP status
(for error responses) and `err` holds the error:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (!result.ok) {
  console.error('request failed:', result.status, result.err)
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = TmdbSDK.test()

const account = await client.Account().load({ id: 1 })
// account is the Account entity; .data() reads its mock record
console.log(account.data())
```

You can also use the instance method:

```ts
const client = new TmdbSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.Account()

// First call runs the operation and stores its result
await entity.load({ id: 1 })

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data.id)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new TmdbSDK({
  apikey: '...',
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
TMDB_TEST_LIVE=TRUE
TMDB_APIKEY=<your-key>
```

Then run:

```bash
cd ts && npm test
```

Live entity tests continue independent operations after errors and attempt
supported cleanup. Their final result reports failures and missing prerequisites
after the remaining work completes. The model and test inputs determine which
API operations the generated scenarios cover.


## Reference

### TmdbSDK

#### Constructor

```ts
new TmdbSDK(options?: {
  apikey?: string
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `Account(data?)` | `AccountEntity` | Create an Account entity instance. |
| `AccountList(data?)` | `AccountListEntity` | Create an AccountList entity instance. |
| `AiringToday(data?)` | `AiringTodayEntity` | Create an AiringToday entity instance. |
| `All(data?)` | `AllEntity` | Create an All entity instance. |
| `Authentication(data?)` | `AuthenticationEntity` | Create an Authentication entity instance. |
| `Change(data?)` | `ChangeEntity` | Create a Change entity instance. |
| `Collection(data?)` | `CollectionEntity` | Create a Collection entity instance. |
| `CollectionImage(data?)` | `CollectionImageEntity` | Create a CollectionImage entity instance. |
| `CollectionTranslation(data?)` | `CollectionTranslationEntity` | Create a CollectionTranslation entity instance. |
| `Company(data?)` | `CompanyEntity` | Create a Company entity instance. |
| `CompanyAlternativeName(data?)` | `CompanyAlternativeNameEntity` | Create a CompanyAlternativeName entity instance. |
| `CompanyImage(data?)` | `CompanyImageEntity` | Create a CompanyImage entity instance. |
| `Configuration(data?)` | `ConfigurationEntity` | Create a Configuration entity instance. |
| `Country(data?)` | `CountryEntity` | Create a Country entity instance. |
| `Credit(data?)` | `CreditEntity` | Create a Credit entity instance. |
| `Episode(data?)` | `EpisodeEntity` | Create an Episode entity instance. |
| `EpisodeAccountState(data?)` | `EpisodeAccountStateEntity` | Create an EpisodeAccountState entity instance. |
| `EpisodeChange(data?)` | `EpisodeChangeEntity` | Create an EpisodeChange entity instance. |
| `EpisodeCredit(data?)` | `EpisodeCreditEntity` | Create an EpisodeCredit entity instance. |
| `EpisodeExternalId(data?)` | `EpisodeExternalIdEntity` | Create an EpisodeExternalId entity instance. |
| `EpisodeGroup(data?)` | `EpisodeGroupEntity` | Create an EpisodeGroup entity instance. |
| `EpisodeImage(data?)` | `EpisodeImageEntity` | Create an EpisodeImage entity instance. |
| `EpisodeTranslation(data?)` | `EpisodeTranslationEntity` | Create an EpisodeTranslation entity instance. |
| `EpisodeVideo(data?)` | `EpisodeVideoEntity` | Create an EpisodeVideo entity instance. |
| `Favorite(data?)` | `FavoriteEntity` | Create a Favorite entity instance. |
| `Find(data?)` | `FindEntity` | Create a Find entity instance. |
| `Job(data?)` | `JobEntity` | Create a Job entity instance. |
| `Keyword(data?)` | `KeywordEntity` | Create a Keyword entity instance. |
| `KeywordMovie(data?)` | `KeywordMovieEntity` | Create a KeywordMovie entity instance. |
| `Language(data?)` | `LanguageEntity` | Create a Language entity instance. |
| `Latest(data?)` | `LatestEntity` | Create a Latest entity instance. |
| `List(data?)` | `ListEntity` | Create a List entity instance. |
| `ListItemStatus(data?)` | `ListItemStatusEntity` | Create a ListItemStatus entity instance. |
| `Movie(data?)` | `MovieEntity` | Create a Movie entity instance. |
| `MovieAccountState(data?)` | `MovieAccountStateEntity` | Create a MovieAccountState entity instance. |
| `MovieAlternativeTitle(data?)` | `MovieAlternativeTitleEntity` | Create a MovieAlternativeTitle entity instance. |
| `MovieChange(data?)` | `MovieChangeEntity` | Create a MovieChange entity instance. |
| `MovieCredit(data?)` | `MovieCreditEntity` | Create a MovieCredit entity instance. |
| `MovieExternalId(data?)` | `MovieExternalIdEntity` | Create a MovieExternalId entity instance. |
| `MovieImage(data?)` | `MovieImageEntity` | Create a MovieImage entity instance. |
| `MovieKeyword(data?)` | `MovieKeywordEntity` | Create a MovieKeyword entity instance. |
| `MovieList(data?)` | `MovieListEntity` | Create a MovieList entity instance. |
| `MovieRecommendation(data?)` | `MovieRecommendationEntity` | Create a MovieRecommendation entity instance. |
| `MovieReleaseDate(data?)` | `MovieReleaseDateEntity` | Create a MovieReleaseDate entity instance. |
| `MovieReview(data?)` | `MovieReviewEntity` | Create a MovieReview entity instance. |
| `MovieSimilar(data?)` | `MovieSimilarEntity` | Create a MovieSimilar entity instance. |
| `MovieTranslation(data?)` | `MovieTranslationEntity` | Create a MovieTranslation entity instance. |
| `MovieVideo(data?)` | `MovieVideoEntity` | Create a MovieVideo entity instance. |
| `Multi(data?)` | `MultiEntity` | Create a Multi entity instance. |
| `N4n(data?)` | `N4nEntity` | Create a N4n entity instance. |
| `Network(data?)` | `NetworkEntity` | Create a Network entity instance. |
| `NetworkAlternativeName(data?)` | `NetworkAlternativeNameEntity` | Create a NetworkAlternativeName entity instance. |
| `NetworkImage(data?)` | `NetworkImageEntity` | Create a NetworkImage entity instance. |
| `New(data?)` | `NewEntity` | Create a New entity instance. |
| `NowPlaying(data?)` | `NowPlayingEntity` | Create a NowPlaying entity instance. |
| `OnTheAir(data?)` | `OnTheAirEntity` | Create an OnTheAir entity instance. |
| `Person(data?)` | `PersonEntity` | Create a Person entity instance. |
| `PersonChange(data?)` | `PersonChangeEntity` | Create a PersonChange entity instance. |
| `PersonCombinedCredit(data?)` | `PersonCombinedCreditEntity` | Create a PersonCombinedCredit entity instance. |
| `PersonExternalId(data?)` | `PersonExternalIdEntity` | Create a PersonExternalId entity instance. |
| `PersonImage(data?)` | `PersonImageEntity` | Create a PersonImage entity instance. |
| `PersonMovieCredit(data?)` | `PersonMovieCreditEntity` | Create a PersonMovieCredit entity instance. |
| `PersonTaggedImage(data?)` | `PersonTaggedImageEntity` | Create a PersonTaggedImage entity instance. |
| `PersonTranslation(data?)` | `PersonTranslationEntity` | Create a PersonTranslation entity instance. |
| `PersonTvCredit(data?)` | `PersonTvCreditEntity` | Create a PersonTvCredit entity instance. |
| `Popular(data?)` | `PopularEntity` | Create a Popular entity instance. |
| `PrimaryTranslation(data?)` | `PrimaryTranslationEntity` | Create a PrimaryTranslation entity instance. |
| `Provider(data?)` | `ProviderEntity` | Create a Provider entity instance. |
| `Region(data?)` | `RegionEntity` | Create a Region entity instance. |
| `Review(data?)` | `ReviewEntity` | Create a Review entity instance. |
| `Season(data?)` | `SeasonEntity` | Create a Season entity instance. |
| `SeasonAccountState(data?)` | `SeasonAccountStateEntity` | Create a SeasonAccountState entity instance. |
| `SeasonAggregateCredit(data?)` | `SeasonAggregateCreditEntity` | Create a SeasonAggregateCredit entity instance. |
| `SeasonChange(data?)` | `SeasonChangeEntity` | Create a SeasonChange entity instance. |
| `SeasonCredit(data?)` | `SeasonCreditEntity` | Create a SeasonCredit entity instance. |
| `SeasonExternalId(data?)` | `SeasonExternalIdEntity` | Create a SeasonExternalId entity instance. |
| `SeasonImage(data?)` | `SeasonImageEntity` | Create a SeasonImage entity instance. |
| `SeasonTranslation(data?)` | `SeasonTranslationEntity` | Create a SeasonTranslation entity instance. |
| `SeasonVideo(data?)` | `SeasonVideoEntity` | Create a SeasonVideo entity instance. |
| `Session(data?)` | `SessionEntity` | Create a Session entity instance. |
| `Timezone(data?)` | `TimezoneEntity` | Create a Timezone entity instance. |
| `TopRated(data?)` | `TopRatedEntity` | Create a TopRated entity instance. |
| `TvAccountState(data?)` | `TvAccountStateEntity` | Create a TvAccountState entity instance. |
| `TvAggregateCredit(data?)` | `TvAggregateCreditEntity` | Create a TvAggregateCredit entity instance. |
| `TvAlternativeTitle(data?)` | `TvAlternativeTitleEntity` | Create a TvAlternativeTitle entity instance. |
| `TvChange(data?)` | `TvChangeEntity` | Create a TvChange entity instance. |
| `TvContentRating(data?)` | `TvContentRatingEntity` | Create a TvContentRating entity instance. |
| `TvCredit(data?)` | `TvCreditEntity` | Create a TvCredit entity instance. |
| `TvEpisodeGroup(data?)` | `TvEpisodeGroupEntity` | Create a TvEpisodeGroup entity instance. |
| `TvExternalId(data?)` | `TvExternalIdEntity` | Create a TvExternalId entity instance. |
| `TvImage(data?)` | `TvImageEntity` | Create a TvImage entity instance. |
| `TvKeyword(data?)` | `TvKeywordEntity` | Create a TvKeyword entity instance. |
| `TvList(data?)` | `TvListEntity` | Create a TvList entity instance. |
| `TvRecommendation(data?)` | `TvRecommendationEntity` | Create a TvRecommendation entity instance. |
| `TvReview(data?)` | `TvReviewEntity` | Create a TvReview entity instance. |
| `TvScreenedTheatrically(data?)` | `TvScreenedTheatricallyEntity` | Create a TvScreenedTheatrically entity instance. |
| `TvSimilar(data?)` | `TvSimilarEntity` | Create a TvSimilar entity instance. |
| `TvTranslation(data?)` | `TvTranslationEntity` | Create a TvTranslation entity instance. |
| `TvVideo(data?)` | `TvVideoEntity` | Create a TvVideo entity instance. |
| `Tvn(data?)` | `TvnEntity` | Create a Tvn entity instance. |
| `Upcoming(data?)` | `UpcomingEntity` | Create an Upcoming entity instance. |
| `ValidateWithLogin(data?)` | `ValidateWithLoginEntity` | Create a ValidateWithLogin entity instance. |
| `Watchlist(data?)` | `WatchlistEntity` | Create a Watchlist entity instance. |
| `tester(testopts?, sdkopts?)` | `TmdbSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `TmdbSDK.test(testopts?, sdkopts?)` | `TmdbSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria, and return it. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria, one per record. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity, and return it. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<Entity>` | Remove an entity, and return it marked as deleted. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): TmdbSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity itself — there is no result
envelope, and an entity's `data()` reads its record:

- `load` and `create` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).
- `remove` resolves to the entity, marked as deleted.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### Account

| Field | Description |
| --- | --- |
| `avatar` |  |
| `id` |  |
| `include_adult` |  |
| `iso_3166_1` |  |
| `iso_639_1` |  |
| `name` |  |
| `username` |  |

Operations: load.

API path: `/3/account/{account_id}`

#### AccountList

| Field | Description |
| --- | --- |
| `description` |  |
| `favorite_count` |  |
| `id` |  |
| `iso_639_1` |  |
| `item_count` |  |
| `list_type` |  |
| `name` |  |
| `poster_path` |  |

Operations: list.

API path: `/3/account/{account_id}/lists`

#### AiringToday

| Field | Description |
| --- | --- |
| `backdrop_path` |  |
| `first_air_date` |  |
| `genre_ids` |  |
| `id` |  |
| `name` |  |
| `origin_country` |  |
| `original_language` |  |
| `original_name` |  |
| `overview` |  |
| `popularity` |  |
| `poster_path` |  |
| `vote_average` |  |
| `vote_count` |  |

Operations: list.

API path: `/3/tv/airing_today`

#### All

| Field | Description |
| --- | --- |
| `id` |  |
| `page` |  |
| `results` |  |
| `total_pages` |  |
| `total_results` |  |

Operations: load.

API path: `/3/trending/all/{time_window}`

#### Authentication

| Field | Description |
| --- | --- |
| `status_code` |  |
| `status_message` |  |
| `success` |  |

Operations: load.

API path: `/3/authentication`

#### Change

| Field | Description |
| --- | --- |
| `adult` |  |
| `id` |  |

Operations: list.

API path: `/3/movie/changes`

#### Collection

| Field | Description |
| --- | --- |
| `adult` |  |
| `backdrop_path` |  |
| `id` |  |
| `name` |  |
| `original_language` |  |
| `original_name` |  |
| `overview` |  |
| `parts` |  |
| `poster_path` |  |

Operations: list, load.

API path: `/3/search/collection`

#### CollectionImage

| Field | Description |
| --- | --- |
| `backdrops` |  |
| `id` |  |
| `posters` |  |

Operations: list.

API path: `/3/collection/{collection_id}/images`

#### CollectionTranslation

| Field | Description |
| --- | --- |
| `data` |  |
| `english_name` |  |
| `id` |  |
| `iso_3166_1` |  |
| `iso_639_1` |  |
| `name` |  |

Operations: list.

API path: `/3/collection/{collection_id}/translations`

#### Company

| Field | Description |
| --- | --- |
| `description` |  |
| `headquarters` |  |
| `homepage` |  |
| `id` |  |
| `logo_path` |  |
| `name` |  |
| `origin_country` |  |
| `parent_company` |  |

Operations: list, load.

API path: `/3/search/company`

#### CompanyAlternativeName

| Field | Description |
| --- | --- |
| `id` |  |
| `name` |  |
| `type` |  |

Operations: list.

API path: `/3/company/{company_id}/alternative_names`

#### CompanyImage

| Field | Description |
| --- | --- |
| `aspect_ratio` |  |
| `file_path` |  |
| `file_type` |  |
| `height` |  |
| `id` |  |
| `vote_average` |  |
| `vote_count` |  |
| `width` |  |

Operations: list.

API path: `/3/company/{company_id}/images`

#### Configuration

| Field | Description |
| --- | --- |
| `change_keys` |  |
| `images` |  |

Operations: list.

API path: `/3/configuration`

#### Country

| Field | Description |
| --- | --- |
| `english_name` |  |
| `iso_3166_1` |  |
| `native_name` |  |

Operations: list.

API path: `/3/configuration/countries`

#### Credit

| Field | Description |
| --- | --- |
| `credit_type` |  |
| `department` |  |
| `id` |  |
| `job` |  |
| `media` |  |
| `media_type` |  |
| `person` |  |

Operations: load.

API path: `/3/credit/{credit_id}`

#### Episode

| Field | Description |
| --- | --- |
| `air_date` |  |
| `crew` |  |
| `episode_number` |  |
| `guest_stars` |  |
| `id` |  |
| `name` |  |
| `overview` |  |
| `production_code` |  |
| `rating` |  |
| `runtime` |  |
| `season_number` |  |
| `show_id` |  |
| `still_path` |  |
| `vote_average` |  |
| `vote_count` |  |

Operations: create, list, load, remove.

API path: `/3/tv/{series_id}/season/{season_number}/episode/{episode_number}/rating`

#### EpisodeAccountState

| Field | Description |
| --- | --- |
| `favorite` |  |
| `id` |  |
| `rated` |  |
| `watchlist` |  |

Operations: load.

API path: `/3/tv/{series_id}/season/{season_number}/episode/{episode_number}/account_states`

#### EpisodeChange

| Field | Description |
| --- | --- |
| `id` |  |
| `items` |  |
| `key` |  |

Operations: list.

API path: `/3/tv/episode/{episode_id}/changes`

#### EpisodeCredit

| Field | Description |
| --- | --- |
| `cast` |  |
| `crew` |  |
| `guest_stars` |  |
| `id` |  |

Operations: list.

API path: `/3/tv/{series_id}/season/{season_number}/episode/{episode_number}/credits`

#### EpisodeExternalId

| Field | Description |
| --- | --- |
| `freebase_id` |  |
| `freebase_mid` |  |
| `id` |  |
| `imdb_id` |  |
| `tvdb_id` |  |
| `tvrage_id` |  |
| `wikidata_id` |  |

Operations: load.

API path: `/3/tv/{series_id}/season/{season_number}/episode/{episode_number}/external_ids`

#### EpisodeGroup

| Field | Description |
| --- | --- |
| `description` |  |
| `episode_count` |  |
| `group_count` |  |
| `groups` |  |
| `id` |  |
| `name` |  |
| `network` |  |
| `type` |  |

Operations: load.

API path: `/3/tv/episode_group/{tv_episode_group_id}`

#### EpisodeImage

| Field | Description |
| --- | --- |
| `aspect_ratio` |  |
| `file_path` |  |
| `height` |  |
| `iso_639_1` |  |
| `vote_average` |  |
| `vote_count` |  |
| `width` |  |

Operations: list.

API path: `/3/tv/{series_id}/season/{season_number}/episode/{episode_number}/images`

#### EpisodeTranslation

| Field | Description |
| --- | --- |
| `data` |  |
| `english_name` |  |
| `iso_3166_1` |  |
| `iso_639_1` |  |
| `name` |  |

Operations: list.

API path: `/3/tv/{series_id}/season/{season_number}/episode/{episode_number}/translations`

#### EpisodeVideo

| Field | Description |
| --- | --- |
| `id` |  |
| `iso_3166_1` |  |
| `iso_639_1` |  |
| `key` |  |
| `name` |  |
| `official` |  |
| `published_at` |  |
| `site` |  |
| `size` |  |
| `type` |  |

Operations: list.

API path: `/3/tv/{series_id}/season/{season_number}/episode/{episode_number}/videos`

#### Favorite

| Field | Description |
| --- | --- |
| `RAW_BODY` |  |
| `status_code` |  |
| `status_message` |  |

Operations: create.

API path: `/3/account/{account_id}/favorite`

#### Find

| Field | Description |
| --- | --- |
| `id` |  |
| `movie_results` |  |
| `person_results` |  |
| `tv_episode_results` |  |
| `tv_results` |  |
| `tv_season_results` |  |

Operations: load.

API path: `/3/find/{external_id}`

#### Job

| Field | Description |
| --- | --- |
| `department` |  |
| `jobs` |  |

Operations: list.

API path: `/3/configuration/jobs`

#### Keyword

| Field | Description |
| --- | --- |
| `id` |  |
| `name` |  |

Operations: list, load.

API path: `/3/search/keyword`

#### KeywordMovie

| Field | Description |
| --- | --- |
| `adult` |  |
| `backdrop_path` |  |
| `genre_ids` |  |
| `id` |  |
| `original_language` |  |
| `original_title` |  |
| `overview` |  |
| `popularity` |  |
| `poster_path` |  |
| `release_date` |  |
| `title` |  |
| `video` |  |
| `vote_average` |  |
| `vote_count` |  |

Operations: list.

API path: `/3/keyword/{keyword_id}/movies`

#### Language

| Field | Description |
| --- | --- |
| `english_name` |  |
| `iso_639_1` |  |
| `name` |  |

Operations: list.

API path: `/3/configuration/languages`

#### Latest

| Field | Description |
| --- | --- |
| `adult` |  |
| `air_date` |  |
| `also_known_as` |  |
| `backdrop_path` |  |
| `belongs_to_collection` |  |
| `biography` |  |
| `birthday` |  |
| `budget` |  |
| `deathday` |  |
| `episode_count` |  |
| `gender` |  |
| `genres` |  |
| `homepage` |  |
| `id` |  |
| `imdb_id` |  |
| `known_for_department` |  |
| `name` |  |
| `original_language` |  |
| `original_title` |  |
| `overview` |  |
| `place_of_birth` |  |
| `popularity` |  |
| `poster_path` |  |
| `production_companies` |  |
| `production_countries` |  |
| `profile_path` |  |
| `release_date` |  |
| `revenue` |  |
| `runtime` |  |
| `season_number` |  |
| `spoken_languages` |  |
| `status` |  |
| `tagline` |  |
| `title` |  |
| `video` |  |
| `vote_average` |  |
| `vote_count` |  |

Operations: list.

API path: `/3/movie/latest`

#### List

| Field | Description |
| --- | --- |
| `AR` |  |
| `AU` |  |
| `BG` |  |
| `BR` |  |
| `CA` |  |
| `CAQC` |  |
| `CH` |  |
| `DE` |  |
| `DK` |  |
| `ES` |  |
| `FI` |  |
| `FR` |  |
| `GB` |  |
| `GR` |  |
| `HK` |  |
| `HU` |  |
| `ID` |  |
| `IE` |  |
| `IL` |  |
| `IN` |  |
| `IT` |  |
| `JP` |  |
| `KR` |  |
| `LT` |  |
| `LU` |  |
| `LV` |  |
| `MA` |  |
| `MO` |  |
| `MX` |  |
| `MY` |  |
| `NL` |  |
| `NO` |  |
| `NZ` |  |
| `PH` |  |
| `PL` |  |
| `PR` |  |
| `PT` |  |
| `RAW_BODY` |  |
| `RU` |  |
| `SE` |  |
| `SG` |  |
| `SK` |  |
| `TH` |  |
| `TR` |  |
| `TW` |  |
| `US` |  |
| `VI` |  |
| `ZA` |  |
| `created_by` |  |
| `description` |  |
| `favorite_count` |  |
| `id` |  |
| `iso_639_1` |  |
| `item_count` |  |
| `items` |  |
| `list_id` |  |
| `name` |  |
| `poster_path` |  |
| `status_code` |  |
| `status_message` |  |
| `success` |  |

Operations: create, list, load, remove.

API path: `/3/list/{list_id}/clear`

#### ListItemStatus

| Field | Description |
| --- | --- |
| `id` |  |
| `item_present` |  |

Operations: load.

API path: `/3/list/{list_id}/item_status`

#### Movie

| Field | Description |
| --- | --- |
| `adult` |  |
| `backdrop_path` |  |
| `belongs_to_collection` |  |
| `budget` |  |
| `display_priorities` |  |
| `display_priority` |  |
| `genre_ids` |  |
| `genres` |  |
| `homepage` |  |
| `id` |  |
| `imdb_id` |  |
| `logo_path` |  |
| `origin_country` |  |
| `original_language` |  |
| `original_title` |  |
| `overview` |  |
| `page` |  |
| `popularity` |  |
| `poster_path` |  |
| `production_companies` |  |
| `production_countries` |  |
| `provider_id` |  |
| `provider_name` |  |
| `rating` |  |
| `release_date` |  |
| `results` |  |
| `revenue` |  |
| `runtime` |  |
| `spoken_languages` |  |
| `status` |  |
| `tagline` |  |
| `title` |  |
| `total_pages` |  |
| `total_results` |  |
| `video` |  |
| `vote_average` |  |
| `vote_count` |  |

Operations: create, list, load, remove.

API path: `/3/movie/{movie_id}/rating`

#### MovieAccountState

| Field | Description |
| --- | --- |
| `favorite` |  |
| `id` |  |
| `rated` |  |
| `watchlist` |  |

Operations: load.

API path: `/3/movie/{movie_id}/account_states`

#### MovieAlternativeTitle

| Field | Description |
| --- | --- |
| `id` |  |
| `iso_3166_1` |  |
| `title` |  |
| `type` |  |

Operations: list.

API path: `/3/movie/{movie_id}/alternative_titles`

#### MovieChange

| Field | Description |
| --- | --- |
| `id` |  |
| `items` |  |
| `key` |  |

Operations: list.

API path: `/3/movie/{movie_id}/changes`

#### MovieCredit

| Field | Description |
| --- | --- |
| `cast` |  |
| `crew` |  |
| `id` |  |

Operations: list.

API path: `/3/movie/{movie_id}/credits`

#### MovieExternalId

| Field | Description |
| --- | --- |
| `facebook_id` |  |
| `id` |  |
| `imdb_id` |  |
| `instagram_id` |  |
| `twitter_id` |  |
| `wikidata_id` |  |

Operations: load.

API path: `/3/movie/{movie_id}/external_ids`

#### MovieImage

| Field | Description |
| --- | --- |
| `backdrops` |  |
| `id` |  |
| `logos` |  |
| `posters` |  |

Operations: list.

API path: `/3/movie/{movie_id}/images`

#### MovieKeyword

| Field | Description |
| --- | --- |
| `id` |  |
| `name` |  |

Operations: list.

API path: `/3/movie/{movie_id}/keywords`

#### MovieList

| Field | Description |
| --- | --- |
| `description` |  |
| `favorite_count` |  |
| `id` |  |
| `iso_639_1` |  |
| `item_count` |  |
| `list_type` |  |
| `name` |  |
| `poster_path` |  |

Operations: list.

API path: `/3/movie/{movie_id}/lists`

#### MovieRecommendation

| Field | Description |
| --- | --- |
| `id` |  |

Operations: load.

API path: `/3/movie/{movie_id}/recommendations`

#### MovieReleaseDate

| Field | Description |
| --- | --- |
| `id` |  |
| `iso_3166_1` |  |
| `release_dates` |  |

Operations: list.

API path: `/3/movie/{movie_id}/release_dates`

#### MovieReview

| Field | Description |
| --- | --- |
| `author` |  |
| `author_details` |  |
| `content` |  |
| `created_at` |  |
| `id` |  |
| `updated_at` |  |
| `url` |  |

Operations: list.

API path: `/3/movie/{movie_id}/reviews`

#### MovieSimilar

| Field | Description |
| --- | --- |
| `adult` |  |
| `backdrop_path` |  |
| `genre_ids` |  |
| `id` |  |
| `original_language` |  |
| `original_title` |  |
| `overview` |  |
| `popularity` |  |
| `poster_path` |  |
| `release_date` |  |
| `title` |  |
| `video` |  |
| `vote_average` |  |
| `vote_count` |  |

Operations: list.

API path: `/3/movie/{movie_id}/similar`

#### MovieTranslation

| Field | Description |
| --- | --- |
| `data` |  |
| `english_name` |  |
| `id` |  |
| `iso_3166_1` |  |
| `iso_639_1` |  |
| `name` |  |

Operations: list.

API path: `/3/movie/{movie_id}/translations`

#### MovieVideo

| Field | Description |
| --- | --- |
| `id` |  |
| `iso_3166_1` |  |
| `iso_639_1` |  |
| `key` |  |
| `name` |  |
| `official` |  |
| `published_at` |  |
| `site` |  |
| `size` |  |
| `type` |  |

Operations: list.

API path: `/3/movie/{movie_id}/videos`

#### Multi

| Field | Description |
| --- | --- |
| `adult` |  |
| `backdrop_path` |  |
| `genre_ids` |  |
| `id` |  |
| `media_type` |  |
| `name` |  |
| `original_language` |  |
| `original_name` |  |
| `original_title` |  |
| `overview` |  |
| `popularity` |  |
| `poster_path` |  |
| `release_date` |  |
| `title` |  |
| `video` |  |
| `vote_average` |  |
| `vote_count` |  |

Operations: list.

API path: `/3/search/multi`

#### N4n

| Field | Description |
| --- | --- |
| `RAW_BODY` |  |
| `session_id` |  |
| `success` |  |

Operations: create.

API path: `/3/authentication/session/convert/4`

#### Network

| Field | Description |
| --- | --- |
| `headquarters` |  |
| `homepage` |  |
| `id` |  |
| `logo_path` |  |
| `name` |  |
| `origin_country` |  |

Operations: load.

API path: `/3/network/{network_id}`

#### NetworkAlternativeName

| Field | Description |
| --- | --- |
| `id` |  |
| `name` |  |
| `type` |  |

Operations: list.

API path: `/3/network/{network_id}/alternative_names`

#### NetworkImage

| Field | Description |
| --- | --- |
| `aspect_ratio` |  |
| `file_path` |  |
| `file_type` |  |
| `height` |  |
| `id` |  |
| `vote_average` |  |
| `vote_count` |  |
| `width` |  |

Operations: list.

API path: `/3/network/{network_id}/images`

#### New

| Field | Description |
| --- | --- |
| `RAW_BODY` |  |
| `expires_at` |  |
| `guest_session_id` |  |
| `request_token` |  |
| `session_id` |  |
| `success` |  |

Operations: create, load.

API path: `/3/authentication/session/new`

#### NowPlaying

| Field | Description |
| --- | --- |
| `adult` |  |
| `backdrop_path` |  |
| `genre_ids` |  |
| `id` |  |
| `original_language` |  |
| `original_title` |  |
| `overview` |  |
| `popularity` |  |
| `poster_path` |  |
| `release_date` |  |
| `title` |  |
| `video` |  |
| `vote_average` |  |
| `vote_count` |  |

Operations: list.

API path: `/3/movie/now_playing`

#### OnTheAir

| Field | Description |
| --- | --- |
| `backdrop_path` |  |
| `first_air_date` |  |
| `genre_ids` |  |
| `id` |  |
| `name` |  |
| `origin_country` |  |
| `original_language` |  |
| `original_name` |  |
| `overview` |  |
| `popularity` |  |
| `poster_path` |  |
| `vote_average` |  |
| `vote_count` |  |

Operations: list.

API path: `/3/tv/on_the_air`

#### Person

| Field | Description |
| --- | --- |
| `adult` |  |
| `also_known_as` |  |
| `biography` |  |
| `birthday` |  |
| `deathday` |  |
| `gender` |  |
| `homepage` |  |
| `id` |  |
| `imdb_id` |  |
| `known_for` |  |
| `known_for_department` |  |
| `name` |  |
| `original_name` |  |
| `page` |  |
| `place_of_birth` |  |
| `popularity` |  |
| `profile_path` |  |
| `results` |  |
| `total_pages` |  |
| `total_results` |  |

Operations: list, load.

API path: `/3/search/person`

#### PersonChange

| Field | Description |
| --- | --- |
| `id` |  |
| `items` |  |
| `key` |  |

Operations: list.

API path: `/3/person/{person_id}/changes`

#### PersonCombinedCredit

| Field | Description |
| --- | --- |
| `cast` |  |
| `crew` |  |
| `id` |  |

Operations: list.

API path: `/3/person/{person_id}/combined_credits`

#### PersonExternalId

| Field | Description |
| --- | --- |
| `facebook_id` |  |
| `freebase_id` |  |
| `freebase_mid` |  |
| `id` |  |
| `imdb_id` |  |
| `instagram_id` |  |
| `tiktok_id` |  |
| `tvrage_id` |  |
| `twitter_id` |  |
| `wikidata_id` |  |
| `youtube_id` |  |

Operations: load.

API path: `/3/person/{person_id}/external_ids`

#### PersonImage

| Field | Description |
| --- | --- |
| `aspect_ratio` |  |
| `file_path` |  |
| `height` |  |
| `id` |  |
| `iso_639_1` |  |
| `vote_average` |  |
| `vote_count` |  |
| `width` |  |

Operations: list.

API path: `/3/person/{person_id}/images`

#### PersonMovieCredit

| Field | Description |
| --- | --- |
| `cast` |  |
| `crew` |  |
| `id` |  |

Operations: list.

API path: `/3/person/{person_id}/movie_credits`

#### PersonTaggedImage

| Field | Description |
| --- | --- |
| `aspect_ratio` |  |
| `file_path` |  |
| `height` |  |
| `id` |  |
| `image_type` |  |
| `iso_639_1` |  |
| `media` |  |
| `media_type` |  |
| `vote_average` |  |
| `vote_count` |  |
| `width` |  |

Operations: list.

API path: `/3/person/{person_id}/tagged_images`

#### PersonTranslation

| Field | Description |
| --- | --- |
| `data` |  |
| `english_name` |  |
| `id` |  |
| `iso_3166_1` |  |
| `iso_639_1` |  |
| `name` |  |

Operations: list.

API path: `/3/person/{person_id}/translations`

#### PersonTvCredit

| Field | Description |
| --- | --- |
| `cast` |  |
| `crew` |  |
| `id` |  |

Operations: list.

API path: `/3/person/{person_id}/tv_credits`

#### Popular

| Field | Description |
| --- | --- |
| `adult` |  |
| `backdrop_path` |  |
| `first_air_date` |  |
| `gender` |  |
| `genre_ids` |  |
| `id` |  |
| `known_for` |  |
| `known_for_department` |  |
| `name` |  |
| `origin_country` |  |
| `original_language` |  |
| `original_name` |  |
| `original_title` |  |
| `overview` |  |
| `popularity` |  |
| `poster_path` |  |
| `profile_path` |  |
| `release_date` |  |
| `title` |  |
| `video` |  |
| `vote_average` |  |
| `vote_count` |  |

Operations: list.

API path: `/3/movie/popular`

#### PrimaryTranslation

| Field | Description |
| --- | --- |

Operations: list.

API path: `/3/configuration/primary_translations`

#### Provider

| Field | Description |
| --- | --- |
| `id` |  |
| `results` |  |

Operations: load.

API path: `/3/tv/{series_id}/season/{season_number}/watch/providers`

#### Region

| Field | Description |
| --- | --- |
| `english_name` |  |
| `iso_3166_1` |  |
| `native_name` |  |

Operations: list.

API path: `/3/watch/providers/regions`

#### Review

| Field | Description |
| --- | --- |
| `author` |  |
| `author_details` |  |
| `content` |  |
| `created_at` |  |
| `id` |  |
| `iso_639_1` |  |
| `media_id` |  |
| `media_title` |  |
| `media_type` |  |
| `updated_at` |  |
| `url` |  |

Operations: load.

API path: `/3/review/{review_id}`

#### Season

| Field | Description |
| --- | --- |
| `air_date` |  |
| `episodes` |  |
| `id` |  |
| `name` |  |
| `networks` |  |
| `overview` |  |
| `poster_path` |  |
| `season_number` |  |
| `vote_average` |  |

Operations: load.

API path: `/3/tv/{series_id}/season/{season_number}`

#### SeasonAccountState

| Field | Description |
| --- | --- |
| `episode_number` |  |
| `id` |  |
| `rated` |  |

Operations: list.

API path: `/3/tv/{series_id}/season/{season_number}/account_states`

#### SeasonAggregateCredit

| Field | Description |
| --- | --- |
| `cast` |  |
| `crew` |  |
| `id` |  |

Operations: list.

API path: `/3/tv/{series_id}/season/{season_number}/aggregate_credits`

#### SeasonChange

| Field | Description |
| --- | --- |
| `id` |  |
| `items` |  |
| `key` |  |

Operations: list.

API path: `/3/tv/season/{season_id}/changes`

#### SeasonCredit

| Field | Description |
| --- | --- |
| `cast` |  |
| `crew` |  |
| `id` |  |

Operations: list.

API path: `/3/tv/{series_id}/season/{season_number}/credits`

#### SeasonExternalId

| Field | Description |
| --- | --- |
| `freebase_id` |  |
| `freebase_mid` |  |
| `id` |  |
| `tvdb_id` |  |
| `tvrage_id` |  |
| `wikidata_id` |  |

Operations: load.

API path: `/3/tv/{series_id}/season/{season_number}/external_ids`

#### SeasonImage

| Field | Description |
| --- | --- |
| `aspect_ratio` |  |
| `file_path` |  |
| `height` |  |
| `iso_639_1` |  |
| `vote_average` |  |
| `vote_count` |  |
| `width` |  |

Operations: list.

API path: `/3/tv/{series_id}/season/{season_number}/images`

#### SeasonTranslation

| Field | Description |
| --- | --- |
| `data` |  |
| `english_name` |  |
| `iso_3166_1` |  |
| `iso_639_1` |  |
| `name` |  |

Operations: list.

API path: `/3/tv/{series_id}/season/{season_number}/translations`

#### SeasonVideo

| Field | Description |
| --- | --- |
| `id` |  |
| `iso_3166_1` |  |
| `iso_639_1` |  |
| `key` |  |
| `name` |  |
| `official` |  |
| `published_at` |  |
| `site` |  |
| `size` |  |
| `type` |  |

Operations: list.

API path: `/3/tv/{series_id}/season/{season_number}/videos`

#### Session

| Field | Description |
| --- | --- |

Operations: remove.

API path: `/3/authentication/session`

#### Timezone

| Field | Description |
| --- | --- |
| `iso_3166_1` |  |
| `zones` |  |

Operations: list.

API path: `/3/configuration/timezones`

#### TopRated

| Field | Description |
| --- | --- |
| `adult` |  |
| `backdrop_path` |  |
| `first_air_date` |  |
| `genre_ids` |  |
| `id` |  |
| `name` |  |
| `origin_country` |  |
| `original_language` |  |
| `original_name` |  |
| `original_title` |  |
| `overview` |  |
| `popularity` |  |
| `poster_path` |  |
| `release_date` |  |
| `title` |  |
| `video` |  |
| `vote_average` |  |
| `vote_count` |  |

Operations: list.

API path: `/3/movie/top_rated`

#### TvAccountState

| Field | Description |
| --- | --- |
| `favorite` |  |
| `id` |  |
| `rated` |  |
| `watchlist` |  |

Operations: load.

API path: `/3/tv/{series_id}/account_states`

#### TvAggregateCredit

| Field | Description |
| --- | --- |
| `cast` |  |
| `crew` |  |
| `id` |  |

Operations: list.

API path: `/3/tv/{series_id}/aggregate_credits`

#### TvAlternativeTitle

| Field | Description |
| --- | --- |
| `id` |  |
| `iso_3166_1` |  |
| `title` |  |
| `type` |  |

Operations: list.

API path: `/3/tv/{series_id}/alternative_titles`

#### TvChange

| Field | Description |
| --- | --- |
| `id` |  |
| `items` |  |
| `key` |  |

Operations: list.

API path: `/3/tv/{series_id}/changes`

#### TvContentRating

| Field | Description |
| --- | --- |
| `descriptors` |  |
| `id` |  |
| `iso_3166_1` |  |
| `rating` |  |

Operations: list.

API path: `/3/tv/{series_id}/content_ratings`

#### TvCredit

| Field | Description |
| --- | --- |
| `cast` |  |
| `crew` |  |
| `id` |  |

Operations: list.

API path: `/3/tv/{series_id}/credits`

#### TvEpisodeGroup

| Field | Description |
| --- | --- |
| `description` |  |
| `episode_count` |  |
| `group_count` |  |
| `id` |  |
| `name` |  |
| `network` |  |
| `type` |  |

Operations: list.

API path: `/3/tv/{series_id}/episode_groups`

#### TvExternalId

| Field | Description |
| --- | --- |
| `facebook_id` |  |
| `freebase_id` |  |
| `freebase_mid` |  |
| `id` |  |
| `imdb_id` |  |
| `instagram_id` |  |
| `tvdb_id` |  |
| `tvrage_id` |  |
| `twitter_id` |  |
| `wikidata_id` |  |

Operations: load.

API path: `/3/tv/{series_id}/external_ids`

#### TvImage

| Field | Description |
| --- | --- |
| `backdrops` |  |
| `id` |  |
| `logos` |  |
| `posters` |  |

Operations: list.

API path: `/3/tv/{series_id}/images`

#### TvKeyword

| Field | Description |
| --- | --- |
| `id` |  |
| `name` |  |

Operations: list.

API path: `/3/tv/{series_id}/keywords`

#### TvList

| Field | Description |
| --- | --- |
| `description` |  |
| `favorite_count` |  |
| `id` |  |
| `iso_3166_1` |  |
| `iso_639_1` |  |
| `item_count` |  |
| `name` |  |
| `poster_path` |  |

Operations: list.

API path: `/3/tv/{series_id}/lists`

#### TvRecommendation

| Field | Description |
| --- | --- |
| `adult` |  |
| `backdrop_path` |  |
| `first_air_date` |  |
| `genre_ids` |  |
| `id` |  |
| `media_type` |  |
| `name` |  |
| `origin_country` |  |
| `original_language` |  |
| `original_name` |  |
| `overview` |  |
| `popularity` |  |
| `poster_path` |  |
| `vote_average` |  |
| `vote_count` |  |

Operations: list.

API path: `/3/tv/{series_id}/recommendations`

#### TvReview

| Field | Description |
| --- | --- |
| `author` |  |
| `author_details` |  |
| `content` |  |
| `created_at` |  |
| `id` |  |
| `updated_at` |  |
| `url` |  |

Operations: list.

API path: `/3/tv/{series_id}/reviews`

#### TvScreenedTheatrically

| Field | Description |
| --- | --- |
| `episode_number` |  |
| `id` |  |
| `season_number` |  |

Operations: list.

API path: `/3/tv/{series_id}/screened_theatrically`

#### TvSimilar

| Field | Description |
| --- | --- |
| `adult` |  |
| `backdrop_path` |  |
| `first_air_date` |  |
| `genre_ids` |  |
| `id` |  |
| `name` |  |
| `origin_country` |  |
| `original_language` |  |
| `original_name` |  |
| `overview` |  |
| `popularity` |  |
| `poster_path` |  |
| `vote_average` |  |
| `vote_count` |  |

Operations: list.

API path: `/3/tv/{series_id}/similar`

#### TvTranslation

| Field | Description |
| --- | --- |
| `data` |  |
| `english_name` |  |
| `id` |  |
| `iso_3166_1` |  |
| `iso_639_1` |  |
| `name` |  |

Operations: list.

API path: `/3/tv/{series_id}/translations`

#### TvVideo

| Field | Description |
| --- | --- |
| `id` |  |
| `iso_3166_1` |  |
| `iso_639_1` |  |
| `key` |  |
| `name` |  |
| `official` |  |
| `published_at` |  |
| `site` |  |
| `size` |  |
| `type` |  |

Operations: list.

API path: `/3/tv/{series_id}/videos`

#### Tvn

| Field | Description |
| --- | --- |
| `RAW_BODY` |  |
| `adult` |  |
| `backdrop_path` |  |
| `created_by` |  |
| `display_priorities` |  |
| `display_priority` |  |
| `episode_run_time` |  |
| `first_air_date` |  |
| `genre_ids` |  |
| `genres` |  |
| `homepage` |  |
| `id` |  |
| `in_production` |  |
| `languages` |  |
| `last_air_date` |  |
| `last_episode_to_air` |  |
| `logo_path` |  |
| `name` |  |
| `networks` |  |
| `next_episode_to_air` |  |
| `number_of_episodes` |  |
| `number_of_seasons` |  |
| `origin_country` |  |
| `original_language` |  |
| `original_name` |  |
| `overview` |  |
| `page` |  |
| `popularity` |  |
| `poster_path` |  |
| `production_companies` |  |
| `production_countries` |  |
| `provider_id` |  |
| `provider_name` |  |
| `rating` |  |
| `results` |  |
| `seasons` |  |
| `spoken_languages` |  |
| `status` |  |
| `status_code` |  |
| `status_message` |  |
| `tagline` |  |
| `total_pages` |  |
| `total_results` |  |
| `type` |  |
| `vote_average` |  |
| `vote_count` |  |

Operations: create, list, load, remove.

API path: `/3/tv/{series_id}/rating`

#### Upcoming

| Field | Description |
| --- | --- |
| `adult` |  |
| `backdrop_path` |  |
| `genre_ids` |  |
| `id` |  |
| `original_language` |  |
| `original_title` |  |
| `overview` |  |
| `popularity` |  |
| `poster_path` |  |
| `release_date` |  |
| `title` |  |
| `video` |  |
| `vote_average` |  |
| `vote_count` |  |

Operations: list.

API path: `/3/movie/upcoming`

#### ValidateWithLogin

| Field | Description |
| --- | --- |
| `RAW_BODY` |  |
| `expires_at` |  |
| `request_token` |  |
| `success` |  |

Operations: create.

API path: `/3/authentication/token/validate_with_login`

#### Watchlist

| Field | Description |
| --- | --- |
| `RAW_BODY` |  |
| `status_code` |  |
| `status_message` |  |

Operations: create.

API path: `/3/account/{account_id}/watchlist`



## Entities


### Account

Create an instance: `const account = client.Account()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar` | `Record<string, any>` |  |
| `id` | `number` |  |
| `include_adult` | `boolean` |  |
| `iso_3166_1` | `string` |  |
| `iso_639_1` | `string` |  |
| `name` | `string` |  |
| `username` | `string` |  |

#### Example: Load

```ts
const account = await client.Account().load({ id: 1 })
```


### AccountList

Create an instance: `const account_list = client.AccountList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` |  |
| `favorite_count` | `number` |  |
| `id` | `number` |  |
| `iso_639_1` | `string` |  |
| `item_count` | `number` |  |
| `list_type` | `string` |  |
| `name` | `string` |  |
| `poster_path` | `any` |  |

#### Example: List

```ts
const account_lists = await client.AccountList().list({ id: 1 })
```


### AiringToday

Create an instance: `const airing_today = client.AiringToday()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `backdrop_path` | `string` |  |
| `first_air_date` | `string` |  |
| `genre_ids` | `any[]` |  |
| `id` | `number` |  |
| `name` | `string` |  |
| `origin_country` | `any[]` |  |
| `original_language` | `string` |  |
| `original_name` | `string` |  |
| `overview` | `string` |  |
| `popularity` | `number` |  |
| `poster_path` | `string` |  |
| `vote_average` | `number` |  |
| `vote_count` | `number` |  |

#### Example: List

```ts
const airing_todays = await client.AiringToday().list()
```


### All

Create an instance: `const all = client.All()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `page` | `number` |  |
| `results` | `any[]` |  |
| `total_pages` | `number` |  |
| `total_results` | `number` |  |

#### Example: Load

```ts
const all = await client.All().load({ id: 'all_id' })
```


### Authentication

Create an instance: `const authentication = client.Authentication()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `status_code` | `number` |  |
| `status_message` | `string` |  |
| `success` | `boolean` |  |

#### Example: Load

```ts
const authentication = await client.Authentication().load()
```


### Change

Create an instance: `const change = client.Change()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `adult` | `boolean` |  |
| `id` | `number` |  |

#### Example: List

```ts
const changes = await client.Change().list()
```


### Collection

Create an instance: `const collection = client.Collection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `adult` | `boolean` |  |
| `backdrop_path` | `string` |  |
| `id` | `number` |  |
| `name` | `string` |  |
| `original_language` | `string` |  |
| `original_name` | `string` |  |
| `overview` | `string` |  |
| `parts` | `any[]` |  |
| `poster_path` | `string` |  |

#### Example: Load

```ts
const collection = await client.Collection().load({ id: 1 })
```

#### Example: List

```ts
const collections = await client.Collection().list({ query: "example" })
```


### CollectionImage

Create an instance: `const collection_image = client.CollectionImage()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `backdrops` | `any[]` |  |
| `id` | `number` |  |
| `posters` | `any[]` |  |

#### Example: List

```ts
const collection_images = await client.CollectionImage().list({ id: 1 })
```


### CollectionTranslation

Create an instance: `const collection_translation = client.CollectionTranslation()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Record<string, any>` |  |
| `english_name` | `string` |  |
| `id` | `string` |  |
| `iso_3166_1` | `string` |  |
| `iso_639_1` | `string` |  |
| `name` | `string` |  |

#### Example: List

```ts
const collection_translations = await client.CollectionTranslation().list({ id: 1 })
```


### Company

Create an instance: `const company = client.Company()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` |  |
| `headquarters` | `string` |  |
| `homepage` | `string` |  |
| `id` | `number` |  |
| `logo_path` | `string` |  |
| `name` | `string` |  |
| `origin_country` | `string` |  |
| `parent_company` | `any` |  |

#### Example: Load

```ts
const company = await client.Company().load({ id: 1 })
```

#### Example: List

```ts
const companys = await client.Company().list({ query: "example" })
```


### CompanyAlternativeName

Create an instance: `const company_alternative_name = client.CompanyAlternativeName()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `name` | `string` |  |
| `type` | `string` |  |

#### Example: List

```ts
const company_alternative_names = await client.CompanyAlternativeName().list({ id: 1 })
```


### CompanyImage

Create an instance: `const company_image = client.CompanyImage()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aspect_ratio` | `number` |  |
| `file_path` | `string` |  |
| `file_type` | `string` |  |
| `height` | `number` |  |
| `id` | `string` |  |
| `vote_average` | `number` |  |
| `vote_count` | `number` |  |
| `width` | `number` |  |

#### Example: List

```ts
const company_images = await client.CompanyImage().list({ id: 1 })
```


### Configuration

Create an instance: `const configuration = client.Configuration()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `change_keys` | `any[]` |  |
| `images` | `Record<string, any>` |  |

#### Example: List

```ts
const configurations = await client.Configuration().list()
```


### Country

Create an instance: `const country = client.Country()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `english_name` | `string` |  |
| `iso_3166_1` | `string` |  |
| `native_name` | `string` |  |

#### Example: List

```ts
const countrys = await client.Country().list()
```


### Credit

Create an instance: `const credit = client.Credit()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `credit_type` | `string` |  |
| `department` | `string` |  |
| `id` | `string` |  |
| `job` | `string` |  |
| `media` | `Record<string, any>` |  |
| `media_type` | `string` |  |
| `person` | `Record<string, any>` |  |

#### Example: Load

```ts
const credit = await client.Credit().load({ id: 'credit_id' })
```


### Episode

Create an instance: `const episode = client.Episode()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `air_date` | `string` |  |
| `crew` | `any[]` |  |
| `episode_number` | `number` |  |
| `guest_stars` | `any[]` |  |
| `id` | `number` |  |
| `name` | `string` |  |
| `overview` | `string` |  |
| `production_code` | `string` |  |
| `rating` | `number` |  |
| `runtime` | `number` |  |
| `season_number` | `number` |  |
| `show_id` | `number` |  |
| `still_path` | `string` |  |
| `vote_average` | `number` |  |
| `vote_count` | `number` |  |

#### Example: Load

```ts
const episode = await client.Episode().load({ id: 1, season_id: 1, tv_id: 1 })
```

#### Example: List

```ts
const episodes = await client.Episode().list({ account_id: 1 })
```

#### Example: Create

```ts
const episode = await client.Episode().create({
  id: 1,
  season_id: 1,
  tv_id: 1,
})
```


### EpisodeAccountState

Create an instance: `const episode_account_state = client.EpisodeAccountState()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `favorite` | `boolean` |  |
| `id` | `number` |  |
| `rated` | `Record<string, any>` |  |
| `watchlist` | `boolean` |  |

#### Example: Load

```ts
const episode_account_state = await client.EpisodeAccountState().load({ episode_number: 1, season_id: 1, tv_id: 1 })
```


### EpisodeChange

Create an instance: `const episode_change = client.EpisodeChange()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `items` | `any[]` |  |
| `key` | `string` |  |

#### Example: List

```ts
const episode_changes = await client.EpisodeChange().list({ id: 1 })
```


### EpisodeCredit

Create an instance: `const episode_credit = client.EpisodeCredit()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cast` | `any[]` |  |
| `crew` | `any[]` |  |
| `guest_stars` | `any[]` |  |
| `id` | `number` |  |

#### Example: List

```ts
const episode_credits = await client.EpisodeCredit().list({ episode_number: 1, season_id: 1, tv_id: 1 })
```


### EpisodeExternalId

Create an instance: `const episode_external_id = client.EpisodeExternalId()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `freebase_id` | `string` |  |
| `freebase_mid` | `string` |  |
| `id` | `number` |  |
| `imdb_id` | `string` |  |
| `tvdb_id` | `number` |  |
| `tvrage_id` | `number` |  |
| `wikidata_id` | `string` |  |

#### Example: Load

```ts
const episode_external_id = await client.EpisodeExternalId().load({ episode_number: 'episode_number', season_id: 1, tv_id: 1 })
```


### EpisodeGroup

Create an instance: `const episode_group = client.EpisodeGroup()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` |  |
| `episode_count` | `number` |  |
| `group_count` | `number` |  |
| `groups` | `any[]` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `network` | `Record<string, any>` |  |
| `type` | `number` |  |

#### Example: Load

```ts
const episode_group = await client.EpisodeGroup().load({ id: 'episode_group_id' })
```


### EpisodeImage

Create an instance: `const episode_image = client.EpisodeImage()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aspect_ratio` | `number` |  |
| `file_path` | `string` |  |
| `height` | `number` |  |
| `iso_639_1` | `any` |  |
| `vote_average` | `number` |  |
| `vote_count` | `number` |  |
| `width` | `number` |  |

#### Example: List

```ts
const episode_images = await client.EpisodeImage().list({ episode_number: 1, season_id: 1, tv_id: 1 })
```


### EpisodeTranslation

Create an instance: `const episode_translation = client.EpisodeTranslation()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Record<string, any>` |  |
| `english_name` | `string` |  |
| `iso_3166_1` | `string` |  |
| `iso_639_1` | `string` |  |
| `name` | `string` |  |

#### Example: List

```ts
const episode_translations = await client.EpisodeTranslation().list({ episode_number: 1, season_id: 1, tv_id: 1 })
```


### EpisodeVideo

Create an instance: `const episode_video = client.EpisodeVideo()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `iso_3166_1` | `string` |  |
| `iso_639_1` | `string` |  |
| `key` | `string` |  |
| `name` | `string` |  |
| `official` | `boolean` |  |
| `published_at` | `string` |  |
| `site` | `string` |  |
| `size` | `number` |  |
| `type` | `string` |  |

#### Example: List

```ts
const episode_videos = await client.EpisodeVideo().list({ episode_number: 1, season_id: 1, tv_id: 1 })
```


### Favorite

Create an instance: `const favorite = client.Favorite()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `RAW_BODY` | `string` |  |
| `status_code` | `number` |  |
| `status_message` | `string` |  |

#### Example: Create

```ts
const favorite = await client.Favorite().create({
  account_id: 1,
  RAW_BODY: 'example_RAW_BODY',
})
```


### Find

Create an instance: `const find = client.Find()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `movie_results` | `any[]` |  |
| `person_results` | `any[]` |  |
| `tv_episode_results` | `any[]` |  |
| `tv_results` | `any[]` |  |
| `tv_season_results` | `any[]` |  |

#### Example: Load

```ts
const find = await client.Find().load({ id: 'find_id', external_source: 'external_source' })
```


### Job

Create an instance: `const job = client.Job()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `department` | `string` |  |
| `jobs` | `any[]` |  |

#### Example: List

```ts
const jobs = await client.Job().list()
```


### Keyword

Create an instance: `const keyword = client.Keyword()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `number` |  |
| `name` | `string` |  |

#### Example: Load

```ts
const keyword = await client.Keyword().load({ id: 1 })
```

#### Example: List

```ts
const keywords = await client.Keyword().list({ query: "example" })
```


### KeywordMovie

Create an instance: `const keyword_movie = client.KeywordMovie()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `adult` | `boolean` |  |
| `backdrop_path` | `string` |  |
| `genre_ids` | `any[]` |  |
| `id` | `number` |  |
| `original_language` | `string` |  |
| `original_title` | `string` |  |
| `overview` | `string` |  |
| `popularity` | `number` |  |
| `poster_path` | `string` |  |
| `release_date` | `string` |  |
| `title` | `string` |  |
| `video` | `boolean` |  |
| `vote_average` | `number` |  |
| `vote_count` | `number` |  |

#### Example: List

```ts
const keyword_movies = await client.KeywordMovie().list({ id: "example" })
```


### Language

Create an instance: `const language = client.Language()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `english_name` | `string` |  |
| `iso_639_1` | `string` |  |
| `name` | `string` |  |

#### Example: List

```ts
const languages = await client.Language().list()
```


### Latest

Create an instance: `const latest = client.Latest()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `adult` | `boolean` |  |
| `air_date` | `any` |  |
| `also_known_as` | `any[]` |  |
| `backdrop_path` | `any` |  |
| `belongs_to_collection` | `any` |  |
| `biography` | `string` |  |
| `birthday` | `any` |  |
| `budget` | `number` |  |
| `deathday` | `any` |  |
| `episode_count` | `number` |  |
| `gender` | `number` |  |
| `genres` | `any[]` |  |
| `homepage` | `string` |  |
| `id` | `number` |  |
| `imdb_id` | `string` |  |
| `known_for_department` | `any` |  |
| `name` | `string` |  |
| `original_language` | `string` |  |
| `original_title` | `string` |  |
| `overview` | `string` |  |
| `place_of_birth` | `any` |  |
| `popularity` | `number` |  |
| `poster_path` | `any` |  |
| `production_companies` | `any[]` |  |
| `production_countries` | `any[]` |  |
| `profile_path` | `any` |  |
| `release_date` | `string` |  |
| `revenue` | `number` |  |
| `runtime` | `number` |  |
| `season_number` | `number` |  |
| `spoken_languages` | `any[]` |  |
| `status` | `string` |  |
| `tagline` | `string` |  |
| `title` | `string` |  |
| `video` | `boolean` |  |
| `vote_average` | `number` |  |
| `vote_count` | `number` |  |

#### Example: List

```ts
const latests = await client.Latest().list()
```


### List

Create an instance: `const list = client.List()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `AR` | `any[]` |  |
| `AU` | `any[]` |  |
| `BG` | `any[]` |  |
| `BR` | `any[]` |  |
| `CA` | `any[]` |  |
| `CAQC` | `any[]` |  |
| `CH` | `any[]` |  |
| `DE` | `any[]` |  |
| `DK` | `any[]` |  |
| `ES` | `any[]` |  |
| `FI` | `any[]` |  |
| `FR` | `any[]` |  |
| `GB` | `any[]` |  |
| `GR` | `any[]` |  |
| `HK` | `any[]` |  |
| `HU` | `any[]` |  |
| `ID` | `any[]` |  |
| `IE` | `any[]` |  |
| `IL` | `any[]` |  |
| `IN` | `any[]` |  |
| `IT` | `any[]` |  |
| `JP` | `any[]` |  |
| `KR` | `any[]` |  |
| `LT` | `any[]` |  |
| `LU` | `any[]` |  |
| `LV` | `any[]` |  |
| `MA` | `any[]` |  |
| `MO` | `any[]` |  |
| `MX` | `any[]` |  |
| `MY` | `any[]` |  |
| `NL` | `any[]` |  |
| `NO` | `any[]` |  |
| `NZ` | `any[]` |  |
| `PH` | `any[]` |  |
| `PL` | `any[]` |  |
| `PR` | `any[]` |  |
| `PT` | `any[]` |  |
| `RAW_BODY` | `string` |  |
| `RU` | `any[]` |  |
| `SE` | `any[]` |  |
| `SG` | `any[]` |  |
| `SK` | `any[]` |  |
| `TH` | `any[]` |  |
| `TR` | `any[]` |  |
| `TW` | `any[]` |  |
| `US` | `any[]` |  |
| `VI` | `any[]` |  |
| `ZA` | `any[]` |  |
| `created_by` | `string` |  |
| `description` | `string` |  |
| `favorite_count` | `number` |  |
| `id` | `string` |  |
| `iso_639_1` | `string` |  |
| `item_count` | `number` |  |
| `items` | `any[]` |  |
| `list_id` | `number` |  |
| `name` | `string` |  |
| `poster_path` | `string` |  |
| `status_code` | `number` |  |
| `status_message` | `string` |  |
| `success` | `boolean` |  |

#### Example: Load

```ts
const list = await client.List().load({ id: 1 })
```

#### Example: List

```ts
const lists = await client.List().list()
```

#### Example: Create

```ts
const list = await client.List().create({
  session_id: 'example_session_id',
  RAW_BODY: 'example_RAW_BODY',
})
```


### ListItemStatus

Create an instance: `const list_item_status = client.ListItemStatus()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `number` |  |
| `item_present` | `boolean` |  |

#### Example: Load

```ts
const list_item_status = await client.ListItemStatus().load({ id: 1 })
```


### Movie

Create an instance: `const movie = client.Movie()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `adult` | `boolean` |  |
| `backdrop_path` | `string` |  |
| `belongs_to_collection` | `Record<string, any>` |  |
| `budget` | `number` |  |
| `display_priorities` | `Record<string, any>` |  |
| `display_priority` | `number` |  |
| `genre_ids` | `any[]` |  |
| `genres` | `any[]` |  |
| `homepage` | `string` |  |
| `id` | `number` |  |
| `imdb_id` | `string` |  |
| `logo_path` | `string` |  |
| `origin_country` | `any[]` |  |
| `original_language` | `string` |  |
| `original_title` | `string` |  |
| `overview` | `string` |  |
| `page` | `number` |  |
| `popularity` | `number` |  |
| `poster_path` | `string` |  |
| `production_companies` | `any[]` |  |
| `production_countries` | `any[]` |  |
| `provider_id` | `number` |  |
| `provider_name` | `string` |  |
| `rating` | `number` |  |
| `release_date` | `string` |  |
| `results` | `any[]` |  |
| `revenue` | `number` |  |
| `runtime` | `number` |  |
| `spoken_languages` | `any[]` |  |
| `status` | `string` |  |
| `tagline` | `string` |  |
| `title` | `string` |  |
| `total_pages` | `number` |  |
| `total_results` | `number` |  |
| `video` | `boolean` |  |
| `vote_average` | `number` |  |
| `vote_count` | `number` |  |

#### Example: Load

```ts
const movie = await client.Movie().load({ id: 1 })
```

#### Example: List

```ts
const movies = await client.Movie().list({ query: "example" })
```

#### Example: Create

```ts
const movie = await client.Movie().create({
  id: 1,
})
```


### MovieAccountState

Create an instance: `const movie_account_state = client.MovieAccountState()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `favorite` | `boolean` |  |
| `id` | `number` |  |
| `rated` | `Record<string, any>` |  |
| `watchlist` | `boolean` |  |

#### Example: Load

```ts
const movie_account_state = await client.MovieAccountState().load({ id: 1 })
```


### MovieAlternativeTitle

Create an instance: `const movie_alternative_title = client.MovieAlternativeTitle()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `iso_3166_1` | `string` |  |
| `title` | `string` |  |
| `type` | `string` |  |

#### Example: List

```ts
const movie_alternative_titles = await client.MovieAlternativeTitle().list({ id: 1 })
```


### MovieChange

Create an instance: `const movie_change = client.MovieChange()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `items` | `any[]` |  |
| `key` | `string` |  |

#### Example: List

```ts
const movie_changes = await client.MovieChange().list({ id: 1 })
```


### MovieCredit

Create an instance: `const movie_credit = client.MovieCredit()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cast` | `any[]` |  |
| `crew` | `any[]` |  |
| `id` | `number` |  |

#### Example: List

```ts
const movie_credits = await client.MovieCredit().list({ id: 1 })
```


### MovieExternalId

Create an instance: `const movie_external_id = client.MovieExternalId()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `facebook_id` | `string` |  |
| `id` | `number` |  |
| `imdb_id` | `string` |  |
| `instagram_id` | `string` |  |
| `twitter_id` | `string` |  |
| `wikidata_id` | `string` |  |

#### Example: Load

```ts
const movie_external_id = await client.MovieExternalId().load({ id: 1 })
```


### MovieImage

Create an instance: `const movie_image = client.MovieImage()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `backdrops` | `any[]` |  |
| `id` | `number` |  |
| `logos` | `any[]` |  |
| `posters` | `any[]` |  |

#### Example: List

```ts
const movie_images = await client.MovieImage().list({ id: 1 })
```


### MovieKeyword

Create an instance: `const movie_keyword = client.MovieKeyword()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `number` |  |
| `name` | `string` |  |

#### Example: List

```ts
const movie_keywords = await client.MovieKeyword().list({ id: "example" })
```


### MovieList

Create an instance: `const movie_list = client.MovieList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` |  |
| `favorite_count` | `number` |  |
| `id` | `number` |  |
| `iso_639_1` | `string` |  |
| `item_count` | `number` |  |
| `list_type` | `string` |  |
| `name` | `string` |  |
| `poster_path` | `any` |  |

#### Example: List

```ts
const movie_lists = await client.MovieList().list({ id: 1 })
```


### MovieRecommendation

Create an instance: `const movie_recommendation = client.MovieRecommendation()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```ts
const movie_recommendation = await client.MovieRecommendation().load({ id: 1 })
```


### MovieReleaseDate

Create an instance: `const movie_release_date = client.MovieReleaseDate()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `iso_3166_1` | `string` |  |
| `release_dates` | `any[]` |  |

#### Example: List

```ts
const movie_release_dates = await client.MovieReleaseDate().list({ id: 1 })
```


### MovieReview

Create an instance: `const movie_review = client.MovieReview()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author` | `string` |  |
| `author_details` | `Record<string, any>` |  |
| `content` | `string` |  |
| `created_at` | `string` |  |
| `id` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |

#### Example: List

```ts
const movie_reviews = await client.MovieReview().list({ id: 1 })
```


### MovieSimilar

Create an instance: `const movie_similar = client.MovieSimilar()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `adult` | `boolean` |  |
| `backdrop_path` | `string` |  |
| `genre_ids` | `any[]` |  |
| `id` | `number` |  |
| `original_language` | `string` |  |
| `original_title` | `string` |  |
| `overview` | `string` |  |
| `popularity` | `number` |  |
| `poster_path` | `string` |  |
| `release_date` | `string` |  |
| `title` | `string` |  |
| `video` | `boolean` |  |
| `vote_average` | `number` |  |
| `vote_count` | `number` |  |

#### Example: List

```ts
const movie_similars = await client.MovieSimilar().list({ id: 1 })
```


### MovieTranslation

Create an instance: `const movie_translation = client.MovieTranslation()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Record<string, any>` |  |
| `english_name` | `string` |  |
| `id` | `string` |  |
| `iso_3166_1` | `string` |  |
| `iso_639_1` | `string` |  |
| `name` | `string` |  |

#### Example: List

```ts
const movie_translations = await client.MovieTranslation().list({ id: 1 })
```


### MovieVideo

Create an instance: `const movie_video = client.MovieVideo()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `iso_3166_1` | `string` |  |
| `iso_639_1` | `string` |  |
| `key` | `string` |  |
| `name` | `string` |  |
| `official` | `boolean` |  |
| `published_at` | `string` |  |
| `site` | `string` |  |
| `size` | `number` |  |
| `type` | `string` |  |

#### Example: List

```ts
const movie_videos = await client.MovieVideo().list({ id: 1 })
```


### Multi

Create an instance: `const multi = client.Multi()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `adult` | `boolean` |  |
| `backdrop_path` | `string` |  |
| `genre_ids` | `any[]` |  |
| `id` | `number` |  |
| `media_type` | `string` |  |
| `name` | `string` |  |
| `original_language` | `string` |  |
| `original_name` | `string` |  |
| `original_title` | `string` |  |
| `overview` | `string` |  |
| `popularity` | `number` |  |
| `poster_path` | `string` |  |
| `release_date` | `string` |  |
| `title` | `string` |  |
| `video` | `boolean` |  |
| `vote_average` | `number` |  |
| `vote_count` | `number` |  |

#### Example: List

```ts
const multis = await client.Multi().list({ query: "example" })
```


### N4n

Create an instance: `const n4n = client.N4n()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `RAW_BODY` | `string` |  |
| `session_id` | `string` |  |
| `success` | `boolean` |  |

#### Example: Create

```ts
const n4n = await client.N4n().create({
  RAW_BODY: 'example_RAW_BODY',
})
```


### Network

Create an instance: `const network = client.Network()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `headquarters` | `string` |  |
| `homepage` | `string` |  |
| `id` | `number` |  |
| `logo_path` | `string` |  |
| `name` | `string` |  |
| `origin_country` | `string` |  |

#### Example: Load

```ts
const network = await client.Network().load({ id: 1 })
```


### NetworkAlternativeName

Create an instance: `const network_alternative_name = client.NetworkAlternativeName()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `name` | `string` |  |
| `type` | `string` |  |

#### Example: List

```ts
const network_alternative_names = await client.NetworkAlternativeName().list({ id: 1 })
```


### NetworkImage

Create an instance: `const network_image = client.NetworkImage()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aspect_ratio` | `number` |  |
| `file_path` | `string` |  |
| `file_type` | `string` |  |
| `height` | `number` |  |
| `id` | `string` |  |
| `vote_average` | `number` |  |
| `vote_count` | `number` |  |
| `width` | `number` |  |

#### Example: List

```ts
const network_images = await client.NetworkImage().list({ id: 1 })
```


### New

Create an instance: `const new_ = client.New()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `RAW_BODY` | `string` |  |
| `expires_at` | `string` |  |
| `guest_session_id` | `string` |  |
| `request_token` | `string` |  |
| `session_id` | `string` |  |
| `success` | `boolean` |  |

#### Example: Load

```ts
const new_ = await client.New().load()
```

#### Example: Create

```ts
const new_ = await client.New().create({
  RAW_BODY: 'example_RAW_BODY',
})
```


### NowPlaying

Create an instance: `const now_playing = client.NowPlaying()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `adult` | `boolean` |  |
| `backdrop_path` | `string` |  |
| `genre_ids` | `any[]` |  |
| `id` | `number` |  |
| `original_language` | `string` |  |
| `original_title` | `string` |  |
| `overview` | `string` |  |
| `popularity` | `number` |  |
| `poster_path` | `string` |  |
| `release_date` | `string` |  |
| `title` | `string` |  |
| `video` | `boolean` |  |
| `vote_average` | `number` |  |
| `vote_count` | `number` |  |

#### Example: List

```ts
const now_playings = await client.NowPlaying().list()
```


### OnTheAir

Create an instance: `const on_the_air = client.OnTheAir()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `backdrop_path` | `string` |  |
| `first_air_date` | `string` |  |
| `genre_ids` | `any[]` |  |
| `id` | `number` |  |
| `name` | `string` |  |
| `origin_country` | `any[]` |  |
| `original_language` | `string` |  |
| `original_name` | `string` |  |
| `overview` | `string` |  |
| `popularity` | `number` |  |
| `poster_path` | `string` |  |
| `vote_average` | `number` |  |
| `vote_count` | `number` |  |

#### Example: List

```ts
const on_the_airs = await client.OnTheAir().list()
```


### Person

Create an instance: `const person = client.Person()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `adult` | `boolean` |  |
| `also_known_as` | `any[]` |  |
| `biography` | `string` |  |
| `birthday` | `string` |  |
| `deathday` | `any` |  |
| `gender` | `number` |  |
| `homepage` | `any` |  |
| `id` | `number` |  |
| `imdb_id` | `string` |  |
| `known_for` | `any[]` |  |
| `known_for_department` | `string` |  |
| `name` | `string` |  |
| `original_name` | `string` |  |
| `page` | `number` |  |
| `place_of_birth` | `string` |  |
| `popularity` | `number` |  |
| `profile_path` | `string` |  |
| `results` | `any[]` |  |
| `total_pages` | `number` |  |
| `total_results` | `number` |  |

#### Example: Load

```ts
const person = await client.Person().load({ id: 1 })
```

#### Example: List

```ts
const persons = await client.Person().list({ query: "example" })
```


### PersonChange

Create an instance: `const person_change = client.PersonChange()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `items` | `any[]` |  |
| `key` | `string` |  |

#### Example: List

```ts
const person_changes = await client.PersonChange().list({ id: 1 })
```


### PersonCombinedCredit

Create an instance: `const person_combined_credit = client.PersonCombinedCredit()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cast` | `any[]` |  |
| `crew` | `any[]` |  |
| `id` | `number` |  |

#### Example: List

```ts
const person_combined_credits = await client.PersonCombinedCredit().list({ id: "example" })
```


### PersonExternalId

Create an instance: `const person_external_id = client.PersonExternalId()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `facebook_id` | `string` |  |
| `freebase_id` | `string` |  |
| `freebase_mid` | `string` |  |
| `id` | `number` |  |
| `imdb_id` | `string` |  |
| `instagram_id` | `string` |  |
| `tiktok_id` | `string` |  |
| `tvrage_id` | `number` |  |
| `twitter_id` | `string` |  |
| `wikidata_id` | `string` |  |
| `youtube_id` | `string` |  |

#### Example: Load

```ts
const person_external_id = await client.PersonExternalId().load({ id: 1 })
```


### PersonImage

Create an instance: `const person_image = client.PersonImage()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aspect_ratio` | `number` |  |
| `file_path` | `string` |  |
| `height` | `number` |  |
| `id` | `string` |  |
| `iso_639_1` | `any` |  |
| `vote_average` | `number` |  |
| `vote_count` | `number` |  |
| `width` | `number` |  |

#### Example: List

```ts
const person_images = await client.PersonImage().list({ id: 1 })
```


### PersonMovieCredit

Create an instance: `const person_movie_credit = client.PersonMovieCredit()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cast` | `any[]` |  |
| `crew` | `any[]` |  |
| `id` | `number` |  |

#### Example: List

```ts
const person_movie_credits = await client.PersonMovieCredit().list({ id: 1 })
```


### PersonTaggedImage

Create an instance: `const person_tagged_image = client.PersonTaggedImage()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aspect_ratio` | `number` |  |
| `file_path` | `string` |  |
| `height` | `number` |  |
| `id` | `string` |  |
| `image_type` | `string` |  |
| `iso_639_1` | `string` |  |
| `media` | `Record<string, any>` |  |
| `media_type` | `string` |  |
| `vote_average` | `number` |  |
| `vote_count` | `number` |  |
| `width` | `number` |  |

#### Example: List

```ts
const person_tagged_images = await client.PersonTaggedImage().list({ id: 1 })
```


### PersonTranslation

Create an instance: `const person_translation = client.PersonTranslation()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Record<string, any>` |  |
| `english_name` | `string` |  |
| `id` | `string` |  |
| `iso_3166_1` | `string` |  |
| `iso_639_1` | `string` |  |
| `name` | `string` |  |

#### Example: List

```ts
const person_translations = await client.PersonTranslation().list({ id: 1 })
```


### PersonTvCredit

Create an instance: `const person_tv_credit = client.PersonTvCredit()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cast` | `any[]` |  |
| `crew` | `any[]` |  |
| `id` | `number` |  |

#### Example: List

```ts
const person_tv_credits = await client.PersonTvCredit().list({ id: 1 })
```


### Popular

Create an instance: `const popular = client.Popular()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `adult` | `boolean` |  |
| `backdrop_path` | `string` |  |
| `first_air_date` | `string` |  |
| `gender` | `number` |  |
| `genre_ids` | `any[]` |  |
| `id` | `number` |  |
| `known_for` | `any[]` |  |
| `known_for_department` | `string` |  |
| `name` | `string` |  |
| `origin_country` | `any[]` |  |
| `original_language` | `string` |  |
| `original_name` | `string` |  |
| `original_title` | `string` |  |
| `overview` | `string` |  |
| `popularity` | `number` |  |
| `poster_path` | `string` |  |
| `profile_path` | `string` |  |
| `release_date` | `string` |  |
| `title` | `string` |  |
| `video` | `boolean` |  |
| `vote_average` | `number` |  |
| `vote_count` | `number` |  |

#### Example: List

```ts
const populars = await client.Popular().list()
```


### PrimaryTranslation

Create an instance: `const primary_translation = client.PrimaryTranslation()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Example: List

```ts
const primary_translations = await client.PrimaryTranslation().list()
```


### Provider

Create an instance: `const provider = client.Provider()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `number` |  |
| `results` | `Record<string, any>` |  |

#### Example: Load

```ts
const provider = await client.Provider().load({ movie_id: 1 })
```


### Region

Create an instance: `const region = client.Region()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `english_name` | `string` |  |
| `iso_3166_1` | `string` |  |
| `native_name` | `string` |  |

#### Example: List

```ts
const regions = await client.Region().list()
```


### Review

Create an instance: `const review = client.Review()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author` | `string` |  |
| `author_details` | `Record<string, any>` |  |
| `content` | `string` |  |
| `created_at` | `string` |  |
| `id` | `string` |  |
| `iso_639_1` | `string` |  |
| `media_id` | `number` |  |
| `media_title` | `string` |  |
| `media_type` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const review = await client.Review().load({ id: 'review_id' })
```


### Season

Create an instance: `const season = client.Season()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `air_date` | `string` |  |
| `episodes` | `any[]` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `networks` | `any[]` |  |
| `overview` | `string` |  |
| `poster_path` | `string` |  |
| `season_number` | `number` |  |
| `vote_average` | `number` |  |

#### Example: Load

```ts
const season = await client.Season().load({ id: 1, tv_id: 1 })
```


### SeasonAccountState

Create an instance: `const season_account_state = client.SeasonAccountState()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `episode_number` | `number` |  |
| `id` | `number` |  |
| `rated` | `Record<string, any>` |  |

#### Example: List

```ts
const season_account_states = await client.SeasonAccountState().list({ season_number: 1, tv_id: 1 })
```


### SeasonAggregateCredit

Create an instance: `const season_aggregate_credit = client.SeasonAggregateCredit()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cast` | `any[]` |  |
| `crew` | `any[]` |  |
| `id` | `number` |  |

#### Example: List

```ts
const season_aggregate_credits = await client.SeasonAggregateCredit().list({ season_number: 1, tv_id: 1 })
```


### SeasonChange

Create an instance: `const season_change = client.SeasonChange()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `items` | `any[]` |  |
| `key` | `string` |  |

#### Example: List

```ts
const season_changes = await client.SeasonChange().list({ id: 1 })
```


### SeasonCredit

Create an instance: `const season_credit = client.SeasonCredit()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cast` | `any[]` |  |
| `crew` | `any[]` |  |
| `id` | `number` |  |

#### Example: List

```ts
const season_credits = await client.SeasonCredit().list({ season_number: 1, tv_id: 1 })
```


### SeasonExternalId

Create an instance: `const season_external_id = client.SeasonExternalId()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `freebase_id` | `string` |  |
| `freebase_mid` | `string` |  |
| `id` | `number` |  |
| `tvdb_id` | `number` |  |
| `tvrage_id` | `string` |  |
| `wikidata_id` | `string` |  |

#### Example: Load

```ts
const season_external_id = await client.SeasonExternalId().load({ season_number: 1, tv_id: 1 })
```


### SeasonImage

Create an instance: `const season_image = client.SeasonImage()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aspect_ratio` | `number` |  |
| `file_path` | `string` |  |
| `height` | `number` |  |
| `iso_639_1` | `string` |  |
| `vote_average` | `number` |  |
| `vote_count` | `number` |  |
| `width` | `number` |  |

#### Example: List

```ts
const season_images = await client.SeasonImage().list({ season_number: 1, tv_id: 1 })
```


### SeasonTranslation

Create an instance: `const season_translation = client.SeasonTranslation()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Record<string, any>` |  |
| `english_name` | `string` |  |
| `iso_3166_1` | `string` |  |
| `iso_639_1` | `string` |  |
| `name` | `string` |  |

#### Example: List

```ts
const season_translations = await client.SeasonTranslation().list({ season_number: 1, tv_id: 1 })
```


### SeasonVideo

Create an instance: `const season_video = client.SeasonVideo()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `iso_3166_1` | `string` |  |
| `iso_639_1` | `string` |  |
| `key` | `string` |  |
| `name` | `string` |  |
| `official` | `boolean` |  |
| `published_at` | `string` |  |
| `site` | `string` |  |
| `size` | `number` |  |
| `type` | `string` |  |

#### Example: List

```ts
const season_videos = await client.SeasonVideo().list({ season_number: 1, tv_id: 1 })
```


### Session

Create an instance: `const session = client.Session()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Timezone

Create an instance: `const timezone = client.Timezone()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `iso_3166_1` | `string` |  |
| `zones` | `any[]` |  |

#### Example: List

```ts
const timezones = await client.Timezone().list()
```


### TopRated

Create an instance: `const top_rated = client.TopRated()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `adult` | `boolean` |  |
| `backdrop_path` | `string` |  |
| `first_air_date` | `string` |  |
| `genre_ids` | `any[]` |  |
| `id` | `number` |  |
| `name` | `string` |  |
| `origin_country` | `any[]` |  |
| `original_language` | `string` |  |
| `original_name` | `string` |  |
| `original_title` | `string` |  |
| `overview` | `string` |  |
| `popularity` | `number` |  |
| `poster_path` | `string` |  |
| `release_date` | `string` |  |
| `title` | `string` |  |
| `video` | `boolean` |  |
| `vote_average` | `number` |  |
| `vote_count` | `number` |  |

#### Example: List

```ts
const top_rateds = await client.TopRated().list()
```


### TvAccountState

Create an instance: `const tv_account_state = client.TvAccountState()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `favorite` | `boolean` |  |
| `id` | `number` |  |
| `rated` | `Record<string, any>` |  |
| `watchlist` | `boolean` |  |

#### Example: Load

```ts
const tv_account_state = await client.TvAccountState().load({ id: 1 })
```


### TvAggregateCredit

Create an instance: `const tv_aggregate_credit = client.TvAggregateCredit()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cast` | `any[]` |  |
| `crew` | `any[]` |  |
| `id` | `number` |  |

#### Example: List

```ts
const tv_aggregate_credits = await client.TvAggregateCredit().list({ id: 1 })
```


### TvAlternativeTitle

Create an instance: `const tv_alternative_title = client.TvAlternativeTitle()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `iso_3166_1` | `string` |  |
| `title` | `string` |  |
| `type` | `string` |  |

#### Example: List

```ts
const tv_alternative_titles = await client.TvAlternativeTitle().list({ id: 1 })
```


### TvChange

Create an instance: `const tv_change = client.TvChange()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `items` | `any[]` |  |
| `key` | `string` |  |

#### Example: List

```ts
const tv_changes = await client.TvChange().list({ id: 1 })
```


### TvContentRating

Create an instance: `const tv_content_rating = client.TvContentRating()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `descriptors` | `any[]` |  |
| `id` | `string` |  |
| `iso_3166_1` | `string` |  |
| `rating` | `string` |  |

#### Example: List

```ts
const tv_content_ratings = await client.TvContentRating().list({ id: 1 })
```


### TvCredit

Create an instance: `const tv_credit = client.TvCredit()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cast` | `any[]` |  |
| `crew` | `any[]` |  |
| `id` | `number` |  |

#### Example: List

```ts
const tv_credits = await client.TvCredit().list({ id: 1 })
```


### TvEpisodeGroup

Create an instance: `const tv_episode_group = client.TvEpisodeGroup()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` |  |
| `episode_count` | `number` |  |
| `group_count` | `number` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `network` | `Record<string, any>` |  |
| `type` | `number` |  |

#### Example: List

```ts
const tv_episode_groups = await client.TvEpisodeGroup().list({ id: 1 })
```


### TvExternalId

Create an instance: `const tv_external_id = client.TvExternalId()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `facebook_id` | `string` |  |
| `freebase_id` | `string` |  |
| `freebase_mid` | `string` |  |
| `id` | `number` |  |
| `imdb_id` | `string` |  |
| `instagram_id` | `string` |  |
| `tvdb_id` | `number` |  |
| `tvrage_id` | `number` |  |
| `twitter_id` | `string` |  |
| `wikidata_id` | `string` |  |

#### Example: Load

```ts
const tv_external_id = await client.TvExternalId().load({ id: 1 })
```


### TvImage

Create an instance: `const tv_image = client.TvImage()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `backdrops` | `any[]` |  |
| `id` | `number` |  |
| `logos` | `any[]` |  |
| `posters` | `any[]` |  |

#### Example: List

```ts
const tv_images = await client.TvImage().list({ id: 1 })
```


### TvKeyword

Create an instance: `const tv_keyword = client.TvKeyword()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `number` |  |
| `name` | `string` |  |

#### Example: List

```ts
const tv_keywords = await client.TvKeyword().list({ id: 1 })
```


### TvList

Create an instance: `const tv_list = client.TvList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` |  |
| `favorite_count` | `number` |  |
| `id` | `number` |  |
| `iso_3166_1` | `string` |  |
| `iso_639_1` | `string` |  |
| `item_count` | `number` |  |
| `name` | `string` |  |
| `poster_path` | `any` |  |

#### Example: List

```ts
const tv_lists = await client.TvList().list({ id: 1 })
```


### TvRecommendation

Create an instance: `const tv_recommendation = client.TvRecommendation()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `adult` | `boolean` |  |
| `backdrop_path` | `string` |  |
| `first_air_date` | `string` |  |
| `genre_ids` | `any[]` |  |
| `id` | `number` |  |
| `media_type` | `string` |  |
| `name` | `string` |  |
| `origin_country` | `any[]` |  |
| `original_language` | `string` |  |
| `original_name` | `string` |  |
| `overview` | `string` |  |
| `popularity` | `number` |  |
| `poster_path` | `string` |  |
| `vote_average` | `number` |  |
| `vote_count` | `number` |  |

#### Example: List

```ts
const tv_recommendations = await client.TvRecommendation().list({ id: 1 })
```


### TvReview

Create an instance: `const tv_review = client.TvReview()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author` | `string` |  |
| `author_details` | `Record<string, any>` |  |
| `content` | `string` |  |
| `created_at` | `string` |  |
| `id` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |

#### Example: List

```ts
const tv_reviews = await client.TvReview().list({ id: 1 })
```


### TvScreenedTheatrically

Create an instance: `const tv_screened_theatrically = client.TvScreenedTheatrically()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `episode_number` | `number` |  |
| `id` | `number` |  |
| `season_number` | `number` |  |

#### Example: List

```ts
const tv_screened_theatricallys = await client.TvScreenedTheatrically().list({ id: 1 })
```


### TvSimilar

Create an instance: `const tv_similar = client.TvSimilar()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `adult` | `boolean` |  |
| `backdrop_path` | `string` |  |
| `first_air_date` | `string` |  |
| `genre_ids` | `any[]` |  |
| `id` | `number` |  |
| `name` | `string` |  |
| `origin_country` | `any[]` |  |
| `original_language` | `string` |  |
| `original_name` | `string` |  |
| `overview` | `string` |  |
| `popularity` | `number` |  |
| `poster_path` | `string` |  |
| `vote_average` | `number` |  |
| `vote_count` | `number` |  |

#### Example: List

```ts
const tv_similars = await client.TvSimilar().list({ id: "example" })
```


### TvTranslation

Create an instance: `const tv_translation = client.TvTranslation()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `Record<string, any>` |  |
| `english_name` | `string` |  |
| `id` | `string` |  |
| `iso_3166_1` | `string` |  |
| `iso_639_1` | `string` |  |
| `name` | `string` |  |

#### Example: List

```ts
const tv_translations = await client.TvTranslation().list({ id: 1 })
```


### TvVideo

Create an instance: `const tv_video = client.TvVideo()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `iso_3166_1` | `string` |  |
| `iso_639_1` | `string` |  |
| `key` | `string` |  |
| `name` | `string` |  |
| `official` | `boolean` |  |
| `published_at` | `string` |  |
| `site` | `string` |  |
| `size` | `number` |  |
| `type` | `string` |  |

#### Example: List

```ts
const tv_videos = await client.TvVideo().list({ id: 1 })
```


### Tvn

Create an instance: `const tvn = client.Tvn()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `RAW_BODY` | `string` |  |
| `adult` | `boolean` |  |
| `backdrop_path` | `string` |  |
| `created_by` | `any[]` |  |
| `display_priorities` | `Record<string, any>` |  |
| `display_priority` | `number` |  |
| `episode_run_time` | `any[]` |  |
| `first_air_date` | `string` |  |
| `genre_ids` | `any[]` |  |
| `genres` | `any[]` |  |
| `homepage` | `string` |  |
| `id` | `number` |  |
| `in_production` | `boolean` |  |
| `languages` | `any[]` |  |
| `last_air_date` | `string` |  |
| `last_episode_to_air` | `Record<string, any>` |  |
| `logo_path` | `string` |  |
| `name` | `string` |  |
| `networks` | `any[]` |  |
| `next_episode_to_air` | `any` |  |
| `number_of_episodes` | `number` |  |
| `number_of_seasons` | `number` |  |
| `origin_country` | `any[]` |  |
| `original_language` | `string` |  |
| `original_name` | `string` |  |
| `overview` | `string` |  |
| `page` | `number` |  |
| `popularity` | `number` |  |
| `poster_path` | `string` |  |
| `production_companies` | `any[]` |  |
| `production_countries` | `any[]` |  |
| `provider_id` | `number` |  |
| `provider_name` | `string` |  |
| `rating` | `number` |  |
| `results` | `any[]` |  |
| `seasons` | `any[]` |  |
| `spoken_languages` | `any[]` |  |
| `status` | `string` |  |
| `status_code` | `number` |  |
| `status_message` | `string` |  |
| `tagline` | `string` |  |
| `total_pages` | `number` |  |
| `total_results` | `number` |  |
| `type` | `string` |  |
| `vote_average` | `number` |  |
| `vote_count` | `number` |  |

#### Example: Load

```ts
const tvn = await client.Tvn().load({ series_id: 1 })
```

#### Example: List

```ts
const tvns = await client.Tvn().list({ query: "example" })
```

#### Example: Create

```ts
const tvn = await client.Tvn().create({
  series_id: 1,
  RAW_BODY: 'example_RAW_BODY',
})
```


### Upcoming

Create an instance: `const upcoming = client.Upcoming()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `adult` | `boolean` |  |
| `backdrop_path` | `string` |  |
| `genre_ids` | `any[]` |  |
| `id` | `number` |  |
| `original_language` | `string` |  |
| `original_title` | `string` |  |
| `overview` | `string` |  |
| `popularity` | `number` |  |
| `poster_path` | `string` |  |
| `release_date` | `string` |  |
| `title` | `string` |  |
| `video` | `boolean` |  |
| `vote_average` | `number` |  |
| `vote_count` | `number` |  |

#### Example: List

```ts
const upcomings = await client.Upcoming().list()
```


### ValidateWithLogin

Create an instance: `const validate_with_login = client.ValidateWithLogin()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `RAW_BODY` | `string` |  |
| `expires_at` | `string` |  |
| `request_token` | `string` |  |
| `success` | `boolean` |  |

#### Example: Create

```ts
const validate_with_login = await client.ValidateWithLogin().create({
  RAW_BODY: 'example_RAW_BODY',
})
```


### Watchlist

Create an instance: `const watchlist = client.Watchlist()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `RAW_BODY` | `string` |  |
| `status_code` | `number` |  |
| `status_message` | `string` |  |

#### Example: Create

```ts
const watchlist = await client.Watchlist().create({
  account_id: 1,
  RAW_BODY: 'example_RAW_BODY',
})
```

## Features

This SDK ships 1 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`test`](#test) | Test transport |

### test

Test transport.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
tmdb/
├── src/
│   ├── TmdbSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { TmdbSDK } from '@voxgig-sdk/tmdb-sdk'
```

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const account = client.Account()
await account.load({ id: 1 })

// account.data() now returns the account data from the last `load`
// account.match() returns { id: 1 }
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
