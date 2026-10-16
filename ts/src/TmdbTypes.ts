// Typed models for the Tmdb SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Account {
  avatar?: Record<string, any>
  id?: number
  include_adult?: boolean
  iso_3166_1?: string
  iso_639_1?: string
  name?: string
  username?: string
}

export interface AccountLoadMatch {
  id: number
  session_id?: string
}

export interface AccountList {
  description?: string
  favorite_count?: number
  id?: number
  iso_639_1?: string
  item_count?: number
  list_type?: string
  name?: string
  poster_path?: any
}

export interface AccountListListMatch {
  id: number
  page?: number
  session_id?: string
}

export interface AiringToday {
  backdrop_path?: string
  first_air_date?: string
  genre_ids?: any[]
  id?: number
  name?: string
  origin_country?: any[]
  original_language?: string
  original_name?: string
  overview?: string
  popularity?: number
  poster_path?: string
  vote_average?: number
  vote_count?: number
}

export interface AiringTodayListMatch {
  language?: string
  page?: number
  timezone?: string
}

export interface All {
  id?: string
  page?: number
  results?: any[]
  total_pages?: number
  total_results?: number
}

export interface AllLoadMatch {
  id: string
  language?: string
}

export interface Authentication {
  status_code?: number
  status_message?: string
  success?: boolean
}

export interface AuthenticationLoadMatch {
  status_code?: number
  status_message?: string
  success?: boolean
}

export interface Change {
  adult?: boolean
  id?: number
}

export interface ChangeListMatch {
  end_date?: string
  page?: number
  start_date?: string
}

export interface Collection {
  adult?: boolean
  backdrop_path?: string
  id?: number
  name?: string
  original_language?: string
  original_name?: string
  overview?: string
  parts?: any[]
  poster_path?: string
}

export interface CollectionLoadMatch {
  id: number
  language?: string
}

export interface CollectionListMatch {
  include_adult?: boolean
  language?: string
  page?: number
  query: string
  region?: string
}

export interface CollectionImage {
  backdrops?: any[]
  id?: number
  posters?: any[]
}

export interface CollectionImageListMatch {
  id: number
  include_image_language?: string
  language?: string
}

export interface CollectionTranslation {
  data?: Record<string, any>
  english_name?: string
  id?: string
  iso_3166_1?: string
  iso_639_1?: string
  name?: string
}

export interface CollectionTranslationListMatch {
  id: number
}

export interface Company {
  description?: string
  headquarters?: string
  homepage?: string
  id?: number
  logo_path?: string
  name?: string
  origin_country?: string
  parent_company?: any
}

export interface CompanyLoadMatch {
  id: number
}

export interface CompanyListMatch {
  page?: number
  query: string
}

export interface CompanyAlternativeName {
  id?: string
  name?: string
  type?: string
}

export interface CompanyAlternativeNameListMatch {
  id: number
}

export interface CompanyImage {
  aspect_ratio?: number
  file_path?: string
  file_type?: string
  height?: number
  id?: string
  vote_average?: number
  vote_count?: number
  width?: number
}

export interface CompanyImageListMatch {
  id: number
}

export interface Configuration {
  change_keys?: any[]
  images?: Record<string, any>
}

export interface ConfigurationListMatch {
  change_keys?: any[]
  images?: Record<string, any>
}

export interface Country {
  english_name?: string
  iso_3166_1?: string
  native_name?: string
}

export interface CountryListMatch {
  language?: string
}

export interface Credit {
  credit_type?: string
  department?: string
  id?: string
  job?: string
  media?: Record<string, any>
  media_type?: string
  person?: Record<string, any>
}

export interface CreditLoadMatch {
  id: string
  language?: string
}

export interface Episode {
  air_date?: string
  crew?: any[]
  episode_number?: number
  guest_stars?: any[]
  id?: number
  name?: string
  overview?: string
  production_code?: string
  rating?: number
  runtime?: number
  season_number?: number
  show_id?: number
  still_path?: string
  vote_average?: number
  vote_count?: number
}

export interface EpisodeLoadMatch {
  id: number
  season_id: number
  tv_id: number
  append_to_response?: string
  language?: string
}

export interface EpisodeListMatch {
  account_id: number
  language?: string
  page?: number
  session_id?: string
  sort_by?: string
}

export interface EpisodeCreateData {
  id: number
  season_id: number
  tv_id: number
  guest_session_id?: string
  session_id?: string
  air_date?: string
  crew?: any[]
  episode_number?: number
  guest_stars?: any[]
  name?: string
  overview?: string
  production_code?: string
  rating?: number
  runtime?: number
  season_number?: number
  show_id?: number
  still_path?: string
  vote_average?: number
  vote_count?: number

