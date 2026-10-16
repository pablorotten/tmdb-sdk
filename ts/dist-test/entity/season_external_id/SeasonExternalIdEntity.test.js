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
(0, node_test_1.describe)('SeasonExternalIdEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TMDB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TMDB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TmdbSDK.test();
        const ent = testsdk.SeasonExternalId();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.TmdbSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.SeasonExternalId().load({ "season_number": "x", "tv_id": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TMDB_TEST_LIVE;
        for (const op of []) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'season_external_id.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "freebase_id": { "a": true, "h": "Freebase Id", "n": "freebase_id", "r": false, "t": "`$STRING`", "key$": "freebase_id", "index$": 0 }, "freebase_mid": { "a": true, "h": "Freebase Mid", "n": "freebase_mid", "r": false, "t": "`$STRING`", "key$": "freebase_mid", "index$": 1 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$INTEGER`", "key$": "id", "index$": 2 }, "tvdb_id": { "a": true, "h": "Tvdb Id", "n": "tvdb_id", "r": false, "t": "`$INTEGER`", "key$": "tvdb_id", "index$": 3 }, "tvrage_id": { "a": true, "h": "Tvrage Id", "n": "tvrage_id", "r": false, "t": "`$STRING`", "key$": "tvrage_id", "index$": 4 }, "wikidata_id": { "a": true, "h": "Wikidata Id", "n": "wikidata_id", "r": false, "t": "`$STRING`", "key$": "wikidata_id", "index$": 5 } }, "id": { "field": "id", "name": "id" }, "name": "season_external_id", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /3/tv/{series_id}/season/{season_number}/external_ids", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "season_number", "or": "season_number", "r": true, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "k": "param", "n": "tv_id", "or": "series_id", "r": true, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/3/tv/{series_id}/season/{season_number}/external_ids", "q": { "exist": ["season_number", "tv_id"] }, "r": { "param": { "series_id": "tv_id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "3" }, { "lit": "tv" }, { "var": "tv_id" }, { "lit": "season" }, { "var": "season_number" }, { "lit": "external_ids" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["$.main.kit.entity.season"]] }, "key$": "season_external_id", "name__orig": "season_external_id", "Name": "SeasonExternalId", "name_": "season_external_id", "name-": "season-external-id", "NAME": "SEASON_EXTERNAL_ID", "index$": 75 }, { "active": true, "entity": "season_external_id", "key$": "BasicSeasonExternalIdFlow", "kind": "basic", "name": "BasicSeasonExternalIdFlow", "param": {}, "step": [{ "a": false, "d": {}, "i": { "ref": "season_external_id_ref01", "srcdatavar": "season_external_id_ref01_data", "suffix": "_dt0" }, "m": { "id": "season_external_id01", "tv_id": "tv01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-season_external_id_ref01" } }], "unreachable": true }] }, 'SeasonExternalId', { "GET /3/tv/{series_id}/season/{season_number}/external_ids": { "protocol": "http", "parameters": [{ "name": "series_id", "in": "path", "schema": { "type": "integer", "format": "int32" }, "required": true, "index$": 0 }, { "name": "season_number", "in": "path", "schema": { "type": "integer", "format": "int32" }, "required": true, "index$": 1 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let season_external_id_ref01_data = Object.values(setup.data.existing.season_external_id)[0];
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/season_external_id/SeasonExternalIdTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TmdbSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['season_external_id01', 'season_external_id02', 'season_external_id03', 'season01', 'season02', 'season03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TMDB_TEST_SEASON_EXTERNAL_ID_ENTID': idmap,
        'TMDB_TEST_LIVE': 'FALSE',
        'TMDB_TEST_EXPLAIN': 'FALSE',
        'TMDB_APIKEY': '',
    });
    idmap = env['TMDB_TEST_SEASON_EXTERNAL_ID_ENTID'];
    const live = 'TRUE' === env.TMDB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TMDB_TEST_SEASON_EXTERNAL_ID_ENTID'];
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
//# sourceMappingURL=SeasonExternalIdEntity.test.js.map