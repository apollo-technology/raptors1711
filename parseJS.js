/**
 * Parse JavaScript SDK v1.6.14
 *
 * Copyright (c) 2015-present, Parse, LLC.
 * All rights reserved.
 *
 * The source tree of this library can be found at
 *   https://github.com/ParsePlatform/Parse-SDK-JS
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
! function(e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var t;
        t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.Parse = e() } }(function() {
    return function e(t, r, n) {
        function a(o, i) {
            if (!r[o]) {
                if (!t[o]) {
                    var u = "function" == typeof require && require;
                    if (!i && u) return u(o, !0);
                    if (s) return s(o, !0);
                    var l = new Error("Cannot find module '" + o + "'");
                    throw l.code = "MODULE_NOT_FOUND", l }
                var c = r[o] = { exports: {} };
                t[o][0].call(c.exports, function(e) {
                    var r = t[o][1][e];
                    return a(r ? r : e) }, c, c.exports, e, t, r, n) }
            return r[o].exports }
        for (var s = "function" == typeof require && require, o = 0; o < n.length; o++) a(n[o]);
        return a }({
        1: [function(e, t, r) { "use strict";

            function n(e, t, r) {
                if (e = e || "", e = e.replace(/^\s*/, ""), e = e.replace(/\s*$/, ""), 0 === e.length) throw new TypeError("A name for the custom event must be provided");
                for (var n in t)
                    if ("string" != typeof n || "string" != typeof t[n]) throw new TypeError('track() dimensions expects keys and values of type "string".');
                return r = r || {}, o["default"].getAnalyticsController().track(e, t)._thenRunCallbacks(r) }
            var a = e("babel-runtime/helpers/interop-require-default")["default"];
            Object.defineProperty(r, "__esModule", { value: !0 }), r.track = n;
            var s = e("./CoreManager"),
                o = a(s);
            o["default"].setAnalyticsController({ track: function(e, t) {
                    var r = o["default"].getRESTController();
                    return r.request("POST", "events/" + e, { dimensions: t }) } }) }, { "./CoreManager": 3, "babel-runtime/helpers/interop-require-default": 47 }],
        2: [function(e, t, r) { "use strict";

            function n(e, t, r) {
                if (r = r || {}, "string" != typeof e || 0 === e.length) throw new TypeError("Cloud function name must be a string.");
                var n = {};
                return r.useMasterKey && (n.useMasterKey = r.useMasterKey), r.sessionToken && (n.sessionToken = r.sessionToken), o["default"].getCloudController().run(e, t, n)._thenRunCallbacks(r) }
            var a = e("babel-runtime/helpers/interop-require-default")["default"];
            Object.defineProperty(r, "__esModule", { value: !0 }), r.run = n;
            var s = e("./CoreManager"),
                o = a(s),
                i = e("./decode"),
                u = a(i),
                l = e("./encode"),
                c = a(l),
                f = e("./ParseError"),
                d = a(f),
                h = e("./ParsePromise"),
                p = a(h);
            o["default"].setCloudController({ run: function(e, t, r) {
                    var n = o["default"].getRESTController(),
                        a = (0, c["default"])(t, !0),
                        s = {};
                    r.hasOwnProperty("useMasterKey") && (s.useMasterKey = r.useMasterKey), r.hasOwnProperty("sessionToken") && (s.sessionToken = r.sessionToken);
                    var i = n.request("POST", "functions/" + e, a, s);
                    return i.then(function(e) {
                        var t = (0, u["default"])(e);
                        return t && t.hasOwnProperty("result") ? p["default"].as(t.result) : p["default"].error(new d["default"](d["default"].INVALID_JSON, "The server returned an invalid response.")) })._thenRunCallbacks(r) } }) }, { "./CoreManager": 3, "./ParseError": 10, "./ParsePromise": 16, "./decode": 29, "./encode": 30, "babel-runtime/helpers/interop-require-default": 47 }],
        3: [function(e, t, r) {
            (function(e) { "use strict";
                var r = { IS_NODE: "undefined" != typeof e && !!e.versions && !!e.versions.node, REQUEST_ATTEMPT_LIMIT: 5, SERVER_URL: "https://api.parse.com/1", VERSION: "js1.6.14", APPLICATION_ID: null, JAVASCRIPT_KEY: null, MASTER_KEY: null, USE_MASTER_KEY: !1, PERFORM_USER_REWRITE: !0, FORCE_REVOCABLE_SESSION: !1 };
                t.exports = { get: function(e) {
                        if (r.hasOwnProperty(e)) return r[e];
                        throw new Error("Configuration key not found: " + e) }, set: function(e, t) { r[e] = t }, setAnalyticsController: function(e) {
                        if ("function" != typeof e.track) throw new Error("AnalyticsController must implement track()");
                        r.AnalyticsController = e }, getAnalyticsController: function() {
                        return r.AnalyticsController }, setCloudController: function(e) {
                        if ("function" != typeof e.run) throw new Error("CloudController must implement run()");
                        r.CloudController = e }, getCloudController: function() {
                        return r.CloudController }, setConfigController: function(e) {
                        if ("function" != typeof e.current) throw new Error("ConfigController must implement current()");
                        if ("function" != typeof e.get) throw new Error("ConfigController must implement get()");
                        r.ConfigController = e }, getConfigController: function() {
                        return r.ConfigController }, setFileController: function(e) {
                        if ("function" != typeof e.saveFile) throw new Error("FileController must implement saveFile()");
                        if ("function" != typeof e.saveBase64) throw new Error("FileController must implement saveBase64()");
                        r.FileController = e }, getFileController: function() {
                        return r.FileController }, setInstallationController: function(e) {
                        if ("function" != typeof e.currentInstallationId) throw new Error("InstallationController must implement currentInstallationId()");
                        r.InstallationController = e }, getInstallationController: function() {
                        return r.InstallationController }, setPushController: function(e) {
                        if ("function" != typeof e.send) throw new Error("PushController must implement send()");
                        r.PushController = e }, getPushController: function() {
                        return r.PushController }, setObjectController: function(e) {
                        if ("function" != typeof e.save) throw new Error("ObjectController must implement save()");
                        if ("function" != typeof e.fetch) throw new Error("ObjectController must implement fetch()");
                        if ("function" != typeof e.destroy) throw new Error("ObjectController must implement destroy()");
                        r.ObjectController = e }, getObjectController: function() {
                        return r.ObjectController }, setQueryController: function(e) {
                        if ("function" != typeof e.find) throw new Error("QueryController must implement find()");
                        r.QueryController = e }, getQueryController: function() {
                        return r.QueryController }, setRESTController: function(e) {
                        if ("function" != typeof e.request) throw new Error("RESTController must implement request()");
                        if ("function" != typeof e.ajax) throw new Error("RESTController must implement ajax()");
                        r.RESTController = e }, getRESTController: function() {
                        return r.RESTController }, setSessionController: function(e) {
                        if ("function" != typeof e.getSession) throw new Error("A SessionController must implement getSession()");
                        r.SessionController = e }, getSessionController: function() {
                        return r.SessionController }, setStorageController: function(e) {
                        if (e.async) {
                            if ("function" != typeof e.getItemAsync) throw new Error("An async StorageController must implement getItemAsync()");
                            if ("function" != typeof e.setItemAsync) throw new Error("An async StorageController must implement setItemAsync()");
                            if ("function" != typeof e.removeItemAsync) throw new Error("An async StorageController must implement removeItemAsync()") } else {
                            if ("function" != typeof e.getItem) throw new Error("A synchronous StorageController must implement getItem()");
                            if ("function" != typeof e.setItem) throw new Error("A synchronous StorageController must implement setItem()");
                            if ("function" != typeof e.removeItem) throw new Error("A synchonous StorageController must implement removeItem()") }
                        r.StorageController = e }, getStorageController: function() {
                        return r.StorageController }, setUserController: function(e) {
                        if ("function" != typeof e.setCurrentUser) throw new Error("A UserController must implement setCurrentUser()");
                        if ("function" != typeof e.currentUser) throw new Error("A UserController must implement currentUser()");
                        if ("function" != typeof e.currentUserAsync) throw new Error("A UserController must implement currentUserAsync()");
                        if ("function" != typeof e.signUp) throw new Error("A UserController must implement signUp()");
                        if ("function" != typeof e.logIn) throw new Error("A UserController must implement logIn()");
                        if ("function" != typeof e.become) throw new Error("A UserController must implement become()");
                        if ("function" != typeof e.logOut) throw new Error("A UserController must implement logOut()");
                        if ("function" != typeof e.requestPasswordReset) throw new Error("A UserController must implement requestPasswordReset()");
                        if ("function" != typeof e.upgradeToRevocableSession) throw new Error("A UserController must implement upgradeToRevocableSession()");
                        if ("function" != typeof e.linkWith) throw new Error("A UserController must implement linkWith()");
                        r.UserController = e }, getUserController: function() {
                        return r.UserController } } }).call(this, e("_process")) }, { _process: 75 }],
        4: [function(e, t, r) { "use strict";
            var n = e("babel-runtime/helpers/interop-require-default")["default"];
            Object.defineProperty(r, "__esModule", { value: !0 });
            var a, s, o = e("./parseDate"),
                i = n(o),
                u = e("./ParseUser"),
                l = n(u),
                c = !1;
            r["default"] = { init: function(e) {
                    if ("undefined" == typeof FB) throw new Error("The Facebook JavaScript SDK must be loaded before calling init.");
                    if (s = {}, e)
                        for (var t in e) s[t] = e[t];
                    if (s.status && "undefined" != typeof console) {
                        var r = console.warn || console.log || function() {};
                        r.call(console, 'The "status" flag passed into FB.init, when set to true, can interfere with Parse Facebook integration, so it has been suppressed. Please call FB.getLoginStatus() explicitly if you require this behavior.') }
                    s.status = !1, FB.init(s), l["default"]._registerAuthenticationProvider({ authenticate: function(e) {
                            var t = this; "undefined" == typeof FB && e.error(this, "Facebook SDK not found."), FB.login(function(r) { r.authResponse ? e.success && e.success(t, { id: r.authResponse.userID, access_token: r.authResponse.accessToken, expiration_date: new Date(1e3 * r.authResponse.expiresIn + (new Date).getTime()).toJSON() }) : e.error && e.error(t, r) }, { scope: a }) }, restoreAuthentication: function(e) {
                            if (e) {
                                var t = (0, i["default"])(e.expiration_date),
                                    r = t ? (t.getTime() - (new Date).getTime()) / 1e3 : 0,
                                    n = { userID: e.id, accessToken: e.access_token, expiresIn: r },
                                    a = {};
                                if (s)
                                    for (var o in s) a[o] = s[o];
                                a.authResponse = n, a.status = !1;
                                var u = FB.getAuthResponse();
                                u && u.userID !== n.userID && FB.logout(), FB.init(a) }
                            return !0 }, getAuthType: function() {
                            return "facebook" }, deauthenticate: function() { this.restoreAuthentication(null) } }), c = !0 }, isLinked: function(e) {
                    return e._isLinked("facebook") }, logIn: function(e, t) {
                    if (e && "string" != typeof e) {
                        var r = {};
                        if (t)
                            for (var n in t) r[n] = t[n];
                        return r.authData = e, l["default"]._logInWith("facebook", r) }
                    if (!c) throw new Error("You must initialize FacebookUtils before calling logIn.");
                    return a = e, l["default"]._logInWith("facebook", t) }, link: function(e, t, r) {
                    if (t && "string" != typeof t) {
                        var n = {};
                        if (r)
                            for (var s in r) n[s] = r[s];
                        return n.authData = t, e._linkWith("facebook", n) }
                    if (!c) throw new Error("You must initialize FacebookUtils before calling link.");
                    return a = t, e._linkWith("facebook", r) }, unlink: function(e, t) {
                    if (!c) throw new Error("You must initialize FacebookUtils before calling unlink.");
                    return e._unlinkFrom("facebook", t) } }, t.exports = r["default"] }, { "./ParseUser": 21, "./parseDate": 34, "babel-runtime/helpers/interop-require-default": 47 }],
        5: [function(e, t, r) { "use strict";

            function n() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1) }

            function a() {
                return n() + n() + "-" + n() + "-" + n() + "-" + n() + "-" + n() + n() + n() }
            var s = e("babel-runtime/helpers/interop-require-default")["default"],
                o = e("./CoreManager"),
                i = (s(o), e("./ParsePromise")),
                u = s(i),
                l = e("./Storage"),
                c = s(l),
                f = null;
            t.exports = { currentInstallationId: function() {
                    if ("string" == typeof f) return u["default"].as(f);
                    var e = c["default"].generatePath("installationId");
                    return c["default"].getItemAsync(e).then(function(t) {
                        return t ? (f = t, t) : (t = a(), c["default"].setItemAsync(e, t).then(function() {
                            return f = t, t })) }) }, _clearCache: function() { f = null }, _setInstallationIdCache: function(e) { f = e } } }, { "./CoreManager": 3, "./ParsePromise": 16, "./Storage": 24, "babel-runtime/helpers/interop-require-default": 47 }],
        6: [function(e, t, r) { "use strict";

            function n(e, t) {
                var r = N[e];
                return r ? r[t] || null : null }

            function a(e, t, r) {
                var a = n(e, t);
                return a ? a : (N[e] || (N[e] = {}), r || (r = { serverData: {}, pendingOps: [{}], objectCache: {}, tasks: new I["default"], existed: !1 }), a = N[e][t] = r) }

            function s(e, t) {
                var r = n(e, t);
                return null === r ? null : (delete N[e][t], r) }

            function o(e, t) {
                var r = n(e, t);
                return r ? r.serverData : {} }

            function i(e, t, r) {
                var n = a(e, t).serverData;
                for (var s in r) "undefined" != typeof r[s] ? n[s] = r[s] : delete n[s] }

            function u(e, t) {
                var r = n(e, t);
                return r ? r.pendingOps : [{}] }

            function l(e, t, r, n) {
                var s = a(e, t).pendingOps,
                    o = s.length - 1;
                n ? s[o][r] = n : delete s[o][r] }

            function c(e, t) {
                var r = a(e, t).pendingOps;
                r.push({}) }

            function f(e, t) {
                var r = a(e, t).pendingOps,
                    n = r.shift();
                return r.length || (r[0] = {}), n }

            function d(e, t) {
                var r = f(e, t),
                    n = u(e, t),
                    a = n[0];
                for (var s in r)
                    if (a[s] && r[s]) {
                        var o = a[s].mergeWith(r[s]);
                        o && (a[s] = o) } else a[s] = r[s] }

            function h(e, t) {
                var r = n(e, t);
                return r ? r.objectCache : {} }

            function p(e, t, r) {
                for (var n = o(e, t), a = n[r], s = u(e, t), i = 0; i < s.length; i++) s[i][r] && (a = s[i][r] instanceof T.RelationOp ? s[i][r].applyTo(a, { className: e, id: t }, r) : s[i][r].applyTo(a));
                return a }

            function y(e, t) {
                var r, n = {},
                    a = o(e, t);
                for (r in a) n[r] = a[r];
                for (var s = u(e, t), i = 0; i < s.length; i++)
                    for (r in s[i]) s[i][r] instanceof T.RelationOp ? n[r] = s[i][r].applyTo(n[r], { className: e, id: t }, r) : n[r] = s[i][r].applyTo(n[r]);
                return n }

            function v(e, t, r) {
                var n = a(e, t);
                for (var s in r) {
                    var o = r[s];
                    if (n.serverData[s] = o, o && "object" == typeof o && !(o instanceof k["default"]) && !(o instanceof C["default"]) && !(o instanceof S["default"])) {
                        var i = (0, w["default"])(o, !1, !0);
                        n.objectCache[s] = JSON.stringify(i) } } }

            function m(e, t, r) {
                var n = a(e, t);
                return n.tasks.enqueue(r) }

            function b() { N = {} }
            var _ = e("babel-runtime/helpers/interop-require-default")["default"];
            Object.defineProperty(r, "__esModule", { value: !0 }), r.getState = n, r.initializeState = a, r.removeState = s, r.getServerData = o, r.setServerData = i, r.getPendingOps = u, r.setPendingOp = l, r.pushPendingState = c, r.popPendingState = f, r.mergeFirstPendingState = d, r.getObjectCache = h, r.estimateAttribute = p, r.estimateAttributes = y, r.commitServerChanges = v, r.enqueueTask = m, r._clearAllState = b;
            var g = e("./encode"),
                w = _(g),
                O = e("./ParseFile"),
                C = _(O),
                P = e("./ParseObject"),
                k = _(P),
                A = e("./ParsePromise"),
                E = (_(A), e("./ParseRelation")),
                S = _(E),
                j = e("./TaskQueue"),
                I = _(j),
                T = e("./ParseOp"),
                N = {} }, { "./ParseFile": 11, "./ParseObject": 14, "./ParseOp": 15, "./ParsePromise": 16, "./ParseRelation": 18, "./TaskQueue": 26, "./encode": 30, "babel-runtime/helpers/interop-require-default": 47 }],
        7: [function(e, t, r) { "use strict";
            var n = e("babel-runtime/helpers/interop-require-default")["default"],
                a = e("babel-runtime/helpers/interop-require-wildcard")["default"],
                s = e("./decode"),
                o = n(s),
                i = e("./encode"),
                u = n(i),
                l = e("./CoreManager"),
                c = n(l),
                f = e("./InstallationController"),
                d = n(f),
                h = e("./ParseOp"),
                p = a(h),
                y = e("./RESTController"),
                v = n(y),
                m = { initialize: function(e, t) { c["default"].get("IS_NODE") && console.log("It looks like you're using the browser version of the SDK in a node.js environment. You should require('parse/node') instead."), m._initialize(e, t) }, _initialize: function(e, t, r) { c["default"].set("APPLICATION_ID", e), c["default"].set("JAVASCRIPT_KEY", t), c["default"].set("MASTER_KEY", r), c["default"].set("USE_MASTER_KEY", !1) } };
            Object.defineProperty(m, "applicationId", { get: function() {
                    return c["default"].get("APPLICATION_ID") }, set: function(e) { c["default"].set("APPLICATION_ID", e) } }), Object.defineProperty(m, "javaScriptKey", { get: function() {
                    return c["default"].get("JAVASCRIPT_KEY") }, set: function(e) { c["default"].set("JAVASCRIPT_KEY", e) } }), Object.defineProperty(m, "masterKey", { get: function() {
                    return c["default"].get("MASTER_KEY") }, set: function(e) { c["default"].set("MASTER_KEY", e) } }), Object.defineProperty(m, "serverURL", { get: function() {
                    return c["default"].get("SERVER_URL") }, set: function(e) { c["default"].set("SERVER_URL", e) } }), m.ACL = e("./ParseACL"), m.Analytics = e("./Analytics"), m.Cloud = e("./Cloud"), m.CoreManager = e("./CoreManager"), m.Config = e("./ParseConfig"), m.Error = e("./ParseError"), m.FacebookUtils = e("./FacebookUtils"), m.File = e("./ParseFile"), m.GeoPoint = e("./ParseGeoPoint"), m.Installation = e("./ParseInstallation"), m.Object = e("./ParseObject"), m.Op = { Set: p.SetOp, Unset: p.UnsetOp, Increment: p.IncrementOp, Add: p.AddOp, Remove: p.RemoveOp, AddUnique: p.AddUniqueOp, Relation: p.RelationOp }, m.Promise = e("./ParsePromise"), m.Push = e("./Push"), m.Query = e("./ParseQuery"), m.Relation = e("./ParseRelation"), m.Role = e("./ParseRole"), m.Session = e("./ParseSession"), m.Storage = e("./Storage"), m.User = e("./ParseUser"), m._request = function() {
                for (var e = arguments.length, t = Array(e), r = 0; e > r; r++) t[r] = arguments[r];
                return c["default"].getRESTController().request.apply(null, t) }, m._ajax = function() {
                for (var e = arguments.length, t = Array(e), r = 0; e > r; r++) t[r] = arguments[r];
                return c["default"].getRESTController().ajax.apply(null, t) }, m._decode = function(e, t) {
                return (0, o["default"])(t) }, m._encode = function(e, t, r) {
                return (0, u["default"])(e, r) }, m._getInstallationId = function() {
                return c["default"].getInstallationController().currentInstallationId() }, c["default"].setInstallationController(d["default"]), c["default"].setRESTController(v["default"]), m.Parse = m, t.exports = m }, { "./Analytics": 1, "./Cloud": 2, "./CoreManager": 3, "./FacebookUtils": 4, "./InstallationController": 5, "./ParseACL": 8, "./ParseConfig": 9, "./ParseError": 10, "./ParseFile": 11, "./ParseGeoPoint": 12, "./ParseInstallation": 13, "./ParseObject": 14, "./ParseOp": 15, "./ParsePromise": 16, "./ParseQuery": 17, "./ParseRelation": 18, "./ParseRole": 19, "./ParseSession": 20, "./ParseUser": 21, "./Push": 22, "./RESTController": 23, "./Storage": 24, "./decode": 29, "./encode": 30, "babel-runtime/helpers/interop-require-default": 47, "babel-runtime/helpers/interop-require-wildcard": 48 }],
        8: [function(e, t, r) { "use strict";
            var n = e("babel-runtime/helpers/create-class")["default"],
                a = e("babel-runtime/helpers/class-call-check")["default"],
                s = e("babel-runtime/core-js/object/keys")["default"],
                o = e("babel-runtime/helpers/interop-require-default")["default"];
            Object.defineProperty(r, "__esModule", { value: !0 });
            var i = e("./ParseRole"),
                u = o(i),
                l = e("./ParseUser"),
                c = o(l),
                f = "*",
                d = function() {
                    function e(t) {
                        if (a(this, e), this.permissionsById = {}, t && "object" == typeof t)
                            if (t instanceof c["default"]) this.setReadAccess(t, !0), this.setWriteAccess(t, !0);
                            else
                                for (var r in t) {
                                    var n = t[r];
                                    if ("string" != typeof r) throw new TypeError("Tried to create an ACL with an invalid user id.");
                                    this.permissionsById[r] = {};
                                    for (var s in n) {
                                        var o = n[s];
                                        if ("read" !== s && "write" !== s) throw new TypeError("Tried to create an ACL with an invalid permission type.");
                                        if ("boolean" != typeof o) throw new TypeError("Tried to create an ACL with an invalid permission value.");
                                        this.permissionsById[r][s] = o } } else if ("function" == typeof t) throw new TypeError("ParseACL constructed with a function. Did you forget ()?") }
                    return n(e, [{ key: "toJSON", value: function() {
                            var e = {};
                            for (var t in this.permissionsById) e[t] = this.permissionsById[t];
                            return e } }, { key: "equals", value: function(t) {
                            if (!(t instanceof e)) return !1;
                            var r = s(this.permissionsById),
                                n = s(t.permissionsById);
                            if (r.length !== n.length) return !1;
                            for (var a in this.permissionsById) {
                                if (!t.permissionsById[a]) return !1;
                                if (this.permissionsById[a].read !== t.permissionsById[a].read) return !1;
                                if (this.permissionsById[a].write !== t.permissionsById[a].write) return !1 }
                            return !0 } }, { key: "_setAccess", value: function(e, t, r) {
                            if (t instanceof c["default"] ? t = t.id : t instanceof u["default"] && (t = "role:" + t.getName()), "string" != typeof t) throw new TypeError("userId must be a string.");
                            if ("boolean" != typeof r) throw new TypeError("allowed must be either true or false.");
                            var n = this.permissionsById[t];
                            if (!n) {
                                if (!r) return;
                                n = {}, this.permissionsById[t] = n }
                            r ? this.permissionsById[t][e] = !0 : (delete n[e], 0 === s(n).length && delete this.permissionsById[t]) } }, { key: "_getAccess", value: function(e, t) { t instanceof c["default"] ? t = t.id : t instanceof u["default"] && (t = "role:" + t.getName());
                            var r = this.permissionsById[t];
                            return r ? !!r[e] : !1 } }, { key: "setReadAccess", value: function(e, t) { this._setAccess("read", e, t) } }, { key: "getReadAccess", value: function(e) {
                            return this._getAccess("read", e) } }, { key: "setWriteAccess", value: function(e, t) { this._setAccess("write", e, t) } }, { key: "getWriteAccess", value: function(e) {
                            return this._getAccess("write", e) } }, { key: "setPublicReadAccess", value: function(e) { this.setReadAccess(f, e) } }, { key: "getPublicReadAccess", value: function() {
                            return this.getReadAccess(f) } }, { key: "setPublicWriteAccess", value: function(e) { this.setWriteAccess(f, e) } }, { key: "getPublicWriteAccess", value: function() {
                            return this.getWriteAccess(f) } }, { key: "getRoleReadAccess", value: function(e) {
                            if (e instanceof u["default"] && (e = e.getName()), "string" != typeof e) throw new TypeError("role must be a ParseRole or a String");
                            return this.getReadAccess("role:" + e) } }, { key: "getRoleWriteAccess", value: function(e) {
                            if (e instanceof u["default"] && (e = e.getName()), "string" != typeof e) throw new TypeError("role must be a ParseRole or a String");
                            return this.getWriteAccess("role:" + e) } }, { key: "setRoleReadAccess", value: function(e, t) {
                            if (e instanceof u["default"] && (e = e.getName()), "string" != typeof e) throw new TypeError("role must be a ParseRole or a String");
                            this.setReadAccess("role:" + e, t) } }, { key: "setRoleWriteAccess", value: function(e, t) {
                            if (e instanceof u["default"] && (e = e.getName()), "string" != typeof e) throw new TypeError("role must be a ParseRole or a String");
                            this.setWriteAccess("role:" + e, t) } }]), e }();
            r["default"] = d, t.exports = r["default"] }, { "./ParseRole": 19, "./ParseUser": 21, "babel-runtime/core-js/object/keys": 41, "babel-runtime/helpers/class-call-check": 43, "babel-runtime/helpers/create-class": 44, "babel-runtime/helpers/interop-require-default": 47 }],
        9: [function(e, t, r) { "use strict";

            function n(e) {
                try {
                    var t = JSON.parse(e);
                    if (t && "object" == typeof t) return (0, c["default"])(t) } catch (r) {
                    return null } }
            var a = e("babel-runtime/helpers/create-class")["default"],
                s = e("babel-runtime/helpers/class-call-check")["default"],
                o = e("babel-runtime/helpers/interop-require-default")["default"];
            Object.defineProperty(r, "__esModule", { value: !0 });
            var i = e("./CoreManager"),
                u = o(i),
                l = e("./decode"),
                c = o(l),
                f = e("./encode"),
                d = (o(f), e("./escape")),
                h = o(d),
                p = e("./ParseError"),
                y = o(p),
                v = e("./ParsePromise"),
                m = o(v),
                b = e("./Storage"),
                _ = o(b),
                g = function() {
                    function e() { s(this, e), this.attributes = {}, this._escapedAttributes = {} }
                    return a(e, [{ key: "get", value: function(e) {
                            return this.attributes[e] } }, { key: "escape", value: function(e) {
                            var t = this._escapedAttributes[e];
                            if (t) return t;
                            var r = this.attributes[e],
                                n = "";
                            return null != r && (n = (0, h["default"])(r.toString())), this._escapedAttributes[e] = n, n } }], [{ key: "current", value: function() {
                            var e = u["default"].getConfigController();
                            return e.current() } }, { key: "get", value: function(e) { e = e || {};
                            var t = u["default"].getConfigController();
                            return t.get()._thenRunCallbacks(e) } }]), e }();
            r["default"] = g;
            var w = null,
                O = "currentConfig";
            u["default"].setConfigController({ current: function() {
                    if (w) return w;
                    var e, t = new g,
                        r = _["default"].generatePath(O);
                    if (!_["default"].async()) {
                        if (e = _["default"].getItem(r)) {
                            var a = n(e);
                            a && (t.attributes = a, w = t) }
                        return t }
                    return _["default"].getItemAsync(r).then(function(e) {
                        if (e) {
                            var r = n(e);
                            r && (t.attributes = r, w = t) }
                        return t }) }, get: function() {
                    var e = u["default"].getRESTController();
                    return e.request("GET", "config", {}, {}).then(function(e) {
                        if (!e || !e.params) {
                            var t = new y["default"](y["default"].INVALID_JSON, "Config JSON response invalid.");
                            return m["default"].error(t) }
                        var r = new g;
                        r.attributes = {};
                        for (var n in e.params) r.attributes[n] = (0, c["default"])(e.params[n]);
                        return w = r, _["default"].setItemAsync(_["default"].generatePath(O), JSON.stringify(e.params)).then(function() {
                            return r }) }) } }), t.exports = r["default"] }, { "./CoreManager": 3, "./ParseError": 10, "./ParsePromise": 16, "./Storage": 24, "./decode": 29, "./encode": 30, "./escape": 32, "babel-runtime/helpers/class-call-check": 43, "babel-runtime/helpers/create-class": 44, "babel-runtime/helpers/interop-require-default": 47 }],
        10: [function(e, t, r) { "use strict";
            var n = e("babel-runtime/helpers/class-call-check")["default"];
            Object.defineProperty(r, "__esModule", { value: !0 });
            var a = function s(e, t) { n(this, s), this.code = e, this.message = t };
            r["default"] = a, a.OTHER_CAUSE = -1, a.INTERNAL_SERVER_ERROR = 1, a.CONNECTION_FAILED = 100, a.OBJECT_NOT_FOUND = 101, a.INVALID_QUERY = 102, a.INVALID_CLASS_NAME = 103, a.MISSING_OBJECT_ID = 104, a.INVALID_KEY_NAME = 105, a.INVALID_POINTER = 106, a.INVALID_JSON = 107, a.COMMAND_UNAVAILABLE = 108, a.NOT_INITIALIZED = 109, a.INCORRECT_TYPE = 111, a.INVALID_CHANNEL_NAME = 112, a.PUSH_MISCONFIGURED = 115, a.OBJECT_TOO_LARGE = 116, a.OPERATION_FORBIDDEN = 119, a.CACHE_MISS = 120, a.INVALID_NESTED_KEY = 121, a.INVALID_FILE_NAME = 122, a.INVALID_ACL = 123, a.TIMEOUT = 124, a.INVALID_EMAIL_ADDRESS = 125, a.MISSING_CONTENT_TYPE = 126, a.MISSING_CONTENT_LENGTH = 127, a.INVALID_CONTENT_LENGTH = 128, a.FILE_TOO_LARGE = 129, a.FILE_SAVE_ERROR = 130, a.DUPLICATE_VALUE = 137, a.INVALID_ROLE_NAME = 139, a.EXCEEDED_QUOTA = 140, a.SCRIPT_FAILED = 141, a.VALIDATION_ERROR = 142, a.INVALID_IMAGE_DATA = 143, a.UNSAVED_FILE_ERROR = 151, a.INVALID_PUSH_TIME_ERROR = 152, a.FILE_DELETE_ERROR = 153, a.REQUEST_LIMIT_EXCEEDED = 155, a.INVALID_EVENT_NAME = 160, a.USERNAME_MISSING = 200, a.PASSWORD_MISSING = 201, a.USERNAME_TAKEN = 202, a.EMAIL_TAKEN = 203, a.EMAIL_MISSING = 204, a.EMAIL_NOT_FOUND = 205, a.SESSION_MISSING = 206, a.MUST_CREATE_USER_THROUGH_SIGNUP = 207, a.ACCOUNT_ALREADY_LINKED = 208, a.INVALID_SESSION_TOKEN = 209, a.LINKED_ID_MISSING = 250, a.INVALID_LINKED_SESSION = 251, a.UNSUPPORTED_SERVICE = 252, a.AGGREGATE_ERROR = 600, a.FILE_READ_ERROR = 601, a.X_DOMAIN_REQUEST = 602, t.exports = r["default"] }, { "babel-runtime/helpers/class-call-check": 43 }],
        11: [function(e, t, r) { "use strict";

            function n(e) {
                if (26 > e) return String.fromCharCode(65 + e);
                if (52 > e) return String.fromCharCode(97 + (e - 26));
                if (62 > e) return String.fromCharCode(48 + (e - 52));
                if (62 === e) return "+";
                if (63 === e) return "/";
                throw new TypeError("Tried to encode large digit " + e + " in base64.") }
            var a = e("babel-runtime/helpers/create-class")["default"],
                s = e("babel-runtime/helpers/class-call-check")["default"],
                o = e("babel-runtime/helpers/interop-require-default")["default"];
            Object.defineProperty(r, "__esModule", { value: !0 });
            var i = e("./CoreManager"),
                u = o(i),
                l = e("./ParsePromise"),
                c = (o(l), function() {
                    function e(t, r, n) { s(this, e);
                        var a = n || "";
                        if (this._name = t, Array.isArray(r)) this._source = { format: "base64", base64: e.encodeBase64(r), type: a };
                        else if ("undefined" != typeof File && r instanceof File) this._source = { format: "file", file: r, type: a };
                        else if (r && r.hasOwnProperty("base64")) {
                            var o = /^data:([a-zA-Z]*\/[a-zA-Z+.-]*);(charset=[a-zA-Z0-9\-\/\s]*,)?base64,(\S+)/.exec(r.base64);
                            o && o.length > 0 ? this._source = { format: "base64", base64: 4 === o.length ? o[3] : o[2], type: o[1] } : this._source = { format: "base64", base64: r.base64, type: a } } else if ("undefined" != typeof r) throw new TypeError("Cannot create a Parse.File with that data.") }
                    return a(e, [{ key: "name", value: function() {
                            return this._name } }, { key: "url", value: function() {
                            return this._url } }, { key: "save", value: function(e) {
                            var t = this;
                            e = e || {};
                            var r = u["default"].getFileController();
                            return this._previousSave || ("file" === this._source.format ? this._previousSave = r.saveFile(this._name, this._source).then(function(e) {
                                return t._name = e.name, t._url = e.url, t }) : this._previousSave = r.saveBase64(this._name, this._source).then(function(e) {
                                return t._name = e.name, t._url = e.url, t })), this._previousSave ? this._previousSave._thenRunCallbacks(e) : void 0 } }, { key: "toJSON", value: function() {
                            return { __type: "File", name: this._name, url: this._url } } }, { key: "equals", value: function(t) {
                            return this === t ? !0 : t instanceof e && this.name() === t.name() && this.url() === t.url() && "undefined" != typeof this.url() } }], [{ key: "fromJSON", value: function(t) {
                            if ("File" !== t.__type) throw new TypeError("JSON object does not represent a ParseFile");
                            var r = new e(t.name);
                            return r._url = t.url, r } }, { key: "encodeBase64", value: function(e) {
                            var t = [];
                            t.length = Math.ceil(e.length / 3);
                            for (var r = 0; r < t.length; r++) {
                                var a = e[3 * r],
                                    s = e[3 * r + 1] || 0,
                                    o = e[3 * r + 2] || 0,
                                    i = 3 * r + 1 < e.length,
                                    u = 3 * r + 2 < e.length;
                                t[r] = [n(a >> 2 & 63), n(a << 4 & 48 | s >> 4 & 15), i ? n(s << 2 & 60 | o >> 6 & 3) : "=", u ? n(63 & o) : "="].join("") }
                            return t.join("") } }]), e }());
            r["default"] = c, u["default"].setFileController({ saveFile: function(e, t) {
                    if ("file" !== t.format) throw new Error("saveFile can only be used with File-type sources.");
                    var r = { "X-Parse-Application-ID": u["default"].get("APPLICATION_ID"), "X-Parse-JavaScript-Key": u["default"].get("JAVASCRIPT_KEY") },
                        n = u["default"].get("SERVER_URL");
                    return "/" !== n[n.length - 1] && (n += "/"), n += "files/" + e, u["default"].getRESTController().ajax("POST", n, t.file, r) }, saveBase64: function(e, t) {
                    if ("base64" !== t.format) throw new Error("saveBase64 can only be used with Base64-type sources.");
                    var r = { base64: t.base64 };
                    return t.type && (r._ContentType = t.type), u["default"].getRESTController().request("POST", "files/" + e, r) } }), t.exports = r["default"] }, { "./CoreManager": 3, "./ParsePromise": 16, "babel-runtime/helpers/class-call-check": 43, "babel-runtime/helpers/create-class": 44, "babel-runtime/helpers/interop-require-default": 47 }],
        12: [function(e, t, r) { "use strict";
            var n = e("babel-runtime/helpers/create-class")["default"],
                a = e("babel-runtime/helpers/class-call-check")["default"],
                s = e("babel-runtime/helpers/interop-require-default")["default"];
            Object.defineProperty(r, "__esModule", { value: !0 });
            var o = e("./ParsePromise"),
                i = s(o),
                u = function() {
                    function e(t, r) { a(this, e), Array.isArray(t) ? (e._validate(t[0], t[1]), this._latitude = t[0], this._longitude = t[1]) : "object" == typeof t ? (e._validate(t.latitude, t.longitude), this._latitude = t.latitude, this._longitude = t.longitude) : "number" == typeof t && "number" == typeof r ? (e._validate(t, r), this._latitude = t, this._longitude = r) : (this._latitude = 0, this._longitude = 0) }
                    return n(e, [{ key: "toJSON", value: function() {
                            return e._validate(this._latitude, this._longitude), { __type: "GeoPoint", latitude: this._latitude, longitude: this._longitude } } }, { key: "equals", value: function(t) {
                            return t instanceof e && this.latitude === t.latitude && this.longitude === t.longitude } }, { key: "radiansTo", value: function(e) {
                            var t = Math.PI / 180,
                                r = this.latitude * t,
                                n = this.longitude * t,
                                a = e.latitude * t,
                                s = e.longitude * t,
                                o = Math.sin((r - a) / 2),
                                i = Math.sin((n - s) / 2),
                                u = o * o + Math.cos(r) * Math.cos(a) * i * i;
                            return u = Math.min(1, u), 2 * Math.asin(Math.sqrt(u)) } }, { key: "kilometersTo", value: function(e) {
                            return 6371 * this.radiansTo(e) } }, { key: "milesTo", value: function(e) {
                            return 3958.8 * this.radiansTo(e) } }, { key: "latitude", get: function() {
                            return this._latitude }, set: function(t) { e._validate(t, this.longitude), this._latitude = t } }, { key: "longitude", get: function() {
                            return this._longitude }, set: function(t) { e._validate(this.latitude, t), this._longitude = t } }], [{ key: "_validate", value: function(e, t) {
                            if (e !== e || t !== t) throw new TypeError("GeoPoint latitude and longitude must be valid numbers");
                            if (-90 > e) throw new TypeError("GeoPoint latitude out of bounds: " + e + " < -90.0.");
                            if (e > 90) throw new TypeError("GeoPoint latitude out of bounds: " + e + " > 90.0.");
                            if (-180 > t) throw new TypeError("GeoPoint longitude out of bounds: " + t + " < -180.0.");
                            if (t > 180) throw new TypeError("GeoPoint longitude out of bounds: " + t + " > 180.0.") } }, { key: "current", value: function(t) {
                            var r = new i["default"];
                            return navigator.geolocation.getCurrentPosition(function(t) { r.resolve(new e(t.coords.latitude, t.coords.longitude)) }, function(e) { r.reject(e) }), r._thenRunCallbacks(t) } }]), e }();
            r["default"] = u, t.exports = r["default"] }, { "./ParsePromise": 16, "babel-runtime/helpers/class-call-check": 43, "babel-runtime/helpers/create-class": 44, "babel-runtime/helpers/interop-require-default": 47 }],
        13: [function(e, t, r) { "use strict";
            var n = e("babel-runtime/helpers/get")["default"],
                a = e("babel-runtime/helpers/inherits")["default"],
                s = e("babel-runtime/helpers/class-call-check")["default"],
                o = e("babel-runtime/helpers/interop-require-default")["default"];
            Object.defineProperty(r, "__esModule", { value: !0 });
            var i = e("./ParseObject"),
                u = o(i),
                l = function(e) {
                    function t(e) {
                        if (s(this, t), n(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, "_Installation"), e && "object" == typeof e && !this.set(e || {})) throw new Error("Can't create an invalid Session") }
                    return a(t, e), t }(u["default"]);
            r["default"] = l, u["default"].registerSubclass("_Installation", l), t.exports = r["default"] }, { "./ParseObject": 14, "babel-runtime/helpers/class-call-check": 43, "babel-runtime/helpers/get": 45, "babel-runtime/helpers/inherits": 46, "babel-runtime/helpers/interop-require-default": 47 }],
        14: [function(e, t, r) {
            "use strict";

            function n() {
                var e = h["default"].get("SERVER_URL"); "/" !== e[e.length - 1] && (e += "/");
                var t = e.replace(/https?:\/\//, "");
                return t.substr(t.indexOf("/")) }
            var a = e("babel-runtime/helpers/create-class")["default"],
                s = e("babel-runtime/helpers/class-call-check")["default"],
                o = e("babel-runtime/core-js/object/keys")["default"],
                i = e("babel-runtime/core-js/object/freeze")["default"],
                u = e("babel-runtime/core-js/object/create")["default"],
                l = e("babel-runtime/core-js/object/define-property")["default"],
                c = e("babel-runtime/helpers/interop-require-default")["default"],
                f = e("babel-runtime/helpers/interop-require-wildcard")["default"];
            Object.defineProperty(r, "__esModule", { value: !0 });
            var d = e("./CoreManager"),
                h = c(d),
                p = e("./canBeSerialized"),
                y = c(p),
                v = e("./decode"),
                m = c(v),
                b = e("./encode"),
                _ = c(b),
                g = e("./equals"),
                w = (c(g), e("./escape")),
                O = c(w),
                C = e("./ObjectState"),
                P = f(C),
                k = e("./ParseACL"),
                A = c(k),
                E = e("./parseDate"),
                S = c(E),
                j = e("./ParseError"),
                I = c(j),
                T = e("./ParseFile"),
                N = c(T),
                R = e("./ParseOp"),
                M = e("./ParsePromise"),
                x = c(M),
                D = e("./ParseQuery"),
                U = c(D),
                q = e("./ParseRelation"),
                L = c(q),
                F = e("./unique"),
                K = c(F),
                $ = e("./unsavedChildren"),
                J = c($),
                W = {},
                B = 0,
                G = 0,
                V = !h["default"].get("IS_NODE"),
                z = function() {
                    function e(t, r, n) { s(this, e), "function" == typeof this.initialize && this.initialize.apply(this, arguments);
                        var a = null;
                        if (this._objCount = G++, "string" == typeof t) this.className = t, r && "object" == typeof r && (a = r);
                        else if (t && "object" == typeof t) { this.className = t.className, a = {};
                            for (var o in t) "className" !== o && (a[o] = t[o]);
                            r && "object" == typeof r && (n = r) }
                        if (a && !this.set(a, n)) throw new Error("Can't create an invalid Parse Object") }
                    return a(e, [{ key: "_getId", value: function() {
                            if ("string" == typeof this.id) return this.id;
                            if ("string" == typeof this._localId) return this._localId;
                            var e = "local" + String(B++);
                            return this._localId = e, e } }, { key: "_getStateIdentifier", value: function() {
                            return "string" == typeof this.id ? V ? this.id : this.id + "_" + String(this._objCount) : this._getId() } }, { key: "_getServerData", value: function() {
                            return P.getServerData(this.className, this._getStateIdentifier()) } }, { key: "_clearServerData", value: function() {
                            var e = this._getServerData(),
                                t = {};
                            for (var r in e) t[r] = void 0;
                            P.setServerData(this.className, this._getStateIdentifier(), t) } }, { key: "_getPendingOps", value: function() {
                            return P.getPendingOps(this.className, this._getStateIdentifier()) } }, { key: "_clearPendingOps", value: function() {
                            var e = this._getPendingOps(),
                                t = e[e.length - 1],
                                r = o(t);
                            r.forEach(function(e) { delete t[e] }) } }, { key: "_getDirtyObjectAttributes", value: function() {
                            var t = this.attributes,
                                r = P.getObjectCache(this.className, this._getStateIdentifier()),
                                n = {};
                            for (var a in t) {
                                var s = t[a];
                                if (s && "object" == typeof s && !(s instanceof e) && !(s instanceof N["default"]) && !(s instanceof L["default"])) try {
                                    var o = (0, _["default"])(s, !1, !0),
                                        i = JSON.stringify(o);
                                    r[a] !== i && (n[a] = s) } catch (u) { n[a] = s } }
                            return n } }, { key: "_toFullJSON", value: function(e) {
                            var t = this.toJSON(e);
                            return t.__type = "Object", t.className = this.className, t } }, { key: "_getSaveJSON", value: function() {
                            var e, t = this._getPendingOps(),
                                r = this._getDirtyObjectAttributes(),
                                n = {};
                            for (e in r) n[e] = new R.SetOp(r[e]).toJSON();
                            for (e in t[0]) n[e] = t[0][e].toJSON();
                            return n } }, { key: "_getSaveParams", value: function() {
                            var e = this.id ? "PUT" : "POST",
                                t = this._getSaveJSON(),
                                r = "classes/" + this.className;
                            return this.id ? r += "/" + this.id : "_User" === this.className && (r = "users"), { method: e, body: t, path: r } } }, { key: "_finishFetch", value: function(e) {!this.id && e.objectId && (this.id = e.objectId), P.initializeState(this.className, this._getStateIdentifier());
                            var t = {};
                            for (var r in e) "ACL" === r ? t[r] = new A["default"](e[r]) : "objectId" !== r && (t[r] = (0, m["default"])(e[r]), t[r] instanceof L["default"] && t[r]._ensureParentAndKey(this, r));
                            t.createdAt && "string" == typeof t.createdAt && (t.createdAt = (0, S["default"])(t.createdAt)), t.updatedAt && "string" == typeof t.updatedAt && (t.updatedAt = (0, S["default"])(t.updatedAt)), !t.updatedAt && t.createdAt && (t.updatedAt = t.createdAt), P.commitServerChanges(this.className, this._getStateIdentifier(), t) } }, { key: "_setExisted", value: function(e) {
                            var t = P.getState(this.className, this._getStateIdentifier());
                            t && (t.existed = e) } }, { key: "_migrateId", value: function(e) {
                            if (this._localId && e) {
                                var t = P.removeState(this.className, this._getStateIdentifier());
                                this.id = e, delete this._localId, t && P.initializeState(this.className, this._getStateIdentifier(), t) } } }, { key: "_handleSaveResponse", value: function(e, t) {
                            var r, n = {},
                                a = P.popPendingState(this.className, this._getStateIdentifier());
                            for (r in a) a[r] instanceof R.RelationOp ? n[r] = a[r].applyTo(void 0, this, r) : r in e || (n[r] = a[r].applyTo(void 0));
                            for (r in e) "createdAt" !== r && "updatedAt" !== r || "string" != typeof e[r] ? "ACL" === r ? n[r] = new A["default"](e[r]) : "objectId" !== r && (n[r] = (0, m["default"])(e[r])) : n[r] = (0, S["default"])(e[r]);
                            n.createdAt && !n.updatedAt && (n.updatedAt = n.createdAt), this._migrateId(e.objectId), 201 !== t && this._setExisted(!0), P.commitServerChanges(this.className, this._getStateIdentifier(), n) } }, { key: "_handleSaveError", value: function() { this._getPendingOps();
                            P.mergeFirstPendingState(this.className, this._getStateIdentifier()) } }, { key: "initialize", value: function() {} }, { key: "toJSON", value: function(e) {
                            var t = this.id ? this.className + ":" + this.id : this,
                                e = e || [t],
                                r = {},
                                n = this.attributes;
                            for (var a in n) "createdAt" !== a && "updatedAt" !== a || !n[a].toJSON ? r[a] = (0, _["default"])(n[a], !1, !1, e) : r[a] = n[a].toJSON();
                            var s = this._getPendingOps();
                            for (var a in s[0]) r[a] = s[0][a].toJSON();
                            return this.id && (r.objectId = this.id), r } }, { key: "equals", value: function(t) {
                            return this === t ? !0 : t instanceof e && this.className === t.className && this.id === t.id && "undefined" != typeof this.id } }, { key: "dirty", value: function(e) {
                            if (!this.id) return !0;
                            var t = this._getPendingOps(),
                                r = this._getDirtyObjectAttributes();
                            if (e) {
                                if (r.hasOwnProperty(e)) return !0;
                                for (var n = 0; n < t.length; n++)
                                    if (t[n].hasOwnProperty(e)) return !0;
                                return !1 }
                            return 0 !== o(t[0]).length ? !0 : 0 !== o(r).length ? !0 : !1 } }, { key: "dirtyKeys", value: function() {
                            for (var e = this._getPendingOps(), t = {}, r = 0; r < e.length; r++)
                                for (var n in e[r]) t[n] = !0;
                            var a = this._getDirtyObjectAttributes();
                            for (var n in a) t[n] = !0;
                            return o(t) } }, { key: "toPointer", value: function() {
                            if (!this.id) throw new Error("Cannot create a pointer to an unsaved ParseObject");
                            return { __type: "Pointer", className: this.className, objectId: this.id } } }, { key: "get", value: function(e) {
                            return this.attributes[e] } }, { key: "relation", value: function(e) {
                            var t = this.get(e);
                            if (t) {
                                if (!(t instanceof L["default"])) throw new Error("Called relation() on non-relation field " + e);
                                return t._ensureParentAndKey(this, e), t }
                            return new L["default"](this, e) } }, { key: "escape", value: function(e) {
                            var t = this.attributes[e];
                            if (null == t) return "";
                            if ("string" != typeof t) {
                                if ("function" != typeof t.toString) return "";
                                t = t.toString() }
                            return (0, O["default"])(t) } }, { key: "has", value: function(e) {
                            var t = this.attributes;
                            return t.hasOwnProperty(e) ? null != t[e] : !1 } }, { key: "set", value: function(e, t, r) {
                            var n = {},
                                a = {};
                            if (e && "object" == typeof e) n = e, r = t;
                            else {
                                if ("string" != typeof e) return this;
                                n[e] = t }
                            r = r || {};
                            var s = []; "function" == typeof this.constructor.readOnlyAttributes && (s = s.concat(this.constructor.readOnlyAttributes()));
                            for (var o in n)
                                if ("createdAt" !== o && "updatedAt" !== o) {
                                    if (s.indexOf(o) > -1) throw new Error("Cannot modify readonly attribute: " + o);
                                    r.unset ? a[o] = new R.UnsetOp : n[o] instanceof R.Op ? a[o] = n[o] : n[o] && "object" == typeof n[o] && "string" == typeof n[o].__op ? a[o] = (0, R.opFromJSON)(n[o]) : "objectId" === o || "id" === o ? this.id = n[o] : "ACL" !== o || "object" != typeof n[o] || n[o] instanceof A["default"] ? a[o] = new R.SetOp(n[o]) : a[o] = new R.SetOp(new A["default"](n[o])) }
                            var i = this.attributes,
                                u = {};
                            for (var l in a) a[l] instanceof R.RelationOp ? u[l] = a[l].applyTo(i[l], this, l) : a[l] instanceof R.UnsetOp || (u[l] = a[l].applyTo(i[l]));
                            if (!r.ignoreValidation) {
                                var c = this.validate(u);
                                if (c) return "function" == typeof r.error && r.error(this, c), !1 }
                            var f = this._getPendingOps(),
                                d = f.length - 1;
                            for (var l in a) {
                                var h = a[l].mergeWith(f[d][l]);
                                P.setPendingOp(this.className, this._getStateIdentifier(), l, h) }
                            return this } }, { key: "unset", value: function(e, t) {
                            return t = t || {}, t.unset = !0, this.set(e, null, t) } }, { key: "increment", value: function(e, t) {
                            if ("undefined" == typeof t && (t = 1), "number" != typeof t) throw new Error("Cannot increment by a non-numeric amount.");
                            return this.set(e, new R.IncrementOp(t)) } }, { key: "add", value: function(e, t) {
                            return this.set(e, new R.AddOp([t])) } }, { key: "addUnique", value: function(e, t) {
                            return this.set(e, new R.AddUniqueOp([t])) } }, { key: "remove", value: function(e, t) {
                            return this.set(e, new R.RemoveOp([t])) } }, { key: "op", value: function(e) {
                            for (var t = this._getPendingOps(), r = t.length; r--;)
                                if (t[r][e]) return t[r][e] } }, { key: "clone", value: function t() {
                            var t = new this.constructor;
                            return t.className || (t.className = this.className), t.set && t.set(this.attributes), t } }, { key: "isNew", value: function() {
                            return !this.id } }, { key: "existed", value: function() {
                            if (!this.id) return !1;
                            var e = P.getState(this.className, this._getStateIdentifier());
                            return e ? e.existed : !1 } }, { key: "isValid", value: function() {
                            return !this.validate(this.attributes) } }, { key: "validate", value: function(e) {
                            if (e.hasOwnProperty("ACL") && !(e.ACL instanceof A["default"])) return new I["default"](I["default"].OTHER_CAUSE, "ACL must be a Parse ACL.");
                            for (var t in e)
                                if (!/^[A-Za-z][0-9A-Za-z_]*$/.test(t)) return new I["default"](I["default"].INVALID_KEY_NAME);
                            return !1 } }, { key: "getACL", value: function() {
                            var e = this.get("ACL");
                            return e instanceof A["default"] ? e : null } }, { key: "setACL", value: function(e, t) {
                            return this.set("ACL", e, t) } }, { key: "clear", value: function() {
                            var e = this.attributes,
                                t = {},
                                r = ["createdAt", "updatedAt"]; "function" == typeof this.constructor.readOnlyAttributes && (r = r.concat(this.constructor.readOnlyAttributes()));
                            for (var n in e) r.indexOf(n) < 0 && (t[n] = !0);
                            return this.set(t, { unset: !0 }) } }, { key: "fetch", value: function(e) { e = e || {};
                            var t = {};
                            e.hasOwnProperty("useMasterKey") && (t.useMasterKey = e.useMasterKey), e.hasOwnProperty("sessionToken") && (t.sessionToken = e.sessionToken);
                            var r = h["default"].getObjectController();
                            return r.fetch(this, !0, t)._thenRunCallbacks(e) } }, { key: "save", value: function(e, t, r) {
                            var n, a, s = this;
                            if ("object" == typeof e || "undefined" == typeof e ? (n = e, a = t) : (n = {}, n[e] = t, a = r), !a && n && (a = {}, "function" == typeof n.success && (a.success = n.success, delete n.success), "function" == typeof n.error && (a.error = n.error, delete n.error)), n) {
                                var o = this.validate(n);
                                if (o) return a && "function" == typeof a.error && a.error(this, o), x["default"].error(o);
                                this.set(n, a) }
                            a = a || {};
                            var i = {};
                            a.hasOwnProperty("useMasterKey") && (i.useMasterKey = a.useMasterKey), a.hasOwnProperty("sessionToken") && (i.sessionToken = a.sessionToken);
                            var u = h["default"].getObjectController(),
                                l = (0, J["default"])(this);
                            return u.save(l, i).then(function() {
                                return u.save(s, i) })._thenRunCallbacks(a, this) } }, { key: "destroy", value: function(e) { e = e || {};
                            var t = {};
                            return e.hasOwnProperty("useMasterKey") && (t.useMasterKey = e.useMasterKey), e.hasOwnProperty("sessionToken") && (t.sessionToken = e.sessionToken), this.id ? h["default"].getObjectController().destroy(this, t)._thenRunCallbacks(e) : x["default"].as()._thenRunCallbacks(e) } }, { key: "attributes", get: function() {
                            return i(P.estimateAttributes(this.className, this._getStateIdentifier())) } }, { key: "createdAt", get: function() {
                            return this._getServerData().createdAt } }, { key: "updatedAt", get: function() {
                            return this._getServerData().updatedAt } }], [{ key: "_clearAllState", value: function() { P._clearAllState() } }, { key: "fetchAll", value: function(e, t) {
                            var t = t || {},
                                r = {};
                            return t.hasOwnProperty("useMasterKey") && (r.useMasterKey = t.useMasterKey), t.hasOwnProperty("sessionToken") && (r.sessionToken = t.sessionToken), h["default"].getObjectController().fetch(e, !0, r)._thenRunCallbacks(t) } }, { key: "fetchAllIfNeeded", value: function(e, t) {
                            var t = t || {},
                                r = {};
                            return t.hasOwnProperty("useMasterKey") && (r.useMasterKey = t.useMasterKey), t.hasOwnProperty("sessionToken") && (r.sessionToken = t.sessionToken), h["default"].getObjectController().fetch(e, !1, r)._thenRunCallbacks(t) } }, { key: "destroyAll", value: function(e, t) {
                            var t = t || {},
                                r = {};
                            return t.hasOwnProperty("useMasterKey") && (r.useMasterKey = t.useMasterKey), t.hasOwnProperty("sessionToken") && (r.sessionToken = t.sessionToken), h["default"].getObjectController().destroy(e, r)._thenRunCallbacks(t) } }, { key: "saveAll", value: function(e, t) {
                            var t = t || {},
                                r = {};
                            return t.hasOwnProperty("useMasterKey") && (r.useMasterKey = t.useMasterKey), t.hasOwnProperty("sessionToken") && (r.sessionToken = t.sessionToken), h["default"].getObjectController().save(e, r)._thenRunCallbacks(t) } }, { key: "createWithoutData", value: function(e) {
                            var t = new this;
                            return t.id = e, t } }, { key: "fromJSON", value: function(t) {
                            if (!t.className) throw new Error("Cannot create an object without a className");
                            var r = W[t.className],
                                n = r ? new r : new e(t.className),
                                a = {};
                            for (var s in t) "className" !== s && "__type" !== s && (a[s] = t[s]);
                            return n._finishFetch(a), t.objectId && n._setExisted(!0), n } }, { key: "registerSubclass", value: function(e, t) {
                            if ("string" != typeof e) throw new TypeError("The first argument must be a valid class name.");
                            if ("undefined" == typeof t) throw new TypeError("You must supply a subclass constructor.");
                            if ("function" != typeof t) throw new TypeError("You must register the subclass constructor. Did you attempt to register an instance of the subclass?");
                            W[e] = t, t.className || (t.className = e) } }, { key: "extend", value: function(t, r, n) {
                            if ("string" != typeof t) {
                                if (t && "string" == typeof t.className) return e.extend(t.className, t, r);
                                throw new Error("Parse.Object.extend's first argument should be the className.") }
                            var a = t; "User" === a && h["default"].get("PERFORM_USER_REWRITE") && (a = "_User");
                            var s = e.prototype;
                            this.hasOwnProperty("__super__") && this.__super__ ? s = this.prototype : W[a] && (s = W[a].prototype);
                            var o = function(e, t) {
                                if ("function" == typeof this.initialize && this.initialize.apply(this, arguments), this.className = a, this._objCount = G++, e && "object" == typeof e && !this.set(e || {}, t)) throw new Error("Can't create an invalid Parse Object") };
                            if (o.className = a, o.__super__ = s, o.prototype = u(s, { constructor: { value: o, enumerable: !1, writable: !0, configurable: !0 } }), r)
                                for (var i in r) "className" !== i && l(o.prototype, i, { value: r[i], enumerable: !1, writable: !0, configurable: !0 });
                            if (n)
                                for (var i in n) "className" !== i && l(o, i, { value: n[i], enumerable: !1, writable: !0, configurable: !0 });
                            return o.extend = function(t, r, n) {
                                return "string" == typeof t ? e.extend.call(o, t, r, n) : e.extend.call(o, a, t, r) }, o.createWithoutData = e.createWithoutData, W[a] = o, o } }, { key: "enableSingleInstance", value: function() { V = !0 } }, { key: "disableSingleInstance", value: function() { V = !1 } }]), e
                }();
            r["default"] = z, h["default"].setObjectController({ fetch: function(e, t, r) {
                    if (Array.isArray(e)) {
                        if (e.length < 1) return x["default"].as([]);
                        var n = [],
                            a = [],
                            s = null,
                            i = [],
                            u = null;
                        if (e.forEach(function(e, r) { u || (s || (s = e.className), s !== e.className && (u = new I["default"](I["default"].INVALID_CLASS_NAME, "All objects should be of the same class")), e.id || (u = new I["default"](I["default"].MISSING_OBJECT_ID, "All objects must have an ID")), (t || 0 === o(e._getServerData()).length) && (a.push(e.id), n.push(e)), i.push(e)) }), u) return x["default"].error(u);
                        var l = new U["default"](s);
                        return l.containedIn("objectId", a), l._limit = a.length, l.find(r).then(function(e) {
                            var r = {};
                            e.forEach(function(e) { r[e.id] = e });
                            for (var a = 0; a < n.length; a++) {
                                var s = n[a];
                                if ((!s || !s.id || !r[s.id]) && t) return x["default"].error(new I["default"](I["default"].OBJECT_NOT_FOUND, "All objects must exist on the server.")) }
                            if (!V)
                                for (var a = 0; a < i.length; a++) {
                                    var s = i[a];
                                    if (s && s.id && r[s.id]) {
                                        var o = s.id;
                                        s._finishFetch(r[o].toJSON()), i[a] = r[o] } }
                            return x["default"].as(i) }) }
                    var c = h["default"].getRESTController();
                    return c.request("GET", "classes/" + e.className + "/" + e._getId(), {}, r).then(function(t, r, n) {
                        return e instanceof z && (e._clearPendingOps(), e._finishFetch(t)), e }) }, destroy: function(e, t) {
                    var r = h["default"].getRESTController();
                    if (Array.isArray(e)) {
                        if (e.length < 1) return x["default"].as([]);
                        var a = [
                            []
                        ];
                        e.forEach(function(e) { e.id && (a[a.length - 1].push(e), a[a.length - 1].length >= 20 && a.push([])) }), 0 === a[a.length - 1].length && a.pop();
                        var s = x["default"].as(),
                            o = [];
                        return a.forEach(function(e) { s = s.then(function() {
                                return r.request("POST", "batch", { requests: e.map(function(e) {
                                        return { method: "DELETE", path: n() + "classes/" + e.className + "/" + e._getId(), body: {} } }) }, t).then(function(t) {
                                    for (var r = 0; r < t.length; r++)
                                        if (t[r] && t[r].hasOwnProperty("error")) {
                                            var n = new I["default"](t[r].error.code, t[r].error.error);
                                            n.object = e[r], o.push(n) } }) }) }), s.then(function() {
                            if (o.length) {
                                var t = new I["default"](I["default"].AGGREGATE_ERROR);
                                return t.errors = o, x["default"].error(t) }
                            return x["default"].as(e) }) }
                    return e instanceof z ? r.request("DELETE", "classes/" + e.className + "/" + e._getId(), {}, t).then(function() {
                        return x["default"].as(e) }) : x["default"].as(e) }, save: function(e, t) {
                    var r = h["default"].getRESTController();
                    if (Array.isArray(e)) {
                        if (e.length < 1) return x["default"].as([]);
                        for (var a = e.concat(), s = 0; s < e.length; s++) e[s] instanceof z && (a = a.concat((0, J["default"])(e[s], !0)));
                        a = (0, K["default"])(a);
                        var o = x["default"].as(),
                            i = [];
                        return a.forEach(function(e) { e instanceof N["default"] ? o = o.then(function() {
                                return e.save() }) : e instanceof z && i.push(e) }), o.then(function() {
                            var a = null;
                            return x["default"]._continueWhile(function() {
                                return i.length > 0 }, function() {
                                var e = [],
                                    s = [];
                                if (i.forEach(function(t) { e.length < 20 && (0, y["default"])(t) ? e.push(t) : s.push(t) }), i = s, e.length < 1) return x["default"].error(new I["default"](I["default"].OTHER_CAUSE, "Tried to save a batch with a cycle."));
                                var o = new x["default"],
                                    u = [],
                                    l = [];
                                return e.forEach(function(e, t) {
                                    var r = new x["default"];
                                    u.push(r);
                                    var n = function() {
                                        return r.resolve(), o.then(function(r, n) {
                                            if (r[t].hasOwnProperty("success")) e._handleSaveResponse(r[t].success, n);
                                            else {
                                                if (!a && r[t].hasOwnProperty("error")) {
                                                    var s = r[t].error;
                                                    a = new I["default"](s.code, s.error), i = [] }
                                                e._handleSaveError() } }) };
                                    P.pushPendingState(e.className, e._getStateIdentifier()), l.push(P.enqueueTask(e.className, e._getStateIdentifier(), n)) }), x["default"].when(u).then(function() {
                                    return r.request("POST", "batch", { requests: e.map(function(e) {
                                            var t = e._getSaveParams();
                                            return t.path = n() + t.path, t }) }, t) }).then(function(e, t, r) { o.resolve(e, t) }), x["default"].when(l) }).then(function() {
                                return a ? x["default"].error(a) : x["default"].as(e) }) }) }
                    if (e instanceof z) {
                        var u = e,
                            l = function() {
                                var e = u._getSaveParams();
                                return r.request(e.method, e.path, e.body, t).then(function(e, t) { u._handleSaveResponse(e, t) }, function(e) {
                                    return u._handleSaveError(), x["default"].error(e) }) };
                        return P.pushPendingState(e.className, e._getStateIdentifier()), P.enqueueTask(e.className, e._getStateIdentifier(), l).then(function() {
                            return e }, function(e) {
                            return e }) }
                    return x["default"].as() } }), t.exports = r["default"]
        }, { "./CoreManager": 3, "./ObjectState": 6, "./ParseACL": 8, "./ParseError": 10, "./ParseFile": 11, "./ParseOp": 15, "./ParsePromise": 16, "./ParseQuery": 17, "./ParseRelation": 18, "./canBeSerialized": 28, "./decode": 29, "./encode": 30, "./equals": 31, "./escape": 32, "./parseDate": 34, "./unique": 35, "./unsavedChildren": 36, "babel-runtime/core-js/object/create": 37, "babel-runtime/core-js/object/define-property": 38, "babel-runtime/core-js/object/freeze": 39, "babel-runtime/core-js/object/keys": 41, "babel-runtime/helpers/class-call-check": 43, "babel-runtime/helpers/create-class": 44, "babel-runtime/helpers/interop-require-default": 47, "babel-runtime/helpers/interop-require-wildcard": 48 }],
        15: [function(e, t, r) { "use strict";

            function n(e) {
                if (!e || !e.__op) return null;
                switch (e.__op) {
                    case "Delete":
                        return new C;
                    case "Increment":
                        return new P(e.amount);
                    case "Add":
                        return new k((0, d["default"])(e.objects));
                    case "AddUnique":
                        return new A((0, d["default"])(e.objects));
                    case "Remove":
                        return new E((0, d["default"])(e.objects));
                    case "AddRelation":
                        var t = (0, d["default"])(e.objects);
                        return Array.isArray(t) ? new S(t, []) : new S([], []);
                    case "RemoveRelation":
                        var r = (0, d["default"])(e.objects);
                        return Array.isArray(r) ? new S([], r) : new S([], []);
                    case "Batch":
                        for (var t = [], r = [], n = 0; n < e.ops.length; n++) "AddRelation" === e.ops[n].__op ? t = t.concat((0, d["default"])(e.ops[n].objects)) : "RemoveRelation" === e.ops[n].__op && (r = r.concat((0, d["default"])(e.ops[n].objects)));
                        return new S(t, r) }
                return null }
            var a = e("babel-runtime/helpers/create-class")["default"],
                s = e("babel-runtime/helpers/class-call-check")["default"],
                o = e("babel-runtime/helpers/get")["default"],
                i = e("babel-runtime/helpers/inherits")["default"],
                u = e("babel-runtime/helpers/interop-require-default")["default"];
            Object.defineProperty(r, "__esModule", { value: !0 }), r.opFromJSON = n;
            var l = e("./arrayContainsObject"),
                c = u(l),
                f = e("./decode"),
                d = u(f),
                h = e("./encode"),
                p = u(h),
                y = e("./ParseObject"),
                v = u(y),
                m = e("./ParseRelation"),
                b = u(m),
                _ = e("./unique"),
                g = u(_),
                w = function() {
                    function e() { s(this, e) }
                    return a(e, [{ key: "applyTo", value: function(e) {} }, { key: "mergeWith", value: function(e) {} }, { key: "toJSON", value: function() {} }]), e }();
            r.Op = w;
            var O = function(e) {
                function t(e) { s(this, t), o(Object.getPrototypeOf(t.prototype), "constructor", this).call(this), this._value = e }
                return i(t, e), a(t, [{ key: "applyTo", value: function(e) {
                        return this._value } }, { key: "mergeWith", value: function(e) {
                        return new t(this._value) } }, { key: "toJSON", value: function() {
                        return (0, p["default"])(this._value, !1, !0) } }]), t }(w);
            r.SetOp = O;
            var C = function(e) {
                function t() { s(this, t), o(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments) }
                return i(t, e), a(t, [{ key: "applyTo", value: function(e) {} }, { key: "mergeWith", value: function(e) {
                        return new t } }, { key: "toJSON", value: function() {
                        return { __op: "Delete" } } }]), t }(w);
            r.UnsetOp = C;
            var P = function(e) {
                function t(e) {
                    if (s(this, t), o(Object.getPrototypeOf(t.prototype), "constructor", this).call(this), "number" != typeof e) throw new TypeError("Increment Op must be initialized with a numeric amount.");
                    this._amount = e }
                return i(t, e), a(t, [{ key: "applyTo", value: function(e) {
                        if ("undefined" == typeof e) return this._amount;
                        if ("number" != typeof e) throw new TypeError("Cannot increment a non-numeric value.");
                        return this._amount + e } }, { key: "mergeWith", value: function(e) {
                        if (!e) return this;
                        if (e instanceof O) return new O(this.applyTo(e._value));
                        if (e instanceof C) return new O(this._amount);
                        if (e instanceof t) return new t(this.applyTo(e._amount));
                        throw new Error("Cannot merge Increment Op with the previous Op") } }, { key: "toJSON", value: function() {
                        return { __op: "Increment", amount: this._amount } } }]), t }(w);
            r.IncrementOp = P;
            var k = function(e) {
                function t(e) { s(this, t), o(Object.getPrototypeOf(t.prototype), "constructor", this).call(this), this._value = Array.isArray(e) ? e : [e] }
                return i(t, e), a(t, [{ key: "applyTo", value: function(e) {
                        if (null == e) return this._value;
                        if (Array.isArray(e)) return e.concat(this._value);
                        throw new Error("Cannot add elements to a non-array value") } }, { key: "mergeWith", value: function(e) {
                        if (!e) return this;
                        if (e instanceof O) return new O(this.applyTo(e._value));
                        if (e instanceof C) return new O(this._value);
                        if (e instanceof t) return new t(this.applyTo(e._value));
                        throw new Error("Cannot merge Add Op with the previous Op") } }, { key: "toJSON", value: function() {
                        return { __op: "Add", objects: (0, p["default"])(this._value, !1, !0) } } }]), t }(w);
            r.AddOp = k;
            var A = function(e) {
                function t(e) { s(this, t), o(Object.getPrototypeOf(t.prototype), "constructor", this).call(this), this._value = (0, g["default"])(Array.isArray(e) ? e : [e]) }
                return i(t, e), a(t, [{ key: "applyTo", value: function(e) {
                        if (null == e) return this._value || [];
                        if (Array.isArray(e)) {
                            var t = e,
                                r = [];
                            return this._value.forEach(function(e) { e instanceof v["default"] ? (0, c["default"])(t, e) || r.push(e) : t.indexOf(e) < 0 && r.push(e) }), e.concat(r) }
                        throw new Error("Cannot add elements to a non-array value") } }, { key: "mergeWith", value: function(e) {
                        if (!e) return this;
                        if (e instanceof O) return new O(this.applyTo(e._value));
                        if (e instanceof C) return new O(this._value);
                        if (e instanceof t) return new t(this.applyTo(e._value));
                        throw new Error("Cannot merge AddUnique Op with the previous Op") } }, { key: "toJSON", value: function() {
                        return { __op: "AddUnique", objects: (0, p["default"])(this._value, !1, !0) } } }]), t }(w);
            r.AddUniqueOp = A;
            var E = function(e) {
                function t(e) { s(this, t), o(Object.getPrototypeOf(t.prototype), "constructor", this).call(this), this._value = (0, g["default"])(Array.isArray(e) ? e : [e]) }
                return i(t, e), a(t, [{ key: "applyTo", value: function(e) {
                        if (null == e) return [];
                        if (Array.isArray(e)) {
                            for (var t = e.indexOf(this._value), r = e.concat([]), t = 0; t < this._value.length; t++) {
                                for (var n = r.indexOf(this._value[t]); n > -1;) r.splice(n, 1), n = r.indexOf(this._value[t]);
                                if (this._value[t] instanceof v["default"] && this._value[t].id)
                                    for (var a = 0; a < r.length; a++) r[a] instanceof v["default"] && this._value[t].id === r[a].id && (r.splice(a, 1), a--) }
                            return r }
                        throw new Error("Cannot remove elements from a non-array value") } }, { key: "mergeWith", value: function(e) {
                        if (!e) return this;
                        if (e instanceof O) return new O(this.applyTo(e._value));
                        if (e instanceof C) return new C;
                        if (e instanceof t) {
                            for (var r = e._value.concat([]), n = 0; n < this._value.length; n++) this._value[n] instanceof v["default"] ? (0, c["default"])(r, this._value[n]) || r.push(this._value[n]) : r.indexOf(this._value[n]) < 0 && r.push(this._value[n]);
                            return new t(r) }
                        throw new Error("Cannot merge Remove Op with the previous Op") } }, { key: "toJSON", value: function() {
                        return { __op: "Remove", objects: (0, p["default"])(this._value, !1, !0) } } }]), t }(w);
            r.RemoveOp = E;
            var S = function(e) {
                function t(e, r) { s(this, t), o(Object.getPrototypeOf(t.prototype), "constructor", this).call(this), this._targetClassName = null, Array.isArray(e) && (this.relationsToAdd = (0, g["default"])(e.map(this._extractId, this))), Array.isArray(r) && (this.relationsToRemove = (0, g["default"])(r.map(this._extractId, this))) }
                return i(t, e), a(t, [{ key: "_extractId", value: function(e) {
                        if ("string" == typeof e) return e;
                        if (!e.id) throw new Error("You cannot add or remove an unsaved Parse Object from a relation");
                        if (this._targetClassName || (this._targetClassName = e.className), this._targetClassName !== e.className) throw new Error("Tried to create a Relation with 2 different object types: " + this._targetClassName + " and " + e.className + ".");
                        return e.id } }, { key: "applyTo", value: function(e, t, r) {
                        if (!e) {
                            var n = new v["default"](t.className);
                            t.id && 0 === t.id.indexOf("local") ? n._localId = t.id : t.id && (n.id = t.id);
                            var a = new b["default"](n, r);
                            return a.targetClassName = this._targetClassName, a }
                        if (e instanceof b["default"]) {
                            if (this._targetClassName)
                                if (e.targetClassName) {
                                    if (this._targetClassName !== e.targetClassName) throw new Error("Related object must be a " + e.targetClassName + ", but a " + this._targetClassName + " was passed in.") } else e.targetClassName = this._targetClassName;
                            return e }
                        throw new Error("Relation cannot be applied to a non-relation field") } }, { key: "mergeWith", value: function(e) {
                        if (!e) return this;
                        if (e instanceof C) throw new Error("You cannot modify a relation after deleting it.");
                        if (e instanceof t) {
                            if (e._targetClassName && e._targetClassName !== this._targetClassName) throw new Error("Related object must be of class " + e._targetClassName + ", but " + (this._targetClassName || "null") + " was passed in.");
                            var r = e.relationsToAdd.concat([]);
                            this.relationsToRemove.forEach(function(e) {
                                var t = r.indexOf(e);
                                t > -1 && r.splice(t, 1) }), this.relationsToAdd.forEach(function(e) {
                                var t = r.indexOf(e);
                                0 > t && r.push(e) });
                            var n = e.relationsToRemove.concat([]);
                            this.relationsToAdd.forEach(function(e) {
                                var t = n.indexOf(e);
                                t > -1 && n.splice(t, 1) }), this.relationsToRemove.forEach(function(e) {
                                var t = n.indexOf(e);
                                0 > t && n.push(e) });
                            var a = new t(r, n);
                            return a._targetClassName = this._targetClassName, a }
                        throw new Error("Cannot merge Relation Op with the previous Op") } }, { key: "toJSON", value: function() {
                        var e = this,
                            t = function(t) {
                                return { __type: "Pointer", className: e._targetClassName, objectId: t } },
                            r = null,
                            n = null,
                            a = null;
                        return this.relationsToAdd.length > 0 && (a = this.relationsToAdd.map(t), r = { __op: "AddRelation", objects: a }), this.relationsToRemove.length > 0 && (a = this.relationsToRemove.map(t), n = { __op: "RemoveRelation", objects: a }), r && n ? { __op: "Batch", ops: [r, n] } : r || n || {} } }]), t }(w);
            r.RelationOp = S }, { "./ParseObject": 14, "./ParseRelation": 18, "./arrayContainsObject": 27, "./decode": 29, "./encode": 30, "./unique": 35, "babel-runtime/helpers/class-call-check": 43, "babel-runtime/helpers/create-class": 44, "babel-runtime/helpers/get": 45, "babel-runtime/helpers/inherits": 46, "babel-runtime/helpers/interop-require-default": 47 }],
        16: [function(e, t, r) {
            (function(n) { "use strict";
                var a = e("babel-runtime/helpers/create-class")["default"],
                    s = e("babel-runtime/helpers/class-call-check")["default"];
                Object.defineProperty(r, "__esModule", { value: !0 });
                var o = !1,
                    i = function() {
                        function e() { s(this, e), this._resolved = !1, this._rejected = !1, this._resolvedCallbacks = [], this._rejectedCallbacks = [] }
                        return a(e, [{ key: "resolve", value: function() {
                                if (this._resolved || this._rejected) throw new Error("A promise was resolved even though it had already been " + (this._resolved ? "resolved" : "rejected") + ".");
                                this._resolved = !0;
                                for (var e = arguments.length, t = Array(e), r = 0; e > r; r++) t[r] = arguments[r];
                                this._result = t;
                                for (var n = 0; n < this._resolvedCallbacks.length; n++) this._resolvedCallbacks[n].apply(this, t);
                                this._resolvedCallbacks = [], this._rejectedCallbacks = [] } }, { key: "reject", value: function(e) {
                                if (this._resolved || this._rejected) throw new Error("A promise was resolved even though it had already been " + (this._resolved ? "resolved" : "rejected") + ".");
                                this._rejected = !0, this._error = e;
                                for (var t = 0; t < this._rejectedCallbacks.length; t++) this._rejectedCallbacks[t](e);
                                this._resolvedCallbacks = [], this._rejectedCallbacks = [] } }, { key: "then", value: function(t, r) {
                                var a = this,
                                    s = new e,
                                    i = function() {
                                        for (var r = arguments.length, n = Array(r), a = 0; r > a; a++) n[a] = arguments[a];
                                        if ("function" == typeof t)
                                            if (o) try { n = [t.apply(this, n)] } catch (i) { n = [e.error(i)] } else n = [t.apply(this, n)];
                                        1 === n.length && e.is(n[0]) ? n[0].then(function() { s.resolve.apply(s, arguments) }, function(e) { s.reject(e) }) : s.resolve.apply(s, n) },
                                    u = function(t) {
                                        var n = [];
                                        if ("function" == typeof r) {
                                            if (o) try { n = [r(t)] } catch (a) { n = [e.error(a)] } else n = [r(t)];
                                            1 === n.length && e.is(n[0]) ? n[0].then(function() { s.resolve.apply(s, arguments) }, function(e) { s.reject(e) }) : o ? s.resolve.apply(s, n) : s.reject(n[0]) } else s.reject(t) },
                                    l = function(e) { e.call() };
                                return o && ("undefined" != typeof n && "function" == typeof n.nextTick ? l = function(e) { n.nextTick(e) } : "function" == typeof setTimeout && (l = function(e) { setTimeout(e, 0) })), this._resolved ? l(function() { i.apply(a, a._result) }) : this._rejected ? l(function() { u(a._error) }) : (this._resolvedCallbacks.push(i), this._rejectedCallbacks.push(u)), s } }, { key: "always", value: function(e) {
                                return this.then(e, e) } }, { key: "done", value: function(e) {
                                return this.then(e) } }, { key: "fail", value: function(e) {
                                return this.then(null, e) } }, { key: "_thenRunCallbacks", value: function(t, r) {
                                var n = {};
                                return "function" == typeof t ? (n.success = function(e) { t(e, null) }, n.error = function(e) { t(null, e) }) : "object" == typeof t && ("function" == typeof t.success && (n.success = t.success), "function" == typeof t.error && (n.error = t.error)), this.then(function() {
                                    for (var t = arguments.length, r = Array(t), a = 0; t > a; a++) r[a] = arguments[a];
                                    return n.success && n.success.apply(this, r), e.as.apply(e, arguments) }, function(t) {
                                    return n.error && ("undefined" != typeof r ? n.error(r, t) : n.error(t)), e.error(t) }) } }, { key: "_continueWith", value: function(e) {
                                return this.then(function() {
                                    return e(arguments, null) }, function(t) {
                                    return e(null, t) }) } }], [{ key: "is", value: function(e) {
                                return null != e && "function" == typeof e.then } }, { key: "as", value: function() {
                                for (var t = new e, r = arguments.length, n = Array(r), a = 0; r > a; a++) n[a] = arguments[a];
                                return t.resolve.apply(t, n), t } }, { key: "error", value: function() {
                                for (var t = new e, r = arguments.length, n = Array(r), a = 0; r > a; a++) n[a] = arguments[a];
                                return t.reject.apply(t, n), t } }, { key: "when", value: function(t) {
                                var r;
                                r = Array.isArray(t) ? t : arguments;
                                var n = r.length,
                                    a = !1,
                                    s = [],
                                    o = [];
                                if (s.length = r.length, o.length = r.length, 0 === n) return e.as.apply(this, s);
                                for (var i = new e, u = function() { n--, 0 >= n && (a ? i.reject(o) : i.resolve.apply(i, s)) }, l = function(t, r) { e.is(t) ? t.then(function(e) { s[r] = e, u() }, function(e) { o[r] = e, a = !0, u() }) : (s[c] = t, u()) }, c = 0; c < r.length; c++) l(r[c], c);
                                return i } }, { key: "_continueWhile", value: function(t, r) {
                                return t() ? r().then(function() {
                                    return e._continueWhile(t, r) }) : e.as() } }, { key: "isPromisesAPlusCompliant", value: function() {
                                return o } }, { key: "enableAPlusCompliant", value: function() { o = !0 } }, { key: "disableAPlusCompliant", value: function() { o = !1 } }]), e }();
                r["default"] = i, t.exports = r["default"] }).call(this, e("_process")) }, { _process: 75, "babel-runtime/helpers/class-call-check": 43, "babel-runtime/helpers/create-class": 44 }],
        17: [function(e, t, r) {
            "use strict";

            function n(e) {
                return "\\Q" + e.replace("\\E", "\\E\\\\E\\Q") + "\\E" }
            var a = e("babel-runtime/helpers/create-class")["default"],
                s = e("babel-runtime/helpers/class-call-check")["default"],
                o = e("babel-runtime/helpers/interop-require-default")["default"];
            Object.defineProperty(r, "__esModule", { value: !0 });
            var i = e("./CoreManager"),
                u = o(i),
                l = e("./encode"),
                c = o(l),
                f = e("./ParseError"),
                d = o(f),
                h = e("./ParseGeoPoint"),
                p = o(h),
                y = e("./ParseObject"),
                v = o(y),
                m = e("./ParsePromise"),
                b = o(m),
                _ = function() {
                    function e(t) {
                        if (s(this, e), "string" == typeof t) "User" === t && u["default"].get("PERFORM_USER_REWRITE") ? this.className = "_User" : this.className = t;
                        else if (t instanceof v["default"]) this.className = t.className;
                        else {
                            if ("function" != typeof t) throw new TypeError("A ParseQuery must be constructed with a ParseObject or class name.");
                            if ("string" == typeof t.className) this.className = t.className;
                            else {
                                var r = new t;
                                this.className = r.className } }
                        this._where = {}, this._include = [], this._limit = -1, this._skip = 0, this._extraOptions = {} }
                    return a(e, [{ key: "_orQuery", value: function(e) {
                            var t = e.map(function(e) {
                                return e.toJSON().where });
                            return this._where.$or = t, this } }, { key: "_addCondition", value: function(e, t, r) {
                            return this._where[e] && "string" != typeof this._where[e] || (this._where[e] = {}), this._where[e][t] = (0, c["default"])(r, !1, !0), this } }, {
                        key: "toJSON",
                        value: function() {
                            var e = { where: this._where };
                            this._include.length && (e.include = this._include.join(",")), this._select && (e.keys = this._select.join(",")), this._limit >= 0 && (e.limit = this._limit), this._skip > 0 && (e.skip = this._skip), this._order && (e.order = this._order.join(","));
                            for (var t in this._extraOptions) e[t] = this._extraOptions[t];
                            return e
                        }
                    }, { key: "get", value: function(e, t) { this.equalTo("objectId", e);
                            var r = {};
                            return t && t.hasOwnProperty("useMasterKey") && (r.useMasterKey = t.useMasterKey), t && t.hasOwnProperty("sessionToken") && (r.sessionToken = t.sessionToken), this.first(r).then(function(e) {
                                if (e) return e;
                                var t = new d["default"](d["default"].OBJECT_NOT_FOUND, "Object not found.");
                                return b["default"].error(t) })._thenRunCallbacks(t, null) } }, { key: "find", value: function(e) {
                            var t = this;
                            e = e || {};
                            var r = {};
                            e.hasOwnProperty("useMasterKey") && (r.useMasterKey = e.useMasterKey), e.hasOwnProperty("sessionToken") && (r.sessionToken = e.sessionToken);
                            var n = u["default"].getQueryController();
                            return n.find(this.className, this.toJSON(), r).then(function(e) {
                                return e.results.map(function(e) {
                                    return e.className || (e.className = t.className), v["default"].fromJSON(e) }) })._thenRunCallbacks(e) } }, { key: "count", value: function(e) { e = e || {};
                            var t = {};
                            e.hasOwnProperty("useMasterKey") && (t.useMasterKey = e.useMasterKey), e.hasOwnProperty("sessionToken") && (t.sessionToken = e.sessionToken);
                            var r = u["default"].getQueryController(),
                                n = this.toJSON();
                            return n.limit = 0, n.count = 1, r.find(this.className, n, t).then(function(e) {
                                return e.count })._thenRunCallbacks(e) } }, { key: "first", value: function(e) {
                            var t = this;
                            e = e || {};
                            var r = {};
                            e.hasOwnProperty("useMasterKey") && (r.useMasterKey = e.useMasterKey), e.hasOwnProperty("sessionToken") && (r.sessionToken = e.sessionToken);
                            var n = u["default"].getQueryController(),
                                a = this.toJSON();
                            return a.limit = 1, n.find(this.className, a, r).then(function(e) {
                                var r = e.results;
                                if (r[0]) return r[0].className || (r[0].className = t.className), v["default"].fromJSON(r[0]) })._thenRunCallbacks(e) } }, { key: "each", value: function(t, r) {
                            if (r = r || {}, this._order || this._skip || this._limit >= 0) return b["default"].error("Cannot iterate on a query with sort, skip, or limit.")._thenRunCallbacks(r);
                            var n = (new b["default"], new e(this.className));
                            n._limit = r.batchSize || 100, n._include = this._include.map(function(e) {
                                return e }), this._select && (n._select = this._select.map(function(e) {
                                return e })), n._where = {};
                            for (var a in this._where) {
                                var s = this._where[a];
                                if (Array.isArray(s)) n._where[a] = s.map(function(e) {
                                    return e });
                                else if (s && "object" == typeof s) {
                                    var o = {};
                                    n._where[a] = o;
                                    for (var i in s) o[i] = s[i] } else n._where[a] = s }
                            n.ascending("objectId");
                            var u = {};
                            r.hasOwnProperty("useMasterKey") && (u.useMasterKey = r.useMasterKey), r.hasOwnProperty("sessionToken") && (u.sessionToken = r.sessionToken);
                            var l = !1;
                            return b["default"]._continueWhile(function() {
                                return !l }, function() {
                                return n.find(u).then(function(e) {
                                    var r = b["default"].as();
                                    return e.forEach(function(e) { r = r.then(function() {
                                            return t(e) }) }), r.then(function() { e.length >= n._limit ? n.greaterThan("objectId", e[e.length - 1].id) : l = !0 }) }) })._thenRunCallbacks(r) } }, { key: "equalTo", value: function(e, t) {
                            return "undefined" == typeof t ? this.doesNotExist(e) : (this._where[e] = (0, c["default"])(t, !1, !0), this) } }, { key: "notEqualTo", value: function(e, t) {
                            return this._addCondition(e, "$ne", t) } }, { key: "lessThan", value: function(e, t) {
                            return this._addCondition(e, "$lt", t) } }, { key: "greaterThan", value: function(e, t) {
                            return this._addCondition(e, "$gt", t) } }, { key: "lessThanOrEqualTo", value: function(e, t) {
                            return this._addCondition(e, "$lte", t) } }, { key: "greaterThanOrEqualTo", value: function(e, t) {
                            return this._addCondition(e, "$gte", t) } }, { key: "containedIn", value: function(e, t) {
                            return this._addCondition(e, "$in", t) } }, { key: "notContainedIn", value: function(e, t) {
                            return this._addCondition(e, "$nin", t) } }, { key: "containsAll", value: function(e, t) {
                            return this._addCondition(e, "$all", t) } }, { key: "exists", value: function(e) {
                            return this._addCondition(e, "$exists", !0) } }, { key: "doesNotExist", value: function(e) {
                            return this._addCondition(e, "$exists", !1) } }, { key: "matches", value: function(e, t, r) {
                            return this._addCondition(e, "$regex", t), r || (r = ""), t.ignoreCase && (r += "i"), t.multiline && (r += "m"), r.length && this._addCondition(e, "$options", r), this } }, { key: "matchesQuery", value: function(e, t) {
                            var r = t.toJSON();
                            return r.className = t.className, this._addCondition(e, "$inQuery", r) } }, { key: "doesNotMatchQuery", value: function(e, t) {
                            var r = t.toJSON();
                            return r.className = t.className, this._addCondition(e, "$notInQuery", r) } }, { key: "matchesKeyInQuery", value: function(e, t, r) {
                            var n = r.toJSON();
                            return n.className = r.className, this._addCondition(e, "$select", { key: t, query: n }) } }, { key: "doesNotMatchKeyInQuery", value: function(e, t, r) {
                            var n = r.toJSON();
                            return n.className = r.className, this._addCondition(e, "$dontSelect", { key: t, query: n }) } }, { key: "contains", value: function(e, t) {
                            if ("string" != typeof t) throw new Error("The value being searched for must be a string.");
                            return this._addCondition(e, "$regex", n(t)) } }, { key: "startsWith", value: function(e, t) {
                            if ("string" != typeof t) throw new Error("The value being searched for must be a string.");
                            return this._addCondition(e, "$regex", "^" + n(t)) } }, { key: "endsWith", value: function(e, t) {
                            if ("string" != typeof t) throw new Error("The value being searched for must be a string.");
                            return this._addCondition(e, "$regex", n(t) + "$") } }, { key: "near", value: function(e, t) {
                            return t instanceof p["default"] || (t = new p["default"](t)), this._addCondition(e, "$nearSphere", t) } }, { key: "withinRadians", value: function(e, t, r) {
                            return this.near(e, t), this._addCondition(e, "$maxDistance", r) } }, { key: "withinMiles", value: function(e, t, r) {
                            return this.withinRadians(e, t, r / 3958.8) } }, { key: "withinKilometers", value: function(e, t, r) {
                            return this.withinRadians(e, t, r / 6371) } }, { key: "withinGeoBox", value: function(e, t, r) {
                            return t instanceof p["default"] || (t = new p["default"](t)), r instanceof p["default"] || (r = new p["default"](r)), this._addCondition(e, "$within", { $box: [t, r] }), this } }, { key: "ascending", value: function() { this._order = [];
                            for (var e = arguments.length, t = Array(e), r = 0; e > r; r++) t[r] = arguments[r];
                            return this.addAscending.apply(this, t) } }, { key: "addAscending", value: function() {
                            var e = this;
                            this._order || (this._order = []);
                            for (var t = arguments.length, r = Array(t), n = 0; t > n; n++) r[n] = arguments[n];
                            return r.forEach(function(t) { Array.isArray(t) && (t = t.join()), e._order = e._order.concat(t.replace(/\s/g, "").split(",")) }), this } }, { key: "descending", value: function() { this._order = [];
                            for (var e = arguments.length, t = Array(e), r = 0; e > r; r++) t[r] = arguments[r];
                            return this.addDescending.apply(this, t) } }, { key: "addDescending", value: function() {
                            var e = this;
                            this._order || (this._order = []);
                            for (var t = arguments.length, r = Array(t), n = 0; t > n; n++) r[n] = arguments[n];
                            return r.forEach(function(t) { Array.isArray(t) && (t = t.join()), e._order = e._order.concat(t.replace(/\s/g, "").split(",").map(function(e) {
                                    return "-" + e })) }), this } }, { key: "skip", value: function(e) {
                            if ("number" != typeof e || 0 > e) throw new Error("You can only skip by a positive number");
                            return this._skip = e, this } }, { key: "limit", value: function(e) {
                            if ("number" != typeof e) throw new Error("You can only set the limit to a numeric value");
                            return this._limit = e, this } }, { key: "include", value: function() {
                            for (var e = this, t = arguments.length, r = Array(t), n = 0; t > n; n++) r[n] = arguments[n];
                            return r.forEach(function(t) { Array.isArray(t) ? e._include = e._include.concat(t) : e._include.push(t) }), this } }, { key: "select", value: function() {
                            var e = this;
                            this._select || (this._select = []);
                            for (var t = arguments.length, r = Array(t), n = 0; t > n; n++) r[n] = arguments[n];
                            return r.forEach(function(t) { Array.isArray(t) ? e._select = e._select.concat(t) : e._select.push(t) }), this } }], [{ key: "or", value: function() {
                            for (var t = null, r = arguments.length, n = Array(r), a = 0; r > a; a++) n[a] = arguments[a];
                            n.forEach(function(e) {
                                if (t || (t = e.className), t !== e.className) throw new Error("All queries must be for the same class.") });
                            var s = new e(t);
                            return s._orQuery(n), s } }]), e
                }();
            r["default"] = _, u["default"].setQueryController({ find: function(e, t, r) {
                    var n = u["default"].getRESTController();
                    return n.request("GET", "classes/" + e, t, r) } }), t.exports = r["default"]
        }, { "./CoreManager": 3, "./ParseError": 10, "./ParseGeoPoint": 12, "./ParseObject": 14, "./ParsePromise": 16, "./encode": 30, "babel-runtime/helpers/class-call-check": 43, "babel-runtime/helpers/create-class": 44, "babel-runtime/helpers/interop-require-default": 47 }],
        18: [function(e, t, r) { "use strict";
            var n = e("babel-runtime/helpers/create-class")["default"],
                a = e("babel-runtime/helpers/class-call-check")["default"],
                s = e("babel-runtime/helpers/interop-require-default")["default"];
            Object.defineProperty(r, "__esModule", { value: !0 });
            var o = e("./ParseOp"),
                i = e("./ParseObject"),
                u = (s(i), e("./ParseQuery")),
                l = s(u),
                c = function() {
                    function e(t, r) { a(this, e), this.parent = t, this.key = r, this.targetClassName = null }
                    return n(e, [{ key: "_ensureParentAndKey", value: function(e, t) {
                            if (this.key = this.key || t, this.key !== t) throw new Error("Internal Error. Relation retrieved from two different keys.");
                            if (this.parent) {
                                if (this.parent.className !== e.className) throw new Error("Internal Error. Relation retrieved from two different Objects.");
                                if (this.parent.id) {
                                    if (this.parent.id !== e.id) throw new Error("Internal Error. Relation retrieved from two different Objects.") } else e.id && (this.parent = e) } else this.parent = e } }, { key: "add", value: function(e) { Array.isArray(e) || (e = [e]);
                            var t = new o.RelationOp(e, []);
                            return this.parent.set(this.key, t), this.targetClassName = t._targetClassName, this.parent } }, { key: "remove", value: function(e) { Array.isArray(e) || (e = [e]);
                            var t = new o.RelationOp([], e);
                            this.parent.set(this.key, t), this.targetClassName = t._targetClassName } }, { key: "toJSON", value: function() {
                            return { __type: "Relation", className: this.targetClassName } } }, { key: "query", value: function t() {
                            var t;
                            return this.targetClassName ? t = new l["default"](this.targetClassName) : (t = new l["default"](this.parent.className), t._extraOptions.redirectClassNameForKey = this.key), t._addCondition("$relatedTo", "object", { __type: "Pointer", className: this.parent.className, objectId: this.parent.id }), t._addCondition("$relatedTo", "key", this.key), t } }]), e }();
            r["default"] = c, t.exports = r["default"] }, { "./ParseObject": 14, "./ParseOp": 15, "./ParseQuery": 17, "babel-runtime/helpers/class-call-check": 43, "babel-runtime/helpers/create-class": 44, "babel-runtime/helpers/interop-require-default": 47 }],
        19: [function(e, t, r) { "use strict";
            var n = e("babel-runtime/helpers/get")["default"],
                a = e("babel-runtime/helpers/inherits")["default"],
                s = e("babel-runtime/helpers/create-class")["default"],
                o = e("babel-runtime/helpers/class-call-check")["default"],
                i = e("babel-runtime/helpers/interop-require-default")["default"];
            Object.defineProperty(r, "__esModule", { value: !0 });
            var u = e("./ParseACL"),
                l = i(u),
                c = e("./ParseError"),
                f = i(c),
                d = e("./ParseObject"),
                h = i(d),
                p = function(e) {
                    function t(e, r) { o(this, t), n(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, "_Role"), "string" == typeof e && r instanceof l["default"] && (this.setName(e), this.setACL(r)) }
                    return a(t, e), s(t, [{ key: "getName", value: function() {
                            return this.get("name") } }, { key: "setName", value: function(e, t) {
                            return this.set("name", e, t) } }, { key: "getUsers", value: function() {
                            return this.relation("users") } }, { key: "getRoles", value: function() {
                            return this.relation("roles") } }, { key: "validate", value: function(e, r) {
                            var a = n(Object.getPrototypeOf(t.prototype), "validate", this).call(this, e, r);
                            if (a) return a;
                            if ("name" in e && e.name !== this.getName()) {
                                var s = e.name;
                                if (this.id && this.id !== e.objectId) return new f["default"](f["default"].OTHER_CAUSE, "A role's name can only be set before it has been saved.");
                                if ("string" != typeof s) return new f["default"](f["default"].OTHER_CAUSE, "A role's name must be a String.");
                                if (!/^[0-9a-zA-Z\-_ ]+$/.test(s)) return new f["default"](f["default"].OTHER_CAUSE, "A role's name can be only contain alphanumeric characters, _, -, and spaces.") }
                            return !1 } }]), t }(h["default"]);
            r["default"] = p, h["default"].registerSubclass("_Role", p), t.exports = r["default"] }, { "./ParseACL": 8, "./ParseError": 10, "./ParseObject": 14, "babel-runtime/helpers/class-call-check": 43, "babel-runtime/helpers/create-class": 44, "babel-runtime/helpers/get": 45, "babel-runtime/helpers/inherits": 46, "babel-runtime/helpers/interop-require-default": 47 }],
        20: [function(e, t, r) { "use strict";
            var n = e("babel-runtime/helpers/get")["default"],
                a = e("babel-runtime/helpers/inherits")["default"],
                s = e("babel-runtime/helpers/create-class")["default"],
                o = e("babel-runtime/helpers/class-call-check")["default"],
                i = e("babel-runtime/helpers/interop-require-default")["default"];
            Object.defineProperty(r, "__esModule", { value: !0 });
            var u = e("./CoreManager"),
                l = i(u),
                c = e("./isRevocableSession"),
                f = i(c),
                d = e("./ParseObject"),
                h = i(d),
                p = e("./ParsePromise"),
                y = i(p),
                v = e("./ParseUser"),
                m = i(v),
                b = function(e) {
                    function t(e) {
                        if (o(this, t), n(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, "_Session"), e && "object" == typeof e && !this.set(e || {})) throw new Error("Can't create an invalid Session") }
                    return a(t, e), s(t, [{ key: "getSessionToken", value: function() {
                            return this.get("sessionToken") } }], [{ key: "readOnlyAttributes", value: function() {
                            return ["createdWith", "expiresAt", "installationId", "restricted", "sessionToken", "user"] } }, { key: "current", value: function(e) { e = e || {};
                            var t = l["default"].getSessionController(),
                                r = {};
                            return e.hasOwnProperty("useMasterKey") && (r.useMasterKey = e.useMasterKey), m["default"].currentAsync().then(function(e) {
                                if (!e) return y["default"].error("There is no current user.");
                                e.getSessionToken();
                                return r.sessionToken = e.getSessionToken(), t.getSession(r) }) } }, { key: "isCurrentSessionRevocable", value: function() {
                            var e = m["default"].current();
                            return e ? (0, f["default"])(e.getSessionToken() || "") : !1 } }]), t }(h["default"]);
            r["default"] = b, h["default"].registerSubclass("_Session", b), l["default"].setSessionController({ getSession: function(e) {
                    var t = l["default"].getRESTController(),
                        r = new b;
                    return t.request("GET", "sessions/me", {}, e).then(function(e) {
                        return r._finishFetch(e), r._setExisted(!0), r }) } }), t.exports = r["default"] }, { "./CoreManager": 3, "./ParseObject": 14, "./ParsePromise": 16, "./ParseUser": 21, "./isRevocableSession": 33, "babel-runtime/helpers/class-call-check": 43, "babel-runtime/helpers/create-class": 44, "babel-runtime/helpers/get": 45, "babel-runtime/helpers/inherits": 46, "babel-runtime/helpers/interop-require-default": 47 }],
        21: [function(e, t, r) { "use strict";
            var n = e("babel-runtime/helpers/get")["default"],
                a = e("babel-runtime/helpers/inherits")["default"],
                s = e("babel-runtime/helpers/create-class")["default"],
                o = e("babel-runtime/helpers/class-call-check")["default"],
                i = e("babel-runtime/core-js/object/define-property")["default"],
                u = e("babel-runtime/helpers/interop-require-default")["default"],
                l = e("babel-runtime/helpers/interop-require-wildcard")["default"];
            Object.defineProperty(r, "__esModule", { value: !0 });
            var c = e("./CoreManager"),
                f = u(c),
                d = e("./isRevocableSession"),
                h = u(d),
                p = e("./ObjectState"),
                y = l(p),
                v = e("./ParseError"),
                m = u(v),
                b = e("./ParseObject"),
                _ = u(b),
                g = e("./ParsePromise"),
                w = u(g),
                O = e("./ParseSession"),
                C = u(O),
                P = e("./Storage"),
                k = u(P),
                A = "currentUser",
                E = !f["default"].get("IS_NODE"),
                S = !1,
                j = null,
                I = {},
                T = function(e) {
                    function t(e) {
                        if (o(this, t), n(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, "_User"), e && "object" == typeof e && !this.set(e || {})) throw new Error("Can't create an invalid Parse User") }
                    return a(t, e), s(t, [{ key: "_upgradeToRevocableSession", value: function(e) { e = e || {};
                            var t = {};
                            e.hasOwnProperty("useMasterKey") && (t.useMasterKey = e.useMasterKey);
                            var r = f["default"].getUserController();
                            return r.upgradeToRevocableSession(this, t)._thenRunCallbacks(e) } }, { key: "_linkWith", value: function(e, t) {
                            var r, n = this;
                            if ("string" == typeof e ? (r = e, e = I[e]) : r = e.getAuthType(), t && t.hasOwnProperty("authData")) {
                                var a = this.get("authData") || {};
                                a[r] = t.authData;
                                var s = f["default"].getUserController();
                                return s.linkWith(this, a)._thenRunCallbacks(t, this) }
                            var o = new w["default"];
                            return e.authenticate({ success: function(e, r) {
                                    var a = {};
                                    a.authData = r, t.success && (a.success = t.success), t.error && (a.error = t.error), n._linkWith(e, a).then(function() { o.resolve(n) }, function(e) { o.reject(e) }) }, error: function(e, r) { t.error && t.error(n, r), o.reject(r) } }), o } }, { key: "_synchronizeAuthData", value: function(e) {
                            if (this.isCurrent() && e) {
                                var t; "string" == typeof e ? (t = e, e = I[t]) : t = e.getAuthType();
                                var r = this.get("authData");
                                if (e && "object" == typeof r) {
                                    var n = e.restoreAuthentication(r[t]);
                                    n || this._unlinkFrom(e) } } } }, { key: "_synchronizeAllAuthData", value: function() {
                            var e = this.get("authData");
                            if ("object" == typeof e)
                                for (var t in e) this._synchronizeAuthData(t) } }, { key: "_cleanupAuthData", value: function() {
                            if (this.isCurrent()) {
                                var e = this.get("authData");
                                if ("object" == typeof e)
                                    for (var t in e) e[t] || delete e[t] } } }, { key: "_unlinkFrom", value: function(e, t) {
                            var r, n = this;
                            return "string" == typeof e ? (r = e, e = I[e]) : r = e.getAuthType(), this._linkWith(e, { authData: null }).then(function() {
                                return n._synchronizeAuthData(e), w["default"].as(n) })._thenRunCallbacks(t) } }, { key: "_isLinked", value: function(e) {
                            var t;
                            t = "string" == typeof e ? e : e.getAuthType();
                            var r = this.get("authData") || {};
                            return !!r[t] } }, { key: "_logOutWithAll", value: function() {
                            var e = this.get("authData");
                            if ("object" == typeof e)
                                for (var t in e) this._logOutWith(t) } }, { key: "_logOutWith", value: function(e) { this.isCurrent() && ("string" == typeof e && (e = I[e]), e && e.deauthenticate && e.deauthenticate()) } }, { key: "isCurrent", value: function() {
                            var e = t.current();
                            return !!e && e.id === this.id } }, { key: "getUsername", value: function() {
                            return this.get("username") } }, { key: "setUsername", value: function(e) {
                            var t = this.get("authData");
                            t && t.hasOwnProperty("anonymous") && (t.anonymous = null), this.set("username", e) } }, { key: "setPassword", value: function(e) { this.set("password", e) } }, { key: "getEmail", value: function() {
                            return this.get("email") } }, { key: "setEmail", value: function(e) { this.set("email", e) } }, { key: "getSessionToken", value: function() {
                            return this.get("sessionToken") } }, { key: "authenticated", value: function() {
                            var e = t.current();
                            return !!this.get("sessionToken") && !!e && e.id === this.id } }, { key: "signUp", value: function(e, t) { t = t || {};
                            var r = {};
                            t.hasOwnProperty("useMasterKey") && (r.useMasterKey = t.useMasterKey);
                            var n = f["default"].getUserController();
                            return n.signUp(this, e, r)._thenRunCallbacks(t, this) } }, { key: "logIn", value: function(e) { e = e || {};
                            var t = {};
                            e.hasOwnProperty("useMasterKey") && (t.useMasterKey = e.useMasterKey);
                            var r = f["default"].getUserController();
                            return r.logIn(this, t)._thenRunCallbacks(e, this) } }, { key: "save", value: function() {
                            for (var e = this, r = arguments.length, a = Array(r), s = 0; r > s; s++) a[s] = arguments[s];
                            return n(Object.getPrototypeOf(t.prototype), "save", this).apply(this, a).then(function() {
                                return e.isCurrent() ? f["default"].getUserController().updateUserOnDisk(e) : e }) } }, { key: "fetch", value: function() {
                            for (var e = this, r = arguments.length, a = Array(r), s = 0; r > s; s++) a[s] = arguments[s];
                            return n(Object.getPrototypeOf(t.prototype), "fetch", this).apply(this, a).then(function() {
                                return e.isCurrent() ? f["default"].getUserController().updateUserOnDisk(e) : e }) } }], [{ key: "readOnlyAttributes", value: function() {
                            return ["sessionToken"] } }, { key: "extend", value: function(e, r) {
                            if (e)
                                for (var n in e) "className" !== n && i(t.prototype, n, { value: e[n], enumerable: !1, writable: !0, configurable: !0 });
                            if (r)
                                for (var n in r) "className" !== n && i(t, n, { value: r[n], enumerable: !1, writable: !0, configurable: !0 });
                            return t } }, { key: "current", value: function() {
                            if (!E) return null;
                            var e = f["default"].getUserController();
                            return e.currentUser() } }, { key: "currentAsync", value: function() {
                            if (!E) return w["default"].as(null);
                            var e = f["default"].getUserController();
                            return e.currentUserAsync() } }, { key: "signUp", value: function(e, r, n, a) { n = n || {}, n.username = e, n.password = r;
                            var s = new t(n);
                            return s.signUp({}, a) } }, { key: "logIn", value: function(e, r, n) {
                            var a = new t;
                            return a._finishFetch({ username: e, password: r }), a.logIn(n) } }, { key: "become", value: function(e, t) {
                            if (!E) throw new Error("It is not memory-safe to become a user in a server environment");
                            t = t || {};
                            var r = { sessionToken: e };
                            t.hasOwnProperty("useMasterKey") && (r.useMasterKey = t.useMasterKey);
                            var n = f["default"].getUserController();
                            return n.become(r)._thenRunCallbacks(t) } }, { key: "logInWith", value: function(e, r) {
                            return t._logInWith(e, r) } }, { key: "logOut", value: function() {
                            if (!E) throw new Error("There is no current user user on a node.js server environment.");
                            var e = f["default"].getUserController();
                            return e.logOut() } }, { key: "requestPasswordReset", value: function(e, t) { t = t || {};
                            var r = {};
                            t.hasOwnProperty("useMasterKey") && (r.useMasterKey = t.useMasterKey);
                            var n = f["default"].getUserController();
                            return n.requestPasswordReset(e, r)._thenRunCallbacks(t) } }, { key: "allowCustomUserClass", value: function(e) { f["default"].set("PERFORM_USER_REWRITE", !e) } }, { key: "enableRevocableSession", value: function(e) {
                            if (e = e || {}, f["default"].set("FORCE_REVOCABLE_SESSION", !0), E) {
                                var r = t.current();
                                if (r) return r._upgradeToRevocableSession(e) }
                            return w["default"].as()._thenRunCallbacks(e) } }, { key: "enableUnsafeCurrentUser", value: function() { E = !0 } }, { key: "disableUnsafeCurrentUser", value: function() { E = !1 } }, { key: "_registerAuthenticationProvider", value: function(e) { I[e.getAuthType()] = e, t.currentAsync().then(function(t) { t && t._synchronizeAuthData(e.getAuthType()) }) } }, { key: "_logInWith", value: function(e, r) {
                            var n = new t;
                            return n._linkWith(e, r) } }, { key: "_clearCache", value: function() { j = null, S = !1 } }, { key: "_setCurrentUserCache", value: function(e) { j = e } }]), t }(_["default"]);
            r["default"] = T, _["default"].registerSubclass("_User", T);
            var N = { updateUserOnDisk: function(e) {
                    var t = k["default"].generatePath(A),
                        r = e.toJSON();
                    return r.className = "_User", k["default"].setItemAsync(t, JSON.stringify(r)).then(function() {
                        return e }) }, setCurrentUser: function(e) {
                    return j = e, e._cleanupAuthData(), e._synchronizeAllAuthData(), N.updateUserOnDisk(e) }, currentUser: function() {
                    if (j) return j;
                    if (S) return null;
                    if (k["default"].async()) throw new Error("Cannot call currentUser() when using a platform with an async storage system. Call currentUserAsync() instead.");
                    var e = k["default"].generatePath(A),
                        t = k["default"].getItem(e);
                    if (S = !0, !t) return j = null, null;
                    t = JSON.parse(t), t.className || (t.className = "_User"), t._id && (t.objectId !== t._id && (t.objectId = t._id), delete t._id), t._sessionToken && (t.sessionToken = t._sessionToken, delete t._sessionToken);
                    var r = _["default"].fromJSON(t);
                    return j = r, r._synchronizeAllAuthData(), r }, currentUserAsync: function() {
                    if (j) return w["default"].as(j);
                    if (S) return w["default"].as(null);
                    var e = k["default"].generatePath(A);
                    return k["default"].getItemAsync(e).then(function(e) {
                        if (S = !0, !e) return j = null, w["default"].as(null);
                        e = JSON.parse(e), e.className || (e.className = "_User"), e._id && (e.objectId !== e._id && (e.objectId = e._id), delete e._id), e._sessionToken && (e.sessionToken = e._sessionToken, delete e._sessionToken);
                        var t = _["default"].fromJSON(e);
                        return j = t, t._synchronizeAllAuthData(), w["default"].as(t) }) }, signUp: function(e, t, r) {
                    var n = t && t.username || e.get("username"),
                        a = t && t.password || e.get("password");
                    return n && n.length ? a && a.length ? e.save(t, r).then(function() {
                        return e._finishFetch({ password: void 0 }), E ? N.setCurrentUser(e) : e }) : w["default"].error(new m["default"](m["default"].OTHER_CAUSE, "Cannot sign up user with an empty password.")) : w["default"].error(new m["default"](m["default"].OTHER_CAUSE, "Cannot sign up user with an empty name.")) }, logIn: function(e, t) {
                    var r = f["default"].getRESTController(),
                        n = { username: e.get("username"), password: e.get("password") };
                    return r.request("GET", "login", n, t).then(function(t, r) {
                        return e._migrateId(t.objectId), e._setExisted(!0), y.setPendingOp(e.className, e._getId(), "username", void 0), y.setPendingOp(e.className, e._getId(), "password", void 0), t.password = void 0, e._finishFetch(t), E ? N.setCurrentUser(e) : w["default"].as(e) }) }, become: function(e) {
                    var t = new T,
                        r = f["default"].getRESTController();
                    return r.request("GET", "users/me", {}, e).then(function(e, r) {
                        return t._finishFetch(e), t._setExisted(!0), N.setCurrentUser(t) }) }, logOut: function() {
                    return N.currentUserAsync().then(function(e) {
                        var t = k["default"].generatePath(A),
                            r = k["default"].removeItemAsync(t),
                            n = f["default"].getRESTController();
                        if (null !== e) {
                            var a = e.getSessionToken();
                            a && (0, h["default"])(a) && (r = r.then(function() {
                                return n.request("POST", "logout", {}, { sessionToken: a }) })), e._logOutWithAll(), e._finishFetch({ sessionToken: void 0 }) }
                        return S = !0, j = null, r }) }, requestPasswordReset: function(e, t) {
                    var r = f["default"].getRESTController();
                    return r.request("POST", "requestPasswordReset", { email: e }, t) }, upgradeToRevocableSession: function(e, t) {
                    var r = e.getSessionToken();
                    if (!r) return w["default"].error(new m["default"](m["default"].SESSION_MISSING, "Cannot upgrade a user with no session token"));
                    t.sessionToken = r;
                    var n = f["default"].getRESTController();
                    return n.request("POST", "upgradeToRevocableSession", {}, t).then(function(t) {
                        var r = new C["default"];
                        return r._finishFetch(t), e._finishFetch({ sessionToken: r.getSessionToken() }), e.isCurrent() ? N.setCurrentUser(e) : w["default"].as(e) }) }, linkWith: function(e, t) {
                    return e.save({ authData: t }).then(function() {
                        return E ? N.setCurrentUser(e) : e }) } };
            f["default"].setUserController(N), t.exports = r["default"] }, { "./CoreManager": 3, "./ObjectState": 6, "./ParseError": 10, "./ParseObject": 14, "./ParsePromise": 16, "./ParseSession": 20, "./Storage": 24, "./isRevocableSession": 33, "babel-runtime/core-js/object/define-property": 38, "babel-runtime/helpers/class-call-check": 43, "babel-runtime/helpers/create-class": 44, "babel-runtime/helpers/get": 45, "babel-runtime/helpers/inherits": 46, "babel-runtime/helpers/interop-require-default": 47, "babel-runtime/helpers/interop-require-wildcard": 48 }],
        22: [function(e, t, r) { "use strict";

            function n(e, t) {
                if (t = t || {}, e.where && e.where instanceof u["default"] && (e.where = e.where.toJSON().where), e.push_time && "object" == typeof e.push_time && (e.push_time = e.push_time.toJSON()), e.expiration_time && "object" == typeof e.expiration_time && (e.expiration_time = e.expiration_time.toJSON()), e.expiration_time && e.expiration_interval) throw new Error("expiration_time and expiration_interval cannot both be set.");
                return o["default"].getPushController().send(e, { useMasterKey: t.useMasterKey })._thenRunCallbacks(t) }
            var a = e("babel-runtime/helpers/interop-require-default")["default"];
            Object.defineProperty(r, "__esModule", { value: !0 }), r.send = n;
            var s = e("./CoreManager"),
                o = a(s),
                i = e("./ParseQuery"),
                u = a(i);
            o["default"].setPushController({ send: function(e, t) {
                    var r = o["default"].getRESTController(),
                        n = r.request("POST", "push", e, { useMasterKey: !!t.useMasterKey });
                    return n._thenRunCallbacks(t) } }) }, { "./CoreManager": 3, "./ParseQuery": 17, "babel-runtime/helpers/interop-require-default": 47 }],
        23: [function(e, t, r) {
            (function(n) { "use strict";

                function a(e, t, r) {
                    var n = new f["default"],
                        a = new XDomainRequest;
                    return a.onload = function() {
                        var e;
                        try { e = JSON.parse(a.responseText) } catch (t) { n.reject(t) }
                        e && n.resolve(e) }, a.onerror = a.ontimeout = function() {
                        var e = { responseText: JSON.stringify({ code: l["default"].X_DOMAIN_REQUEST, error: "IE's XDomainRequest does not supply error info." }) };
                        n.reject(e) }, a.onprogress = function() {}, a.open(e, t), a.send(r), n }
                var s = e("babel-runtime/helpers/interop-require-default")["default"];
                Object.defineProperty(r, "__esModule", { value: !0 });
                var o = e("./CoreManager"),
                    i = s(o),
                    u = e("./ParseError"),
                    l = s(u),
                    c = e("./ParsePromise"),
                    f = s(c),
                    d = e("./Storage"),
                    h = (s(d), null); "undefined" != typeof XMLHttpRequest && (h = XMLHttpRequest);
                var p = !1; "undefined" == typeof XDomainRequest || "withCredentials" in new XMLHttpRequest || (p = !0);
                var y = { ajax: function(e, t, r, s) {
                        if (p) return a(e, t, r, s);
                        var o = new f["default"],
                            u = 0,
                            l = function c() {
                                if (null == h) throw new Error("Cannot make a request: No definition of XMLHttpRequest was found.");
                                var a = !1,
                                    l = new h;
                                l.onreadystatechange = function() {
                                    if (4 === l.readyState && !a)
                                        if (a = !0, l.status >= 200 && l.status < 300) {
                                            var e;
                                            try { e = JSON.parse(l.responseText) } catch (t) { o.reject(t.toString()) }
                                            e && o.resolve(e, l.status, l) } else if (l.status >= 500 || 0 === l.status)
                                        if (++u < i["default"].get("REQUEST_ATTEMPT_LIMIT")) {
                                            var r = Math.round(125 * Math.random() * Math.pow(2, u));
                                            setTimeout(c, r) } else 0 === l.status ? o.reject("Unable to connect to the Parse API") : o.reject(l);
                                    else o.reject(l) }, s = s || {}, s["Content-Type"] = "text/plain", i["default"].get("IS_NODE") && (s["User-Agent"] = "Parse/" + i["default"].get("VERSION") + " (NodeJS " + n.versions.node + ")"), l.open(e, t, !0);
                                for (var f in s) l.setRequestHeader(f, s[f]);
                                l.send(r) };
                        return l(), o }, request: function(e, t, r, n) { n = n || {};
                        var a = i["default"].get("SERVER_URL"); "/" !== a[a.length - 1] && (a += "/"), a += t;
                        var s = {};
                        if (r && "object" == typeof r)
                            for (var o in r) s[o] = r[o]; "POST" !== e && (s._method = e, e = "POST"), s._ApplicationId = i["default"].get("APPLICATION_ID"), s._JavaScriptKey = i["default"].get("JAVASCRIPT_KEY"), s._ClientVersion = i["default"].get("VERSION");
                        var u = n.useMasterKey;
                        if ("undefined" == typeof u && (u = i["default"].get("USE_MASTER_KEY")), u) {
                            if (!i["default"].get("MASTER_KEY")) throw new Error("Cannot use the Master Key, it has not been provided.");
                            delete s._JavaScriptKey, s._MasterKey = i["default"].get("MASTER_KEY") }
                        i["default"].get("FORCE_REVOCABLE_SESSION") && (s._RevocableSession = "1");
                        var c = i["default"].getInstallationController();
                        return c.currentInstallationId().then(function(e) { s._InstallationId = e;
                            var t = i["default"].getUserController();
                            return n && "string" == typeof n.sessionToken ? f["default"].as(n.sessionToken) : t ? t.currentUserAsync().then(function(e) {
                                return e ? f["default"].as(e.getSessionToken()) : f["default"].as(null) }) : f["default"].as(null) }).then(function(t) { t && (s._SessionToken = t);
                            var r = JSON.stringify(s);
                            return y.ajax(e, a, r) }).then(null, function(e) {
                            var t;
                            if (e && e.responseText) try {
                                var r = JSON.parse(e.responseText);
                                t = new l["default"](r.code, r.error) } catch (n) { t = new l["default"](l["default"].INVALID_JSON, "Received an error with invalid JSON from Parse: " + e.responseText) } else t = new l["default"](l["default"].CONNECTION_FAILED, "XMLHttpRequest failed: " + JSON.stringify(e));
                            return f["default"].error(t) }) }, _setXHR: function(e) { h = e } };
                t.exports = y }).call(this, e("_process")) }, { "./CoreManager": 3, "./ParseError": 10, "./ParsePromise": 16, "./Storage": 24, _process: 75, "babel-runtime/helpers/interop-require-default": 47 }],
        24: [function(e, t, r) { "use strict";
            var n = e("babel-runtime/helpers/interop-require-default")["default"],
                a = e("./CoreManager"),
                s = n(a),
                o = e("./ParsePromise"),
                i = n(o);
            t.exports = { async: function() {
                    var e = s["default"].getStorageController();
                    return !!e.async }, getItem: function(e) {
                    var t = s["default"].getStorageController();
                    if (1 === t.async) throw new Error("Synchronous storage is not supported by the current storage controller");
                    return t.getItem(e) }, getItemAsync: function(e) {
                    var t = s["default"].getStorageController();
                    return 1 === t.async ? t.getItemAsync(e) : i["default"].as(t.getItem(e)) }, setItem: function(e, t) {
                    var r = s["default"].getStorageController();
                    if (1 === r.async) throw new Error("Synchronous storage is not supported by the current storage controller");
                    return r.setItem(e, t) }, setItemAsync: function(e, t) {
                    var r = s["default"].getStorageController();
                    return 1 === r.async ? r.setItemAsync(e, t) : i["default"].as(r.setItem(e, t)) }, removeItem: function(e) {
                    var t = s["default"].getStorageController();
                    if (1 === t.async) throw new Error("Synchronous storage is not supported by the current storage controller");
                    return t.removeItem(e) }, removeItemAsync: function(e) {
                    var t = s["default"].getStorageController();
                    return 1 === t.async ? t.removeItemAsync(e) : i["default"].as(t.removeItem(e)) }, generatePath: function(e) {
                    if (!s["default"].get("APPLICATION_ID")) throw new Error("You need to call Parse.initialize before using Parse.");
                    if ("string" != typeof e) throw new Error("Tried to get a Storage path that was not a String.");
                    return "/" === e[0] && (e = e.substr(1)), "Parse/" + s["default"].get("APPLICATION_ID") + "/" + e }, _clear: function() {
                    var e = s["default"].getStorageController();
                    e.hasOwnProperty("clear") && e.clear() } }, s["default"].setStorageController(e("./StorageController.browser")) }, { "./CoreManager": 3, "./ParsePromise": 16, "./StorageController.browser": 25, "babel-runtime/helpers/interop-require-default": 47 }],
        25: [function(e, t, r) { "use strict";
            var n = e("babel-runtime/helpers/interop-require-default")["default"],
                a = e("./ParsePromise");
            n(a);
            t.exports = { async: 0, getItem: function(e) {
                    return localStorage.getItem(e) }, setItem: function(e, t) {
                    try { localStorage.setItem(e, t) } catch (r) {} }, removeItem: function(e) { localStorage.removeItem(e) }, clear: function() { localStorage.clear() } } }, { "./ParsePromise": 16, "babel-runtime/helpers/interop-require-default": 47 }],
        26: [function(e, t, r) {
            "use strict";
            var n = e("babel-runtime/helpers/create-class")["default"],
                a = e("babel-runtime/helpers/class-call-check")["default"],
                s = e("babel-runtime/helpers/interop-require-default")["default"],
                o = e("./ParsePromise"),
                i = s(o);
            t.exports = function() {
                function e() { a(this, e), this.queue = [] }
                return n(e, [{ key: "enqueue", value: function(e) {
                        var t = this,
                            r = new i["default"];
                        return this.queue.push({ task: e, _completion: r }), 1 === this.queue.length && e().then(function() { t._dequeue(), r.resolve() }, function(e) { t._dequeue(), r.reject(e) }), r } }, {
                    key: "_dequeue",
                    value: function() {
                        var e = this;
                        if (this.queue.shift(), this.queue.length) {
                            var t = this.queue[0];
                            t.task().then(function() { e._dequeue(), t._completion.resolve() }, function(r) { e._dequeue(), t._completion.reject(r) })
                        }
                    }
                }]), e
            }()
        }, { "./ParsePromise": 16, "babel-runtime/helpers/class-call-check": 43, "babel-runtime/helpers/create-class": 44, "babel-runtime/helpers/interop-require-default": 47 }],
        27: [function(e, t, r) { "use strict";

            function n(e, t) {
                if (e.indexOf(t) > -1) return !0;
                for (var r = 0; r < e.length; r++)
                    if (e[r] instanceof o["default"] && e[r].className === t.className && e[r]._getId() === t._getId()) return !0;
                return !1 }
            var a = e("babel-runtime/helpers/interop-require-default")["default"];
            Object.defineProperty(r, "__esModule", { value: !0 }), r["default"] = n;
            var s = e("./ParseObject"),
                o = a(s);
            t.exports = r["default"] }, { "./ParseObject": 14, "babel-runtime/helpers/interop-require-default": 47 }],
        28: [function(e, t, r) { "use strict";

            function n(e) {
                if (!(e instanceof l["default"])) return !0;
                var t = e.attributes;
                for (var r in t) {
                    var n = t[r];
                    if (!a(n)) return !1 }
                return !0 }

            function a(e) {
                if ("object" != typeof e) return !0;
                if (e instanceof f["default"]) return !0;
                if (e instanceof l["default"]) return !!e.id;
                if (e instanceof i["default"]) return e.url() ? !0 : !1;
                if (Array.isArray(e)) {
                    for (var t = 0; t < e.length; t++)
                        if (!a(e[t])) return !1;
                    return !0 }
                for (var r in e)
                    if (!a(e[r])) return !1;
                return !0 }
            var s = e("babel-runtime/helpers/interop-require-default")["default"];
            Object.defineProperty(r, "__esModule", { value: !0 }), r["default"] = n;
            var o = e("./ParseFile"),
                i = s(o),
                u = e("./ParseObject"),
                l = s(u),
                c = e("./ParseRelation"),
                f = s(c);
            t.exports = r["default"] }, { "./ParseFile": 11, "./ParseObject": 14, "./ParseRelation": 18, "babel-runtime/helpers/interop-require-default": 47 }],
        29: [function(e, t, r) { "use strict";

            function n(e) {
                if (null === e || "object" != typeof e) return e;
                if (Array.isArray(e)) {
                    var t = [];
                    return e.forEach(function(e, r) { t[r] = n(e) }), t }
                if ("string" == typeof e.__op) return (0, d.opFromJSON)(e);
                if ("Pointer" === e.__type && e.className) return f["default"].fromJSON(e);
                if ("Object" === e.__type && e.className) return f["default"].fromJSON(e);
                if ("Relation" === e.__type) {
                    var r = new p["default"](null, null);
                    return r.targetClassName = e.className, r }
                if ("Date" === e.__type) return new Date(e.iso);
                if ("File" === e.__type) return i["default"].fromJSON(e);
                if ("GeoPoint" === e.__type) return new l["default"]({ latitude: e.latitude, longitude: e.longitude });
                var a = {};
                for (var s in e) a[s] = n(e[s]);
                return a }
            var a = e("babel-runtime/helpers/interop-require-default")["default"];
            Object.defineProperty(r, "__esModule", { value: !0 }), r["default"] = n;
            var s = e("./ParseACL"),
                o = (a(s), e("./ParseFile")),
                i = a(o),
                u = e("./ParseGeoPoint"),
                l = a(u),
                c = e("./ParseObject"),
                f = a(c),
                d = e("./ParseOp"),
                h = e("./ParseRelation"),
                p = a(h);
            t.exports = r["default"] }, { "./ParseACL": 8, "./ParseFile": 11, "./ParseGeoPoint": 12, "./ParseObject": 14, "./ParseOp": 15, "./ParseRelation": 18, "babel-runtime/helpers/interop-require-default": 47 }],
        30: [function(e, t, r) { "use strict";

            function n(e, t, r, s) {
                if (e instanceof h["default"]) {
                    if (t) throw new Error("Parse Objects not allowed here");
                    var o = e.id ? e.className + ":" + e.id : e;
                    return r || !s || s.indexOf(o) > -1 || e.dirty() || a(e._getServerData()).length < 1 ? e.toPointer() : (s = s.concat(o), e._toFullJSON(s)) }
                if (e instanceof p.Op || e instanceof i["default"] || e instanceof f["default"] || e instanceof v["default"]) return e.toJSON();
                if (e instanceof l["default"]) {
                    if (!e.url()) throw new Error("Tried to encode an unsaved file.");
                    return e.toJSON() }
                if ("[object Date]" === m.call(e)) {
                    if (isNaN(e)) throw new Error("Tried to encode an invalid date.");
                    return { __type: "Date", iso: e.toJSON() } }
                if ("[object RegExp]" === m.call(e) && "string" == typeof e.source) return e.source;
                if (Array.isArray(e)) return e.map(function(e) {
                    return n(e, t, r, s) });
                if (e && "object" == typeof e) {
                    var u = {};
                    for (var c in e) u[c] = n(e[c], t, r, s);
                    return u }
                return e }
            var a = e("babel-runtime/core-js/object/keys")["default"],
                s = e("babel-runtime/helpers/interop-require-default")["default"];
            Object.defineProperty(r, "__esModule", { value: !0 });
            var o = e("./ParseACL"),
                i = s(o),
                u = e("./ParseFile"),
                l = s(u),
                c = e("./ParseGeoPoint"),
                f = s(c),
                d = e("./ParseObject"),
                h = s(d),
                p = e("./ParseOp"),
                y = e("./ParseRelation"),
                v = s(y),
                m = Object.prototype.toString;
            r["default"] = function(e, t, r, a) {
                return n(e, !!t, !!r, a || []) }, t.exports = r["default"] }, { "./ParseACL": 8, "./ParseFile": 11, "./ParseGeoPoint": 12, "./ParseObject": 14, "./ParseOp": 15, "./ParseRelation": 18, "babel-runtime/core-js/object/keys": 41, "babel-runtime/helpers/interop-require-default": 47 }],
        31: [function(e, t, r) { "use strict";

            function n(e, t) {
                if (typeof e != typeof t) return !1;
                if (!e || "object" != typeof e) return e === t;
                if (Array.isArray(e) || Array.isArray(t)) {
                    if (!Array.isArray(e) || !Array.isArray(t)) return !1;
                    if (e.length !== t.length) return !1;
                    for (var r = e.length; r--;)
                        if (!n(e[r], t[r])) return !1;
                    return !0 }
                if (e instanceof i["default"] || e instanceof l["default"] || e instanceof f["default"] || e instanceof h["default"]) return e.equals(t);
                if (a(e).length !== a(t).length) return !1;
                for (var s in e)
                    if (!n(e[s], t[s])) return !1;
                return !0 }
            var a = e("babel-runtime/core-js/object/keys")["default"],
                s = e("babel-runtime/helpers/interop-require-default")["default"];
            Object.defineProperty(r, "__esModule", { value: !0 }), r["default"] = n;
            var o = e("./ParseACL"),
                i = s(o),
                u = e("./ParseFile"),
                l = s(u),
                c = e("./ParseGeoPoint"),
                f = s(c),
                d = e("./ParseObject"),
                h = s(d);
            t.exports = r["default"] }, { "./ParseACL": 8, "./ParseFile": 11, "./ParseGeoPoint": 12, "./ParseObject": 14, "babel-runtime/core-js/object/keys": 41, "babel-runtime/helpers/interop-require-default": 47 }],
        32: [function(e, t, r) { "use strict";

            function n(e) {
                return e.replace(/[&<>\/'"]/g, function(e) {
                    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "/": "&#x2F;", "'": "&#x27;", '"': "&quot;" }[e] }) }
            Object.defineProperty(r, "__esModule", { value: !0 }), r["default"] = n, t.exports = r["default"] }, {}],
        33: [function(e, t, r) { "use strict";

            function n(e) {
                return e.indexOf("r:") > -1 }
            Object.defineProperty(r, "__esModule", { value: !0 }), r["default"] = n, t.exports = r["default"] }, {}],
        34: [function(e, t, r) { "use strict";

            function n(e) {
                var t = new RegExp("^([0-9]{1,4})-([0-9]{1,2})-([0-9]{1,2})T([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})(.([0-9]+))?Z$"),
                    r = t.exec(e);
                if (!r) return null;
                var n = r[1] || 0,
                    a = (r[2] || 1) - 1,
                    s = r[3] || 0,
                    o = r[4] || 0,
                    i = r[5] || 0,
                    u = r[6] || 0,
                    l = r[8] || 0;
                return new Date(Date.UTC(n, a, s, o, i, u, l)) }
            Object.defineProperty(r, "__esModule", { value: !0 }), r["default"] = n, t.exports = r["default"] }, {}],
        35: [function(e, t, r) { "use strict";

            function n(e) {
                var t = [];
                return e.forEach(function(e) { e instanceof u["default"] ? (0, o["default"])(t, e) || t.push(e) : t.indexOf(e) < 0 && t.push(e) }), t }
            var a = e("babel-runtime/helpers/interop-require-default")["default"];
            Object.defineProperty(r, "__esModule", { value: !0 }), r["default"] = n;
            var s = e("./arrayContainsObject"),
                o = a(s),
                i = e("./ParseObject"),
                u = a(i);
            t.exports = r["default"] }, { "./ParseObject": 14, "./arrayContainsObject": 27, "babel-runtime/helpers/interop-require-default": 47 }],
        36: [function(e, t, r) { "use strict";

            function n(e, t) {
                var r = { objects: {}, files: [] },
                    n = e.className + ":" + e._getId();
                r.objects[n] = e.dirty() ? e : !0;
                var s = e.attributes;
                for (var o in s) "object" == typeof s[o] && a(s[o], r, !1, !!t);
                var i = [];
                for (var u in r.objects) u !== n && r.objects[u] !== !0 && i.push(r.objects[u]);
                return i.concat(r.files) }

            function a(e, t, r, n) {
                if (e instanceof l["default"]) {
                    if (!e.id && r) throw new Error("Cannot create a pointer to an unsaved Object.");
                    var s = e.className + ":" + e._getId();
                    if (!t.objects[s]) { t.objects[s] = e.dirty() ? e : !0;
                        var o = e.attributes;
                        for (var u in o) "object" == typeof o[u] && a(o[u], t, !n, n) } } else {
                    if (e instanceof i["default"]) return void(!e.url() && t.files.indexOf(e) < 0 && t.files.push(e));
                    if (!(e instanceof f["default"])) { Array.isArray(e) && e.forEach(function(e) { a(e, t, r, n) });
                        for (var c in e) "object" == typeof e[c] && a(e[c], t, r, n) } } }
            var s = e("babel-runtime/helpers/interop-require-default")["default"];
            Object.defineProperty(r, "__esModule", { value: !0 }), r["default"] = n;
            var o = e("./ParseFile"),
                i = s(o),
                u = e("./ParseObject"),
                l = s(u),
                c = e("./ParseRelation"),
                f = s(c);
            t.exports = r["default"] }, { "./ParseFile": 11, "./ParseObject": 14, "./ParseRelation": 18, "babel-runtime/helpers/interop-require-default": 47 }],
        37: [function(e, t, r) { t.exports = { "default": e("core-js/library/fn/object/create"), __esModule: !0 } }, { "core-js/library/fn/object/create": 49 }],
        38: [function(e, t, r) { t.exports = { "default": e("core-js/library/fn/object/define-property"), __esModule: !0 } }, { "core-js/library/fn/object/define-property": 50 }],
        39: [function(e, t, r) { t.exports = { "default": e("core-js/library/fn/object/freeze"), __esModule: !0 } }, { "core-js/library/fn/object/freeze": 51 }],
        40: [function(e, t, r) { t.exports = { "default": e("core-js/library/fn/object/get-own-property-descriptor"), __esModule: !0 } }, { "core-js/library/fn/object/get-own-property-descriptor": 52 }],
        41: [function(e, t, r) { t.exports = { "default": e("core-js/library/fn/object/keys"), __esModule: !0 } }, { "core-js/library/fn/object/keys": 53 }],
        42: [function(e, t, r) { t.exports = { "default": e("core-js/library/fn/object/set-prototype-of"), __esModule: !0 } }, { "core-js/library/fn/object/set-prototype-of": 54 }],
        43: [function(e, t, r) { "use strict";
            r["default"] = function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }, r.__esModule = !0 }, {}],
        44: [function(e, t, r) { "use strict";
            var n = e("babel-runtime/core-js/object/define-property")["default"];
            r["default"] = function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var a = t[r];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), n(e, a.key, a) } }
                return function(t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t } }(), r.__esModule = !0 }, { "babel-runtime/core-js/object/define-property": 38 }],
        45: [function(e, t, r) { "use strict";
            var n = e("babel-runtime/core-js/object/get-own-property-descriptor")["default"];
            r["default"] = function(e, t, r) {
                for (var a = !0; a;) {
                    var s = e,
                        o = t,
                        i = r;
                    a = !1, null === s && (s = Function.prototype);
                    var u = n(s, o);
                    if (void 0 !== u) {
                        if ("value" in u) return u.value;
                        var l = u.get;
                        if (void 0 === l) return;
                        return l.call(i) }
                    var c = Object.getPrototypeOf(s);
                    if (null === c) return;
                    e = c, t = o, r = i, a = !0, u = c = void 0 } }, r.__esModule = !0 }, { "babel-runtime/core-js/object/get-own-property-descriptor": 40 }],
        46: [function(e, t, r) { "use strict";
            var n = e("babel-runtime/core-js/object/create")["default"],
                a = e("babel-runtime/core-js/object/set-prototype-of")["default"];
            r["default"] = function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = n(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (a ? a(e, t) : e.__proto__ = t) }, r.__esModule = !0 }, { "babel-runtime/core-js/object/create": 37, "babel-runtime/core-js/object/set-prototype-of": 42 }],
        47: [function(e, t, r) { "use strict";
            r["default"] = function(e) {
                return e && e.__esModule ? e : { "default": e } }, r.__esModule = !0 }, {}],
        48: [function(e, t, r) { "use strict";
            r["default"] = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t["default"] = e, t }, r.__esModule = !0 }, {}],
        49: [function(e, t, r) {
            var n = e("../../modules/$");
            t.exports = function(e, t) {
                return n.create(e, t) } }, { "../../modules/$": 66 }],
        50: [function(e, t, r) {
            var n = e("../../modules/$");
            t.exports = function(e, t, r) {
                return n.setDesc(e, t, r) } }, { "../../modules/$": 66 }],
        51: [function(e, t, r) { e("../../modules/es6.object.freeze"), t.exports = e("../../modules/$.core").Object.freeze }, { "../../modules/$.core": 58, "../../modules/es6.object.freeze": 71 }],
        52: [function(e, t, r) {
            var n = e("../../modules/$");
            e("../../modules/es6.object.get-own-property-descriptor"), t.exports = function(e, t) {
                return n.getDesc(e, t) } }, { "../../modules/$": 66, "../../modules/es6.object.get-own-property-descriptor": 72 }],
        53: [function(e, t, r) { e("../../modules/es6.object.keys"), t.exports = e("../../modules/$.core").Object.keys }, { "../../modules/$.core": 58, "../../modules/es6.object.keys": 73 }],
        54: [function(e, t, r) { e("../../modules/es6.object.set-prototype-of"), t.exports = e("../../modules/$.core").Object.setPrototypeOf }, { "../../modules/$.core": 58, "../../modules/es6.object.set-prototype-of": 74 }],
        55: [function(e, t, r) { t.exports = function(e) {
                if ("function" != typeof e) throw TypeError(e + " is not a function!");
                return e } }, {}],
        56: [function(e, t, r) {
            var n = e("./$.is-object");
            t.exports = function(e) {
                if (!n(e)) throw TypeError(e + " is not an object!");
                return e } }, { "./$.is-object": 65 }],
        57: [function(e, t, r) {
            var n = {}.toString;
            t.exports = function(e) {
                return n.call(e).slice(8, -1) } }, {}],
        58: [function(e, t, r) {
            var n = t.exports = { version: "1.2.6" }; "number" == typeof __e && (__e = n) }, {}],
        59: [function(e, t, r) {
            var n = e("./$.a-function");
            t.exports = function(e, t, r) {
                if (n(e), void 0 === t) return e;
                switch (r) {
                    case 1:
                        return function(r) {
                            return e.call(t, r) };
                    case 2:
                        return function(r, n) {
                            return e.call(t, r, n) };
                    case 3:
                        return function(r, n, a) {
                            return e.call(t, r, n, a) } }
                return function() {
                    return e.apply(t, arguments) } } }, { "./$.a-function": 55 }],
        60: [function(e, t, r) { t.exports = function(e) {
                if (void 0 == e) throw TypeError("Can't call method on  " + e);
                return e } }, {}],
        61: [function(e, t, r) {
            var n = e("./$.global"),
                a = e("./$.core"),
                s = e("./$.ctx"),
                o = "prototype",
                i = function(e, t, r) {
                    var u, l, c, f = e & i.F,
                        d = e & i.G,
                        h = e & i.S,
                        p = e & i.P,
                        y = e & i.B,
                        v = e & i.W,
                        m = d ? a : a[t] || (a[t] = {}),
                        b = d ? n : h ? n[t] : (n[t] || {})[o];
                    d && (r = t);
                    for (u in r) l = !f && b && u in b, l && u in m || (c = l ? b[u] : r[u], m[u] = d && "function" != typeof b[u] ? r[u] : y && l ? s(c, n) : v && b[u] == c ? function(e) {
                        var t = function(t) {
                            return this instanceof e ? new e(t) : e(t) };
                        return t[o] = e[o], t }(c) : p && "function" == typeof c ? s(Function.call, c) : c, p && ((m[o] || (m[o] = {}))[u] = c)) };
            i.F = 1, i.G = 2, i.S = 4, i.P = 8, i.B = 16, i.W = 32, t.exports = i }, { "./$.core": 58, "./$.ctx": 59, "./$.global": 63 }],
        62: [function(e, t, r) { t.exports = function(e) {
                try {
                    return !!e() } catch (t) {
                    return !0 } } }, {}],
        63: [function(e, t, r) {
            var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(); "number" == typeof __g && (__g = n) }, {}],
        64: [function(e, t, r) {
            var n = e("./$.cof");
            t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
                return "String" == n(e) ? e.split("") : Object(e) } }, { "./$.cof": 57 }],
        65: [function(e, t, r) { t.exports = function(e) {
                return "object" == typeof e ? null !== e : "function" == typeof e } }, {}],
        66: [function(e, t, r) {
            var n = Object;
            t.exports = { create: n.create, getProto: n.getPrototypeOf, isEnum: {}.propertyIsEnumerable, getDesc: n.getOwnPropertyDescriptor, setDesc: n.defineProperty, setDescs: n.defineProperties, getKeys: n.keys, getNames: n.getOwnPropertyNames, getSymbols: n.getOwnPropertySymbols, each: [].forEach } }, {}],
        67: [function(e, t, r) {
            var n = e("./$.export"),
                a = e("./$.core"),
                s = e("./$.fails");
            t.exports = function(e, t) {
                var r = (a.Object || {})[e] || Object[e],
                    o = {};
                o[e] = t(r), n(n.S + n.F * s(function() { r(1) }), "Object", o) } }, { "./$.core": 58, "./$.export": 61, "./$.fails": 62 }],
        68: [function(e, t, r) {
            var n = e("./$").getDesc,
                a = e("./$.is-object"),
                s = e("./$.an-object"),
                o = function(e, t) {
                    if (s(e), !a(t) && null !== t) throw TypeError(t + ": can't set as prototype!") };
            t.exports = { set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, r, a) {
                    try { a = e("./$.ctx")(Function.call, n(Object.prototype, "__proto__").set, 2), a(t, []), r = !(t instanceof Array) } catch (s) { r = !0 }
                    return function(e, t) {
                        return o(e, t), r ? e.__proto__ = t : a(e, t), e } }({}, !1) : void 0), check: o } }, { "./$": 66, "./$.an-object": 56, "./$.ctx": 59, "./$.is-object": 65 }],
        69: [function(e, t, r) {
            var n = e("./$.iobject"),
                a = e("./$.defined");
            t.exports = function(e) {
                return n(a(e)) } }, { "./$.defined": 60, "./$.iobject": 64 }],
        70: [function(e, t, r) {
            var n = e("./$.defined");
            t.exports = function(e) {
                return Object(n(e)) } }, { "./$.defined": 60 }],
        71: [function(e, t, r) {
            var n = e("./$.is-object");
            e("./$.object-sap")("freeze", function(e) {
                return function(t) {
                    return e && n(t) ? e(t) : t } }) }, { "./$.is-object": 65, "./$.object-sap": 67 }],
        72: [function(e, t, r) {
            var n = e("./$.to-iobject");
            e("./$.object-sap")("getOwnPropertyDescriptor", function(e) {
                return function(t, r) {
                    return e(n(t), r) } }) }, { "./$.object-sap": 67, "./$.to-iobject": 69 }],
        73: [function(e, t, r) {
            var n = e("./$.to-object");
            e("./$.object-sap")("keys", function(e) {
                return function(t) {
                    return e(n(t)) } }) }, { "./$.object-sap": 67, "./$.to-object": 70 }],
        74: [function(e, t, r) {
            var n = e("./$.export");
            n(n.S, "Object", { setPrototypeOf: e("./$.set-proto").set }) }, { "./$.export": 61, "./$.set-proto": 68 }],
        75: [function(e, t, r) {}, {}]
    }, {}, [7])(7)
});