  // Selects a custom action instead of the plain create:
  //   'rating'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface EpisodeRemoveMatch {
  id: number
  season_id: number
  tv_id: number
  guest_session_id?: string
  session_id?: string

  // Selects a custom action instead of the plain remove:
  //   'rating'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface EpisodeAccountState {
  favorite?: boolean
  id?: number
  rated?: Record<string, any>
  watchlist?: boolean
}

export interface EpisodeAccountStateLoadMatch {
  episode_number: number
  season_id: number
  tv_id: number
  guest_session_id?: string
  session_id?: string
}

export interface EpisodeChange {
  id?: string
  items?: any[]
  key?: string
}

export interface EpisodeChangeListMatch {
  id: number
}

export interface EpisodeCredit {
  cast?: any[]
  crew?: any[]
  guest_stars?: any[]
  id?: number
}

export interface EpisodeCreditListMatch {
  episode_number: number
  season_id: number
  tv_id: number
  language?: string
}

export interface EpisodeExternalId {
  freebase_id?: string
  freebase_mid?: string
  id?: number
  imdb_id?: string
  tvdb_id?: number
  tvrage_id?: number
  wikidata_id?: string
}

export interface EpisodeExternalIdLoadMatch {
  episode_number: string
  season_id: number
  tv_id: number
}

export interface EpisodeGroup {
  description?: string
  episode_count?: number
  group_count?: number
  groups?: any[]
  id?: string
  name?: string
  network?: Record<string, any>
  type?: number
}

export interface EpisodeGroupLoadMatch {
  id: string
}

export interface EpisodeImage {
  aspect_ratio?: number
  file_path?: string
  height?: number
  iso_639_1?: any
  vote_average?: number
  vote_count?: number
  width?: number
}

export interface EpisodeImageListMatch {
  episode_number: number
  season_id: number
  tv_id: number
  include_image_language?: string
  language?: string
}

export interface EpisodeTranslation {
  data?: Record<string, any>
  english_name?: string
  iso_3166_1?: string
  iso_639_1?: string
  name?: string
}

export interface EpisodeTranslationListMatch {
  episode_number: number
  season_id: number
  tv_id: number
}

export interface EpisodeVideo {
  id?: string
  iso_3166_1?: string
  iso_639_1?: string
  key?: string
  name?: string
  official?: boolean
  published_at?: string
  site?: string
  size?: number
  type?: string
}

export interface EpisodeVideoListMatch {
  episode_number: number
  season_id: number
  tv_id: number
  include_video_language?: string
  language?: string
}

export interface Favorite {
  RAW_BODY: string
  status_code?: number
  status_message?: string
}

export interface FavoriteCreateData {
  account_id: number
  session_id?: string
  RAW_BODY: string
  status_code?: number
  status_message?: string
}

export interface Find {
  id?: string
  movie_results?: any[]
  person_results?: any[]
  tv_episode_results?: any[]
  tv_results?: any[]
  tv_season_results?: any[]
}

export interface FindLoadMatch {
  id: string
  external_source: string
  language?: string
}

export interface Job {
  department?: string
  jobs?: any[]
}

export interface JobListMatch {
  department?: string
  jobs?: any[]
}

export interface Keyword {
  id?: number
  name?: string
}

export interface KeywordLoadMatch {
  id: number
}

export interface KeywordListMatch {
  page?: number
  query: string
}

export interface KeywordMovie {
  adult?: boolean
  backdrop_path?: string
  genre_ids?: any[]
  id?: number
  original_language?: string
  original_title?: string
  overview?: string
  popularity?: number
  poster_path?: string
  release_date?: string
  title?: string
  video?: boolean
  vote_average?: number
  vote_count?: number
}

export interface KeywordMovieListMatch {
  id: string
  include_adult?: boolean
  language?: string
  page?: number
}

export interface Language {
  english_name?: string
  iso_639_1?: string
  name?: string
}

export interface LanguageListMatch {
  english_name?: string
  iso_639_1?: string
  name?: string
}

