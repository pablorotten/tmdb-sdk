"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "account",
        "accessor": "Account",
        "op": "load",
        "method": "GET",
        "path": "/3/account/{account_id}",
        "args": [
            {
                "name": "id",
                "wire": "account_id",
                "value": "p1"
            }
        ],
        "select": {
            "session_id": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "session_id"
        ],
        "queryArgs": [
            {
                "name": "session_id",
                "wire": "session_id"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "account_list",
        "accessor": "AccountList",
        "op": "list",
        "method": "GET",
        "path": "/3/account/{account_id}/lists",
        "args": [
            {
                "name": "id",
                "wire": "account_id",
                "value": "p1"
            }
        ],
        "select": {
            "page": 1,
            "session_id": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "page",
            "session_id"
        ],
        "queryArgs": [
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "session_id",
                "wire": "session_id"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "airing_today",
        "accessor": "AiringToday",
        "op": "list",
        "method": "GET",
        "path": "/3/tv/airing_today",
        "args": [],
        "select": {
            "language": "en-US",
            "page": 1,
            "timezone": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "language",
            "page",
            "timezone"
        ],
        "queryArgs": [
            {
                "name": "language",
                "wire": "language"
            },
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "timezone",
                "wire": "timezone"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "all",
        "accessor": "All",
        "op": "load",
        "method": "GET",
        "path": "/3/trending/all/{time_window}",
        "args": [
            {
                "name": "id",
                "wire": "time_window",
                "value": "p1"
            }
        ],
        "select": {
            "language": "en-US"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "language"
        ],
        "queryArgs": [
            {
                "name": "language",
                "wire": "language"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "authentication",
        "accessor": "Authentication",
        "op": "load",
        "method": "GET",
        "path": "/3/authentication",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "collection",
        "accessor": "Collection",
        "op": "list",
        "method": "GET",
        "path": "/3/search/collection",
        "args": [],
        "select": {
            "query": "v1",
            "include_adult": "v1",
            "language": "en-US",
            "page": 1,
            "region": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "query",
            "include_adult",
            "language",
            "page",
            "region"
        ],
        "queryArgs": [
            {
                "name": "include_adult",
                "wire": "include_adult"
            },
            {
                "name": "language",
                "wire": "language"
            },
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "query",
                "wire": "query"
            },
            {
                "name": "region",
                "wire": "region"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "collection",
        "accessor": "Collection",
        "op": "load",
        "method": "GET",
        "path": "/3/collection/{collection_id}",
        "args": [
            {
                "name": "id",
                "wire": "collection_id",
                "value": "p1"
            }
        ],
        "select": {
            "language": "en-US"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "language"
        ],
        "queryArgs": [
            {
                "name": "language",
                "wire": "language"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "collection_image",
        "accessor": "CollectionImage",
        "op": "list",
        "method": "GET",
        "path": "/3/collection/{collection_id}/images",
        "args": [
            {
                "name": "id",
                "wire": "collection_id",
                "value": "p1"
            }
        ],
        "select": {
            "include_image_language": "v1",
            "language": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "include_image_language",
            "language"
        ],
        "queryArgs": [
            {
                "name": "include_image_language",
                "wire": "include_image_language"
            },
            {
                "name": "language",
                "wire": "language"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "collection_translation",
        "accessor": "CollectionTranslation",
        "op": "list",
        "method": "GET",
        "path": "/3/collection/{collection_id}/translations",
        "args": [
            {
                "name": "id",
                "wire": "collection_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "company",
        "accessor": "Company",
        "op": "list",
        "method": "GET",
        "path": "/3/search/company",
        "args": [],
        "select": {
            "query": "v1",
            "page": 1
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "query",
            "page"
        ],
        "queryArgs": [
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "query",
                "wire": "query"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "company",
        "accessor": "Company",
        "op": "load",
        "method": "GET",
        "path": "/3/company/{company_id}",
        "args": [
            {
                "name": "id",
                "wire": "company_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "company_alternative_name",
        "accessor": "CompanyAlternativeName",
        "op": "list",
        "method": "GET",
        "path": "/3/company/{company_id}/alternative_names",
        "args": [
            {
                "name": "id",
                "wire": "company_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "company_image",
        "accessor": "CompanyImage",
        "op": "list",
        "method": "GET",
        "path": "/3/company/{company_id}/images",
        "args": [
            {
                "name": "id",
                "wire": "company_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "configuration",
        "accessor": "Configuration",
        "op": "list",
        "method": "GET",
        "path": "/3/configuration",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "country",
        "accessor": "Country",
        "op": "list",
        "method": "GET",
        "path": "/3/configuration/countries",
        "args": [],
        "select": {
            "language": "en-US"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "language"
        ],
        "queryArgs": [
            {
                "name": "language",
                "wire": "language"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "credit",
        "accessor": "Credit",
        "op": "load",
        "method": "GET",
        "path": "/3/credit/{credit_id}",
        "args": [
            {
                "name": "id",
                "wire": "credit_id",
                "value": "p1"
            }
        ],
        "select": {
            "language": "en-US"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "language"
        ],
        "queryArgs": [
            {
                "name": "language",
                "wire": "language"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "episode",
        "accessor": "Episode",
        "op": "create",
        "method": "POST",
        "path": "/3/tv/{series_id}/season/{season_number}/episode/{episode_number}/rating",
        "action": "rating",
        "args": [
            {
                "name": "id",
                "wire": "episode_number",
                "value": "p1"
            },
            {
                "name": "season_id",
                "wire": "season_number",
                "value": "p2"
            },
            {
                "name": "tv_id",
                "wire": "series_id",
                "value": "p3"
            }
        ],
        "select": {
            "content_type": "v1",
            "guest_session_id": "v1",
            "session_id": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "guest_session_id",
            "session_id"
        ],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "episode",
        "accessor": "Episode",
        "op": "list",
        "method": "GET",
        "path": "/3/account/{account_id}/rated/tv/episodes",
        "args": [
            {
                "name": "account_id",
                "wire": "account_id",
                "value": "p1"
            }
        ],
        "select": {
            "language": "en-US",
            "page": 1,
            "session_id": "v1",
            "sort_by": "created_at.asc"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "language",
            "page",
            "session_id",
            "sort_by"
        ],
        "queryArgs": [
            {
                "name": "language",
                "wire": "language"
            },
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "session_id",
                "wire": "session_id"
            },
            {
                "name": "sort_by",
                "wire": "sort_by"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "episode",
        "accessor": "Episode",
        "op": "list",
        "method": "GET",
        "path": "/3/guest_session/{guest_session_id}/rated/tv/episodes",
        "args": [
            {
                "name": "guest_session_id",
                "wire": "guest_session_id",
                "value": "p1"
            }
        ],
        "select": {
            "language": "en-US",
            "page": 1,
            "sort_by": "created_at.asc"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "language",
            "page",
            "sort_by"
        ],
        "queryArgs": [
            {
                "name": "language",
                "wire": "language"
            },
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "sort_by",
                "wire": "sort_by"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "episode",
        "accessor": "Episode",
        "op": "load",
        "method": "GET",
        "path": "/3/tv/{series_id}/season/{season_number}/episode/{episode_number}",
        "args": [
            {
                "name": "id",
                "wire": "episode_number",
                "value": "p1"
            },
            {
                "name": "season_id",
                "wire": "season_number",
                "value": "p2"
            },
            {
                "name": "tv_id",
                "wire": "series_id",
                "value": "p3"
            }
        ],
        "select": {
            "append_to_response": "v1",
            "language": "en-US"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "append_to_response",
            "language"
        ],
        "queryArgs": [
            {
                "name": "append_to_response",
                "wire": "append_to_response"
            },
            {
                "name": "language",
                "wire": "language"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "episode",
        "accessor": "Episode",
        "op": "remove",
        "method": "DELETE",
        "path": "/3/tv/{series_id}/season/{season_number}/episode/{episode_number}/rating",
        "action": "rating",
        "args": [
            {
                "name": "id",
                "wire": "episode_number",
                "value": "p1"
            },
            {
                "name": "season_id",
                "wire": "season_number",
                "value": "p2"
            },
            {
                "name": "tv_id",
                "wire": "series_id",
                "value": "p3"
            }
        ],
        "select": {
            "guest_session_id": "v1",
            "session_id": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "guest_session_id",
            "session_id"
        ],
        "queryArgs": [
            {
                "name": "guest_session_id",
                "wire": "guest_session_id"
            },
            {
                "name": "session_id",
                "wire": "session_id"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "episode_account_state",
        "accessor": "EpisodeAccountState",
        "op": "load",
        "method": "GET",
        "path": "/3/tv/{series_id}/season/{season_number}/episode/{episode_number}/account_states",
        "args": [
            {
                "name": "episode_number",
                "wire": "episode_number",
                "value": "p1"
            },
            {
                "name": "season_id",
                "wire": "season_number",
                "value": "p2"
            },
            {
                "name": "tv_id",
                "wire": "series_id",
                "value": "p3"
            }
        ],
        "select": {
            "guest_session_id": "v1",
            "session_id": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "session_id",
            "guest_session_id"
        ],
        "queryArgs": [
            {
                "name": "guest_session_id",
                "wire": "guest_session_id"
            },
            {
                "name": "session_id",
                "wire": "session_id"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "episode_change",
        "accessor": "EpisodeChange",
        "op": "list",
        "method": "GET",
        "path": "/3/tv/episode/{episode_id}/changes",
        "args": [
            {
                "name": "id",
                "wire": "episode_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "episode_credit",
        "accessor": "EpisodeCredit",
        "op": "list",
        "method": "GET",
        "path": "/3/tv/{series_id}/season/{season_number}/episode/{episode_number}/credits",
        "args": [
            {
                "name": "episode_number",
                "wire": "episode_number",
                "value": "p1"
            },
            {
                "name": "season_id",
                "wire": "season_number",
                "value": "p2"
            },
            {
                "name": "tv_id",
                "wire": "series_id",
                "value": "p3"
            }
        ],
        "select": {
            "language": "en-US"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "language"
        ],
        "queryArgs": [
            {
                "name": "language",
                "wire": "language"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "episode_external_id",
        "accessor": "EpisodeExternalId",
        "op": "load",
        "method": "GET",
        "path": "/3/tv/{series_id}/season/{season_number}/episode/{episode_number}/external_ids",
        "args": [
            {
                "name": "episode_number",
                "wire": "episode_number",
                "value": "p1"
            },
            {
                "name": "season_id",
                "wire": "season_number",
                "value": "p2"
            },
            {
                "name": "tv_id",
                "wire": "series_id",
                "value": "p3"
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "episode_group",
        "accessor": "EpisodeGroup",
        "op": "load",
        "method": "GET",
        "path": "/3/tv/episode_group/{tv_episode_group_id}",
        "args": [
            {
                "name": "id",
                "wire": "tv_episode_group_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "episode_image",
        "accessor": "EpisodeImage",
        "op": "list",
        "method": "GET",
        "path": "/3/tv/{series_id}/season/{season_number}/episode/{episode_number}/images",
        "args": [
            {
                "name": "episode_number",
                "wire": "episode_number",
                "value": "p1"
            },
            {
                "name": "season_id",
                "wire": "season_number",
                "value": "p2"
            },
            {
                "name": "tv_id",
                "wire": "series_id",
                "value": "p3"
            }
        ],
        "select": {
            "include_image_language": "v1",
            "language": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "include_image_language",
            "language"
        ],
        "queryArgs": [
            {
                "name": "include_image_language",
                "wire": "include_image_language"
            },
            {
                "name": "language",
                "wire": "language"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "episode_translation",
        "accessor": "EpisodeTranslation",
        "op": "list",
        "method": "GET",
        "path": "/3/tv/{series_id}/season/{season_number}/episode/{episode_number}/translations",
        "args": [
            {
                "name": "episode_number",
                "wire": "episode_number",
                "value": "p1"
            },
            {
                "name": "season_id",
                "wire": "season_number",
                "value": "p2"
            },
            {
                "name": "tv_id",
                "wire": "series_id",
                "value": "p3"
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "episode_video",
        "accessor": "EpisodeVideo",
        "op": "list",
        "method": "GET",
        "path": "/3/tv/{series_id}/season/{season_number}/episode/{episode_number}/videos",
        "args": [
            {
                "name": "episode_number",
                "wire": "episode_number",
                "value": "p1"
            },
            {
                "name": "season_id",
                "wire": "season_number",
                "value": "p2"
            },
            {
                "name": "tv_id",
                "wire": "series_id",
                "value": "p3"
            }
        ],
        "select": {
            "include_video_language": "v1",
            "language": "en-US"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "include_video_language",
            "language"
        ],
        "queryArgs": [
            {
                "name": "include_video_language",
                "wire": "include_video_language"
            },
            {
                "name": "language",
                "wire": "language"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "favorite",
        "accessor": "Favorite",
        "op": "create",
        "method": "POST",
        "path": "/3/account/{account_id}/favorite",
        "args": [
            {
                "name": "account_id",
                "wire": "account_id",
                "value": "p1"
            }
        ],
        "select": {
            "session_id": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "session_id"
        ],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "find",
        "accessor": "Find",
        "op": "load",
        "method": "GET",
        "path": "/3/find/{external_id}",
        "args": [
            {
                "name": "id",
                "wire": "external_id",
                "value": "p1"
            }
        ],
        "select": {
            "external_source": "v1",
            "language": "en-US"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "external_source",
            "language"
        ],
        "queryArgs": [
            {
                "name": "external_source",
                "wire": "external_source"
            },
            {
                "name": "language",
                "wire": "language"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "job",
        "accessor": "Job",
        "op": "list",
        "method": "GET",
        "path": "/3/configuration/jobs",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "keyword",
        "accessor": "Keyword",
        "op": "list",
        "method": "GET",
        "path": "/3/search/keyword",
        "args": [],
        "select": {
            "query": "v1",
            "page": 1
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "query",
            "page"
        ],
        "queryArgs": [
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "query",
                "wire": "query"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "keyword",
        "accessor": "Keyword",
        "op": "load",
        "method": "GET",
        "path": "/3/keyword/{keyword_id}",
        "args": [
            {
                "name": "id",
                "wire": "keyword_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "keyword_movie",
        "accessor": "KeywordMovie",
        "op": "list",
        "method": "GET",
        "path": "/3/keyword/{keyword_id}/movies",
        "args": [
            {
                "name": "id",
                "wire": "keyword_id",
                "value": "p1"
            }
        ],
        "select": {
            "include_adult": "v1",
            "language": "en-US",
            "page": 1
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "include_adult",
            "language",
            "page"
        ],
        "queryArgs": [
            {
                "name": "include_adult",
                "wire": "include_adult"
            },
            {
                "name": "language",
                "wire": "language"
            },
            {
                "name": "page",
                "wire": "page"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "language",
        "accessor": "Language",
        "op": "list",
        "method": "GET",
        "path": "/3/configuration/languages",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "list",
        "accessor": "List",
        "op": "create",
        "method": "POST",
        "path": "/3/list/{list_id}/clear",
        "action": "clear",
        "args": [
            {
                "name": "id",
                "wire": "list_id",
                "value": "p1"
            }
        ],
        "select": {
            "confirm": "v1",
            "session_id": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "session_id",
            "confirm"
        ],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "list",
        "accessor": "List",
        "op": "create",
        "method": "POST",
        "path": "/3/list/{list_id}/add_item",
        "action": "add_item",
        "args": [
            {
                "name": "id",
                "wire": "list_id",
                "value": "p1"
            }
        ],
        "select": {
            "session_id": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "session_id"
        ],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "list",
        "accessor": "List",
        "op": "create",
        "method": "POST",
        "path": "/3/list/{list_id}/remove_item",
        "action": "remove_item",
        "args": [
            {
                "name": "id",
                "wire": "list_id",
                "value": "p1"
            }
        ],
        "select": {
            "session_id": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "session_id"
        ],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "list",
        "accessor": "List",
        "op": "create",
        "method": "POST",
        "path": "/3/list",
        "args": [],
        "select": {
            "session_id": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "session_id"
        ],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "list",
        "accessor": "List",
        "op": "load",
        "method": "GET",
        "path": "/3/list/{list_id}",
        "args": [
            {
                "name": "id",
                "wire": "list_id",
                "value": "p1"
            }
        ],
        "select": {
            "language": "en-US",
            "page": 1
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "language",
            "page"
        ],
        "queryArgs": [
            {
                "name": "language",
                "wire": "language"
            },
            {
                "name": "page",
                "wire": "page"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "list",
        "accessor": "List",
        "op": "remove",
        "method": "DELETE",
        "path": "/3/list/{list_id}",
        "args": [
            {
                "name": "id",
                "wire": "list_id",
                "value": "p1"
            }
        ],
        "select": {
            "session_id": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "session_id"
        ],
        "queryArgs": [
            {
                "name": "session_id",
                "wire": "session_id"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "list_item_status",
        "accessor": "ListItemStatus",
        "op": "load",
        "method": "GET",
        "path": "/3/list/{list_id}/item_status",
        "args": [
            {
                "name": "id",
                "wire": "list_id",
                "value": "p1"
            }
        ],
        "select": {
            "language": "en-US",
            "movie_id": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "language",
            "movie_id"
        ],
        "queryArgs": [
            {
                "name": "language",
                "wire": "language"
            },
            {
                "name": "movie_id",
                "wire": "movie_id"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "movie",
        "accessor": "Movie",
        "op": "create",
        "method": "POST",
        "path": "/3/movie/{movie_id}/rating",
        "action": "rating",
        "args": [
            {
                "name": "id",
                "wire": "movie_id",
                "value": "p1"
            }
        ],
        "select": {
            "content_type": "v1",
            "guest_session_id": "v1",
            "session_id": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "guest_session_id",
            "session_id"
        ],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "movie",
        "accessor": "Movie",
        "op": "list",
        "method": "GET",
        "path": "/3/guest_session/{guest_session_id}/rated/movies",
        "args": [
            {
                "name": "guest_session_id",
                "wire": "guest_session_id",
                "value": "p1"
            }
        ],
        "select": {
            "language": "en-US",
            "page": 1,
            "sort_by": "created_at.asc"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "language",
            "page",
            "sort_by"
        ],
        "queryArgs": [
            {
                "name": "language",
                "wire": "language"
            },
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "sort_by",
                "wire": "sort_by"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "movie",
        "accessor": "Movie",
        "op": "list",
        "method": "GET",
        "path": "/3/search/movie",
        "args": [],
        "select": {
            "query": "v1",
            "include_adult": "v1",
            "language": "en-US",
            "page": 1,
            "primary_release_year": "v1",
            "region": "v1",
            "year": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "query",
            "include_adult",
            "language",
            "primary_release_year",
            "page",
            "region",
            "year"
        ],
        "queryArgs": [
            {
                "name": "include_adult",
                "wire": "include_adult"
            },
            {
                "name": "language",
                "wire": "language"
            },
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "primary_release_year",
                "wire": "primary_release_year"
            },
            {
                "name": "query",
                "wire": "query"
            },
            {
                "name": "region",
                "wire": "region"
            },
            {
                "name": "year",
                "wire": "year"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "movie",
        "accessor": "Movie",
        "op": "remove",
        "method": "DELETE",
        "path": "/3/movie/{movie_id}/rating",
        "action": "rating",
        "args": [
            {
                "name": "id",
                "wire": "movie_id",
                "value": "p1"
            }
        ],
        "select": {
            "guest_session_id": "v1",
            "session_id": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "guest_session_id",
            "session_id"
        ],
        "queryArgs": [
            {
                "name": "guest_session_id",
                "wire": "guest_session_id"
            },
            {
                "name": "session_id",
                "wire": "session_id"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "movie_account_state",
        "accessor": "MovieAccountState",
        "op": "load",
        "method": "GET",
        "path": "/3/movie/{movie_id}/account_states",
        "args": [
            {
                "name": "id",
                "wire": "movie_id",
                "value": "p1"
            }
        ],
        "select": {
            "guest_session_id": "v1",
            "session_id": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "session_id",
            "guest_session_id"
        ],
        "queryArgs": [
            {
                "name": "guest_session_id",
                "wire": "guest_session_id"
            },
            {
                "name": "session_id",
                "wire": "session_id"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "movie_alternative_title",
        "accessor": "MovieAlternativeTitle",
        "op": "list",
        "method": "GET",
        "path": "/3/movie/{movie_id}/alternative_titles",
        "args": [
            {
                "name": "id",
                "wire": "movie_id",
                "value": "p1"
            }
        ],
        "select": {
            "country": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "country"
        ],
        "queryArgs": [
            {
                "name": "country",
                "wire": "country"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "movie_change",
        "accessor": "MovieChange",
        "op": "list",
        "method": "GET",
        "path": "/3/movie/{movie_id}/changes",
        "args": [
            {
                "name": "id",
                "wire": "movie_id",
                "value": "p1"
            }
        ],
        "select": {
            "end_date": "v1",
            "page": 1,
            "start_date": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "end_date",
            "page",
            "start_date"
        ],
        "queryArgs": [
            {
                "name": "end_date",
                "wire": "end_date"
            },
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "start_date",
                "wire": "start_date"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "movie_credit",
        "accessor": "MovieCredit",
        "op": "list",
        "method": "GET",
        "path": "/3/movie/{movie_id}/credits",
        "args": [
            {
                "name": "id",
                "wire": "movie_id",
                "value": "p1"
            }
        ],
        "select": {
            "language": "en-US"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "language"
        ],
        "queryArgs": [
            {
                "name": "language",
                "wire": "language"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "movie_external_id",
        "accessor": "MovieExternalId",
        "op": "load",
        "method": "GET",
        "path": "/3/movie/{movie_id}/external_ids",
        "args": [
            {
                "name": "id",
                "wire": "movie_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "movie_image",
        "accessor": "MovieImage",
        "op": "list",
        "method": "GET",
        "path": "/3/movie/{movie_id}/images",
        "args": [
            {
                "name": "id",
                "wire": "movie_id",
                "value": "p1"
            }
        ],
        "select": {
            "include_image_language": "v1",
            "language": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "include_image_language",
            "language"
        ],
        "queryArgs": [
            {
                "name": "include_image_language",
                "wire": "include_image_language"
            },
            {
                "name": "language",
                "wire": "language"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "movie_keyword",
        "accessor": "MovieKeyword",
        "op": "list",
        "method": "GET",
        "path": "/3/movie/{movie_id}/keywords",
        "args": [
            {
                "name": "id",
                "wire": "movie_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "movie_list",
        "accessor": "MovieList",
        "op": "list",
        "method": "GET",
        "path": "/3/movie/{movie_id}/lists",
        "args": [
            {
                "name": "id",
                "wire": "movie_id",
                "value": "p1"
            }
        ],
        "select": {
            "language": "en-US",
            "page": 1
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "language",
            "page"
        ],
        "queryArgs": [
            {
                "name": "language",
                "wire": "language"
            },
            {
                "name": "page",
                "wire": "page"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "movie_recommendation",
        "accessor": "MovieRecommendation",
        "op": "load",
        "method": "GET",
        "path": "/3/movie/{movie_id}/recommendations",
        "args": [
            {
                "name": "id",
                "wire": "movie_id",
                "value": "p1"
            }
        ],
        "select": {
            "language": "en-US",
            "page": 1
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "language",
            "page"
        ],
        "queryArgs": [
            {
                "name": "language",
                "wire": "language"
            },
            {
                "name": "page",
                "wire": "page"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "movie_release_date",
        "accessor": "MovieReleaseDate",
        "op": "list",
        "method": "GET",
        "path": "/3/movie/{movie_id}/release_dates",
        "args": [
            {
                "name": "id",
                "wire": "movie_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "movie_review",
        "accessor": "MovieReview",
        "op": "list",
        "method": "GET",
        "path": "/3/movie/{movie_id}/reviews",
        "args": [
            {
                "name": "id",
                "wire": "movie_id",
                "value": "p1"
            }
        ],
        "select": {
            "language": "en-US",
            "page": 1
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "language",
            "page"
        ],
        "queryArgs": [
            {
                "name": "language",
                "wire": "language"
            },
            {
                "name": "page",
                "wire": "page"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "movie_similar",
        "accessor": "MovieSimilar",
        "op": "list",
        "method": "GET",
        "path": "/3/movie/{movie_id}/similar",
        "args": [
            {
                "name": "id",
                "wire": "movie_id",
                "value": "p1"
            }
        ],
        "select": {
            "language": "en-US",
            "page": 1
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "language",
            "page"
        ],
        "queryArgs": [
            {
                "name": "language",
                "wire": "language"
            },
            {
                "name": "page",
                "wire": "page"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "movie_translation",
        "accessor": "MovieTranslation",
        "op": "list",
        "method": "GET",
        "path": "/3/movie/{movie_id}/translations",
        "args": [
            {
                "name": "id",
                "wire": "movie_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "movie_video",
        "accessor": "MovieVideo",
        "op": "list",
        "method": "GET",
        "path": "/3/movie/{movie_id}/videos",
        "args": [
            {
                "name": "id",
                "wire": "movie_id",
                "value": "p1"
            }
        ],
        "select": {
            "language": "en-US"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "language"
        ],
        "queryArgs": [
            {
                "name": "language",
                "wire": "language"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "multi",
        "accessor": "Multi",
        "op": "list",
        "method": "GET",
        "path": "/3/search/multi",
        "args": [],
        "select": {
            "query": "v1",
            "include_adult": "v1",
            "language": "en-US",
            "page": 1
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "query",
            "include_adult",
            "language",
            "page"
        ],
        "queryArgs": [
            {
                "name": "include_adult",
                "wire": "include_adult"
            },
            {
                "name": "language",
                "wire": "language"
            },
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "query",
                "wire": "query"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "page": 1,
            "results": [
                {
                    "adult": false,
                    "backdrop_path": "/aDYSnJAK0BTVeE8osOy22Kz3SXY.jpg",
                    "id": 11,
                    "title": "Star Wars",
                    "original_language": "en",
                    "original_title": "Star Wars",
                    "overview": "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
                    "poster_path": "/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
                    "media_type": "movie",
                    "genre_ids": [
                        12,
                        28,
                        878
                    ],
                    "popularity": 78.047,
                    "release_date": "1977-05-25",
                    "video": false,
                    "vote_average": 8.208,
                    "vote_count": 18528
                },
                {
                    "adult": false,
                    "backdrop_path": "/iflKt34Ck2JpY2PY9wW1zwdJgJi.jpg",
                    "id": 782054,
                    "title": "Doraemon: Nobita's Little Star Wars 2021",
                    "original_language": "ja",
                    "original_title": "映画ドラえもん のび太の宇宙小戦争 2021",
                    "overview": "One day during summer vacation, a palm-sized alien named Papi appears from a small rocket that Nobita picks up. He is the president of Pirika, a small planet in outer space, and has come to Earth to escape the rebels. Doraemon and his friends are puzzled by Papi’s small size, but as they play together using the secret tool “Small Light”, they gradually become friends. However, a whale-shaped space battleship comes to earth and attacks Doraemon, Nobita and the others in order to capture Papi. Feeling responsible for getting everyone involved, Papi tries to stand up to the rebels. Doraemon and his friends leave for the planet Pirika to protect their dear friend and his home.",
                    "poster_path": "/48gKZioIDeUOI0afbYv3kh9u9RQ.jpg",
                    "media_type": "movie",
                    "genre_ids": [
                        16,
                        878,
                        12
                    ],
                    "popularity": 33.466,
                    "release_date": "2022-03-04",
                    "video": false,
                    "vote_average": 5.825,
                    "vote_count": 60
                },
                {
                    "adult": false,
                    "backdrop_path": "/ajztm40qDPqMONaSJhQ2PaNe2Xd.jpg",
                    "id": 83867,
                    "name": "Star Wars: Andor",
                    "original_language": "en",
                    "original_name": "Star Wars: Andor",
                    "overview": "The tale of the burgeoning rebellion against the Empire and how people and planets became involved. In an era filled with danger, deception and intrigue, Cassian Andor embarks on the path that is destined to turn him into a rebel hero.",
                    "poster_path": "/59SVNwLfoMnZPPB6ukW6dlPxAdI.jpg",
                    "media_type": "tv",
                    "genre_ids": [
                        10765,
                        10759,
                        10768
                    ],
                    "popularity": 87.697,
                    "first_air_date": "2022-09-21",
                    "vote_average": 8.223,
                    "vote_count": 671,
                    "origin_country": [
                        "US"
                    ]
                }
            ],
            "total_pages": 11,
            "total_results": 201
        },
        "idField": "id"
    },
    {
        "entity": "n4n",
        "accessor": "N4n",
        "op": "create",
        "method": "POST",
        "path": "/3/authentication/session/convert/4",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "network",
        "accessor": "Network",
        "op": "load",
        "method": "GET",
        "path": "/3/network/{network_id}",
        "args": [
            {
                "name": "id",
                "wire": "network_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "network_alternative_name",
        "accessor": "NetworkAlternativeName",
        "op": "list",
        "method": "GET",
        "path": "/3/network/{network_id}/alternative_names",
        "args": [
            {
                "name": "id",
                "wire": "network_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "network_image",
        "accessor": "NetworkImage",
        "op": "list",
        "method": "GET",
        "path": "/3/network/{network_id}/images",
        "args": [
            {
                "name": "id",
                "wire": "network_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "new",
        "accessor": "New",
        "op": "create",
        "method": "POST",
        "path": "/3/authentication/session/new",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "now_playing",
        "accessor": "NowPlaying",
        "op": "list",
        "method": "GET",
        "path": "/3/movie/now_playing",
        "args": [],
        "select": {
            "language": "en-US",
            "page": 1,
            "region": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "language",
            "page",
            "region"
        ],
        "queryArgs": [
            {
                "name": "language",
                "wire": "language"
            },
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "region",
                "wire": "region"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "on_the_air",
        "accessor": "OnTheAir",
        "op": "list",
        "method": "GET",
        "path": "/3/tv/on_the_air",
        "args": [],
        "select": {
            "language": "en-US",
            "page": 1,
            "timezone": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "language",
            "page",
            "timezone"
        ],
        "queryArgs": [
            {
                "name": "language",
                "wire": "language"
            },
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "timezone",
                "wire": "timezone"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "person",
        "accessor": "Person",
        "op": "list",
        "method": "GET",
        "path": "/3/search/person",
        "args": [],
        "select": {
            "query": "v1",
            "include_adult": "v1",
            "language": "en-US",
            "page": 1
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "query",
            "include_adult",
            "language",
            "page"
        ],
        "queryArgs": [
            {
                "name": "include_adult",
                "wire": "include_adult"
            },
            {
                "name": "language",
                "wire": "language"
            },
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "query",
                "wire": "query"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "person_change",
        "accessor": "PersonChange",
        "op": "list",
        "method": "GET",
        "path": "/3/person/{person_id}/changes",
        "args": [
            {
                "name": "id",
                "wire": "person_id",
                "value": "p1"
            }
        ],
        "select": {
            "end_date": "v1",
            "page": 1,
            "start_date": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "end_date",
            "page",
            "start_date"
        ],
        "queryArgs": [
            {
                "name": "end_date",
                "wire": "end_date"
            },
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "start_date",
                "wire": "start_date"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "person_combined_credit",
        "accessor": "PersonCombinedCredit",
        "op": "list",
        "method": "GET",
        "path": "/3/person/{person_id}/combined_credits",
        "args": [
            {
                "name": "id",
                "wire": "person_id",
                "value": "p1"
            }
        ],
        "select": {
            "language": "en-US"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "language"
        ],
        "queryArgs": [
            {
                "name": "language",
                "wire": "language"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "person_external_id",
        "accessor": "PersonExternalId",
        "op": "load",
        "method": "GET",
        "path": "/3/person/{person_id}/external_ids",
        "args": [
            {
                "name": "id",
                "wire": "person_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "person_image",
        "accessor": "PersonImage",
        "op": "list",
        "method": "GET",
        "path": "/3/person/{person_id}/images",
        "args": [
            {
                "name": "id",
                "wire": "person_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "person_movie_credit",
        "accessor": "PersonMovieCredit",
        "op": "list",
        "method": "GET",
        "path": "/3/person/{person_id}/movie_credits",
        "args": [
            {
                "name": "id",
                "wire": "person_id",
                "value": "p1"
            }
        ],
        "select": {
            "language": "en-US"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "language"
        ],
        "queryArgs": [
            {
                "name": "language",
                "wire": "language"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "person_tagged_image",
        "accessor": "PersonTaggedImage",
        "op": "list",
        "method": "GET",
        "path": "/3/person/{person_id}/tagged_images",
        "args": [
            {
                "name": "id",
                "wire": "person_id",
                "value": "p1"
            }
        ],
        "select": {
            "page": 1
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "page"
        ],
        "queryArgs": [
            {
                "name": "page",
                "wire": "page"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "person_translation",
        "accessor": "PersonTranslation",
        "op": "list",
        "method": "GET",
        "path": "/3/person/{person_id}/translations",
        "args": [
            {
                "name": "id",
                "wire": "person_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "person_tv_credit",
        "accessor": "PersonTvCredit",
        "op": "list",
        "method": "GET",
        "path": "/3/person/{person_id}/tv_credits",
        "args": [
            {
                "name": "id",
                "wire": "person_id",
                "value": "p1"
            }
        ],
        "select": {
            "language": "en-US"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "language"
        ],
        "queryArgs": [
            {
                "name": "language",
                "wire": "language"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "primary_translation",
        "accessor": "PrimaryTranslation",
        "op": "list",
        "method": "GET",
        "path": "/3/configuration/primary_translations",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "provider",
        "accessor": "Provider",
        "op": "load",
        "method": "GET",
        "path": "/3/tv/{series_id}/season/{season_number}/watch/providers",
        "args": [
            {
                "name": "season_id",
                "wire": "season_number",
                "value": "p1"
            },
            {
                "name": "tv_id",
                "wire": "series_id",
                "value": "p2"
            }
        ],
        "select": {
            "language": "en-US"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "language"
        ],
        "queryArgs": [
            {
                "name": "language",
                "wire": "language"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": 3624,
            "results": {
                "AD": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=AD",
                    "flatrate": [
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 24
                        }
                    ]
                },
                "AE": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=AE",
                    "flatrate": [
                        {
                            "logo_path": "/kC6JTo59Gj6I4vJPyBAYGh0sKAE.jpg",
                            "provider_id": 629,
                            "provider_name": "OSN+",
                            "display_priority": 7
                        }
                    ]
                },
                "AG": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=AG",
                    "flatrate": [
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 11
                        }
                    ]
                },
                "AR": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=AR",
                    "flatrate": [
                        {
                            "logo_path": "/nr5UBW4IGKgBwmhpTMOfcvnX2vX.jpg",
                            "provider_id": 467,
                            "provider_name": "DIRECTV GO",
                            "display_priority": 12
                        },
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 35
                        }
                    ]
                },
                "AT": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=AT",
                    "buy": [
                        {
                            "logo_path": "/seGSXajazLMCKGB5hnRCidtjay1.jpg",
                            "provider_id": 10,
                            "provider_name": "Amazon Video",
                            "display_priority": 3
                        },
                        {
                            "logo_path": "/8z7rC8uIDaTM91X0ZfkRf04ydj2.jpg",
                            "provider_id": 3,
                            "provider_name": "Google Play Movies",
                            "display_priority": 7
                        },
                        {
                            "logo_path": "/cBN4jd4wPq6on0kESiTlevqvlnL.jpg",
                            "provider_id": 20,
                            "provider_name": "maxdome Store",
                            "display_priority": 13
                        }
                    ],
                    "flatrate": [
                        {
                            "logo_path": "/kAZkQcIxMxTmlwdgSB05fqtymp0.jpg",
                            "provider_id": 29,
                            "provider_name": "Sky Go",
                            "display_priority": 8
                        }
                    ]
                },
                "AU": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=AU",
                    "flatrate": [
                        {
                            "logo_path": "/fejdSG7TwNQ5E0p6u7A6LVs280R.jpg",
                            "provider_id": 134,
                            "provider_name": "Foxtel Now",
                            "display_priority": 8
                        },
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 94
                        }
                    ],
                    "buy": [
                        {
                            "logo_path": "/oMYZg3cGAGp9ecKGlBgumcjDmnN.jpg",
                            "provider_id": 2,
                            "provider_name": "Apple TV",
                            "display_priority": 11
                        },
                        {
                            "logo_path": "/seGSXajazLMCKGB5hnRCidtjay1.jpg",
                            "provider_id": 10,
                            "provider_name": "Amazon Video",
                            "display_priority": 13
                        },
                        {
                            "logo_path": "/9B7l9ZSos54kFrZbliVExt2z9C9.jpg",
                            "provider_id": 436,
                            "provider_name": "Fetch TV",
                            "display_priority": 31
                        }
                    ]
                },
                "BA": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=BA",
                    "flatrate": [
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 27
                        }
                    ]
                },
                "BB": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=BB",
                    "flatrate": [
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 23
                        }
                    ]
                },
                "BE": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=BE",
                    "buy": [
                        {
                            "logo_path": "/seGSXajazLMCKGB5hnRCidtjay1.jpg",
                            "provider_id": 10,
                            "provider_name": "Amazon Video",
                            "display_priority": 33
                        }
                    ],
                    "flatrate": [
                        {
                            "logo_path": "/kwftIxtjuCAROIcdd53UEjzSmca.jpg",
                            "provider_id": 1857,
                            "provider_name": "Telenet",
                            "display_priority": 31
                        },
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 38
                        }
                    ]
                },
                "BG": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=BG",
                    "flatrate": [
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 21
                        }
                    ]
                },
                "BH": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=BH",
                    "flatrate": [
                        {
                            "logo_path": "/kC6JTo59Gj6I4vJPyBAYGh0sKAE.jpg",
                            "provider_id": 629,
                            "provider_name": "OSN+",
                            "display_priority": 29
                        }
                    ]
                },
                "BO": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=BO",
                    "flatrate": [
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 30
                        }
                    ]
                },
                "BR": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=BR",
                    "flatrate": [
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 6
                        },
                        {
                            "logo_path": "/7EpFKOCMrlo3bjsyBMrec64c7Wb.jpg",
                            "provider_id": 484,
                            "provider_name": "Claro tv+",
                            "display_priority": 21
                        }
                    ]
                },
                "BS": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=BS",
                    "flatrate": [
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 24
                        }
                    ]
                },
                "BZ": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=BZ",
                    "flatrate": [
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 9
                        }
                    ]
                },
                "CA": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=CA",
                    "flatrate": [
                        {
                            "logo_path": "/ewOptMVIYcOadMGGJz8DJueH2bH.jpg",
                            "provider_id": 230,
                            "provider_name": "Crave",
                            "display_priority": 4
                        }
                    ],
                    "buy": [
                        {
                            "logo_path": "/oMYZg3cGAGp9ecKGlBgumcjDmnN.jpg",
                            "provider_id": 2,
                            "provider_name": "Apple TV",
                            "display_priority": 5
                        },
                        {
                            "logo_path": "/seGSXajazLMCKGB5hnRCidtjay1.jpg",
                            "provider_id": 10,
                            "provider_name": "Amazon Video",
                            "display_priority": 56
                        }
                    ]
                },
                "CH": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=CH",
                    "buy": [
                        {
                            "logo_path": "/8z7rC8uIDaTM91X0ZfkRf04ydj2.jpg",
                            "provider_id": 3,
                            "provider_name": "Google Play Movies",
                            "display_priority": 5
                        },
                        {
                            "logo_path": "/6AKbY2ayaEuH4zKg2prqoVQ9iaY.jpg",
                            "provider_id": 130,
                            "provider_name": "Sky Store",
                            "display_priority": 14
                        }
                    ],
                    "flatrate": [
                        {
                            "logo_path": "/ytApMa9fThUQUFTn696AeNBrB8f.jpg",
                            "provider_id": 210,
                            "provider_name": "Sky",
                            "display_priority": 6
                        }
                    ]
                },
                "CI": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=CI",
                    "flatrate": [
                        {
                            "logo_path": "/ilR8XFZOr3e3wETQ4ZXLjXQXrts.jpg",
                            "provider_id": 55,
                            "provider_name": "ShowMax",
                            "display_priority": 19
                        }
                    ]
                },
                "CL": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=CL",
                    "flatrate": [
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 7
                        },
                        {
                            "logo_path": "/tRNA2CRgA4XHvd7Mx9dH3sFtDVb.jpg",
                            "provider_id": 339,
                            "provider_name": "MovistarTV",
                            "display_priority": 8
                        },
                        {
                            "logo_path": "/nr5UBW4IGKgBwmhpTMOfcvnX2vX.jpg",
                            "provider_id": 467,
                            "provider_name": "DIRECTV GO",
                            "display_priority": 11
                        }
                    ]
                },
                "CM": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=CM",
                    "flatrate": [
                        {
                            "logo_path": "/ilR8XFZOr3e3wETQ4ZXLjXQXrts.jpg",
                            "provider_id": 55,
                            "provider_name": "ShowMax",
                            "display_priority": 0
                        }
                    ]
                },
                "CO": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=CO",
                    "flatrate": [
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 6
                        },
                        {
                            "logo_path": "/tRNA2CRgA4XHvd7Mx9dH3sFtDVb.jpg",
                            "provider_id": 339,
                            "provider_name": "MovistarTV",
                            "display_priority": 8
                        },
                        {
                            "logo_path": "/nr5UBW4IGKgBwmhpTMOfcvnX2vX.jpg",
                            "provider_id": 467,
                            "provider_name": "DIRECTV GO",
                            "display_priority": 12
                        }
                    ]
                },
                "CR": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=CR",
                    "flatrate": [
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 4
                        }
                    ]
                },
                "CZ": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=CZ",
                    "flatrate": [
                        {
                            "logo_path": "/489t5n9o1KhH7voGNQkrXT7vBKV.jpg",
                            "provider_id": 1939,
                            "provider_name": "Lepsi TV",
                            "display_priority": 26
                        },
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 30
                        }
                    ]
                },
                "DE": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=DE",
                    "flatrate": [
                        {
                            "logo_path": "/kAZkQcIxMxTmlwdgSB05fqtymp0.jpg",
                            "provider_id": 29,
                            "provider_name": "Sky Go",
                            "display_priority": 8
                        },
                        {
                            "logo_path": "/9r5zFWuYnwjzO1JrNjSbLQwUc3P.jpg",
                            "provider_id": 30,
                            "provider_name": "WOW",
                            "display_priority": 9
                        }
                    ],
                    "buy": [
                        {
                            "logo_path": "/oMYZg3cGAGp9ecKGlBgumcjDmnN.jpg",
                            "provider_id": 2,
                            "provider_name": "Apple TV",
                            "display_priority": 4
                        },
                        {
                            "logo_path": "/seGSXajazLMCKGB5hnRCidtjay1.jpg",
                            "provider_id": 10,
                            "provider_name": "Amazon Video",
                            "display_priority": 7
                        },
                        {
                            "logo_path": "/cBN4jd4wPq6on0kESiTlevqvlnL.jpg",
                            "provider_id": 20,
                            "provider_name": "maxdome Store",
                            "display_priority": 16
                        }
                    ]
                },
                "DK": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=DK",
                    "flatrate": [
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 39
                        }
                    ]
                },
                "DO": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=DO",
                    "flatrate": [
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 30
                        }
                    ]
                },
                "EC": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=EC",
                    "flatrate": [
                        {
                            "logo_path": "/tRNA2CRgA4XHvd7Mx9dH3sFtDVb.jpg",
                            "provider_id": 339,
                            "provider_name": "MovistarTV",
                            "display_priority": 4
                        },
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 5
                        }
                    ]
                },
                "EG": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=EG",
                    "flatrate": [
                        {
                            "logo_path": "/kC6JTo59Gj6I4vJPyBAYGh0sKAE.jpg",
                            "provider_id": 629,
                            "provider_name": "OSN+",
                            "display_priority": 20
                        }
                    ]
                },
                "ES": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=ES",
                    "flatrate": [
                        {
                            "logo_path": "/f6TRLB3H4jDpFEZ0z2KWSSvu1SB.jpg",
                            "provider_id": 149,
                            "provider_name": "Movistar Plus+ Ficción Total ",
                            "display_priority": 6
                        },
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 16
                        },
                        {
                            "logo_path": "/5AkEgpCNaBP3Fbwd2m1GdQIk0vv.jpg",
                            "provider_id": 2472,
                            "provider_name": "HBO Max  Amazon Channel",
                            "display_priority": 81
                        }
                    ],
                    "buy": [
                        {
                            "logo_path": "/seGSXajazLMCKGB5hnRCidtjay1.jpg",
                            "provider_id": 10,
                            "provider_name": "Amazon Video",
                            "display_priority": 32
                        }
                    ]
                },
                "FI": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=FI",
                    "flatrate": [
                        {
                            "logo_path": "/eglAxQEXSO13p6gNf3HKymrIu7y.jpg",
                            "provider_id": 540,
                            "provider_name": "Elisa Viihde",
                            "display_priority": 18
                        },
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 41
                        }
                    ],
                    "buy": [
                        {
                            "logo_path": "/seGSXajazLMCKGB5hnRCidtjay1.jpg",
                            "provider_id": 10,
                            "provider_name": "Amazon Video",
                            "display_priority": 54
                        }
                    ]
                },
                "FR": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=FR",
                    "buy": [
                        {
                            "logo_path": "/oMYZg3cGAGp9ecKGlBgumcjDmnN.jpg",
                            "provider_id": 2,
                            "provider_name": "Apple TV",
                            "display_priority": 4
                        },
                        {
                            "logo_path": "/cAUTwxqoI7zc9XtYr1SMtWZEsXg.jpg",
                            "provider_id": 58,
                            "provider_name": "Canal VOD",
                            "display_priority": 8
                        },
                        {
                            "logo_path": "/9Fyo6njYvroAIxAzTBbLgnjgYga.jpg",
                            "provider_id": 61,
                            "provider_name": "Orange VOD",
                            "display_priority": 11
                        }
                    ],
                    "flatrate": [
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 78
                        },
                        {
                            "logo_path": "/5AkEgpCNaBP3Fbwd2m1GdQIk0vv.jpg",
                            "provider_id": 2472,
                            "provider_name": "HBO Max  Amazon Channel",
                            "display_priority": 91
                        }
                    ]
                },
                "GB": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=GB",
                    "buy": [
                        {
                            "logo_path": "/oMYZg3cGAGp9ecKGlBgumcjDmnN.jpg",
                            "provider_id": 2,
                            "provider_name": "Apple TV",
                            "display_priority": 4
                        },
                        {
                            "logo_path": "/seGSXajazLMCKGB5hnRCidtjay1.jpg",
                            "provider_id": 10,
                            "provider_name": "Amazon Video",
                            "display_priority": 7
                        },
                        {
                            "logo_path": "/6AKbY2ayaEuH4zKg2prqoVQ9iaY.jpg",
                            "provider_id": 130,
                            "provider_name": "Sky Store",
                            "display_priority": 15
                        }
                    ],
                    "flatrate": [
                        {
                            "logo_path": "/g0E9h3JAeIwmdvxlT73jiEuxdNj.jpg",
                            "provider_id": 39,
                            "provider_name": "Now TV",
                            "display_priority": 43
                        }
                    ]
                },
                "GG": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=GG",
                    "buy": [
                        {
                            "logo_path": "/seGSXajazLMCKGB5hnRCidtjay1.jpg",
                            "provider_id": 10,
                            "provider_name": "Amazon Video",
                            "display_priority": 84
                        }
                    ]
                },
                "GQ": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=GQ",
                    "flatrate": [
                        {
                            "logo_path": "/ilR8XFZOr3e3wETQ4ZXLjXQXrts.jpg",
                            "provider_id": 55,
                            "provider_name": "ShowMax",
                            "display_priority": 7
                        }
                    ]
                },
                "GT": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=GT",
                    "flatrate": [
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 4
                        }
                    ]
                },
                "GY": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=GY",
                    "flatrate": [
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 3
                        }
                    ]
                },
                "HK": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=HK",
                    "flatrate": [
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 38
                        }
                    ]
                },
                "HN": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=HN",
                    "flatrate": [
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 30
                        }
                    ]
                },
                "HR": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=HR",
                    "flatrate": [
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 33
                        }
                    ]
                },
                "HU": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=HU",
                    "flatrate": [
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 28
                        }
                    ]
                },
                "ID": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=ID",
                    "flatrate": [
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 39
                        }
                    ]
                },
                "IE": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=IE",
                    "flatrate": [
                        {
                            "logo_path": "/g0E9h3JAeIwmdvxlT73jiEuxdNj.jpg",
                            "provider_id": 39,
                            "provider_name": "Now TV",
                            "display_priority": 10
                        }
                    ],
                    "buy": [
                        {
                            "logo_path": "/6AKbY2ayaEuH4zKg2prqoVQ9iaY.jpg",
                            "provider_id": 130,
                            "provider_name": "Sky Store",
                            "display_priority": 9
                        },
                        {
                            "logo_path": "/seGSXajazLMCKGB5hnRCidtjay1.jpg",
                            "provider_id": 10,
                            "provider_name": "Amazon Video",
                            "display_priority": 42
                        }
                    ]
                },
                "IN": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=IN",
                    "flatrate": [
                        {
                            "logo_path": "/kVqjgpcwvDJOhCupjcLzwwtOp52.jpg",
                            "provider_id": 2336,
                            "provider_name": "JioHotstar",
                            "display_priority": 5
                        },
                        {
                            "logo_path": "/9YJY5OwsIPMoX3xC3TdtZVbKBpE.jpg",
                            "provider_id": 614,
                            "provider_name": "VI movies and tv",
                            "display_priority": 35
                        }
                    ]
                },
                "IQ": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=IQ",
                    "flatrate": [
                        {
                            "logo_path": "/kC6JTo59Gj6I4vJPyBAYGh0sKAE.jpg",
                            "provider_id": 629,
                            "provider_name": "OSN+",
                            "display_priority": 7
                        }
                    ]
                },
                "IT": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=IT",
                    "buy": [
                        {
                            "logo_path": "/seGSXajazLMCKGB5hnRCidtjay1.jpg",
                            "provider_id": 10,
                            "provider_name": "Amazon Video",
                            "display_priority": 33
                        },
                        {
                            "logo_path": "/cNqhhi5UYjAvJv2M69t5cwSn0So.jpg",
                            "provider_id": 40,
                            "provider_name": "CHILI",
                            "display_priority": 34
                        }
                    ],
                    "flatrate": [
                        {
                            "logo_path": "/g0E9h3JAeIwmdvxlT73jiEuxdNj.jpg",
                            "provider_id": 39,
                            "provider_name": "Now TV",
                            "display_priority": 10
                        }
                    ]
                },
                "JM": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=JM",
                    "flatrate": [
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 22
                        }
                    ]
                },
                "JO": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=JO",
                    "flatrate": [
                        {
                            "logo_path": "/kC6JTo59Gj6I4vJPyBAYGh0sKAE.jpg",
                            "provider_id": 629,
                            "provider_name": "OSN+",
                            "display_priority": 31
                        }
                    ]
                },
                "JP": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=JP",
                    "flatrate": [
                        {
                            "logo_path": "/a5T7vNaGvoeckYO6rQkHolvyYf4.jpg",
                            "provider_id": 84,
                            "provider_name": "U-NEXT",
                            "display_priority": 2
                        },
                        {
                            "logo_path": "/zA1rTWwNDx96pwkHUuvVWWkdpPa.jpg",
                            "provider_id": 2284,
                            "provider_name": "HBO Max on U-Next",
                            "display_priority": 27
                        }
                    ],
                    "buy": [
                        {
                            "logo_path": "/seGSXajazLMCKGB5hnRCidtjay1.jpg",
                            "provider_id": 10,
                            "provider_name": "Amazon Video",
                            "display_priority": 5
                        },
                        {
                            "logo_path": "/8z7rC8uIDaTM91X0ZfkRf04ydj2.jpg",
                            "provider_id": 3,
                            "provider_name": "Google Play Movies",
                            "display_priority": 7
                        }
                    ],
                    "rent": [
                        {
                            "logo_path": "/seGSXajazLMCKGB5hnRCidtjay1.jpg",
                            "provider_id": 10,
                            "provider_name": "Amazon Video",
                            "display_priority": 5
                        }
                    ]
                },
                "KE": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=KE",
                    "flatrate": [
                        {
                            "logo_path": "/ilR8XFZOr3e3wETQ4ZXLjXQXrts.jpg",
                            "provider_id": 55,
                            "provider_name": "ShowMax",
                            "display_priority": 7
                        }
                    ]
                },
                "LB": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=LB",
                    "flatrate": [
                        {
                            "logo_path": "/kC6JTo59Gj6I4vJPyBAYGh0sKAE.jpg",
                            "provider_id": 629,
                            "provider_name": "OSN+",
                            "display_priority": 7
                        }
                    ]
                },
                "LC": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=LC",
                    "flatrate": [
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 10
                        }
                    ]
                },
                "MC": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=MC",
                    "flatrate": [
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 25
                        }
                    ]
                },
                "MD": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=MD",
                    "flatrate": [
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 25
                        }
                    ]
                },
                "ME": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=ME",
                    "flatrate": [
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 6
                        }
                    ]
                },
                "MG": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=MG",
                    "flatrate": [
                        {
                            "logo_path": "/ilR8XFZOr3e3wETQ4ZXLjXQXrts.jpg",
                            "provider_id": 55,
                            "provider_name": "ShowMax",
                            "display_priority": 0
                        }
                    ]
                },
                "MK": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=MK",
                    "flatrate": [
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 26
                        }
                    ]
                },
                "ML": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=ML",
                    "flatrate": [
                        {
                            "logo_path": "/ilR8XFZOr3e3wETQ4ZXLjXQXrts.jpg",
                            "provider_id": 55,
                            "provider_name": "ShowMax",
                            "display_priority": 0
                        }
                    ]
                },
                "MU": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=MU",
                    "flatrate": [
                        {
                            "logo_path": "/ilR8XFZOr3e3wETQ4ZXLjXQXrts.jpg",
                            "provider_id": 55,
                            "provider_name": "ShowMax",
                            "display_priority": 5
                        }
                    ]
                },
                "MX": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=MX",
                    "flatrate": [
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 5
                        },
                        {
                            "logo_path": "/nr5UBW4IGKgBwmhpTMOfcvnX2vX.jpg",
                            "provider_id": 467,
                            "provider_name": "DIRECTV GO",
                            "display_priority": 21
                        }
                    ]
                },
                "MY": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=MY",
                    "flatrate": [
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 31
                        }
                    ]
                },
                "MZ": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=MZ",
                    "flatrate": [
                        {
                            "logo_path": "/ilR8XFZOr3e3wETQ4ZXLjXQXrts.jpg",
                            "provider_id": 55,
                            "provider_name": "ShowMax",
                            "display_priority": 7
                        }
                    ]
                },
                "NE": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=NE",
                    "flatrate": [
                        {
                            "logo_path": "/ilR8XFZOr3e3wETQ4ZXLjXQXrts.jpg",
                            "provider_id": 55,
                            "provider_name": "ShowMax",
                            "display_priority": 19
                        }
                    ]
                },
                "NG": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=NG",
                    "flatrate": [
                        {
                            "logo_path": "/ilR8XFZOr3e3wETQ4ZXLjXQXrts.jpg",
                            "provider_id": 55,
                            "provider_name": "ShowMax",
                            "display_priority": 21
                        }
                    ]
                },
                "NI": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=NI",
                    "flatrate": [
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 13
                        }
                    ]
                },
                "NL": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=NL",
                    "buy": [
                        {
                            "logo_path": "/seGSXajazLMCKGB5hnRCidtjay1.jpg",
                            "provider_id": 10,
                            "provider_name": "Amazon Video",
                            "display_priority": 34
                        }
                    ],
                    "flatrate": [
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 48
                        }
                    ]
                },
                "NO": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=NO",
                    "flatrate": [
                        {
                            "logo_path": "/3ZigBD8WTEPcEHAvMWiJGUsv5u4.jpg",
                            "provider_id": 578,
                            "provider_name": "Strim",
                            "display_priority": 27
                        },
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 40
                        }
                    ]
                },
                "NZ": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=NZ",
                    "buy": [
                        {
                            "logo_path": "/seGSXajazLMCKGB5hnRCidtjay1.jpg",
                            "provider_id": 10,
                            "provider_name": "Amazon Video",
                            "display_priority": 59
                        }
                    ],
                    "flatrate": [
                        {
                            "logo_path": "/iscLKFDwQlr0BAgVDBcuRapLiwC.jpg",
                            "provider_id": 273,
                            "provider_name": "Neon TV",
                            "display_priority": 3
                        }
                    ]
                },
                "OM": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=OM",
                    "flatrate": [
                        {
                            "logo_path": "/kC6JTo59Gj6I4vJPyBAYGh0sKAE.jpg",
                            "provider_id": 629,
                            "provider_name": "OSN+",
                            "display_priority": 31
                        }
                    ]
                },
                "PA": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=PA",
                    "flatrate": [
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 30
                        }
                    ]
                },
                "PE": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=PE",
                    "flatrate": [
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 7
                        },
                        {
                            "logo_path": "/nr5UBW4IGKgBwmhpTMOfcvnX2vX.jpg",
                            "provider_id": 467,
                            "provider_name": "DIRECTV GO",
                            "display_priority": 12
                        }
                    ]
                },
                "PH": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=PH",
                    "flatrate": [
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 32
                        }
                    ]
                },
                "PL": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=PL",
                    "flatrate": [
                        {
                            "logo_path": "/jhMNVBV2UocEGepRkr9oFPD7Gpb.jpg",
                            "provider_id": 505,
                            "provider_name": "Player",
                            "display_priority": 10
                        },
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 37
                        }
                    ],
                    "buy": [
                        {
                            "logo_path": "/seGSXajazLMCKGB5hnRCidtjay1.jpg",
                            "provider_id": 10,
                            "provider_name": "Amazon Video",
                            "display_priority": 27
                        }
                    ]
                },
                "PT": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=PT",
                    "buy": [
                        {
                            "logo_path": "/seGSXajazLMCKGB5hnRCidtjay1.jpg",
                            "provider_id": 10,
                            "provider_name": "Amazon Video",
                            "display_priority": 43
                        }
                    ],
                    "flatrate": [
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 32
                        }
                    ]
                },
                "PY": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=PY",
                    "flatrate": [
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 29
                        }
                    ]
                },
                "QA": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=QA",
                    "flatrate": [
                        {
                            "logo_path": "/kC6JTo59Gj6I4vJPyBAYGh0sKAE.jpg",
                            "provider_id": 629,
                            "provider_name": "OSN+",
                            "display_priority": 31
                        }
                    ]
                },
                "RO": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=RO",
                    "flatrate": [
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 23
                        }
                    ]
                },
                "RS": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=RS",
                    "flatrate": [
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 28
                        }
                    ]
                },
                "RU": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=RU",
                    "flatrate": [
                        {
                            "logo_path": "/5z8dpQN27kybhn21EVLZcJPpMEo.jpg",
                            "provider_id": 115,
                            "provider_name": "Okko",
                            "display_priority": 0
                        },
                        {
                            "logo_path": "/dNaqCdDy4wsIzjZoYwvLRiOK4Tx.jpg",
                            "provider_id": 116,
                            "provider_name": "Amediateka",
                            "display_priority": 1
                        }
                    ]
                },
                "SA": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=SA",
                    "flatrate": [
                        {
                            "logo_path": "/kC6JTo59Gj6I4vJPyBAYGh0sKAE.jpg",
                            "provider_id": 629,
                            "provider_name": "OSN+",
                            "display_priority": 20
                        }
                    ]
                },
                "SC": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=SC",
                    "flatrate": [
                        {
                            "logo_path": "/ilR8XFZOr3e3wETQ4ZXLjXQXrts.jpg",
                            "provider_id": 55,
                            "provider_name": "ShowMax",
                            "display_priority": 6
                        }
                    ]
                },
                "SE": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=SE",
                    "buy": [
                        {
                            "logo_path": "/seGSXajazLMCKGB5hnRCidtjay1.jpg",
                            "provider_id": 10,
                            "provider_name": "Amazon Video",
                            "display_priority": 39
                        }
                    ],
                    "flatrate": [
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 44
                        }
                    ]
                },
                "SG": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=SG",
                    "flatrate": [
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 31
                        }
                    ]
                },
                "SI": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=SI",
                    "flatrate": [
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 28
                        }
                    ]
                },
                "SK": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=SK",
                    "flatrate": [
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 37
                        }
                    ]
                },
                "SN": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=SN",
                    "flatrate": [
                        {
                            "logo_path": "/ilR8XFZOr3e3wETQ4ZXLjXQXrts.jpg",
                            "provider_id": 55,
                            "provider_name": "ShowMax",
                            "display_priority": 7
                        }
                    ]
                },
                "SV": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=SV",
                    "flatrate": [
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 30
                        }
                    ]
                },
                "TC": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=TC",
                    "flatrate": [
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 10
                        }
                    ]
                },
                "TD": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=TD",
                    "flatrate": [
                        {
                            "logo_path": "/ilR8XFZOr3e3wETQ4ZXLjXQXrts.jpg",
                            "provider_id": 55,
                            "provider_name": "ShowMax",
                            "display_priority": 0
                        }
                    ]
                },
                "TH": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=TH",
                    "flatrate": [
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 30
                        }
                    ]
                },
                "TR": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=TR",
                    "flatrate": [
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 29
                        }
                    ]
                },
                "TT": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=TT",
                    "flatrate": [
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 11
                        }
                    ]
                },
                "TW": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=TW",
                    "flatrate": [
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 38
                        }
                    ]
                },
                "US": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=US",
                    "flatrate": [
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 11
                        },
                        {
                            "logo_path": "/5AkEgpCNaBP3Fbwd2m1GdQIk0vv.jpg",
                            "provider_id": 1825,
                            "provider_name": "HBO Max Amazon Channel",
                            "display_priority": 12
                        }
                    ],
                    "buy": [
                        {
                            "logo_path": "/seGSXajazLMCKGB5hnRCidtjay1.jpg",
                            "provider_id": 10,
                            "provider_name": "Amazon Video",
                            "display_priority": 6
                        },
                        {
                            "logo_path": "/oMYZg3cGAGp9ecKGlBgumcjDmnN.jpg",
                            "provider_id": 2,
                            "provider_name": "Apple TV",
                            "display_priority": 7
                        },
                        {
                            "logo_path": "/8z7rC8uIDaTM91X0ZfkRf04ydj2.jpg",
                            "provider_id": 3,
                            "provider_name": "Google Play Movies",
                            "display_priority": 16
                        }
                    ]
                },
                "UY": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=UY",
                    "flatrate": [
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 3
                        },
                        {
                            "logo_path": "/nr5UBW4IGKgBwmhpTMOfcvnX2vX.jpg",
                            "provider_id": 467,
                            "provider_name": "DIRECTV GO",
                            "display_priority": 8
                        }
                    ]
                },
                "VE": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=VE",
                    "flatrate": [
                        {
                            "logo_path": "/jbe4gVSfRlbPTdESXhEKpornsfu.jpg",
                            "provider_id": 1899,
                            "provider_name": "HBO Max",
                            "display_priority": 27
                        }
                    ]
                },
                "ZA": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=ZA",
                    "flatrate": [
                        {
                            "logo_path": "/ilR8XFZOr3e3wETQ4ZXLjXQXrts.jpg",
                            "provider_id": 55,
                            "provider_name": "ShowMax",
                            "display_priority": 4
                        }
                    ]
                },
                "ZM": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=ZM",
                    "flatrate": [
                        {
                            "logo_path": "/ilR8XFZOr3e3wETQ4ZXLjXQXrts.jpg",
                            "provider_id": 55,
                            "provider_name": "ShowMax",
                            "display_priority": 7
                        }
                    ]
                },
                "ZW": {
                    "link": "https://www.themoviedb.org/tv/1399-game-of-thrones/watch?locale=ZW",
                    "flatrate": [
                        {
                            "logo_path": "/ilR8XFZOr3e3wETQ4ZXLjXQXrts.jpg",
                            "provider_id": 55,
                            "provider_name": "ShowMax",
                            "display_priority": 0
                        }
                    ]
                }
            }
        },
        "idField": "id"
    },
    {
        "entity": "provider",
        "accessor": "Provider",
        "op": "load",
        "method": "GET",
        "path": "/3/movie/{movie_id}/watch/providers",
        "args": [
            {
                "name": "movie_id",
                "wire": "movie_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "provider",
        "accessor": "Provider",
        "op": "load",
        "method": "GET",
        "path": "/3/tv/{series_id}/watch/providers",
        "args": [
            {
                "name": "tv_id",
                "wire": "series_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "region",
        "accessor": "Region",
        "op": "list",
        "method": "GET",
        "path": "/3/watch/providers/regions",
        "args": [],
        "select": {
            "language": "en-US"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "language"
        ],
        "queryArgs": [
            {
                "name": "language",
                "wire": "language"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "review",
        "accessor": "Review",
        "op": "load",
        "method": "GET",
        "path": "/3/review/{review_id}",
        "args": [
            {
                "name": "id",
                "wire": "review_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "season",
        "accessor": "Season",
        "op": "load",
        "method": "GET",
        "path": "/3/tv/{series_id}/season/{season_number}",
        "args": [
            {
                "name": "id",
                "wire": "season_number",
                "value": "p1"
            },
            {
                "name": "tv_id",
                "wire": "series_id",
                "value": "p2"
            }
        ],
        "select": {
            "append_to_response": "v1",
            "language": "en-US"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "append_to_response",
            "language"
        ],
        "queryArgs": [
            {
                "name": "append_to_response",
                "wire": "append_to_response"
            },
            {
                "name": "language",
                "wire": "language"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "season_account_state",
        "accessor": "SeasonAccountState",
        "op": "list",
        "method": "GET",
        "path": "/3/tv/{series_id}/season/{season_number}/account_states",
        "args": [
            {
                "name": "season_number",
                "wire": "season_number",
                "value": "p1"
            },
            {
                "name": "tv_id",
                "wire": "series_id",
                "value": "p2"
            }
        ],
        "select": {
            "guest_session_id": "v1",
            "session_id": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "session_id",
            "guest_session_id"
        ],
        "queryArgs": [
            {
                "name": "guest_session_id",
                "wire": "guest_session_id"
            },
            {
                "name": "session_id",
                "wire": "session_id"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "season_aggregate_credit",
        "accessor": "SeasonAggregateCredit",
        "op": "list",
        "method": "GET",
        "path": "/3/tv/{series_id}/season/{season_number}/aggregate_credits",
        "args": [
            {
                "name": "season_number",
                "wire": "season_number",
                "value": "p1"
            },
            {
                "name": "tv_id",
                "wire": "series_id",
                "value": "p2"
            }
        ],
        "select": {
            "language": "en-US"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "language"
        ],
        "queryArgs": [
            {
                "name": "language",
                "wire": "language"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "season_change",
        "accessor": "SeasonChange",
        "op": "list",
        "method": "GET",
        "path": "/3/tv/season/{season_id}/changes",
        "args": [
            {
                "name": "id",
                "wire": "season_id",
                "value": "p1"
            }
        ],
        "select": {
            "end_date": "v1",
            "page": 1,
            "start_date": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "end_date",
            "page",
            "start_date"
        ],
        "queryArgs": [
            {
                "name": "end_date",
                "wire": "end_date"
            },
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "start_date",
                "wire": "start_date"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "season_credit",
        "accessor": "SeasonCredit",
        "op": "list",
        "method": "GET",
        "path": "/3/tv/{series_id}/season/{season_number}/credits",
        "args": [
            {
                "name": "season_number",
                "wire": "season_number",
                "value": "p1"
            },
            {
                "name": "tv_id",
                "wire": "series_id",
                "value": "p2"
            }
        ],
        "select": {
            "language": "en-US"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "language"
        ],
        "queryArgs": [
            {
                "name": "language",
                "wire": "language"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "season_external_id",
        "accessor": "SeasonExternalId",
        "op": "load",
        "method": "GET",
        "path": "/3/tv/{series_id}/season/{season_number}/external_ids",
        "args": [
            {
                "name": "season_number",
                "wire": "season_number",
                "value": "p1"
            },
            {
                "name": "tv_id",
                "wire": "series_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "season_image",
        "accessor": "SeasonImage",
        "op": "list",
        "method": "GET",
        "path": "/3/tv/{series_id}/season/{season_number}/images",
        "args": [
            {
                "name": "season_number",
                "wire": "season_number",
                "value": "p1"
            },
            {
                "name": "tv_id",
                "wire": "series_id",
                "value": "p2"
            }
        ],
        "select": {
            "include_image_language": "v1",
            "language": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "include_image_language",
            "language"
        ],
        "queryArgs": [
            {
                "name": "include_image_language",
                "wire": "include_image_language"
            },
            {
                "name": "language",
                "wire": "language"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "season_translation",
        "accessor": "SeasonTranslation",
        "op": "list",
        "method": "GET",
        "path": "/3/tv/{series_id}/season/{season_number}/translations",
        "args": [
            {
                "name": "season_number",
                "wire": "season_number",
                "value": "p1"
            },
            {
                "name": "tv_id",
                "wire": "series_id",
                "value": "p2"
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "season_video",
        "accessor": "SeasonVideo",
        "op": "list",
        "method": "GET",
        "path": "/3/tv/{series_id}/season/{season_number}/videos",
        "args": [
            {
                "name": "season_number",
                "wire": "season_number",
                "value": "p1"
            },
            {
                "name": "tv_id",
                "wire": "series_id",
                "value": "p2"
            }
        ],
        "select": {
            "include_video_language": "v1",
            "language": "en-US"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "include_video_language",
            "language"
        ],
        "queryArgs": [
            {
                "name": "include_video_language",
                "wire": "include_video_language"
            },
            {
                "name": "language",
                "wire": "language"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "session",
        "accessor": "Session",
        "op": "remove",
        "method": "DELETE",
        "path": "/3/authentication/session",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "timezone",
        "accessor": "Timezone",
        "op": "list",
        "method": "GET",
        "path": "/3/configuration/timezones",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "tv_account_state",
        "accessor": "TvAccountState",
        "op": "load",
        "method": "GET",
        "path": "/3/tv/{series_id}/account_states",
        "args": [
            {
                "name": "id",
                "wire": "series_id",
                "value": "p1"
            }
        ],
        "select": {
            "guest_session_id": "v1",
            "session_id": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "session_id",
            "guest_session_id"
        ],
        "queryArgs": [
            {
                "name": "guest_session_id",
                "wire": "guest_session_id"
            },
            {
                "name": "session_id",
                "wire": "session_id"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "tv_aggregate_credit",
        "accessor": "TvAggregateCredit",
        "op": "list",
        "method": "GET",
        "path": "/3/tv/{series_id}/aggregate_credits",
        "args": [
            {
                "name": "id",
                "wire": "series_id",
                "value": "p1"
            }
        ],
        "select": {
            "language": "en-US"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "language"
        ],
        "queryArgs": [
            {
                "name": "language",
                "wire": "language"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "tv_alternative_title",
        "accessor": "TvAlternativeTitle",
        "op": "list",
        "method": "GET",
        "path": "/3/tv/{series_id}/alternative_titles",
        "args": [
            {
                "name": "id",
                "wire": "series_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "tv_change",
        "accessor": "TvChange",
        "op": "list",
        "method": "GET",
        "path": "/3/tv/{series_id}/changes",
        "args": [
            {
                "name": "id",
                "wire": "series_id",
                "value": "p1"
            }
        ],
        "select": {
            "end_date": "v1",
            "page": 1,
            "start_date": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "end_date",
            "page",
            "start_date"
        ],
        "queryArgs": [
            {
                "name": "end_date",
                "wire": "end_date"
            },
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "start_date",
                "wire": "start_date"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "tv_content_rating",
        "accessor": "TvContentRating",
        "op": "list",
        "method": "GET",
        "path": "/3/tv/{series_id}/content_ratings",
        "args": [
            {
                "name": "id",
                "wire": "series_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "tv_credit",
        "accessor": "TvCredit",
        "op": "list",
        "method": "GET",
        "path": "/3/tv/{series_id}/credits",
        "args": [
            {
                "name": "id",
                "wire": "series_id",
                "value": "p1"
            }
        ],
        "select": {
            "language": "en-US"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "language"
        ],
        "queryArgs": [
            {
                "name": "language",
                "wire": "language"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "tv_episode_group",
        "accessor": "TvEpisodeGroup",
        "op": "list",
        "method": "GET",
        "path": "/3/tv/{series_id}/episode_groups",
        "args": [
            {
                "name": "id",
                "wire": "series_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "tv_external_id",
        "accessor": "TvExternalId",
        "op": "load",
        "method": "GET",
        "path": "/3/tv/{series_id}/external_ids",
        "args": [
            {
                "name": "id",
                "wire": "series_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "tv_image",
        "accessor": "TvImage",
        "op": "list",
        "method": "GET",
        "path": "/3/tv/{series_id}/images",
        "args": [
            {
                "name": "id",
                "wire": "series_id",
                "value": "p1"
            }
        ],
        "select": {
            "include_image_language": "v1",
            "language": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "include_image_language",
            "language"
        ],
        "queryArgs": [
            {
                "name": "include_image_language",
                "wire": "include_image_language"
            },
            {
                "name": "language",
                "wire": "language"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "tv_keyword",
        "accessor": "TvKeyword",
        "op": "list",
        "method": "GET",
        "path": "/3/tv/{series_id}/keywords",
        "args": [
            {
                "name": "id",
                "wire": "series_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "tv_list",
        "accessor": "TvList",
        "op": "list",
        "method": "GET",
        "path": "/3/tv/{series_id}/lists",
        "args": [
            {
                "name": "id",
                "wire": "series_id",
                "value": "p1"
            }
        ],
        "select": {
            "language": "en-US",
            "page": 1
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "language",
            "page"
        ],
        "queryArgs": [
            {
                "name": "language",
                "wire": "language"
            },
            {
                "name": "page",
                "wire": "page"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "tv_recommendation",
        "accessor": "TvRecommendation",
        "op": "list",
        "method": "GET",
        "path": "/3/tv/{series_id}/recommendations",
        "args": [
            {
                "name": "id",
                "wire": "series_id",
                "value": "p1"
            }
        ],
        "select": {
            "language": "en-US",
            "page": 1
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "language",
            "page"
        ],
        "queryArgs": [
            {
                "name": "language",
                "wire": "language"
            },
            {
                "name": "page",
                "wire": "page"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "tv_review",
        "accessor": "TvReview",
        "op": "list",
        "method": "GET",
        "path": "/3/tv/{series_id}/reviews",
        "args": [
            {
                "name": "id",
                "wire": "series_id",
                "value": "p1"
            }
        ],
        "select": {
            "language": "en-US",
            "page": 1
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "language",
            "page"
        ],
        "queryArgs": [
            {
                "name": "language",
                "wire": "language"
            },
            {
                "name": "page",
                "wire": "page"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "tv_screened_theatrically",
        "accessor": "TvScreenedTheatrically",
        "op": "list",
        "method": "GET",
        "path": "/3/tv/{series_id}/screened_theatrically",
        "args": [
            {
                "name": "id",
                "wire": "series_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "tv_similar",
        "accessor": "TvSimilar",
        "op": "list",
        "method": "GET",
        "path": "/3/tv/{series_id}/similar",
        "args": [
            {
                "name": "id",
                "wire": "series_id",
                "value": "p1"
            }
        ],
        "select": {
            "language": "en-US",
            "page": 1
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "language",
            "page"
        ],
        "queryArgs": [
            {
                "name": "language",
                "wire": "language"
            },
            {
                "name": "page",
                "wire": "page"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "tv_translation",
        "accessor": "TvTranslation",
        "op": "list",
        "method": "GET",
        "path": "/3/tv/{series_id}/translations",
        "args": [
            {
                "name": "id",
                "wire": "series_id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "tv_video",
        "accessor": "TvVideo",
        "op": "list",
        "method": "GET",
        "path": "/3/tv/{series_id}/videos",
        "args": [
            {
                "name": "id",
                "wire": "series_id",
                "value": "p1"
            }
        ],
        "select": {
            "include_video_language": "v1",
            "language": "en-US"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "include_video_language",
            "language"
        ],
        "queryArgs": [
            {
                "name": "include_video_language",
                "wire": "include_video_language"
            },
            {
                "name": "language",
                "wire": "language"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "tvn",
        "accessor": "Tvn",
        "op": "create",
        "method": "POST",
        "path": "/3/tv/{series_id}/rating",
        "args": [
            {
                "name": "series_id",
                "wire": "series_id",
                "value": "p1"
            }
        ],
        "select": {
            "content_type": "v1",
            "guest_session_id": "v1",
            "session_id": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "guest_session_id",
            "session_id"
        ],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "tvn",
        "accessor": "Tvn",
        "op": "list",
        "method": "GET",
        "path": "/3/guest_session/{guest_session_id}/rated/tv",
        "args": [
            {
                "name": "guest_session_id",
                "wire": "guest_session_id",
                "value": "p1"
            }
        ],
        "select": {
            "language": "en-US",
            "page": 1,
            "sort_by": "created_at.asc"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "language",
            "page",
            "sort_by"
        ],
        "queryArgs": [
            {
                "name": "language",
                "wire": "language"
            },
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "sort_by",
                "wire": "sort_by"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "tvn",
        "accessor": "Tvn",
        "op": "list",
        "method": "GET",
        "path": "/3/search/tv",
        "args": [],
        "select": {
            "query": "v1",
            "first_air_date_year": "v1",
            "include_adult": "v1",
            "language": "en-US",
            "page": 1,
            "year": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "query",
            "first_air_date_year",
            "include_adult",
            "language",
            "page",
            "year"
        ],
        "queryArgs": [
            {
                "name": "first_air_date_year",
                "wire": "first_air_date_year"
            },
            {
                "name": "include_adult",
                "wire": "include_adult"
            },
            {
                "name": "language",
                "wire": "language"
            },
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "query",
                "wire": "query"
            },
            {
                "name": "year",
                "wire": "year"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "tvn",
        "accessor": "Tvn",
        "op": "load",
        "method": "GET",
        "path": "/3/tv/{series_id}",
        "args": [
            {
                "name": "series_id",
                "wire": "series_id",
                "value": "p1"
            }
        ],
        "select": {
            "append_to_response": "v1",
            "language": "en-US"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "append_to_response",
            "language"
        ],
        "queryArgs": [
            {
                "name": "append_to_response",
                "wire": "append_to_response"
            },
            {
                "name": "language",
                "wire": "language"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "tvn",
        "accessor": "Tvn",
        "op": "load",
        "method": "GET",
        "path": "/3/trending/tv/{time_window}",
        "args": [
            {
                "name": "time_window",
                "wire": "time_window",
                "value": "p1"
            }
        ],
        "select": {
            "language": "en-US"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "language"
        ],
        "queryArgs": [
            {
                "name": "language",
                "wire": "language"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "tvn",
        "accessor": "Tvn",
        "op": "remove",
        "method": "DELETE",
        "path": "/3/tv/{series_id}/rating",
        "args": [
            {
                "name": "series_id",
                "wire": "series_id",
                "value": "p1"
            }
        ],
        "select": {
            "guest_session_id": "v1",
            "session_id": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "guest_session_id",
            "session_id"
        ],
        "queryArgs": [
            {
                "name": "guest_session_id",
                "wire": "guest_session_id"
            },
            {
                "name": "session_id",
                "wire": "session_id"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "upcoming",
        "accessor": "Upcoming",
        "op": "list",
        "method": "GET",
        "path": "/3/movie/upcoming",
        "args": [],
        "select": {
            "language": "en-US",
            "page": 1,
            "region": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "language",
            "page",
            "region"
        ],
        "queryArgs": [
            {
                "name": "language",
                "wire": "language"
            },
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "region",
                "wire": "region"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "validate_with_login",
        "accessor": "ValidateWithLogin",
        "op": "create",
        "method": "POST",
        "path": "/3/authentication/token/validate_with_login",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "watchlist",
        "accessor": "Watchlist",
        "op": "create",
        "method": "POST",
        "path": "/3/account/{account_id}/watchlist",
        "args": [
            {
                "name": "account_id",
                "wire": "account_id",
                "value": "p1"
            }
        ],
        "select": {
            "session_id": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "session_id"
        ],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization"
                }
            ]
        ],
        "status": 200,
        "sample": null,
        "idField": "id"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map