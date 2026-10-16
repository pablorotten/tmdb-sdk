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
(0, node_test_1.describe)('SeasonImageEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TMDB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TMDB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TmdbSDK.test();
        const ent = testsdk.SeasonImage();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.TmdbSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.SeasonImage().list({ "season_number": "x", "tv_id": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TMDB_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'season_image.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "aspect_ratio": { "a": true, "h": "Aspect Ratio", "n": "aspect_ratio", "r": false, "t": "`$NUMBER`", "key$": "aspect_ratio", "index$": 0 }, "file_path": { "a": true, "h": "File Path", "n": "file_path", "r": false, "t": "`$STRING`", "key$": "file_path", "index$": 1 }, "height": { "a": true, "h": "Height", "n": "height", "r": false, "t": "`$INTEGER`", "key$": "height", "index$": 2 }, "iso_639_1": { "a": true, "h": "Iso 639 1", "n": "iso_639_1", "r": false, "t": "`$STRING`", "key$": "iso_639_1", "index$": 3 }, "vote_average": { "a": true, "h": "Vote Average", "n": "vote_average", "r": false, "t": "`$NUMBER`", "key$": "vote_average", "index$": 4 }, "vote_count": { "a": true, "h": "Vote Count", "n": "vote_count", "r": false, "t": "`$INTEGER`", "key$": "vote_count", "index$": 5 }, "width": { "a": true, "h": "Width", "n": "width", "r": false, "t": "`$INTEGER`", "key$": "width", "index$": 6 } }, "name": "season_image", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /3/tv/{series_id}/season/{season_number}/images", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "season_number", "or": "season_number", "r": true, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "k": "param", "n": "tv_id", "or": "series_id", "r": true, "t": "`$INTEGER`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "include_image_language", "or": "include_image_language", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "language", "or": "language", "r": false, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/3/tv/{series_id}/season/{season_number}/images", "q": { "exist": ["season_number", "tv_id"] }, "r": { "param": { "series_id": "tv_id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "3" }, { "lit": "tv" }, { "var": "tv_id" }, { "lit": "season" }, { "var": "season_number" }, { "lit": "images" }], "t": { "req": "`reqdata`", "res": "`body.posters`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["$.main.kit.entity.season"]] }, "key$": "season_image", "name__orig": "season_image", "Name": "SeasonImage", "name_": "season_image", "name-": "season-image", "NAME": "SEASON_IMAGE", "index$": 76 }, { "active": true, "entity": "season_image", "key$": "BasicSeasonImageFlow", "kind": "basic", "name": "BasicSeasonImageFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "season_number": "season_number01", "tv_id": "tv01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "season_image_ref01" } }] }] }, 'SeasonImage', { "GET /3/tv/{series_id}/season/{season_number}/images": { "protocol": "http", "parameters": [{ "name": "series_id", "in": "path", "schema": { "type": "integer", "format": "int32" }, "required": true, "index$": 0 }, { "name": "include_image_language", "in": "query", "description": "specify a comma separated list of ISO-639-1 values to query, for example: `en-US,null`", "schema": { "type": "string" }, "index$": 1 }, { "name": "language", "in": "query", "schema": { "type": "string" }, "index$": 2 }, { "name": "season_number", "in": "path", "schema": { "type": "integer", "format": "int32" }, "required": true, "index$": 3 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let season_image_ref01_data = Object.values(setup.data.existing.season_image)[0];
        // LIST
        const season_image_ref01_ent = client.SeasonImage();
        const season_image_ref01_match = {};
        season_image_ref01_match['season_number'] = setup.idmap['season_number01'];
        season_image_ref01_match['tv_id'] = setup.idmap['tv01'];
        const season_image_ref01_list = (await season_image_ref01_ent.list(season_image_ref01_match)).map((e) => e.data());
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/season_image/SeasonImageTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TmdbSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['season_image01', 'season_image02', 'season_image03', 'season01', 'season02', 'season03', 'season_number01', 'tv01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TMDB_TEST_SEASON_IMAGE_ENTID': idmap,
        'TMDB_TEST_LIVE': 'FALSE',
        'TMDB_TEST_EXPLAIN': 'FALSE',
        'TMDB_APIKEY': '',
    });
    idmap = env['TMDB_TEST_SEASON_IMAGE_ENTID'];
    const live = 'TRUE' === env.TMDB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TMDB_TEST_SEASON_IMAGE_ENTID'];
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
//# sourceMappingURL=SeasonImageEntity.test.js.map