export interface Latest {
  adult?: boolean
  air_date?: any
  also_known_as?: any[]
  backdrop_path?: any
  belongs_to_collection?: any
  biography?: string
  birthday?: any
  budget?: number
  deathday?: any
  episode_count?: number
  gender?: number
  genres?: any[]
  homepage?: string
  id?: number
  imdb_id?: string
  known_for_department?: any
  name?: string
  original_language?: string
  original_title?: string
  overview?: string
  place_of_birth?: any
  popularity?: number
  poster_path?: any
  production_companies?: any[]
  production_countries?: any[]
  profile_path?: any
  release_date?: string
  revenue?: number
  runtime?: number
  season_number?: number
  spoken_languages?: any[]
  status?: string
  tagline?: string
  title?: string
  video?: boolean
  vote_average?: number
  vote_count?: number
}

export interface LatestListMatch {
  adult?: boolean
  air_date?: any
  also_known_as?: any[]
  backdrop_path?: any
  belongs_to_collection?: any
  biography?: string
  birthday?: any
  budget?: number
  deathday?: any
  episode_count?: number
  gender?: number
  genres?: any[]
  homepage?: string
  id?: number
  imdb_id?: string
  known_for_department?: any
  name?: string
  original_language?: string
  original_title?: string
  overview?: string
  place_of_birth?: any
  popularity?: number
  poster_path?: any
  production_companies?: any[]
  production_countries?: any[]
  profile_path?: any
  release_date?: string
  revenue?: number
  runtime?: number
  season_number?: number
  spoken_languages?: any[]
  status?: string
  tagline?: string
  title?: string
  video?: boolean
  vote_average?: number
  vote_count?: number
}

export interface List {
  AR?: any[]
  AU?: any[]
  BG?: any[]
  BR?: any[]
  CA?: any[]
  CAQC?: any[]
  CH?: any[]
  DE?: any[]
  DK?: any[]
  ES?: any[]
  FI?: any[]
  FR?: any[]
  GB?: any[]
  GR?: any[]
  HK?: any[]
  HU?: any[]
  ID?: any[]
  IE?: any[]
  IL?: any[]
  IN?: any[]
  IT?: any[]
  JP?: any[]
  KR?: any[]
  LT?: any[]
  LU?: any[]
  LV?: any[]
  MA?: any[]
  MO?: any[]
  MX?: any[]
  MY?: any[]
  NL?: any[]
  NO?: any[]
  NZ?: any[]
  PH?: any[]
  PL?: any[]
  PR?: any[]
  PT?: any[]
  RAW_BODY: string
  RU?: any[]
  SE?: any[]
  SG?: any[]
  SK?: any[]
  TH?: any[]
  TR?: any[]
  TW?: any[]
  US?: any[]
  VI?: any[]
  ZA?: any[]
  created_by?: string
  description?: string
  favorite_count?: number
  id?: string
  iso_639_1?: string
  item_count?: number
  items?: any[]
  list_id?: number
  name?: string
  poster_path?: string
  status_code?: number
  status_message?: string
  success?: boolean
}

export interface ListLoadMatch {
  id: number
  language?: string
  page?: number
}

export interface ListListMatch {
  language?: string
}

export interface ListCreateData {
  session_id: string
  AR?: any[]
  AU?: any[]
  BG?: any[]
  BR?: any[]
  CA?: any[]
  CAQC?: any[]
  CH?: any[]
  DE?: any[]
  DK?: any[]
  ES?: any[]
  FI?: any[]
  FR?: any[]
  GB?: any[]
  GR?: any[]
  HK?: any[]
  HU?: any[]
  ID?: any[]
  IE?: any[]
  IL?: any[]
  IN?: any[]
  IT?: any[]
  JP?: any[]
  KR?: any[]
  LT?: any[]
  LU?: any[]
  LV?: any[]
  MA?: any[]
  MO?: any[]
  MX?: any[]
  MY?: any[]
  NL?: any[]
  NO?: any[]
  NZ?: any[]
  PH?: any[]
  PL?: any[]
  PR?: any[]
  PT?: any[]
  RAW_BODY: string
  RU?: any[]
  SE?: any[]
  SG?: any[]
  SK?: any[]
  TH?: any[]
  TR?: any[]
  TW?: any[]
  US?: any[]
  VI?: any[]
  ZA?: any[]
  created_by?: string
  description?: string
  favorite_count?: number
  id?: string
  iso_639_1?: string
  item_count?: number
  items?: any[]
  list_id?: number
  name?: string
  poster_path?: string
  status_code?: number
  status_message?: string
  success?: boolean

  // Selects a custom action instead of the plain create:
  //   'add_item' | 'clear' | 'remove_item'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ListRemoveMatch {
  id: number
  session_id: string
}

export interface ListItemStatus {
  id?: number
  item_present?: boolean
}

export interface ListItemStatusLoadMatch {
  id: number
  language?: string
  movie_id?: number
}

