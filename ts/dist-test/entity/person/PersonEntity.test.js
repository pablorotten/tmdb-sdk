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
(0, node_test_1.describe)('PersonEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TMDB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TMDB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TmdbSDK.test();
        const ent = testsdk.Person();
        (0, node_assert_1.default)(null != ent);
    });
    class FailHook extends __1.BaseFeature {
        name = 'failhook';
        version = '0.0.1';
        active = true;
        unexpected = 0;
        init() { }
        PreSpec() { throw new Error('person hook failed'); }
        PreUnexpected() { this.unexpected++; }
    }
    (0, node_test_1.test)('stream-error', async () => {
        const offline = { net: { offline: true } };
        await node_assert_1.default.rejects(async () => {
            for await (const _item of __1.TmdbSDK.test(offline).Person().stream('list')) { }
        }, /offline/);
        for await (const _item of __1.TmdbSDK.test(offline).Person()
            .stream('list', undefined, { ctrl: { throw: false } })) { }
        if (null != __1.config.feature?.rbac) {
            const denied = __1.TmdbSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } });
            await node_assert_1.default.rejects(async () => {
                for await (const _item of denied.Person().stream('list')) { }
            }, (err) => 'rbac_denied' === err.code);
        }
    });
    (0, node_test_1.test)('stream-ctrl', async () => {
        const explain = {};
        const ctrl = { explain };
        for await (const _item of __1.TmdbSDK.test().Person().stream('list', undefined, { ctrl })) { }
        node_assert_1.default.deepStrictEqual(Object.keys(ctrl), ['explain']);
        (0, node_assert_1.default)(explain === ctrl.explain && 0 < Object.keys(explain).length);
    });
    (0, node_test_1.test)('unexpected', async () => {
        const hook = new FailHook();
        const client = new __1.TmdbSDK({ feature: { test: { active: true } }, extend: [hook] });
        await node_assert_1.default.rejects(client.Person().list(), /hook failed/);
        (0, node_assert_1.default)(0 < hook.unexpected);
        const fired = hook.unexpected;
        node_assert_1.default.strictEqual(await client.Person().list(undefined, { throw: false }), undefined);
        (0, node_assert_1.default)(fired < hook.unexpected);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.TmdbSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.Person().list({ "include_adult": "x", "query": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TMDB_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'person.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "adult": { "a": true, "h": "Adult", "n": "adult", "r": false, "t": "`$BOOLEAN`", "key$": "adult", "index$": 0 }, "also_known_as": { "a": true, "h": "Also Known As", "n": "also_known_as", "r": false, "t": "`$ARRAY`", "key$": "also_known_as", "index$": 1 }, "biography": { "a": true, "h": "Biography", "n": "biography", "r": false, "t": "`$STRING`", "key$": "biography", "index$": 2 }, "birthday": { "a": true, "h": "Birthday", "n": "birthday", "r": false, "t": "`$STRING`", "key$": "birthday", "index$": 3 }, "deathday": { "a": true, "h": "Deathday", "n": "deathday", "r": false, "t": "`$ANY`", "key$": "deathday", "index$": 4 }, "gender": { "a": true, "h": "Gender", "n": "gender", "r": false, "t": "`$INTEGER`", "key$": "gender", "index$": 5 }, "homepage": { "a": true, "h": "Homepage", "n": "homepage", "r": false, "t": "`$ANY`", "key$": "homepage", "index$": 6 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$INTEGER`", "key$": "id", "index$": 7 }, "imdb_id": { "a": true, "h": "Imdb Id", "n": "imdb_id", "r": false, "t": "`$STRING`", "key$": "imdb_id", "index$": 8 }, "known_for": { "a": true, "h": "Known For", "n": "known_for", "r": false, "t": "`$ARRAY`", "key$": "known_for", "index$": 9 }, "known_for_department": { "a": true, "h": "Known For Department", "n": "known_for_department", "r": false, "t": "`$STRING`", "key$": "known_for_department", "index$": 10 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "t": "`$STRING`", "key$": "name", "index$": 11 }, "original_name": { "a": true, "h": "Original Name", "n": "original_name", "r": false, "t": "`$STRING`", "key$": "original_name", "index$": 12 }, "page": { "a": true, "h": "Page", "n": "page", "r": false, "t": "`$INTEGER`", "key$": "page", "index$": 13 }, "place_of_birth": { "a": true, "h": "Place Of Birth", "n": "place_of_birth", "r": false, "t": "`$STRING`", "key$": "place_of_birth", "index$": 14 }, "popularity": { "a": true, "h": "Popularity", "n": "popularity", "r": false, "t": "`$NUMBER`", "key$": "popularity", "index$": 15 }, "profile_path": { "a": true, "h": "Profile Path", "n": "profile_path", "r": false, "t": "`$STRING`", "key$": "profile_path", "index$": 16 }, "results": { "a": true, "h": "Results", "n": "results", "r": false, "t": "`$ARRAY`", "key$": "results", "index$": 17 }, "total_pages": { "a": true, "h": "Total Pages", "n": "total_pages", "r": false, "t": "`$INTEGER`", "key$": "total_pages", "index$": 18 }, "total_results": { "a": true, "h": "Total Results", "n": "total_results", "r": false, "t": "`$INTEGER`", "key$": "total_results", "index$": 19 } }, "id": { "field": "id", "name": "id" }, "name": "person", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /3/search/person", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": false, "k": "query", "n": "include_adult", "or": "include_adult", "r": false, "t": "`$BOOLEAN`", "index$": 0 }, { "a": true, "ex": "en-US", "k": "query", "n": "language", "or": "language", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "k": "query", "n": "query", "or": "query", "r": true, "t": "`$STRING`", "index$": 3 }] }, "k": "http", "m": "GET", "o": "/3/search/person", "q": { "exist": ["query"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "3" }, { "lit": "search" }, { "lit": "person" }], "t": { "req": "`reqdata`", "res": "`body.results`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /3/person/{person_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "person_id", "r": true, "t": "`$INTEGER`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "append_to_response", "or": "append_to_response", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "en-US", "k": "query", "n": "language", "or": "language", "r": false, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/3/person/{person_id}", "q": { "exist": ["id"] }, "r": { "param": { "person_id": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "3" }, { "lit": "person" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /3/trending/person/{time_window}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "day", "k": "param", "n": "id", "or": "time_window", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": "en-US", "k": "query", "n": "language", "or": "language", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/3/trending/person/{time_window}", "q": { "exist": ["id"] }, "r": { "param": { "time_window": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "3" }, { "lit": "trending" }, { "lit": "person" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "person", "name__orig": "person", "Name": "Person", "name_": "person", "name-": "person", "NAME": "PERSON", "index$": 56 }, { "active": true, "entity": "person", "key$": "BasicPersonFlow", "kind": "basic", "name": "BasicPersonFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "person_ref01" } }] }, { "a": true, "d": {}, "i": { "ref": "person_ref01", "srcdatavar": "person_ref01_data", "suffix": "_dt0" }, "m": { "id": "person01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-person_ref01" } }] }] }, 'Person', { "GET /3/search/person": { "protocol": "http", "parameters": [{ "name": "query", "in": "query", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "include_adult", "in": "query", "schema": { "type": "boolean", "default": false }, "index$": 1 }, { "name": "language", "in": "query", "schema": { "type": "string", "default": "en-US" }, "index$": 2 }, { "name": "page", "in": "query", "schema": { "type": "integer", "format": "int32", "default": 1 }, "index$": 3 }] }, "GET /3/person/{person_id}": { "protocol": "http", "parameters": [{ "name": "person_id", "in": "path", "schema": { "type": "integer", "format": "int32" }, "required": true, "index$": 0 }, { "name": "append_to_response", "in": "query", "description": "comma separated list of endpoints within this namespace, 20 items max", "schema": { "type": "string" }, "index$": 1 }, { "name": "language", "in": "query", "schema": { "type": "string", "default": "en-US" }, "index$": 2 }] }, "GET /3/trending/person/{time_window}": { "protocol": "http", "parameters": [{ "name": "time_window", "in": "path", "schema": { "type": "string", "enum": ["day", "week"], "default": "day" }, "required": true, "index$": 0 }, { "name": "language", "in": "query", "description": "`ISO-639-1`-`ISO-3166-1` code", "schema": { "type": "string", "default": "en-US" }, "index$": 1 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let person_ref01_data = Object.values(setup.data.existing.person)[0];
        // LIST
        const person_ref01_ent = client.Person();
        const person_ref01_match = {};
        const person_ref01_list = (await person_ref01_ent.list(person_ref01_match)).map((e) => e.data());
        // LOAD
        const person_ref01_match_dt0 = {};
        person_ref01_match_dt0.id = person_ref01_data.id;
        const person_ref01_data_dt0 = (await person_ref01_ent.load(person_ref01_match_dt0)).data();
        (0, node_assert_1.default)(person_ref01_data_dt0.id === person_ref01_data.id);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/person/PersonTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TmdbSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['person01', 'person02', 'person03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TMDB_TEST_PERSON_ENTID': idmap,
        'TMDB_TEST_LIVE': 'FALSE',
        'TMDB_TEST_EXPLAIN': 'FALSE',
        'TMDB_APIKEY': '',
    });
    idmap = env['TMDB_TEST_PERSON_ENTID'];
    const live = 'TRUE' === env.TMDB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TMDB_TEST_PERSON_ENTID'];
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
//# sourceMappingURL=PersonEntity.test.js.map