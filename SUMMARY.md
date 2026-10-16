# tmdb-api

The tmdb-api.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 103 entities and 152 HTTP routes. There are 1 SDK targets.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### Account

Results: 200.

SDK operations: `load`.

### AccountList

Results: 200.

SDK operations: `list`.

### AiringToday

Results: 200.

SDK operations: `list`.

### All

Results: 200.

SDK operations: `load`.

### Authentication

Results: 200.

SDK operations: `load`.

### Change

Results: 200.

SDK operations: `list`.

### Collection

Results: 200.

SDK operations: `list`, `load`.

### CollectionImage

Results: 200.

SDK operations: `list`.

### CollectionTranslation

Results: 200.

SDK operations: `list`.

### Company

Results: 200.

SDK operations: `list`, `load`.

### CompanyAlternativeName

Results: 200.

SDK operations: `list`.

### CompanyImage

Results: 200.

SDK operations: `list`.

### Configuration

Results: 200.

SDK operations: `list`.

### Country

Results: 200.

SDK operations: `list`.

### Credit

Results: 200.

SDK operations: `load`.

### Episode

Results: 200.

SDK operations: `create`, `list`, `load`, `remove`.

### EpisodeAccountState

Results: 200.

SDK operations: `load`.

### EpisodeChange

Results: 200.

SDK operations: `list`.

### EpisodeCredit

Results: 200.

SDK operations: `list`.

### EpisodeExternalId

Results: 200.

SDK operations: `load`.

### EpisodeGroup

Results: 200.

SDK operations: `load`.

### EpisodeImage

Results: 200.

SDK operations: `list`.

### EpisodeTranslation

Results: 200.

SDK operations: `list`.

### EpisodeVideo

Results: 200.

SDK operations: `list`.

### Favorite

Results: 200.

SDK operations: `create`.

### Find

Results: 200.

SDK operations: `load`.

### Job

Results: 200.

SDK operations: `list`.

### Keyword

Results: 200.

SDK operations: `list`, `load`.

### KeywordMovie

Results: 200.

SDK operations: `list`.

### Language

Results: 200.

SDK operations: `list`.

### Latest

Results: 200.

SDK operations: `list`.

### List

Results: 200.

SDK operations: `create`, `list`, `load`, `remove`.

### ListItemStatus

Results: 200.

SDK operations: `load`.

### Movie

Results: 200.

SDK operations: `create`, `list`, `load`, `remove`.

### MovieAccountState

Results: 200.

SDK operations: `load`.

### MovieAlternativeTitle

Results: 200.

SDK operations: `list`.

### MovieChange

Results: 200.

SDK operations: `list`.

### MovieCredit

Results: 200.

SDK operations: `list`.

### MovieExternalId

Results: 200.

SDK operations: `load`.

### MovieImage

Results: 200.

SDK operations: `list`.

### MovieKeyword

Results: 200.

SDK operations: `list`.

### MovieList

Results: 200.

SDK operations: `list`.

### MovieRecommendation

Results: 200.

SDK operations: `load`.

### MovieReleaseDate

Results: 200.

SDK operations: `list`.

### MovieReview

Results: 200.

SDK operations: `list`.

### MovieSimilar

Results: 200.

SDK operations: `list`.

### MovieTranslation

Results: 200.

SDK operations: `list`.

### MovieVideo

Results: 200.

SDK operations: `list`.

### Multi

Results: 200.

SDK operations: `list`.

### N4n

Results: 200.

SDK operations: `create`.

### Network

Results: 200.

SDK operations: `load`.

### NetworkAlternativeName

Results: 200.

SDK operations: `list`.

### NetworkImage

Results: 200.

SDK operations: `list`.

### New

Results: 200.

SDK operations: `create`, `load`.

### NowPlaying

Results: 200.

SDK operations: `list`.

### OnTheAir

Results: 200.

SDK operations: `list`.

### Person

Results: 200.

SDK operations: `list`, `load`.

### PersonChange

Results: 200.

SDK operations: `list`.

### PersonCombinedCredit

Results: 200.

SDK operations: `list`.

### PersonExternalId