export interface Movie {
  adult?: boolean
  backdrop_path?: string
  belongs_to_collection?: Record<string, any>
  budget?: number
  display_priorities?: Record<string, any>
  display_priority?: number
  genre_ids?: any[]
  genres?: any[]
  homepage?: string
  id?: number
  imdb_id?: string
  logo_path?: string
  origin_country?: any[]
  original_language?: string
  original_title?: string
  overview?: string
  page?: number
  popularity?: number
  poster_path?: string
  production_companies?: any[]
  production_countries?: any[]
  provider_id?: number
  provider_name?: string
  rating?: number
  release_date?: string
  results?: any[]
  revenue?: number
  runtime?: number
  spoken_languages?: any[]
  status?: string
  tagline?: string
  title?: string
  total_pages?: number
  total_results?: number
  video?: boolean
  vote_average?: number
  vote_count?: number
}

export interface MovieLoadMatch {
  id: number
  append_to_response?: string
  language?: string
}

export interface MovieListMatch {
  include_adult?: boolean
  language?: string
  page?: number
  primary_release_year?: string
  query: string
  region?: string
  year?: string
}

export interface MovieCreateData {
  id: number
  guest_session_id?: string
  session_id?: string
  adult?: boolean
  backdrop_path?: string
  belongs_to_collection?: Record<string, any>
  budget?: number
  display_priorities?: Record<string, any>
  display_priority?: number
  genre_ids?: any[]
  genres?: any[]
  homepage?: string
  imdb_id?: string
  logo_path?: string
  origin_country?: any[]
  original_language?: string
  original_title?: string
  overview?: string
  page?: number
  popularity?: number
  poster_path?: string
  production_companies?: any[]
  production_countries?: any[]
  provider_id?: number
  provider_name?: string
  rating?: number
  release_date?: string
  results?: any[]
  revenue?: number
  runtime?: number
  spoken_languages?: any[]
  status?: string
  tagline?: string
  title?: string
  total_pages?: number
  total_results?: number
  video?: boolean
  vote_average?: number
  vote_count?: number

  // Selects a custom action instead of the plain create:
  //   'rating'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface MovieRemoveMatch {
  id: number
  guest_session_id?: string
  session_id?: string

  // Selects a custom action instead of the plain remove:
  //   'rating'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface MovieAccountState {
  favorite?: boolean
  id?: number
  rated?: Record<string, any>
  watchlist?: boolean
}

export interface MovieAccountStateLoadMatch {
  id: number
  guest_session_id?: string
  session_id?: string
}

export interface MovieAlternativeTitle {
  id?: string
  iso_3166_1?: string
  title?: string
  type?: string
}

export interface MovieAlternativeTitleListMatch {
  id: number
  country?: string
}

export interface MovieChange {
  id?: string
  items?: any[]
  key?: string
}

export interface MovieChangeListMatch {
  id: number
  end_date?: string
  page?: number
  start_date?: string
}

export interface MovieCredit {
  cast?: any[]
  crew?: any[]
  id?: number
}

export interface MovieCreditListMatch {
  id: number
  language?: string
}

export interface MovieExternalId {
  facebook_id?: string
  id?: number
  imdb_id?: string
  instagram_id?: string
  twitter_id?: string
  wikidata_id?: string
}

export interface MovieExternalIdLoadMatch {
  id: number
}

export interface MovieImage {
  backdrops?: any[]
  id?: number
  logos?: any[]
  posters?: any[]
}

export interface MovieImageListMatch {
  id: number
  include_image_language?: string
  language?: string
}

export interface MovieKeyword {
  id?: number
  name?: string
}

export interface MovieKeywordListMatch {
  id: string
}

export interface MovieList {
  description?: string
  favorite_count?: number
  id?: number
  iso_639_1?: string
  item_count?: number
  list_type?: string
  name?: string
  poster_path?: any
}

export interface MovieListListMatch {
  id: number
  language?: string
  page?: number
}

export interface MovieRecommendation {
  id?: string
}

export interface MovieRecommendationLoadMatch {
  id: number
  language?: string
  page?: number
}

export interface MovieReleaseDate {
  id?: string
  iso_3166_1?: string
  release_dates?: any[]
}

export interface MovieReleaseDateListMatch {
  id: number
}

export interface MovieReview {
  author?: string
  author_details?: Record<string, any>
  content?: string
  created_at?: string
  id?: string
  updated_at?: string
  url?: string
}

export interface MovieReviewListMatch {
  id: number
  language?: string
  page?: number
}

