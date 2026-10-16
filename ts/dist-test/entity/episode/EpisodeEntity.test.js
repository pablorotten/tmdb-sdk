"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('EpisodeEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TMDB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TMDB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TmdbSDK.test();
        const ent = testsdk.Episode();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.TmdbSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.Episode().list({ "account_id": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TMDB_TEST_LIVE;
        for (const op of ['list', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'episode.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "air_date": { "a": true, "h": "Air Date", "n": "air_date", "r": false, "t": "`$STRING`", "key$": "air_date", "index$": 0 }, "crew": { "a": true, "h": "Crew", "n": "crew", "r": false, "t": "`$ARRAY`", "key$": "crew", "index$": 1 }, "episode_number": { "a": true, "h": "Episode Number", "n": "episode_number", "r": false, "t": "`$INTEGER`", "key$": "episode_number", "index$": 2 }, "guest_stars": { "a": true, "h": "Guest Stars", "n": "guest_stars", "r": false, "t": "`$ARRAY`", "key$": "guest_stars", "index$": 3 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$INTEGER`", "key$": "id", "index$": 4 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "t": "`$STRING`", "key$": "name", "index$": 5 }, "overview": { "a": true, "h": "Overview", "n": "overview", "r": false, "t": "`$STRING`", "key$": "overview", "index$": 6 }, "production_code": { "a": true, "h": "Production Code", "n": "production_code", "r": false, "t": "`$STRING`", "key$": "production_code", "index$": 7 }, "rating": { "a": true, "h": "Rating", "n": "rating", "r": false, "t": "`$INTEGER`", "key$": "rating", "index$": 8 }, "runtime": { "a": true, "h": "Runtime", "n": "runtime", "r": false, "t": "`$INTEGER`", "key$": "runtime", "index$": 9 }, "season_number": { "a": true, "h": "Season Number", "n": "season_number", "r": false, "t": "`$INTEGER`", "key$": "season_number", "index$": 10 }, "show_id": { "a": true, "h": "Show Id", "n": "show_id", "r": false, "t": "`$INTEGER`", "key$": "show_id", "index$": 11 }, "still_path": { "a": true, "h": "Still Path", "n": "still_path", "r": false, "t": "`$STRING`", "key$": "still_path", "index$": 12 }, "vote_average": { "a": true, "h": "Vote Average", "n": "vote_average", "r": false, "t": "`$NUMBER`", "key$": "vote_average", "index$": 13 }, "vote_count": { "a": true, "h": "Vote Count", "n": "vote_count", "r": false, "t": "`$INTEGER`", "key$": "vote_count", "index$": 14 } }, "id": { "field": "id", "name": "id" }, "name": "episode", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["RAW_BODY"], "co": { "id": "POST /3/tv/{series_id}/season/{season_number}/episode/{episode_number}/rating", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "application/json;charset=utf-8", "k": "header", "n": "content_type", "or": "Content-Type", "r": true, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "id", "or": "episode_number", "r": true, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "k": "param", "n": "season_id", "or": "season_number", "r": true, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "k": "param", "n": "tv_id", "or": "series_id", "r": true, "t": "`$INTEGER`", "index$": 2 }], "query": [{ "a": true, "k": "query", "n": "guest_session_id", "or": "guest_session_id", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "session_id", "or": "session_id", "r": false, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "POST", "o": "/3/tv/{series_id}/season/{season_number}/episode/{episode_number}/rating", "q": { "$action": "rating", "exist": ["content_type", "id", "season_id", "tv_id"] }, "r": { "param": { "episode_number": "id", "season_number": "season_id", "series_id": "tv_id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "3" }, { "lit": "tv" }, { "var": "tv_id" }, { "lit": "season" }, { "var": "season_id" }, { "lit": "episode" }, { "var": "id" }, { "lit": "rating" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /3/account/{account_id}/rated/tv/episodes", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": null, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$INTEGER`", "index$": 0 }], "query": [{ "a": true, "ex": "en-US", "k": "query", "n": "language", "or": "language", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "k": "query", "n": "session_id", "or": "session_id", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "ex": "created_at.asc", "k": "query", "n": "sort_by", "or": "sort_by", "r": false, "t": "`$STRING`", "index$": 3 }] }, "k": "http", "m": "GET", "o": "/3/account/{account_id}/rated/tv/episodes", "q": { "exist": ["account_id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "3" }, { "lit": "account" }, { "var": "account_id" }, { "lit": "rated" }, { "lit": "tv" }, { "lit": "episodes" }], "t": { "req": "`reqdata`", "res": "`body.results`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /3/guest_session/{guest_session_id}/rated/tv/episodes", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "guest_session_id", "or": "guest_session_id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": "en-US", "k": "query", "n": "language", "or": "language", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "ex": "created_at.asc", "k": "query", "n": "sort_by", "or": "sort_by", "r": false, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/3/guest_session/{guest_session_id}/rated/tv/episodes", "q": { "exist": ["guest_session_id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "3" }, { "lit": "guest_session" }, { "var": "guest_session_id" }, { "lit": "rated" }, { "lit": "tv" }, { "lit": "episodes" }], "t": { "req": "`reqdata`", "res": "`body.results`" }, "index$": 1 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /3/tv/{series_id}/season/{season_number}/episode/{episode_number}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "episode_number", "r": true, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "k": "param", "n": "season_id", "or": "season_number", "r": true, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "k": "param", "n": "tv_id", "or": "series_id", "r": true, "t": "`$INTEGER`", "index$": 2 }], "query": [{ "a": true, "k": "query", "n": "append_to_response", "or": "append_to_response", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "en-US", "k": "query", "n": "language", "or": "language", "r": false, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/3/tv/{series_id}/season/{season_number}/episode/{episode_number}", "q": { "exist": ["id", "season_id", "tv_id"] }, "r": { "param": { "episode_number": "id", "season_number": "season_id", "series_id": "tv_id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "3" }, { "lit": "tv" }, { "var": "tv_id" }, { "lit": "season" }, { "var": "season_id" }, { "lit": "episode" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /3/tv/{series_id}/season/{season_number}/episode/{episode_number}/rating", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "application/json;charset=utf-8", "k": "header", "n": "content_type", "or": "Content-Type", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "id", "or": "episode_number", "r": true, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "k": "param", "n": "season_id", "or": "season_number", "r": true, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "k": "param", "n": "tv_id", "or": "series_id", "r": true, "t": "`$INTEGER`", "index$": 2 }], "query": [{ "a": true, "k": "query", "n": "guest_session_id", "or": "guest_session_id", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "session_id", "or": "session_id", "r": false, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "DELETE", "o": "/3/tv/{series_id}/season/{season_number}/episode/{episode_number}/rating", "q": { "$action": "rating", "exist": ["id", "season_id", "tv_id"] }, "r": { "param": { "episode_number": "id", "season_number": "season_id", "series_id": "tv_id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "3" }, { "lit": "tv" }, { "var": "tv_id" }, { "lit": "season" }, { "var": "season_id" }, { "lit": "episode" }, { "var": "id" }, { "lit": "rating" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" } }, "relations": { "ancestors": [["$.main.kit.entity.account"], ["$.main.kit.entity.season"]] }, "key$": "episode", "name__orig": "episode", "Name": "Episode", "name_": "episode", "name-": "episode", "NAME": "EPISODE", "index$": 15 }, { "active": true, "entity": "episode", "key$": "BasicEpisodeFlow", "kind": "basic", "name": "BasicEpisodeFlow", "param": {}, "step": [{ "a": false, "d": {}, "i": { "ref": "episode_ref01" }, "m": { "account_id": "account01", "episode_number": "episode_number01", "guest_session_id": "guest_session01", "season_id": "season01", "tv_id": "tv01" }, "o": "create", "s": [], "v": [], "unreachable": true }, { "a": true, "d": {}, "i": {}, "m": { "guest_session_id": "guest_session01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "episode_ref01" } }] }, { "a": true, "d": {}, "i": { "ref": "episode_ref01", "srcdatavar": "episode_ref01_data", "suffix": "_dt0" }, "m": { "id": "episode01", "season_id": "season01", "tv_id": "tv01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-episode_ref01" } }] }, { "a": true, "d": {}, "i": { "ref": "episode_ref01", "suffix": "_rm0" }, "m": { "id": "episode01", "season_id": "season01", "tv_id": "tv01" }, "o": "remove", "s": [], "v": [] }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": { "guest_session_id": "guest_session01" }, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "episode_ref01" } }] }] }, 'Episode', { "POST /3/tv/{series_id}/season/{season_number}/episode/{episode_number}/rating": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "required": ["RAW_BODY"], "properties": { "RAW_BODY": { "type": "string", "format": "json" } } }, "examples": { "Request Example": { "value": { "value": 8.5 } } } } } }, "parameters": [{ "name": "series_id", "in": "path", "schema": { "type": "integer", "format": "int32" }, "required": true, "index$": 0 }, { "name": "guest_session_id", "in": "query", "schema": { "type": "string" }, "index$": 1 }, { "name": "session_id", "in": "query", "schema": { "type": "string" }, "index$": 2 }, { "name": "Content-Type", "in": "header", "required": true, "schema": { "type": "string", "default": "application/json;charset=utf-8" }, "index$": 3 }, { "name": "season_number", "in": "path", "schema": { "type": "integer", "format": "int32" }, "required": true, "index$": 4 }, { "name": "episode_number", "in": "path", "schema": { "type": "integer", "format": "int32" }, "required": true, "index$": 5 }] }, "GET /3/account/{account_id}/rated/tv/episodes": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "schema": { "type": "integer", "format": "int32", "default": null }, "required": true, "index$": 0 }, { "name": "language", "in": "query", "schema": { "type": "string", "default": "en-US" }, "index$": 1 }, { "name": "page", "in": "query", "schema": { "type": "integer", "format": "int32", "default": 1 }, "index$": 2 }, { "name": "session_id", "in": "query", "schema": { "type": "string" }, "index$": 3 }, { "name": "sort_by", "in": "query", "schema": { "type": "string", "enum": ["created_at.asc", "created_at.desc"], "default": "created_at.asc" }, "index$": 4 }] }, "GET /3/guest_session/{guest_session_id}/rated/tv/episodes": { "protocol": "http", "parameters": [{ "name": "guest_session_id", "in": "path", "schema": { "type": "string" }, "required": true, "index$": 0 }, { "name": "language", "in": "query", "schema": { "type": "string", "default": "en-US" }, "index$": 1 }, { "name": "page", "in": "query", "schema": { "type": "integer", "format": "int32", "default": 1 }, "index$": 2 }, { "name": "sort_by", "in": "query", "schema": { "type": "string", "enum": ["created_at.asc", "created_at.desc"], "default": "created_at.asc" }, "index$": 3 }] }, "GET /3/tv/{series_id}/season/{season_number}/episode/{episode_number}": { "protocol": "http", "parameters": [{ "name": "series_id", "in": "path", "schema": { "type": "integer", "format": "int32" }, "required": true, "index$": 0 }, { "name": "season_number", "in": "path", "schema": { "type": "integer", "format": "int32" }, "required": true, "index$": 1 }, { "name": "episode_number", "in": "path", "schema": { "type": "integer", "format": "int32" }, "required": true, "index$": 2 }, { "name": "append_to_response", "in": "query", "description": "comma separated list of endpoints within this namespace, 20 items max", "schema": { "type": "string" }, "index$": 3 }, { "name": "language", "in": "query", "schema": { "type": "string", "default": "en-US" }, "index$": 4 }] }, "DELETE /3/tv/{series_id}/season/{season_number}/episode/{episode_number}/rating": { "protocol": "http", "parameters": [{ "name": "series_id", "in": "path", "schema": { "type": "integer", "format": "int32" }, "required": true, "index$": 0 }, { "name": "Content-Type", "in": "header", "schema": { "type": "string", "default": "application/json;charset=utf-8" }, "index$": 1 }, { "name": "guest_session_id", "in": "query", "schema": { "type": "string" }, "index$": 2 }, { "name": "session_id", "in": "query", "schema": { "type": "string" }, "index$": 3 }, { "name": "season_number", "in": "path", "schema": { "type": "integer", "format": "int32" }, "required": true, "index$": 4 }, { "name": "episode_number", "in": "path", "schema": { "type": "integer", "format": "int32" }, "required": true, "index$": 5 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let episode_ref01_data = Object.values(setup.data.existing.episode)[0];
        // LIST
        const episode_ref01_ent = client.Episode();
        const episode_ref01_match = {};
        episode_ref01_match['guest_session_id'] = setup.idmap['guest_session01'];
        const episode_ref01_list = (await episode_ref01_ent.list(episode_ref01_match)).map((e) => e.data());
        // LOAD
        const episode_ref01_match_dt0 = {};
        episode_ref01_match_dt0.id = episode_ref01_data.id;
        episode_ref01_match_dt0['season_id'] = setup.idmap['season_id'] ?? setup.idmap['season01'];
        episode_ref01_match_dt0['tv_id'] = setup.idmap['tv_id'] ?? setup.idmap['tv01'];
        const episode_ref01_data_dt0 = (await episode_ref01_ent.load(episode_ref01_match_dt0)).data();
        (0, node_assert_1.default)(episode_ref01_data_dt0.id === episode_ref01_data.id);
    });
});
// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true;
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/episode/EpisodeTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TmdbSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['episode01', 'episode02', 'episode03', 'account01', 'account02', 'account03', 'season01', 'season02', 'season03', 'guest_session01', 'tv01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TMDB_TEST_EPISODE_ENTID': idmap,
        'TMDB_TEST_LIVE': 'FALSE',
        'TMDB_TEST_EXPLAIN': 'FALSE',
        'TMDB_APIKEY': '',
    });
    idmap = env['TMDB_TEST_EPISODE_ENTID'];
    const live = 'TRUE' === env.TMDB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TMDB_TEST_EPISODE_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.TmdbSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
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
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=EpisodeEntity.test.js.map