Results: 200.

SDK operations: `load`.

### PersonImage

Results: 200.

SDK operations: `list`.

### PersonMovieCredit

Results: 200.

SDK operations: `list`.

### PersonTaggedImage

Results: 200.

SDK operations: `list`.

### PersonTranslation

Results: 200.

SDK operations: `list`.

### PersonTvCredit

Results: 200.

SDK operations: `list`.

### Popular

Results: 200.

SDK operations: `list`.

### PrimaryTranslation

Results: 200.

SDK operations: `list`.

### Provider

Results: 200.

SDK operations: `load`.

### Region

Results: 200.

SDK operations: `list`.

### Review

Results: 200.

SDK operations: `load`.

### Season

Results: 200.

SDK operations: `load`.

### SeasonAccountState

Results: 200.

SDK operations: `list`.

### SeasonAggregateCredit

Results: 200.

SDK operations: `list`.

### SeasonChange

Results: 200.

SDK operations: `list`.

### SeasonCredit

Results: 200.

SDK operations: `list`.

### SeasonExternalId

Results: 200.

SDK operations: `load`.

### SeasonImage

Results: 200.

SDK operations: `list`.

### SeasonTranslation

Results: 200.

SDK operations: `list`.

### SeasonVideo

Results: 200.

SDK operations: `list`.

### Session

Results: 200.

SDK operations: `remove`.

### Timezone

Results: 200.

SDK operations: `list`.

### TopRated

Results: 200.

SDK operations: `list`.

### TvAccountState

Results: 200.

SDK operations: `load`.

### TvAggregateCredit

Results: 200.

SDK operations: `list`.

### TvAlternativeTitle

Results: 200.

SDK operations: `list`.

### TvChange

Results: 200.

SDK operations: `list`.

### TvContentRating

Results: 200.

SDK operations: `list`.

### TvCredit

Results: 200.

SDK operations: `list`.

### TvEpisodeGroup

Results: 200.

SDK operations: `list`.

### TvExternalId

Results: 200.

SDK operations: `load`.

### TvImage

Results: 200.

SDK operations: `list`.

### TvKeyword

Results: 200.

SDK operations: `list`.

### TvList

Results: 200.

SDK operations: `list`.

### TvRecommendation

Results: 200.

SDK operations: `list`.

### TvReview

Results: 200.

SDK operations: `list`.

### TvScreenedTheatrically

Results: 200.

SDK operations: `list`.

### TvSimilar

Results: 200.

SDK operations: `list`.

### TvTranslation

Results: 200.

SDK operations: `list`.

### TvVideo

Results: 200.

SDK operations: `list`.

### Tvn

Results: 200.

SDK operations: `create`, `list`, `load`, `remove`.

### Upcoming

Results: 200.

SDK operations: `list`.

### ValidateWithLogin

Results: 200.

SDK operations: `create`.

### Watchlist

Results: 200.