export interface MovieSimilar {
  adult?: boolean
  backdrop_path?: string
  genre_ids?: any[]
  id?: number
  original_language?: string
  original_title?: string
  overview?: string
  popularity?: number
  poster_path?: string
  release_date?: string
  title?: string
  video?: boolean
  vote_average?: number
  vote_count?: number
}

export interface MovieSimilarListMatch {
  id: number
  language?: string
  page?: number
}

export interface MovieTranslation {
  data?: Record<string, any>
  english_name?: string
  id?: string
  iso_3166_1?: string
  iso_639_1?: string
  name?: string
}

export interface MovieTranslationListMatch {
  id: number
}

export interface MovieVideo {
  id?: string
  iso_3166_1?: string
  iso_639_1?: string
  key?: string
  name?: string
  official?: boolean
  published_at?: string
  site?: string
  size?: number
  type?: string
}

export interface MovieVideoListMatch {
  id: number
  language?: string
}

export interface Multi {
  adult?: boolean
  backdrop_path?: string
  genre_ids?: any[]
  id?: number
  media_type?: string
  name?: string
  original_language?: string
  original_name?: string
  original_title?: string
  overview?: string
  popularity?: number
  poster_path?: string
  release_date?: string
  title?: string
  video?: boolean
  vote_average?: number
  vote_count?: number
}

export interface MultiListMatch {
  include_adult?: boolean
  language?: string
  page?: number
  query: string
}

export interface N4n {
  RAW_BODY: string
  session_id?: string
  success?: boolean
}

export interface N4nCreateData {
  RAW_BODY: string
  session_id?: string
  success?: boolean
}

export interface Network {
  headquarters?: string
  homepage?: string
  id?: number
  logo_path?: string
  name?: string
  origin_country?: string
}

export interface NetworkLoadMatch {
  id: number
}

export interface NetworkAlternativeName {
  id?: string
  name?: string
  type?: string
}

export interface NetworkAlternativeNameListMatch {
  id: number
}

export interface NetworkImage {
  aspect_ratio?: number
  file_path?: string
  file_type?: string
  height?: number
  id?: string
  vote_average?: number
  vote_count?: number
  width?: number
}

export interface NetworkImageListMatch {
  id: number
}

export interface New {
  RAW_BODY: string
  expires_at?: string
  guest_session_id?: string
  request_token?: string
  session_id?: string
  success?: boolean
}

export interface NewLoadMatch {
  RAW_BODY?: string
  expires_at?: string
  guest_session_id?: string
  request_token?: string
  session_id?: string
  success?: boolean
}

export interface NewCreateData {
  RAW_BODY: string
  expires_at?: string
  guest_session_id?: string
  request_token?: string
  session_id?: string
  success?: boolean
}

export interface NowPlaying {
  adult?: boolean
  backdrop_path?: string
  genre_ids?: any[]
  id?: number
  original_language?: string
  original_title?: string
  overview?: string
  popularity?: number
  poster_path?: string
  release_date?: string
  title?: string
  video?: boolean
  vote_average?: number
  vote_count?: number
}

export interface NowPlayingListMatch {
  language?: string
  page?: number
  region?: string
}

export interface OnTheAir {
  backdrop_path?: string
  first_air_date?: string
  genre_ids?: any[]
  id?: number
  name?: string
  origin_country?: any[]
  original_language?: string
  original_name?: string
  overview?: string
  popularity?: number
  poster_path?: string
  vote_average?: number
  vote_count?: number
}

export interface OnTheAirListMatch {
  language?: string
  page?: number
  timezone?: string
}

export interface Person {
  adult?: boolean
  also_known_as?: any[]
  biography?: string
  birthday?: string
  deathday?: any
  gender?: number
  homepage?: any
  id?: number
  imdb_id?: string
  known_for?: any[]
  known_for_department?: string
  name?: string
  original_name?: string
  page?: number
  place_of_birth?: string
  popularity?: number
  profile_path?: string
  results?: any[]
  total_pages?: number
  total_results?: number
}

export interface PersonLoadMatch {
  id: number
  append_to_response?: string
  language?: string
}

export interface PersonListMatch {
  include_adult?: boolean
  language?: string
  page?: number
  query: string
}

export interface PersonChange {
  id?: string
  items?: any[]
  key?: string
}

export interface PersonChangeListMatch {
  id: number
  end_date?: string
  page?: number
  start_date?: string
}

export interface PersonCombinedCredit {
  cast?: any[]
  crew?: any[]
  id?: number
}

export interface PersonCombinedCreditListMatch {
  id: string
  language?: string
}

