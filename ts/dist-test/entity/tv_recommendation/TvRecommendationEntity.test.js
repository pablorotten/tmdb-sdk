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
(0, node_test_1.describe)('TvRecommendationEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TMDB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TMDB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TmdbSDK.test();
        const ent = testsdk.TvRecommendation();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.TmdbSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.TvRecommendation().list({ "id": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TMDB_TEST_LIVE;
        for (const op of []) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'tv_recommendation.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "adult": { "a": true, "h": "Adult", "n": "adult", "r": false, "t": "`$BOOLEAN`", "key$": "adult", "index$": 0 }, "backdrop_path": { "a": true, "h": "Backdrop Path", "n": "backdrop_path", "r": false, "t": "`$STRING`", "key$": "backdrop_path", "index$": 1 }, "first_air_date": { "a": true, "h": "First Air Date", "n": "first_air_date", "r": false, "t": "`$STRING`", "key$": "first_air_date", "index$": 2 }, "genre_ids": { "a": true, "h": "Genre Ids", "n": "genre_ids", "r": false, "t": "`$ARRAY`", "key$": "genre_ids", "index$": 3 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$INTEGER`", "key$": "id", "index$": 4 }, "media_type": { "a": true, "h": "Media Type", "n": "media_type", "r": false, "t": "`$STRING`", "key$": "media_type", "index$": 5 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "t": "`$STRING`", "key$": "name", "index$": 6 }, "origin_country": { "a": true, "h": "Origin Country", "n": "origin_country", "r": false, "t": "`$ARRAY`", "key$": "origin_country", "index$": 7 }, "original_language": { "a": true, "h": "Original Language", "n": "original_language", "r": false, "t": "`$STRING`", "key$": "original_language", "index$": 8 }, "original_name": { "a": true, "h": "Original Name", "n": "original_name", "r": false, "t": "`$STRING`", "key$": "original_name", "index$": 9 }, "overview": { "a": true, "h": "Overview", "n": "overview", "r": false, "t": "`$STRING`", "key$": "overview", "index$": 10 }, "popularity": { "a": true, "h": "Popularity", "n": "popularity", "r": false, "t": "`$NUMBER`", "key$": "popularity", "index$": 11 }, "poster_path": { "a": true, "h": "Poster Path", "n": "poster_path", "r": false, "t": "`$STRING`", "key$": "poster_path", "index$": 12 }, "vote_average": { "a": true, "h": "Vote Average", "n": "vote_average", "r": false, "t": "`$NUMBER`", "key$": "vote_average", "index$": 13 }, "vote_count": { "a": true, "h": "Vote Count", "n": "vote_count", "r": false, "t": "`$INTEGER`", "key$": "vote_count", "index$": 14 } }, "id": { "field": "id", "name": "id" }, "name": "tv_recommendation", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /3/tv/{series_id}/recommendations", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "series_id", "r": true, "t": "`$INTEGER`", "index$": 0 }], "query": [{ "a": true, "ex": "en-US", "k": "query", "n": "language", "or": "language", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/3/tv/{series_id}/recommendations", "q": { "exist": ["id"] }, "r": { "param": { "series_id": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "3" }, { "lit": "tv" }, { "var": "id" }, { "lit": "recommendations" }], "t": { "req": "`reqdata`", "res": "`body.results`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "tv_recommendation", "name__orig": "tv_recommendation", "Name": "TvRecommendation", "name_": "tv_recommendation", "name-": "tv-recommendation", "NAME": "TV_RECOMMENDATION", "index$": 93 }, { "active": true, "entity": "tv_recommendation", "key$": "BasicTvRecommendationFlow", "kind": "basic", "name": "BasicTvRecommendationFlow", "param": {}, "step": [{ "a": false, "d": {}, "i": {}, "m": { "series_id": "series01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "tv_recommendation_ref01" } }], "unreachable": true }] }, 'TvRecommendation', { "GET /3/tv/{series_id}/recommendations": { "protocol": "http", "parameters": [{ "name": "series_id", "in": "path", "schema": { "type": "integer", "format": "int32" }, "required": true, "index$": 0 }, { "name": "language", "in": "query", "schema": { "type": "string", "default": "en-US" }, "index$": 1 }, { "name": "page", "in": "query", "schema": { "type": "integer", "format": "int32", "default": 1 }, "index$": 2 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let tv_recommendation_ref01_data = Object.values(setup.data.existing.tv_recommendation)[0];
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/tv_recommendation/TvRecommendationTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TmdbSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['tv_recommendation01', 'tv_recommendation02', 'tv_recommendation03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TMDB_TEST_TV_RECOMMENDATION_ENTID': idmap,
        'TMDB_TEST_LIVE': 'FALSE',
        'TMDB_TEST_EXPLAIN': 'FALSE',
        'TMDB_APIKEY': '',
    });
    idmap = env['TMDB_TEST_TV_RECOMMENDATION_ENTID'];
    const live = 'TRUE' === env.TMDB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TMDB_TEST_TV_RECOMMENDATION_ENTID'];
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
//# sourceMappingURL=TvRecommendationEntity.test.js.map