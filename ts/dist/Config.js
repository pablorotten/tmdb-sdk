"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const TestFeature_1 = require("./feature/test/TestFeature");
const FEATURE_CLASS = {
    test: TestFeature_1.TestFeature,
};
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'Tmdb',
        slug: "tmdb",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
    };
    options = {
        base: "https://api.themoviedb.org",
        auth: {
            prefix: '',
        },
        headers: {
            "content-type": "application/json"
        },
        entity: {
            account: {},
            account_list: {},
            airing_today: {},
            all: {},
            authentication: {},
            change: {},
            collection: {},
            collection_image: {},
            collection_translation: {},
            company: {},
            company_alternative_name: {},
            company_image: {},
            configuration: {},
            country: {},
            credit: {},
            episode: {},
            episode_account_state: {},
            episode_change: {},
            episode_credit: {},
            episode_external_id: {},
            episode_group: {},
            episode_image: {},
            episode_translation: {},
            episode_video: {},
            favorite: {},
            find: {},
            job: {},
            keyword: {},
            keyword_movie: {},
            language: {},
            latest: {},
            list: {},
            list_item_status: {},
            movie: {},
            movie_account_state: {},
            movie_alternative_title: {},
            movie_change: {},
            movie_credit: {},
            movie_external_id: {},
            movie_image: {},
            movie_keyword: {},
            movie_list: {},
            movie_recommendation: {},
            movie_release_date: {},
            movie_review: {},
            movie_similar: {},
            movie_translation: {},
            movie_video: {},
            multi: {},
            n4n: {},
            network: {},
            network_alternative_name: {},
            network_image: {},
            new: {},
            now_playing: {},
            on_the_air: {},
            person: {},
            person_change: {},
            person_combined_credit: {},
            person_external_id: {},
            person_image: {},
            person_movie_credit: {},
            person_tagged_image: {},
            person_translation: {},
            person_tv_credit: {},
            popular: {},
            primary_translation: {},
            provider: {},
            region: {},
            review: {},
            season: {},
            season_account_state: {},
            season_aggregate_credit: {},
            season_change: {},
            season_credit: {},
            season_external_id: {},
            season_image: {},
            season_translation: {},
            season_video: {},
            session: {},
            timezone: {},
            top_rated: {},
            tv_account_state: {},
            tv_aggregate_credit: {},
            tv_alternative_title: {},
            tv_change: {},
            tv_content_rating: {},
            tv_credit: {},
            tv_episode_group: {},
            tv_external_id: {},
            tv_image: {},
            tv_keyword: {},
            tv_list: {},
            tv_recommendation: {},
            tv_review: {},
            tv_screened_theatrically: {},
            tv_similar: {},
            tv_translation: {},
            tv_video: {},
            tvn: {},
            upcoming: {},
            validate_with_login: {},
            watchlist: {},
        }
    };
    entity = {
        "account": {
            "fields": [
                {
                    "name": "avatar",
                    "title": "Avatar",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "include_adult",
                    "title": "Include Adult",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "iso_3166_1",
                    "title": "Iso 3166 1",
                    "type": "`$STRING`"
                },
                {
                    "name": "iso_639_1",
                    "title": "Iso 639 1",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "username",
                    "title": "Username",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "account",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/account/{account_id}",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "account"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "3",
                                "account",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "account_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "account_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": null
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "session_id",
                                        "orig": "session_id",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "account_list": {
            "fields": [
                {
                    "name": "description",
                    "title": "Description",
                    "type": "`$STRING`"
                },
                {
                    "name": "favorite_count",
                    "title": "Favorite Count",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "iso_639_1",
                    "title": "Iso 639 1",
                    "type": "`$STRING`"
                },
                {
                    "name": "item_count",
                    "title": "Item Count",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "list_type",
                    "title": "List Type",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "poster_path",
                    "title": "Poster Path",
                    "type": "`$ANY`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "account_list",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/account/{account_id}/lists",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "account"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "lists"
                                }
                            ],
                            "parts": [
                                "3",
                                "account",
                                "{id}",
                                "lists"
                            ],
                            "rename": {
                                "param": {
                                    "account_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "account_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": null
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "session_id",
                                        "orig": "session_id",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "airing_today": {
            "fields": [
                {
                    "name": "backdrop_path",
                    "title": "Backdrop Path",
                    "type": "`$STRING`"
                },
                {
                    "name": "first_air_date",
                    "title": "First Air Date",
                    "type": "`$STRING`"
                },
                {
                    "name": "genre_ids",
                    "title": "Genre Ids",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "origin_country",
                    "title": "Origin Country",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "original_language",
                    "title": "Original Language",
                    "type": "`$STRING`"
                },
                {
                    "name": "original_name",
                    "title": "Original Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "overview",
                    "title": "Overview",
                    "type": "`$STRING`"
                },
                {
                    "name": "popularity",
                    "title": "Popularity",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "poster_path",
                    "title": "Poster Path",
                    "type": "`$STRING`"
                },
                {
                    "name": "vote_average",
                    "title": "Vote Average",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "vote_count",
                    "title": "Vote Count",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "airing_today",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/tv/airing_today",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "tv"
                                },
                                {
                                    "lit": "airing_today"
                                }
                            ],
                            "parts": [
                                "3",
                                "tv",
                                "airing_today"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "timezone",
                                        "orig": "timezone",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {},
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "all": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "page",
                    "title": "Page",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "results",
                    "title": "Results",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "total_pages",
                    "title": "Total Pages",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "total_results",
                    "title": "Total Results",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "all",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/trending/all/{time_window}",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "trending"
                                },
                                {
                                    "lit": "all"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "3",
                                "trending",
                                "all",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "time_window": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "time_window",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "day"
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "authentication": {
            "fields": [
                {
                    "name": "status_code",
                    "title": "Status Code",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "status_message",
                    "title": "Status Message",
                    "type": "`$STRING`"
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`"
                }
            ],
            "name": "authentication",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/authentication",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "authentication"
                                }
                            ],
                            "parts": [
                                "3",
                                "authentication"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {},
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "change": {
            "fields": [
                {
                    "name": "adult",
                    "title": "Adult",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "change",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/movie/changes",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "movie"
                                },
                                {
                                    "lit": "changes"
                                }
                            ],
                            "parts": [
                                "3",
                                "movie",
                                "changes"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "end_date",
                                        "orig": "end_date",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "start_date",
                                        "orig": "start_date",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {},
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/person/changes",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "person"
                                },
                                {
                                    "lit": "changes"
                                }
                            ],
                            "parts": [
                                "3",
                                "person",
                                "changes"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "end_date",
                                        "orig": "end_date",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "start_date",
                                        "orig": "start_date",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {},
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/tv/changes",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "tv"
                                },
                                {
                                    "lit": "changes"
                                }
                            ],
                            "parts": [
                                "3",
                                "tv",
                                "changes"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "end_date",
                                        "orig": "end_date",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "start_date",
                                        "orig": "start_date",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {},
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "collection": {
            "fields": [
                {
                    "name": "adult",
                    "title": "Adult",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "backdrop_path",
                    "title": "Backdrop Path",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "original_language",
                    "title": "Original Language",
                    "type": "`$STRING`"
                },
                {
                    "name": "original_name",
                    "title": "Original Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "overview",
                    "title": "Overview",
                    "type": "`$STRING`"
                },
                {
                    "name": "parts",
                    "title": "Parts",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "poster_path",
                    "title": "Poster Path",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "collection",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/search/collection",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "search"
                                },
                                {
                                    "lit": "collection"
                                }
                            ],
                            "parts": [
                                "3",
                                "search",
                                "collection"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "include_adult",
                                        "orig": "include_adult",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": false
                                    },
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "query",
                                        "orig": "query",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "reqd": true
                                    },
                                    {
                                        "name": "region",
                                        "orig": "region",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "query"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/collection/{collection_id}",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "collection"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "3",
                                "collection",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "collection_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "collection_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "collection_image": {
            "fields": [
                {
                    "name": "backdrops",
                    "title": "Backdrops",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "posters",
                    "title": "Posters",
                    "type": "`$ARRAY`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "collection_image",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/collection/{collection_id}/images",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "collection"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "images"
                                }
                            ],
                            "parts": [
                                "3",
                                "collection",
                                "{id}",
                                "images"
                            ],
                            "rename": {
                                "param": {
                                    "collection_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "collection_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "include_image_language",
                                        "orig": "include_image_language",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "collection_translation": {
            "fields": [
                {
                    "name": "data",
                    "title": "Data",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "english_name",
                    "title": "English Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "iso_3166_1",
                    "title": "Iso 3166 1",
                    "type": "`$STRING`"
                },
                {
                    "name": "iso_639_1",
                    "title": "Iso 639 1",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "collection_translation",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/collection/{collection_id}/translations",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "collection"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "translations"
                                }
                            ],
                            "parts": [
                                "3",
                                "collection",
                                "{id}",
                                "translations"
                            ],
                            "rename": {
                                "param": {
                                    "collection_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.translations`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "collection_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "company": {
            "fields": [
                {
                    "name": "description",
                    "title": "Description",
                    "type": "`$STRING`"
                },
                {
                    "name": "headquarters",
                    "title": "Headquarters",
                    "type": "`$STRING`"
                },
                {
                    "name": "homepage",
                    "title": "Homepage",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "logo_path",
                    "title": "Logo Path",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "origin_country",
                    "title": "Origin Country",
                    "type": "`$STRING`"
                },
                {
                    "name": "parent_company",
                    "title": "Parent Company",
                    "type": "`$ANY`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "company",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/search/company",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "search"
                                },
                                {
                                    "lit": "company"
                                }
                            ],
                            "parts": [
                                "3",
                                "search",
                                "company"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "query",
                                        "orig": "query",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "query"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/company/{company_id}",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "company"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "3",
                                "company",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "company_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "company_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "company_alternative_name": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "type",
                    "title": "Type",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "company_alternative_name",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/company/{company_id}/alternative_names",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "company"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "alternative_names"
                                }
                            ],
                            "parts": [
                                "3",
                                "company",
                                "{id}",
                                "alternative_names"
                            ],
                            "rename": {
                                "param": {
                                    "company_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "company_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "company_image": {
            "fields": [
                {
                    "name": "aspect_ratio",
                    "title": "Aspect Ratio",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "file_path",
                    "title": "File Path",
                    "type": "`$STRING`"
                },
                {
                    "name": "file_type",
                    "title": "File Type",
                    "type": "`$STRING`"
                },
                {
                    "name": "height",
                    "title": "Height",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "vote_average",
                    "title": "Vote Average",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "vote_count",
                    "title": "Vote Count",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "width",
                    "title": "Width",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "company_image",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/company/{company_id}/images",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "company"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "images"
                                }
                            ],
                            "parts": [
                                "3",
                                "company",
                                "{id}",
                                "images"
                            ],
                            "rename": {
                                "param": {
                                    "company_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.logos`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "company_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "configuration": {
            "fields": [
                {
                    "name": "change_keys",
                    "title": "Change Keys",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "images",
                    "title": "Images",
                    "type": "`$OBJECT`"
                }
            ],
            "name": "configuration",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/configuration",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "configuration"
                                }
                            ],
                            "parts": [
                                "3",
                                "configuration"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {},
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "country": {
            "fields": [
                {
                    "name": "english_name",
                    "title": "English Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "iso_3166_1",
                    "title": "Iso 3166 1",
                    "type": "`$STRING`"
                },
                {
                    "name": "native_name",
                    "title": "Native Name",
                    "type": "`$STRING`"
                }
            ],
            "name": "country",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/configuration/countries",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "configuration"
                                },
                                {
                                    "lit": "countries"
                                }
                            ],
                            "parts": [
                                "3",
                                "configuration",
                                "countries"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    }
                                ]
                            },
                            "select": {},
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "credit": {
            "fields": [
                {
                    "name": "credit_type",
                    "title": "Credit Type",
                    "type": "`$STRING`"
                },
                {
                    "name": "department",
                    "title": "Department",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "job",
                    "title": "Job",
                    "type": "`$STRING`"
                },
                {
                    "name": "media",
                    "title": "Media",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "media_type",
                    "title": "Media Type",
                    "type": "`$STRING`"
                },
                {
                    "name": "person",
                    "title": "Person",
                    "type": "`$OBJECT`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "credit",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/credit/{credit_id}",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "credit"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "3",
                                "credit",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "credit_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "credit_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "episode": {
            "fields": [
                {
                    "name": "air_date",
                    "title": "Air Date",
                    "type": "`$STRING`"
                },
                {
                    "name": "crew",
                    "title": "Crew",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "episode_number",
                    "title": "Episode Number",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "guest_stars",
                    "title": "Guest Stars",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "overview",
                    "title": "Overview",
                    "type": "`$STRING`"
                },
                {
                    "name": "production_code",
                    "title": "Production Code",
                    "type": "`$STRING`"
                },
                {
                    "name": "rating",
                    "title": "Rating",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "runtime",
                    "title": "Runtime",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "season_number",
                    "title": "Season Number",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "show_id",
                    "title": "Show Id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "still_path",
                    "title": "Still Path",
                    "type": "`$STRING`"
                },
                {
                    "name": "vote_average",
                    "title": "Vote Average",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "vote_count",
                    "title": "Vote Count",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "episode",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/3/tv/{series_id}/season/{season_number}/episode/{episode_number}/rating",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "tv"
                                },
                                {
                                    "var": "tv_id"
                                },
                                {
                                    "lit": "season"
                                },
                                {
                                    "var": "season_id"
                                },
                                {
                                    "lit": "episode"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "rating"
                                }
                            ],
                            "parts": [
                                "3",
                                "tv",
                                "{tv_id}",
                                "season",
                                "{season_id}",
                                "episode",
                                "{id}",
                                "rating"
                            ],
                            "rename": {
                                "param": {
                                    "episode_number": "id",
                                    "season_number": "season_id",
                                    "series_id": "tv_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "header": [
                                    {
                                        "name": "content_type",
                                        "orig": "Content-Type",
                                        "type": "`$STRING`",
                                        "kind": "header",
                                        "reqd": true,
                                        "example": "application/json;charset=utf-8"
                                    }
                                ],
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "episode_number",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "season_id",
                                        "orig": "season_number",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "tv_id",
                                        "orig": "series_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "guest_session_id",
                                        "orig": "guest_session_id",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "session_id",
                                        "orig": "session_id",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "$action": "rating",
                                "exist": [
                                    "content_type",
                                    "id",
                                    "season_id",
                                    "tv_id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/account/{account_id}/rated/tv/episodes",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "account"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "rated"
                                },
                                {
                                    "lit": "tv"
                                },
                                {
                                    "lit": "episodes"
                                }
                            ],
                            "parts": [
                                "3",
                                "account",
                                "{account_id}",
                                "rated",
                                "tv",
                                "episodes"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": null
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "session_id",
                                        "orig": "session_id",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "sort_by",
                                        "orig": "sort_by",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "created_at.asc"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/guest_session/{guest_session_id}/rated/tv/episodes",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "guest_session"
                                },
                                {
                                    "var": "guest_session_id"
                                },
                                {
                                    "lit": "rated"
                                },
                                {
                                    "lit": "tv"
                                },
                                {
                                    "lit": "episodes"
                                }
                            ],
                            "parts": [
                                "3",
                                "guest_session",
                                "{guest_session_id}",
                                "rated",
                                "tv",
                                "episodes"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "guest_session_id",
                                        "orig": "guest_session_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "sort_by",
                                        "orig": "sort_by",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "created_at.asc"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "guest_session_id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/tv/{series_id}/season/{season_number}/episode/{episode_number}",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "tv"
                                },
                                {
                                    "var": "tv_id"
                                },
                                {
                                    "lit": "season"
                                },
                                {
                                    "var": "season_id"
                                },
                                {
                                    "lit": "episode"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "3",
                                "tv",
                                "{tv_id}",
                                "season",
                                "{season_id}",
                                "episode",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "episode_number": "id",
                                    "season_number": "season_id",
                                    "series_id": "tv_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "episode_number",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "season_id",
                                        "orig": "season_number",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "tv_id",
                                        "orig": "series_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "append_to_response",
                                        "orig": "append_to_response",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id",
                                    "season_id",
                                    "tv_id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/3/tv/{series_id}/season/{season_number}/episode/{episode_number}/rating",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "tv"
                                },
                                {
                                    "var": "tv_id"
                                },
                                {
                                    "lit": "season"
                                },
                                {
                                    "var": "season_id"
                                },
                                {
                                    "lit": "episode"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "rating"
                                }
                            ],
                            "parts": [
                                "3",
                                "tv",
                                "{tv_id}",
                                "season",
                                "{season_id}",
                                "episode",
                                "{id}",
                                "rating"
                            ],
                            "rename": {
                                "param": {
                                    "episode_number": "id",
                                    "season_number": "season_id",
                                    "series_id": "tv_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "header": [
                                    {
                                        "name": "content_type",
                                        "orig": "Content-Type",
                                        "type": "`$STRING`",
                                        "kind": "header",
                                        "example": "application/json;charset=utf-8"
                                    }
                                ],
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "episode_number",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "season_id",
                                        "orig": "season_number",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "tv_id",
                                        "orig": "series_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "guest_session_id",
                                        "orig": "guest_session_id",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "session_id",
                                        "orig": "session_id",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "$action": "rating",
                                "exist": [
                                    "id",
                                    "season_id",
                                    "tv_id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.account"
                    ],
                    [
                        "$.main.kit.entity.season"
                    ]
                ]
            }
        },
        "episode_account_state": {
            "fields": [
                {
                    "name": "favorite",
                    "title": "Favorite",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "rated",
                    "title": "Rated",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "watchlist",
                    "title": "Watchlist",
                    "type": "`$BOOLEAN`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "episode_account_state",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/tv/{series_id}/season/{season_number}/episode/{episode_number}/account_states",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "tv"
                                },
                                {
                                    "var": "tv_id"
                                },
                                {
                                    "lit": "season"
                                },
                                {
                                    "var": "season_id"
                                },
                                {
                                    "lit": "episode"
                                },
                                {
                                    "var": "episode_number"
                                },
                                {
                                    "lit": "account_states"
                                }
                            ],
                            "parts": [
                                "3",
                                "tv",
                                "{tv_id}",
                                "season",
                                "{season_id}",
                                "episode",
                                "{episode_number}",
                                "account_states"
                            ],
                            "rename": {
                                "param": {
                                    "season_number": "season_id",
                                    "series_id": "tv_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "episode_number",
                                        "orig": "episode_number",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "season_id",
                                        "orig": "season_number",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "tv_id",
                                        "orig": "series_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "guest_session_id",
                                        "orig": "guest_session_id",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "session_id",
                                        "orig": "session_id",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "episode_number",
                                    "season_id",
                                    "tv_id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.season",
                        "$.main.kit.entity.episode"
                    ]
                ]
            }
        },
        "episode_change": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "items",
                    "title": "Items",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "key",
                    "title": "Key",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "episode_change",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/tv/episode/{episode_id}/changes",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "tv"
                                },
                                {
                                    "lit": "episode"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "changes"
                                }
                            ],
                            "parts": [
                                "3",
                                "tv",
                                "episode",
                                "{id}",
                                "changes"
                            ],
                            "rename": {
                                "param": {
                                    "episode_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.changes`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "episode_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "episode_credit": {
            "fields": [
                {
                    "name": "cast",
                    "title": "Cast",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "crew",
                    "title": "Crew",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "guest_stars",
                    "title": "Guest Stars",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "episode_credit",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/tv/{series_id}/season/{season_number}/episode/{episode_number}/credits",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "tv"
                                },
                                {
                                    "var": "tv_id"
                                },
                                {
                                    "lit": "season"
                                },
                                {
                                    "var": "season_id"
                                },
                                {
                                    "lit": "episode"
                                },
                                {
                                    "var": "episode_number"
                                },
                                {
                                    "lit": "credits"
                                }
                            ],
                            "parts": [
                                "3",
                                "tv",
                                "{tv_id}",
                                "season",
                                "{season_id}",
                                "episode",
                                "{episode_number}",
                                "credits"
                            ],
                            "rename": {
                                "param": {
                                    "season_number": "season_id",
                                    "series_id": "tv_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "episode_number",
                                        "orig": "episode_number",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "season_id",
                                        "orig": "season_number",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "tv_id",
                                        "orig": "series_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "episode_number",
                                    "season_id",
                                    "tv_id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.season",
                        "$.main.kit.entity.episode"
                    ]
                ]
            }
        },
        "episode_external_id": {
            "fields": [
                {
                    "name": "freebase_id",
                    "title": "Freebase Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "freebase_mid",
                    "title": "Freebase Mid",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "imdb_id",
                    "title": "Imdb Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "tvdb_id",
                    "title": "Tvdb Id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "tvrage_id",
                    "title": "Tvrage Id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "wikidata_id",
                    "title": "Wikidata Id",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "episode_external_id",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/tv/{series_id}/season/{season_number}/episode/{episode_number}/external_ids",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "tv"
                                },
                                {
                                    "var": "tv_id"
                                },
                                {
                                    "lit": "season"
                                },
                                {
                                    "var": "season_id"
                                },
                                {
                                    "lit": "episode"
                                },
                                {
                                    "var": "episode_number"
                                },
                                {
                                    "lit": "external_ids"
                                }
                            ],
                            "parts": [
                                "3",
                                "tv",
                                "{tv_id}",
                                "season",
                                "{season_id}",
                                "episode",
                                "{episode_number}",
                                "external_ids"
                            ],
                            "rename": {
                                "param": {
                                    "season_number": "season_id",
                                    "series_id": "tv_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "episode_number",
                                        "orig": "episode_number",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "season_id",
                                        "orig": "season_number",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "tv_id",
                                        "orig": "series_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "episode_number",
                                    "season_id",
                                    "tv_id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.season",
                        "$.main.kit.entity.episode"
                    ]
                ]
            }
        },
        "episode_group": {
            "fields": [
                {
                    "name": "description",
                    "title": "Description",
                    "type": "`$STRING`"
                },
                {
                    "name": "episode_count",
                    "title": "Episode Count",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "group_count",
                    "title": "Group Count",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "groups",
                    "title": "Groups",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "network",
                    "title": "Network",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "type",
                    "title": "Type",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "episode_group",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/tv/episode_group/{tv_episode_group_id}",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "tv"
                                },
                                {
                                    "lit": "episode_group"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "3",
                                "tv",
                                "episode_group",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "tv_episode_group_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "tv_episode_group_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "episode_image": {
            "fields": [
                {
                    "name": "aspect_ratio",
                    "title": "Aspect Ratio",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "file_path",
                    "title": "File Path",
                    "type": "`$STRING`"
                },
                {
                    "name": "height",
                    "title": "Height",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "iso_639_1",
                    "title": "Iso 639 1",
                    "type": "`$ANY`"
                },
                {
                    "name": "vote_average",
                    "title": "Vote Average",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "vote_count",
                    "title": "Vote Count",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "width",
                    "title": "Width",
                    "type": "`$INTEGER`"
                }
            ],
            "name": "episode_image",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/tv/{series_id}/season/{season_number}/episode/{episode_number}/images",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "tv"
                                },
                                {
                                    "var": "tv_id"
                                },
                                {
                                    "lit": "season"
                                },
                                {
                                    "var": "season_id"
                                },
                                {
                                    "lit": "episode"
                                },
                                {
                                    "var": "episode_number"
                                },
                                {
                                    "lit": "images"
                                }
                            ],
                            "parts": [
                                "3",
                                "tv",
                                "{tv_id}",
                                "season",
                                "{season_id}",
                                "episode",
                                "{episode_number}",
                                "images"
                            ],
                            "rename": {
                                "param": {
                                    "season_number": "season_id",
                                    "series_id": "tv_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.stills`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "episode_number",
                                        "orig": "episode_number",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "season_id",
                                        "orig": "season_number",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "tv_id",
                                        "orig": "series_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "include_image_language",
                                        "orig": "include_image_language",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "episode_number",
                                    "season_id",
                                    "tv_id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.season",
                        "$.main.kit.entity.episode"
                    ]
                ]
            }
        },
        "episode_translation": {
            "fields": [
                {
                    "name": "data",
                    "title": "Data",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "english_name",
                    "title": "English Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "iso_3166_1",
                    "title": "Iso 3166 1",
                    "type": "`$STRING`"
                },
                {
                    "name": "iso_639_1",
                    "title": "Iso 639 1",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`"
                }
            ],
            "name": "episode_translation",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/tv/{series_id}/season/{season_number}/episode/{episode_number}/translations",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "tv"
                                },
                                {
                                    "var": "tv_id"
                                },
                                {
                                    "lit": "season"
                                },
                                {
                                    "var": "season_id"
                                },
                                {
                                    "lit": "episode"
                                },
                                {
                                    "var": "episode_number"
                                },
                                {
                                    "lit": "translations"
                                }
                            ],
                            "parts": [
                                "3",
                                "tv",
                                "{tv_id}",
                                "season",
                                "{season_id}",
                                "episode",
                                "{episode_number}",
                                "translations"
                            ],
                            "rename": {
                                "param": {
                                    "season_number": "season_id",
                                    "series_id": "tv_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.translations`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "episode_number",
                                        "orig": "episode_number",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "season_id",
                                        "orig": "season_number",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "tv_id",
                                        "orig": "series_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "episode_number",
                                    "season_id",
                                    "tv_id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.season",
                        "$.main.kit.entity.episode"
                    ]
                ]
            }
        },
        "episode_video": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "iso_3166_1",
                    "title": "Iso 3166 1",
                    "type": "`$STRING`"
                },
                {
                    "name": "iso_639_1",
                    "title": "Iso 639 1",
                    "type": "`$STRING`"
                },
                {
                    "name": "key",
                    "title": "Key",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "official",
                    "title": "Official",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "published_at",
                    "title": "Published At",
                    "type": "`$STRING`"
                },
                {
                    "name": "site",
                    "title": "Site",
                    "type": "`$STRING`"
                },
                {
                    "name": "size",
                    "title": "Size",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "type",
                    "title": "Type",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "episode_video",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/tv/{series_id}/season/{season_number}/episode/{episode_number}/videos",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "tv"
                                },
                                {
                                    "var": "tv_id"
                                },
                                {
                                    "lit": "season"
                                },
                                {
                                    "var": "season_id"
                                },
                                {
                                    "lit": "episode"
                                },
                                {
                                    "var": "episode_number"
                                },
                                {
                                    "lit": "videos"
                                }
                            ],
                            "parts": [
                                "3",
                                "tv",
                                "{tv_id}",
                                "season",
                                "{season_id}",
                                "episode",
                                "{episode_number}",
                                "videos"
                            ],
                            "rename": {
                                "param": {
                                    "season_number": "season_id",
                                    "series_id": "tv_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "episode_number",
                                        "orig": "episode_number",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "season_id",
                                        "orig": "season_number",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "tv_id",
                                        "orig": "series_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "include_video_language",
                                        "orig": "include_video_language",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "episode_number",
                                    "season_id",
                                    "tv_id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.season",
                        "$.main.kit.entity.episode"
                    ]
                ]
            }
        },
        "favorite": {
            "fields": [
                {
                    "name": "RAW_BODY",
                    "title": "Raw Body",
                    "type": "`$STRING`",
                    "req": true,
                    "format": "json"
                },
                {
                    "name": "status_code",
                    "title": "Status Code",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "status_message",
                    "title": "Status Message",
                    "type": "`$STRING`"
                }
            ],
            "name": "favorite",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/3/account/{account_id}/favorite",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "account"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "favorite"
                                }
                            ],
                            "parts": [
                                "3",
                                "account",
                                "{account_id}",
                                "favorite"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": null
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "session_id",
                                        "orig": "session_id",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.account"
                    ]
                ]
            }
        },
        "find": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "movie_results",
                    "title": "Movie Results",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "person_results",
                    "title": "Person Results",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "tv_episode_results",
                    "title": "Tv Episode Results",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "tv_results",
                    "title": "Tv Results",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "tv_season_results",
                    "title": "Tv Season Results",
                    "type": "`$ARRAY`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "find",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/find/{external_id}",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "find"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "3",
                                "find",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "external_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "external_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "external_source",
                                        "orig": "external_source",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "reqd": true
                                    },
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "external_source",
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "job": {
            "fields": [
                {
                    "name": "department",
                    "title": "Department",
                    "type": "`$STRING`"
                },
                {
                    "name": "jobs",
                    "title": "Jobs",
                    "type": "`$ARRAY`"
                }
            ],
            "name": "job",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/configuration/jobs",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "configuration"
                                },
                                {
                                    "lit": "jobs"
                                }
                            ],
                            "parts": [
                                "3",
                                "configuration",
                                "jobs"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {},
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "keyword": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "keyword",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/search/keyword",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "search"
                                },
                                {
                                    "lit": "keyword"
                                }
                            ],
                            "parts": [
                                "3",
                                "search",
                                "keyword"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "query",
                                        "orig": "query",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "query"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/keyword/{keyword_id}",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "keyword"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "3",
                                "keyword",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "keyword_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "keyword_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "keyword_movie": {
            "fields": [
                {
                    "name": "adult",
                    "title": "Adult",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "backdrop_path",
                    "title": "Backdrop Path",
                    "type": "`$STRING`"
                },
                {
                    "name": "genre_ids",
                    "title": "Genre Ids",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "original_language",
                    "title": "Original Language",
                    "type": "`$STRING`"
                },
                {
                    "name": "original_title",
                    "title": "Original Title",
                    "type": "`$STRING`"
                },
                {
                    "name": "overview",
                    "title": "Overview",
                    "type": "`$STRING`"
                },
                {
                    "name": "popularity",
                    "title": "Popularity",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "poster_path",
                    "title": "Poster Path",
                    "type": "`$STRING`"
                },
                {
                    "name": "release_date",
                    "title": "Release Date",
                    "type": "`$STRING`"
                },
                {
                    "name": "title",
                    "title": "Title",
                    "type": "`$STRING`"
                },
                {
                    "name": "video",
                    "title": "Video",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "vote_average",
                    "title": "Vote Average",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "vote_count",
                    "title": "Vote Count",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "keyword_movie",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/keyword/{keyword_id}/movies",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "keyword"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "movies"
                                }
                            ],
                            "parts": [
                                "3",
                                "keyword",
                                "{id}",
                                "movies"
                            ],
                            "rename": {
                                "param": {
                                    "keyword_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "keyword_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "include_adult",
                                        "orig": "include_adult",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": false
                                    },
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "language": {
            "fields": [
                {
                    "name": "english_name",
                    "title": "English Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "iso_639_1",
                    "title": "Iso 639 1",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`"
                }
            ],
            "name": "language",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/configuration/languages",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "configuration"
                                },
                                {
                                    "lit": "languages"
                                }
                            ],
                            "parts": [
                                "3",
                                "configuration",
                                "languages"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {},
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "latest": {
            "fields": [
                {
                    "name": "adult",
                    "title": "Adult",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "air_date",
                    "title": "Air Date",
                    "type": "`$ANY`"
                },
                {
                    "name": "also_known_as",
                    "title": "Also Known As",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "backdrop_path",
                    "title": "Backdrop Path",
                    "type": "`$ANY`"
                },
                {
                    "name": "belongs_to_collection",
                    "title": "Belongs To Collection",
                    "type": "`$ANY`"
                },
                {
                    "name": "biography",
                    "title": "Biography",
                    "type": "`$STRING`"
                },
                {
                    "name": "birthday",
                    "title": "Birthday",
                    "type": "`$ANY`"
                },
                {
                    "name": "budget",
                    "title": "Budget",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "deathday",
                    "title": "Deathday",
                    "type": "`$ANY`"
                },
                {
                    "name": "episode_count",
                    "title": "Episode Count",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "gender",
                    "title": "Gender",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "genres",
                    "title": "Genres",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "homepage",
                    "title": "Homepage",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "imdb_id",
                    "title": "Imdb Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "known_for_department",
                    "title": "Known For Department",
                    "type": "`$ANY`"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "original_language",
                    "title": "Original Language",
                    "type": "`$STRING`"
                },
                {
                    "name": "original_title",
                    "title": "Original Title",
                    "type": "`$STRING`"
                },
                {
                    "name": "overview",
                    "title": "Overview",
                    "type": "`$STRING`"
                },
                {
                    "name": "place_of_birth",
                    "title": "Place Of Birth",
                    "type": "`$ANY`"
                },
                {
                    "name": "popularity",
                    "title": "Popularity",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "poster_path",
                    "title": "Poster Path",
                    "type": "`$ANY`"
                },
                {
                    "name": "production_companies",
                    "title": "Production Companies",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "production_countries",
                    "title": "Production Countries",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "profile_path",
                    "title": "Profile Path",
                    "type": "`$ANY`"
                },
                {
                    "name": "release_date",
                    "title": "Release Date",
                    "type": "`$STRING`"
                },
                {
                    "name": "revenue",
                    "title": "Revenue",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "runtime",
                    "title": "Runtime",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "season_number",
                    "title": "Season Number",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "spoken_languages",
                    "title": "Spoken Languages",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "status",
                    "title": "Status",
                    "type": "`$STRING`"
                },
                {
                    "name": "tagline",
                    "title": "Tagline",
                    "type": "`$STRING`"
                },
                {
                    "name": "title",
                    "title": "Title",
                    "type": "`$STRING`"
                },
                {
                    "name": "video",
                    "title": "Video",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "vote_average",
                    "title": "Vote Average",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "vote_count",
                    "title": "Vote Count",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "latest",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/movie/latest",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "movie"
                                },
                                {
                                    "lit": "latest"
                                }
                            ],
                            "parts": [
                                "3",
                                "movie",
                                "latest"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {},
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/person/latest",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "person"
                                },
                                {
                                    "lit": "latest"
                                }
                            ],
                            "parts": [
                                "3",
                                "person",
                                "latest"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.also_known_as`"
                            },
                            "args": {},
                            "select": {},
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/tv/latest",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "tv"
                                },
                                {
                                    "lit": "latest"
                                }
                            ],
                            "parts": [
                                "3",
                                "tv",
                                "latest"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {},
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "list": {
            "fields": [
                {
                    "name": "AR",
                    "title": "Ar",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "AU",
                    "title": "Au",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "BG",
                    "title": "Bg",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "BR",
                    "title": "Br",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "CA",
                    "title": "Ca",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "CAQC",
                    "title": "Caqc",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "CH",
                    "title": "Ch",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "DE",
                    "title": "De",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "DK",
                    "title": "Dk",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "ES",
                    "title": "Es",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "FI",
                    "title": "Fi",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "FR",
                    "title": "Fr",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "GB",
                    "title": "Gb",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "GR",
                    "title": "Gr",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "HK",
                    "title": "Hk",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "HU",
                    "title": "Hu",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "ID",
                    "title": "Id",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "IE",
                    "title": "Ie",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "IL",
                    "title": "Il",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "IN",
                    "title": "In",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "IT",
                    "title": "It",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "JP",
                    "title": "Jp",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "KR",
                    "title": "Kr",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "LT",
                    "title": "Lt",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "LU",
                    "title": "Lu",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "LV",
                    "title": "Lv",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "MA",
                    "title": "Ma",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "MO",
                    "title": "Mo",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "MX",
                    "title": "Mx",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "MY",
                    "title": "My",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "NL",
                    "title": "Nl",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "NO",
                    "title": "No",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "NZ",
                    "title": "Nz",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "PH",
                    "title": "Ph",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "PL",
                    "title": "Pl",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "PR",
                    "title": "Pr",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "PT",
                    "title": "Pt",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "RAW_BODY",
                    "title": "Raw Body",
                    "type": "`$STRING`",
                    "req": true,
                    "format": "json"
                },
                {
                    "name": "RU",
                    "title": "Ru",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "SE",
                    "title": "Se",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "SG",
                    "title": "Sg",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "SK",
                    "title": "Sk",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "TH",
                    "title": "Th",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "TR",
                    "title": "Tr",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "TW",
                    "title": "Tw",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "US",
                    "title": "Us",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "VI",
                    "title": "Vi",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "ZA",
                    "title": "Za",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "created_by",
                    "title": "Created By",
                    "type": "`$STRING`"
                },
                {
                    "name": "description",
                    "title": "Description",
                    "type": "`$STRING`"
                },
                {
                    "name": "favorite_count",
                    "title": "Favorite Count",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "iso_639_1",
                    "title": "Iso 639 1",
                    "type": "`$STRING`"
                },
                {
                    "name": "item_count",
                    "title": "Item Count",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "items",
                    "title": "Items",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "list_id",
                    "title": "List Id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "poster_path",
                    "title": "Poster Path",
                    "type": "`$STRING`"
                },
                {
                    "name": "status_code",
                    "title": "Status Code",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "status_message",
                    "title": "Status Message",
                    "type": "`$STRING`"
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "list",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/3/list/{list_id}/clear",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "list"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "clear"
                                }
                            ],
                            "parts": [
                                "3",
                                "list",
                                "{id}",
                                "clear"
                            ],
                            "rename": {
                                "param": {
                                    "list_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "list_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "confirm",
                                        "orig": "confirm",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "reqd": true,
                                        "example": false
                                    },
                                    {
                                        "name": "session_id",
                                        "orig": "session_id",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "clear",
                                "exist": [
                                    "confirm",
                                    "id",
                                    "session_id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/3/list/{list_id}/add_item",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "list"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "add_item"
                                }
                            ],
                            "parts": [
                                "3",
                                "list",
                                "{id}",
                                "add_item"
                            ],
                            "rename": {
                                "param": {
                                    "list_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "list_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "session_id",
                                        "orig": "session_id",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "add_item",
                                "exist": [
                                    "id",
                                    "session_id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/3/list/{list_id}/remove_item",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "list"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "remove_item"
                                }
                            ],
                            "parts": [
                                "3",
                                "list",
                                "{id}",
                                "remove_item"
                            ],
                            "rename": {
                                "param": {
                                    "list_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "list_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "session_id",
                                        "orig": "session_id",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "remove_item",
                                "exist": [
                                    "id",
                                    "session_id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/3/list",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "list"
                                }
                            ],
                            "parts": [
                                "3",
                                "list"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "session_id",
                                        "orig": "session_id",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "session_id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/genre/movie/list",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "genre"
                                },
                                {
                                    "lit": "movie"
                                },
                                {
                                    "lit": "list"
                                }
                            ],
                            "parts": [
                                "3",
                                "genre",
                                "movie",
                                "list"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.genres`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en"
                                    }
                                ]
                            },
                            "select": {},
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/genre/tv/list",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "genre"
                                },
                                {
                                    "lit": "tv"
                                },
                                {
                                    "lit": "list"
                                }
                            ],
                            "parts": [
                                "3",
                                "genre",
                                "tv",
                                "list"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.genres`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en"
                                    }
                                ]
                            },
                            "select": {},
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/list/{list_id}",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "list"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "3",
                                "list",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "list_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "list_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/certification/movie/list",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "certification"
                                },
                                {
                                    "lit": "movie"
                                },
                                {
                                    "lit": "list"
                                }
                            ],
                            "parts": [
                                "3",
                                "certification",
                                "movie",
                                "list"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.certifications`"
                            },
                            "args": {},
                            "select": {},
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/certification/tv/list",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "certification"
                                },
                                {
                                    "lit": "tv"
                                },
                                {
                                    "lit": "list"
                                }
                            ],
                            "parts": [
                                "3",
                                "certification",
                                "tv",
                                "list"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.certifications`"
                            },
                            "args": {},
                            "select": {},
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/3/list/{list_id}",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "list"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "3",
                                "list",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "list_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "list_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "session_id",
                                        "orig": "session_id",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id",
                                    "session_id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "list_item_status": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "item_present",
                    "title": "Item Present",
                    "type": "`$BOOLEAN`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "list_item_status",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/list/{list_id}/item_status",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "list"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "item_status"
                                }
                            ],
                            "parts": [
                                "3",
                                "list",
                                "{id}",
                                "item_status"
                            ],
                            "rename": {
                                "param": {
                                    "list_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "list_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    },
                                    {
                                        "name": "movie_id",
                                        "orig": "movie_id",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "movie": {
            "fields": [
                {
                    "name": "adult",
                    "title": "Adult",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "backdrop_path",
                    "title": "Backdrop Path",
                    "type": "`$STRING`"
                },
                {
                    "name": "belongs_to_collection",
                    "title": "Belongs To Collection",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "budget",
                    "title": "Budget",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "display_priorities",
                    "title": "Display Priorities",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "display_priority",
                    "title": "Display Priority",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "genre_ids",
                    "title": "Genre Ids",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "genres",
                    "title": "Genres",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "homepage",
                    "title": "Homepage",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "imdb_id",
                    "title": "Imdb Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "logo_path",
                    "title": "Logo Path",
                    "type": "`$STRING`"
                },
                {
                    "name": "origin_country",
                    "title": "Origin Country",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "original_language",
                    "title": "Original Language",
                    "type": "`$STRING`"
                },
                {
                    "name": "original_title",
                    "title": "Original Title",
                    "type": "`$STRING`"
                },
                {
                    "name": "overview",
                    "title": "Overview",
                    "type": "`$STRING`"
                },
                {
                    "name": "page",
                    "title": "Page",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "popularity",
                    "title": "Popularity",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "poster_path",
                    "title": "Poster Path",
                    "type": "`$STRING`"
                },
                {
                    "name": "production_companies",
                    "title": "Production Companies",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "production_countries",
                    "title": "Production Countries",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "provider_id",
                    "title": "Provider Id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "provider_name",
                    "title": "Provider Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "rating",
                    "title": "Rating",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "release_date",
                    "title": "Release Date",
                    "type": "`$STRING`"
                },
                {
                    "name": "results",
                    "title": "Results",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "revenue",
                    "title": "Revenue",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "runtime",
                    "title": "Runtime",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "spoken_languages",
                    "title": "Spoken Languages",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "status",
                    "title": "Status",
                    "type": "`$STRING`"
                },
                {
                    "name": "tagline",
                    "title": "Tagline",
                    "type": "`$STRING`"
                },
                {
                    "name": "title",
                    "title": "Title",
                    "type": "`$STRING`"
                },
                {
                    "name": "total_pages",
                    "title": "Total Pages",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "total_results",
                    "title": "Total Results",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "video",
                    "title": "Video",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "vote_average",
                    "title": "Vote Average",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "vote_count",
                    "title": "Vote Count",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "movie",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/3/movie/{movie_id}/rating",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "movie"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "rating"
                                }
                            ],
                            "parts": [
                                "3",
                                "movie",
                                "{id}",
                                "rating"
                            ],
                            "rename": {
                                "param": {
                                    "movie_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "header": [
                                    {
                                        "name": "content_type",
                                        "orig": "Content-Type",
                                        "type": "`$STRING`",
                                        "kind": "header",
                                        "reqd": true,
                                        "example": "application/json;charset=utf-8"
                                    }
                                ],
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "movie_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "guest_session_id",
                                        "orig": "guest_session_id",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "session_id",
                                        "orig": "session_id",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "$action": "rating",
                                "exist": [
                                    "content_type",
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/account/{account_id}/favorite/movies",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "account"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "favorite"
                                },
                                {
                                    "lit": "movies"
                                }
                            ],
                            "parts": [
                                "3",
                                "account",
                                "{account_id}",
                                "favorite",
                                "movies"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": null
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1,
                                        "field": true
                                    },
                                    {
                                        "name": "session_id",
                                        "orig": "session_id",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "sort_by",
                                        "orig": "sort_by",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "created_at.asc"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/account/{account_id}/rated/movies",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "account"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "rated"
                                },
                                {
                                    "lit": "movies"
                                }
                            ],
                            "parts": [
                                "3",
                                "account",
                                "{account_id}",
                                "rated",
                                "movies"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": null
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1,
                                        "field": true
                                    },
                                    {
                                        "name": "session_id",
                                        "orig": "session_id",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "sort_by",
                                        "orig": "sort_by",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "created_at.asc"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/account/{account_id}/watchlist/movies",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "account"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "watchlist"
                                },
                                {
                                    "lit": "movies"
                                }
                            ],
                            "parts": [
                                "3",
                                "account",
                                "{account_id}",
                                "watchlist",
                                "movies"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": null
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1,
                                        "field": true
                                    },
                                    {
                                        "name": "session_id",
                                        "orig": "session_id",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "sort_by",
                                        "orig": "sort_by",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "created_at.asc"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/guest_session/{guest_session_id}/rated/movies",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "guest_session"
                                },
                                {
                                    "var": "guest_session_id"
                                },
                                {
                                    "lit": "rated"
                                },
                                {
                                    "lit": "movies"
                                }
                            ],
                            "parts": [
                                "3",
                                "guest_session",
                                "{guest_session_id}",
                                "rated",
                                "movies"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "guest_session_id",
                                        "orig": "guest_session_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1,
                                        "field": true
                                    },
                                    {
                                        "name": "sort_by",
                                        "orig": "sort_by",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "created_at.asc"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "guest_session_id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/search/movie",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "search"
                                },
                                {
                                    "lit": "movie"
                                }
                            ],
                            "parts": [
                                "3",
                                "search",
                                "movie"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "include_adult",
                                        "orig": "include_adult",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": false
                                    },
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1,
                                        "field": true
                                    },
                                    {
                                        "name": "primary_release_year",
                                        "orig": "primary_release_year",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "query",
                                        "orig": "query",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "reqd": true
                                    },
                                    {
                                        "name": "region",
                                        "orig": "region",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "year",
                                        "orig": "year",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "query"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/discover/movie",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "discover"
                                },
                                {
                                    "lit": "movie"
                                }
                            ],
                            "parts": [
                                "3",
                                "discover",
                                "movie"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "certification",
                                        "orig": "certification",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "certification_country",
                                        "orig": "certification_country",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "certification_gte",
                                        "orig": "certification.gte",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "certification_lte",
                                        "orig": "certification.lte",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "include_adult",
                                        "orig": "include_adult",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": false
                                    },
                                    {
                                        "name": "include_video",
                                        "orig": "include_video",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": false
                                    },
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1,
                                        "field": true
                                    },
                                    {
                                        "name": "primary_release_date_gte",
                                        "orig": "primary_release_date.gte",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "primary_release_date_lte",
                                        "orig": "primary_release_date.lte",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "primary_release_year",
                                        "orig": "primary_release_year",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "region",
                                        "orig": "region",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "release_date_gte",
                                        "orig": "release_date.gte",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "release_date_lte",
                                        "orig": "release_date.lte",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "sort_by",
                                        "orig": "sort_by",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "popularity.desc"
                                    },
                                    {
                                        "name": "vote_average_gte",
                                        "orig": "vote_average.gte",
                                        "type": "`$NUMBER`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "vote_average_lte",
                                        "orig": "vote_average.lte",
                                        "type": "`$NUMBER`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "vote_count_gte",
                                        "orig": "vote_count.gte",
                                        "type": "`$NUMBER`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "vote_count_lte",
                                        "orig": "vote_count.lte",
                                        "type": "`$NUMBER`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "watch_region",
                                        "orig": "watch_region",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "with_cast",
                                        "orig": "with_cast",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "with_company",
                                        "orig": "with_companies",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "with_crew",
                                        "orig": "with_crew",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "with_genre",
                                        "orig": "with_genres",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "with_keyword",
                                        "orig": "with_keywords",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "with_origin_country",
                                        "orig": "with_origin_country",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "with_original_language",
                                        "orig": "with_original_language",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "with_person",
                                        "orig": "with_people",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "with_release_type",
                                        "orig": "with_release_type",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "with_runtime_gte",
                                        "orig": "with_runtime.gte",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "with_runtime_lte",
                                        "orig": "with_runtime.lte",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "with_watch_monetization_type",
                                        "orig": "with_watch_monetization_types",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "with_watch_provider",
                                        "orig": "with_watch_providers",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "without_company",
                                        "orig": "without_companies",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "without_genre",
                                        "orig": "without_genres",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "without_keyword",
                                        "orig": "without_keywords",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "without_watch_provider",
                                        "orig": "without_watch_providers",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "year",
                                        "orig": "year",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {},
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/watch/providers/movie",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "watch"
                                },
                                {
                                    "lit": "providers"
                                },
                                {
                                    "lit": "movie"
                                }
                            ],
                            "parts": [
                                "3",
                                "watch",
                                "providers",
                                "movie"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    },
                                    {
                                        "name": "watch_region",
                                        "orig": "watch_region",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {},
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/movie/{movie_id}",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "movie"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "3",
                                "movie",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "movie_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "movie_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "append_to_response",
                                        "orig": "append_to_response",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/trending/movie/{time_window}",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "trending"
                                },
                                {
                                    "lit": "movie"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "3",
                                "trending",
                                "movie",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "time_window": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "time_window",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "day"
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/3/movie/{movie_id}/rating",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "movie"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "rating"
                                }
                            ],
                            "parts": [
                                "3",
                                "movie",
                                "{id}",
                                "rating"
                            ],
                            "rename": {
                                "param": {
                                    "movie_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "header": [
                                    {
                                        "name": "content_type",
                                        "orig": "Content-Type",
                                        "type": "`$STRING`",
                                        "kind": "header",
                                        "example": "application/json;charset=utf-8"
                                    }
                                ],
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "movie_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "guest_session_id",
                                        "orig": "guest_session_id",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "session_id",
                                        "orig": "session_id",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "$action": "rating",
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.account"
                    ]
                ]
            }
        },
        "movie_account_state": {
            "fields": [
                {
                    "name": "favorite",
                    "title": "Favorite",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "rated",
                    "title": "Rated",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "watchlist",
                    "title": "Watchlist",
                    "type": "`$BOOLEAN`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "movie_account_state",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/movie/{movie_id}/account_states",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "movie"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "account_states"
                                }
                            ],
                            "parts": [
                                "3",
                                "movie",
                                "{id}",
                                "account_states"
                            ],
                            "rename": {
                                "param": {
                                    "movie_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "movie_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "guest_session_id",
                                        "orig": "guest_session_id",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "session_id",
                                        "orig": "session_id",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "movie_alternative_title": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "iso_3166_1",
                    "title": "Iso 3166 1",
                    "type": "`$STRING`"
                },
                {
                    "name": "title",
                    "title": "Title",
                    "type": "`$STRING`"
                },
                {
                    "name": "type",
                    "title": "Type",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "movie_alternative_title",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/movie/{movie_id}/alternative_titles",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "movie"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "alternative_titles"
                                }
                            ],
                            "parts": [
                                "3",
                                "movie",
                                "{id}",
                                "alternative_titles"
                            ],
                            "rename": {
                                "param": {
                                    "movie_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.titles`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "movie_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "country",
                                        "orig": "country",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "movie_change": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "items",
                    "title": "Items",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "key",
                    "title": "Key",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "movie_change",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/movie/{movie_id}/changes",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "movie"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "changes"
                                }
                            ],
                            "parts": [
                                "3",
                                "movie",
                                "{id}",
                                "changes"
                            ],
                            "rename": {
                                "param": {
                                    "movie_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.changes`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "movie_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "end_date",
                                        "orig": "end_date",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "start_date",
                                        "orig": "start_date",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "movie_credit": {
            "fields": [
                {
                    "name": "cast",
                    "title": "Cast",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "crew",
                    "title": "Crew",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "movie_credit",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/movie/{movie_id}/credits",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "movie"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "credits"
                                }
                            ],
                            "parts": [
                                "3",
                                "movie",
                                "{id}",
                                "credits"
                            ],
                            "rename": {
                                "param": {
                                    "movie_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "movie_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "movie_external_id": {
            "fields": [
                {
                    "name": "facebook_id",
                    "title": "Facebook Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "imdb_id",
                    "title": "Imdb Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "instagram_id",
                    "title": "Instagram Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "twitter_id",
                    "title": "Twitter Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "wikidata_id",
                    "title": "Wikidata Id",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "movie_external_id",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/movie/{movie_id}/external_ids",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "movie"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "external_ids"
                                }
                            ],
                            "parts": [
                                "3",
                                "movie",
                                "{id}",
                                "external_ids"
                            ],
                            "rename": {
                                "param": {
                                    "movie_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "movie_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "movie_image": {
            "fields": [
                {
                    "name": "backdrops",
                    "title": "Backdrops",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "logos",
                    "title": "Logos",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "posters",
                    "title": "Posters",
                    "type": "`$ARRAY`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "movie_image",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/movie/{movie_id}/images",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "movie"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "images"
                                }
                            ],
                            "parts": [
                                "3",
                                "movie",
                                "{id}",
                                "images"
                            ],
                            "rename": {
                                "param": {
                                    "movie_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "movie_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "include_image_language",
                                        "orig": "include_image_language",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "movie_keyword": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "movie_keyword",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/movie/{movie_id}/keywords",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "movie"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "keywords"
                                }
                            ],
                            "parts": [
                                "3",
                                "movie",
                                "{id}",
                                "keywords"
                            ],
                            "rename": {
                                "param": {
                                    "movie_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.keywords`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "movie_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "movie_list": {
            "fields": [
                {
                    "name": "description",
                    "title": "Description",
                    "type": "`$STRING`"
                },
                {
                    "name": "favorite_count",
                    "title": "Favorite Count",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "iso_639_1",
                    "title": "Iso 639 1",
                    "type": "`$STRING`"
                },
                {
                    "name": "item_count",
                    "title": "Item Count",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "list_type",
                    "title": "List Type",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "poster_path",
                    "title": "Poster Path",
                    "type": "`$ANY`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "movie_list",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/movie/{movie_id}/lists",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "movie"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "lists"
                                }
                            ],
                            "parts": [
                                "3",
                                "movie",
                                "{id}",
                                "lists"
                            ],
                            "rename": {
                                "param": {
                                    "movie_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "movie_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "movie_recommendation": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "movie_recommendation",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/movie/{movie_id}/recommendations",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "movie"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "recommendations"
                                }
                            ],
                            "parts": [
                                "3",
                                "movie",
                                "{id}",
                                "recommendations"
                            ],
                            "rename": {
                                "param": {
                                    "movie_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "movie_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "movie_release_date": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "iso_3166_1",
                    "title": "Iso 3166 1",
                    "type": "`$STRING`"
                },
                {
                    "name": "release_dates",
                    "title": "Release Dates",
                    "type": "`$ARRAY`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "movie_release_date",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/movie/{movie_id}/release_dates",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "movie"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "release_dates"
                                }
                            ],
                            "parts": [
                                "3",
                                "movie",
                                "{id}",
                                "release_dates"
                            ],
                            "rename": {
                                "param": {
                                    "movie_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "movie_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "movie_review": {
            "fields": [
                {
                    "name": "author",
                    "title": "Author",
                    "type": "`$STRING`"
                },
                {
                    "name": "author_details",
                    "title": "Author Details",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "content",
                    "title": "Content",
                    "type": "`$STRING`"
                },
                {
                    "name": "created_at",
                    "title": "Created At",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "updated_at",
                    "title": "Updated At",
                    "type": "`$STRING`"
                },
                {
                    "name": "url",
                    "title": "Url",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "movie_review",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/movie/{movie_id}/reviews",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "movie"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "reviews"
                                }
                            ],
                            "parts": [
                                "3",
                                "movie",
                                "{id}",
                                "reviews"
                            ],
                            "rename": {
                                "param": {
                                    "movie_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "movie_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "movie_similar": {
            "fields": [
                {
                    "name": "adult",
                    "title": "Adult",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "backdrop_path",
                    "title": "Backdrop Path",
                    "type": "`$STRING`"
                },
                {
                    "name": "genre_ids",
                    "title": "Genre Ids",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "original_language",
                    "title": "Original Language",
                    "type": "`$STRING`"
                },
                {
                    "name": "original_title",
                    "title": "Original Title",
                    "type": "`$STRING`"
                },
                {
                    "name": "overview",
                    "title": "Overview",
                    "type": "`$STRING`"
                },
                {
                    "name": "popularity",
                    "title": "Popularity",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "poster_path",
                    "title": "Poster Path",
                    "type": "`$STRING`"
                },
                {
                    "name": "release_date",
                    "title": "Release Date",
                    "type": "`$STRING`"
                },
                {
                    "name": "title",
                    "title": "Title",
                    "type": "`$STRING`"
                },
                {
                    "name": "video",
                    "title": "Video",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "vote_average",
                    "title": "Vote Average",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "vote_count",
                    "title": "Vote Count",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "movie_similar",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/movie/{movie_id}/similar",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "movie"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "similar"
                                }
                            ],
                            "parts": [
                                "3",
                                "movie",
                                "{id}",
                                "similar"
                            ],
                            "rename": {
                                "param": {
                                    "movie_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "movie_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "movie_translation": {
            "fields": [
                {
                    "name": "data",
                    "title": "Data",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "english_name",
                    "title": "English Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "iso_3166_1",
                    "title": "Iso 3166 1",
                    "type": "`$STRING`"
                },
                {
                    "name": "iso_639_1",
                    "title": "Iso 639 1",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "movie_translation",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/movie/{movie_id}/translations",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "movie"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "translations"
                                }
                            ],
                            "parts": [
                                "3",
                                "movie",
                                "{id}",
                                "translations"
                            ],
                            "rename": {
                                "param": {
                                    "movie_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.translations`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "movie_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "movie_video": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "iso_3166_1",
                    "title": "Iso 3166 1",
                    "type": "`$STRING`"
                },
                {
                    "name": "iso_639_1",
                    "title": "Iso 639 1",
                    "type": "`$STRING`"
                },
                {
                    "name": "key",
                    "title": "Key",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "official",
                    "title": "Official",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "published_at",
                    "title": "Published At",
                    "type": "`$STRING`"
                },
                {
                    "name": "site",
                    "title": "Site",
                    "type": "`$STRING`"
                },
                {
                    "name": "size",
                    "title": "Size",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "type",
                    "title": "Type",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "movie_video",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/movie/{movie_id}/videos",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "movie"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "videos"
                                }
                            ],
                            "parts": [
                                "3",
                                "movie",
                                "{id}",
                                "videos"
                            ],
                            "rename": {
                                "param": {
                                    "movie_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "movie_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "multi": {
            "fields": [
                {
                    "name": "adult",
                    "title": "Adult",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "backdrop_path",
                    "title": "Backdrop Path",
                    "type": "`$STRING`"
                },
                {
                    "name": "genre_ids",
                    "title": "Genre Ids",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "media_type",
                    "title": "Media Type",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "original_language",
                    "title": "Original Language",
                    "type": "`$STRING`"
                },
                {
                    "name": "original_name",
                    "title": "Original Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "original_title",
                    "title": "Original Title",
                    "type": "`$STRING`"
                },
                {
                    "name": "overview",
                    "title": "Overview",
                    "type": "`$STRING`"
                },
                {
                    "name": "popularity",
                    "title": "Popularity",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "poster_path",
                    "title": "Poster Path",
                    "type": "`$STRING`"
                },
                {
                    "name": "release_date",
                    "title": "Release Date",
                    "type": "`$STRING`"
                },
                {
                    "name": "title",
                    "title": "Title",
                    "type": "`$STRING`"
                },
                {
                    "name": "video",
                    "title": "Video",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "vote_average",
                    "title": "Vote Average",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "vote_count",
                    "title": "Vote Count",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "multi",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/search/multi",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "search"
                                },
                                {
                                    "lit": "multi"
                                }
                            ],
                            "parts": [
                                "3",
                                "search",
                                "multi"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "include_adult",
                                        "orig": "include_adult",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": false
                                    },
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "query",
                                        "orig": "query",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "query"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "n4n": {
            "fields": [
                {
                    "name": "RAW_BODY",
                    "title": "Raw Body",
                    "type": "`$STRING`",
                    "req": true,
                    "format": "json"
                },
                {
                    "name": "session_id",
                    "title": "Session Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`"
                }
            ],
            "name": "n4n",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/3/authentication/session/convert/4",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "authentication"
                                },
                                {
                                    "lit": "session"
                                },
                                {
                                    "lit": "convert"
                                },
                                {
                                    "lit": "4"
                                }
                            ],
                            "parts": [
                                "3",
                                "authentication",
                                "session",
                                "convert",
                                "4"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {},
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "network": {
            "fields": [
                {
                    "name": "headquarters",
                    "title": "Headquarters",
                    "type": "`$STRING`"
                },
                {
                    "name": "homepage",
                    "title": "Homepage",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "logo_path",
                    "title": "Logo Path",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "origin_country",
                    "title": "Origin Country",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "network",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/network/{network_id}",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "network"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "3",
                                "network",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "network_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "network_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "network_alternative_name": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "type",
                    "title": "Type",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "network_alternative_name",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/network/{network_id}/alternative_names",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "network"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "alternative_names"
                                }
                            ],
                            "parts": [
                                "3",
                                "network",
                                "{id}",
                                "alternative_names"
                            ],
                            "rename": {
                                "param": {
                                    "network_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "network_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "network_image": {
            "fields": [
                {
                    "name": "aspect_ratio",
                    "title": "Aspect Ratio",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "file_path",
                    "title": "File Path",
                    "type": "`$STRING`"
                },
                {
                    "name": "file_type",
                    "title": "File Type",
                    "type": "`$STRING`"
                },
                {
                    "name": "height",
                    "title": "Height",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "vote_average",
                    "title": "Vote Average",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "vote_count",
                    "title": "Vote Count",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "width",
                    "title": "Width",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "network_image",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/network/{network_id}/images",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "network"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "images"
                                }
                            ],
                            "parts": [
                                "3",
                                "network",
                                "{id}",
                                "images"
                            ],
                            "rename": {
                                "param": {
                                    "network_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.logos`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "network_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "new": {
            "fields": [
                {
                    "name": "RAW_BODY",
                    "title": "Raw Body",
                    "type": "`$STRING`",
                    "req": true,
                    "format": "json"
                },
                {
                    "name": "expires_at",
                    "title": "Expires At",
                    "type": "`$STRING`"
                },
                {
                    "name": "guest_session_id",
                    "title": "Guest Session Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "request_token",
                    "title": "Request Token",
                    "type": "`$STRING`"
                },
                {
                    "name": "session_id",
                    "title": "Session Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`"
                }
            ],
            "name": "new",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/3/authentication/session/new",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "authentication"
                                },
                                {
                                    "lit": "session"
                                },
                                {
                                    "lit": "new"
                                }
                            ],
                            "parts": [
                                "3",
                                "authentication",
                                "session",
                                "new"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {},
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/authentication/guest_session/new",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "authentication"
                                },
                                {
                                    "lit": "guest_session"
                                },
                                {
                                    "lit": "new"
                                }
                            ],
                            "parts": [
                                "3",
                                "authentication",
                                "guest_session",
                                "new"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {},
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/authentication/token/new",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "authentication"
                                },
                                {
                                    "lit": "token"
                                },
                                {
                                    "lit": "new"
                                }
                            ],
                            "parts": [
                                "3",
                                "authentication",
                                "token",
                                "new"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {},
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "now_playing": {
            "fields": [
                {
                    "name": "adult",
                    "title": "Adult",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "backdrop_path",
                    "title": "Backdrop Path",
                    "type": "`$STRING`"
                },
                {
                    "name": "genre_ids",
                    "title": "Genre Ids",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "original_language",
                    "title": "Original Language",
                    "type": "`$STRING`"
                },
                {
                    "name": "original_title",
                    "title": "Original Title",
                    "type": "`$STRING`"
                },
                {
                    "name": "overview",
                    "title": "Overview",
                    "type": "`$STRING`"
                },
                {
                    "name": "popularity",
                    "title": "Popularity",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "poster_path",
                    "title": "Poster Path",
                    "type": "`$STRING`"
                },
                {
                    "name": "release_date",
                    "title": "Release Date",
                    "type": "`$STRING`"
                },
                {
                    "name": "title",
                    "title": "Title",
                    "type": "`$STRING`"
                },
                {
                    "name": "video",
                    "title": "Video",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "vote_average",
                    "title": "Vote Average",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "vote_count",
                    "title": "Vote Count",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "now_playing",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/movie/now_playing",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "movie"
                                },
                                {
                                    "lit": "now_playing"
                                }
                            ],
                            "parts": [
                                "3",
                                "movie",
                                "now_playing"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "region",
                                        "orig": "region",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {},
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "on_the_air": {
            "fields": [
                {
                    "name": "backdrop_path",
                    "title": "Backdrop Path",
                    "type": "`$STRING`"
                },
                {
                    "name": "first_air_date",
                    "title": "First Air Date",
                    "type": "`$STRING`"
                },
                {
                    "name": "genre_ids",
                    "title": "Genre Ids",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "origin_country",
                    "title": "Origin Country",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "original_language",
                    "title": "Original Language",
                    "type": "`$STRING`"
                },
                {
                    "name": "original_name",
                    "title": "Original Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "overview",
                    "title": "Overview",
                    "type": "`$STRING`"
                },
                {
                    "name": "popularity",
                    "title": "Popularity",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "poster_path",
                    "title": "Poster Path",
                    "type": "`$STRING`"
                },
                {
                    "name": "vote_average",
                    "title": "Vote Average",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "vote_count",
                    "title": "Vote Count",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "on_the_air",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/tv/on_the_air",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "tv"
                                },
                                {
                                    "lit": "on_the_air"
                                }
                            ],
                            "parts": [
                                "3",
                                "tv",
                                "on_the_air"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "timezone",
                                        "orig": "timezone",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {},
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "person": {
            "fields": [
                {
                    "name": "adult",
                    "title": "Adult",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "also_known_as",
                    "title": "Also Known As",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "biography",
                    "title": "Biography",
                    "type": "`$STRING`"
                },
                {
                    "name": "birthday",
                    "title": "Birthday",
                    "type": "`$STRING`"
                },
                {
                    "name": "deathday",
                    "title": "Deathday",
                    "type": "`$ANY`"
                },
                {
                    "name": "gender",
                    "title": "Gender",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "homepage",
                    "title": "Homepage",
                    "type": "`$ANY`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "imdb_id",
                    "title": "Imdb Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "known_for",
                    "title": "Known For",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "known_for_department",
                    "title": "Known For Department",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "original_name",
                    "title": "Original Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "page",
                    "title": "Page",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "place_of_birth",
                    "title": "Place Of Birth",
                    "type": "`$STRING`"
                },
                {
                    "name": "popularity",
                    "title": "Popularity",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "profile_path",
                    "title": "Profile Path",
                    "type": "`$STRING`"
                },
                {
                    "name": "results",
                    "title": "Results",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "total_pages",
                    "title": "Total Pages",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "total_results",
                    "title": "Total Results",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "person",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/search/person",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "search"
                                },
                                {
                                    "lit": "person"
                                }
                            ],
                            "parts": [
                                "3",
                                "search",
                                "person"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "include_adult",
                                        "orig": "include_adult",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": false
                                    },
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1,
                                        "field": true
                                    },
                                    {
                                        "name": "query",
                                        "orig": "query",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "query"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/person/{person_id}",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "person"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "3",
                                "person",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "person_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "person_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "append_to_response",
                                        "orig": "append_to_response",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/trending/person/{time_window}",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "trending"
                                },
                                {
                                    "lit": "person"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "3",
                                "trending",
                                "person",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "time_window": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "time_window",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "day"
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "person_change": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "items",
                    "title": "Items",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "key",
                    "title": "Key",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "person_change",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/person/{person_id}/changes",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "person"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "changes"
                                }
                            ],
                            "parts": [
                                "3",
                                "person",
                                "{id}",
                                "changes"
                            ],
                            "rename": {
                                "param": {
                                    "person_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.changes`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "person_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "end_date",
                                        "orig": "end_date",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "start_date",
                                        "orig": "start_date",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "person_combined_credit": {
            "fields": [
                {
                    "name": "cast",
                    "title": "Cast",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "crew",
                    "title": "Crew",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "person_combined_credit",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/person/{person_id}/combined_credits",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "person"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "combined_credits"
                                }
                            ],
                            "parts": [
                                "3",
                                "person",
                                "{id}",
                                "combined_credits"
                            ],
                            "rename": {
                                "param": {
                                    "person_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "person_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "person_external_id": {
            "fields": [
                {
                    "name": "facebook_id",
                    "title": "Facebook Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "freebase_id",
                    "title": "Freebase Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "freebase_mid",
                    "title": "Freebase Mid",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "imdb_id",
                    "title": "Imdb Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "instagram_id",
                    "title": "Instagram Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "tiktok_id",
                    "title": "Tiktok Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "tvrage_id",
                    "title": "Tvrage Id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "twitter_id",
                    "title": "Twitter Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "wikidata_id",
                    "title": "Wikidata Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "youtube_id",
                    "title": "Youtube Id",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "person_external_id",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/person/{person_id}/external_ids",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "person"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "external_ids"
                                }
                            ],
                            "parts": [
                                "3",
                                "person",
                                "{id}",
                                "external_ids"
                            ],
                            "rename": {
                                "param": {
                                    "person_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "person_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "person_image": {
            "fields": [
                {
                    "name": "aspect_ratio",
                    "title": "Aspect Ratio",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "file_path",
                    "title": "File Path",
                    "type": "`$STRING`"
                },
                {
                    "name": "height",
                    "title": "Height",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "iso_639_1",
                    "title": "Iso 639 1",
                    "type": "`$ANY`"
                },
                {
                    "name": "vote_average",
                    "title": "Vote Average",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "vote_count",
                    "title": "Vote Count",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "width",
                    "title": "Width",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "person_image",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/person/{person_id}/images",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "person"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "images"
                                }
                            ],
                            "parts": [
                                "3",
                                "person",
                                "{id}",
                                "images"
                            ],
                            "rename": {
                                "param": {
                                    "person_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.profiles`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "person_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "person_movie_credit": {
            "fields": [
                {
                    "name": "cast",
                    "title": "Cast",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "crew",
                    "title": "Crew",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "person_movie_credit",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/person/{person_id}/movie_credits",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "person"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "movie_credits"
                                }
                            ],
                            "parts": [
                                "3",
                                "person",
                                "{id}",
                                "movie_credits"
                            ],
                            "rename": {
                                "param": {
                                    "person_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "person_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "person_tagged_image": {
            "fields": [
                {
                    "name": "aspect_ratio",
                    "title": "Aspect Ratio",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "file_path",
                    "title": "File Path",
                    "type": "`$STRING`"
                },
                {
                    "name": "height",
                    "title": "Height",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "image_type",
                    "title": "Image Type",
                    "type": "`$STRING`"
                },
                {
                    "name": "iso_639_1",
                    "title": "Iso 639 1",
                    "type": "`$STRING`"
                },
                {
                    "name": "media",
                    "title": "Media",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "media_type",
                    "title": "Media Type",
                    "type": "`$STRING`"
                },
                {
                    "name": "vote_average",
                    "title": "Vote Average",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "vote_count",
                    "title": "Vote Count",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "width",
                    "title": "Width",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "person_tagged_image",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/person/{person_id}/tagged_images",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "person"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "tagged_images"
                                }
                            ],
                            "parts": [
                                "3",
                                "person",
                                "{id}",
                                "tagged_images"
                            ],
                            "rename": {
                                "param": {
                                    "person_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "person_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "person_translation": {
            "fields": [
                {
                    "name": "data",
                    "title": "Data",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "english_name",
                    "title": "English Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "iso_3166_1",
                    "title": "Iso 3166 1",
                    "type": "`$STRING`"
                },
                {
                    "name": "iso_639_1",
                    "title": "Iso 639 1",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "person_translation",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/person/{person_id}/translations",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "person"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "translations"
                                }
                            ],
                            "parts": [
                                "3",
                                "person",
                                "{id}",
                                "translations"
                            ],
                            "rename": {
                                "param": {
                                    "person_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.translations`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "person_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "person_tv_credit": {
            "fields": [
                {
                    "name": "cast",
                    "title": "Cast",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "crew",
                    "title": "Crew",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "person_tv_credit",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/person/{person_id}/tv_credits",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "person"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "tv_credits"
                                }
                            ],
                            "parts": [
                                "3",
                                "person",
                                "{id}",
                                "tv_credits"
                            ],
                            "rename": {
                                "param": {
                                    "person_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "person_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "popular": {
            "fields": [
                {
                    "name": "adult",
                    "title": "Adult",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "backdrop_path",
                    "title": "Backdrop Path",
                    "type": "`$STRING`"
                },
                {
                    "name": "first_air_date",
                    "title": "First Air Date",
                    "type": "`$STRING`"
                },
                {
                    "name": "gender",
                    "title": "Gender",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "genre_ids",
                    "title": "Genre Ids",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "known_for",
                    "title": "Known For",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "known_for_department",
                    "title": "Known For Department",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "origin_country",
                    "title": "Origin Country",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "original_language",
                    "title": "Original Language",
                    "type": "`$STRING`"
                },
                {
                    "name": "original_name",
                    "title": "Original Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "original_title",
                    "title": "Original Title",
                    "type": "`$STRING`"
                },
                {
                    "name": "overview",
                    "title": "Overview",
                    "type": "`$STRING`"
                },
                {
                    "name": "popularity",
                    "title": "Popularity",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "poster_path",
                    "title": "Poster Path",
                    "type": "`$STRING`"
                },
                {
                    "name": "profile_path",
                    "title": "Profile Path",
                    "type": "`$STRING`"
                },
                {
                    "name": "release_date",
                    "title": "Release Date",
                    "type": "`$STRING`"
                },
                {
                    "name": "title",
                    "title": "Title",
                    "type": "`$STRING`"
                },
                {
                    "name": "video",
                    "title": "Video",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "vote_average",
                    "title": "Vote Average",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "vote_count",
                    "title": "Vote Count",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "popular",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/movie/popular",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "movie"
                                },
                                {
                                    "lit": "popular"
                                }
                            ],
                            "parts": [
                                "3",
                                "movie",
                                "popular"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "region",
                                        "orig": "region",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {},
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/person/popular",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "person"
                                },
                                {
                                    "lit": "popular"
                                }
                            ],
                            "parts": [
                                "3",
                                "person",
                                "popular"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    }
                                ]
                            },
                            "select": {},
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/tv/popular",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "tv"
                                },
                                {
                                    "lit": "popular"
                                }
                            ],
                            "parts": [
                                "3",
                                "tv",
                                "popular"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    }
                                ]
                            },
                            "select": {},
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "primary_translation": {
            "fields": [],
            "name": "primary_translation",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/configuration/primary_translations",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "configuration"
                                },
                                {
                                    "lit": "primary_translations"
                                }
                            ],
                            "parts": [
                                "3",
                                "configuration",
                                "primary_translations"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {},
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "provider": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "results",
                    "title": "Results",
                    "type": "`$OBJECT`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "provider",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/tv/{series_id}/season/{season_number}/watch/providers",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "tv"
                                },
                                {
                                    "var": "tv_id"
                                },
                                {
                                    "lit": "season"
                                },
                                {
                                    "var": "season_id"
                                },
                                {
                                    "lit": "watch"
                                },
                                {
                                    "lit": "providers"
                                }
                            ],
                            "parts": [
                                "3",
                                "tv",
                                "{tv_id}",
                                "season",
                                "{season_id}",
                                "watch",
                                "providers"
                            ],
                            "rename": {
                                "param": {
                                    "season_number": "season_id",
                                    "series_id": "tv_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "season_id",
                                        "orig": "season_number",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "tv_id",
                                        "orig": "series_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "season_id",
                                    "tv_id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/movie/{movie_id}/watch/providers",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "movie"
                                },
                                {
                                    "var": "movie_id"
                                },
                                {
                                    "lit": "watch"
                                },
                                {
                                    "lit": "providers"
                                }
                            ],
                            "parts": [
                                "3",
                                "movie",
                                "{movie_id}",
                                "watch",
                                "providers"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "movie_id",
                                        "orig": "movie_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "movie_id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/tv/{series_id}/watch/providers",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "tv"
                                },
                                {
                                    "var": "tv_id"
                                },
                                {
                                    "lit": "watch"
                                },
                                {
                                    "lit": "providers"
                                }
                            ],
                            "parts": [
                                "3",
                                "tv",
                                "{tv_id}",
                                "watch",
                                "providers"
                            ],
                            "rename": {
                                "param": {
                                    "series_id": "tv_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "tv_id",
                                        "orig": "series_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "tv_id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.movie"
                    ],
                    [
                        "$.main.kit.entity.season"
                    ]
                ]
            }
        },
        "region": {
            "fields": [
                {
                    "name": "english_name",
                    "title": "English Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "iso_3166_1",
                    "title": "Iso 3166 1",
                    "type": "`$STRING`"
                },
                {
                    "name": "native_name",
                    "title": "Native Name",
                    "type": "`$STRING`"
                }
            ],
            "name": "region",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/watch/providers/regions",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "watch"
                                },
                                {
                                    "lit": "providers"
                                },
                                {
                                    "lit": "regions"
                                }
                            ],
                            "parts": [
                                "3",
                                "watch",
                                "providers",
                                "regions"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    }
                                ]
                            },
                            "select": {},
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "review": {
            "fields": [
                {
                    "name": "author",
                    "title": "Author",
                    "type": "`$STRING`"
                },
                {
                    "name": "author_details",
                    "title": "Author Details",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "content",
                    "title": "Content",
                    "type": "`$STRING`"
                },
                {
                    "name": "created_at",
                    "title": "Created At",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "iso_639_1",
                    "title": "Iso 639 1",
                    "type": "`$STRING`"
                },
                {
                    "name": "media_id",
                    "title": "Media Id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "media_title",
                    "title": "Media Title",
                    "type": "`$STRING`"
                },
                {
                    "name": "media_type",
                    "title": "Media Type",
                    "type": "`$STRING`"
                },
                {
                    "name": "updated_at",
                    "title": "Updated At",
                    "type": "`$STRING`"
                },
                {
                    "name": "url",
                    "title": "Url",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "review",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/review/{review_id}",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "review"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "3",
                                "review",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "review_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "review_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "season": {
            "fields": [
                {
                    "name": "air_date",
                    "title": "Air Date",
                    "type": "`$STRING`"
                },
                {
                    "name": "episodes",
                    "title": "Episodes",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "networks",
                    "title": "Networks",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "overview",
                    "title": "Overview",
                    "type": "`$STRING`"
                },
                {
                    "name": "poster_path",
                    "title": "Poster Path",
                    "type": "`$STRING`"
                },
                {
                    "name": "season_number",
                    "title": "Season Number",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "vote_average",
                    "title": "Vote Average",
                    "type": "`$NUMBER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "season",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/tv/{series_id}/season/{season_number}",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "tv"
                                },
                                {
                                    "var": "tv_id"
                                },
                                {
                                    "lit": "season"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "3",
                                "tv",
                                "{tv_id}",
                                "season",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "season_number": "id",
                                    "series_id": "tv_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "season_number",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "tv_id",
                                        "orig": "series_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "append_to_response",
                                        "orig": "append_to_response",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id",
                                    "tv_id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "season_account_state": {
            "fields": [
                {
                    "name": "episode_number",
                    "title": "Episode Number",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "rated",
                    "title": "Rated",
                    "type": "`$OBJECT`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "season_account_state",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/tv/{series_id}/season/{season_number}/account_states",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "tv"
                                },
                                {
                                    "var": "tv_id"
                                },
                                {
                                    "lit": "season"
                                },
                                {
                                    "var": "season_number"
                                },
                                {
                                    "lit": "account_states"
                                }
                            ],
                            "parts": [
                                "3",
                                "tv",
                                "{tv_id}",
                                "season",
                                "{season_number}",
                                "account_states"
                            ],
                            "rename": {
                                "param": {
                                    "series_id": "tv_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "season_number",
                                        "orig": "season_number",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "tv_id",
                                        "orig": "series_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "guest_session_id",
                                        "orig": "guest_session_id",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "session_id",
                                        "orig": "session_id",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "season_number",
                                    "tv_id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.season"
                    ]
                ]
            }
        },
        "season_aggregate_credit": {
            "fields": [
                {
                    "name": "cast",
                    "title": "Cast",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "crew",
                    "title": "Crew",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "season_aggregate_credit",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/tv/{series_id}/season/{season_number}/aggregate_credits",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "tv"
                                },
                                {
                                    "var": "tv_id"
                                },
                                {
                                    "lit": "season"
                                },
                                {
                                    "var": "season_number"
                                },
                                {
                                    "lit": "aggregate_credits"
                                }
                            ],
                            "parts": [
                                "3",
                                "tv",
                                "{tv_id}",
                                "season",
                                "{season_number}",
                                "aggregate_credits"
                            ],
                            "rename": {
                                "param": {
                                    "series_id": "tv_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "season_number",
                                        "orig": "season_number",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "tv_id",
                                        "orig": "series_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "season_number",
                                    "tv_id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.season"
                    ]
                ]
            }
        },
        "season_change": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "items",
                    "title": "Items",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "key",
                    "title": "Key",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "season_change",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/tv/season/{season_id}/changes",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "tv"
                                },
                                {
                                    "lit": "season"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "changes"
                                }
                            ],
                            "parts": [
                                "3",
                                "tv",
                                "season",
                                "{id}",
                                "changes"
                            ],
                            "rename": {
                                "param": {
                                    "season_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.changes`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "season_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "end_date",
                                        "orig": "end_date",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "start_date",
                                        "orig": "start_date",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "season_credit": {
            "fields": [
                {
                    "name": "cast",
                    "title": "Cast",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "crew",
                    "title": "Crew",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "season_credit",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/tv/{series_id}/season/{season_number}/credits",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "tv"
                                },
                                {
                                    "var": "tv_id"
                                },
                                {
                                    "lit": "season"
                                },
                                {
                                    "var": "season_number"
                                },
                                {
                                    "lit": "credits"
                                }
                            ],
                            "parts": [
                                "3",
                                "tv",
                                "{tv_id}",
                                "season",
                                "{season_number}",
                                "credits"
                            ],
                            "rename": {
                                "param": {
                                    "series_id": "tv_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "season_number",
                                        "orig": "season_number",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "tv_id",
                                        "orig": "series_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "season_number",
                                    "tv_id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.season"
                    ]
                ]
            }
        },
        "season_external_id": {
            "fields": [
                {
                    "name": "freebase_id",
                    "title": "Freebase Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "freebase_mid",
                    "title": "Freebase Mid",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "tvdb_id",
                    "title": "Tvdb Id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "tvrage_id",
                    "title": "Tvrage Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "wikidata_id",
                    "title": "Wikidata Id",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "season_external_id",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/tv/{series_id}/season/{season_number}/external_ids",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "tv"
                                },
                                {
                                    "var": "tv_id"
                                },
                                {
                                    "lit": "season"
                                },
                                {
                                    "var": "season_number"
                                },
                                {
                                    "lit": "external_ids"
                                }
                            ],
                            "parts": [
                                "3",
                                "tv",
                                "{tv_id}",
                                "season",
                                "{season_number}",
                                "external_ids"
                            ],
                            "rename": {
                                "param": {
                                    "series_id": "tv_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "season_number",
                                        "orig": "season_number",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "tv_id",
                                        "orig": "series_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "season_number",
                                    "tv_id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.season"
                    ]
                ]
            }
        },
        "season_image": {
            "fields": [
                {
                    "name": "aspect_ratio",
                    "title": "Aspect Ratio",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "file_path",
                    "title": "File Path",
                    "type": "`$STRING`"
                },
                {
                    "name": "height",
                    "title": "Height",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "iso_639_1",
                    "title": "Iso 639 1",
                    "type": "`$STRING`"
                },
                {
                    "name": "vote_average",
                    "title": "Vote Average",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "vote_count",
                    "title": "Vote Count",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "width",
                    "title": "Width",
                    "type": "`$INTEGER`"
                }
            ],
            "name": "season_image",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/tv/{series_id}/season/{season_number}/images",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "tv"
                                },
                                {
                                    "var": "tv_id"
                                },
                                {
                                    "lit": "season"
                                },
                                {
                                    "var": "season_number"
                                },
                                {
                                    "lit": "images"
                                }
                            ],
                            "parts": [
                                "3",
                                "tv",
                                "{tv_id}",
                                "season",
                                "{season_number}",
                                "images"
                            ],
                            "rename": {
                                "param": {
                                    "series_id": "tv_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.posters`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "season_number",
                                        "orig": "season_number",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "tv_id",
                                        "orig": "series_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "include_image_language",
                                        "orig": "include_image_language",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "season_number",
                                    "tv_id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.season"
                    ]
                ]
            }
        },
        "season_translation": {
            "fields": [
                {
                    "name": "data",
                    "title": "Data",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "english_name",
                    "title": "English Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "iso_3166_1",
                    "title": "Iso 3166 1",
                    "type": "`$STRING`"
                },
                {
                    "name": "iso_639_1",
                    "title": "Iso 639 1",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`"
                }
            ],
            "name": "season_translation",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/tv/{series_id}/season/{season_number}/translations",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "tv"
                                },
                                {
                                    "var": "tv_id"
                                },
                                {
                                    "lit": "season"
                                },
                                {
                                    "var": "season_number"
                                },
                                {
                                    "lit": "translations"
                                }
                            ],
                            "parts": [
                                "3",
                                "tv",
                                "{tv_id}",
                                "season",
                                "{season_number}",
                                "translations"
                            ],
                            "rename": {
                                "param": {
                                    "series_id": "tv_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.translations`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "season_number",
                                        "orig": "season_number",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "tv_id",
                                        "orig": "series_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "season_number",
                                    "tv_id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.season"
                    ]
                ]
            }
        },
        "season_video": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "iso_3166_1",
                    "title": "Iso 3166 1",
                    "type": "`$STRING`"
                },
                {
                    "name": "iso_639_1",
                    "title": "Iso 639 1",
                    "type": "`$STRING`"
                },
                {
                    "name": "key",
                    "title": "Key",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "official",
                    "title": "Official",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "published_at",
                    "title": "Published At",
                    "type": "`$STRING`"
                },
                {
                    "name": "site",
                    "title": "Site",
                    "type": "`$STRING`"
                },
                {
                    "name": "size",
                    "title": "Size",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "type",
                    "title": "Type",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "season_video",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/tv/{series_id}/season/{season_number}/videos",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "tv"
                                },
                                {
                                    "var": "tv_id"
                                },
                                {
                                    "lit": "season"
                                },
                                {
                                    "var": "season_number"
                                },
                                {
                                    "lit": "videos"
                                }
                            ],
                            "parts": [
                                "3",
                                "tv",
                                "{tv_id}",
                                "season",
                                "{season_number}",
                                "videos"
                            ],
                            "rename": {
                                "param": {
                                    "series_id": "tv_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "season_number",
                                        "orig": "season_number",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "tv_id",
                                        "orig": "series_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "include_video_language",
                                        "orig": "include_video_language",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "season_number",
                                    "tv_id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.season"
                    ]
                ]
            }
        },
        "session": {
            "fields": [],
            "name": "session",
            "op": {
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/3/authentication/session",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "authentication"
                                },
                                {
                                    "lit": "session"
                                }
                            ],
                            "parts": [
                                "3",
                                "authentication",
                                "session"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {},
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "timezone": {
            "fields": [
                {
                    "name": "iso_3166_1",
                    "title": "Iso 3166 1",
                    "type": "`$STRING`"
                },
                {
                    "name": "zones",
                    "title": "Zones",
                    "type": "`$ARRAY`"
                }
            ],
            "name": "timezone",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/configuration/timezones",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "configuration"
                                },
                                {
                                    "lit": "timezones"
                                }
                            ],
                            "parts": [
                                "3",
                                "configuration",
                                "timezones"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {},
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "top_rated": {
            "fields": [
                {
                    "name": "adult",
                    "title": "Adult",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "backdrop_path",
                    "title": "Backdrop Path",
                    "type": "`$STRING`"
                },
                {
                    "name": "first_air_date",
                    "title": "First Air Date",
                    "type": "`$STRING`"
                },
                {
                    "name": "genre_ids",
                    "title": "Genre Ids",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "origin_country",
                    "title": "Origin Country",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "original_language",
                    "title": "Original Language",
                    "type": "`$STRING`"
                },
                {
                    "name": "original_name",
                    "title": "Original Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "original_title",
                    "title": "Original Title",
                    "type": "`$STRING`"
                },
                {
                    "name": "overview",
                    "title": "Overview",
                    "type": "`$STRING`"
                },
                {
                    "name": "popularity",
                    "title": "Popularity",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "poster_path",
                    "title": "Poster Path",
                    "type": "`$STRING`"
                },
                {
                    "name": "release_date",
                    "title": "Release Date",
                    "type": "`$STRING`"
                },
                {
                    "name": "title",
                    "title": "Title",
                    "type": "`$STRING`"
                },
                {
                    "name": "video",
                    "title": "Video",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "vote_average",
                    "title": "Vote Average",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "vote_count",
                    "title": "Vote Count",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "top_rated",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/movie/top_rated",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "movie"
                                },
                                {
                                    "lit": "top_rated"
                                }
                            ],
                            "parts": [
                                "3",
                                "movie",
                                "top_rated"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "region",
                                        "orig": "region",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {},
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/tv/top_rated",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "tv"
                                },
                                {
                                    "lit": "top_rated"
                                }
                            ],
                            "parts": [
                                "3",
                                "tv",
                                "top_rated"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    }
                                ]
                            },
                            "select": {},
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tv_account_state": {
            "fields": [
                {
                    "name": "favorite",
                    "title": "Favorite",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "rated",
                    "title": "Rated",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "watchlist",
                    "title": "Watchlist",
                    "type": "`$BOOLEAN`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "tv_account_state",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/tv/{series_id}/account_states",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "tv"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "account_states"
                                }
                            ],
                            "parts": [
                                "3",
                                "tv",
                                "{id}",
                                "account_states"
                            ],
                            "rename": {
                                "param": {
                                    "series_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "series_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "guest_session_id",
                                        "orig": "guest_session_id",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "session_id",
                                        "orig": "session_id",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tv_aggregate_credit": {
            "fields": [
                {
                    "name": "cast",
                    "title": "Cast",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "crew",
                    "title": "Crew",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "tv_aggregate_credit",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/tv/{series_id}/aggregate_credits",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "tv"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "aggregate_credits"
                                }
                            ],
                            "parts": [
                                "3",
                                "tv",
                                "{id}",
                                "aggregate_credits"
                            ],
                            "rename": {
                                "param": {
                                    "series_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "series_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tv_alternative_title": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "iso_3166_1",
                    "title": "Iso 3166 1",
                    "type": "`$STRING`"
                },
                {
                    "name": "title",
                    "title": "Title",
                    "type": "`$STRING`"
                },
                {
                    "name": "type",
                    "title": "Type",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "tv_alternative_title",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/tv/{series_id}/alternative_titles",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "tv"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "alternative_titles"
                                }
                            ],
                            "parts": [
                                "3",
                                "tv",
                                "{id}",
                                "alternative_titles"
                            ],
                            "rename": {
                                "param": {
                                    "series_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "series_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tv_change": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "items",
                    "title": "Items",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "key",
                    "title": "Key",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "tv_change",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/tv/{series_id}/changes",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "tv"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "changes"
                                }
                            ],
                            "parts": [
                                "3",
                                "tv",
                                "{id}",
                                "changes"
                            ],
                            "rename": {
                                "param": {
                                    "series_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.changes`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "series_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "end_date",
                                        "orig": "end_date",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "start_date",
                                        "orig": "start_date",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tv_content_rating": {
            "fields": [
                {
                    "name": "descriptors",
                    "title": "Descriptors",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "iso_3166_1",
                    "title": "Iso 3166 1",
                    "type": "`$STRING`"
                },
                {
                    "name": "rating",
                    "title": "Rating",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "tv_content_rating",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/tv/{series_id}/content_ratings",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "tv"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "content_ratings"
                                }
                            ],
                            "parts": [
                                "3",
                                "tv",
                                "{id}",
                                "content_ratings"
                            ],
                            "rename": {
                                "param": {
                                    "series_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "series_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tv_credit": {
            "fields": [
                {
                    "name": "cast",
                    "title": "Cast",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "crew",
                    "title": "Crew",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "tv_credit",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/tv/{series_id}/credits",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "tv"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "credits"
                                }
                            ],
                            "parts": [
                                "3",
                                "tv",
                                "{id}",
                                "credits"
                            ],
                            "rename": {
                                "param": {
                                    "series_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "series_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tv_episode_group": {
            "fields": [
                {
                    "name": "description",
                    "title": "Description",
                    "type": "`$STRING`"
                },
                {
                    "name": "episode_count",
                    "title": "Episode Count",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "group_count",
                    "title": "Group Count",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "network",
                    "title": "Network",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "type",
                    "title": "Type",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "tv_episode_group",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/tv/{series_id}/episode_groups",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "tv"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "episode_groups"
                                }
                            ],
                            "parts": [
                                "3",
                                "tv",
                                "{id}",
                                "episode_groups"
                            ],
                            "rename": {
                                "param": {
                                    "series_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "series_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tv_external_id": {
            "fields": [
                {
                    "name": "facebook_id",
                    "title": "Facebook Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "freebase_id",
                    "title": "Freebase Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "freebase_mid",
                    "title": "Freebase Mid",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "imdb_id",
                    "title": "Imdb Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "instagram_id",
                    "title": "Instagram Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "tvdb_id",
                    "title": "Tvdb Id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "tvrage_id",
                    "title": "Tvrage Id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "twitter_id",
                    "title": "Twitter Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "wikidata_id",
                    "title": "Wikidata Id",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "tv_external_id",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/tv/{series_id}/external_ids",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "tv"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "external_ids"
                                }
                            ],
                            "parts": [
                                "3",
                                "tv",
                                "{id}",
                                "external_ids"
                            ],
                            "rename": {
                                "param": {
                                    "series_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "series_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tv_image": {
            "fields": [
                {
                    "name": "backdrops",
                    "title": "Backdrops",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "logos",
                    "title": "Logos",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "posters",
                    "title": "Posters",
                    "type": "`$ARRAY`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "tv_image",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/tv/{series_id}/images",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "tv"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "images"
                                }
                            ],
                            "parts": [
                                "3",
                                "tv",
                                "{id}",
                                "images"
                            ],
                            "rename": {
                                "param": {
                                    "series_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "series_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "include_image_language",
                                        "orig": "include_image_language",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tv_keyword": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "tv_keyword",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/tv/{series_id}/keywords",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "tv"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "keywords"
                                }
                            ],
                            "parts": [
                                "3",
                                "tv",
                                "{id}",
                                "keywords"
                            ],
                            "rename": {
                                "param": {
                                    "series_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "series_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tv_list": {
            "fields": [
                {
                    "name": "description",
                    "title": "Description",
                    "type": "`$STRING`"
                },
                {
                    "name": "favorite_count",
                    "title": "Favorite Count",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "iso_3166_1",
                    "title": "Iso 3166 1",
                    "type": "`$STRING`"
                },
                {
                    "name": "iso_639_1",
                    "title": "Iso 639 1",
                    "type": "`$STRING`"
                },
                {
                    "name": "item_count",
                    "title": "Item Count",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "poster_path",
                    "title": "Poster Path",
                    "type": "`$ANY`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "tv_list",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/tv/{series_id}/lists",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "tv"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "lists"
                                }
                            ],
                            "parts": [
                                "3",
                                "tv",
                                "{id}",
                                "lists"
                            ],
                            "rename": {
                                "param": {
                                    "series_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "series_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tv_recommendation": {
            "fields": [
                {
                    "name": "adult",
                    "title": "Adult",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "backdrop_path",
                    "title": "Backdrop Path",
                    "type": "`$STRING`"
                },
                {
                    "name": "first_air_date",
                    "title": "First Air Date",
                    "type": "`$STRING`"
                },
                {
                    "name": "genre_ids",
                    "title": "Genre Ids",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "media_type",
                    "title": "Media Type",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "origin_country",
                    "title": "Origin Country",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "original_language",
                    "title": "Original Language",
                    "type": "`$STRING`"
                },
                {
                    "name": "original_name",
                    "title": "Original Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "overview",
                    "title": "Overview",
                    "type": "`$STRING`"
                },
                {
                    "name": "popularity",
                    "title": "Popularity",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "poster_path",
                    "title": "Poster Path",
                    "type": "`$STRING`"
                },
                {
                    "name": "vote_average",
                    "title": "Vote Average",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "vote_count",
                    "title": "Vote Count",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "tv_recommendation",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/tv/{series_id}/recommendations",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "tv"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "recommendations"
                                }
                            ],
                            "parts": [
                                "3",
                                "tv",
                                "{id}",
                                "recommendations"
                            ],
                            "rename": {
                                "param": {
                                    "series_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "series_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tv_review": {
            "fields": [
                {
                    "name": "author",
                    "title": "Author",
                    "type": "`$STRING`"
                },
                {
                    "name": "author_details",
                    "title": "Author Details",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "content",
                    "title": "Content",
                    "type": "`$STRING`"
                },
                {
                    "name": "created_at",
                    "title": "Created At",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "updated_at",
                    "title": "Updated At",
                    "type": "`$STRING`"
                },
                {
                    "name": "url",
                    "title": "Url",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "tv_review",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/tv/{series_id}/reviews",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "tv"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "reviews"
                                }
                            ],
                            "parts": [
                                "3",
                                "tv",
                                "{id}",
                                "reviews"
                            ],
                            "rename": {
                                "param": {
                                    "series_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "series_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tv_screened_theatrically": {
            "fields": [
                {
                    "name": "episode_number",
                    "title": "Episode Number",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "season_number",
                    "title": "Season Number",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "tv_screened_theatrically",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/tv/{series_id}/screened_theatrically",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "tv"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "screened_theatrically"
                                }
                            ],
                            "parts": [
                                "3",
                                "tv",
                                "{id}",
                                "screened_theatrically"
                            ],
                            "rename": {
                                "param": {
                                    "series_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "series_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tv_similar": {
            "fields": [
                {
                    "name": "adult",
                    "title": "Adult",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "backdrop_path",
                    "title": "Backdrop Path",
                    "type": "`$STRING`"
                },
                {
                    "name": "first_air_date",
                    "title": "First Air Date",
                    "type": "`$STRING`"
                },
                {
                    "name": "genre_ids",
                    "title": "Genre Ids",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "origin_country",
                    "title": "Origin Country",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "original_language",
                    "title": "Original Language",
                    "type": "`$STRING`"
                },
                {
                    "name": "original_name",
                    "title": "Original Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "overview",
                    "title": "Overview",
                    "type": "`$STRING`"
                },
                {
                    "name": "popularity",
                    "title": "Popularity",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "poster_path",
                    "title": "Poster Path",
                    "type": "`$STRING`"
                },
                {
                    "name": "vote_average",
                    "title": "Vote Average",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "vote_count",
                    "title": "Vote Count",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "tv_similar",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/tv/{series_id}/similar",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "tv"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "similar"
                                }
                            ],
                            "parts": [
                                "3",
                                "tv",
                                "{id}",
                                "similar"
                            ],
                            "rename": {
                                "param": {
                                    "series_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "series_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tv_translation": {
            "fields": [
                {
                    "name": "data",
                    "title": "Data",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "english_name",
                    "title": "English Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "iso_3166_1",
                    "title": "Iso 3166 1",
                    "type": "`$STRING`"
                },
                {
                    "name": "iso_639_1",
                    "title": "Iso 639 1",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "tv_translation",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/tv/{series_id}/translations",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "tv"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "translations"
                                }
                            ],
                            "parts": [
                                "3",
                                "tv",
                                "{id}",
                                "translations"
                            ],
                            "rename": {
                                "param": {
                                    "series_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.translations`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "series_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tv_video": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "iso_3166_1",
                    "title": "Iso 3166 1",
                    "type": "`$STRING`"
                },
                {
                    "name": "iso_639_1",
                    "title": "Iso 639 1",
                    "type": "`$STRING`"
                },
                {
                    "name": "key",
                    "title": "Key",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "official",
                    "title": "Official",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "published_at",
                    "title": "Published At",
                    "type": "`$STRING`"
                },
                {
                    "name": "site",
                    "title": "Site",
                    "type": "`$STRING`"
                },
                {
                    "name": "size",
                    "title": "Size",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "type",
                    "title": "Type",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "tv_video",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/tv/{series_id}/videos",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "tv"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "videos"
                                }
                            ],
                            "parts": [
                                "3",
                                "tv",
                                "{id}",
                                "videos"
                            ],
                            "rename": {
                                "param": {
                                    "series_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "series_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "include_video_language",
                                        "orig": "include_video_language",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tvn": {
            "fields": [
                {
                    "name": "RAW_BODY",
                    "title": "Raw Body",
                    "type": "`$STRING`",
                    "req": true,
                    "format": "json"
                },
                {
                    "name": "adult",
                    "title": "Adult",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "backdrop_path",
                    "title": "Backdrop Path",
                    "type": "`$STRING`"
                },
                {
                    "name": "created_by",
                    "title": "Created By",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "display_priorities",
                    "title": "Display Priorities",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "display_priority",
                    "title": "Display Priority",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "episode_run_time",
                    "title": "Episode Run Time",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "first_air_date",
                    "title": "First Air Date",
                    "type": "`$STRING`"
                },
                {
                    "name": "genre_ids",
                    "title": "Genre Ids",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "genres",
                    "title": "Genres",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "homepage",
                    "title": "Homepage",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "in_production",
                    "title": "In Production",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "languages",
                    "title": "Languages",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "last_air_date",
                    "title": "Last Air Date",
                    "type": "`$STRING`"
                },
                {
                    "name": "last_episode_to_air",
                    "title": "Last Episode To Air",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "logo_path",
                    "title": "Logo Path",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "networks",
                    "title": "Networks",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "next_episode_to_air",
                    "title": "Next Episode To Air",
                    "type": "`$ANY`"
                },
                {
                    "name": "number_of_episodes",
                    "title": "Number Of Episodes",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "number_of_seasons",
                    "title": "Number Of Seasons",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "origin_country",
                    "title": "Origin Country",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "original_language",
                    "title": "Original Language",
                    "type": "`$STRING`"
                },
                {
                    "name": "original_name",
                    "title": "Original Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "overview",
                    "title": "Overview",
                    "type": "`$STRING`"
                },
                {
                    "name": "page",
                    "title": "Page",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "popularity",
                    "title": "Popularity",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "poster_path",
                    "title": "Poster Path",
                    "type": "`$STRING`"
                },
                {
                    "name": "production_companies",
                    "title": "Production Companies",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "production_countries",
                    "title": "Production Countries",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "provider_id",
                    "title": "Provider Id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "provider_name",
                    "title": "Provider Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "rating",
                    "title": "Rating",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "results",
                    "title": "Results",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "seasons",
                    "title": "Seasons",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "spoken_languages",
                    "title": "Spoken Languages",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "status",
                    "title": "Status",
                    "type": "`$STRING`"
                },
                {
                    "name": "status_code",
                    "title": "Status Code",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "status_message",
                    "title": "Status Message",
                    "type": "`$STRING`"
                },
                {
                    "name": "tagline",
                    "title": "Tagline",
                    "type": "`$STRING`"
                },
                {
                    "name": "total_pages",
                    "title": "Total Pages",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "total_results",
                    "title": "Total Results",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "type",
                    "title": "Type",
                    "type": "`$STRING`"
                },
                {
                    "name": "vote_average",
                    "title": "Vote Average",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "vote_count",
                    "title": "Vote Count",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "tvn",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/3/tv/{series_id}/rating",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "tv"
                                },
                                {
                                    "var": "series_id"
                                },
                                {
                                    "lit": "rating"
                                }
                            ],
                            "parts": [
                                "3",
                                "tv",
                                "{series_id}",
                                "rating"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "header": [
                                    {
                                        "name": "content_type",
                                        "orig": "Content-Type",
                                        "type": "`$STRING`",
                                        "kind": "header",
                                        "reqd": true,
                                        "example": "application/json;charset=utf-8"
                                    }
                                ],
                                "params": [
                                    {
                                        "name": "series_id",
                                        "orig": "series_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "guest_session_id",
                                        "orig": "guest_session_id",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "session_id",
                                        "orig": "session_id",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "content_type",
                                    "series_id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/account/{account_id}/favorite/tv",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "account"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "favorite"
                                },
                                {
                                    "lit": "tv"
                                }
                            ],
                            "parts": [
                                "3",
                                "account",
                                "{account_id}",
                                "favorite",
                                "tv"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": null
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1,
                                        "field": true
                                    },
                                    {
                                        "name": "session_id",
                                        "orig": "session_id",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "sort_by",
                                        "orig": "sort_by",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "created_at.asc"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/account/{account_id}/rated/tv",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "account"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "rated"
                                },
                                {
                                    "lit": "tv"
                                }
                            ],
                            "parts": [
                                "3",
                                "account",
                                "{account_id}",
                                "rated",
                                "tv"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": null
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1,
                                        "field": true
                                    },
                                    {
                                        "name": "session_id",
                                        "orig": "session_id",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "sort_by",
                                        "orig": "sort_by",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "created_at.asc"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/account/{account_id}/watchlist/tv",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "account"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "watchlist"
                                },
                                {
                                    "lit": "tv"
                                }
                            ],
                            "parts": [
                                "3",
                                "account",
                                "{account_id}",
                                "watchlist",
                                "tv"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": null
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1,
                                        "field": true
                                    },
                                    {
                                        "name": "session_id",
                                        "orig": "session_id",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "sort_by",
                                        "orig": "sort_by",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "created_at.asc"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/guest_session/{guest_session_id}/rated/tv",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "guest_session"
                                },
                                {
                                    "var": "guest_session_id"
                                },
                                {
                                    "lit": "rated"
                                },
                                {
                                    "lit": "tv"
                                }
                            ],
                            "parts": [
                                "3",
                                "guest_session",
                                "{guest_session_id}",
                                "rated",
                                "tv"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "guest_session_id",
                                        "orig": "guest_session_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1,
                                        "field": true
                                    },
                                    {
                                        "name": "sort_by",
                                        "orig": "sort_by",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "created_at.asc"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "guest_session_id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/search/tv",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "search"
                                },
                                {
                                    "lit": "tv"
                                }
                            ],
                            "parts": [
                                "3",
                                "search",
                                "tv"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "first_air_date_year",
                                        "orig": "first_air_date_year",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "include_adult",
                                        "orig": "include_adult",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": false
                                    },
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1,
                                        "field": true
                                    },
                                    {
                                        "name": "query",
                                        "orig": "query",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "reqd": true
                                    },
                                    {
                                        "name": "year",
                                        "orig": "year",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "query"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/discover/tv",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "discover"
                                },
                                {
                                    "lit": "tv"
                                }
                            ],
                            "parts": [
                                "3",
                                "discover",
                                "tv"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "air_date_gte",
                                        "orig": "air_date.gte",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "air_date_lte",
                                        "orig": "air_date.lte",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "first_air_date_gte",
                                        "orig": "first_air_date.gte",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "first_air_date_lte",
                                        "orig": "first_air_date.lte",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "first_air_date_year",
                                        "orig": "first_air_date_year",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "include_adult",
                                        "orig": "include_adult",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": false
                                    },
                                    {
                                        "name": "include_null_first_air_date",
                                        "orig": "include_null_first_air_dates",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": false
                                    },
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1,
                                        "field": true
                                    },
                                    {
                                        "name": "screened_theatrically",
                                        "orig": "screened_theatrically",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "sort_by",
                                        "orig": "sort_by",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "popularity.desc"
                                    },
                                    {
                                        "name": "timezone",
                                        "orig": "timezone",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "vote_average_gte",
                                        "orig": "vote_average.gte",
                                        "type": "`$NUMBER`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "vote_average_lte",
                                        "orig": "vote_average.lte",
                                        "type": "`$NUMBER`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "vote_count_gte",
                                        "orig": "vote_count.gte",
                                        "type": "`$NUMBER`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "vote_count_lte",
                                        "orig": "vote_count.lte",
                                        "type": "`$NUMBER`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "watch_region",
                                        "orig": "watch_region",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "with_company",
                                        "orig": "with_companies",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "with_genre",
                                        "orig": "with_genres",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "with_keyword",
                                        "orig": "with_keywords",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "with_network",
                                        "orig": "with_networks",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "with_origin_country",
                                        "orig": "with_origin_country",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "with_original_language",
                                        "orig": "with_original_language",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "with_runtime_gte",
                                        "orig": "with_runtime.gte",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "with_runtime_lte",
                                        "orig": "with_runtime.lte",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "with_status",
                                        "orig": "with_status",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "with_type",
                                        "orig": "with_type",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "with_watch_monetization_type",
                                        "orig": "with_watch_monetization_types",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "with_watch_provider",
                                        "orig": "with_watch_providers",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "without_company",
                                        "orig": "without_companies",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "without_genre",
                                        "orig": "without_genres",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "without_keyword",
                                        "orig": "without_keywords",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "without_watch_provider",
                                        "orig": "without_watch_providers",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {},
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/watch/providers/tv",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "watch"
                                },
                                {
                                    "lit": "providers"
                                },
                                {
                                    "lit": "tv"
                                }
                            ],
                            "parts": [
                                "3",
                                "watch",
                                "providers",
                                "tv"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    },
                                    {
                                        "name": "watch_region",
                                        "orig": "watch_region",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {},
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/tv/{series_id}",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "tv"
                                },
                                {
                                    "var": "series_id"
                                }
                            ],
                            "parts": [
                                "3",
                                "tv",
                                "{series_id}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "series_id",
                                        "orig": "series_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "append_to_response",
                                        "orig": "append_to_response",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "series_id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/trending/tv/{time_window}",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "trending"
                                },
                                {
                                    "lit": "tv"
                                },
                                {
                                    "var": "time_window"
                                }
                            ],
                            "parts": [
                                "3",
                                "trending",
                                "tv",
                                "{time_window}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "time_window",
                                        "orig": "time_window",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "day"
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "time_window"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/3/tv/{series_id}/rating",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "tv"
                                },
                                {
                                    "var": "series_id"
                                },
                                {
                                    "lit": "rating"
                                }
                            ],
                            "parts": [
                                "3",
                                "tv",
                                "{series_id}",
                                "rating"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "header": [
                                    {
                                        "name": "content_type",
                                        "orig": "Content-Type",
                                        "type": "`$STRING`",
                                        "kind": "header",
                                        "example": "application/json;charset=utf-8"
                                    }
                                ],
                                "params": [
                                    {
                                        "name": "series_id",
                                        "orig": "series_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "guest_session_id",
                                        "orig": "guest_session_id",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "session_id",
                                        "orig": "session_id",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "series_id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.account"
                    ]
                ]
            }
        },
        "upcoming": {
            "fields": [
                {
                    "name": "adult",
                    "title": "Adult",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "backdrop_path",
                    "title": "Backdrop Path",
                    "type": "`$STRING`"
                },
                {
                    "name": "genre_ids",
                    "title": "Genre Ids",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "original_language",
                    "title": "Original Language",
                    "type": "`$STRING`"
                },
                {
                    "name": "original_title",
                    "title": "Original Title",
                    "type": "`$STRING`"
                },
                {
                    "name": "overview",
                    "title": "Overview",
                    "type": "`$STRING`"
                },
                {
                    "name": "popularity",
                    "title": "Popularity",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "poster_path",
                    "title": "Poster Path",
                    "type": "`$STRING`"
                },
                {
                    "name": "release_date",
                    "title": "Release Date",
                    "type": "`$STRING`"
                },
                {
                    "name": "title",
                    "title": "Title",
                    "type": "`$STRING`"
                },
                {
                    "name": "video",
                    "title": "Video",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "vote_average",
                    "title": "Vote Average",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "vote_count",
                    "title": "Vote Count",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "upcoming",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/3/movie/upcoming",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "movie"
                                },
                                {
                                    "lit": "upcoming"
                                }
                            ],
                            "parts": [
                                "3",
                                "movie",
                                "upcoming"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "en-US"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "region",
                                        "orig": "region",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {},
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "validate_with_login": {
            "fields": [
                {
                    "name": "RAW_BODY",
                    "title": "Raw Body",
                    "type": "`$STRING`",
                    "req": true,
                    "format": "json"
                },
                {
                    "name": "expires_at",
                    "title": "Expires At",
                    "type": "`$STRING`"
                },
                {
                    "name": "request_token",
                    "title": "Request Token",
                    "type": "`$STRING`"
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`"
                }
            ],
            "name": "validate_with_login",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/3/authentication/token/validate_with_login",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "authentication"
                                },
                                {
                                    "lit": "token"
                                },
                                {
                                    "lit": "validate_with_login"
                                }
                            ],
                            "parts": [
                                "3",
                                "authentication",
                                "token",
                                "validate_with_login"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {},
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "watchlist": {
            "fields": [
                {
                    "name": "RAW_BODY",
                    "title": "Raw Body",
                    "type": "`$STRING`",
                    "req": true,
                    "format": "json"
                },
                {
                    "name": "status_code",
                    "title": "Status Code",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "status_message",
                    "title": "Status Message",
                    "type": "`$STRING`"
                }
            ],
            "name": "watchlist",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/3/account/{account_id}/watchlist",
                            "segments": [
                                {
                                    "lit": "3"
                                },
                                {
                                    "lit": "account"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "watchlist"
                                }
                            ],
                            "parts": [
                                "3",
                                "account",
                                "{account_id}",
                                "watchlist"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": null
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "session_id",
                                        "orig": "session_id",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.account"
                    ]
                ]
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map