export interface PersonExternalId {
  facebook_id?: string
  freebase_id?: string
  freebase_mid?: string
  id?: number
  imdb_id?: string
  instagram_id?: string
  tiktok_id?: string
  tvrage_id?: number
  twitter_id?: string
  wikidata_id?: string
  youtube_id?: string
}

export interface PersonExternalIdLoadMatch {
  id: number
}

export interface PersonImage {
  aspect_ratio?: number
  file_path?: string
  height?: number
  id?: string
  iso_639_1?: any
  vote_average?: number
  vote_count?: number
  width?: number
}

export interface PersonImageListMatch {
  id: number
}

export interface PersonMovieCredit {
  cast?: any[]
  crew?: any[]
  id?: number
}

export interface PersonMovieCreditListMatch {
  id: number
  language?: string
}

export interface PersonTaggedImage {
  aspect_ratio?: number
  file_path?: string
  height?: number
  id?: string
  image_type?: string
  iso_639_1?: string
  media?: Record<string, any>
  media_type?: string
  vote_average?: number
  vote_count?: number
  width?: number
}

export interface PersonTaggedImageListMatch {
  id: number
  page?: number
}

export interface PersonTranslation {
  data?: Record<string, any>
  english_name?: string
  id?: string
  iso_3166_1?: string
  iso_639_1?: string
  name?: string
}

export interface PersonTranslationListMatch {
  id: number
}

export interface PersonTvCredit {
  cast?: any[]
  crew?: any[]
  id?: number
}

export interface PersonTvCreditListMatch {
  id: number
  language?: string
}

export interface Popular {
  adult?: boolean
  backdrop_path?: string
  first_air_date?: string
  gender?: number
  genre_ids?: any[]
  id?: number
  known_for?: any[]
  known_for_department?: string
  name?: string
  origin_country?: any[]
  original_language?: string
  original_name?: string
  original_title?: string
  overview?: string
  popularity?: number
  poster_path?: string
  profile_path?: string
  release_date?: string
  title?: string
  video?: boolean
  vote_average?: number
  vote_count?: number
}

export interface PopularListMatch {
  language?: string
  page?: number
  region?: string
}

export interface PrimaryTranslation {
}

export interface PrimaryTranslationListMatch {
}

export interface Provider {
  id?: number
  results?: Record<string, any>
}

export interface ProviderLoadMatch {
  movie_id: number
}

export interface Region {
  english_name?: string
  iso_3166_1?: string
  native_name?: string
}

export interface RegionListMatch {
  language?: string
}

export interface Review {
  author?: string
  author_details?: Record<string, any>
  content?: string
  created_at?: string
  id?: string
  iso_639_1?: string
  media_id?: number
  media_title?: string
  media_type?: string
  updated_at?: string
  url?: string
}

export interface ReviewLoadMatch {
  id: string
}

export interface Season {
  air_date?: string
  episodes?: any[]
  id?: string
  name?: string
  networks?: any[]
  overview?: string
  poster_path?: string
  season_number?: number
  vote_average?: number
}

export interface SeasonLoadMatch {
  id: number
  tv_id: number
  append_to_response?: string
  language?: string
}

export interface SeasonAccountState {
  episode_number?: number
  id?: number
  rated?: Record<string, any>
}

export interface SeasonAccountStateListMatch {
  season_number: number
  tv_id: number
  guest_session_id?: string
  session_id?: string
}

export interface SeasonAggregateCredit {
  cast?: any[]
  crew?: any[]
  id?: number
}

export interface SeasonAggregateCreditListMatch {
  season_number: number
  tv_id: number
  language?: string
}

export interface SeasonChange {
  id?: string
  items?: any[]
  key?: string
}

export interface SeasonChangeListMatch {
  id: number
  end_date?: string
  page?: number
  start_date?: string
}

export interface SeasonCredit {
  cast?: any[]
  crew?: any[]
  id?: number
}

export interface SeasonCreditListMatch {
  season_number: number
  tv_id: number
  language?: string
}

export interface SeasonExternalId {
  freebase_id?: string
  freebase_mid?: string
  id?: number
  tvdb_id?: number
  tvrage_id?: string
  wikidata_id?: string
}

export interface SeasonExternalIdLoadMatch {
  season_number: number
  tv_id: number
}

export interface SeasonImage {
  aspect_ratio?: number
  file_path?: string
  height?: number
  iso_639_1?: string
  vote_average?: number
  vote_count?: number
  width?: number
}

export interface SeasonImageListMatch {
  season_number: number
  tv_id: number
  include_image_language?: string
  language?: string
}