SDK operations: `create`.

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| Account | `load` | `GET /3/account/{account_id}` | Required |
| AccountList | `list` | `GET /3/account/{account_id}/lists` | Required |
| AiringToday | `list` | `GET /3/tv/airing_today` | Required |
| All | `load` | `GET /3/trending/all/{time_window}` | Required |
| Authentication | `load` | `GET /3/authentication` | Required |
| Change | `list` | `GET /3/movie/changes` | Required |
| Change | `list` | `GET /3/person/changes` | Required |
| Change | `list` | `GET /3/tv/changes` | Required |
| Collection | `list` | `GET /3/search/collection` | Required |
| Collection | `load` | `GET /3/collection/{collection_id}` | Required |
| CollectionImage | `list` | `GET /3/collection/{collection_id}/images` | Required |
| CollectionTranslation | `list` | `GET /3/collection/{collection_id}/translations` | Required |
| Company | `list` | `GET /3/search/company` | Required |
| Company | `load` | `GET /3/company/{company_id}` | Required |
| CompanyAlternativeName | `list` | `GET /3/company/{company_id}/alternative_names` | Required |
| CompanyImage | `list` | `GET /3/company/{company_id}/images` | Required |
| Configuration | `list` | `GET /3/configuration` | Required |
| Country | `list` | `GET /3/configuration/countries` | Required |
| Credit | `load` | `GET /3/credit/{credit_id}` | Required |
| Episode | `create` | `POST /3/tv/{series_id}/season/{season_number}/episode/{episode_number}/rating` | Required |
| Episode | `list` | `GET /3/account/{account_id}/rated/tv/episodes` | Required |
| Episode | `list` | `GET /3/guest_session/{guest_session_id}/rated/tv/episodes` | Required |
| Episode | `load` | `GET /3/tv/{series_id}/season/{season_number}/episode/{episode_number}` | Required |
| Episode | `remove` | `DELETE /3/tv/{series_id}/season/{season_number}/episode/{episode_number}/rating` | Required |
| EpisodeAccountState | `load` | `GET /3/tv/{series_id}/season/{season_number}/episode/{episode_number}/account_states` | Required |
| EpisodeChange | `list` | `GET /3/tv/episode/{episode_id}/changes` | Required |
| EpisodeCredit | `list` | `GET /3/tv/{series_id}/season/{season_number}/episode/{episode_number}/credits` | Required |
| EpisodeExternalId | `load` | `GET /3/tv/{series_id}/season/{season_number}/episode/{episode_number}/external_ids` | Required |
| EpisodeGroup | `load` | `GET /3/tv/episode_group/{tv_episode_group_id}` | Required |
| EpisodeImage | `list` | `GET /3/tv/{series_id}/season/{season_number}/episode/{episode_number}/images` | Required |
| EpisodeTranslation | `list` | `GET /3/tv/{series_id}/season/{season_number}/episode/{episode_number}/translations` | Required |
| EpisodeVideo | `list` | `GET /3/tv/{series_id}/season/{season_number}/episode/{episode_number}/videos` | Required |
| Favorite | `create` | `POST /3/account/{account_id}/favorite` | Required |
| Find | `load` | `GET /3/find/{external_id}` | Required |
| Job | `list` | `GET /3/configuration/jobs` | Required |
| Keyword | `list` | `GET /3/search/keyword` | Required |
| Keyword | `load` | `GET /3/keyword/{keyword_id}` | Required |
| KeywordMovie | `list` | `GET /3/keyword/{keyword_id}/movies` | Required |
| Language | `list` | `GET /3/configuration/languages` | Required |
| Latest | `list` | `GET /3/movie/latest` | Required |
| Latest | `list` | `GET /3/person/latest` | Required |
| Latest | `list` | `GET /3/tv/latest` | Required |
| List | `create` | `POST /3/list/{list_id}/clear` | Required |
| List | `create` | `POST /3/list/{list_id}/add_item` | Required |
| List | `create` | `POST /3/list/{list_id}/remove_item` | Required |
| List | `create` | `POST /3/list` | Required |
| List | `list` | `GET /3/genre/movie/list` | Required |
| List | `list` | `GET /3/genre/tv/list` | Required |
| List | `load` | `GET /3/list/{list_id}` | Required |
| List | `load` | `GET /3/certification/movie/list` | Required |
| List | `load` | `GET /3/certification/tv/list` | Required |
| List | `remove` | `DELETE /3/list/{list_id}` | Required |
| ListItemStatus | `load` | `GET /3/list/{list_id}/item_status` | Required |
| Movie | `create` | `POST /3/movie/{movie_id}/rating` | Required |
| Movie | `list` | `GET /3/account/{account_id}/favorite/movies` | Required |
| Movie | `list` | `GET /3/account/{account_id}/rated/movies` | Required |
| Movie | `list` | `GET /3/account/{account_id}/watchlist/movies` | Required |
| Movie | `list` | `GET /3/guest_session/{guest_session_id}/rated/movies` | Required |
| Movie | `list` | `GET /3/search/movie` | Required |
| Movie | `list` | `GET /3/discover/movie` | Required |
| Movie | `list` | `GET /3/watch/providers/movie` | Required |
| Movie | `load` | `GET /3/movie/{movie_id}` | Required |
| Movie | `load` | `GET /3/trending/movie/{time_window}` | Required |
| Movie | `remove` | `DELETE /3/movie/{movie_id}/rating` | Required |
| MovieAccountState | `load` | `GET /3/movie/{movie_id}/account_states` | Required |
| MovieAlternativeTitle | `list` | `GET /3/movie/{movie_id}/alternative_titles` | Required |
| MovieChange | `list` | `GET /3/movie/{movie_id}/changes` | Required |
| MovieCredit | `list` | `GET /3/movie/{movie_id}/credits` | Required |
| MovieExternalId | `load` | `GET /3/movie/{movie_id}/external_ids` | Required |
| MovieImage | `list` | `GET /3/movie/{movie_id}/images` | Required |
| MovieKeyword | `list` | `GET /3/movie/{movie_id}/keywords` | Required |
| MovieList | `list` | `GET /3/movie/{movie_id}/lists` | Required |
| MovieRecommendation | `load` | `GET /3/movie/{movie_id}/recommendations` | Required |
| MovieReleaseDate | `list` | `GET /3/movie/{movie_id}/release_dates` | Required |
| MovieReview | `list` | `GET /3/movie/{movie_id}/reviews` | Required |
| MovieSimilar | `list` | `GET /3/movie/{movie_id}/similar` | Required |
| MovieTranslation | `list` | `GET /3/movie/{movie_id}/translations` | Required |
| MovieVideo | `list` | `GET /3/movie/{movie_id}/videos` | Required |
| Multi | `list` | `GET /3/search/multi` | Required |
| N4n | `create` | `POST /3/authentication/session/convert/4` | Required |
| Network | `load` | `GET /3/network/{network_id}` | Required |
| NetworkAlternativeName | `list` | `GET /3/network/{network_id}/alternative_names` | Required |
| NetworkImage | `list` | `GET /3/network/{network_id}/images` | Required |
| New | `create` | `POST /3/authentication/session/new` | Required |
| New | `load` | `GET /3/authentication/guest_session/new` | Required |
| New | `load` | `GET /3/authentication/token/new` | Required |
| NowPlaying | `list` | `GET /3/movie/now_playing` | Required |
| OnTheAir | `list` | `GET /3/tv/on_the_air` | Required |
| Person | `list` | `GET /3/search/person` | Required |
| Person | `load` | `GET /3/person/{person_id}` | Required |
| Person | `load` | `GET /3/trending/person/{time_window}` | Required |
| PersonChange | `list` | `GET /3/person/{person_id}/changes` | Required |
| PersonCombinedCredit | `list` | `GET /3/person/{person_id}/combined_credits` | Required |
| PersonExternalId | `load` | `GET /3/person/{person_id}/external_ids` | Required |
| PersonImage | `list` | `GET /3/person/{person_id}/images` | Required |
| PersonMovieCredit | `list` | `GET /3/person/{person_id}/movie_credits` | Required |
| PersonTaggedImage | `list` | `GET /3/person/{person_id}/tagged_images` | Required |
| PersonTranslation | `list` | `GET /3/person/{person_id}/translations` | Required |
| PersonTvCredit | `list` | `GET /3/person/{person_id}/tv_credits` | Required |
| Popular | `list` | `GET /3/movie/popular` | Required |
| Popular | `list` | `GET /3/person/popular` | Required |
| Popular | `list` | `GET /3/tv/popular` | Required |
| PrimaryTranslation | `list` | `GET /3/configuration/primary_translations` | Required |
| Provider | `load` | `GET /3/tv/{series_id}/season/{season_number}/watch/providers` | Required |
| Provider | `load` | `GET /3/movie/{movie_id}/watch/providers` | Required |
| Provider | `load` | `GET /3/tv/{series_id}/watch/providers` | Required |
| Region | `list` | `GET /3/watch/providers/regions` | Required |
| Review | `load` | `GET /3/review/{review_id}` | Required |
| Season | `load` | `GET /3/tv/{series_id}/season/{season_number}` | Required |
| SeasonAccountState | `list` | `GET /3/tv/{series_id}/season/{season_number}/account_states` | Required |
| SeasonAggregateCredit | `list` | `GET /3/tv/{series_id}/season/{season_number}/aggregate_credits` | Required |
| SeasonChange | `list` | `GET /3/tv/season/{season_id}/changes` | Required |
| SeasonCredit | `list` | `GET /3/tv/{series_id}/season/{season_number}/credits` | Required |
| SeasonExternalId | `load` | `GET /3/tv/{series_id}/season/{season_number}/external_ids` | Required |
| SeasonImage | `list` | `GET /3/tv/{series_id}/season/{season_number}/images` | Required |
| SeasonTranslation | `list` | `GET /3/tv/{series_id}/season/{season_number}/translations` | Required |
| SeasonVideo | `list` | `GET /3/tv/{series_id}/season/{season_number}/videos` | Required |
| Session | `remove` | `DELETE /3/authentication/session` | Required |
| Timezone | `list` | `GET /3/configuration/timezones` | Required |
| TopRated | `list` | `GET /3/movie/top_rated` | Required |
| TopRated | `list` | `GET /3/tv/top_rated` | Required |
| TvAccountState | `load` | `GET /3/tv/{series_id}/account_states` | Required |
| TvAggregateCredit | `list` | `GET /3/tv/{series_id}/aggregate_credits` | Required |
| TvAlternativeTitle | `list` | `GET /3/tv/{series_id}/alternative_titles` | Required |
| TvChange | `list` | `GET /3/tv/{series_id}/changes` | Required |
| TvContentRating | `list` | `GET /3/tv/{series_id}/content_ratings` | Required |
| TvCredit | `list` | `GET /3/tv/{series_id}/credits` | Required |
| TvEpisodeGroup | `list` | `GET /3/tv/{series_id}/episode_groups` | Required |
| TvExternalId | `load` | `GET /3/tv/{series_id}/external_ids` | Required |
| TvImage | `list` | `GET /3/tv/{series_id}/images` | Required |
| TvKeyword | `list` | `GET /3/tv/{series_id}/keywords` | Required |
| TvList | `list` | `GET /3/tv/{series_id}/lists` | Required |
| TvRecommendation | `list` | `GET /3/tv/{series_id}/recommendations` | Required |
| TvReview | `list` | `GET /3/tv/{series_id}/reviews` | Required |
| TvScreenedTheatrically | `list` | `GET /3/tv/{series_id}/screened_theatrically` | Required |
| TvSimilar | `list` | `GET /3/tv/{series_id}/similar` | Required |
| TvTranslation | `list` | `GET /3/tv/{series_id}/translations` | Required |
| TvVideo | `list` | `GET /3/tv/{series_id}/videos` | Required |
| Tvn | `create` | `POST /3/tv/{series_id}/rating` | Required |
| Tvn | `list` | `GET /3/account/{account_id}/favorite/tv` | Required |
| Tvn | `list` | `GET /3/account/{account_id}/rated/tv` | Required |
| Tvn | `list` | `GET /3/account/{account_id}/watchlist/tv` | Required |
| Tvn | `list` | `GET /3/guest_session/{guest_session_id}/rated/tv` | Required |
| Tvn | `list` | `GET /3/search/tv` | Required |
| Tvn | `list` | `GET /3/discover/tv` | Required |
| Tvn | `list` | `GET /3/watch/providers/tv` | Required |
| Tvn | `load` | `GET /3/tv/{series_id}` | Required |
| Tvn | `load` | `GET /3/trending/tv/{time_window}` | Required |
| Tvn | `remove` | `DELETE /3/tv/{series_id}/rating` | Required |
| Upcoming | `list` | `GET /3/movie/upcoming` | Required |
| ValidateWithLogin | `create` | `POST /3/authentication/token/validate_with_login` | Required |
| Watchlist | `create` | `POST /3/account/{account_id}/watchlist` | Required |

## Connect to the API

- API server: `https://api.themoviedb.org`

The default credential is sent in the `Authorization` header.

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| TypeScript | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- `test`: In-memory mock transport for testing without a live server

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the first-call guide for the setup sequence.
- Read the authentication guide before using protected routes.
- Use the API reference for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

