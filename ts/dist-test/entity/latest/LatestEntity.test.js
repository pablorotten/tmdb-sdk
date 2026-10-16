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
(0, node_test_1.describe)('LatestEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TMDB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TMDB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TmdbSDK.test();
        const ent = testsdk.Latest();
        (0, node_assert_1.default)(null != ent);
    });
    class FailHook extends __1.BaseFeature {
        name = 'failhook';
        version = '0.0.1';
        active = true;
        unexpected = 0;
        init() { }
        PreSpec() { throw new Error('latest hook failed'); }
        PreUnexpected() { this.unexpected++; }
    }
    (0, node_test_1.test)('stream-error', async () => {
        const offline = { net: { offline: true } };
        await node_assert_1.default.rejects(async () => {
            for await (const _item of __1.TmdbSDK.test(offline).Latest().stream('list')) { }
        }, /offline/);
        for await (const _item of __1.TmdbSDK.test(offline).Latest()
            .stream('list', undefined, { ctrl: { throw: false } })) { }
        if (null != __1.config.feature?.rbac) {
            const denied = __1.TmdbSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } });
            await node_assert_1.default.rejects(async () => {
                for await (const _item of denied.Latest().stream('list')) { }
            }, (err) => 'rbac_denied' === err.code);
        }
    });
    (0, node_test_1.test)('stream-ctrl', async () => {
        const explain = {};
        const ctrl = { explain };
        for await (const _item of __1.TmdbSDK.test().Latest().stream('list', undefined, { ctrl })) { }
        node_assert_1.default.deepStrictEqual(Object.keys(ctrl), ['explain']);
        (0, node_assert_1.default)(explain === ctrl.explain && 0 < Object.keys(explain).length);
    });
    (0, node_test_1.test)('unexpected', async () => {
        const hook = new FailHook();
        const client = new __1.TmdbSDK({ feature: { test: { active: true } }, extend: [hook] });
        await node_assert_1.default.rejects(client.Latest().list(), /hook failed/);
        (0, node_assert_1.default)(0 < hook.unexpected);
        const fired = hook.unexpected;
        node_assert_1.default.strictEqual(await client.Latest().list(undefined, { throw: false }), undefined);
        (0, node_assert_1.default)(fired < hook.unexpected);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.TmdbSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.Latest().list({ "adult": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TMDB_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'latest.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "adult": { "a": true, "h": "Adult", "n": "adult", "r": false, "t": "`$BOOLEAN`", "key$": "adult", "index$": 0 }, "air_date": { "a": true, "h": "Air Date", "n": "air_date", "r": false, "t": "`$ANY`", "key$": "air_date", "index$": 1 }, "also_known_as": { "a": true, "h": "Also Known As", "n": "also_known_as", "r": false, "t": "`$ARRAY`", "key$": "also_known_as", "index$": 2 }, "backdrop_path": { "a": true, "h": "Backdrop Path", "n": "backdrop_path", "r": false, "t": "`$ANY`", "key$": "backdrop_path", "index$": 3 }, "belongs_to_collection": { "a": true, "h": "Belongs To Collection", "n": "belongs_to_collection", "r": false, "t": "`$ANY`", "key$": "belongs_to_collection", "index$": 4 }, "biography": { "a": true, "h": "Biography", "n": "biography", "r": false, "t": "`$STRING`", "key$": "biography", "index$": 5 }, "birthday": { "a": true, "h": "Birthday", "n": "birthday", "r": false, "t": "`$ANY`", "key$": "birthday", "index$": 6 }, "budget": { "a": true, "h": "Budget", "n": "budget", "r": false, "t": "`$INTEGER`", "key$": "budget", "index$": 7 }, "deathday": { "a": true, "h": "Deathday", "n": "deathday", "r": false, "t": "`$ANY`", "key$": "deathday", "index$": 8 }, "episode_count": { "a": true, "h": "Episode Count", "n": "episode_count", "r": false, "t": "`$INTEGER`", "key$": "episode_count", "index$": 9 }, "gender": { "a": true, "h": "Gender", "n": "gender", "r": false, "t": "`$INTEGER`", "key$": "gender", "index$": 10 }, "genres": { "a": true, "h": "Genres", "n": "genres", "r": false, "t": "`$ARRAY`", "key$": "genres", "index$": 11 }, "homepage": { "a": true, "h": "Homepage", "n": "homepage", "r": false, "t": "`$STRING`", "key$": "homepage", "index$": 12 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$INTEGER`", "key$": "id", "index$": 13 }, "imdb_id": { "a": true, "h": "Imdb Id", "n": "imdb_id", "r": false, "t": "`$STRING`", "key$": "imdb_id", "index$": 14 }, "known_for_department": { "a": true, "h": "Known For Department", "n": "known_for_department", "r": false, "t": "`$ANY`", "key$": "known_for_department", "index$": 15 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "t": "`$STRING`", "key$": "name", "index$": 16 }, "original_language": { "a": true, "h": "Original Language", "n": "original_language", "r": false, "t": "`$STRING`", "key$": "original_language", "index$": 17 }, "original_title": { "a": true, "h": "Original Title", "n": "original_title", "r": false, "t": "`$STRING`", "key$": "original_title", "index$": 18 }, "overview": { "a": true, "h": "Overview", "n": "overview", "r": false, "t": "`$STRING`", "key$": "overview", "index$": 19 }, "place_of_birth": { "a": true, "h": "Place Of Birth", "n": "place_of_birth", "r": false, "t": "`$ANY`", "key$": "place_of_birth", "index$": 20 }, "popularity": { "a": true, "h": "Popularity", "n": "popularity", "r": false, "t": "`$INTEGER`", "key$": "popularity", "index$": 21 }, "poster_path": { "a": true, "h": "Poster Path", "n": "poster_path", "r": false, "t": "`$ANY`", "key$": "poster_path", "index$": 22 }, "production_companies": { "a": true, "h": "Production Companies", "n": "production_companies", "r": false, "t": "`$ARRAY`", "key$": "production_companies", "index$": 23 }, "production_countries": { "a": true, "h": "Production Countries", "n": "production_countries", "r": false, "t": "`$ARRAY`", "key$": "production_countries", "index$": 24 }, "profile_path": { "a": true, "h": "Profile Path", "n": "profile_path", "r": false, "t": "`$ANY`", "key$": "profile_path", "index$": 25 }, "release_date": { "a": true, "h": "Release Date", "n": "release_date", "r": false, "t": "`$STRING`", "key$": "release_date", "index$": 26 }, "revenue": { "a": true, "h": "Revenue", "n": "revenue", "r": false, "t": "`$INTEGER`", "key$": "revenue", "index$": 27 }, "runtime": { "a": true, "h": "Runtime", "n": "runtime", "r": false, "t": "`$INTEGER`", "key$": "runtime", "index$": 28 }, "season_number": { "a": true, "h": "Season Number", "n": "season_number", "r": false, "t": "`$INTEGER`", "key$": "season_number", "index$": 29 }, "spoken_languages": { "a": true, "h": "Spoken Languages", "n": "spoken_languages", "r": false, "t": "`$ARRAY`", "key$": "spoken_languages", "index$": 30 }, "status": { "a": true, "h": "Status", "n": "status", "r": false, "t": "`$STRING`", "key$": "status", "index$": 31 }, "tagline": { "a": true, "h": "Tagline", "n": "tagline", "r": false, "t": "`$STRING`", "key$": "tagline", "index$": 32 }, "title": { "a": true, "h": "Title", "n": "title", "r": false, "t": "`$STRING`", "key$": "title", "index$": 33 }, "video": { "a": true, "h": "Video", "n": "video", "r": false, "t": "`$BOOLEAN`", "key$": "video", "index$": 34 }, "vote_average": { "a": true, "h": "Vote Average", "n": "vote_average", "r": false, "t": "`$INTEGER`", "key$": "vote_average", "index$": 35 }, "vote_count": { "a": true, "h": "Vote Count", "n": "vote_count", "r": false, "t": "`$INTEGER`", "key$": "vote_count", "index$": 36 } }, "id": { "field": "id", "name": "id" }, "name": "latest", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /3/movie/latest", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/3/movie/latest", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "3" }, { "lit": "movie" }, { "lit": "latest" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /3/person/latest", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/3/person/latest", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "3" }, { "lit": "person" }, { "lit": "latest" }], "t": { "req": "`reqdata`", "res": "`body.also_known_as`" }, "index$": 1 }, { "a": true, "co": { "id": "GET /3/tv/latest", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/3/tv/latest", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "3" }, { "lit": "tv" }, { "lit": "latest" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "latest", "name__orig": "latest", "Name": "Latest", "name_": "latest", "name-": "latest", "NAME": "LATEST", "index$": 30 }, { "active": true, "entity": "latest", "key$": "BasicLatestFlow", "kind": "basic", "name": "BasicLatestFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "latest_ref01" } }] }] }, 'Latest', { "GET /3/movie/latest": { "protocol": "http", "parameters": [] }, "GET /3/person/latest": { "protocol": "http", "parameters": [] }, "GET /3/tv/latest": { "protocol": "http", "parameters": [] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let latest_ref01_data = Object.values(setup.data.existing.latest)[0];
        // LIST
        const latest_ref01_ent = client.Latest();
        const latest_ref01_match = {};
        const latest_ref01_list = (await latest_ref01_ent.list(latest_ref01_match)).map((e) => e.data());
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/latest/LatestTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TmdbSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['latest01', 'latest02', 'latest03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TMDB_TEST_LATEST_ENTID': idmap,
        'TMDB_TEST_LIVE': 'FALSE',
        'TMDB_TEST_EXPLAIN': 'FALSE',
        'TMDB_APIKEY': '',
    });
    idmap = env['TMDB_TEST_LATEST_ENTID'];
    const live = 'TRUE' === env.TMDB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TMDB_TEST_LATEST_ENTID'];
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
//# sourceMappingURL=LatestEntity.test.js.map