export interface SeasonTranslation {
  data?: Record<string, any>
  english_name?: string
  iso_3166_1?: string
  iso_639_1?: string
  name?: string
}

export interface SeasonTranslationListMatch {
  season_number: number
  tv_id: number
}

export interface SeasonVideo {
  id?: string
  iso_3166_1?: string
  iso_639_1?: string
  key?: string
  name?: string
  official?: boolean
  published_at?: string
  site?: string
  size?: number
  type?: string
}

export interface SeasonVideoListMatch {
  season_number: number
  tv_id: number
  include_video_language?: string
  language?: string
}

export interface Session {
}

export interface SessionRemoveMatch {
}

export interface Timezone {
  iso_3166_1?: string
  zones?: any[]
}

export interface TimezoneListMatch {
  iso_3166_1?: string
  zones?: any[]
}

export interface TopRated {
  adult?: boolean
  backdrop_path?: string
  first_air_date?: string
  genre_ids?: any[]
  id?: number
  name?: string
  origin_country?: any[]
  original_language?: string
  original_name?: string
  original_title?: string
  overview?: string
  popularity?: number
  poster_path?: string
  release_date?: string
  title?: string
  video?: boolean
  vote_average?: number
  vote_count?: number
}

export interface TopRatedListMatch {
  language?: string
  page?: number
  region?: string
}

export interface TvAccountState {
  favorite?: boolean
  id?: number
  rated?: Record<string, any>
  watchlist?: boolean
}

export interface TvAccountStateLoadMatch {
  id: number
  guest_session_id?: string
  session_id?: string
}

export interface TvAggregateCredit {
  cast?: any[]
  crew?: any[]
  id?: number
}

export interface TvAggregateCreditListMatch {
  id: number
  language?: string
}

export interface TvAlternativeTitle {
  id?: string
  iso_3166_1?: string
  title?: string
  type?: string
}

export interface TvAlternativeTitleListMatch {
  id: number
}

export interface TvChange {
  id?: string
  items?: any[]
  key?: string
}

export interface TvChangeListMatch {
  id: number
  end_date?: string
  page?: number
  start_date?: string
}

export interface TvContentRating {
  descriptors?: any[]
  id?: string
  iso_3166_1?: string
  rating?: string
}

export interface TvContentRatingListMatch {
  id: number
}

export interface TvCredit {
  cast?: any[]
  crew?: any[]
  id?: number
}

export interface TvCreditListMatch {
  id: number
  language?: string
}

export interface TvEpisodeGroup {
  description?: string
  episode_count?: number
  group_count?: number
  id?: string
  name?: string
  network?: Record<string, any>
  type?: number
}

export interface TvEpisodeGroupListMatch {
  id: number
}

export interface TvExternalId {
  facebook_id?: string
  freebase_id?: string
  freebase_mid?: string
  id?: number
  imdb_id?: string
  instagram_id?: string
  tvdb_id?: number
  tvrage_id?: number
  twitter_id?: string
  wikidata_id?: string
}

export interface TvExternalIdLoadMatch {
  id: number
}

export interface TvImage {
  backdrops?: any[]
  id?: number
  logos?: any[]
  posters?: any[]
}

export interface TvImageListMatch {
  id: number
  include_image_language?: string
  language?: string
}

export interface TvKeyword {
  id?: number
  name?: string
}

export interface TvKeywordListMatch {
  id: number
}

export interface TvList {
  description?: string
  favorite_count?: number
  id?: number
  iso_3166_1?: string
  iso_639_1?: string
  item_count?: number
  name?: string
  poster_path?: any
}

export interface TvListListMatch {
  id: number
  language?: string
  page?: number
}

export interface TvRecommendation {
  adult?: boolean
  backdrop_path?: string
  first_air_date?: string
  genre_ids?: any[]
  id?: number
  media_type?: string
  name?: string
  origin_country?: any[]
  original_language?: string
  original_name?: string
  overview?: string
  popularity?: number
  poster_path?: string
  vote_average?: number
  vote_count?: number
}

export interface TvRecommendationListMatch {
  id: number
  language?: string
  page?: number
}

export interface TvReview {
  author?: string
  author_details?: Record<string, any>
  content?: string
  created_at?: string
  id?: string
  updated_at?: string
  url?: string
}

export interface TvReviewListMatch {
  id: number
  language?: string
  page?: number
}

export interface TvScreenedTheatrically {
  episode_number?: number
  id?: number
  season_number?: number
}

export interface TvScreenedTheatricallyListMatch {
  id: number
}

export interface TvSimilar {
  adult?: boolean
  backdrop_path?: string
  first_air_date?: string
  genre_ids?: any[]
  id?: number
  name?: string
  origin_country?: any[]
  original_language?: string
  original_name?: string
  overview?: string
  popularity?: number
  poster_path?: string
  vote_average?: number
  vote_count?: number
}

export interface TvSimilarListMatch {
  id: string
  language?: string
  page?: number
}

export interface TvTranslation {
  data?: Record<string, any>
  english_name?: string
  id?: string
  iso_3166_1?: string
  iso_639_1?: string
  name?: string
}

export interface TvTranslationListMatch {
  id: number
}

export interface TvVideo {
  id?: string
  iso_3166_1?: string
  iso_639_1?: string
  key?: string
  name?: string
  official?: boolean
  published_at?: string
  site?: string
  size?: number
  type?: string
}

export interface TvVideoListMatch {
  id: number
  include_video_language?: string
  language?: string
}

export interface Tvn {
  RAW_BODY: string
  adult?: boolean
  backdrop_path?: string
  created_by?: any[]
  display_priorities?: Record<string, any>
  display_priority?: number
  episode_run_time?: any[]
  first_air_date?: string
  genre_ids?: any[]
  genres?: any[]
  homepage?: string
  id?: number
  in_production?: boolean
  languages?: any[]
  last_air_date?: string
  last_episode_to_air?: Record<string, any>
  logo_path?: string
  name?: string
  networks?: any[]
  next_episode_to_air?: any
  number_of_episodes?: number
  number_of_seasons?: number
  origin_country?: any[]
  original_language?: string
  original_name?: string
  overview?: string
  page?: number
  popularity?: number
  poster_path?: string
  production_companies?: any[]
  production_countries?: any[]
  provider_id?: number
  provider_name?: string
  rating?: number
  results?: any[]
  seasons?: any[]
  spoken_languages?: any[]
  status?: string
  status_code?: number
  status_message?: string
  tagline?: string
  total_pages?: number
  total_results?: number
  type?: string
  vote_average?: number
  vote_count?: number
}

export interface TvnLoadMatch {
  series_id: number
  append_to_response?: string
  language?: string
}

export interface TvnListMatch {
  first_air_date_year?: number
  include_adult?: boolean
  language?: string
  page?: number
  query: string
  year?: number
}

export interface TvnCreateData {
  series_id: number
  guest_session_id?: string
  session_id?: string
  RAW_BODY: string
  adult?: boolean
  backdrop_path?: string
  created_by?: any[]
  display_priorities?: Record<string, any>
  display_priority?: number
  episode_run_time?: any[]
  first_air_date?: string
  genre_ids?: any[]
  genres?: any[]
  homepage?: string
  id?: number
  in_production?: boolean
  languages?: any[]
  last_air_date?: string
  last_episode_to_air?: Record<string, any>
  logo_path?: string
  name?: string
  networks?: any[]
  next_episode_to_air?: any
  number_of_episodes?: number
  number_of_seasons?: number
  origin_country?: any[]
  original_language?: string
  original_name?: string
  overview?: string
  page?: number
  popularity?: number
  poster_path?: string
  production_companies?: any[]
  production_countries?: any[]
  provider_id?: number
  provider_name?: string
  rating?: number
  results?: any[]
  seasons?: any[]
  spoken_languages?: any[]
  status?: string
  status_code?: number
  status_message?: string
  tagline?: string
  total_pages?: number
  total_results?: number
  type?: string
  vote_average?: number
  vote_count?: number
}

export interface TvnRemoveMatch {
  series_id: number
  guest_session_id?: string
  session_id?: string
}

export interface Upcoming {
  adult?: boolean
  backdrop_path?: string
  genre_ids?: any[]
  id?: number
  original_language?: string
  original_title?: string
  overview?: string
  popularity?: number
  poster_path?: string
  release_date?: string
  title?: string
  video?: boolean
  vote_average?: number
  vote_count?: number
}

export interface UpcomingListMatch {
  language?: string
  page?: number
  region?: string
}

export interface ValidateWithLogin {
  RAW_BODY: string
  expires_at?: string
  request_token?: string
  success?: boolean
}

export interface ValidateWithLoginCreateData {
  RAW_BODY: string
  expires_at?: string
  request_token?: string
  success?: boolean
}

export interface Watchlist {
  RAW_BODY: string
  status_code?: number
  status_message?: string
}

export interface WatchlistCreateData {
  account_id: number
  session_id?: string
  RAW_BODY: string
  status_code?: number
  status_message?: string
}

