!function(t) {
    var e = {};
    function i(n) {
        if (e[n])
            return e[n].exports;
        var o = e[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(o.exports, o, o.exports, i),
        o.l = !0,
        o.exports
    }
    i.m = t,
    i.c = e,
    i.d = function(t, e, n) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }
    ,
    i.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    i.t = function(t, e) {
        if (1 & e && (t = i(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var n = Object.create(null);
        if (i.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var o in t)
                i.d(n, o, function(e) {
                    return t[e]
                }
                .bind(null, o));
        return n
    }
    ,
    i.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return i.d(e, "a", e),
        e
    }
    ,
    i.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    i.p = "",
    i(i.s = 15)
}([function(t, e, i) {
    "use strict";
    i.d(e, "c", (function() {
        return n
    }
    )),
    i.d(e, "b", (function() {
        return o
    }
    )),
    i.d(e, "a", (function() {
        return s
    }
    )),
    i.d(e, "d", (function() {
        return r
    }
    ));
    const n = "pbjs"
      , o = "lngtd"
      , s = "lngtd_debug"
      , r = "287"
}
, function(t, e, i) {
    "use strict";
    i.d(e, "a", (function() {
        return d
    }
    )),
    i.d(e, "g", (function() {
        return c
    }
    )),
    i.d(e, "h", (function() {
        return l
    }
    )),
    i.d(e, "f", (function() {
        return u
    }
    )),
    i.d(e, "e", (function() {
        return h
    }
    )),
    i.d(e, "d", (function() {
        return g
    }
    )),
    i.d(e, "b", (function() {
        return p
    }
    )),
    i.d(e, "c", (function() {
        return f
    }
    ));
    var n = i(3)
      , o = i(14)
      , s = i.n(o)
      , r = i(2)
      , a = i(0);
    const d = new function() {
        let t, e, i = !1;
        this.initialize = function(i) {
            t = i,
            e = i
        }
        ,
        this.updateSettings = function(t) {
            e = t
        }
        ,
        this.setConfig = function(t, i) {
            if ("string" != typeof t)
                throw "config: prop is not a string";
            if (t) {
                let n = t.split(".")
                  , o = n.length
                  , s = e;
                for (let t = 0; t < o - 1; t++)
                    if (s = s[n[t]],
                    void 0 === s)
                        return;
                if (void 0 === s[n[o - 1]])
                    return;
                return s[n[o - 1]] = i,
                i
            }
        }
        ,
        this.getConfig = function(t) {
            if (t) {
                if ("string" != typeof t)
                    throw "config: prop is not a string";
                return (t = t.replace(/\[["'`](.*)["'`]\]/g, ".$1")).split(".").reduce((function(t, e) {
                    return t ? t[e] : void 0
                }
                ), e || window)
            }
            return e
        }
        ,
        this.enableDebug = function() {
            Object(n.q)("lngtd_debug", "1"),
            i = !0
        }
        ,
        this.disableDebug = function() {
            document.cookie = "lngtd_debug=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",
            i = !1
        }
        ,
        this.getDebug = function() {
            return i
        }
        ,
        this.isBidderPresent = function(t) {
            let e = !1;
            return this.getConfig("partners").forEach((function(i) {
                i.shortName === t && (e = !0)
            }
            )),
            e
        }
        ,
        this.getCleanedAdUnits = function() {
            let t = this.getConfig("adUnits");
            return window[a.b].accountFunctions.cleanUnitConfigs && "function" == typeof window[a.b].accountFunctions.cleanUnitConfigs && (t = window[a.b].accountFunctions.cleanUnitConfigs(t)),
            t
        }
        ,
        this.getUnitConfigFromId = function(t) {
            let e;
            return this.getCleanedAdUnits().forEach((function(i) {
                i.elementId === t && (e = i)
            }
            )),
            e
        }
    }
    ;
    const c = new function() {
        this.lastUserInteraction = null,
        this.currentScrollDirection = "down",
        this.lastScrollTop = 0,
        this.pvLogged = !1,
        this.isHuman = !1,
        this.pvId = null,
        this.sessionId = null;
        let t = {};
        this.country = "",
        this.regionState = "",
        this.continent = "",
        this.ip = null,
        this.refreshCount = 0,
        this.currentWindowWidth = 0,
        this.logPageViewManual = !1,
        this.runPostInitAutomatically = !0,
        this.queuePostInit = !1,
        this.excludeBidders = [],
        this.floors = {},
        this.cookieDeprecationState = null,
        this.zzMap = {},
        this.refreshOnResize = !0,
        this.flooringTestGroup = 0,
        this.initialize = function() {
            this.defineEnvironment(),
            this.newPageView(),
            this.defineTestGroups(),
            document.addEventListener("userInteraction", this.userInteractionHandler)
        }
        ,
        this.userInteractionHandler = function() {
            c.lastUserInteraction = Date.now()
        }
        ,
        this.newPageView = function() {
            this.pvLogged = !1,
            l.incrementSessionDepth(),
            this.refreshCount = 0,
            this.pvId = Object(n.o)(),
            this.lastUserInteraction = Date.now(),
            this.logPageViewManual || Object(r.f)()
        }
        ,
        this.defineEnvironment = function() {
            try {
                let e = (new s.a).getResult().withFeatureCheck();
                t.os = e.os.name || "unknown",
                t.browser = e.browser.name || "unknown",
                t.device = e.device.model || "unknown",
                t.device_type = e.device.type || "desktop",
                t.browser_version = e.browser.version || "unknown",
                t.combined = t.device + "|" + t.browser + "|" + t.os
            } catch (t) {}
            this.currentWindowWidth = window.innerWidth;
            try {
                navigator.cookieDeprecationLabel.getValue().then(t => {
                    this.cookieDeprecationState = t
                }
                )
            } catch (t) {}
        }
        ,
        this.defineTestGroups = function() {
            let t = Math.random();
            t >= .88 && (this.flooringTestGroup = t < .91 ? 1 : t < .94 ? 2 : t < .97 ? 3 : 4)
        }
        ,
        this.getDomain = function() {
            return window.location.hostname
        }
        ,
        this.getDeviceType = function() {
            return t.device_type
        }
        ,
        this.getBrowser = function() {
            return t.browser
        }
        ,
        this.getOS = function() {
            return t.os
        }
        ,
        this.getOrientation = function() {
            return window.innerWidth > window.innerHeight ? "Landscape" : "Portrait"
        }
        ,
        this.isMobile = function() {
            let e;
            try {
                let i = document.documentElement.clientWidth || document.body.clientWidth;
                e = "unknown" !== t.device_type ? "mobile" === t.device_type : i < 668,
                ["unknown", "tablet"].indexOf(c.getDeviceType()) > -1 && "Portrait" === this.getOrientation() && window.innerWidth < 728 && (e = !0)
            } catch (t) {
                e = !1
            }
            return e
        }
        ,
        this.isTablet = function() {
            return !!Object(n.e)("forcetablet") || ["unknown", "tablet"].indexOf(c.getDeviceType()) > -1 && "Portrait" === this.getOrientation() && window.innerWidth >= 728
        }
        ,
        this.isDesktop = function() {
            return !this.isMobile() && !this.isTablet()
        }
        ,
        this.getZZBidVal = function(t, e) {
            try {
                let t = this.zzMap
                  , i = e.slice(-5);
                if (t.hasOwnProperty(i))
                    return parseFloat(t[i])
            } catch (t) {}
            return t
        }
        ,
        this.hasZZMap = function() {
            return !!this.zzMap && Object.keys(this.zzMap).length > 0
        }
    }
    ;
    const l = new function() {
        this.sessionId = null,
        this.sessionDepth = 0,
        this.initialize = function() {
            this.getSetSessionId()
        }
        ,
        this.incrementSessionDepth = function() {
            let t = "0";
            if (n.i) {
                t = window.sessionStorage.getItem("lngtd-sdp"),
                "" !== t && null != t || (window.sessionStorage.setItem("lngtd-sdp", "1"),
                t = "0");
                let e = parseInt(t) + 1;
                window.sessionStorage.setItem("lngtd-sdp", e.toString())
            } else {
                let t = Object(n.m)("lngtd-sdp");
                "" !== t && null != t || (Object(n.q)("lngtd-sdp", "1"),
                t = "0");
                let e = parseInt(t) + 1;
                Object(n.q)("lngtd-sdp", e.toString())
            }
            this.sessionDepth = parseInt(t)
        }
        ,
        this.getSetSessionId = function() {
            let t;
            n.i ? (t = window.sessionStorage.getItem("lngtd-session"),
            "" !== t && null != t || (t = Object(n.o)(),
            window.sessionStorage.setItem("lngtd-session", t))) : (t = Object(n.m)("lngtd-session"),
            "" !== t && null != t || (t = Object(n.o)(),
            Object(n.q)("lngtd-session", t))),
            this.sessionId = t
        }
    }
    ;
    function u(t) {
        let e;
        return d.getConfig("partners").forEach((function(i) {
            i.shortName === t && (e = i)
        }
        )),
        e
    }
    function h() {
        return c.isMobile() ? d.getConfig("account.mobileTimeout") : d.getConfig("account.desktopTimeout")
    }
    function g() {
        let t = {};
        return d.getConfig("partners").forEach((function(e) {
            e.gamId && (t[e.gamId] = e.shortName)
        }
        )),
        t
    }
    function p(t) {
        let e = d.getConfig("account.pricePoints");
        if (0 === t)
            return 0;
        {
            let i = parseFloat(e[0])
              , n = Math.abs(t - i);
            return e.forEach((function(e) {
                e = parseFloat(e);
                let o = Math.abs(t - e);
                o < n && (n = o,
                i = e)
            }
            )),
            i
        }
    }
    function f(t) {
        let e = d.getConfig("account.pricePointsNew");
        if (0 === t)
            return 0;
        {
            let i = parseFloat(e[0])
              , n = Math.abs(t - i);
            return e.forEach((function(e) {
                e = parseFloat(e);
                let o = Math.abs(t - e);
                o < n && (n = o,
                i = e)
            }
            )),
            i
        }
    }
}
, function(t, e, i) {
    "use strict";
    var n = i(1);
    function o(t) {
        let e;
        if (t && "function" == typeof t)
            try {
                e = t()
            } catch (t) {}
        if (!e) {
            const t = window.location.pathname.split("/");
            let i = "";
            try {
                i = t[1].toString()
            } catch (t) {}
            e = i.slice(0, 65)
        }
        return e
    }
    var s = i(0)
      , r = i(8)
      , a = i(4)
      , d = i(9)
      , c = i(11);
    function l() {
        try {
            let t = Array.prototype.slice.call(arguments)
              , e = "text-transform: uppercase;color:#222;background-color:#eee;padding:2px 4px;border-radius:4px;font-weight:600";
            if (n.a.getDebug() && window.console && t.length > 0) {
                let i = t.shift();
                t.length > 0 ? console.debug("%cLNGTD", e, i, t) : console.debug("%cLNGTD", e, i)
            }
        } catch (t) {}
    }
    function u() {}
    function h(t, e, i, o) {
        try {
            let r = {
                event: t,
                timestamp: (new Date).valueOf()
            }
              , a = {
                version: s.d,
                cookie_deprecation: n.g.cookieDeprecationState
            };
            o = Object.assign({}, a, o);
            let d = {
                custom: JSON.stringify(i),
                extra: JSON.stringify(o)
            };
            r.details = Object.assign({}, e, d);
            let c = !1;
            ["impression", "viewable_impression", "pageview"].indexOf(t) > -1 && (c = !0),
            c ? f(r) : function(t) {
                g.length >= 50 ? p() : g.push(t)
            }(r)
        } catch (t) {}
    }
    i.d(e, "a", (function() {
        return l
    }
    )),
    i.d(e, "h", (function() {
        return u
    }
    )),
    i.d(e, "e", (function() {
        return h
    }
    )),
    i.d(e, "b", (function() {
        return m
    }
    )),
    i.d(e, "f", (function() {
        return b
    }
    )),
    i.d(e, "d", (function() {
        return w
    }
    )),
    i.d(e, "g", (function() {
        return v
    }
    )),
    i.d(e, "c", (function() {
        return y
    }
    ));
    let g = [];
    function p() {
        let t = JSON.parse(JSON.stringify(g));
        g = [],
        f(t)
    }
    function f(t) {
        let e = new XMLHttpRequest
          , i = window[s.b].loggingEndpoint;
        e.open("POST", i, !0),
        e.setRequestHeader("Content-Type", "application/json;charset=UTF-8"),
        e.send(JSON.stringify(t))
    }
    function m() {
        let t = document.location.href;
        try {
            window.parent.document.location.href !== window.document.location.href && (t = window.parent.location.href)
        } catch (t) {}
        let e = "";
        try {
            e = window.frames.top.document.referrer
        } catch (t) {}
        return {
            account: n.a.getConfig("account.name"),
            section: n.a.getConfig("account.section"),
            page: o(window[s.b].accountFunctions.pageTypeFunc),
            pageview_id: n.g.pvId,
            referrer_url: e,
            page_url: t,
            device_type: n.g.getDeviceType(),
            browser: n.g.getBrowser(),
            session_depth: n.h.sessionDepth,
            country: n.g.country
        }
    }
    function b() {
        if (n.g.pvLogged && !n.g.logPageViewManual)
            return;
        let t = {};
        t.session_id = n.h.sessionId;
        let e = document.location.href;
        try {
            window.parent.document.location.href !== window.document.location.href && (e = window.parent.location.href)
        } catch (t) {}
        let i = "";
        try {
            i = window.frames.top.document.referrer
        } catch (t) {}
        t.page_url = e,
        t.referrer_url = i,
        n.g.pvLogged = !0,
        h("pageview", m(), null, t)
    }
    function w(t) {
        let e = t.bidderCode
          , i = t.adUnitCode
          , n = a.c.getUnitFromCode(i)
          , o = {
            bidder: e,
            bid: t.originalCpm,
            floor: n.getFloorForEnv(t.auctionId, !0),
            floor_raw: n.getFloorForEnv(t.auctionId, !1),
            unit: n.config.gamPath,
            auction_type: n.impressionType,
            auction_id: t.auctionId,
            refresh_count: n.filledImpressionCount,
            response_time: t.timeToRespond,
            size: t.width + "x" + t.height,
            encrypted_bid: t.encryptedBid,
            uid: t.requestId
        }
          , s = {};
        r.a.dropBidderCode && (s.dropped_bidder = r.a.dropBidderCode);
        try {
            let t = d.a.getPrebidUserIdsDefined();
            s.user_ids = t.join("|"),
            s.uid2s = d.a.getUid2Source(),
            s.enr_li = c.c.getLiModuleEnabled(),
            s.enr_op = r.a.testGroups.optable
        } catch (t) {}
        d.a.currentEnrichTestId && (s.enrich_test = d.a.currentEnrichTestId);
        try {
            s.ip_br = r.a.testGroups.ip_br
        } catch (t) {}
        try {
            s.addomain = t.adserverTargeting.hb_adomain
        } catch (t) {}
        h("bid", m(), o, s)
    }
    function v(t, e, i, n) {
        let o, s, r, a;
        i ? (o = i.bidderCode,
        s = i.requestId,
        r = i.vastUrl,
        a = i.creativeId) : o = n;
        let d = {
            bidder: o,
            unit: t.config.gamPath,
            error_code: e,
            bid_uid: s,
            vast_url: r,
            creative_id: a
        };
        h("vast_error", m(), d, null)
    }
    function y(t) {
        try {
            let e = a.c.getUnitFromCode(t.adUnitCode)
              , i = t.originalCpm
              , o = e.getFloorForEnv(t.auctionId, !0);
            l(`Bid from ${t.bidder} below floor of ${o}:`, i, t);
            let s = {
                bidder: t.bidder,
                unit: e.config.gamPath,
                bid: i,
                floor: e.getFloorForEnv(t.auctionId, !0),
                auction_type: e.impressionType,
                timeout: Object(n.e)(),
                auction_id: t.auctionId,
                uid: t.bidId
            };
            h("bid_below_floor", m(), s, null)
        } catch (t) {}
    }
    setInterval((function() {
        g.length && p()
    }
    ), 5e3)
}
, function(t, e, i) {
    "use strict";
    i.d(e, "k", (function() {
        return o
    }
    )),
    i.d(e, "d", (function() {
        return s
    }
    )),
    i.d(e, "e", (function() {
        return r
    }
    )),
    i.d(e, "n", (function() {
        return a
    }
    )),
    i.d(e, "a", (function() {
        return d
    }
    )),
    i.d(e, "p", (function() {
        return c
    }
    )),
    i.d(e, "m", (function() {
        return l
    }
    )),
    i.d(e, "q", (function() {
        return u
    }
    )),
    i.d(e, "o", (function() {
        return h
    }
    )),
    i.d(e, "b", (function() {
        return g
    }
    )),
    i.d(e, "l", (function() {
        return p
    }
    )),
    i.d(e, "j", (function() {
        return f
    }
    )),
    i.d(e, "f", (function() {
        return m
    }
    )),
    i.d(e, "c", (function() {
        return b
    }
    )),
    i.d(e, "h", (function() {
        return w
    }
    )),
    i.d(e, "i", (function() {
        return v
    }
    )),
    i.d(e, "g", (function() {
        return y
    }
    ));
    var n = i(0);
    function o(t, e, i, n) {
        let o, s, r;
        if (i = void 0 !== i && i,
        n = n || {},
        s = !1,
        o = document.createElement("script"),
        o.type = "text/javascript",
        o.src = t,
        i && (o.async = "async"),
        n.attributes)
            for (const [t,e] of Object.entries(n.attributes))
                o.setAttribute(t, e);
        o.onreadystatechange = function() {
            s || this.readyState && "complete" !== this.readyState || (s = !0,
            e && e())
        }
        ,
        o.onload = o.onreadystatechange,
        r = document.getElementsByTagName("script")[0],
        r.parentNode.insertBefore(o, r)
    }
    function s(t, e) {
        void 0 === e && (e = 50);
        let i = document.getElementById(t);
        if (!i)
            return !1;
        if (!function(t) {
            let e = document.getElementById(t);
            if (!e)
                return !1;
            let i = e.currentStyle ? e.currentStyle.visibility : getComputedStyle(e, null).visibility
              , n = e.currentStyle ? e.currentStyle.display : getComputedStyle(e, null).display;
            if ("hidden" === i || "none" === n)
                return !1;
            for (; !/body/i.test(e); )
                if (e = e.parentNode,
                i = e.currentStyle ? e.currentStyle.visibility : getComputedStyle(e, null).visibility,
                n = e.currentStyle ? e.currentStyle.display : getComputedStyle(e, null).display,
                "hidden" === i || "none" === n)
                    return !1;
            return !0
        }(t))
            return !1;
        try {
            let t = i.getBoundingClientRect()
              , n = window.innerHeight || document.documentElement.clientHeight;
            return !(Math.floor(100 - (t.top >= 0 ? 0 : t.top) / (+-t.height / 1) * 100) < e || Math.floor(100 - (t.bottom - n) / t.height * 100) < e)
        } catch (t) {
            return !1
        }
    }
    function r(t) {
        let e = null
          , i = [];
        try {
            (window.location !== window.parent.location ? window.parent.location.search : document.location.search).substr(1).split("&").forEach((function(n) {
                i = n.split("="),
                i[0] === t && (e = decodeURIComponent(i[1]))
            }
            ))
        } catch (t) {}
        return e
    }
    function a(t, e, i) {
        i = i || window;
        let n = 0;
        i.addEventListener(t, (function() {
            let t = new Date;
            t - n >= 100 && (i.dispatchEvent(new CustomEvent(e)),
            n = t)
        }
        ))
    }
    function d(t) {
        const e = window.onload;
        "complete" === document.readyState && t(),
        "function" != typeof window.onload ? window.onload = t : window.onload = function() {
            e && e(),
            t()
        }
    }
    function c(t) {
        "complete" === document.readyState || "interactive" === document.readyState ? setTimeout(t, 1) : document.addEventListener("DOMContentLoaded", t)
    }
    function l(t) {
        var e = t + "="
          , i = "";
        try {
            i = decodeURIComponent(document.cookie)
        } catch (t) {}
        for (var n = i.split(";"), o = 0; o < n.length; o++) {
            for (var s = n[o]; " " === s.charAt(0); )
                s = s.substring(1);
            if (0 === s.indexOf(e))
                return s.substring(e.length, s.length)
        }
        return ""
    }
    function u(t, e, i) {
        i = void 0 !== i ? i : .5;
        var n = new Date;
        n.setTime(n.getTime() + 60 * i * 60 * 1e3);
        var o = "expires=" + n.toUTCString();
        document.cookie = t + "=" + e + ";" + o + ";path=/"
    }
    function h() {
        let t;
        try {
            t = crypto.randomUUID()
        } catch (t) {}
        return t || (t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx-xx".replace(/[xy]/g, (function(t) {
            var e = 16 * Math.random() | 0;
            return ("x" === t ? e : 3 & e | 8).toString(16)
        }
        ))),
        t
    }
    function g(t, e) {
        var i, n, o;
        for (i = 0; i < t.length; ++i)
            if (e.length === t[i].length) {
                for (o = t[i],
                n = 0; n < e.length && e[n] === o[n]; ++n)
                    ;
                if (n === e.length)
                    return i
            }
        return -1
    }
    function p(t, e) {
        const i = document.getElementById(t);
        let n, o = !1;
        if (i) {
            const t = new IntersectionObserver((function(t) {
                let i = null;
                if (t.forEach((function(t) {
                    (!i || t.time > i.time) && (i = t)
                }
                )),
                i) {
                    let t = 0;
                    const {intersectionRatio: s} = i;
                    if (s > 0 && (t = s),
                    0 === t && !o)
                        return void (o = !0);
                    n = setTimeout((function() {
                        e(t)
                    }
                    ), 0)
                }
            }
            ),{
                root: null,
                rootMargin: "0px",
                threshold: [0, .5, 1]
            });
            return t.observe(i),
            {
                remove: function() {
                    t.disconnect(),
                    clearTimeout(n)
                }
            }
        }
        return {}
    }
    function f(t) {
        let e = t
          , i = t
          , o = function(t, e) {
            let i = document.createElement("script");
            i.type = "text/javascript",
            i.src = t,
            i.async = !0,
            i.onload = function() {}
            ,
            i.onerror = e;
            let n = document.getElementsByTagName("script")[0];
            n.parentNode.insertBefore(i, n)
        };
        o(e, (function() {
            o(i, (function() {}
            ))
        }
        ))
    }
    function m(t) {
        let e = 0
          , i = 0;
        do {
            e += t.offsetTop || 0,
            i += t.offsetLeft || 0,
            t = t.offsetParent
        } while (t);
        return {
            top: e,
            left: i
        }
    }
    function b(t) {
        setTimeout((function() {
            t()
        }
        ), 0)
    }
    function w(t) {
        return t.ttl - (t.hasOwnProperty("ttlBuffer") ? t.ttlBuffer : 1)
    }
    function v() {
        try {
            return window.sessionStorage.setItem("test", "test"),
            window.sessionStorage.removeItem("test"),
            !0
        } catch (t) {
            return !1
        }
    }
    function y(t) {
        const e = document.getElementById(t);
        try {
            let t = e.offsetHeight;
            return t += parseInt(window.getComputedStyle(e).getPropertyValue("margin-top")),
            t += parseInt(window.getComputedStyle(e).getPropertyValue("margin-bottom")),
            t
        } catch (t) {
            return e.offsetHeight
        }
    }
}
, function(t, e, i) {
    "use strict";
    var n = i(0)
      , o = i(1)
      , s = i(3)
      , r = i(12)
      , a = i(2)
      , d = i(10)
      , c = i(6)
      , l = i(8)
      , u = i(11)
      , h = i(9);
    function g(t) {
        this.cleanSizes = function() {
            this.config.mediaTypes.banner.sizes = this.filterSizes(this.config.mediaTypes.banner.sizes),
            this.config.gamSizes = this.filterSizes(this.config.gamSizes)
        }
        ,
        this.filterSizes = function(t) {
            let e = this
              , i = window.innerWidth
              , n = t.filter(t => t[0] <= i || "fluid" === t || "out-of-page" === t || "interstitial" === t || 1800 === t[0]);
            if (this.config.breakpointsSizes)
                try {
                    let t, o;
                    Object.keys(this.config.breakpointsSizes).forEach((function(n) {
                        t = parseInt(n),
                        i >= t && (o = e.config.breakpointsSizes[n])
                    }
                    )),
                    o && (n = n.filter(t => Object(s.b)(o, t) > -1))
                } catch (t) {}
            return n
        }
        ,
        A.call(this, t),
        this.stickyInContainer = void 0 !== this.unitConfiguration.stickyInContainer && "boolean" == typeof this.unitConfiguration.stickyInContainer && this.unitConfiguration.stickyInContainer,
        this.media = "banner",
        this.cleanSizes(),
        this.buildWrapper = function() {
            const t = document.getElementById(this.config.elementId)
              , e = y;
            if (t && !this.wrapperBuilt && !t.classList.contains(e) && !t.parentNode.classList.contains(e)) {
                let i = document.createElement("div");
                this.wrapperId = "ad-wrapper-" + this.config.elementId,
                i.className = t.className,
                i.classList.add(e),
                i.id = this.wrapperId,
                t.className = "",
                t.parentNode.insertBefore(i, t.nextSibling),
                i.appendChild(t),
                this.applyWrapperStyles(i),
                this.wrapperBuilt = !0
            }
        }
        ,
        this.applyWrapperStyles = function(t) {
            let e = "";
            if (this.config.clsSize)
                try {
                    const i = this.config.clsSize[0]
                      , n = this.config.clsSize[1];
                    e += "#" + this.config.elementId + " div iframe, #" + t.id + ", #" + this.config.elementId + " div div {min-width:" + i + "px;min-height:" + n + "px;}"
                } catch (t) {}
            window[n.b].accountFunctions.wrapperStyles && (e += "#" + t.id + " " + window[n.b].accountFunctions.wrapperStyles),
            this.stickyInContainer && (e += "#" + this.config.elementId + " {position:sticky;top:0;}");
            let i = document.createElement("style");
            i.innerHTML = e,
            i.classList.add("lngtd-ad-wrapper-styles"),
            document.head.appendChild(i)
        }
        ,
        this.applyBidSizingToWrapper = function(t) {
            let e = ["kargo"];
            try {
                if (-1 === e.indexOf(t.bidderCode)) {
                    let e = document.querySelector("#" + this.config.elementId + ">div>iframe")
                      , i = document.querySelector("#" + this.config.elementId + ">div");
                    e.style.minHeight = t.height + "px",
                    e.style.minWidth = t.width + "px",
                    i.style.minHeight = t.height + "px",
                    i.style.minWidth = t.width + "px"
                }
            } catch (t) {}
        }
    }
    function p(t) {
        g.call(this, t),
        this.backgroundColor = void 0 !== this.unitConfiguration.backgroundColor ? this.unitConfiguration.backgroundColor : "#ffffffcf",
        this.containerId = null,
        this.partnerHidden = !1,
        this.closed = !1,
        this.close = function() {
            this.closed = !0,
            this.retire(!0)
        }
        ,
        this.cleanup = function() {
            let t = document.getElementById(this.containerId);
            t.setAttribute("style", "display:none;");
            try {
                document.getElementById(this.config.elementId).setAttribute("style", "display:none;");
                let t = c.a.slots[this.config.elementId];
                googletag.destroySlots([t])
            } catch (t) {}
            t && t.parentNode.removeChild(t)
        }
        ,
        this.show = function() {
            let t = document.getElementById(this.containerId);
            t && t.classList.add("active")
        }
        ,
        this.filledImpressionShow = function() {
            this.show()
        }
        ,
        this.hide = function() {
            let t = document.getElementById(this.containerId);
            t && t.classList.remove("active")
        }
        ,
        this.reset = function() {
            this.hide(),
            this.clearThirdPartyCreativeContainers(),
            this.displayed = !1
        }
        ,
        this.secondChance = function() {
            this.setup(),
            this.runAuction()
        }
        ,
        this.clearThirdPartyCreativeContainers = function() {
            try {
                document.querySelectorAll(".ut_container").forEach(t => {
                    t.parentNode.removeChild(t)
                }
                ),
                document.querySelectorAll(".jpx-ms-wrapper").forEach(t => {
                    t.parentNode.removeChild(t)
                }
                );
                try {
                    GUMGUM && GUMGUM.isad && GUMGUM.removeISAd()
                } catch (t) {}
                try {
                    Kargo && Kargo.CreativeRegister.getCreativesOfType("Hover")[0].destroy()
                } catch (t) {}
            } catch (t) {}
        }
        ,
        this.richCreativePartnerHandler = function() {
            if ("justpremium" === this.winningBid.bidderCode)
                try {
                    this.handleRichCreativePartnerWin()
                } catch (t) {}
            if (["gumgum", "kargo"].indexOf(this.winningBid.bidderCode) > -1 && ["danchor", "manchor"].indexOf(this.config.unitType) > -1)
                try {
                    this.handleRichCreativePartnerWin()
                } catch (t) {}
        }
        ,
        this.handleRichCreativePartnerWin = function() {
            this.linkPartnerCloseButton(),
            this.hide(),
            this.markAsViewable(),
            this.partnerHidden = !0
        }
        ,
        this.linkPartnerCloseButton = function() {
            let t = this;
            try {
                let e = GUMGUM.getGGAds()[0].closebtn.id;
                document.getElementById(e).addEventListener("click", (function() {
                    t.close()
                }
                ))
            } catch (t) {}
            try {
                document.querySelector(".kargo-hover-close").addEventListener("click", (function() {
                    t.close()
                }
                ))
            } catch (t) {}
        }
    }
    const f = [100, 101, 102, 300, 301, 302, 303, 400, 401, 402, 403, 405, 406, 407, 408, 409, 410, 500, 501, 502, 503, 900, 901, 1005, 1009, 1010]
      , m = {
        HTML: ["ended", "timeupdate", "volumechange", "click"],
        ADS: ["adstart", "adend", "adskip"],
        IMA: ["adProgress", "allAdsCompleted", "click", "start", "impression", "pause", "complete", "viewable_impression", "loaded"],
        SKIP: ["timeupdate", "adProgress"]
    };
    function b(t) {
        A.call(this, t),
        this.media = "video",
        this.baseClip = window[n.b].accountFunctions.pathOverrides && "undefined" !== window[n.b].accountFunctions.pathOverrides.baseVideoClip ? window[n.b].accountFunctions.pathOverrides.baseVideoClip : "//s.lngtdv.com/clips/bbs.m4v",
        this.playing = !1,
        this.paused = !1,
        this.adErrorCount = 0,
        this.adEmptyCount = 0,
        this.adsPrefetchStarted = !1,
        this.adsPrefetchSeconds = 5,
        this.auctionInterval = null,
        this.adLoadedTimeout = null,
        this.adDurationTimeout = null,
        this.currentAdDuration = null,
        this.vjsplayer = null,
        this.amazonUrl = null,
        this.autoplayAd = !0,
        this.adPlaying = !1,
        this.contentPlaying = !1,
        this.bidderErrors = {},
        this.cachedAmazonBid = null,
        this.adCompleteFired = !1,
        this.currentAdPartner = null,
        this.controlsOnHover = !0,
        this.placementContainerId = void 0 !== this.unitConfiguration.placementContainerId ? this.unitConfiguration.placementContainerId : null,
        this.requireInView = void 0 === this.unitConfiguration.requireInView || this.unitConfiguration.requireInView,
        this.pauseOutOfView = void 0 !== this.unitConfiguration.pauseOutOfView && "boolean" == typeof this.unitConfiguration.pauseOutOfView && this.unitConfiguration.pauseOutOfView,
        this.playerInitialization = void 0 !== this.unitConfiguration.playerInitialization ? this.unitConfiguration.playerInitialization : "autoplay",
        this.gamSizeOverride = void 0 !== this.unitConfiguration.gamSizeOverride && this.unitConfiguration.gamSizeOverride,
        this.amazonSlotId = void 0 !== this.unitConfiguration.amazonSlotId ? this.unitConfiguration.amazonSlotId : this.config.elementId,
        this.gamParamOverrides = void 0 !== this.unitConfiguration.gamParamOverrides ? this.unitConfiguration.gamParamOverrides : null,
        this.GAMCreativeIds = "function" == typeof window[n.b].accountFunctions.getGAMPrebidVideoCreativeIds ? window[n.b].accountFunctions.getGAMPrebidVideoCreativeIds() : [],
        this.positionTop = void 0 !== this.unitConfiguration.positionTop && "string" == typeof this.unitConfiguration.positionTop ? this.unitConfiguration.positionTop : null,
        this.positionBottom = void 0 !== this.unitConfiguration.positionBottom && "string" == typeof this.unitConfiguration.positionBottom ? this.unitConfiguration.positionBottom : null,
        this.positionLeft = void 0 !== this.unitConfiguration.positionLeft && "string" == typeof this.unitConfiguration.positionLeft ? this.unitConfiguration.positionLeft : null,
        this.positionRight = void 0 !== this.unitConfiguration.positionRight && "string" == typeof this.unitConfiguration.positionRight ? this.unitConfiguration.positionRight : null;
        this.doPostInit = function() {}
        ,
        this.buildCachedBidUrl = function(t) {
            return window[n.b].videoCacheEndpoint + "?uuid=" + t
        }
        ,
        this.cacheBidPromise = async function(t) {
            let e = this;
            var i, o;
            let s = {
                puts: [{
                    type: "xml",
                    value: t.vastXml ? t.vastXml : (i = t.vastUrl,
                    o = t.vastImpUrl,
                    `<VAST version="3.0">\n        <Ad>\n          <Wrapper>\n            <AdSystem>prebid.org wrapper</AdSystem>\n            <VASTAdTagURI><![CDATA[${i}]]></VASTAdTagURI>\n            <Impression>${o ? `<![CDATA[${o}]]>` : ""}</Impression>\n            <Creatives></Creatives>\n          </Wrapper>\n        </Ad>\n        </VAST>`),
                    ttlseconds: t.ttl
                }]
            }
              , r = JSON.stringify(s);
            return new Promise((function(i, o) {
                Object(a.a)("Caching video bid", t);
                let s = new XMLHttpRequest;
                s.open("POST", window[n.b].videoCacheEndpoint, !0),
                s.contentType = "text/plain",
                s.withCredentials = !0,
                s.send(r),
                s.onload = function() {
                    if (200 === s.status) {
                        try {
                            let i = JSON.parse(s.response).responses[0].uuid;
                            t.adserverTargeting.hb_uuid = i,
                            t.adserverTargeting.hb_cache_id = i,
                            t.vastUrl = e.buildCachedBidUrl(i),
                            t.videoCacheKey = i,
                            Object(a.a)("Bid has been cached", i, t)
                        } catch (t) {}
                        i()
                    } else
                        o("error")
                }
                ,
                s.onerror = function() {
                    o("error")
                }
            }
            ))
        }
        ,
        this.getOrBuildVastUrl = function(t) {
            let e;
            return Object(a.a)("Building VAST URL for bid:", t),
            t.vastUrl ? e = t.vastUrl : t.vastXml && t.vastXml.startsWith("http") ? e = t.vastXml : t.videoCacheKey && (e = this.buildCachedBidUrl(t.videoCacheKey)),
            e
        }
        ,
        this.buildGAMVastUrl = function(t) {
            Object(a.a)(`Building GAM VAST url for ${this.config.elementId} and bid:`, t);
            let e = {}
              , i = encodeURIComponent(window.location.hostname)
              , s = encodeURIComponent(window.location.href);
            if (this.amazonTargeting && (e = Object.assign({}, e, this.amazonTargeting)),
            this.getAddedTargetingFunc)
                try {
                    let t = window[this.getAddedTargetingFunc]();
                    e = Object.assign({}, e, t)
                } catch (t) {}
            if (e = Object.assign({}, e, u.c.getGAMVideoTargeting()),
            t) {
                const e = void 0 !== this.unitConfiguration.gamMultiplier ? parseFloat(this.unitConfiguration.gamMultiplier) : 1
                  , i = parseFloat(t.cpm);
                let n;
                try {
                    n = i * e,
                    n = Object(o.b)(n),
                    n = n.toFixed(2),
                    t.cpm = n,
                    t.adserverTargeting.hb_pb = n
                } catch (t) {}
            } else
                e.nobids = !0,
                void 0 !== this.unitConfiguration.noBidUPR ? e.upr_flr = this.unitConfiguration.noBidUPR : e["lngtd-floor"] = c.a.getVideoUPRForAdUnit(this)[0];
            let r = "640x480";
            this.gamSizeOverride && (r = this.gamSizeOverride);
            let d = {
                iu: this.config.gamPath,
                sz: r,
                cust_params: e,
                hl: "en",
                output: "vast",
                site_url: i,
                vad_type: "linear",
                vpos: "preroll",
                description_url: s
            };
            if (this.gamParamOverrides)
                for (const [t,e] of Object.entries(this.gamParamOverrides))
                    d[t] = e;
            const l = void 0 !== this.unitConfiguration.adRule && 1;
            d.ad_rule = l || 0;
            let h = {
                adUnit: this.config,
                params: d,
                bid: t
            }
              , g = "";
            try {
                g = window[n.c].adServers.dfp.buildVideoUrl(h)
            } catch (t) {
                Object(a.a)("Failed to build video url: ", t)
            }
            return t && window[n.c].markWinningBidAsUsed({
                adId: t.adId
            }),
            g
        }
        ,
        this.dependenciesLoaded = !1,
        this.preloadDependencies = function(t) {
            let e = this
              , i = window[n.b].accountFunctions.pathOverrides && "undefined" !== window[n.b].accountFunctions.pathOverrides.videoJSjs ? window[n.b].accountFunctions.pathOverrides.videoJSjs : "//s.lngtdv.com/videojs/video-js.8.5.2.concat.min.js"
              , o = window[n.b].accountFunctions.pathOverrides && "undefined" !== window[n.b].accountFunctions.pathOverrides.videoJScss ? window[n.b].accountFunctions.pathOverrides.videoJScss : "//s.lngtdv.com/videojs/video-js.8.5.2.concat.min.css";
            if (this.dependenciesLoaded)
                t();
            else {
                let n = document.createElement("link");
                n.rel = "stylesheet",
                n.href = o,
                document.head.appendChild(n);
                let r = document.createElement("script");
                r.type = "text/javascript",
                r.src = i,
                r.async = !1,
                r.onload = function() {
                    let i = document.createElement("script");
                    i.type = "text/javascript",
                    Object(s.e)("osdebug") ? i.src = "//imasdk.googleapis.com/js/sdkloader/ima3_debug.js" : i.src = "//imasdk.googleapis.com/js/sdkloader/ima3.js",
                    i.onload = t,
                    i.async = !1,
                    document.head.appendChild(i),
                    e.videoDependenciesLoaded = !0
                }
                ,
                document.head.appendChild(r)
            }
        }
        ,
        this.getHighestBid = function(t) {
            t = void 0 !== t && t;
            let e = null
              , i = window[n.c].getHighestCpmBids(this.config.code);
            if (i.length > 0) {
                if (!t) {
                    for (let t in this.bidderErrors)
                        if (this.bidderErrors.hasOwnProperty(t) && this.bidderErrors[t] >= 5) {
                            Object(a.a)("Marking all video bids from bidder as erroneous: ", t);
                            let e = this.getAllAvailableBidsInPool();
                            for (let i = 0; i < e.length; i++)
                                try {
                                    let o = e[i];
                                    o.bidderCode === t && (Object(a.a)("Marking erroneous bid as used", o),
                                    window[n.c].markWinningBidAsUsed({
                                        adId: o.adId
                                    }))
                                } catch (t) {}
                        }
                    i = window[n.c].getHighestCpmBids(this.config.code)
                }
                e = i[0]
            }
            return e
        }
        ,
        this.timeSinceLastStaticCall = function() {
            let t = null;
            return this.lastStaticCall && (t = Date.now() - this.lastStaticCall),
            t
        }
        ,
        this.getWinningAdUrl = function() {
            let t, e = this.getHighestBid(!1);
            if (this.winningBid = e,
            Object(s.e)("testtag"))
                return "https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/single_preroll_skippable&sz=640x480&ciu_szs=300x250%2C728x90&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=";
            if (this.staticTags && this.staticTags.length > 0) {
                let e = 0;
                this.staticTags.forEach((function(i) {
                    try {
                        i.value > e && (e = i.value,
                        t = i)
                    } catch (t) {}
                }
                ))
            }
            if (this.skipGAM) {
                if (o.g.hasZZMap()) {
                    let i = 0
                      , n = null;
                    if (e && (i = e.originalCpm),
                    this.amazonTargeting && this.amazonTargeting.amznbid && this.amazonTargeting.amznbid.length > 2 && (n = o.g.getZZBidVal(i, this.amazonTargeting.amznbid)),
                    t && "static" !== this.currentAdPartner && (!e || e && e.originalCpm < t.value) && (!n || n && n < t.value) && (!this.timeSinceLastStaticCall() || this.timeSinceLastStaticCall() > 3e4)) {
                        this.currentAdPartner = "static",
                        this.lastStaticCall = Date.now();
                        let e = Object(s.o)();
                        return this.winningBid = {
                            vastUrl: t.url,
                            originalCpm: t.value,
                            bidderCode: t.bidder,
                            ttl: 300,
                            adserverTargeting: {},
                            requestId: e,
                            bidId: e
                        },
                        t.url
                    }
                    return n && n >= i ? (this.currentAdPartner = "amazon",
                    this.amazonUrl) : e ? (this.currentAdPartner = "prebid",
                    this.getOrBuildVastUrl(e)) : (this.currentAdPartner = null,
                    null)
                }
                if (t && "static" !== this.currentAdPartner && (!e || e && e.originalCpm < t.value) && (!this.timeSinceLastStaticCall() || this.timeSinceLastStaticCall() > 3e4)) {
                    this.currentAdPartner = "static",
                    this.lastStaticCall = Date.now();
                    let e = Object(s.o)();
                    return this.winningBid = {
                        vastUrl: t.url,
                        originalCpm: t.value,
                        bidderCode: t.bidder,
                        ttl: 300,
                        adserverTargeting: {},
                        requestId: e,
                        bidId: e
                    },
                    t.url
                }
                return this.amazonTargeting && this.amazonTargeting.amznbid && this.amazonTargeting.amznbid.length > 2 && "amazon" !== this.currentAdPartner ? (this.cachedAmazonBid = this.amazonTargeting,
                this.amazonTargeting = null,
                this.currentAdPartner = "amazon",
                this.amazonUrl) : e ? (this.currentAdPartner = "prebid",
                this.getOrBuildVastUrl(e)) : (this.currentAdPartner = null,
                null)
            }
            return this.currentAdPartner = "gam",
            this.buildGAMVastUrl(e)
        }
        ,
        this.runVideoAuction = function(t) {
            this.autoplayAd = !1,
            void 0 !== t && (this.autoplayAd = t),
            this.runAuction()
        }
        ,
        this.shouldCallAmazon = function() {
            return d.a.getAmazonConfigForUnit(this) && !this.shouldSleepBidder("amazon")
        }
        ,
        this.runAmazonAuction = function(t) {
            let e = this;
            this.amazonTargeting = null,
            this.shouldCallAmazon() ? (Object(a.a)(`Running amazon auction for ${this.config.elementId}`),
            d.a.runVideoAuction(this, (function() {
                e.amazonAuctionRunning = !1,
                d.a.setBidsOnVideoUnit(e),
                d.a.logBidsToBQ(e, t),
                e.auctionComplete()
            }
            ))) : (Object(a.a)(`NOT running amazon auction for ${this.config.elementId}.`),
            e.amazonAuctionRunning = !1,
            e.auctionComplete())
        }
        ,
        this.auctionComplete = function() {
            this.amazonAuctionRunning || this.prebidAuctionRunning || this.retired || (Object(a.a)(`Auctions complete for unit ${this.config.elementId}`),
            this.auctionRunning = !1,
            this.expireAllBidsBelowFloor(),
            this.autoplayAd && !this.adPlaying && this.findWinningBidAndPlay())
        }
        ,
        this.setAuctionInterval = function() {}
        ,
        this.play = function() {
            if (this.paused = !1,
            this.contentPlaying)
                this.safeResume();
            else
                try {
                    this.vjsplayer.ima.resumeAd()
                } catch (t) {
                    this.safeResume()
                }
        }
        ,
        this.bindAdEventHandlers = function() {
            let t = this;
            this.vjsplayer.on("adserror", (function(e) {
                let i = e.data.AdError.getErrorCode();
                return t.adErrorHandler(i)
            }
            )),
            this.vjsplayer.on("adsready", (function() {
                t.adReadyHandler()
            }
            ))
        }
        ,
        this.bindEventHandlers = function() {}
        ,
        this.setupIMA = function(t) {
            t = void 0 !== t ? t : "";
            let e = {
                id: this.config.elementId,
                adTagUrl: t,
                adLabel: "Ad",
                disableAdControls: !1,
                showControlsForJSAds: !0,
                vpaidMode: window.google.ima.ImaSdkSettings.VpaidMode.ENABLED,
                adsRenderingSettings: {
                    enablePreloading: !1,
                    loadVideoTimeout: 8e3
                },
                contribAdsSettings: {
                    timeout: 2500
                },
                numRedirects: 10,
                vastLoadTimeout: 8e3
            };
            this.skipGAM || (e.omidMode = window.google.ima.OmidAccessMode.FULL,
            e.omidVendorAccess = {},
            e.omidVendorAccess[window.google.ima.OmidVerificationVendor.MOAT] = google.ima.OmidAccessMode.FULL),
            Object(s.e)("osdebug") && (e.debug = !0),
            this.vjsplayer.ima(e),
            this.play(),
            this.vjsplayer.src({
                type: "video/mp4",
                src: this.baseClip
            }),
            this.bindAdEventHandlers(),
            this.bindEventHandlers()
        }
        ,
        this.buildVideoContainer = function() {}
        ,
        this.getVJSOptions = function(t) {
            return {
                controls: !0,
                muted: t,
                autoplay: !1,
                debug: !1,
                nativeControlsForTouch: !0,
                playsinline: !0,
                bigPlayButton: !1,
                loadingSpinner: !1,
                loop: !1
            }
        }
        ,
        this.buildPlayer = function(t) {
            let e = this;
            if (this.placementContainerId && !document.getElementById(this.placementContainerId) || this.placementContainerId && !Object(s.d)(this.placementContainerId) && this.requireInView || !document.hasFocus() && o.a.getConfig("account.initRequiresFocus") || this.unitConfiguration.delayUntilScroll && 0 === o.g.lastScrollTop)
                return this.displayInterval || (this.displayInterval = setInterval((function() {
                    e.buildPlayer(t)
                }
                ), 500)),
                !1;
            clearInterval(this.displayInterval),
            this.buildVideoContainer(),
            this.stylePlayer(),
            this.preloadDependencies((function() {
                let i = e.getVJSOptions(t);
                videojs.log.level("off"),
                Object(s.e)("osdebug") && (i.debug = !0,
                videojs.log.level("all")),
                e.vjsplayer = videojs(e.config.elementId, i, (function() {
                    "ctp" === e.playerInitialization ? document.body.addEventListener("click", (function(t) {
                        t.preventDefault(),
                        document.getElementById(e.config.elementId).contains(t.target) && e.initializeAds()
                    }
                    )) : e.initializeAds()
                }
                ))
            }
            )),
            Object(a.e)("player_load", Object(a.b)(), null, {
                player_id: this.config.elementId
            })
        }
        ,
        this.stylePlayer = function() {}
        ,
        this.safeResume = function() {
            this.vjsplayer.pause(),
            this.vjsplayer.play().then( () => {}
            ).catch(t => {
                if (!t || !t.toString().toLowerCase().includes("the play() request was interrupted by a call to pause()"))
                    throw t
            }
            )
        }
        ,
        this.muteAd = function() {
            if (this.controlsOnHover || this.vjsplayer.muted(!0),
            this.vjsplayer.ima && this.vjsplayer.muted()) {
                this.vjsplayer.ima.getAdsManager().setVolume(0)
            }
        }
        ,
        this.pause = function() {
            this.auctionInterval && !this.paused && (this.paused = !0,
            clearInterval(this.auctionInterval),
            this.auctionInterval = null),
            this.contentPlaying ? this.vjsplayer.pause() : this.vjsplayer.ima.pauseAd()
        }
        ,
        this.findWinningBidAndPlay = function() {}
        ,
        this.playAd = function(t) {}
        ,
        this.adErrorHandler = function(t) {}
        ,
        this.adReadyHandler = function() {}
        ,
        this.logErroneousBidBidder = function(t) {
            window[n.c].markWinningBidAsUsed({
                adId: t.adId
            });
            let e = t.bidderCode;
            e in this.bidderErrors ? this.bidderErrors[e] += 1 : this.bidderErrors[e] = 1
        }
    }
    function w(t) {
        b.call(this, t),
        this.hidden = !0,
        this.closed = !1,
        this.destroyed = !1,
        this.hideTimeout = null,
        this.fallbackId = void 0 !== this.unitConfiguration.fallbackId ? this.unitConfiguration.fallbackId : null,
        this.fallbackDelay = void 0 !== this.unitConfiguration.fallbackDelay ? this.unitConfiguration.fallbackDelay : 500,
        this.fallbackCount = void 0 !== this.unitConfiguration.fallbackCount ? parseInt(this.unitConfiguration.fallbackCount) : 3,
        this.maxAdEmptyCount = void 0 !== this.unitConfiguration.maxAdEmptyCount ? parseInt(this.unitConfiguration.maxAdEmptyCount) : 2,
        this.fallbackFunc = void 0 !== this.unitConfiguration.fallbackFunc ? this.unitConfiguration.fallbackFunc : null,
        this.allowFallbackIfFill = !0,
        this.closeId = "video-player-close",
        this.containerId = "lngtd-outstream",
        this.preserveContainer = void 0 !== this.unitConfiguration.preserveContainer && this.unitConfiguration.preserveContainer,
        this.persistCloseAcrossSession = void 0 !== this.unitConfiguration.persistCloseAcrossSession && this.unitConfiguration.persistCloseAcrossSession,
        this.playerWidth = void 0 !== this.unitConfiguration.width ? this.unitConfiguration.width : 301,
        this.playerHeight = void 0 !== this.unitConfiguration.height ? this.unitConfiguration.height : 170,
        this.autobuild = void 0 === this.unitConfiguration.autobuild || this.unitConfiguration.autobuild,
        this.skipGAM = void 0 === this.unitConfiguration.callGAM || "boolean" != typeof this.unitConfiguration.callGAM || !this.unitConfiguration.callGAM,
        this.fallbackOnError = void 0 !== this.unitConfiguration.fallbackOnError && "boolean" == typeof this.unitConfiguration.fallbackOnError && this.unitConfiguration.fallbackOnError,
        this.closeTop = void 0 !== this.unitConfiguration.closeTop && "string" == typeof this.unitConfiguration.closeTop ? this.unitConfiguration.closeTop : "-20px",
        this.closeBottom = void 0 !== this.unitConfiguration.closeBottom && "string" == typeof this.unitConfiguration.closeBottom ? this.unitConfiguration.closeBottom : "unset",
        this.closeRight = void 0 !== this.unitConfiguration.closeRight && "string" == typeof this.unitConfiguration.closeRight ? this.unitConfiguration.closeRight : "0",
        this.closeLeft = void 0 !== this.unitConfiguration.closeLeft && "string" == typeof this.unitConfiguration.closeLeft ? this.unitConfiguration.closeLeft : "unset",
        this.stickyOnScroll = void 0 !== this.unitConfiguration.stickyOnScroll && this.unitConfiguration.stickyOnScroll,
        this.styleFullWidth = void 0 !== this.unitConfiguration.styleFullWidth && this.unitConfiguration.styleFullWidth,
        this.modifyConfig = function() {
            if (this.addOrtbParams(),
            "outstream" === this.config.unitType) {
                let t = this.config.bids.length;
                for (; t--; ) {
                    let e = this.config.bids[t];
                    if ("ix" === e.bidder) {
                        let i = e;
                        i.params.size = this.config.mediaTypes.video.playerSize,
                        this.config.bids[t] = i
                    }
                }
            }
        }
        ,
        this.getVJSOptions = function(t) {
            let e = !0
              , i = !0;
            return o.g.isMobile() && (e = !1,
            i = !1),
            {
                controls: e,
                muted: t,
                autoplay: !1,
                debug: !1,
                nativeControlsForTouch: i,
                playsinline: !0,
                bigPlayButton: !1,
                loadingSpinner: !1,
                loop: !1
            }
        }
        ,
        this.canRun = function() {
            let t = !0;
            if (this.unitConfiguration.excludeUrls && this.unitConfiguration.excludeUrls.indexOf(window.location.pathname) > -1 && (t = !1),
            this.unitConfiguration.minWindowWidth && window.innerWidth < this.unitConfiguration.minWindowWidth && (t = !1),
            window[n.b].manualExcludeUnits.indexOf(this.config.elementId) > -1 && (t = !1),
            this.persistCloseAcrossSession) {
                Object(s.m)("lngtd-osc") && (t = !1)
            }
            if (t) {
                if (o.g.isMobile() && this.config.deviceTypes.indexOf("mobile") > -1)
                    return !0;
                if (o.g.isDesktop() && this.config.deviceTypes.indexOf("desktop") > -1)
                    return !0;
                if (o.g.isTablet() && this.config.deviceTypes.indexOf("tablet") > -1)
                    return !0
            }
            return !1
        }
        ,
        this.setup = function() {
            let t = this;
            this.canRun() && Object(s.p)((function() {
                t.autobuild && t.buildPlayer(!0)
            }
            ))
        }
        ,
        this.markAsViewable = function() {
            this.metViewability || (Object(a.a)("Viewability met for unit", this.config.elementId),
            this.metViewability = !0,
            this.logImpressionAsViewable())
        }
        ,
        this.buildVideoContainer = function() {
            let t = document.createElement("style")
              , e = "border-radius:8px;";
            this.styleFullWidth && (e = "border-radius:0;"),
            t.innerHTML = "#" + this.config.elementId + " {display:none;position:relative;margin:0 auto;width:" + this.playerWidth + "px;height:" + this.playerHeight + "px;background-color:#000;" + e + "overflow:hidden;}#" + this.config.elementId + ">.ima-ad-container {z-index: 9 !important;}",
            document.head.appendChild(t);
            let i = document.createElement("video");
            if (i.id = this.config.elementId,
            i.style.width = this.playerWidth,
            i.style.height = this.playerHeight,
            i.playsinline = "true",
            i.classList.add("video-js"),
            i.style.display = "none",
            this.placementContainerId) {
                let t = document.getElementById(this.placementContainerId)
                  , e = document.createElement("div");
                e.id = this.containerId,
                e.classList.add("player-hidden");
                const n = Math.min(this.playerHeight, 250);
                e.style.cssText = `width:100%;height:100%;min-height:${n}px;`,
                e.appendChild(i),
                t.appendChild(e),
                this.stickyOnScroll && this.setStickyBehavior()
            } else {
                this.buildBaseContainer().appendChild(i)
            }
            let n = document.createElement("source");
            n.src = this.baseClip,
            n.type = "video/mp4",
            i.appendChild(n)
        }
        ,
        this.setStickyBehavior = function() {
            let t = this
              , e = document.getElementById(this.containerId);
            if (this.stickyOnScroll) {
                let i = document.createElement("style")
                  , n = "18"
                  , o = "-20px"
                  , s = "-20px"
                  , r = "unset"
                  , a = "unset";
                this.positionTop && (s = "-20px",
                o = "unset");
                let d = parseInt(this.playerWidth / 2) - n;
                i.innerHTML = this.buildCloseCss(this.closeId, "18px", o, a, s, r, d),
                document.head.appendChild(i);
                let c = document.createElement("a");
                c.href = "#",
                c.id = this.closeId,
                c.onclick = function(e) {
                    e.preventDefault(),
                    t.closed = !0,
                    t.toggleSticky(!1)
                }
                ,
                e.appendChild(c),
                new IntersectionObserver((function(e) {
                    !0 === e[0].isIntersecting ? t.toggleSticky(!1) : t.toggleSticky(!0)
                }
                ),{
                    threshold: [.01]
                }).observe(document.getElementById(this.placementContainerId))
            }
        }
        ,
        this.buildBaseContainer = function() {
            let t = this
              , e = document.createElement("div");
            e.id = this.containerId,
            e.classList.add("player-hidden"),
            e.style.position = "fixed",
            this.positionBottom && (e.style.bottom = this.positionBottom),
            this.positionTop && (e.style.top = this.positionTop),
            e.style.height = this.playerHeight + "px",
            e.style.zIndex = "99",
            this.styleFullWidth ? (e.style.textAlign = "center",
            e.style.width = "100%",
            e.style.backgroundColor = "rgba(0,0,0,0.7)",
            e.style.right = "unset",
            e.style.left = "unset") : (e.style.width = this.playerWidth + "px",
            this.positionRight && (e.style.right = this.positionRight),
            this.positionLeft && (e.style.left = this.positionLeft)),
            document.body.appendChild(e);
            let i = document.createElement("style")
              , n = this.closeTop
              , o = this.closeBottom
              , s = this.closeRight
              , r = this.closeLeft;
            i.innerHTML = this.buildCloseCss(this.closeId, "18px", n, s, o, r, "unset"),
            document.head.appendChild(i);
            let a = document.createElement("a");
            return a.href = "#",
            a.id = this.closeId,
            a.onclick = function(e) {
                e.preventDefault(),
                t.close()
            }
            ,
            e.appendChild(a),
            e
        }
        ,
        this.close = function() {
            let t = this;
            this.closed = !0,
            this.removeAuctionInterval(),
            this.retire(!0),
            window[n.b].manualExcludeUnits.push(this.config.elementId),
            this.persistCloseAcrossSession && Object(s.q)("lngtd-osc", 1);
            let e = {
                impression_count: this.filledImpressionCount
            };
            Object(a.e)("player_close", Object(a.b)(), null, e),
            setTimeout((function() {
                t.doFallback()
            }
            ), this.fallbackDelay)
        }
        ,
        this.cleanup = function() {
            this.vjsplayer.pause(),
            this.destroy()
        }
        ,
        this.restart = function() {
            !this.closed && this.paused && (this.paused = !1,
            this.setAuctionInterval())
        }
        ,
        this.hide = function() {
            let t = this;
            Object(a.a)(`Setting timer to hide outstream player ${t.config.elementId}`);
            let e = document.getElementById(this.containerId);
            this.hideTimeout || (this.hideTimeout = setTimeout((function() {
                Object(a.a)(`Hiding outstream player ${t.config.elementId}`),
                t.hidden = !0;
                try {
                    e.classList.remove("player-showing"),
                    e.classList.add("player-hidden"),
                    document.getElementById(t.closeId).style.display = "none"
                } catch (t) {}
                window[n.b].accountFunctions.hideOutstream && "function" == typeof window[n.b].accountFunctions.hideOutstream && window[n.b].accountFunctions.hideOutstream(t)
            }
            ), 3e3))
        }
        ,
        this.show = function() {
            let t = this;
            if (Object(a.a)(`Showing outstream player ${this.config.elementId}`),
            !this.closed && !this.paused) {
                if (clearTimeout(this.hideTimeout),
                this.hideTimeout = null,
                this.hidden = !1,
                this.placementContainerId)
                    try {
                        document.getElementById(this.placementContainerId).style.display = "block",
                        document.getElementById(this.config.elementId).style.display = "block",
                        document.querySelector(`#${this.config.elementId}>video`).style.display = "block"
                    } catch (t) {}
                else
                    try {
                        document.getElementById(this.config.elementId).style.display = "block",
                        document.querySelector(`#${this.config.elementId}>video`).style.display = "block",
                        document.getElementById(this.closeId).style.display = "block"
                    } catch (t) {}
                try {
                    document.getElementById(this.containerId).classList.remove("player-hidden"),
                    document.getElementById(this.containerId).classList.add("player-showing")
                } catch (t) {}
                if (window[n.b].accountFunctions.showOutstream && "function" == typeof window[n.b].accountFunctions.showOutstream && window[n.b].accountFunctions.showOutstream(this),
                this.showStyleOverride(),
                this.pauseOutOfView) {
                    new IntersectionObserver((function(e) {
                        if (!0 === e[0].isIntersecting)
                            try {
                                t.play()
                            } catch (t) {}
                        else
                            try {
                                t.pause()
                            } catch (t) {}
                    }
                    ),{
                        threshold: [.5]
                    }).observe(document.getElementById(this.config.elementId)),
                    window.addEventListener("focus", (function() {
                        if (Object(s.d)(t.config.elementId, 50))
                            try {
                                t.play()
                            } catch (t) {}
                    }
                    )),
                    window.addEventListener("blur", (function() {
                        try {
                            t.pause()
                        } catch (t) {}
                    }
                    ))
                }
            }
        }
        ,
        this.showStyleOverride = function() {}
        ,
        this.cleanupAdBreak = function() {
            Object(a.a)("Clean up ad break");
            try {
                this.vjsplayer.ima.adsManager.discardAdBreak(),
                this.vjsplayer.ima.adsManager.skip(),
                this.vjsplayer.ima.adsManager.dispose(),
                this.vjsplayer.ima.managerCleanup = null,
                this.vjsplayer.ads.inAdBreak() && this.vjsplayer.ads.endLinearAdMode()
            } catch (t) {}
        }
        ,
        this.reset = function() {
            Object(a.a)(`Manually resetting outstream player ${this.config.elementId}`),
            this.cleanupAdBreak(),
            this.closed || this.retired ? Object(a.a)(`Cannot reset player ${this.config.elementId} - it was previously closed or retired.`) : (this.destroy(),
            this.initialized = !1,
            this.setup())
        }
        ,
        this.destroy = function() {
            this.destroyed = !0;
            try {
                try {
                    videojs(this.config.elementId).dispose()
                } catch (t) {}
                try {
                    this.preserveContainer ? document.getElementById(this.containerId).style.display = "none" : document.getElementById(this.containerId).remove()
                } catch (t) {}
                delete this.vjsplayer,
                this.adPlaying = !1,
                clearTimeout(this.failsafeTimeout),
                clearTimeout(this.hideTimeout),
                this.removeAuctionInterval(),
                clearTimeout(this.adDurationTimeout);
                try {
                    document.getElementById(this.closeId).style.display = "none"
                } catch (t) {}
            } catch (t) {}
        }
        ,
        this.display = function(t) {
            "refreshRestarted" === t && (this.auctionInterval || !this.initialized || this.adPlaying || this.reset())
        }
        ,
        this.findWinningBidAndPlay = function() {
            let t = this
              , e = this.getWinningAdUrl();
            if (Object(a.a)(`Winning video url for ${this.config.elementId}: ${e}`),
            window[n.b].refreshPaused)
                return Object(a.a)(`Cannot play outstream video ad in ${this.config.elementId}, refresh is currently paused.`),
                void this.removeAuctionInterval();
            if (!this.canRefreshUserInteraction())
                return Object(a.a)(`Cannot play outstream video ad in ${this.config.elementId}, user has not interacted with the page recently.`),
                void this.removeAuctionInterval();
            let i, o = function(e) {
                t.auctionInterval && t.removeAuctionInterval(),
                t.playAd(e)
            }, s = this.getHighestBid(!1);
            s && (i = this.bidCachePromises[s.requestId]),
            e && this.skipGAM ? o(e) : s && i ? (Object(a.a)(`We do not have a winning video url but we do have a winning bid for ${this.config.elementId} ... attempting to resolve bid cache promise`),
            i.then((function() {
                e = t.getWinningAdUrl(),
                o(e)
            }
            )).catch((function() {
                t.skipGAM ? t.adErrorHandler(1009) : o(e)
            }
            ))) : this.skipGAM ? this.adErrorHandler(1009) : o(e)
        }
        ,
        this.buildGAMVastUrl = function(t) {
            Object(a.a)(`Building GAM VAST url for ${this.config.elementId}`);
            let e = {};
            if (this.getAddedTargetingFunc)
                try {
                    let t = window[this.getAddedTargetingFunc]();
                    e = Object.assign({}, e, t)
                } catch (t) {}
            if (this.amazonTargeting && (e = Object.assign({}, e, this.amazonTargeting)),
            c.a.additionalTargeting)
                try {
                    e = Object.assign({}, e, c.a.additionalTargeting)
                } catch (t) {}
            t || (e["lngtd-floor"] = c.a.getVideoUPRForAdUnit(this)[0]);
            let i = "400x300";
            this.gamSizeOverride && (i = this.gamSizeOverride);
            let o = {
                iu: this.config.gamPath,
                sz: i,
                cust_params: e,
                hl: "en",
                output: "vast",
                vad_type: "linear"
            };
            const s = void 0 !== this.unitConfiguration.adRule && 1;
            o.ad_rule = s || 0;
            let r = {
                adUnit: this.config,
                params: o,
                bid: t
            }
              , d = "";
            try {
                d = window[n.c].adServers.dfp.buildVideoUrl(r)
            } catch (t) {
                Object(a.a)("Failed to build video url: ", t)
            }
            return d
        }
        ,
        this.playAd = function(t) {
            let e = this;
            if (this.closed)
                Object(a.a)(`Cannot play outstream video ad, outsream player ${this.config.elementId} previously closed.`);
            else {
                if (this.adPlaying = !0,
                this.adCompleteFired = !1,
                this.impressionFired = !1,
                Object(a.a)("Triggering video ad from url", t),
                this.failsafeTimeout = setTimeout((function() {
                    Object(a.a)(`Executing failsafe timeout for ${e.config.elementId}`),
                    e.videoAdInitiationError()
                }
                ), 2e4),
                this.winningBid && "prebid" === this.currentAdPartner)
                    try {
                        window[n.c].markWinningBidAsUsed({
                            adId: this.winningBid.adId
                        })
                    } catch (t) {}
                this.playAdFromURL(t)
            }
        }
        ,
        this.playAdFromURL = function(t) {
            Object(a.a)("Playing video ad with URL", t);
            try {
                this.vjsplayer.ima.changeAdTag(t),
                this.vjsplayer.ima.requestAds()
            } catch (t) {
                Object(a.a)("Error playing video ad:", t),
                this.videoAdInitiationError()
            }
            this.play()
        }
        ,
        this.playAdFromXML = function(t) {
            Object(a.a)("Playing video ad with XML", t);
            try {
                this.vjsplayer.ima.setContentWithAdsResponse(null, t),
                this.vjsplayer.ima.requestAds()
            } catch (t) {
                Object(a.a)("Error playing video ad:", t),
                this.videoAdInitiationError()
            }
            this.play()
        }
        ,
        this.videoAdInitiationError = function() {
            if (!this.retired && !this.closed) {
                if (this.winningBid && "prebid" === this.currentAdPartner)
                    try {
                        window[n.c].markWinningBidAsUsed({
                            adId: this.winningBid.adId
                        })
                    } catch (t) {}
                this.adComplete()
            }
        }
        ,
        this.pause = function() {
            this.paused = !0,
            this.vjsplayer.pause();
            try {
                this.vjsplayer.ima.pauseAd()
            } catch (t) {}
            clearTimeout(this.adDurationTimeout)
        }
        ,
        this.retireAndFallback = function() {
            this.retired || (this.pause(),
            this.retire(!0),
            this.doFallback())
        }
        ,
        this.doFallback = function() {
            let t = this;
            if (Object(a.a)("Executing fallback from outstream unit. Current bids:", this.getAllAvailableBidsInPool()),
            this.fallbackFunc)
                try {
                    window[this.fallbackFunc]()
                } catch (t) {}
            else if (this.fallbackId) {
                window[n.b].manualExcludeUnits = window[n.b].manualExcludeUnits.filter((function(e) {
                    return e !== t.fallbackId
                }
                )),
                window[n.b].manualExcludeUnits.push(this.config.elementId);
                let e = o.a.getUnitConfigFromId(this.fallbackId)
                  , i = I.initializeUnit(e);
                i && i.doPostInit()
            }
        }
        ,
        this.initializeAds = function() {
            this.initialized = !0,
            this.setupIMA(),
            this.runVideoAuction(!0)
        }
        ,
        this.stylePlayer = function() {
            let t = document.createElement("style");
            t.innerHTML = "#" + this.config.elementId + "_ima-controls-div:not(.ima-controls-div-showing) {height:3em;transition:opacity 0.25s ease-in-out;opacity:0;}#" + this.config.elementId + "_ima-controls-div.ima-controls-div-showing {height:3em;transition:opacity 0.25s ease-in-out;opacity:1;}#" + this.config.elementId + "_ima-countdown-div {position:absolute;line-height:3em;top:0;left:4em;}#" + this.config.elementId + "_ima-progress-div {display:none;}#" + this.config.elementId + "_ima-seek-bar-div {display:none;}#" + this.config.elementId + "_ima-mute-div {right:0;color:#fff;top:0;}#" + this.config.elementId + "_ima-play-pause-div {color:#fff;top:0;}#" + this.config.elementId + "_ima-slider-div {display:none;}#" + this.config.elementId + "_ima-fullscreen-div {display:none;}#" + this.config.elementId + " .vjs-control-bar {display:none;}#" + this.config.elementId + "_ima-ad-container video {background:none !important;}#" + this.containerId + ".player-hidden {visibility:hidden;opacity:0;transition:all 0.4s ease-in-out;}#" + this.containerId + ".player-showing {visibility:visible;opacity:1;transition:all 0.4s ease-in-out;}",
            document.head.appendChild(t)
        }
        ,
        this.runAuction = function() {
            let t = this;
            this.auctionRunning && Object(a.a)(`Already auctioning this unit, so will remove (${this.config.elementId}) from this new auction`);
            let e = Object(s.o)();
            this.currentAuctionId = e,
            this.auctionRunning = !0,
            this.confiantRefreshed = !1,
            this.lastAuction = Date.now(),
            window[n.c].que.push((function() {
                t.prebidAuctionRunning = !0,
                Object(s.c)((function() {
                    t.runPrebidAuction(e),
                    o.g.hasZZMap() && (t.amazonAuctionRunning = !0,
                    t.runAmazonAuction(e))
                }
                ))
            }
            ))
        }
        ,
        this.runPrebidAuction = function(t) {
            let e = this;
            Object(a.a)(`Running prebid auction for unit ${e.config.elementId} with config:`, e.config, t),
            window[n.c].requestBids({
                adUnitCodes: [e.config.code],
                bidsBackHandler: function(t, i, n) {
                    e.prebidAuctionRunning = !1,
                    o.g.hasZZMap() ? e.auctionComplete() : (e.amazonAuctionRunning = !0,
                    e.runAmazonAuction(n))
                },
                timeout: Object(o.e)(),
                auctionId: t
            })
        }
        ,
        this.removeAuctionInterval = function() {
            clearInterval(this.auctionInterval),
            this.auctionInterval = null
        }
        ,
        this.setAuctionInterval = function(t) {
            let e = this;
            this.closed || this.destroyed || (t = void 0 !== t ? t : 1e4,
            Object(a.a)(`Modifying ${this.config.elementId} outstream auction interval to ${t}`),
            this.removeAuctionInterval(),
            this.auctionInterval = setInterval((function() {
                e.runVideoAuction(!0)
            }
            ), t))
        }
        ,
        this.adErrorHandler = function(t) {
            let e = f.indexOf(t) > -1;
            if (Object(a.a)(`VAST adserror ${t} occurred in outstream video player ${this.config.elementId}`),
            e) {
                if ((this.currentAdPartner || this.winningBid) && Object(a.g)(this, t, this.winningBid, this.currentAdPartner),
                this.fallbackOnError)
                    return this.logImpressionToBQ(),
                    this.retireAndFallback(),
                    void Object(a.e)("player_fallback", Object(a.b)(), null, {});
                if (this.adErrorCount += 1,
                this.adPlaying = !1,
                clearTimeout(this.failsafeTimeout),
                clearTimeout(this.adLoadedTimeout),
                this.hide(),
                this.winningBid && "prebid" === this.currentAdPartner && (402 === t && this.adErrorCount < 2 || this.logErroneousBidBidder(this.winningBid)),
                [1005, 1009, 901, 303].indexOf(t) > -1) {
                    if (Object(a.a)("There was an empty ad error, but we have the following bids still available:", this.getHighestBid(), this.getAllAvailableBidsInPool()),
                    this.adEmptyCount += 1,
                    "gam" === this.currentAdPartner && o.a.getConfig("account.deliverPrebidIfNoGAMFill")) {
                        this.skipGAM = !0;
                        let t = this.getWinningAdUrl();
                        if (t)
                            return Object(a.a)(`Attempt to serve ad from GAM failed in ${this.config.elementId}, so falling back to winning prebid bid as ad tag ${t}`),
                            void this.playAd(t)
                    }
                    if ("amazon" === this.currentAdPartner) {
                        let t = this.getWinningAdUrl();
                        if (t)
                            return Object(a.a)(`Attempt to serve Amazon ad failed in ${this.config.elementId}, so falling back to winning prebid bid as ad tag ${t}`),
                            void this.playAd(t)
                    }
                    if ("static" === this.currentAdPartner) {
                        let t = this.getWinningAdUrl();
                        if (t)
                            return Object(a.a)(`Attempt to serve static ad failed in ${this.config.elementId}, so falling back to next winning bid as ad tag ${t}`),
                            void this.playAd(t)
                    }
                    let t = this.getAllAvailableBidsInPool();
                    if (Object(a.a)("Bids left in pool to choose from", t.length, t),
                    0 === t.length) {
                        if (this.fallbackId && this.adEmptyCount >= this.fallbackCount && (this.allowFallbackIfFill || !this.allowFallbackIfFill && 0 === this.filledImpressionCount))
                            return this.logImpressionToBQ(),
                            this.removeAuctionInterval(),
                            this.retireAndFallback(),
                            void Object(a.e)("player_fallback", Object(a.b)(), null, {});
                        this.handleUnfilledImpression()
                    }
                }
                this.winningBid && (this.adErrorCount < 4 ? this.adErrorShouldTryAnotherAd() : this.tooManyErrors())
            }
        }
        ,
        this.tooManyErrors = function() {
            this.fallbackId && (this.logImpressionToBQ(),
            this.removeAuctionInterval(),
            this.retireAndFallback(),
            Object(a.e)("player_fallback", Object(a.b)(), null, {}))
        }
        ,
        this.adErrorShouldTryAnotherAd = function() {
            this.findWinningBidAndPlay()
        }
        ,
        this.bindEventHandlers = function() {
            let t = this;
            m.HTML.forEach((function(e) {
                t.vjsplayer.on(e, (function(e) {
                    return Object(s.e)("osdebug") && Object(a.a)("Videojs event fired", e),
                    t.handleEvent(e)
                }
                ))
            }
            ))
        }
        ,
        this.handleEvent = function(t) {
            "ended" === t.type && (this.adPlaying ? this.changeContent() : this.reset())
        }
        ,
        this.changeContent = function(t) {
            const e = this;
            this.vjsplayer.src({
                type: "video/mp4",
                src: this.baseClip
            }),
            setTimeout((function() {
                e.play(),
                t && e.findWinningBidAndPlay()
            }
            ), 250)
        }
        ,
        this.adReadyHandler = function() {
            let t = this;
            m.IMA.forEach((function(e) {
                t.vjsplayer.ima.addEventListener(e, (function(i) {
                    if (Object(s.e)("osdebug") && Object(a.a)("Ima event " + e + " occurred in Video JS Player."),
                    "start" !== e && "loaded" !== e && "impression" !== e || t.muteAd(),
                    "loaded" === e && (t.adsPrefetchStarted = !1,
                    t.adLoadedTimeout = setTimeout((function() {
                        clearTimeout(t.failsafeTimeout),
                        t.winningBid && t.logErroneousBidBidder(t.winningBid),
                        Object(a.a)("Video ad load timeout fired"),
                        t.adErrorShouldTryAnotherAd()
                    }
                    ), 1e4)),
                    "start" === e) {
                        clearTimeout(t.failsafeTimeout),
                        clearTimeout(t.adLoadedTimeout),
                        t.show();
                        try {
                            t.showVideoDetails(t.winningBid)
                        } catch (t) {}
                        t.metViewability = !1,
                        t.metGPTViewability = !1
                    }
                    if ("impression" === e) {
                        let e = i.getAd().getDuration();
                        if (t.currentAdDuration = e,
                        t.impressionFired = !0,
                        t.show(),
                        Object(a.a)("Playing ad of length", t.currentAdDuration),
                        this.contentPlaying = !1,
                        t.handleFilledImpression(i),
                        !Object(s.e)("testtag") && !this.pauseOutOfView) {
                            let i = 1e3 * e + 1500;
                            t.adDurationTimeout = setTimeout((function() {
                                t.adComplete()
                            }
                            ), i)
                        }
                    }
                    "viewable_impression" === e && Object(a.a)("Video ad viewable impression event", i),
                    "adProgress" === e && (clearTimeout(t.failsafeTimeout),
                    t.contentPlaying = !1,
                    !t.adsPrefetchStarted && t.canRefreshUserInteraction() && i.getAdData().adBreakDuration - i.getAdData().currentTime < t.adsPrefetchSeconds && t.adsPrefetch()),
                    e !== window.google.ima.AdEvent.Type.COMPLETE && e !== window.google.ima.AdEvent.Type.ALL_ADS_COMPLETED || t.adCompleteFired || (t.adCompleteFired = !0,
                    clearTimeout(t.failsafeTimeout),
                    clearTimeout(t.adDurationTimeout),
                    t.impressionFired ? t.adComplete() : t.adErrorHandler(1009))
                }
                ))
            }
            ))
        }
        ,
        this.showVideoDetails = function(t) {}
        ,
        this.adsPrefetch = function() {
            this.adsPrefetchStarted = !0,
            this.runVideoAuction(!1)
        }
        ,
        this.adComplete = function() {
            Object(a.a)("Ad complete handler triggered"),
            this.contentPlaying = !0,
            this.currentAdPartner = null,
            this.adPlaying = !1,
            this.hide(),
            this.changeContent(!0)
        }
        ,
        this.getWinningBidEstimatedValue = function(t) {
            let e;
            return e = this.winningBid ? this.getFloorForEnv(this.winningBid.auctionId, !1) : this.getFloorForEnv(this.currentAuctionId, !1),
            "prebid" === this.currentAdPartner && this.winningBid ? e = this.winningBid.originalCpm : "static" === this.currentAdPartner && this.winningBid ? e = this.winningBid.originalCpm : this.winningBid && (e += .01),
            t || (e = 0),
            e
        }
        ,
        this.handleFilledImpression = function(t) {
            let e;
            this.filledImpressionCount += 1,
            this.allImpressionCount += 1,
            this.adErrorCount = 0,
            this.adEmptyCount = 0,
            this.raiseFloors(),
            this.winningBid && "prebid" === this.currentAdPartner && window[n.c].markWinningBidAsUsed({
                adId: this.winningBid.adId
            }),
            this.startViewabilityCheck();
            try {
                Object(a.a)("IMA ad details", t.getAd());
                const i = t.getAd().getWrapperAdSystems()
                  , n = t.getAd().getWrapperCreativeIds()
                  , o = this.GAMCreativeIds
                  , s = t.getAd().getAdSystem();
                if (o && o.length)
                    if (s && "AdSense/AdX" === s)
                        e = "google";
                    else if (s && "Amazon" === s)
                        e = "amazon";
                    else if (i && i.indexOf("AdSense/AdX") > -1)
                        e = "google";
                    else {
                        let t = !1;
                        n.forEach((function(e) {
                            o.indexOf(e) > -1 && (t = !0)
                        }
                        )),
                        e = this.winningBid && t ? this.winningBid.bidderCode : "direct"
                    }
            } catch (t) {}
            if (e || (e = "prebid" === this.currentAdPartner && this.winningBid ? this.winningBid.bidderCode : "static" === this.currentAdPartner && this.winningBid ? this.winningBid.bidderCode : "amazon" === this.currentAdPartner ? "amazon" : "unknown"),
            this.logImpressionToBQ(e),
            this.impressionType = "refresh",
            window[n.b].accountFunctions.impressionHandler && "function" == typeof window[n.b].accountFunctions.impressionHandler) {
                let t = this.getWinningBidEstimatedValue(e);
                window[n.b].accountFunctions.impressionHandler(t, e, this.cachedAmazonBid)
            }
            try {
                this.impressionCallback()
            } catch (t) {}
        }
        ,
        this.handleUnfilledImpression = function() {
            Object(a.a)(`Video ad empty count for ${this.config.elementId} incrementing to ${this.adEmptyCount}`),
            this.allImpressionCount += 1,
            this.logImpressionToBQ(),
            this.adEmptyCount >= this.maxAdEmptyCount ? (this.removeAuctionInterval(),
            this.retireAndFallback()) : this.setAuctionInterval(15e3),
            this.lowerFloors()
        }
        ,
        this.modifyConfig()
    }
    i.d(e, "b", (function() {
        return y
    }
    )),
    i.d(e, "c", (function() {
        return I
    }
    )),
    i.d(e, "a", (function() {
        return A
    }
    ));
    let v = {};
    v.banner = g,
    v.danchor = function(t) {
        p.call(this, t),
        this.setup = function() {
            let t = this;
            if (this.containerId = "desktop-anchor",
            window[n.b].accountFunctions.disableDesktopAnchor && "function" == typeof window[n.b].accountFunctions.disableDesktopAnchor) {
                if (window[n.b].accountFunctions.disableDesktopAnchor())
                    return
            } else if (I.disallowSticky)
                return;
            if (!1 === this.initialized) {
                this.initialized = !0;
                let e = 9999
                  , i = 0;
                this.unitConfiguration.styleOverrides && (this.unitConfiguration.styleOverrides.zIndex && (e = this.unitConfiguration.styleOverrides.zIndex),
                this.unitConfiguration.styleOverrides.bottom && (i = this.unitConfiguration.styleOverrides.bottom));
                let o = `${t.containerId}-close`
                  , s = this.buildCloseCss(o, "25px", "15px", "20px", "unset", "unset", "unset")
                  , r = document.createElement("style");
                r.innerHTML = `\n                #${t.containerId} {\n                    bottom: ${i}px;\n                    display:none;\n                    height:90px;\n                    position:fixed;\n                    width:100%;\n                    z-index: ${e};\n                    background: transparent;\n                    left:0;\n                    right:0;\n                    margin:0 auto;\n                }\n                \n                #${t.containerId} iframe {\n                    margin: 0 auto;\n                }\n                \n                #${t.containerId}.active {\n                    background: ${t.backgroundColor};\n                }\n\n                ${s}\n                \n                #${t.containerId}.active #${t.containerId}-close {\n                    display: block;\n                }\n                ${window[n.b].desktopAnchorExtraProps && window[n.b].desktopAnchorExtraProps()}\n            `,
                document.head.appendChild(r);
                let a = document.getElementById(t.containerId);
                if (!a) {
                    a = document.createElement("div"),
                    a.id = t.containerId,
                    document.body.appendChild(a);
                    let e = document.createElement("a");
                    e.href = "#",
                    e.id = t.containerId + "-close",
                    e.onclick = function(e) {
                        return e.preventDefault(),
                        t.close(),
                        !1
                    }
                    ,
                    document.getElementById(t.containerId).appendChild(e),
                    a.style.display = "block"
                }
                if (!document.getElementById(t.config.elementId)) {
                    let e = document.createElement("div");
                    e.id = t.config.elementId,
                    document.getElementById(t.containerId).appendChild(e)
                }
            } else if (this.initialized && this.partnerHidden) {
                this.clearThirdPartyCreativeContainers(),
                document.getElementById(t.containerId).style.display = "block",
                this.partnerHidden = !1
            }
        }
    }
    ,
    v.manchor = function(t) {
        p.call(this, t),
        this.setup = function() {
            let t = this;
            if (window[n.b].accountFunctions.disableMobileAnchor && "function" == typeof window[n.b].accountFunctions.disableMobileAnchor) {
                if (window[n.b].accountFunctions.disableMobileAnchor())
                    return
            } else if (I.disallowSticky)
                return;
            let e = 9999
              , i = 0
              , o = 0;
            this.unitConfiguration.styleOverrides && (this.unitConfiguration.styleOverrides.zIndex && (e = this.unitConfiguration.styleOverrides.zIndex),
            this.unitConfiguration.styleOverrides.padding && (i = this.unitConfiguration.styleOverrides.padding),
            this.unitConfiguration.styleOverrides.bottom && (o = this.unitConfiguration.styleOverrides.bottom));
            let r = this.buildCloseCss("mobile-adhesion-close", "18px", "-25px", "5px", "unset", "unset", "unset");
            if (this.containerId = "mobile-adhesion-ad",
            !1 === this.initialized) {
                this.initialized = !0;
                let n = document.createElement("style");
                n.innerHTML = `\n                #${t.containerId} {\n                    background: transparent;\n                    bottom:${o}px;\n                    display:none;\n                    left:0;\n                    max-height:100px;\n                    padding: ${i}px;\n                    position:fixed;\n                    right:0;\n                    text-align:center;\n                    width:100%;\n                    z-index: ${e};\n                }\n                \n                #${t.containerId} iframe {\n                    margin: 0 auto;\n                }\n                \n                #${t.containerId}.active {\n                    background: ${t.backgroundColor};\n                }\n                \n                ${r}\n                \n                #${t.containerId}.active #mobile-adhesion-close {\n                    display: block;\n                }\n            `,
                document.head.appendChild(n),
                Object(s.p)((function() {
                    let e = document.createElement("div");
                    e.id = t.containerId,
                    document.body.appendChild(e);
                    let i = document.createElement("div");
                    i.id = t.config.elementId,
                    document.getElementById(t.containerId).appendChild(i);
                    let n = document.createElement("a");
                    n.href = "#",
                    n.id = "mobile-adhesion-close",
                    document.getElementById(t.containerId).appendChild(n),
                    document.getElementById("mobile-adhesion-close").onclick = function(e) {
                        return e.preventDefault(),
                        t.close(),
                        !1
                    }
                    ,
                    e.style.display = "block"
                }
                ))
            } else if (this.initialized && this.partnerHidden) {
                this.clearThirdPartyCreativeContainers(),
                document.getElementById(this.containerId).style.display = "block",
                this.partnerHidden = !1
            }
        }
    }
    ,
    v.outstream = w;
    const y = "lngtd-ad-wrapper-banner";
    const I = new function() {
        this.adUnits = [],
        this.hiddenAdClass = null,
        this.disallowSticky = !1,
        this.mustDisplayTogetherReady = [],
        this.mustDisplayTogetherHandled = [],
        this.initializeUnits = function() {
            let t = this;
            o.a.getCleanedAdUnits().forEach((function(e) {
                t.initializeUnit(e)
            }
            )),
            this.addDefaultStylesForUnits()
        }
        ,
        this.initializeUnit = function(t) {
            let e, i = t.unitType || "banner", n = v[i], s = !1;
            if (this.adUnits.forEach((function(i) {
                i.config.elementId === t.elementId && (s = !0,
                e = i)
            }
            )),
            !s && !e)
                try {
                    Object(a.a)("Initializing unit with config", t),
                    e = new n(t),
                    e.canRun() ? (e.setup(),
                    this.adUnits.push(e),
                    r.a.addAdUnit(e.config),
                    o.a.getConfig("account.useGAM") && !e.skipGAM && c.a.initializeUnit(e)) : (Object(a.a)(`Unit ${t.elementId} is not allowed to run on this page.`),
                    e.applyHiddenAdClass(),
                    e.retire(!0))
                } catch (t) {
                    Object(a.a)(t)
                }
            return e
        }
        ,
        this.allPostInit = function() {
            I.adUnits.forEach((function(t) {
                Object(s.c)((function() {
                    t.doPostInit()
                }
                ))
            }
            ))
        }
        ,
        this.getAllUnitConfigs = function() {
            let t = [];
            return this.adUnits.forEach((function(e) {
                t.push(e.config)
            }
            )),
            t
        }
        ,
        this.getUnitFromId = function(t) {
            let e = null;
            return this.adUnits.forEach((function(i) {
                i.config.elementId === t && (e = i)
            }
            )),
            e
        }
        ,
        this.getUnitFromCode = function(t) {
            let e = null;
            return this.adUnits.forEach((function(i) {
                i.config.code === t && (e = i)
            }
            )),
            e
        }
        ,
        this.getUnitFromPath = function(t) {
            let e = null;
            return this.adUnits.forEach((function(i) {
                i.config.gamPath === t && (e = i)
            }
            )),
            e
        }
        ,
        this.getAdUnitsOfType = function(t) {
            return this.adUnits.filter((function(e) {
                return e.config.unitType === t
            }
            ))
        }
        ,
        this.makeGAMCall = function(t, e) {
            let i = null;
            if (window[n.b].accountFunctions.getMustDisplayTogether && "function" == typeof window[n.b].accountFunctions.getMustDisplayTogether && (i = window[n.b].accountFunctions.getMustDisplayTogether()),
            d.a.setGAMTargeting(t),
            "init" === e && i && -1 === this.mustDisplayTogetherHandled.indexOf(t.config.code)) {
                Object(a.a)("For unit, must run together with these others", t.config.elementId, i);
                let n = !1
                  , o = null
                  , s = [];
                i.forEach((function(e) {
                    e.indexOf(t.config.code) > -1 && (o = e,
                    -1 === I.mustDisplayTogetherReady.indexOf(t.config.code) && I.mustDisplayTogetherReady.push(t.config.code))
                }
                )),
                o ? (o.forEach((function(t) {
                    let e = I.getUnitFromCode(t)
                      , i = null;
                    e && (i = document.getElementById(e.config.elementId)),
                    e && i ? s.push(e) : I.mustDisplayTogetherReady.push(t),
                    -1 === I.mustDisplayTogetherReady.indexOf(t) && (n = !0)
                }
                )),
                n || (s.forEach((function(t) {
                    I.mustDisplayTogetherHandled.push(t.config.code)
                }
                )),
                c.a.doPubAdsRefresh(s, e))) : c.a.doPubAdsRefresh([t], e)
            } else
                c.a.doPubAdsRefresh([t], e)
        }
        ,
        this.resetAnchors = function() {
            let t = this;
            ["danchor", "manchor", "sidebar-sticky"].forEach((function(e) {
                try {
                    t.getAdUnitsOfType(e)[0].reset()
                } catch (t) {}
            }
            )),
            this.disallowSticky = !1
        }
        ,
        this.resetMoments = function() {
            let t = this;
            ["moment-display", "moment-video"].forEach((function(e) {
                try {
                    t.getAdUnitsOfType(e)[0].reset()
                } catch (t) {}
            }
            ))
        }
        ,
        this.retireAllUnits = function() {
            this.adUnits.forEach((function(t) {
                t.retire(!1)
            }
            )),
            this.adUnits = [],
            this.removeListeners()
        }
        ,
        this.userInteractionHandler = function() {
            window[n.b].refreshPaused || I.adUnits.forEach((function(t) {
                t.canDisplayDueToUserInteraction && t.display("userInteraction")
            }
            ))
        }
        ,
        this._listenersAdded = !1,
        this.addListeners = function() {
            this._listenersAdded || (this._listenersAdded = !0,
            document.addEventListener("userInteraction", this.userInteractionHandler))
        }
        ,
        this.removeListeners = function() {
            document.removeEventListener("userInteraction", this.userInteractionHandler)
        }
        ,
        this.setUpUnitMediation = function() {
            this.adUnits.forEach((function(t) {
                try {
                    t.setUpMediation()
                } catch (e) {
                    Object(a.a)("Error setting up mediation with unit", t.config.elementId, e)
                }
            }
            ))
        }
        ,
        this.removeAdWrapperStyles = function() {
            try {
                document.querySelectorAll(".lngtd-ad-wrapper-styles").forEach(t => t.remove())
            } catch (t) {}
        }
        ,
        this.addDefaultStylesForUnits = function() {
            let t = document.createElement("style");
            t.innerHTML = ".lngtd-dynamic-ad-container>div>div>iframe,.lngtd-dynamic-ad-container>div>iframe,.lngtd-dynamic-ad-container>iframe {margin: 0 auto;}.lngtd-ad-wrapper-banner>div>div>iframe,.lngtd-ad-wrapper-banner>div>iframe,.lngtd-ad-wrapper-banner>iframe {margin:0 auto;}",
            document.head.appendChild(t)
        }
    }
    ;
    function A(t) {
        this.unitConfiguration = void 0 !== t.unitConfiguration ? t.unitConfiguration : {},
        this.config = t,
        this.media = "",
        this.initialized = !1,
        this.displayed = !1,
        this.refreshed = !1,
        this.retired = !1,
        this.impressionType = "init",
        this.lastAuction = null,
        this.lastAdvertiser = null,
        this.confiantRefreshed = !1,
        this.alwaysCacheBids = void 0 !== this.unitConfiguration.alwaysCacheBids && "boolean" == typeof this.unitConfiguration.alwaysCacheBids && this.unitConfiguration.alwaysCacheBids,
        this.metViewability = !1,
        this.metGPTViewability = !1,
        this.biddersActivity = {},
        this.auctionRunning = null,
        this.prebidAuctionRunning = !1,
        this.amazonAuctionRunning = !1,
        this.staticTags = void 0 !== this.unitConfiguration.staticTags ? this.unitConfiguration.staticTags : null,
        this.lastStaticCall = null,
        this.displayInterval = null,
        this.refreshTimeout = null,
        this.floorMultiplier = 1,
        this.filledImpressionCount = 0,
        this.allImpressionCount = 0,
        this.allowUnfilledRetries = "number" == typeof o.a.getConfig("account.allowUnfilledRetries") ? o.a.getConfig("account.allowUnfilledRetries") : 1,
        this.unfilledRetryAttempts = 0,
        this.secondChanceTimeout = null,
        this.canDisplayDueToUserInteraction = !0,
        this.refreshUnfilledImpressions = "boolean" == typeof o.a.getConfig("account.refreshUnfilledImpressions") && o.a.getConfig("account.refreshUnfilledImpressions"),
        this.refreshUnfilledInterval = "number" == typeof o.a.getConfig("account.refreshUnfilledImpressionsAfter") ? o.a.getConfig("account.refreshUnfilledImpressionsAfter") : 3e4,
        this.amazonTargeting = null,
        this.currentImpressionId = null,
        this.winningBid = null,
        this.parentElementId = null,
        this.overrideParentSize = void 0 !== this.unitConfiguration.overrideParentSize && this.unitConfiguration.overrideParentSize,
        this.skipGAM = void 0 !== this.unitConfiguration.skipGAM && "boolean" == typeof this.unitConfiguration.skipGAM && this.unitConfiguration.skipGAM,
        this.excludeFromAmazon = void 0 !== this.unitConfiguration.excludeFromAmazon && "boolean" == typeof this.unitConfiguration.excludeFromAmazon && this.unitConfiguration.excludeFromAmazon,
        this.getAddedTargetingFunc = void 0 !== this.unitConfiguration.getAddedTargetingFunc ? this.unitConfiguration.getAddedTargetingFunc : null,
        this.impressionCallback = function() {}
        ,
        this.setup = function() {}
        ,
        this.setUpMediation = function() {}
        ,
        this.wrapperBuilt = !1,
        this.wrapperId = null,
        this.useWrapper = "boolean" != typeof this.unitConfiguration.useWrapper || this.unitConfiguration.useWrapper,
        this.buildWrapper = function() {}
        ,
        this.applyBidSizingToWrapper = function() {}
        ,
        this.reset = function() {}
        ,
        this.bidCachePromises = {},
        this.cacheBidPromise = function() {}
        ,
        this.doPostInit = function() {
            this.runAuction(this.impressionType)
        }
        ,
        this.applyHiddenAdClass = function() {
            let t = document.getElementById(this.config.elementId);
            I.hiddenAdClass && t && t.classList.add(I.hiddenAdClass)
        }
        ,
        this.cleanForTestBidder = function() {
            let t = Object(s.e)("testbidder")
              , e = this.config.bids.length;
            for (; e--; ) {
                let i = this.config.bids[e];
                o.g.excludeBidders.length && o.g.excludeBidders.indexOf(i.bidder) > -1 && (t && t === i.bidder || this.config.bids.splice(e, 1)),
                t && i.bidder !== t && this.config.bids.splice(e, 1)
            }
        }
        ,
        this.cleanBidders = function() {
            let t = this
              , e = this.config.bids.length;
            for (; e--; ) {
                let i = this.config.bids[e];
                "adagio" === i.bidder && (i.params.category = o.g.country,
                i.params.environment = !0 === o.g.isMobile() ? "mobile" : "desktop");
                try {
                    "ogury" === i.bidder && (i.params.onAdShow = function(e) {
                        let i = window.top.document.querySelector("#ogy-root-container-" + e.ad_unit_id);
                        try {
                            var n = i.getElementsByTagName("iFrame")[0].contentDocument
                              , o = n.body.querySelector("#close-btn");
                            if (!o) {
                                let e = setInterval( () => {
                                    (o = n.body.querySelector("#close-btn")) && (o.addEventListener("click", () => {
                                        ["danchor", "manchor"].indexOf(t.config.unitType) > -1 && t.close()
                                    }
                                    ),
                                    clearInterval(e))
                                }
                                , 500)
                            }
                        } catch (t) {}
                    }
                    )
                } catch (t) {}
            }
        }
        ,
        this.cleanGeos = function() {
            let t = this
              , e = this.config.bids.length;
            for (; e--; ) {
                let i = t.config.bids[e];
                o.a.getConfig("partners").forEach((function(n) {
                    i.bidder === n.shortName && n.geoRestrictionsInclude && o.g.country && -1 === n.geoRestrictionsInclude.indexOf(o.g.country) && t.config.bids.splice(e, 1),
                    i.bidder === n.shortName && n.geoRestrictionsExclude && o.g.country && n.geoRestrictionsExclude.indexOf(o.g.country) > -1 && t.config.bids.splice(e, 1)
                }
                )),
                i.geoRestrictionsInclude && (o.g.country && -1 === i.geoRestrictionsInclude.indexOf(o.g.country) && t.config.bids.splice(e, 1),
                delete i.geoRestrictionsInclude),
                i.geoRestrictionsExclude && (o.g.country && i.geoRestrictionsExclude.indexOf(o.g.country) > -1 && t.config.bids.splice(e, 1),
                delete i.geoRestrictionsExclude)
            }
        }
        ,
        this.cleanUnit = function() {
            this.cleanBidders(),
            this.cleanForTestBidder(),
            this.cleanGeos()
        }
        ,
        this.canRun = function() {
            let t = !0;
            return o.g.isMobile() && -1 === this.config.deviceTypes.indexOf("mobile") && (t = !1),
            o.g.isDesktop() && -1 === this.config.deviceTypes.indexOf("desktop") && (t = !1),
            o.g.isTablet() && -1 === this.config.deviceTypes.indexOf("tablet") && (t = !1),
            window[n.b].manualExcludeUnits.indexOf(this.config.elementId) > -1 && (t = !1),
            this.unitConfiguration.minWindowWidth && window.innerWidth < this.unitConfiguration.minWindowWidth && (t = !1),
            t
        }
        ,
        this.startViewabilityCheck = function() {
            let t, e = this;
            Object(s.l)(this.config.elementId, (function(i) {
                clearTimeout(t),
                i >= .5 && (t = setTimeout((function() {
                    e.markAsViewable()
                }
                ), 1250))
            }
            ))
        }
        ,
        this.markAsViewable = function() {
            this.metViewability || (Object(a.a)("Viewability met for unit", this.config.elementId),
            this.metViewability = !0,
            this.logImpressionAsViewable(),
            this._startRefresh())
        }
        ,
        this.logImpressionAsViewable = function() {
            let t = {
                uid: this.currentImpressionId
            };
            Object(a.e)("viewable_impression", Object(a.b)(), t, null),
            this.currentImpressionId = null
        }
        ,
        this._viewabilityMetForRefresh = function() {
            if (["eb", "adx"].indexOf(this.lastAdvertiser) > -1) {
                if (this.metGPTViewability)
                    return !0
            } else if (this.metViewability)
                return !0;
            return !1
        }
        ,
        this.refresh = function() {
            this.canRefreshUserInteraction() ? this._viewabilityMetForRefresh() ? (!0 === o.a.getConfig("account.useGAM") && c.a.resetSlotTargeting(this),
            this.runAuction("refresh")) : Object(a.a)("Unit cannot refresh because viewability was not met", this.config) : Object(a.a)(`Unit ${this.config.elementId} cannot refresh because user has not interacted with page recently`)
        }
        ,
        this._startRefresh = function(t) {
            let e = this;
            t = void 0 !== t ? t : o.a.getConfig("account.refreshInterval"),
            o.a.getConfig("account.refreshEnabled") && this.config.refresh && !this.refreshTimeout && (this.refreshTimeout = setTimeout((function() {
                e.refreshTimeout = null,
                e.impressionType = "refresh",
                Object(a.a)(`Triggering refresh of ad unit ${e.config.elementId} after ${t}ms`),
                e.refresh()
            }
            ), t))
        }
        ,
        this._doUnfilledRefresh = function() {
            this.metViewability = !0,
            this._startRefresh(this.refreshUnfilledInterval)
        }
        ,
        this.handleHeavyAdIntervention = function() {
            let t;
            t = this.winningBid ? {
                unit: this.config.gamPath,
                bidder: this.winningBid.bidderCode,
                uid: this.winningBid.requestId
            } : {
                unit: this.config.gamPath,
                bidder: null,
                uid: null
            },
            Object(a.e)("chrome_heavy_ad", Object(a.b)(), null, t),
            this.markAsViewable(),
            this.displayed = !1,
            this.refresh()
        }
        ,
        this.addOrtbParams = function() {
            let t = this.config.gamPath;
            if (this.config.gamPath || (t = this.config.elementId),
            window[n.b].accountFunctions.getUnitGPID && "function" == typeof window[n.b].accountFunctions.getUnitGPID) {
                const e = window[n.b].accountFunctions.getUnitGPID(this.config);
                e && (t = e)
            }
            this.config.ortb2Imp = {
                ext: {
                    gpid: t,
                    data: {
                        pbadslot: this.config.gamPath
                    }
                },
                battr: [3]
            }
        }
        ,
        this.modifyConfig = function() {
            this.addOrtbParams()
        }
        ,
        this.auctionFloors = {},
        this.getFloorForEnv = function(t, e) {
            let i = parseFloat(this.config.baseFloor);
            if (e = void 0 === e || e,
            (t = void 0 !== t ? t : this.currentAuctionId) && this.auctionFloors.hasOwnProperty(t))
                return this.auctionFloors[t];
            try {
                Object(s.e)("floor_override") && (i = parseFloat(Object(s.e)("floor_override")))
            } catch (t) {}
            let n = i;
            if (o.a.getConfig("account.dynamicFloorsEnabled") && !this.unitConfiguration.useStaticFloor)
                try {
                    let t = {};
                    try {
                        t = JSON.parse(o.g.floors[this.config.uid])
                    } catch (t) {}
                    const e = [];
                    e.push(o.g.getBrowser()),
                    e.push(o.g.country),
                    e.push(!0 === o.g.isMobile() ? "mobile" : "desktop"),
                    e.push(o.a.getConfig("account.section")),
                    e.push(0 === o.h.sessionDepth ? "A" : o.h.sessionDepth > 2 ? "C" : "B");
                    const s = e.join("_")
                      , r = [o.g.getBrowser(), o.g.country].join("_")
                      , a = o.g.country;
                    if (n = t.hasOwnProperty(s) ? t[s] : t.hasOwnProperty(r) ? t[r] : t.hasOwnProperty(a) ? t[a] : t.default,
                    ["bookrags", "gradesaver"].includes(o.a.getConfig("account.name")) && !this.allImpressionCount)
                        try {
                            let t = o.g.flooringTestGroup;
                            n = this.applyTestGroup(n, t)
                        } catch (t) {
                            console.error("Error occurred while applying test group:", t)
                        }
                    n || (n = i)
                } catch (t) {}
            try {
                n = this.floorMultiplier * n
            } catch (t) {}
            if (e)
                try {
                    let t = this.getHighestBid();
                    if (t && (n = Math.max(n, t.cpm)),
                    o.a.getConfig("account.dynamicFloorsEnabled") && this.allImpressionCount) {
                        let t = (n + this.getAllAvailableBidsInPool().reduce( (t, e) => t + e.cpm, 0) / 3) / 2;
                        n = this.multipleBidderBidsInPool() ? Math.max(n, t) : t
                    }
                } catch (t) {}
            return this.auctionFloors[t] = n,
            n
        }
        ,
        this.applyTestGroup = function(t, e) {
            return 1 === e || 2 === e ? Math.round(t * e / 4 * 100) / 100 : 3 === e || 4 === e ? Math.round(t * e / 2 * 100) / 100 : Math.round(100 * t) / 100
        }
        ,
        this.raiseFloors = function() {
            this.floorMultiplier = 1
        }
        ,
        this.lowerFloors = function() {
            this.floorMultiplier = 1
        }
        ,
        this.currentAuctionId = null,
        this.runAuction = function() {
            let t = this;
            this.auctionRunning && Object(a.a)(`Already auctioning this unit, so will remove (${this.config.elementId}) from this new auction`);
            let e = Object(s.o)();
            this.currentAuctionId = e,
            this.auctionRunning = !0,
            this.confiantRefreshed = !1,
            this.lastAuction = Date.now(),
            window[n.c].que.push((function() {
                t.amazonAuctionRunning = !0,
                t.prebidAuctionRunning = !0,
                Object(s.c)((function() {
                    t.runPrebidAuction(e)
                }
                )),
                Object(s.c)((function() {
                    t.runAmazonAuction(e)
                }
                ))
            }
            ))
        }
        ,
        this.runPrebidAuction = function(t) {
            let e = this;
            this.config.bids.filter(t => "amazon" !== t.bidder).length ? (Object(a.a)(`Running prebid auction for unit ${e.config.elementId} with config:`, e.config, t),
            window[n.c].requestBids({
                adUnitCodes: [e.config.code],
                bidsBackHandler: function(t, i, n) {
                    e.prebidAuctionRunning = !1,
                    e.auctionComplete()
                },
                timeout: Object(o.e)(),
                auctionId: t
            })) : (Object(a.a)(`NOT running prebid auction for ${this.config.elementId} because no bids present.`),
            this.prebidAuctionRunning = !1,
            e.auctionComplete())
        }
        ,
        this.shouldCallAmazon = function() {
            let t = d.a.getAmazonConfigForUnit(this);
            try {
                return t && this.config.mediaTypes.banner.sizes.length > 0 && d.a.initialized && !this.shouldSleepBidder("amazon")
            } catch (t) {
                return !1
            }
        }
        ,
        this.runAmazonAuction = function(t) {
            let e = this;
            this.amazonTargeting = null,
            this.shouldCallAmazon() ? (Object(a.a)(`Running amazon auction for ${this.config.elementId}`),
            d.a.runAuction(this, (function() {
                e.amazonAuctionRunning = !1,
                d.a.setBidsOnUnit(e),
                d.a.logBidsToBQ(e, t),
                e.auctionComplete()
            }
            ))) : (Object(a.a)(`NOT running amazon auction for ${this.config.elementId}.`),
            this.amazonAuctionRunning = !1,
            e.auctionComplete())
        }
        ,
        this.auctionComplete = function() {
            this.amazonAuctionRunning || this.prebidAuctionRunning || (Object(a.a)(`Auctions complete for unit ${this.config.elementId}`),
            this.auctionRunning = !1,
            this.expireAllBidsBelowFloor(),
            this.display("auction"))
        }
        ,
        this.expireAllBidsBelowFloor = function() {
            try {
                let t = this.getAllAvailableBidsInPool();
                for (let e = 0; e < t.length; e++)
                    try {
                        let i = t[e]
                          , o = this.getFloorForEnv(i.auctionId, !0);
                        o && i.originalCpm < o && (Object(a.a)("Marking bid that was below auction floor as used", i),
                        window[n.c].markWinningBidAsUsed({
                            adId: i.adId
                        }))
                    } catch (t) {}
            } catch (t) {}
        }
        ,
        this.getHighestBid = function() {
            let t = null
              , e = window[n.c].getHighestCpmBids(this.config.code);
            return e.length > 0 && (t = e[0]),
            t
        }
        ,
        this.getSecondBid = function() {
            let t = null;
            try {
                let e = window[n.c].getHighestCpmBids(this.config.code);
                e.length > 0 && (t = e[0])
            } catch (t) {}
            return t
        }
        ,
        this.timeSinceLastAuction = function() {
            let t = 0;
            return this.lastAuction && (t = Date.now() - this.lastAuction),
            t
        }
        ,
        this.canRefreshUserInteraction = function() {
            let t = Date.now() - o.g.lastUserInteraction
              , e = !o.a.getConfig("account.refreshRequiresUserInteraction") || t < 6e4;
            return e || (clearInterval(this.displayInterval),
            window[n.b].pauseRefresh(!0, "userInteraction")),
            e
        }
        ,
        this.canDisplay = function() {
            let t = !1;
            if (this.displayed && !this.config.refresh)
                return !1;
            const e = Date.now() - this.displayed;
            if (this.displayed && e < o.a.getConfig("account.refreshInterval"))
                return Object(a.a)("Cannot display unit because it was displayed less than the refresh interval ago:", this.config.elementId),
                !1;
            if (!this.canRefreshUserInteraction())
                return Object(a.a)("Cannot display unit because the user has not interacted with the page recently:", this.config.elementId),
                !1;
            let i = Object(s.d)(this.config.elementId);
            return this.displayed ? this.config.refresh && (i && this._viewabilityMetForRefresh() && -1 === window[n.b].refreshDisallowed.indexOf(this.config.elementId) ? t = !0 : Object(a.a)("Cannot refresh unit because it didn't meet viewability requirements or is not allowed to refresh:", this.config.elementId)) : (!1 === this.config.lazyLoad || i) && this.lastAuction && this.timeSinceLastAuction() < 6e4 && (t = !0),
            t
        }
        ,
        this.deferDisplay = function() {
            const t = this;
            this.displayInterval || (Object(a.a)("Deferring display of unit because it cannot currently display", this.config.elementId),
            this.displayInterval = setInterval((function() {
                t.display("delay")
            }
            ), 500))
        }
        ,
        this.startSecondChance = function() {
            const t = this;
            this.secondChanceTimeout || (Object(a.a)("Setting up second chance opportunity for", this.config.elementId),
            this.lowerFloors(),
            this.secondChanceTimeout = setTimeout((function() {
                Object(a.a)("Firing second chance opportunity for", t.config.elementId),
                t.displayed = !1,
                t.refreshed = !1,
                t.secondChanceTimeout = null,
                t.secondChance()
            }
            ), 15e3))
        }
        ,
        this.secondChance = function() {
            this.runAuction()
        }
        ,
        this.retire = function(t) {
            if (Object(a.a)(`Retiring ${this.config.elementId}`),
            this.retired = !0,
            clearInterval(this.displayInterval),
            clearTimeout(this.secondChanceTimeout),
            clearTimeout(this.refreshTimeout),
            t) {
                const t = I.adUnits.indexOf(this);
                t > -1 && I.adUnits.splice(t, 1)
            }
            try {
                this.cleanup()
            } catch (t) {}
        }
        ,
        this.cleanup = function() {}
        ,
        this.display = function(t) {
            if (this.displayed && ["scroll", "focus", "click", "userInteraction"].indexOf(t) > -1 && (this.refreshTimeout || !this._viewabilityMetForRefresh()))
                return;
            if (this.refreshTimeout && "confiant" === t && clearTimeout(this.refreshTimeout),
            this.displayed && !this.config.refresh)
                return;
            if (["scroll", "focus", "click", "userInteraction"].indexOf(t) > -1 && this.secondChanceTimeout)
                return;
            if (window[n.b].manualExcludeUnits.indexOf(this.config.elementId) > -1)
                return void Object(a.a)("Cannot display unit because it is manually excluded:", this.config.elementId);
            this.displayInterval || this.refreshTimeout || Object(a.a)(`Display of unit ${this.config.elementId} called with trigger ${t}`);
            let e = this.canDisplay()
              , i = document.getElementById(this.config.elementId);
            !i && this.config.altSelector && (i = document.querySelector(this.config.altSelector),
            i && (this.config.elementId = i.id)),
            "init" === this.impressionType ? (!i || !document.hasFocus() && o.a.getConfig("account.initRequiresFocus") || this.auctionRunning) && (this.deferDisplay(),
            e = !1) : (!i || window[n.b].refreshPaused || !document.hasFocus() && o.a.getConfig("account.refreshRequiresFocus")) && (e = !1),
            "force" !== t && "confiant" !== t || (e = !0);
            let s = this.timeSinceLastAuction() > 6e4;
            s && (Object(a.a)("Cannot display unit because auction is stale:", this.config.elementId),
            e = !1,
            this.auctionRunning || this.runAuction(this.impressionType)),
            e ? (this.useWrapper && this.buildWrapper(),
            this.clearThirdPartyCreativeContainers(),
            clearInterval(this.displayInterval),
            this.displayed = Date.now(),
            "refresh" === this.impressionType && (this.refreshed = Date.now()),
            this.metViewability = !1,
            this.metGPTViewability = !1,
            !0 === o.a.getConfig("account.useGAM") ? I.makeGAMCall(this, this.impressionType) : this.getHighestBid() ? (this.winningBid = this.getHighestBid(),
            r.a.renderPrebidWinningBidWithoutGAM(this.getHighestBid(), this.config.elementId)) : window[n.b].fallbackForUnfilledNoGAM(this.config.elementId)) : "auction" === t && Object(a.a)("Not displaying unit ...", this.config.elementId, this.canDisplay(), s, i, this.auctionRunning)
        }
        ,
        this.customizeTargeting = function(t) {
            return t
        }
        ,
        this.adjustBidForAdxMultiplier = function(t, e) {
            const i = parseFloat(o.a.getConfig("account.adXMultiplier"))
              , n = parseFloat(t);
            e = void 0 !== e ? e : o.b;
            let s = n;
            try {
                s = 1 * n * i,
                s = e(s),
                s = s.toFixed(2)
            } catch (t) {}
            return s
        }
        ,
        this.getTargetingForGAM = function() {
            let t = {}
              , e = "false";
            t.elid = this.config.elementId;
            let i = null
              , r = window[n.c].getHighestCpmBids(this.config.code);
            if (r.length > 0) {
                i = r[0];
                let e = i.adserverTargeting;
                for (let n in e)
                    if (e.hasOwnProperty(n) && e[n])
                        try {
                            let s = e[n].toString();
                            if ("hb_pb" === n) {
                                try {
                                    s = this.adjustBidForAdxMultiplier(i.cpm)
                                } catch (t) {}
                                o.a.getConfig("account.useNewTargeting") && (s = this.adjustBidForAdxMultiplier(i.cpm, o.c),
                                n = "lngtd_pb"),
                                c.a.useSafeFrames && -1 === c.a.safeFramesExcludePartners.indexOf(i.bidder) && (t.safe_frames = (!0).toString())
                            }
                            t[n] = s
                        } catch (t) {
                            Object(a.a)("Error getting targeting for:", n, e, t)
                        }
            }
            if (!i && o.a.getConfig("account.dynamicFloorsEnabled"))
                try {
                    t["lngtd-floor"] = c.a.getUPRForAdUnit(this)[0]
                } catch (t) {}
            let d = c.a.slots[this.config.elementId].getTargeting("amznbid");
            if (i)
                this.winningBid = i;
            else if (0 !== d.length && d[0].length > 3)
                this.winningBid = null;
            else if (this.winningBid = null,
            e = "true",
            !0 === o.a.getConfig("account.skipGAMOnNoBids"))
                return Object(a.a)(this.config.elementId, "not calling GAM because no bids returned"),
                !1;
            return Object(s.e)("ensurefill") && (t.ensurefill = "1"),
            t.refresh_count = this.filledImpressionCount,
            t.display_type = this.impressionType,
            t.nobids = e,
            t = this.customizeTargeting(t),
            t
        }
        ,
        this.getWinningBidEstimatedValue = function(t) {
            let e = this.getFloorForEnv(this.currentAuctionId, !1);
            if (this.winningBid && this.winningBid.bidderCode === t)
                e = this.winningBid.originalCpm;
            else if (this.winningBid) {
                const t = parseFloat(o.a.getConfig("account.adXMultiplier"))
                  , i = parseFloat(this.winningBid.cpm);
                let n = i;
                try {
                    n = i * t,
                    e = Object(o.b)(n),
                    e = parseFloat(e) + .01
                } catch (t) {}
            }
            return "house" !== t && "unknown" !== t && t || (e = 0),
            e
        }
        ,
        this.handleUnfilledImpression = function() {
            if (this.allImpressionCount += 1,
            this.logImpressionToBQ(),
            this.refreshUnfilledImpressions)
                this._doUnfilledRefresh();
            else {
                if (this.refreshed)
                    this.retireAndTrack(!0);
                else {
                    const t = ["out-of-page"];
                    this.allowUnfilledRetries && this.unfilledRetryAttempts < this.allowUnfilledRetries && -1 === window[n.b].secondChanceDisallowed.indexOf(this.config.code) && -1 === t.indexOf(this.config.unitType) ? (this.unfilledRetryAttempts += 1,
                    this.startSecondChance()) : this.retireAndTrack(!0)
                }
                this.lowerFloors(),
                this.reset()
            }
        }
        ,
        this.retireAndTrack = function(t) {
            const e = this;
            try {
                if (o.a.getConfig("account.refreshEnabled") && this.config.refresh && -1 === window[n.b].refreshDisallowed.indexOf(this.config.elementId)) {
                    const t = o.a.getConfig("account.refreshInterval");
                    setInterval((function() {
                        window[n.b].refreshPaused || e.logRetiredOpportunity()
                    }
                    ), t)
                }
            } catch (t) {}
            this.retire(t)
        }
        ,
        this.logRetiredOpportunity = function() {
            let t = {};
            t.bidfloor = this.getFloorForEnv(null, !0);
            try {
                let e = h.a.getPrebidUserIdsDefined();
                t.user_ids = e.join("|")
            } catch (t) {}
            t.raw_impression_count = this.allImpressionCount;
            let e = {
                unit: this.config.gamPath,
                media: this.media
            };
            Object(a.e)("retired_opp", Object(a.b)(), e, t)
        }
        ,
        this.filledImpressionShow = function() {}
        ,
        this.shouldLogImpressionToBQ = function() {
            return !0
        }
        ,
        this.handleFilledImpression = function(t) {
            this.filledImpressionShow();
            let e, i = !1;
            try {
                c.a.slots[this.config.elementId].getTargetingKeys().indexOf("up_recovery") > -1 && (i = !0)
            } catch (t) {}
            try {
                c.a.slots[this.config.elementId].clearTargeting()
            } catch (t) {
                Object(a.a)("Error clearing targeting for ", this.config.elementId)
            }
            this.raiseFloors(),
            this.filledImpressionCount += 1,
            this.allImpressionCount += 1,
            this.startViewabilityCheck();
            let s, r = !1;
            if (t) {
                let i = Array.isArray(o.a.getConfig("account.ignoreAdvertiserIds")) ? o.a.getConfig("account.ignoreAdvertiserIds") : [];
                if (t.advertiserId && i.indexOf(t.advertiserId) > -1)
                    return;
                let s = Object(o.d)();
                if (this.winningBid && t.advertiserId == o.a.getConfig("account.lngtdAdvertiserId") ? (e = this.winningBid.bidderCode,
                r = !0) : this.winningBid ? s.hasOwnProperty(t.advertiserId) ? e = s[t.advertiserId] : !e && t.yieldGroupIds && t.yieldGroupIds.length > 0 && (e = "eb") : s.hasOwnProperty(t.advertiserId) && (e = s[t.advertiserId]),
                !e && t.yieldGroupIds && t.yieldGroupIds.length > 0 && (e = "eb"),
                o.a.getConfig("account.excludeSponsorshipFromRefresh") && t.lineItemId)
                    try {
                        let e = t.lineItemId.toString();
                        e && o.a.getConfig("account.sponsorshipLineItemIds").indexOf(e) > -1 && window[n.b].refreshDisallowed.push(this.config.elementId)
                    } catch (e) {
                        Object(a.a)("Issue preventing sponsorship refresh for", t, e)
                    }
                "object" == typeof o.a.getConfig("account.specialLineItemIds") && Object.keys(o.a.getConfig("account.specialLineItemIds")).length > 0 && t.lineItemId && window[n.b].accountFunctions.handleSpecialLineItem && "function" == typeof window[n.b].accountFunctions.handleSpecialLineItem && window[n.b].accountFunctions.handleSpecialLineItem(t.lineItemId)
            } else
                this.winningBid ? (s = !0,
                e = this.winningBid.bidderCode,
                r = !0) : (s = !0,
                e = "amazon",
                r = !1);
            e || (e = "unknown"),
            i && (e = "blockthrough");
            let d = {};
            try {
                d.companyIds = t.companyIds,
                d.yieldgroupIds = t.yieldgroupIds
            } catch (t) {}
            if (s && (d.manual_render = "true"),
            this.shouldLogImpressionToBQ() && this.logImpressionToBQ(e, d),
            this.lastAdvertiser = e,
            window[n.b].accountFunctions.impressionHandler && "function" == typeof window[n.b].accountFunctions.impressionHandler) {
                let t = this.getWinningBidEstimatedValue(e);
                window[n.b].accountFunctions.impressionHandler(t, e, this.cachedAmazonBid)
            }
            if (this.winningBid && r) {
                let t = Object(o.f)(this.winningBid.bidderCode);
                t && !t.allowRefresh && window[n.b].refreshDisallowed.push(this.config.elementId),
                this.applyBidSizingToWrapper(this.winningBid),
                this.richCreativePartnerHandler(),
                ["sublime", "venatus", "justpremium"].indexOf(this.winningBid.bidderCode) > -1 && window[n.b].skinAdUnitCode && (window[n.b].refreshDisallowed.push(this.config.elementId),
                I.disallowSticky = !0)
            }
        }
        ,
        this.richCreativePartnerHandler = function() {}
        ,
        this.getAllAvailableBidsInPool = function() {
            let t = window[n.c].getBidResponsesForAdUnitCode(this.config.elementId).bids.filter((function(t) {
                return t && (t.status && !("rendered" === t.status) || !t.status)
            }
            ))
              , e = (new Date).getTime();
            return t.filter((function(t) {
                return t.responseTimestamp + 1e3 * Object(s.h)(t) > e
            }
            ))
        }
        ,
        this.multipleBidderBidsInPool = function() {
            let t = this.getAllAvailableBidsInPool().map((function(t) {
                return t.bidderCode
            }
            ));
            return t.length > new Set(t).size
        }
        ,
        this.logImpressionToBQ = function(t, e) {
            let i, r = this.getWinningBidEstimatedValue(t);
            if (e = void 0 !== e ? e : {},
            "amazon" === t) {
                let t;
                try {
                    t = this.amazonTargeting.amznbid
                } catch (e) {
                    this.cachedAmazonBid && (t = this.cachedAmazonBid.amznbid)
                }
                t && t.length && (i = t),
                r = o.g.getZZBidVal(r, i)
            }
            t = void 0 !== t ? t : "unfilled",
            Object(a.a)(`Winning ${this.impressionType} impression for ${this.config.elementId}: ${t} at ${r}`);
            let d = {}
              , c = Object(s.o)();
            if (this.winningBid && this.winningBid.bidderCode === t) {
                try {
                    d.addomain = this.winningBid.adserverTargeting.hb_adomain,
                    d.creative_id = this.winningBid.adserverTargeting.hb_crid,
                    d.ad_id = this.winningBid.adId
                } catch (t) {}
                c = this.winningBid.requestId
            }
            let g = this.getSecondBid();
            g && (d.secondbid_bidder = g.bidderCode,
            d.secondbid_bid = g.originalCpm),
            "video" === this.media && (d.ad_length = this.currentAdDuration),
            this.confiantRefreshed && (d.confiant_refreshed = !0);
            try {
                let t = !1;
                void 0 !== window.eh2 && (t = !0),
                void 0 !== window.lngtdAuthd && (t = !0),
                d.authenticated = t
            } catch (t) {}
            this.currentImpressionId = c,
            this.winningBid ? d.bidfloor = this.getFloorForEnv(this.winningBid.auctionId, !0) : d.bidfloor = this.getFloorForEnv(this.currentAuctionId, !0),
            l.a.dropBidderCode && (d.dropped_bidder = l.a.dropBidderCode);
            try {
                let t = h.a.getPrebidUserIdsDefined();
                d.user_ids = t.join("|"),
                h.a.currentEnrichTestId && (d.enrich_test = h.a.currentEnrichTestId),
                d.enr_li = u.c.getLiModuleEnabled(),
                d.enr_op = l.a.testGroups.optable
            } catch (t) {}
            d.raw_impression_count = this.allImpressionCount,
            d = Object.assign({}, d, e),
            d = Object.assign({}, d, u.c.getExtraLogging());
            let p = {};
            window[n.b].accountFunctions.extraLogging && "function" == typeof window[n.b].accountFunctions.extraLogging && (p = window[n.b].accountFunctions.extraLogging()),
            d = Object.assign({}, d, p);
            try {
                let t = this.getAllAvailableBidsInPool().map(t => t.requestId);
                d.pool_bids = t.join("|")
            } catch (t) {}
            let f = {
                winning_bidder: t,
                winning_bid: r,
                unit: this.config.gamPath,
                auction_type: this.impressionType,
                media: this.media,
                refresh_count: this.filledImpressionCount,
                encrypted_bid: i,
                uid: c
            };
            Object(a.e)("impression", Object(a.b)(), f, d)
        }
        ,
        this.matchHeightWithParentOrVerticallyCenter = function(t, e) {
            let i = document.getElementById(t);
            if (i)
                if (this.overrideParentSize) {
                    document.getElementById(e).style.height = i.offsetHeight + "px"
                } else
                    try {
                        let t = document.getElementById(e)
                          , n = i.style.top;
                        n = n ? parseInt(n.replace("px", "")) : 0;
                        let o = (t.offsetHeight - i.offsetHeight) / 2;
                        i.style.top = n + o + "px"
                    } catch (t) {}
        }
        ,
        this.handleSlotRenderEnded = function() {
            this.parentElementId && this.matchHeightWithParentOrVerticallyCenter(this.config.elementId, this.parentElementId)
        }
        ,
        this.clearThirdPartyCreativeContainers = function() {}
        ,
        this.shouldSleepBidder = function(t) {
            let e = !1;
            if (o.a.getConfig("account.shouldFilterNonActiveBidders")) {
                let i, n, s = o.a.getConfig("account.smartRequestSettings");
                if (s.hasOwnProperty(o.g.country) ? i = s[o.g.country] : s.hasOwnProperty("row") && (i = s.row),
                s.hasOwnProperty("never_sleep_bidders") && (n = s.never_sleep_bidders,
                Array.isArray(n) && n.includes(t)))
                    return !1;
                let r = {
                    video: 3,
                    banner: 3,
                    disabledTimeQty: 12e4,
                    lastBidAgeMax: 9e4
                };
                i && (r.video = i.video || 3,
                r.banner = i.banner || 3,
                r.disabledTimeQty = i.disabledTimeQty || 12e4,
                r.lastBidAgeMax = i.lastBidAgeMax || 9e4);
                try {
                    let i = r.banner;
                    this.config.mediaTypes.hasOwnProperty("video") && (i = r.video);
                    let n = this.getBiddingActivity(t)
                      , o = n.emptyAuctionCount
                      , s = n.disabled
                      , a = n.lastBid;
                    if (s) {
                        Date.now() - s >= r.disabledTimeQty ? this.enableBidder(t) : e = !0
                    } else {
                        let n = Date.now() - a;
                        a && n < r.lastBidAgeMax || o >= i && (this.disableBidder(t),
                        e = !0)
                    }
                } catch (t) {}
            }
            return "Edge" === o.g.getBrowser() && "triplelift" === t && "video" === this.media || e
        }
        ,
        this.getUnitBidderKey = function(t) {
            return ["lngtd", this.config.uid, t, "ba"].join("-")
        }
        ,
        this.persistSmartRequestAcrossSession = function() {
            try {
                return !o.a.getConfig("account.smartRequestSettings").hasOwnProperty("limitToPageview")
            } catch (t) {
                return !0
            }
        }
        ,
        this.setBiddingActivity = function(t, e) {
            if (Object(s.i)() && this.persistSmartRequestAcrossSession()) {
                let i = this.getUnitBidderKey(t)
                  , n = this.getBiddingActivity(t)
                  , o = Object.assign(n, e);
                window.sessionStorage.setItem(i, JSON.stringify(o))
            } else {
                this.getBiddingActivity(t);
                for (const [i,n] of Object.entries(e))
                    this.biddersActivity[t][i] = n
            }
        }
        ,
        this.getBiddingActivity = function(t) {
            if (Object(s.i)() && this.persistSmartRequestAcrossSession()) {
                let e = this.getUnitBidderKey(t);
                if (!window.sessionStorage.getItem(e)) {
                    let t = {
                        emptyAuctionCount: 0,
                        lastBid: null,
                        disabled: null
                    };
                    window.sessionStorage.setItem(e, JSON.stringify(t))
                }
                return JSON.parse(window.sessionStorage.getItem(e))
            }
            return this.biddersActivity.hasOwnProperty(t) || (this.biddersActivity[t] = {},
            this.biddersActivity[t].emptyAuctionCount = 0,
            this.biddersActivity[t].lastBid = null,
            this.biddersActivity[t].disabled = null),
            this.biddersActivity[t]
        }
        ,
        this.disableBidder = function(t) {
            let e = {
                disabled: Date.now()
            };
            this.setBiddingActivity(t, e)
        }
        ,
        this.enableBidder = function(t) {
            this.setBiddingActivity(t, {
                emptyAuctionCount: 0,
                disabled: null
            })
        }
        ,
        this.logBidActivity = function(t) {
            let e = {
                emptyAuctionCount: 0,
                lastBid: Date.now(),
                disabled: null
            };
            this.setBiddingActivity(t, e)
        }
        ,
        this.logNoBidActivity = function(t) {
            let e = {
                emptyAuctionCount: this.getBiddingActivity(t).emptyAuctionCount += 1
            };
            this.setBiddingActivity(t, e)
        }
        ,
        this.buildCloseCss = function(t, e, i, n, o, s, r) {
            return `#${t} {\n                    cursor:pointer;\n                    background-size:contain;\n                    background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAGxlWElmTU0AKgAAAAgAAwESAAMAAAABAAEAAAExAAIAAAAQAAAAModpAAQAAAABAAAAQgAAAABTaG90d2VsbCAwLjI4LjQAAAOgAQADAAAAAQABAACgAgAEAAAAAQAAACCgAwAEAAAAAQAAACAAAAAAAx1+rAAAAtNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDYuMC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MzI8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MzI8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpJbWFnZUhlaWdodD4zMjwvdGlmZjpJbWFnZUhlaWdodD4KICAgICAgICAgPHRpZmY6SW1hZ2VXaWR0aD4zMjwvdGlmZjpJbWFnZVdpZHRoPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPlNob3R3ZWxsIDAuMjguNDwveG1wOkNyZWF0b3JUb29sPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KejbhCAAABO5JREFUWAnNlktMnFUUx2cGRxQjykxSNGwMHWEhE1BjtE2MU1ttpxoSmxDDYyxhgcbEhamJTeyChbpp1VXVsCAgrwWJJvgCbSzdtK6sDQ0LnKLRFTYy4osAMuPv3N7zeedjvhlY6U3ud8/rnvO/957v3BsK/cctvNv4AwMDkaWlpcTW1tbeQqEQk/nhcHgFOtvU1HQNfX43PncKINzd3f0Ejo/TD9PjAUF+AcwMupGxsbFzjIUAO09cEUAmk3mc1Z2h3+/N2hnxDXNemZiYOF/OPBBAR0fHzbS3mfwiPdCunHN0YCic3dzcPDE1NbVRyrak476+vtvX19enmZDyTZItvUT/jH6FvkyXVk+gNrY/Db2P7vd7fmNjox0Qf4ix2/yGoXQ6XR2LxeQcU46hBP6Yfmp8fHzekW8jyZUkQN4A0NMoXf8C4oh/J27yeyC4bHvKka/h7HnOctSRBZIWYDtAjmP0Pv0Wa3wgGo2+Bf2S5c3gIgxJwuXzeclelUvwpyolkuvQpa2/T5EpCNwVDrr+Is6EMMEFoQYXY1m5l8WsqjaVSm3bNfUhOskf5UdHR7+CfoEuRyiN0wmfkdFwfDwAXV1dT8K3qYJx2t12gr+JbKWhoeFHVvawY2fIzs7Ofeh+Inlz2L6ueo5khKCfKM/4QE9PzyHlPQAYyZlpy0cikVPK8EveAf0qvYp+Nzs1S5BHVC/BsZfEvcvanHR3gp18DbnugkzzYhkAUl4RSoXTdontu6pMXV3dX9DXlWcUQDMCwgle6+ivU67XlLeJ+bXyADpiY944gmw2ey9KU9fFiN2Q/9xrg4ODm8iOIfjNE1oQduVu8FV26Njc3Nzfjq1UJNdnfHFxca/o9QgSrjEOvnV5oantFwEhhcYPwh88PTk5KcWqqDG3yCe8iWkAgK6uyPrfClckDgChNrLyksGtgVZNtTcxdQdUWHHkGnaTqcie4wjUFRk6jAHAduQcmZD1Pt6wAQmnpl5iqsA3+n2amAYAq7rmGrMStx4YVUDwVZT+nJgpVSc4ZtdnoaqqysQ0AJqbmxdxtOKAkGTzWn9/fxRQHyLYlnClEpNc+MhfMa2d+lxpbGzMCmMA2GfUrGpBu58V36d8Lpergd6jPKOXcAGJuYcAt6o99SIJLde0tll9uhkAIgXhB6pljMB75ZQrdBX+NHJ57y37s90B8bO1OT00NPQ7tDbxpfVfEnVEFSoUXt59lxlbrZKNKGS4D8YtH+rt7b2TV9KfUphU5o5yVNz5tw0PD/+qcu6YDOAloIkFfRnAD8KbP8YFEALAQRRfqjHjGhOOMmEOeteN4AeYL9exHkeBXDpkb0njTy4Xr83Pz3/f2toqv8tDVhhlfDaZTP6AruxLyHNiCbvySVgvOPS7LOasa1sEQBRcqedqamoehbxHeFqUVTwDiLaWlparNPdSumHhfPkFW7AdZM5JmeuoLnA8mYWFhS1H5iWGK5OjqMXBNDnwWJGCJER+Ednn9r5Ytvp6qR3YH4XfT3ePVs76QnV1dbsvMc1U19AI9COP03g8/g5O5UUTaKf2AaMEf4+Vv+x/jKp9Rcc2MeWppn+Hzi03SuAr7MoJN+FKTagIwE4K84w6zG48By8Pl1gJZxJU6vssdiP8vl9Ai6xs2ykAz4m8ZOwDJkEgc6WSFxI4m0gkvtMK5034vxP/ADsp+IPGMGBJAAAAAElFTkSuQmCC");\n                    background-color:rgba(255,255,255,0.5);\n                    border-radius: 50% 50% 50% 50%;\n                    width:${e};\n                    height:${e};\n                    position:absolute;\n                    top:${i};\n                    right:${n};\n                    bottom:${o};\n                    left:${s};\n                    margin-left:${r};\n                    z-index:9;\n                    display:none;\n                    box-shadow:0 0 6px rgba(255,255,255,0.5);\n                }`
        }
        ,
        this.cleanUnit(),
        this.modifyConfig()
    }
}
, function(t, e, i) {
    "use strict";
    i.d(e, "p", (function() {
        return h
    }
    )),
    i.d(e, "r", (function() {
        return g
    }
    )),
    i.d(e, "s", (function() {
        return p
    }
    )),
    i.d(e, "m", (function() {
        return f
    }
    )),
    i.d(e, "j", (function() {
        return m
    }
    )),
    i.d(e, "k", (function() {
        return b
    }
    )),
    i.d(e, "n", (function() {
        return w
    }
    )),
    i.d(e, "q", (function() {
        return y
    }
    )),
    i.d(e, "v", (function() {
        return A
    }
    )),
    i.d(e, "d", (function() {
        return C
    }
    )),
    i.d(e, "w", (function() {
        return _
    }
    )),
    i.d(e, "h", (function() {
        return S
    }
    )),
    i.d(e, "g", (function() {
        return O
    }
    )),
    i.d(e, "i", (function() {
        return k
    }
    )),
    i.d(e, "f", (function() {
        return T
    }
    )),
    i.d(e, "b", (function() {
        return E
    }
    )),
    i.d(e, "c", (function() {
        return x
    }
    )),
    i.d(e, "e", (function() {
        return B
    }
    )),
    i.d(e, "o", (function() {
        return j
    }
    )),
    i.d(e, "l", (function() {
        return P
    }
    )),
    i.d(e, "t", (function() {
        return U
    }
    )),
    i.d(e, "a", (function() {
        return F
    }
    )),
    i.d(e, "u", (function() {
        return R
    }
    ));
    var n = i(2)
      , o = i(1)
      , s = i(0)
      , r = i(4)
      , a = i(12)
      , d = i(3)
      , c = i(7)
      , l = i(6);
    const u = new Event("userInteraction")
      , h = new Event("pauseRefreshUserInteraction")
      , g = new Event("restartRefresh");
    function p() {
        Object(n.a)("Scroll handler called");
        let t = document.documentElement.scrollTop || document.body.scrollTop;
        t > o.g.lastScrollTop ? o.g.currentScrollDirection = "down" : o.g.currentScrollDirection = "up",
        o.g.lastScrollTop = t <= 0 ? 0 : t,
        document.dispatchEvent(u)
    }
    function f() {
        Object(n.a)("Focus handler called"),
        document.dispatchEvent(u)
    }
    function m() {
        Object(n.a)("Blur handler called")
    }
    function b() {
        Object(n.a)("Click handler called"),
        document.dispatchEvent(u)
    }
    function w() {
        window[s.b].refreshPaused && (Object(n.a)("Mousemove/touch handler called"),
        document.dispatchEvent(u))
    }
    let v;
    function y() {
        Object(n.a)("Resize handler called", window.innerWidth, o.g.currentWindowWidth),
        window.innerWidth !== o.g.currentWindowWidth && o.g.refreshOnResize && (o.g.currentWindowWidth = window.innerWidth,
        clearTimeout(v),
        v = setTimeout((function() {
            window[s.b].resetAndRunAuction("resize")
        }
        ), 1e3))
    }
    function I(t) {
        let e = t.type;
        Object(n.a)("Human check handler called by ", t),
        o.g.isHuman = !0,
        document.removeEventListener(e, I, !1)
    }
    function A() {
        ["keyup", "mousemove", "swipe", "touchstart", "touchmove", "touchend", "scroll", "gesture"].forEach((function(t) {
            document.addEventListener(t, I, !1)
        }
        ))
    }
    function C(t) {
        try {
            let e = t.bidderRequests[0].bids[0].adUnitCode
              , i = r.c.getUnitFromCode(e)
              , o = {};
            try {
                let t = window[s.c].getBidResponsesForAdUnitCode(e).bids.filter((function(t) {
                    return void 0 === t.status
                }
                )).map(t => t.requestId);
                o.pool_bids = t.join("|")
            } catch (t) {}
            let a = {
                auction_id: t.auctionId,
                timeout: t.timeout,
                start: t.timestamp,
                end: t.auctionEnd,
                unit: i.config.gamPath,
                floor: i.getFloorForEnv(t.auctionId, !0),
                bids_requested: t.bidderRequests.length,
                bids_requested_bidders: t.bidderRequests.map(t => t.bidderCode),
                bids_requested_s2s_bidders: t.bidderRequests.filter(t => "s2s" === t.src).map(t => t.bidderCode),
                bids_received: t.bidsReceived.length,
                bids_received_s2s_bidders: t.bidsReceived.filter(t => "s2s" === t.source).map(t => t.bidderCode),
                bids_rejected: t.bidsRejected.length,
                no_bids: t.noBids.length,
                no_bids_bidders: t.noBids.map(t => t.bidder)
            };
            Object(n.e)("auction", Object(n.b)(), a, o)
        } catch (t) {}
    }
    function _(t) {
        try {} catch (t) {}
    }
    function S(t) {
        let e = t.bidderCode
          , i = t.adUnitCode
          , o = t.auctionId;
        void 0 === t.originalCpm && (t.originalCpm = t.cpm);
        let s = t.originalCpm
          , a = e + "_bid";
        Object(n.a)("bid response", o, i, a, s, t);
        let d = r.c.getUnitFromCode(i);
        if (d) {
            let i = d.getFloorForEnv(o, !0);
            if (i && s < i)
                return Object(n.c)(t),
                void d.logNoBidActivity(e);
            try {
                d.logBidActivity(e)
            } catch (t) {
                return
            }
        }
        try {
            (["outstream", "outstream-in-banner", "outstream-with-content", "moment-video", "video-third-party", "video"].indexOf(d.config.unitType) > -1 || d.alwaysCacheBids) && (t.vastUrl && t.adserverTargeting.hb_cache_id || (d.bidCachePromises[t.requestId] = d.cacheBidPromise(t)))
        } catch (t) {}
        Object(n.d)(t)
    }
    function O(t) {
        t.bids.forEach((function(e) {
            try {
                let i = r.c.getUnitFromCode(e.adUnitCode);
                t.bidderCode,
                i.config.gamPath,
                i.getFloorForEnv(e.auctionId, !0),
                i.impressionType,
                e.auctionId,
                e.bidId
            } catch (t) {}
        }
        ))
    }
    function k(t) {
        t.forEach((function(t) {
            Object(n.a)("bid timeout", t.bidder, t);
            try {
                let e = r.c.getUnitFromCode(t.adUnitCode)
                  , i = {
                    bidder: t.bidder,
                    unit: e.config.gamPath,
                    floor: e.getFloorForEnv(t.auctionId, !0),
                    auction_type: e.impressionType,
                    timeout: Object(o.e)(),
                    auction_id: t.auctionId,
                    uid: t.bidId
                };
                Object(n.e)("bid_timeout", Object(n.b)(), i, null)
            } catch (t) {}
        }
        ))
    }
    function T(t) {
        Object(n.a)("bid error", t.error, t.bidderRequest),
        t.bidderRequest.bids.forEach((function(e) {
            try {
                let i, o = r.c.getUnitFromCode(e.adUnitCode), s = {
                    bidder: t.bidderRequest.bidderCode,
                    unit: o.config.gamPath,
                    auction_type: o.impressionType,
                    auction_id: e.auctionId,
                    uid: e.bidId
                };
                try {
                    i = {
                        response: t.error.response,
                        response_text: t.error.responseText,
                        status: t.error.status,
                        status_text: t.error.statusText
                    }
                } catch (t) {}
                Object(n.e)("bid_error", Object(n.b)(), s, i)
            } catch (t) {}
        }
        ))
    }
    function E(t) {
        Object(n.a)("ad render failed", t.reason, t.message);
        const e = {
            reason: t.reason,
            message: t.message
        };
        Object(n.e)("ad_render_failure", Object(n.b)(), null, e)
    }
    function x(t) {
        Object(n.a)("ad render success", t.bid, t.adId);
        const e = {
            uid: t.bid.requestId,
            ad_id: t.adId
        };
        Object(n.e)("ad_render_success", Object(n.b)(), null, e)
    }
    function B(t) {
        try {
            t.auctionId,
            t.timeout,
            t.timestamp
        } catch (t) {}
    }
    function j(t) {
        let e = t.bidder
          , i = t.adUnitCode;
        try {
            r.c.getUnitFromCode(i).logNoBidActivity(e)
        } catch (t) {}
    }
    function P(t) {
        o.a.getConfig("account.shouldFilterNonActiveBidders") && t.forEach((function(t) {
            let e = []
              , i = r.c.getUnitFromId(t.elementId);
            t.bids.forEach((function(o) {
                i.shouldSleepBidder(o.bidder) ? Object(n.a)(`Filtering out bidder ${o.bidder} for unit ${t.elementId}`) : e.push(o)
            }
            )),
            t.bids = e
        }
        ))
    }
    function U(t) {
        t.forEach((function(t) {
            let e = r.c.getUnitFromId(t.elementId);
            if (e) {
                let i = e.getFloorForEnv(e.currentAuctionId, !0);
                try {
                    let e = {
                        floorMin: i,
                        currency: "USD",
                        enforcement: {
                            enforcePBS: !0
                        },
                        data: {
                            values: {
                                "*": i
                            }
                        }
                    };
                    t.ortb2Imp.ext.prebid = {
                        floors: e
                    },
                    t.ortb2Imp.bidfloor = i,
                    t.ortb2Imp.bidfloorcur = "USD"
                } catch (t) {}
                t.bids.forEach((function(t) {
                    t.floorData = {
                        floorMin: i
                    },
                    "rubicon" === t.bidder && e.config.mediaTypes.video && (t.params.floor = i),
                    "appnexus" === t.bidder && (t.params.reserve = i),
                    "openx" === t.bidder && (t.params.customFloor = i),
                    "ttd" === t.bidder && (t.params.bidfloor = i),
                    t.getFloor = function() {
                        return {
                            floor: i,
                            currency: "USD"
                        }
                    }
                }
                ))
            }
        }
        ))
    }
    function F(t) {
        let e = t.slot.getSlotElementId()
          , i = r.c.getUnitFromId(e);
        if (i) {
            Object(n.a)("Viewability met for unit (GPT)", e, t);
            try {
                i.metGPTViewability = !0
            } catch (t) {
                Object(n.a)("Unit is not defined in LNGTD code:", e)
            }
            try {
                i.markAsViewable()
            } catch (t) {}
        }
    }
    function R(t) {
        try {
            let e = t.slot.getAdUnitPath()
              , i = t.slot.getSlotElementId()
              , u = r.c.getUnitFromId(i);
            if (u || (u = r.c.getUnitFromPath(e)),
            !u)
                return void Object(n.a)(`Cannot handle slotRenderEnded event for ${e} / ${i} because it cannot be found.`);
            if (u.handleSlotRenderEnded(),
            document.dispatchEvent(new CustomEvent("unitRenderComplete",{
                detail: {
                    unitId: i,
                    winningBid: u.winningBid,
                    originalEvent: t
                }
            })),
            t.isEmpty)
                u.winningBid && o.a.getConfig("account.deliverPrebidIfNoGAMFill") ? a.a.renderPrebidWinningBidWithoutGAM(u.winningBid, i) : (u.handleUnfilledImpression(),
                (Object(d.e)("taglesstest") || c.b.iabConsent.allRejected) && (l.a.makeTaglessRequest(u.config, i),
                u.config.refresh = !1));
            else {
                try {
                    if (t.elementId) {
                        let e = document.getElementById(t.elementId)
                          , i = e.getElementsByTagName("iframe")[0];
                        e.ariaLabel = "Advertisement",
                        i.ariaLabel = "Advertisement"
                    }
                } catch (t) {}
                u.handleFilledImpression(t),
                window[s.b].accountFunctions.customRenderHandler && "function" == typeof window[s.b].accountFunctions.customRenderHandler && window[s.b].accountFunctions.customRenderHandler(u.winningBid)
            }
        } catch (t) {
            Object(n.a)(t)
        }
    }
}
, function(t, e, i) {
    "use strict";
    i.d(e, "a", (function() {
        return l
    }
    ));
    var n = i(3)
      , o = i(1)
      , s = i(2)
      , r = i(11)
      , a = i(0)
      , d = i(5)
      , c = i(9);
    const l = new function() {
        this.initialized = !1,
        this.slots = [],
        this.loaded = !1,
        this.logAllRequests = !1,
        this.additionalTargeting = {},
        this.useSafeFrames = !1,
        this.safeFramesExcludePartners = [],
        this.gptScriptPath = "//securepubads.g.doubleclick.net/tag/js/gpt.js",
        this.setGlobals = function() {
            window.googletag = window.googletag || {},
            window.googletag.cmd = window.googletag.cmd || []
        }
        ,
        this.initialize = function() {
            this.initialized ? this.reInitialize() : (this.defineBaseSettings(),
            this.initialized = !0)
        }
        ,
        this.reInitialize = function() {
            this.setBaseTargeting()
        }
        ,
        this.resetUnits = function() {
            let t = this;
            googletag.cmd.push((function() {
                googletag.destroySlots(),
                googletag.pubads().clearTargeting();
                for (let e in t.slots)
                    if (t.slots.hasOwnProperty(e))
                        try {
                            let t = document.getElementById(e);
                            if (t)
                                for (let e = 0; e < t.children.length; e++)
                                    try {
                                        t.children[e].remove()
                                    } catch (t) {}
                        } catch (t) {}
                t.slots = {}
            }
            ))
        }
        ,
        this.loadScript = function(t) {
            let e = this;
            void 0 !== t && (this.gptScriptPath = t),
            !e.loaded && o.a.getConfig("account.useGAM") && Object(n.k)(this.gptScriptPath, (function() {
                e.loaded = !0
            }
            ), !0)
        }
        ,
        this.getTaxonomies = function() {
            let t = null;
            if (window[a.b].accountFunctions.getOrtb2Values && "function" == typeof window[a.b].accountFunctions.getOrtb2Values) {
                const e = window[a.b].accountFunctions.getOrtb2Values();
                let i = []
                  , n = [];
                if (e.site && e.site.cat)
                    for (let t = 0; t < e.site.cat.length; t++) {
                        let o = e.site.cat[t];
                        o.indexOf("IAB") ? (o = o.replace("IAB", ""),
                        i.push(o)) : n.push(o)
                    }
                (i.length || n.length) && (t = {},
                i.length && (t.IAB_CONTENT_1 = {
                    values: i
                }),
                n.length && (t.IAB_CONTENT_2_2 = {
                    values: n
                }))
            }
            return t
        }
        ,
        this.defineBaseSettings = function() {
            let t = this;
            googletag.cmd.push((function() {
                if (googletag.pubads().enableSingleRequest(),
                googletag.pubads().disableInitialLoad(),
                googletag.enableServices(),
                googletag.pubads().addEventListener("impressionViewable", d.a),
                googletag.pubads().addEventListener("slotRenderEnded", d.u),
                t.useSafeFrames && "force" === t.useSafeFrames) {
                    const t = {
                        allowOverlayExpansion: !0,
                        allowPushExpansion: !0,
                        sandbox: !0
                    };
                    googletag.pubads().setForceSafeFrame(!0),
                    googletag.pubads().setSafeFrameConfig(t)
                }
            }
            )),
            this.setBaseTargeting()
        }
        ,
        this.setBaseTargeting = function() {
            let t = this;
            googletag.cmd.push((function() {
                googletag.pubads().setTargeting("session-depth", o.h.sessionDepth.toString()),
                googletag.pubads().setTargeting("lngtd_version", a.d),
                t.setAdditionalTargeting()
            }
            ))
        }
        ,
        this.resetSlotTargeting = function(t) {
            let e = this;
            googletag.cmd.push((function() {
                googletag.pubads().clearTargeting(),
                e.slots[t.config.elementId].clearTargeting(),
                e.setBaseTargeting()
            }
            ))
        }
        ,
        this.setAdditionalTargeting = function() {
            let t = this;
            this.defineAdditionalTargeting(),
            Object.keys(t.additionalTargeting).length > 0 && googletag.cmd.push((function() {
                Object.keys(t.additionalTargeting).forEach((function(e) {
                    try {
                        googletag.pubads().setTargeting(e, t.additionalTargeting[e].toString())
                    } catch (t) {}
                }
                ))
            }
            )),
            r.c.setGAMTargeting(),
            o.a.getDebug() && googletag.cmd.push((function() {
                googletag.pubads().setTargeting(a.a, "true")
            }
            ))
        }
        ,
        this.defineAdditionalTargeting = function() {}
        ,
        this.setAdditionalSlotTargeting = function(t) {}
        ,
        this.initializeUnit = function(t) {
            this.defineGPTSlotForUnit(t),
            this.defineSlotCustom(t)
        }
        ,
        this.defineSlotCustom = function(t) {}
        ,
        this.defineOutOfPageUnit = function(t) {
            let e = this;
            googletag.cmd.push((function() {
                let i = googletag.defineOutOfPageSlot(t.config.gamPath, t.config.elementId).addService(googletag.pubads());
                if (!document.getElementById(t.config.elementId)) {
                    var n = document.createElement("div");
                    n.id = t.config.elementId,
                    n.style.cssText = "width:100%;height:0px;",
                    document.body.appendChild(n)
                }
                i && (googletag.display(i),
                e.slots[t.config.elementId] = i,
                Object(s.a)("GPT OOP created", i))
            }
            ))
        }
        ,
        this.defineInterstitialUnit = function(t) {
            let e = this;
            googletag.cmd.push((function() {
                let i = googletag.defineOutOfPageSlot(t.config.gamPath, googletag.enums.OutOfPageFormat.INTERSTITIAL).addService(googletag.pubads());
                i && (googletag.display(i),
                e.slots[t.config.elementId] = i,
                Object(s.a)("GPT interstitial created", i),
                e.auctionAndCallGPTInterstitial(t, i))
            }
            ))
        }
        ,
        this.auctionAndCallGPTInterstitial = function(t, e) {
            Object(s.a)("GPT interstitial auction running", t, e);
            let i = Object(n.o)()
              , r = function() {
                l.setTargetingForAdUnit(t),
                googletag.cmd.push((function() {
                    Object(s.a)("GPT interstitial calling", e),
                    googletag.pubads().refresh([e])
                }
                ))
            };
            window[a.c].que.push((function() {
                window[a.c].requestBids({
                    adUnitCodes: [t.config.code],
                    bidsBackHandler: r,
                    timeout: Object(o.e)(),
                    auctionId: i
                })
            }
            ))
        }
        ,
        this.defineGPTSlotForUnit = function(t) {
            let e = this;
            e.slots.hasOwnProperty(t.config.elementId) || "" === t.config.gamPath || googletag.cmd.push((function() {
                const i = ["dynamic-parent", "outstream-in-banner", "outstream-with-content"];
                try {
                    if ("out-of-page" === t.config.unitType)
                        e.defineOutOfPageUnit(t);
                    else if ("interstitial" === t.config.unitType)
                        window.innerWidth < 2500 && e.defineInterstitialUnit(t);
                    else if (i.indexOf(t.config.unitType) > -1)
                        ;
                    else {
                        let i = googletag.defineSlot(t.config.gamPath, t.config.gamSizes, t.config.elementId).addService(googletag.pubads());
                        i && (e.slots[t.config.elementId] = i)
                    }
                } catch (e) {
                    Object(s.a)(e),
                    Object(s.a)("Error defining GPT slot for unit", t.config)
                }
            }
            ))
        }
        ,
        this.defineGPTSlotWithinAdUnitAndDisplay = function(t) {
            let e = this;
            googletag.cmd.push((function() {
                let i = googletag.defineSlot(t.gamPath, t.gamSizes, t.elementId).addService(googletag.pubads());
                i && (e.slots[t.elementId] = i,
                e.setAdditionalTargeting(),
                googletag.pubads().refresh([i]),
                e.logRequestsToBQ([i]))
            }
            ))
        }
        ,
        this.setSlotTargeting = function(t, e) {
            let i = this.slots[t];
            if (i)
                for (const [t,n] of Object.entries(e))
                    i.setTargeting(t, n)
        }
        ,
        this.doPubAdsRefresh = function(t, e) {
            let i = this
              , n = [];
            Object(s.a)("GAM being called for units:", t),
            googletag.cmd.push((function() {
                try {
                    t.forEach((function(t) {
                        let e = document.getElementById(t.config.elementId);
                        e && (e.style.textAlign = "center",
                        e.dataset.state = "loaded");
                        let o = i.slots[t.config.elementId];
                        "init" === t.impressionType && googletag.display(o),
                        i.setTargetingForAdUnit(t),
                        n.push(o)
                    }
                    ))
                } catch (t) {
                    Object(s.a)("Error with GPT prep", t)
                }
                if (n.length > 0) {
                    let t = c.a.getUserPPID();
                    t && googletag.pubads().setPublisherProvidedId(t),
                    googletag.pubads().refresh(n),
                    i.logRequestsToBQ(n)
                }
            }
            ))
        }
        ,
        this.logRequestsToBQ = function(t) {
            l.logAllRequests && t.forEach((function(t) {
                let e = {
                    path: t.getAdUnitPath(),
                    element_id: t.getSlotElementId()
                };
                Object(s.e)("gam_request", Object(s.b)(), null, e)
            }
            ))
        }
        ,
        this.getUPRForAdUnit = function(t) {
            let e = t.getFloorForEnv(t.currentAuctionId, !0)
              , i = .01
              , n = [.01, .02, .03, .04, .05, .07, .09, .12, .15, .2, .25, .3, .35, .4, .5, 1];
            if (e > 0) {
                let t = n[0]
                  , o = Math.abs(e - t);
                n.forEach((function(t) {
                    let n = Math.abs(e - t);
                    n < o && e > t && (o = n,
                    i = t)
                }
                ))
            }
            return [{
                .01: "lngtd_d_1",
                .02: "lngtd_d_2",
                .03: "lngtd_d_3",
                .04: "lngtd_d_4",
                .05: "lngtd_d_5",
                .07: "lngtd_d_7",
                .09: "lngtd_d_9",
                .12: "lngtd_d_12",
                .15: "lngtd_d_15",
                .2: "lngtd_d_20",
                .25: "lngtd_d_25",
                .3: "lngtd_d_30",
                .35: "lngtd_d_35",
                .4: "lngtd_d_40",
                .5: "lngtd_d_50",
                1: "lngtd_d_100"
            }[i.toString()], i]
        }
        ,
        this.getVideoUPRForAdUnit = function(t) {
            let e = t.getFloorForEnv(t.currentAuctionId, !0)
              , i = .01
              , n = [.01, .02, .03, .04, .05, .07, .09, .12, .15, .2, .25, .3, .35, .4, .5, 1];
            if (e > 0) {
                let t = n[0]
                  , o = Math.abs(e - t);
                n.forEach((function(t) {
                    let n = Math.abs(e - t);
                    n < o && e > t && (o = n,
                    i = t)
                }
                ))
            }
            return [{
                .01: "lngtd_v_1",
                .02: "lngtd_v_2",
                .03: "lngtd_v_3",
                .04: "lngtd_v_4",
                .05: "lngtd_v_5",
                .07: "lngtd_v_7",
                .09: "lngtd_v_9",
                .12: "lngtd_v_12",
                .15: "lngtd_v_15",
                .2: "lngtd_v_20",
                .25: "lngtd_v_25",
                .3: "lngtd_v_30",
                .35: "lngtd_v_35",
                .4: "lngtd_v_40",
                .5: "lngtd_v_50",
                1: "lngtd_v_100"
            }[i.toString()], i]
        }
        ,
        this.setTargetingForAdUnit = function(t) {
            this.setAdditionalTargeting();
            let e = t.getTargetingForGAM();
            this.setSlotTargeting(t.config.elementId, e),
            this.setAdditionalSlotTargeting(t.config.elementId)
        }
        ,
        this.makeTaglessRequest = function(t, e) {
            Object(s.a)("Making tagless call to GAM for:", e, t);
            let i = document.getElementById(e);
            Object(s.a)("Tagless will fill", i);
            let n = {
                adunit: t.gamPath,
                width: t.gamSizes[0][0],
                height: t.gamSizes[0][1],
                targeting: "tagless%3Dtrue"
            };
            !function(t) {
                let e = Math.floor(1e8 * Math.random());
                t.requestUrl = "https://securepubads.g.doubleclick.net/gampad/adx?iu=" + t.adunit + "&sz=" + t.width + "x" + t.height + "&c=" + e + "&tile=1&d_imp=1",
                t.targeting && (t.requestUrl = t.requestUrl + "&t=" + t.targeting)
            }(n),
            function(t) {
                if (t.requestUrl) {
                    const e = new XMLHttpRequest;
                    e.open("GET", t.requestUrl),
                    e.send(),
                    e.onreadystatechange = () => {
                        4 === e.readyState && (t.adData = e.responseText,
                        t.adData && function(t) {
                            let e = document.createElement("iframe");
                            e.style.width = t.width + "px",
                            e.style.height = t.height + "px";
                            try {
                                i.innerHTML = "",
                                i.appendChild(e),
                                e.contentWindow.document.open(),
                                e.contentWindow.document.write(t.adData),
                                e.contentWindow.document.close()
                            } catch (t) {
                                Object(s.a)("Error fulfilling tagless request", t)
                            }
                        }(t))
                    }
                }
            }(n)
        }
    }
}
, function(t, e, i) {
    "use strict";
    i.d(e, "b", (function() {
        return a
    }
    )),
    i.d(e, "a", (function() {
        return d
    }
    ));
    var n = i(0)
      , o = i(1)
      , s = i(3)
      , r = i(2);
    const a = new function() {
        this.cmpGDPR = null,
        this.cmpCCPA = null,
        this.cmpGPP = null,
        this.cmpLoaded = !1,
        this.geoResolved = !1,
        this.alwaysLoad = !1,
        this.iabConsent = {
            gdpr: "",
            ccpa: "",
            gpp: "",
            allRejected: !1
        },
        this.initialize = function() {
            let t = window.sessionStorage.getItem("lngtd-iabconsent");
            t && (this.iabConsent = JSON.parse(t))
        }
        ,
        this.gdprCountries = ["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "GB", "CH", "NO", "IS", "LI", "AD", "RS", "UA", "RU", "AL"],
        this.usPrivacyStates = ["CA", "CO", "CT", "OR", "UT", "TX", "VA"],
        this.setIabConsent = function(t, e) {
            t && e && (a.iabConsent[t] = e),
            s.i && window.sessionStorage.setItem("lngtd-iabconsent", JSON.stringify(this.iabConsent))
        }
        ,
        this.getIabConsent = function(t) {
            return t ? this.iabConsent[t] : null
        }
        ,
        this.waitForCMP = function(t) {
            let e = this;
            if (a.cmpGPP) {
                const i = setInterval((function() {
                    window.__gpp && (clearInterval(i),
                    __gpp("addEventListener", (function(i) {
                        if (i.pingData && "ready" === i.pingData.signalStatus && !a.cmpLoaded && (a.cmpLoaded = !0,
                        t()),
                        "sectionChange" === i.eventName)
                            try {
                                const t = lngtd.consent.getIabConsent("gpp");
                                t && t.parsedSections[Object.keys(t.parsedSections)[0]].SaleOptOut !== i.pingData.parsedSections[Object.keys(i.pingData.parsedSections)[0]].SaleOptOut ? (e.setIabConsent("gpp", i.pingData),
                                window[n.b].resetAndRunAuction()) : e.setIabConsent("gpp", i.pingData)
                            } catch (t) {
                                Object(r.a)("Error checking new consent against existing", t),
                                e.setIabConsent("gpp", i.pingData)
                            }
                    }
                    )))
                }
                ), 100)
            } else if (a.cmpCCPA) {
                const e = setInterval((function() {
                    window.__uspapi && (clearInterval(e),
                    a.cmpLoaded = !0,
                    t())
                }
                ), 100)
            }
            if (a.cmpGDPR) {
                const i = setInterval((function() {
                    if (window.__tcfapi) {
                        clearInterval(i),
                        a.cmpLoaded = !0;
                        const n = function(i, n) {
                            !i || "useractioncomplete" !== i.eventStatus && "tcloaded" !== i.eventStatus || (i.purpose && 0 === Object.keys(i.purpose.consents).length && e.setIabConsent("allRejected", !0),
                            e.setIabConsent("gdpr", i),
                            t())
                        };
                        window.__tcfapi("addEventListener", 2, n)
                    }
                }
                ), 100)
            }
        }
        ,
        this.updateConsentGeos = function(t, e, i) {
            t && "EU" !== t && (this.cmpGDPR = !1),
            e && -1 === this.gdprCountries.indexOf(e) && (this.cmpGDPR = !1),
            e && "US" !== e && (this.cmpCCPA = !1,
            this.cmpGPP = !1),
            e && "US" === e && i && -1 === this.usPrivacyStates.indexOf(i) && (this.cmpCCPA = !1,
            this.cmpGPP = !1),
            e && null !== this.cmpGDPR && null !== this.cmpCCPA && null !== this.cmpGPP || this.attemptToSetStateByAvailableAPIs()
        }
        ,
        this.attemptToSetStateByAvailableAPIs = function() {
            if (this.geoResolved || !o.a.getConfig("account.enableSourcepoint") || Object(s.e)("ignoreCMP") || d.loadStubs(),
            null === this.cmpGDPR && (this.cmpGDPR = !!window.__tcfapi,
            o.g.country && this.gdprCountries.indexOf(o.g.country) > -1 && !window.__tcfapi)) {
                let t = {
                    country: o.g.country,
                    regionState: o.g.regionState,
                    tcfapi: !!window.__tcfapi
                };
                Object(r.e)("consent_issue", Object(r.b)(), null, t)
            }
            if (null === this.cmpCCPA && (this.cmpCCPA = !!window.__uspapi),
            null === this.cmpGPP && (this.cmpGPP = !!window.__gpp,
            o.g.country && "US" === o.g.country && o.g.regionState && this.usPrivacyStates.indexOf(o.g.regionState) > -1 && !window.__gpp)) {
                let t = {
                    country: o.g.country,
                    regionState: o.g.regionState,
                    gpp: !!window.__gpp,
                    uspapi: !!window.__uspapi
                };
                Object(r.e)("consent_issue", Object(r.b)(), null, t)
            }
        }
        ,
        this.cmpApplies = function() {
            return this.cmpGDPR || this.cmpCCPA || this.cmpGPP
        }
        ,
        this.gppOptedOut = function() {
            if (this.cmpApplies() && this.cmpGPP && this.iabConsent.gpp && Object.keys(this.iabConsent.gpp.parsedSections).length)
                for (let t of Object.keys(this.iabConsent.gpp.parsedSections)) {
                    if (1 === this.iabConsent.gpp.parsedSections[t].SaleOptOut)
                        return !0
                }
            return !1
        }
    }
    ;
    const d = new function() {
        this.stubsLoaded = !1,
        this.loadStubs = function() {
            if (!this.stubsLoaded) {
                function t(e) {
                    return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    }
                    : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }
                    )(e)
                }
                this.stubsLoaded = !0,
                function() {
                    for (var e, i, n = [], o = window, s = o; s; ) {
                        try {
                            if (s.frames.__tcfapiLocator) {
                                e = s;
                                break
                            }
                        } catch (e) {}
                        if (s === o.top)
                            break;
                        s = o.parent
                    }
                    e || (function t() {
                        var e = o.document
                          , i = !!o.frames.__tcfapiLocator;
                        if (!i)
                            if (e.body) {
                                var n = e.createElement("iframe");
                                n.style.cssText = "display:none",
                                n.name = "__tcfapiLocator",
                                e.body.appendChild(n)
                            } else
                                setTimeout(t, 5);
                        return !i
                    }(),
                    o.__tcfapi = function() {
                        for (var t = arguments.length, e = new Array(t), o = 0; o < t; o++)
                            e[o] = arguments[o];
                        if (!e.length)
                            return n;
                        "setGdprApplies" === e[0] ? e.length > 3 && 2 === parseInt(e[1], 10) && "boolean" == typeof e[3] && (i = e[3],
                        "function" == typeof e[2] && e[2]("set", !0)) : "ping" === e[0] ? "function" == typeof e[2] && e[2]({
                            gdprApplies: i,
                            cmpLoaded: !1,
                            cmpStatus: "stub"
                        }) : n.push(e)
                    }
                    ,
                    o.addEventListener("message", (function(e) {
                        var i = "string" == typeof e.data
                          , n = {};
                        if (i)
                            try {
                                n = JSON.parse(e.data)
                            } catch (e) {}
                        else
                            n = e.data;
                        var o = "object" === t(n) ? n.__tcfapiCall : null;
                        o && window.__tcfapi(o.command, o.version, (function(t, n) {
                            var s = {
                                __tcfapiReturn: {
                                    returnValue: t,
                                    success: n,
                                    callId: o.callId
                                }
                            };
                            e && e.source && e.source.postMessage && e.source.postMessage(i ? JSON.stringify(s) : s, "*")
                        }
                        ), o.parameter)
                    }
                    ), !1))
                }(),
                function() {
                    var t = window
                      , e = document;
                    function i(e) {
                        var i = "string" == typeof e.data;
                        try {
                            var n = i ? JSON.parse(e.data) : e.data;
                            if (n.__cmpCall) {
                                var o = n.__cmpCall;
                                t.__uspapi(o.command, o.parameter, (function(t, n) {
                                    var s = {
                                        __cmpReturn: {
                                            returnValue: t,
                                            success: n,
                                            callId: o.callId
                                        }
                                    };
                                    e.source.postMessage(i ? JSON.stringify(s) : s, "*")
                                }
                                ))
                            }
                        } catch (n) {}
                    }
                    !function i() {
                        if (!t.frames.__uspapiLocator)
                            if (e.body) {
                                var n = e.body
                                  , o = e.createElement("iframe");
                                o.style.cssText = "display:none",
                                o.name = "__uspapiLocator",
                                n.appendChild(o)
                            } else
                                setTimeout(i, 5)
                    }(),
                    "function" != typeof __uspapi && (t.__uspapi = function() {
                        var t = arguments;
                        if (__uspapi.a = __uspapi.a || [],
                        !t.length)
                            return __uspapi.a;
                        "ping" === t[0] ? t[2]({
                            gdprAppliesGlobally: !1,
                            cmpLoaded: !1
                        }, !0) : __uspapi.a.push([].slice.apply(t))
                    }
                    ,
                    __uspapi.msgHandler = i,
                    t.addEventListener("message", i, !1))
                }(),
                window.__gpp_addFrame = function(t) {
                    if (!window.frames[t])
                        if (document.body) {
                            var e = document.createElement("iframe");
                            e.style.cssText = "display:none",
                            e.name = t,
                            document.body.appendChild(e)
                        } else
                            window.setTimeout(window.__gpp_addFrame, 10, t)
                }
                ,
                window.__gpp_stub = function() {
                    var t = arguments;
                    if (__gpp.queue = __gpp.queue || [],
                    __gpp.events = __gpp.events || [],
                    !t.length || 1 == t.length && "queue" == t[0])
                        return __gpp.queue;
                    if (1 == t.length && "events" == t[0])
                        return __gpp.events;
                    var e = t[0]
                      , i = t.length > 1 ? t[1] : null
                      , n = t.length > 2 ? t[2] : null;
                    if ("ping" === e)
                        i({
                            gppVersion: "1.1",
                            cmpStatus: "stub",
                            cmpDisplayStatus: "hidden",
                            signalStatus: "not ready",
                            supportedAPIs: ["2:tcfeuv2", "5:tcfcav1", "6:uspv1", "7:usnatv1", "8:uscav1", "9:usvav1", "10:uscov1", "11:usutv1", "12:usctv1"],
                            cmpId: 0,
                            sectionList: [],
                            applicableSections: [],
                            gppString: "",
                            parsedSections: {}
                        }, !0);
                    else if ("addEventListener" === e) {
                        "lastId"in __gpp || (__gpp.lastId = 0),
                        __gpp.lastId++;
                        var o = __gpp.lastId;
                        __gpp.events.push({
                            id: o,
                            callback: i,
                            parameter: n
                        }),
                        i({
                            eventName: "listenerRegistered",
                            listenerId: o,
                            data: !0,
                            pingData: {
                                gppVersion: "1.1",
                                cmpStatus: "stub",
                                cmpDisplayStatus: "hidden",
                                signalStatus: "not ready",
                                supportedAPIs: ["2:tcfeuv2", "5:tcfcav1", "6:uspv1", "7:usnatv1", "8:uscav1", "9:usvav1", "10:uscov1", "11:usutv1", "12:usctv1"],
                                cmpId: 0,
                                sectionList: [],
                                applicableSections: [],
                                gppString: "",
                                parsedSections: {}
                            }
                        }, !0)
                    } else if ("removeEventListener" === e) {
                        for (var s = !1, r = 0; r < __gpp.events.length; r++)
                            if (__gpp.events[r].id == n) {
                                __gpp.events.splice(r, 1),
                                s = !0;
                                break
                            }
                        i({
                            eventName: "listenerRemoved",
                            listenerId: n,
                            data: s,
                            pingData: {
                                gppVersion: "1.1",
                                cmpStatus: "stub",
                                cmpDisplayStatus: "hidden",
                                signalStatus: "not ready",
                                supportedAPIs: ["2:tcfeuv2", "5:tcfcav1", "6:uspv1", "7:usnatv1", "8:uscav1", "9:usvav1", "10:uscov1", "11:usutv1", "12:usctv1"],
                                cmpId: 0,
                                sectionList: [],
                                applicableSections: [],
                                gppString: "",
                                parsedSections: {}
                            }
                        }, !0)
                    } else
                        "hasSection" === e ? i(!1, !0) : "getSection" === e || "getField" === e ? i(null, !0) : __gpp.queue.push([].slice.apply(t))
                }
                ,
                window.__gpp_msghandler = function(t) {
                    var e = "string" == typeof t.data;
                    try {
                        var i = e ? JSON.parse(t.data) : t.data
                    } catch (t) {
                        i = null
                    }
                    if ("object" == typeof i && null !== i && "__gppCall"in i) {
                        var n = i.__gppCall;
                        window.__gpp(n.command, (function(i, o) {
                            var s = {
                                __gppReturn: {
                                    returnValue: i,
                                    success: o,
                                    callId: n.callId
                                }
                            };
                            t.source.postMessage(e ? JSON.stringify(s) : s, "*")
                        }
                        ), "parameter"in n ? n.parameter : null, "version"in n ? n.version : "1.1")
                    }
                }
                ,
                "__gpp"in window && "function" == typeof window.__gpp || (window.__gpp = window.__gpp_stub,
                window.addEventListener("message", window.__gpp_msghandler, !1),
                window.__gpp_addFrame("__gppLocator"))
            }
        }
        ,
        this.load = function() {
            window._sp_queue = [],
            window._sp_ = {
                config: {
                    accountId: parseInt(o.a.getConfig("account.sourcepointId")),
                    baseEndpoint: "https://cdn.privacy-mgmt.com",
                    usnat: {
                        includeUspApi: !0
                    },
                    gdpr: {}
                }
            },
            Object(s.k)("//cdn.privacy-mgmt.com/unified/wrapperMessagingWithoutDetection.js", (function() {}
            ))
        }
    }
}
, function(t, e, i) {
    "use strict";
    i.d(e, "a", (function() {
        return r
    }
    ));
    var n = i(1)
      , o = i(11)
      , s = i(13);
    const r = new function() {
        this.dropBidderCode = null,
        this.testGroups = {},
        this.initializeTestGroups = function() {
            this.setEnrichmentVendorTestGroups(),
            this.setupIpTest()
        }
        ,
        this.dropBidder = function() {}
        ,
        this.resetDropBidder = function() {}
        ,
        this.setupIpTest = function() {
            this.testGroups.ip_br = !1;
            const t = Math.floor(2 * Math.random()) + 1;
            n.g.ip && "US" === n.g.country ? this.testGroups.ip_br = 1 === t : this.testGroups.ip_br = "na"
        }
        ,
        this.setEnrichmentVendorTestGroups = function() {
            let t = n.a.getConfig("account.enableLiveIntent")
              , e = s.a.enabledModules.indexOf("optable") > -1;
            this.testGroups.liveintent = !1,
            this.testGroups.optable = !1;
            const i = Math.floor(100 * Math.random()) + 1;
            t && e ? i <= 3 || (i <= 6 ? this.testGroups.optable = !0 : i <= 9 ? this.testGroups.liveintent = !0 : (this.testGroups.optable = !0,
            this.testGroups.liveintent = !0)) : t ? i <= 95 && (this.testGroups.liveintent = !0) : e && i <= 95 && (this.testGroups.optable = !0),
            o.c.testGroup = this.testGroups.liveintent
        }
    }
}
, function(t, e, i) {
    "use strict";
    i.d(e, "a", (function() {
        return d
    }
    ));
    var n = i(1)
      , o = i(0)
      , s = i(11)
      , r = i(10)
      , a = i(8);
    const d = new function() {
        this.userIds = [{
            name: "33acrossId",
            params: {
                pid: "0015a000034LE2vAAG"
            },
            storage: {
                type: "html5",
                name: "33acrossId"
            }
        }, {
            name: "criteo"
        }, {
            name: "id5id",
            params: {
                partner: 488,
                pd: ""
            },
            storage: {
                type: "html5",
                name: "id5id",
                expires: 90,
                refreshInSeconds: 28800
            }
        }, {
            name: "lotamePanoramaId",
            params: {
                clientId: "17921"
            }
        }, {
            name: "quantcastId"
        }, {
            name: "sharedId",
            storage: {
                name: "_sharedID",
                type: "cookie",
                expires: 30
            }
        }, {
            name: "deepintentId",
            storage: {
                type: "cookie",
                name: "_dpes_id",
                expires: 90
            }
        }, {
            name: "unifiedId",
            storage: {
                type: "cookie",
                name: "pbjs-unifiedid",
                expires: 60
            },
            params: {
                url: "//match.adsrvr.org/track/rid?ttd_pid=wq4ba1k&fmt=json"
            }
        }, {
            name: "hadronId",
            storage: {
                name: "hadronId",
                type: "html5"
            },
            params: {
                partnerId: 816
            }
        }],
        this.updateUserIds = function() {
            let t = this.userIds
              , e = this.getUpdatedUserIds();
            e && e.length > 0 && e.forEach((function(e) {
                let i = !1;
                for (let n = 0; n < t.length; n++) {
                    t[n].name === e.name && (t[n] = e,
                    i = !0)
                }
                i || t.push(e)
            }
            ));
            let i = s.c.getUserId();
            i && t.push(i),
            t = this.enrichIds(t),
            this.userIds = t
        }
        ,
        this.getUpdatedUserIds = function() {}
        ,
        this.testEnrichIds = !1,
        this.currentEnrichTestId = null,
        this.enrichIds = function(e) {
            let i = ["criteo", "id5", "connectId", "uid2", "liveintent", "optable", "amazon"];
            if (this.testEnrichIds && (window.eh2 || window.ehttd)) {
                const t = i[Math.floor(Math.random() * i.length)];
                i = [t],
                this.currentEnrichTestId = t
            }
            if (i.indexOf("criteo") > -1 && this.enrichCriteo(),
            e.forEach((function(e) {
                "id5id" === e.name && i.indexOf("id5") > -1 && (e.params.pd = t(!1)),
                "connectId" === e.name && void 0 !== window.eh2 && i.indexOf("connectId") > -1 && (e.params.he = window.eh2)
            }
            )),
            window.ehttd && i.indexOf("uid2") > -1) {
                let t = this.getUid2Credentials();
                e.push({
                    name: "uid2",
                    params: {
                        serverPublicKey: t.serverPublicKey,
                        subscriptionId: t.subscriptionId,
                        emailHash: window.ehttd
                    }
                })
            }
            return i.indexOf("amazon") > -1 && r.a.enrichUser(),
            -1 === i.indexOf("liveintent") && (s.c.testGroup = !1),
            -1 === i.indexOf("optable") && (a.a.testGroups.optable = !1),
            e
        }
        ,
        this.enrichCriteo = function() {
            try {
                n.a.isBidderPresent("criteo") && void 0 !== window.eh2 && window[o.c].que.push((function() {
                    window[o.c].setBidderConfig({
                        bidders: ["criteo"],
                        config: {
                            ortb2: {
                                user: {
                                    ext: {
                                        data: {
                                            eids: [{
                                                source: document.location.hostname,
                                                uids: [{
                                                    id: window.eh2,
                                                    atype: 3,
                                                    ext: {
                                                        stype: "hemsha256"
                                                    }
                                                }]
                                            }]
                                        }
                                    }
                                }
                            }
                        }
                    }, !0)
                }
                ))
            } catch (t) {}
        }
        ,
        this.getUid2Credentials = function() {
            return {
                serverPublicKey: c.serverPublicKey,
                subscriptionId: c.subscriptionId
            }
        }
        ,
        this.getUserIds = function() {
            return this.userIds
        }
        ,
        this.getPrebidUserIdsDefined = function() {
            let t = window[o.c].getUserIds();
            return Object.keys(t)
        }
        ,
        this.getUid2Source = function() {
            let t = null;
            const e = window[o.c].getUserIds();
            return Object.keys(e).indexOf("pubProvidedId") > -1 && e.pubProvidedId.length && e.pubProvidedId[0].ext && "optable.co" === e.pubProvidedId[0].ext.matcher && (t = "optable"),
            Object.keys(e).indexOf("uid2") > -1 && (t = e.uid2.ext && "liveintent.com" === e.uid2.ext.provider ? "liveintent" : "uid2"),
            t
        }
        ,
        this.getUserPPID = function() {
            let t = null
              , e = window[o.c].getUserIds();
            if (e.hasOwnProperty("pubcid") && (t = e.pubcid),
            window[o.b].accountFunctions.getPPID && "function" == typeof window[o.b].accountFunctions.getPPID) {
                let e = window[o.b].accountFunctions.getPPID();
                e && (t = e)
            }
            return t
        }
        ;
        let t = function() {
            let t = {
                _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                encode: function(e) {
                    let i, n, o, s, r, a, d, c = "", l = 0;
                    for (e = t._utf8_encode(e); l < e.length; )
                        i = e.charCodeAt(l++),
                        n = e.charCodeAt(l++),
                        o = e.charCodeAt(l++),
                        s = i >> 2,
                        r = (3 & i) << 4 | n >> 4,
                        a = (15 & n) << 2 | o >> 6,
                        d = 63 & o,
                        isNaN(n) ? a = d = 64 : isNaN(o) && (d = 64),
                        c = c + this._keyStr.charAt(s) + this._keyStr.charAt(r) + this._keyStr.charAt(a) + this._keyStr.charAt(d);
                    return c
                },
                decode: function(e) {
                    let i, n, o, s, r, a, d, c = "", l = 0;
                    for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); l < e.length; )
                        s = this._keyStr.indexOf(e.charAt(l++)),
                        r = this._keyStr.indexOf(e.charAt(l++)),
                        a = this._keyStr.indexOf(e.charAt(l++)),
                        d = this._keyStr.indexOf(e.charAt(l++)),
                        i = s << 2 | r >> 4,
                        n = (15 & r) << 4 | a >> 2,
                        o = (3 & a) << 6 | d,
                        c += String.fromCharCode(i),
                        64 != a && (c += String.fromCharCode(n)),
                        64 != d && (c += String.fromCharCode(o));
                    return c = t._utf8_decode(c),
                    c
                },
                _utf8_encode: function(t) {
                    t = t.replace(/\r\n/g, "\n");
                    let e = "";
                    for (let i = 0; i < t.length; i++) {
                        let n = t.charCodeAt(i);
                        n < 128 ? e += String.fromCharCode(n) : n > 127 && n < 2048 ? (e += String.fromCharCode(n >> 6 | 192),
                        e += String.fromCharCode(63 & n | 128)) : (e += String.fromCharCode(n >> 12 | 224),
                        e += String.fromCharCode(n >> 6 & 63 | 128),
                        e += String.fromCharCode(63 & n | 128))
                    }
                    return e
                },
                _utf8_decode: function(t) {
                    let e = ""
                      , i = 0
                      , n = c1 = c2 = 0;
                    for (; i < t.length; )
                        n = t.charCodeAt(i),
                        n < 128 ? (e += String.fromCharCode(n),
                        i++) : n > 191 && n < 224 ? (c2 = t.charCodeAt(i + 1),
                        e += String.fromCharCode((31 & n) << 6 | 63 & c2),
                        i += 2) : (c2 = t.charCodeAt(i + 1),
                        c3 = t.charCodeAt(i + 2),
                        e += String.fromCharCode((15 & n) << 12 | (63 & c2) << 6 | 63 & c3),
                        i += 3);
                    return e
                }
            }
              , e = "";
            return void 0 !== window.eh2 && (e += "1=" + encodeURIComponent(window.eh2) + "&"),
            n.g.ip && "null" !== n.g.ip && (e += "10=" + encodeURIComponent(n.g.ip)),
            e += "&12=" + encodeURIComponent(window.navigator.userAgent),
            t.encode(e)
        }
    }
    ;
    const c = new function() {
        this.subscriptionId = "aXqx7p1LCL",
        this.serverPublicKey = "UID2-X-P-MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEDQ2RZizfbNgI0pQpa7FFyanSwC6/D90VeK9pCaMIY4q+TX3U1ZMT8nku3E0ZyTVkmePijmbLqDx8ADYLXhGTmQ=="
    }
}
, function(t, e, i) {
    "use strict";
    i.d(e, "a", (function() {
        return d
    }
    ));
    var n = i(1)
      , o = i(2)
      , s = i(3)
      , r = i(6)
      , a = i(4);
    const d = new function() {
        this.initialized = !1,
        this.apstagDeals = !0,
        this.aps = null,
        this.getPublisherId = function() {
            let t, e = n.a.getConfig("adUnits");
            for (let i = 0; i < e.length; i++) {
                let n = e[i].bids.filter((function(t) {
                    return "amazon" === t.bidder
                }
                ));
                if (n)
                    try {
                        t = n[0].params.publisher_id;
                        break
                    } catch (t) {}
            }
            return t
        }
        ,
        this.loadScript = function() {
            if (this.getPublisherId()) {
                let t = this.getPublisherId();
                Object(s.k)("//config.aps.amazon-adsystem.com/configs/" + t, (function() {}
                ), !0),
                Object(s.k)("//client.aps.amazon-adsystem.com/publisher.js", (function() {}
                ), !0)
            }
        }
        ,
        this.initialize = function() {
            if (!this.initialized && this.getPublisherId()) {
                const t = this.getPublisherId();
                window._aps = window._aps || new Map,
                _aps.has(t) || _aps.set(t, {
                    queue: new Array,
                    store: new Map
                }),
                this.aps = {
                    accountID: t,
                    record: function(t, e) {
                        return new Promise( (i, n) => {
                            _aps.get(this.accountID).queue.push(new CustomEvent(t,{
                                detail: {
                                    ...e,
                                    resolve: i,
                                    reject: n
                                }
                            }))
                        }
                        )
                    },
                    read: function(t) {
                        return _aps.get(this.accountID).store.get(t)
                    }
                };
                let e = null
                  , i = Object(n.f)("amazon");
                i.schainOverride.hasOwnProperty("config") && (e = i.schainOverride),
                e ? this.aps.record("ad/schain/define", {
                    schain: e
                }) : n.a.getConfig("schain.config.nodes").length > 0 && this.aps.record("ad/schain/define", {
                    schain: n.a.getConfig("schain.config")
                }),
                this.initialized = !0
            }
        }
        ,
        this.userEnriched = !1,
        this.enrichUser = function() {
            if (this.initialized && void 0 !== window.eh2 && !this.userEnriched) {
                this.userEnriched = !0;
                try {
                    this.aps.record("ad/record/update", {
                        config: {
                            hashedRecords: [{
                                type: "email",
                                record: window.eh2
                            }]
                        }
                    })
                } catch (t) {}
            }
        }
        ,
        this.setGAMTargeting = function(t) {
            googletag.cmd.push((function() {
                t.amazonTargeting && r.a.setSlotTargeting(t.config.elementId, t.amazonTargeting)
            }
            ))
        }
        ,
        this.filterSizes = function(t) {
            let e = []
              , i = [[336, 280], [400, 300], [1, 1], [120, 600], [300, 169], [350, 200], [400, 227]];
            for (let n = 0; n < t.length; n++) {
                let o = t[n];
                -1 === i.indexOf(o) && e.push(o)
            }
            return e
        }
        ,
        this._getFloor = function(t) {
            let e = t.getFloorForEnv(t.currentAuctionId, !0)
              , i = t.getHighestBid();
            return i && (e = Math.max(e, i.cpm)),
            e = parseInt(100 * e),
            e
        }
        ,
        this._updateFloor = function(t, e) {
            try {
                let i = this._getFloor(t);
                const n = this.aps.read("ad/slots").find((function(t) {
                    return t.id === e
                }
                ));
                Object(o.a)("Updating amazon floor for slot", e, n, i, t),
                n.flr = i
            } catch (t) {}
        }
        ,
        this.getAmazonConfigForUnit = function(t) {
            let e = t.config.bids.filter((function(t) {
                return "amazon" === t.bidder
            }
            ));
            return e.length ? e[0] : null
        }
        ,
        this.getItemIdForUnit = function(t, e) {
            if ("display" === e)
                return t.config.elementId;
            if ("video" === e) {
                return this.getAmazonConfigForUnit(t).params.slot_id
            }
            return t.config.elementId
        }
        ,
        this.getTagIdForUnit = function(t) {
            return this.getAmazonConfigForUnit(t).params.slot_id
        }
        ,
        this.defineDisplaySlot = function(t) {
            let e = [];
            this.filterSizes(t.config.mediaTypes.banner.sizes).forEach((function(t) {
                e.push({
                    w: t[0],
                    h: t[1]
                })
            }
            )),
            this.aps.record("ad/slot/define", {
                item: [{
                    id: this.getItemIdForUnit(t, "display"),
                    flr: this._getFloor(t),
                    flrcur: "USD",
                    spec: {
                        placement: {
                            tagid: this.getTagIdForUnit(t),
                            display: {
                                displayfmt: e
                            }
                        }
                    }
                }]
            })
        }
        ,
        this.defineVideoSlot = function(t) {
            this.aps.record("ad/slot/define", {
                item: [{
                    id: this.getItemIdForUnit(t, "video"),
                    flr: this._getFloor(t),
                    flrcur: "USD",
                    spec: {
                        placement: {
                            tagid: this.getTagIdForUnit(t),
                            sdk: "aps_video_player",
                            video: {
                                ptype: t.config.mediaTypes.video.placement,
                                w: t.config.mediaTypes.video.playerSize[0],
                                h: t.config.mediaTypes.video.playerSize[1]
                            }
                        }
                    }
                }]
            })
        }
        ,
        this.updateFloorRunAuction = function(t, e, i) {
            this._updateFloor(t, e),
            window._aps && t && this.aps.record("ad/targeting/fetch", {
                itemIds: [e]
            }).then( () => {
                i()
            }
            ).catch(t => {
                Object(o.a)("Amazon auction error", t),
                i()
            }
            )
        }
        ,
        this.runAuction = function(t, e) {
            if (this.initialized) {
                let i = this.getItemIdForUnit(t, "display");
                this.defineDisplaySlot(t),
                this.updateFloorRunAuction(t, i, e)
            } else
                Object(o.a)("ERROR: Amazon integration not initialized, is there an amazon publisher ID configured?")
        }
        ,
        this.runVideoAuction = function(t, e) {
            if (this.initialized) {
                let i = this.getItemIdForUnit(t, "video");
                this.defineVideoSlot(t),
                this.updateFloorRunAuction(t, i, e)
            } else
                Object(o.a)("ERROR: Amazon integration not initialized, is there an amazon publisher ID configured?")
        }
        ,
        this.setBidsOnUnit = function(t) {
            let e = this.getItemIdForUnit(t, "display");
            const i = this.aps.read("ad/targeting").get(e);
            if (i) {
                Object(o.a)("Setting amazon bids for targeting", t.config.elementId, i),
                t.amazonTargeting = {},
                t.amazonTargeting.amznbid = i.get("amznbid") || i.get("amznbid_sp"),
                t.amazonTargeting.amzniid = i.get("amzniid") || i.get("amzniid_sp"),
                t.amazonTargeting.amznp = i.get("amznp") || i.get("amznp_sp"),
                t.amazonTargeting.amznsz = i.get("amznsz");
                try {
                    t.amazonTargeting.amznactt = i.get("amznactt")
                } catch (t) {}
            }
        }
        ,
        this.setBidsOnVideoUnit = function(t) {
            let e = this.getItemIdForUnit(t, "video");
            const i = this.aps.read("ad/targeting").get(e);
            if (i) {
                Object(o.a)("Setting amazon video bids for targeting", t.config.elementId, i);
                const e = !!i.get("amznbid_sp");
                t.amazonTargeting = {},
                t.amazonUrl = null,
                t.amazonTargeting.amznbid = i.get("amznbid") || i.get("amznbid_sp"),
                t.amazonTargeting.amzniid = i.get("amzniid") || i.get("amzniid_sp"),
                t.amazonTargeting.amznp = i.get("amznp") || i.get("amznp_sp"),
                t.amazonTargeting.amznsz = i.get("amznsz");
                try {
                    t.amazonTargeting.amznactt = i.get("amznactt")
                } catch (t) {}
                let n = new Date;
                t.amazonUrl = e ? "https://aax.amazon-adsystem.com/e/dtb/vast?b=" + i.get("amzniid_sp") + "&rnd=" + n.getTime() : "https://aax.amazon-adsystem.com/e/dtb/vast?b=" + i.get("amzniid") + "&rnd=" + n.getTime() + "&pp=" + i.get("amznbid")
            }
        }
        ,
        this.logBidsToBQ = function(t, e) {
            let i = t.amazonTargeting;
            try {
                if (i && i.amznbid && i.amznbid.length > 2) {
                    let n = i.amznsz.split("x")
                      , r = {
                        bidderCode: "amazon",
                        adUnitCode: t.config.code,
                        originalCpm: 0,
                        auctionId: e,
                        timeToRespond: 0,
                        width: n[0],
                        height: n[1],
                        encryptedBid: i.amznbid,
                        requestId: Object(s.o)()
                    };
                    Object(o.d)(r),
                    t.logBidActivity("amazon")
                } else
                    t.logNoBidActivity("amazon")
            } catch (t) {}
        }
        ,
        this.renderAmazonWinningBidWithoutGAM = function(t, e, i) {
            let n = document.getElementById(t)
              , s = a.c.getUnitFromId(t);
            for (Object(o.a)("MANUAL AMAZON RENDER", e, i, n); n.firstChild; )
                n.removeChild(n.firstChild);
            n.setAttribute("style", "display: block;");
            let r = document.createElement("iframe");
            r.title = "ad",
            r.height = "100%",
            r.width = "100%",
            r.border = "0px",
            r.hspace = "0",
            r.vspace = "0",
            r.marginWidth = "0",
            r.marginHeight = "0",
            r.style.border = "0",
            r.scrolling = "no",
            r.frameBorder = "0",
            r.src = "about:blank",
            r.style.display = "block",
            n.appendChild(r);
            let d = {
                kvMap: JSON.parse(i),
                url: document.location.href,
                bidType: "openAuction",
                cv: "v2.0.0"
            };
            window.apstag.renderImp(r.contentWindow.document, e, d),
            s.handleFilledImpression()
        }
    }
}
, function(t, e, i) {
    "use strict";
    i.d(e, "b", (function() {
        return d
    }
    )),
    i.d(e, "a", (function() {
        return c
    }
    )),
    i.d(e, "c", (function() {
        return l
    }
    ));
    var n = i(1)
      , o = i(2)
      , s = i(0)
      , r = i(12)
      , a = i(4);
    const d = new function() {
        let t = !1;
        this.propertyId = null,
        this.getPropertyId = function() {
            let t = "R5qOdsXTbIiDa16ix3lGyfpja-8";
            return void 0 !== n.a.getConfig("account.confiantId") && (t = n.a.getConfig("account.confiantId")),
            t
        }
        ,
        this.load = function() {
            if (!n.a.getConfig("account.enableConfiant"))
                return;
            if (t)
                return;
            t = !0;
            let e = n.a.getConfig("account.confiantGeos");
            if (this.propertyId = this.getPropertyId(),
            !this.propertyId)
                return;
            if (void 0 !== e && e.length > 0 && -1 === e.indexOf(n.g.country))
                return;
            let i = document.createElement("script");
            i.async = !0,
            i.src = "//cdn.confiant-integrations.net/" + this.propertyId + "/gpt_and_prebid/config.js";
            let o = document.getElementsByTagName("script")[0];
            window.confiant = window.confiant || {},
            window.confiant[this.propertyId] = window.confiant[this.propertyId] || {
                clientSettings: {}
            },
            (window.confiant[this.propertyId].clientSettings || (window.confiant[this.propertyId].clientSettings = {})).callback = this.callback,
            o.parentNode.insertBefore(i, o)
        }
        ,
        this.callback = function(t, e, i, n, d, c) {
            if (i)
                try {
                    Object(o.a)("Confiant has blocked an ad:", c);
                    let t, e = !1, i = !1, n = null;
                    if (c.dfp) {
                        t = c.dfp.s;
                        let s = a.c.getUnitFromId(t).winningBid;
                        s ? (i = !0,
                        n = s,
                        e = !0,
                        Object(o.a)("Confiant will manually refresh with a prebid bid:", n)) : Object(o.a)("Confiant will not refresh, Adx was blocked and we have no prebid bid.")
                    }
                    if (c.prebid) {
                        t = c.prebid.s;
                        let i = a.c.getUnitFromId(t).winningBid;
                        i && window[s.c].markWinningBidAsUsed({
                            adId: i.adId
                        }),
                        e = !0,
                        Object(o.a)("Confiant will manually refresh after expiring a blocked prebid bid.")
                    }
                    if (t) {
                        let s = a.c.getUnitFromId(t);
                        s.confiantRefreshed && (e = !1,
                        Object(o.a)("Confiant will not refresh, this blocked impression was already refreshed once.")),
                        e && (Object(o.a)("Refreshing confiant blocked ad unit"),
                        s.confiantRefreshed = !0,
                        i ? r.a.renderPrebidWinningBidWithoutGAM(n, t) : s.display("confiant"))
                    } else
                        Object(o.a)("Confiant will not refresh, we don't know the ad unit id for some reason.")
                } catch (t) {
                    Object(o.a)("Confiant block error", t),
                    Object(o.a)("Confiant has blocked an ad")
                }
        }
    }
    ;
    const c = new function() {
        let t = !1;
        this.load = function() {
            let e = n.a.getConfig("account.enableBlockthrough")
              , i = n.a.getConfig("account.blockthroughScriptPath");
            if (t || !e || !i)
                return;
            let o = document.createElement("script");
            o.src = i,
            o.async = !0,
            document.head.appendChild(o),
            t = !0
        }
    }
    ;
    const l = new function() {
        window.liModuleEnabled = !1,
        this.testGroup = !1,
        this.shouldRun = function() {
            let t = n.a.getConfig("account.enableLiveIntent")
              , e = ["US", "CA"].indexOf(n.g.country) > -1 && t;
            return e && this.testGroup && (window.liModuleEnabled = !0),
            e
        }
        ,
        this.getLiModuleEnabled = function() {
            return window.liModuleEnabled
        }
        ,
        this.isEnriched = function() {
            let t = window[s.c].getUserIds();
            return Object.values(t).some(t => t.ext && "liveintent.com" === t.ext.provider)
        }
        ,
        this.getReportingValue = function() {
            if (!this.shouldRun())
                return null;
            let t = this.testGroup ? "t1" : "t0";
            return t += this.isEnriched() ? "-e1" : "-e0",
            t
        }
        ,
        this.setGAMTargeting = function() {
            let t = this.getReportingValue();
            t && googletag.cmd.push((function() {
                googletag.pubads().setTargeting("li-module-enabled", t)
            }
            ))
        }
        ,
        this.getGAMVideoTargeting = function() {
            let t = {};
            return t["li-module-enabled"] = this.getReportingValue(),
            t
        }
        ,
        this.getExtraLogging = function() {
            let t = {};
            return t["li-module-enabled"] = this.getReportingValue(),
            t
        }
        ,
        this.getUserId = function() {
            return this.shouldRun() && this.testGroup ? {
                name: "liveIntentId",
                params: {
                    distributorId: n.a.getConfig("account.liveintentId"),
                    requestedAttributesOverrides: {
                        uid2: !0,
                        index: !0,
                        bidswitch: !0,
                        pubmatic: !0,
                        magnite: !0,
                        openx: !0,
                        medianet: !0,
                        sovrn: !0,
                        nonId: !0,
                        thetradedesk: !0
                    }
                },
                storage: {
                    type: "html5",
                    name: "__tamLIResolveResult",
                    expires: 1
                }
            } : null
        }
    }
}
, function(t, e, i) {
    "use strict";
    i.d(e, "a", (function() {
        return u
    }
    ));
    var n = i(9)
      , o = i(1)
      , s = i(7)
      , r = i(2)
      , a = i(0)
      , d = i(5)
      , c = i(4)
      , l = i(8);
    const u = new function() {
        this.resetConfig = function() {
            let t = this;
            window[a.c].que.push((function() {
                window[a.c].setConfig({}),
                t.updatePrebidConfig()
            }
            ))
        }
        ,
        this.updatePrebidConfig = function() {
            const t = {
                buckets: [{
                    precision: 2,
                    min: 0,
                    max: 1e3,
                    increment: .01
                }]
            };
            window[a.c].que.push((function() {
                let e = {
                    useBidCache: !0,
                    maxRequestsPerOrigin: 6,
                    enableTIDs: !0,
                    eventHistoryTTL: 60,
                    cache: {
                        url: window[a.b].videoCacheEndpoint,
                        ignoreBidderCacheKey: !0
                    },
                    disableAjaxTimeout: !0,
                    enableSendAllBids: !1,
                    targetingControls: {
                        alwaysIncludeDeals: !0
                    },
                    customPriceBucket: t,
                    priceGranularity: "custom",
                    userSync: {
                        auctionDelay: 300,
                        filterSettings: {
                            iframe: {
                                bidders: "*",
                                filter: "include"
                            },
                            image: {
                                bidders: "*",
                                filter: "include"
                            }
                        },
                        syncDelay: 5e3,
                        syncEnabled: !0,
                        syncsPerBidder: 5,
                        idPriority: {
                            uid2: ["uid2", "liveIntentId", "pubProvidedId"]
                        },
                        userIds: n.a.getUserIds()
                    },
                    gvlMapping: {
                        ogury: 31
                    },
                    floors: {
                        default: parseFloat(o.a.getConfig("account.floorMinimumCents")) / 100,
                        enforcement: {
                            enforceJS: !0,
                            enforcePBS: !0
                        }
                    },
                    currency: {
                        adServerCurrency: "USD"
                    }
                };
                window[a.b].accountFunctions.getS2sConfig && "function" == typeof window[a.b].accountFunctions.getS2sConfig && (e.s2sConfig = window[a.b].accountFunctions.getS2sConfig());
                let i = {};
                o.g.country && o.g.regionState && (i = {
                    user: {
                        geo: {
                            country: o.g.country,
                            region: o.g.regionState
                        }
                    }
                }),
                s.b.gppOptedOut() ? l.a.testGroups.ip_br = "na" : !0 === l.a.testGroups.ip_br && (i.device = {
                    ip: o.g.ip
                });
                let d = {};
                if (window[a.b].accountFunctions.getOrtb2Values && "function" == typeof window[a.b].accountFunctions.getOrtb2Values && (d = window[a.b].accountFunctions.getOrtb2Values()),
                e.ortb2 = Object.assign({}, i, d),
                o.a.getConfig("schain.config.nodes").length > 0 && (e.schain = o.a.getConfig("schain")),
                s.b.cmpApplies() && (e.consentManagement = {},
                s.b.cmpGDPR && (e.consentManagement.gdpr = {
                    cmpApi: "iab",
                    timeout: 1e4,
                    defaultGdprScope: !1,
                    rules: [{
                        purpose: "storage",
                        enforcePurpose: !0,
                        enforceVendor: !0,
                        vendorExceptions: o.a.getConfig("account.gdprVendorExceptions")
                    }, {
                        purpose: "basicAds",
                        enforcePurpose: !0,
                        enforceVendor: !0,
                        vendorExceptions: []
                    }]
                }),
                s.b.cmpCCPA && (e.consentManagement.usp = {
                    cmpApi: "iab",
                    timeout: 100
                }),
                s.b.cmpGPP && (e.consentManagement.gpp = {
                    cmpApi: "iab"
                })),
                Object(r.a)("Setting prebid dynamic config:", e),
                window[a.c].setConfig(e),
                window[a.c].bidderSettings = {
                    standard: {
                        storageAllowed: !0,
                        bidCpmAdjustment: function(t, e) {
                            let i, n = t;
                            try {
                                i = Object(o.f)(e.bidderCode),
                                n = parseFloat(i.revShare) * n
                            } catch (t) {}
                            return window[a.b].accountFunctions.bidCpmAdjustment && "function" == typeof window[a.b].accountFunctions.bidCpmAdjustment && (n = window[a.b].accountFunctions.bidCpmAdjustment(e, n)),
                            n = Object(o.b)(n),
                            n
                        }
                    }
                },
                o.a.isBidderPresent("adagio")) {
                    try {
                        window[a.c].enableAnalytics([{
                            provider: "adagio"
                        }])
                    } catch (t) {}
                    let t = null
                      , e = null;
                    if (o.a.getConfig("adUnits").forEach((function(i) {
                        i.bids.forEach((function(i) {
                            "adagio" === i.bidder && (t = i.params.organizationId,
                            e = i.params.site)
                        }
                        ))
                    }
                    )),
                    t && e)
                        try {
                            window[a.c].que.push((function() {
                                window[a.c].mergeConfig({
                                    realTimeData: {
                                        dataProviders: [{
                                            name: "adagio",
                                            params: {
                                                organizationId: t,
                                                site: e
                                            }
                                        }]
                                    }
                                })
                            }
                            ))
                        } catch (t) {}
                }
                if (o.a.getConfig("account.enableHumanSecurity")) {
                    const t = o.a.getConfig("account.humanSecurityClientId");
                    let e = {
                        name: "humansecurity"
                    };
                    t && (e.params = {
                        clientId: t
                    },
                    o.a.getDebug() && (e.params.verbose = !0)),
                    window[a.c].que.push((function() {
                        window[a.c].mergeConfig({
                            realTimeData: {
                                dataProviders: [e]
                            }
                        })
                    }
                    ))
                }
                if (o.a.isBidderPresent("yahooAds"))
                    try {
                        window[a.c].setConfig({
                            yahooAds: {
                                mode: "all"
                            }
                        })
                    } catch (t) {}
            }
            ))
        }
        ,
        this.setupAliasBidders = function() {
            window[a.c].que.push((function() {
                window[a.c].aliasBidder("appnexus", "groupm-xandr", {
                    gvlid: 98
                }),
                window[a.c].aliasBidder("appnexus", "venatus", {
                    gvlid: 26
                }),
                window[a.c].aliasBidder("rubicon", "shemedia", {
                    gvlid: 337
                }),
                window[a.c].aliasBidder("grid", "trustx", {
                    gvlid: 686
                }),
                window[a.c].aliasBidder("smartadserver", "bulletin"),
                window[a.c].aliasBidder("appnexus", "gourmetads"),
                window[a.c].aliasBidder("adkernel", "qortex", {
                    gvlid: 14
                }),
                window[a.c].aliasBidder("pubmatic", "pubmatic_apex", {
                    gvlid: 76
                }),
                window[a.c].aliasBidder("nexx360", "1accord", {
                    gvlid: 965
                })
            }
            ))
        }
        ,
        this.defineSchainOverrides = function() {
            o.a.getConfig("partners").forEach((function(t) {
                t.schainOverride.hasOwnProperty("config") && (Object(r.a)("Overriding the schain object for partner", t.shortName, t.schainOverride),
                window[a.c].setBidderConfig({
                    bidders: [t.shortName],
                    config: {
                        schain: t.schainOverride
                    }
                }, !0))
            }
            ))
        }
        ,
        this.addAdUnit = function(t) {
            window[a.c].que.push((function() {
                window[a.c].addAdUnits([t])
            }
            ))
        }
        ,
        this.bindEvents = function() {
            window[a.c].que.push((function() {
                window[a.c].onEvent("bidResponse", d.h),
                window[a.c].onEvent("bidRequested", d.g),
                window[a.c].onEvent("bidderError", d.f),
                window[a.c].onEvent("bidTimeout", d.i),
                window[a.c].onEvent("auctionInit", d.e),
                window[a.c].onEvent("auctionEnd", d.d),
                window[a.c].onEvent("tcf2Enforcement", d.w),
                window[a.c].onEvent("beforeRequestBids", d.l),
                window[a.c].onEvent("beforeRequestBids", d.t),
                window[a.c].onEvent("noBid", d.o),
                window[a.c].onEvent("adRenderFailed", d.b),
                window[a.c].onEvent("adRenderSucceeded", d.c)
            }
            ))
        }
        ,
        this.unbindEvents = function() {
            window[a.c].que.push((function() {
                window[a.c].offEvent("bidResponse", d.h),
                window[a.c].offEvent("bidRequested", d.g),
                window[a.c].offEvent("bidderError", d.f),
                window[a.c].offEvent("bidTimeout", d.i),
                window[a.c].offEvent("auctionInit", d.e),
                window[a.c].offEvent("auctionEnd", d.d),
                window[a.c].offEvent("tcf2Enforcement", d.w),
                window[a.c].offEvent("beforeRequestBids", d.l),
                window[a.c].offEvent("beforeRequestBids", d.t),
                window[a.c].offEvent("noBid", d.o),
                window[a.c].offEvent("adRenderFailed", d.b),
                window[a.c].offEvent("adRenderSucceeded", d.c)
            }
            ))
        }
        ,
        this.renderPrebidWinningBidWithoutGAM = function(t, e, i) {
            let n = document.getElementById(e)
              , o = c.c.getUnitFromId(e);
            for (void 0 === i && (i = o.impressionType),
            Object(r.a)("MANUAL RENDER", i, t); n.firstChild; )
                n.removeChild(n.firstChild);
            n.setAttribute("style", "display: block;");
            let s = document.createElement("iframe");
            s.title = "ad",
            s.height = "100%",
            s.width = "100%",
            s.border = "0px",
            s.hspace = "0",
            s.vspace = "0",
            s.marginWidth = "0",
            s.marginHeight = "0",
            s.style.border = "0",
            s.scrolling = "no",
            s.frameBorder = "0",
            s.src = "about:blank",
            s.style.display = "block",
            n.appendChild(s),
            window[a.c].renderAd(s.contentWindow.document, t.adId),
            o.handleFilledImpression()
        }
    }
}
, function(t, e, i) {
    "use strict";
    var n = i(1)
      , o = i(3)
      , s = i(9)
      , r = i(0)
      , a = i(7)
      , d = i(8);
    i.d(e, "a", (function() {
        return l
    }
    ));
    let c = {};
    c.optable = function(t) {
        this.name = "optable",
        this.enabled = !1,
        this.settings = t,
        this.setup = function() {
            window.optable = window.optable || {
                cmd: []
            },
            "vs_test" === this.settings.siteSlug ? window.optable.site = "vs-test" : "vs_spin" === this.settings.siteSlug ? window.optable.site = "vs-spin" : window.optable.site = this.settings.siteSlug
        }
        ,
        this.shouldRun = function() {
            return ["US"].indexOf(n.g.country) > -1 && d.a.testGroups.optable
        }
        ,
        this.preCMP = function() {
            this.shouldRun() && Object(o.k)(this.settings.scriptPath, null, !0)
        }
        ,
        this.postCMP = function() {
            if (!a.b.gppOptedOut()) {
                this.identifyToPrebid();
                let t = s.a.getUserPPID();
                t && window.optable.cmd.push((function() {
                    window.optable.auth.identify(`c:${t}`)
                }
                )),
                window.eh2 && this.pushAuthUser(window.eh2)
            }
        }
        ,
        this.pushAuthUser = function(t) {
            window.optable.cmd.push((function() {
                window.optable.auth.identify(`e:${t}`)
            }
            ))
        }
        ,
        this.updatePrebidConfigWithEids = function() {
            let t = JSON.parse(window.localStorage.OPTABLE_RESOLVED).ortb2.user.eids;
            window[r.c].que.push((function() {
                window[r.c].mergeConfig({
                    userSync: {
                        userIds: [{
                            name: "pubProvidedId",
                            params: {
                                eids: t
                            }
                        }]
                    }
                }),
                window[r.c].refreshUserIds({
                    submoduleNames: ["pubProvidedId"]
                })
            }
            ))
        }
        ,
        this.identifyToPrebid = function() {
            let t = this;
            if (window.localStorage.OPTABLE_RESOLVED)
                try {
                    this.updatePrebidConfigWithEids()
                } catch (t) {}
            window.addEventListener("optableResolved", (function() {
                t.updatePrebidConfigWithEids()
            }
            ))
        }
    }
    ;
    const l = new function() {
        this.modules = [],
        this.enabledModules = [],
        this.setupModules = function() {
            const t = this;
            n.a.getConfig("modules").forEach((function(e) {
                const i = new (0,
                c[e.name])(e.settings);
                i.setup(),
                t.modules.push(i),
                t.enabledModules.push(i.name)
            }
            ))
        }
        ,
        this.preCMP = function() {
            this.modules.forEach((function(t) {
                t.preCMP()
            }
            ))
        }
        ,
        this.postCMP = function() {
            this.modules.forEach((function(t) {
                t.postCMP()
            }
            ))
        }
    }
}
, function(t, e, i) {
    var n;
    !function(o, s) {
        "use strict";
        var r, a = "model", d = "name", c = "type", l = "vendor", u = "version", h = "mobile", g = "tablet", p = "smarttv", f = ["brands", "fullVersionList", h, a, "platform", "platformVersion", "architecture", "formFactor", "bitness"], m = void 0 !== o, b = m && o.navigator ? o.navigator : void 0, w = b && b.userAgentData ? b.userAgentData : void 0, v = function(t) {
            for (var e = {}, i = 0; i < t.length; i++)
                e[t[i].toUpperCase()] = t[i];
            return e
        }, y = function(t, e) {
            if ("object" == typeof t && t.length > 0) {
                for (var i in t)
                    if (_(t[i]) == _(e))
                        return !0;
                return !1
            }
            return !!A(t) && -1 !== _(e).indexOf(_(t))
        }, I = function(t) {
            for (var e in t)
                return /^(browser|cpu|device|engine|os)$/.test(e)
        }, A = function(t) {
            return "string" == typeof t
        }, C = function(t) {
            if (t) {
                for (var e = [], i = k(/\\?\"/g, t).split(","), n = 0; n < i.length; n++)
                    if (i[n].indexOf(";") > -1) {
                        var o = E(i[n]).split(";v=");
                        e[n] = {
                            brand: o[0],
                            version: o[1]
                        }
                    } else
                        e[n] = E(i[n]);
                return e
            }
        }, _ = function(t) {
            return A(t) ? t.toLowerCase() : t
        }, S = function(t) {
            return A(t) ? k(/[^\d\.]/g, t).split(".")[0] : void 0
        }, O = function(t) {
            for (var e in t) {
                var i = t[e];
                "object" == typeof i && 2 == i.length ? this[i[0]] = i[1] : this[i] = void 0
            }
            return this
        }, k = function(t, e) {
            return A(e) ? e.replace(t, "") : e
        }, T = function(t) {
            return k(/\\?\"/g, t)
        }, E = function(t, e) {
            if (A(t))
                return t = k(/^\s\s*/, t),
                void 0 === e ? t : t.substring(0, 500)
        }, x = function(t, e) {
            if (t && e)
                for (var i, n, o, s, r, a, d = 0; d < e.length && !r; ) {
                    var c = e[d]
                      , l = e[d + 1];
                    for (i = n = 0; i < c.length && !r && c[i]; )
                        if (r = c[i++].exec(t))
                            for (o = 0; o < l.length; o++)
                                a = r[++n],
                                "object" == typeof (s = l[o]) && s.length > 0 ? 2 === s.length ? "function" == typeof s[1] ? this[s[0]] = s[1].call(this, a) : this[s[0]] = s[1] : 3 === s.length ? "function" != typeof s[1] || s[1].exec && s[1].test ? this[s[0]] = a ? a.replace(s[1], s[2]) : void 0 : this[s[0]] = a ? s[1].call(this, a, s[2]) : void 0 : 4 === s.length && (this[s[0]] = a ? s[3].call(this, a.replace(s[1], s[2])) : void 0) : this[s] = a || void 0;
                    d += 2
                }
        }, B = function(t, e) {
            for (var i in e)
                if ("object" == typeof e[i] && e[i].length > 0) {
                    for (var n = 0; n < e[i].length; n++)
                        if (y(e[i][n], t))
                            return "?" === i ? void 0 : i
                } else if (y(e[i], t))
                    return "?" === i ? void 0 : i;
            return e.hasOwnProperty("*") ? e["*"] : t
        }, j = {
            ME: "4.90",
            "NT 3.11": "NT3.51",
            "NT 4.0": "NT4.0",
            2e3: "NT 5.0",
            XP: ["NT 5.1", "NT 5.2"],
            Vista: "NT 6.0",
            7: "NT 6.1",
            8: "NT 6.2",
            8.1: "NT 6.3",
            10: ["NT 6.4", "NT 10.0"],
            RT: "ARM"
        }, P = {
            embedded: "Automotive",
            mobile: "Mobile",
            tablet: ["Tablet", "EInk"],
            smarttv: "TV",
            wearable: ["VR", "XR", "Watch"],
            "?": ["Desktop", "Unknown"],
            "*": void 0
        }, U = {
            browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [u, [d, "Mobile Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [u, [d, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [d, u], [/opios[\/ ]+([\w\.]+)/i], [u, [d, "Opera Mini"]], [/\bop(?:rg)?x\/([\w\.]+)/i], [u, [d, "Opera GX"]], [/\bopr\/([\w\.]+)/i], [u, [d, "Opera"]], [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i], [u, [d, "Baidu"]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i], [d, u], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [u, [d, "UCBrowser"]], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i], [u, [d, "WeChat"]], [/konqueror\/([\w\.]+)/i], [u, [d, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [u, [d, "IE"]], [/ya(?:search)?browser\/([\w\.]+)/i], [u, [d, "Yandex"]], [/slbrowser\/([\w\.]+)/i], [u, [d, "Smart Lenovo Browser"]], [/(avast|avg)\/([\w\.]+)/i], [[d, /(.+)/, "$1 Secure Browser"], u], [/\bfocus\/([\w\.]+)/i], [u, [d, "Firefox Focus"]], [/\bopt\/([\w\.]+)/i], [u, [d, "Opera Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [u, [d, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [u, [d, "Dolphin"]], [/coast\/([\w\.]+)/i], [u, [d, "Opera Coast"]], [/miuibrowser\/([\w\.]+)/i], [u, [d, "MIUI Browser"]], [/fxios\/([\w\.-]+)/i], [u, [d, "Mobile Firefox"]], [/\bqihu|(qi?ho?o?|360)browser/i], [[d, "360 Browser"]], [/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i], [[d, /(.+)/, "$1 Browser"], u], [/samsungbrowser\/([\w\.]+)/i], [u, [d, "Samsung Internet"]], [/(comodo_dragon)\/([\w\.]+)/i], [[d, /_/g, " "], u], [/metasr[\/ ]?([\d\.]+)/i], [u, [d, "Sogou Explorer"]], [/(sogou)mo\w+\/([\d\.]+)/i], [[d, "Sogou Mobile"], u], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i], [d, u], [/(lbbrowser)/i, /\[(linkedin)app\]/i], [d], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[d, "Facebook"], u], [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i], [d, u], [/\bgsa\/([\w\.]+) .*safari\//i], [u, [d, "GSA"]], [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i], [u, [d, "TikTok"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [u, [d, "Chrome Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[d, "Chrome WebView"], u], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [u, [d, "Android Browser"]], [/chrome\/([\w\.]+) mobile/i], [u, [d, "Mobile Chrome"]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [d, u], [/version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i], [u, [d, "Mobile Safari"]], [/iphone .*mobile(?:\/\w+ | ?)safari/i], [[d, "Mobile Safari"]], [/version\/([\w\.\,]+) .*(safari)/i], [u, d], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [d, [u, "1"]], [/(webkit|khtml)\/([\w\.]+)/i], [d, u], [/(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i], [[d, "Mobile Firefox"], u], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[d, "Netscape"], u], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [u, [d, "Firefox Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i], [d, u], [/(cobalt)\/([\w\.]+)/i], [d, [u, /[^\d\.]+./, ""]]],
            cpu: [[/\b(?:(amd|x|x86[-_]?|wow|win)64)\b/i], [["architecture", "amd64"]], [/(ia32(?=;))/i, /((?:i[346]|x)86)[;\)]/i], [["architecture", "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [["architecture", "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [["architecture", "armhf"]], [/windows (ce|mobile); ppc;/i], [["architecture", "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [["architecture", /ower/, "", _]], [/(sun4\w)[;\)]/i], [["architecture", "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [["architecture", _]]],
            device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [a, [l, "Samsung"], [c, g]], [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [a, [l, "Samsung"], [c, h]], [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i], [a, [l, "Apple"], [c, h]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [a, [l, "Apple"], [c, g]], [/(macintosh);/i], [a, [l, "Apple"]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [a, [l, "Sharp"], [c, h]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [a, [l, "Huawei"], [c, g]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [a, [l, "Huawei"], [c, h]], [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[a, /_/g, " "], [l, "Xiaomi"], [c, h]], [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[a, /_/g, " "], [l, "Xiaomi"], [c, g]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [a, [l, "OPPO"], [c, h]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [a, [l, "Vivo"], [c, h]], [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i], [a, [l, "Realme"], [c, h]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [a, [l, "Motorola"], [c, h]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [a, [l, "Motorola"], [c, g]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [a, [l, "LG"], [c, g]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [a, [l, "LG"], [c, h]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [a, [l, "Lenovo"], [c, g]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[a, /_/g, " "], [l, "Nokia"], [c, h]], [/(pixel c)\b/i], [a, [l, "Google"], [c, g]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [a, [l, "Google"], [c, h]], [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [a, [l, "Sony"], [c, h]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[a, "Xperia Tablet"], [l, "Sony"], [c, g]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [a, [l, "OnePlus"], [c, h]], [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [a, [l, "Amazon"], [c, g]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[a, /(.+)/g, "Fire Phone $1"], [l, "Amazon"], [c, h]], [/(playbook);[-\w\),; ]+(rim)/i], [a, l, [c, g]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [a, [l, "BlackBerry"], [c, h]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [a, [l, "ASUS"], [c, g]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [a, [l, "ASUS"], [c, h]], [/(nexus 9)/i], [a, [l, "HTC"], [c, g]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i], [l, [a, /_/g, " "], [c, h]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [a, [l, "Acer"], [c, g]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [a, [l, "Meizu"], [c, h]], [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i], [a, [l, "Ulefone"], [c, h]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [l, a, [c, h]], [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i], [l, a, [c, g]], [/(surface duo)/i], [a, [l, "Microsoft"], [c, g]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [a, [l, "Fairphone"], [c, h]], [/(shield[\w ]+) b/i], [a, [l, "Nvidia"], [c, g]], [/(sprint) (\w+)/i], [l, a, [c, h]], [/(kin\.[onetw]{3})/i], [[a, /\./g, " "], [l, "Microsoft"], [c, h]], [/droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [a, [l, "Zebra"], [c, g]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [a, [l, "Zebra"], [c, h]], [/smart-tv.+(samsung)/i], [l, [c, p]], [/hbbtv.+maple;(\d+)/i], [[a, /^/, "SmartTV"], [l, "Samsung"], [c, p]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[l, "LG"], [c, p]], [/(apple) ?tv/i], [l, [a, "Apple TV"], [c, p]], [/crkey/i], [[a, "Chromecast"], [l, "Google"], [c, p]], [/droid.+aft(\w+)( bui|\))/i], [a, [l, "Amazon"], [c, p]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], [a, [l, "Sharp"], [c, p]], [/(bravia[\w ]+)( bui|\))/i], [a, [l, "Sony"], [c, p]], [/(mitv-\w{5}) bui/i], [a, [l, "Xiaomi"], [c, p]], [/Hbbtv.*(technisat) (.*);/i], [l, a, [c, p]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i], [[l, E], [a, E], [c, p]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[c, p]], [/(ouya)/i, /(nintendo) (\w+)/i], [l, a, [c, "console"]], [/droid.+; (shield) bui/i], [a, [l, "Nvidia"], [c, "console"]], [/(playstation \w+)/i], [a, [l, "Sony"], [c, "console"]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [a, [l, "Microsoft"], [c, "console"]], [/((pebble))app/i], [l, a, [c, "wearable"]], [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i], [a, [l, "Apple"], [c, "wearable"]], [/droid.+; (glass) \d/i], [a, [l, "Google"], [c, "wearable"]], [/droid.+; (wt63?0{2,3})\)/i], [a, [l, "Zebra"], [c, "wearable"]], [/(quest( 2| pro)?)/i], [a, [l, "Facebook"], [c, "wearable"]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [l, [c, "embedded"]], [/(aeobc)\b/i], [a, [l, "Amazon"], [c, "embedded"]], [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i], [a, [c, h]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [a, [c, g]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[c, g]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [[c, h]], [/(android[-\w\. ]{0,9});.+buil/i], [a, [l, "Generic"]]],
            engine: [[/windows.+ edge\/([\w\.]+)/i], [u, [d, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [u, [d, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i], [d, u], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [u, d]],
            os: [[/microsoft (windows) (vista|xp)/i], [d, u], [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i], [d, [u, B, j]], [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[u, B, j], [d, "Windows"]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i], [[u, /_/g, "."], [d, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[d, "macOS"], [u, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i], [u, d], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [d, u], [/\(bb(10);/i], [u, [d, "BlackBerry"]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [u, [d, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [u, [d, "Firefox OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [u, [d, "webOS"]], [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i], [u, [d, "watchOS"]], [/crkey\/([\d\.]+)/i], [u, [d, "Chromecast"]], [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i], [[d, "Chrome OS"], u], [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) (\w+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [d, u], [/(sunos) ?([\w\.\d]*)/i], [[d, "Solaris"], u], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i], [d, u]]
        }, F = (O.call((r = {
            init: {},
            isIgnore: {},
            isIgnoreRgx: {},
            toString: {}
        }).init, [["browser", [d, u, "major"]], ["cpu", ["architecture"]], ["device", [c, a, l]], ["engine", [d, u]], ["os", [d, u]]]),
        O.call(r.isIgnore, [["browser", [u, "major"]], ["engine", [u]], ["os", [u]]]),
        O.call(r.isIgnoreRgx, [["browser", / ?browser$/i], ["os", / ?os$/i]]),
        O.call(r.toString, [["browser", [d, u]], ["cpu", ["architecture"]], ["device", [l, a]], ["engine", [d, u]], ["os", [d, u]]]),
        r), R = function(t, e) {
            var i = F.init[e]
              , n = F.isIgnore[e] || 0
              , o = F.isIgnoreRgx[e] || 0
              , s = F.toString[e] || 0;
            function r() {
                O.call(this, i)
            }
            return r.prototype.getItem = function() {
                return t
            }
            ,
            r.prototype.withClientHints = function() {
                return w ? w.getHighEntropyValues(f).then((function(e) {
                    return t.setCH(new z(e,!1)).parseCH().get()
                }
                )) : t.parseCH().get()
            }
            ,
            r.prototype.withFeatureCheck = function() {
                return t.detectFeature().get()
            }
            ,
            "result" != e && (r.prototype.is = function(t) {
                var e = !1;
                for (var i in this)
                    if (this.hasOwnProperty(i) && !y(n, i) && _(o ? k(o, this[i]) : this[i]) == _(o ? k(o, t) : t)) {
                        if (e = !0,
                        "undefined" != t)
                            break
                    } else if ("undefined" == t && e) {
                        e = !e;
                        break
                    }
                return e
            }
            ,
            r.prototype.toString = function() {
                var t = "";
                for (var e in s)
                    void 0 !== this[s[e]] && (t += (t ? " " : "") + this[s[e]]);
                return t || "undefined"
            }
            ),
            w || (r.prototype.then = function(t) {
                var e = this
                  , i = function() {
                    for (var t in e)
                        e.hasOwnProperty(t) && (this[t] = e[t])
                };
                i.prototype = {
                    is: r.prototype.is,
                    toString: r.prototype.toString
                };
                var n = new i;
                return t(n),
                n
            }
            ),
            new r
        };
        function z(t, e) {
            if (t = t || {},
            O.call(this, f),
            e)
                O.call(this, [["brands", C(t["sec-ch-ua"])], ["fullVersionList", C(t["sec-ch-ua-full-version-list"])], [h, /\?1/.test(t["sec-ch-ua-mobile"])], [a, T(t["sec-ch-ua-model"])], ["platform", T(t["sec-ch-ua-platform"])], ["platformVersion", T(t["sec-ch-ua-platform-version"])], ["architecture", T(t["sec-ch-ua-arch"])], ["formFactor", C(t["sec-ch-ua-form-factor"])], ["bitness", T(t["sec-ch-ua-bitness"])]]);
            else
                for (var i in t)
                    this.hasOwnProperty(i) && void 0 !== t[i] && (this[i] = t[i])
        }
        function M(t, e, i, n) {
            return this.get = function(t) {
                return t ? this.data.hasOwnProperty(t) ? this.data[t] : void 0 : this.data
            }
            ,
            this.set = function(t, e) {
                return this.data[t] = e,
                this
            }
            ,
            this.setCH = function(t) {
                return this.uaCH = t,
                this
            }
            ,
            this.detectFeature = function() {
                if (b && b.userAgent == this.ua)
                    switch (this.itemType) {
                    case "browser":
                        b.brave && "function" == typeof b.brave.isBrave && this.set(d, "Brave");
                        break;
                    case "device":
                        !this.get(c) && w && w.mobile && this.set(c, h),
                        "Macintosh" == this.get(a) && b && void 0 !== b.standalone && b.maxTouchPoints && b.maxTouchPoints > 2 && this.set(a, "iPad").set(c, g);
                        break;
                    case "os":
                        !this.get(d) && w && w.platform && this.set(d, w.platform);
                        break;
                    case "result":
                        var t = this.data
                          , e = function(e) {
                            return t[e].getItem().detectFeature().get()
                        };
                        this.set("browser", e("browser")).set("cpu", e("cpu")).set("device", e("device")).set("engine", e("engine")).set("os", e("os"))
                    }
                return this
            }
            ,
            this.parseUA = function() {
                return "result" != this.itemType && x.call(this.data, this.ua, this.rgxMap),
                "browser" == this.itemType && this.set("major", S(this.get(u))),
                this
            }
            ,
            this.parseCH = function() {
                var t = this.uaCH
                  , e = this.rgxMap;
                switch (this.itemType) {
                case "browser":
                    var i, n = t.fullVersionList || t.brands;
                    if (n)
                        for (var o in n) {
                            var s = k(/(Google|Microsoft) /, n[o].brand || n[o])
                              , r = n[o].version;
                            /not.a.brand/i.test(s) || i && (!/chrom/i.test(i) || /chromi/i.test(s)) || (this.set(d, s).set(u, r).set("major", S(r)),
                            i = s)
                        }
                    break;
                case "cpu":
                    var g = t.architecture;
                    g && (g && "64" == t.bitness && (g += "64"),
                    x.call(this.data, g + ";", e));
                    break;
                case "device":
                    if (t.mobile && this.set(c, h),
                    t.model && this.set(a, t.model),
                    "Xbox" == t.model && this.set(c, "console").set(l, "Microsoft"),
                    t.formFactor) {
                        var p;
                        if ("string" != typeof t.formFactor)
                            for (var f = 0; !p && f < t.formFactor.length; )
                                p = B(t.formFactor[f++], P);
                        else
                            p = B(t.formFactor, P);
                        this.set(c, p)
                    }
                    break;
                case "os":
                    var m = t.platform;
                    if (m) {
                        var b = t.platformVersion;
                        "Windows" == m && (b = parseInt(S(b), 10) >= 13 ? "11" : "10"),
                        this.set(d, m).set(u, b)
                    }
                    "Windows" == this.get(d) && "Xbox" == t.model && this.set(d, "Xbox").set(u, void 0);
                    break;
                case "result":
                    var w = this.data
                      , v = function(e) {
                        return w[e].getItem().setCH(t).parseCH().get()
                    };
                    this.set("browser", v("browser")).set("cpu", v("cpu")).set("device", v("device")).set("engine", v("engine")).set("os", v("os"))
                }
                return this
            }
            ,
            O.call(this, [["itemType", t], ["ua", e], ["uaCH", n], ["rgxMap", i], ["data", R(this, t)]]),
            this
        }
        function D(t, e, i) {
            if ("object" == typeof t ? (I(t) ? ("object" == typeof e && (i = e),
            e = t) : (i = t,
            e = void 0),
            t = void 0) : "string" != typeof t || I(e) || (i = e,
            e = void 0),
            !(this instanceof D))
                return new D(t,e,i).getResult();
            var n = "string" == typeof t ? t : b && b.userAgent ? b.userAgent : i && i["user-agent"] ? i["user-agent"] : ""
              , o = new z(i,!0)
              , s = e ? function(t, e) {
                var i = {};
                for (var n in t)
                    i[n] = e[n] && e[n].length % 2 == 0 ? e[n].concat(t[n]) : t[n];
                return i
            }(U, e) : U
              , r = function(t) {
                return "result" == t ? function() {
                    return new M(t,n,s,o).set("ua", n).set("browser", this.getBrowser()).set("cpu", this.getCPU()).set("device", this.getDevice()).set("engine", this.getEngine()).set("os", this.getOS()).get()
                }
                : function() {
                    return new M(t,n,s[t],o).parseUA().get()
                }
            };
            return O.call(this, [["getBrowser", r("browser")], ["getCPU", r("cpu")], ["getDevice", r("device")], ["getEngine", r("engine")], ["getOS", r("os")], ["getResult", r("result")], ["getUA", function() {
                return n
            }
            ], ["setUA", function(t) {
                return A(t) && (n = t.length > 500 ? E(t, 500) : t),
                this
            }
            ]]).setUA(n),
            this
        }
        D.VERSION = "2.0.0-beta.2",
        D.BROWSER = v([d, u, "major"]),
        D.CPU = v(["architecture"]),
        D.DEVICE = v([a, l, c, "console", h, p, g, "wearable", "embedded"]),
        D.ENGINE = D.OS = v([d, u]),
        void 0 !== e ? (void 0 !== t && t.exports && (e = t.exports = D),
        e.UAParser = D) : i(16) ? void 0 === (n = function() {
            return D
        }
        .call(e, i, e, t)) || (t.exports = n) : m && (o.UAParser = D);
        var G = m && (o.jQuery || o.Zepto);
        if (G && !G.ua) {
            var L = new D;
            G.ua = L.getResult(),
            G.ua.get = function() {
                return L.getUA()
            }
            ,
            G.ua.set = function(t) {
                L.setUA(t);
                var e = L.getResult();
                for (var i in e)
                    G.ua[i] = e[i]
            }
        }
    }("object" == typeof window ? window : this)
}
, function(t, e, i) {
    "use strict";
    i.r(e);
    var n = i(3)
      , o = i(5)
      , s = i(2)
      , r = i(11)
      , a = i(10)
      , d = i(6)
      , c = i(0)
      , l = i(1)
      , u = i(7)
      , h = i(8)
      , g = i(12)
      , p = i(9)
      , f = i(4)
      , m = i(13);
    const b = i(17)
      , w = new Event("lngtdPostInit");
    var v;
    v = b,
    window[c.b] = window[c.b] || {},
    window[c.b].que = window[c.b].que || [],
    window[c.c] = window[c.c] || {},
    window[c.c].que = window[c.c].que || [],
    Object(s.h)(),
    d.a.setGlobals(),
    window[c.b] = {
        accountFunctions: {
            pageTypeFunc: null,
            cleanUnitConfigs: null,
            getMustDisplayTogether: null,
            preInit: null,
            postInit: null,
            cmpResolve: null,
            extraLogging: null,
            hideOutstream: null,
            showOutstream: null,
            customRenderHandler: null,
            disableDesktopAnchor: null,
            disableMobileAnchor: null,
            disableSidebarSticky: null,
            bidCpmAdjustment: null,
            getPPID: null,
            getUnitGPID: null,
            canRunAuction: null,
            wrapperStyles: null,
            impressionHandler: null,
            pathOverrides: null,
            renderSkin: null,
            handleSpecialLineItem: null,
            getOrtb2Values: null,
            getGAMPrebidVideoCreativeIds: null,
            getS2sConfig: null
        },
        que: window[c.b].que || [],
        manualExcludeUnits: [],
        refreshDisallowed: [],
        secondChanceDisallowed: [],
        nestedHostMismatchDisallowed: !0,
        skinAdUnitCode: null,
        primaryBaseScriptPath: "//s.lngtdv.com/",
        secondaryBaseScriptPath: "//lngtd.com/",
        loggingEndpoint: "https://it.lngtd.com/",
        videoCacheEndpoint: "https://prebid.adnxs.com/pbc/v1/cache",
        initialized: !1,
        preinitFired: !1,
        postinitFired: !1,
        preInitTestsPass: function() {
            let t = this;
            if (Object(n.e)("disable_lngtd"))
                return Object(s.a)("Ad code disabled, canceling."),
                !1;
            try {
                if (t.nestedHostMismatchDisallowed && window.location.hostname !== window.top.location.hostname)
                    return Object(s.a)("Window location mismatch, canceling."),
                    !1
            } catch (t) {}
            return l.a.getConfig("account.allowedHosts") && l.a.getConfig("account.allowedHosts").length > 0 && -1 === l.a.getConfig("account.allowedHosts").indexOf(document.location.hostname) ? (Object(s.a)("Window location not in allowed hosts, canceling."),
            !1) : !(l.g.country && l.a.getConfig("account.disabledCountries") && l.a.getConfig("account.disabledCountries").indexOf(l.g.country) > -1 || l.g.country && "RU" === l.g.country)
        },
        preInit: function() {
            const t = window[c.b];
            t.adsconfig = l.a,
            t.unitManager = f.c,
            t.consent = u.b,
            t.amazon = a.a,
            t.pvState = l.g,
            (Object(n.e)(c.a) || Object(n.m)(c.a)) && l.a.enableDebug(),
            Object(s.a)("PreInit"),
            t.preInitTestsPass() && (m.a.setupModules(),
            h.a.initializeTestGroups(),
            m.a.preCMP(),
            Object(o.v)(),
            a.a.loadScript(),
            Object(n.j)("http://localhost:8909/static/js/prebid.js"),
            Object(n.e)("sp_test") && l.a.setConfig("account.sourcepointId", parseInt(Object(n.e)("sp_test"))),
            !u.b.cmpApplies() && !u.b.alwaysLoad || Object(n.e)("ignoreCMP") ? window[c.b].cmpReady() : (l.a.getConfig("account.enableSourcepoint") && (u.a.loadStubs(),
            u.a.load()),
            u.b.waitForCMP((function() {
                window[c.b].cmpReady()
            }
            ))))
        },
        cmpReady: function() {
            let t = this;
            Object(s.a)("CMP ready"),
            t.accountFunctions.preInit && "function" == typeof t.accountFunctions.preInit && t.accountFunctions.preInit(),
            t.preinitFired = !0,
            l.h.initialize(),
            l.g.initialize(),
            d.a.loadScript(),
            a.a.initialize(),
            p.a.updateUserIds(),
            Object(n.c)((function() {
                window[c.c].que.push((function() {
                    g.a.updatePrebidConfig(),
                    g.a.setupAliasBidders(),
                    g.a.defineSchainOverrides(),
                    window[c.c].refreshUserIds(),
                    t.initialized = !0,
                    (l.g.runPostInitAutomatically || l.g.queuePostInit) && t.postInit()
                }
                ))
            }
            ))
        },
        postInit: function(t) {
            let e = this;
            if (t = void 0 !== t ? t : "route_change",
            Object(s.a)("PostInit", t),
            !e.initialized)
                return Object(s.a)("Code not initialized properly, canceling."),
                void (l.g.queuePostInit = !0);
            if (l.a.getConfig("account.autorun"))
                if (!this.accountFunctions.canRunAuction || "function" != typeof this.accountFunctions.canRunAuction || this.accountFunctions.canRunAuction()) {
                    if (l.a.getConfig("account.disallowedUrls") && l.a.getConfig("account.disallowedUrls").length > 0) {
                        let t = l.a.getConfig("account.disallowedUrls")
                          , e = document.location.pathname;
                        for (let i = 0; i < t.length; i++)
                            if (-1 !== e.indexOf(t[i]))
                                return void Object(s.a)("This url is not allowed to run ads, canceling.")
                    }
                    e.postinitFired = !0,
                    r.a.load(),
                    r.b.load(),
                    m.a.postCMP(),
                    l.a.getConfig("account.dropBidderTest") && h.a.dropBidder(),
                    l.a.getConfig("account.useGAM") && d.a.initialize(),
                    Object(n.c)((function() {
                        f.c.initializeUnits(),
                        f.c.setUpUnitMediation(),
                        f.c.addListeners(),
                        g.a.bindEvents(),
                        e.bindEventHandlers(),
                        e.accountFunctions.postInit && "function" == typeof e.accountFunctions.postInit && e.accountFunctions.postInit(),
                        document.dispatchEvent(w);
                        for (let t = 0; t < f.c.adUnits.length; t++) {
                            let e = f.c.adUnits[t];
                            Object(n.c)((function() {
                                e.doPostInit()
                            }
                            ))
                        }
                        e.initializeQueue()
                    }
                    ))
                } else
                    Object(s.a)("Not allowed to run auction, canceling.");
            else
                Object(s.a)("Autorun disallowed, canceling.")
        },
        initializeQueue: function() {
            const t = this;
            if (window[c.b].que.length)
                for (; window[c.b].que.length > 0; ) {
                    const e = window[c.b].que.shift();
                    t.processQueueItem(e)
                }
            window[c.b].que = new Proxy(window[c.b].que,{
                set: (e, i, n) => ("function" == typeof n && t.processQueueItem(n),
                !0)
            })
        },
        processQueueItem: function(t) {
            Object(n.c)((function() {
                try {
                    t()
                } catch (t) {
                    Object(s.a)("Error executing queued function", t)
                }
            }
            ))
        },
        eventHandlersBound: !1,
        bindEventHandlers: function() {
            let t = this;
            t.eventHandlersBound || (Object(s.a)("Binding event handlers", t.eventHandlersBound),
            t.eventHandlersBound = !0,
            Object(n.n)("scroll", "throttledScroll", window),
            window.addEventListener("throttledScroll", o.s),
            window.addEventListener("focus", o.m),
            window.addEventListener("blur", o.j),
            window.addEventListener("click", o.k),
            window.addEventListener("touchstart", o.k),
            Object(n.n)("mousemove", "throttledMouseMove", window),
            window.addEventListener("throttledMouseMove", o.n),
            Object(n.n)("resize", "throttledResize", window),
            window.addEventListener("throttledResize", (function() {
                Object(o.q)()
            }
            )))
        },
        reset: function(t) {
            d.a.resetUnits(),
            g.a.unbindEvents(),
            window[c.c].que.push((function() {
                window[c.c].removeAdUnit()
            }
            )),
            this.manualExcludeUnits = [],
            f.c.resetAnchors(),
            f.c.resetMoments(),
            f.c.retireAllUnits(),
            f.c.removeAdWrapperStyles(),
            g.a.resetConfig()
        },
        resetUnit: function(t) {
            const e = f.c.getUnitFromId(t);
            e.displayed = !1,
            e.refreshed = !1,
            e.retired = !1,
            e.impressionType = "init",
            e.lastAuction = null,
            e.doPostInit()
        },
        resetAndRunAuction: function(t) {
            Object(s.a)("Reset and run auction called"),
            document.dispatchEvent(new CustomEvent("resetAndRunAuction",{
                detail: {
                    trigger: t
                }
            }));
            const e = window[c.b];
            t = void 0 !== t ? t : "route_change",
            e.reset(t),
            l.g.newPageView(),
            l.a.getConfig("account.dropBidderTest") && h.a.resetDropBidder(),
            e.postInit(t)
        },
        refreshPaused: !1,
        pauseRefresh: function(t, e) {
            t = void 0 === t || t,
            this.refreshPaused || (Object(s.a)("PAUSING REFRESH"),
            this.refreshPaused = Date.now(),
            t && document.addEventListener("userInteraction", (function() {
                window[c.b].restartRefresh("user_interaction")
            }
            )),
            "userInteraction" === e && document.dispatchEvent(o.p),
            Object(s.e)("refresh_pause", Object(s.b)(), null, null))
        },
        restartRefresh: function(t) {
            let e = window[c.b];
            if (e.refreshPaused) {
                let i = Date.now() - e.refreshPaused;
                Object(s.a)(`RESTARTING REFRESH after ${i}ms`),
                e.refreshPaused = !1,
                document.dispatchEvent(o.r);
                let n = {
                    time_since_pause: i,
                    trigger: t
                };
                Object(s.e)("refresh_restart", Object(s.b)(), null, n),
                i < 18e4 ? f.c.adUnits.forEach((function(t) {
                    t.display("refreshRestarted")
                }
                )) : e.resetAndRunAuction("restartRefresh")
            }
        },
        start: function() {
            this.preinitFired ? this.postinitFired || (l.a.setConfig("account.autorun", !0),
            this.postInit()) : this.accountFunctions.preInit = function() {
                l.a.setConfig("account.autorun", !0)
            }
        },
        fallbackForUnfilledNoGAM: function(t) {},
        logPageView: function() {
            Object(s.f)()
        },
        handleHeavyAdIntervention: function(t, e, i) {
            if (t && "HeavyAdIntervention" === t.body.id) {
                let t = f.c.getUnitFromId(i);
                Object(s.a)("HEAVY AD INTERVENTION", e, i, t),
                t.handleHeavyAdIntervention()
            }
        },
        getAdvertisingUrlPromiseForPlayer: function(t) {
            const e = this;
            let i = t.unitId
              , o = t.runAuction || !0;
            const r = t.runAuction || "https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/single_preroll_skippable&sz=640x480&ciu_szs=300x250%2C728x90&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=";
            let a = 0;
            return new Promise((function(t, d) {
                const c = setInterval((function() {
                    if (e.eventHandlersBound) {
                        clearInterval(c);
                        let e = f.c.getUnitFromId(i);
                        if (e || t(r),
                        Object(n.e)("testtag"))
                            t(r);
                        else {
                            if (!o)
                                return e.getWinningAdUrl();
                            e.videoAuctionPromise().then((function() {
                                let i, n = r, o = e.getHighestBid(!1);
                                o && (i = e.bidCachePromises[o.requestId]),
                                o && i ? (Object(s.a)(`We do not have a winning video url but we do have a winning bid for ${e.config.elementId} ... attempting to resolve bid cache promise`),
                                i.then((function() {
                                    n = e.getWinningAdUrl(),
                                    t(n)
                                }
                                )).catch((function() {
                                    n = e.getWinningAdUrl(),
                                    t(n)
                                }
                                ))) : (n = e.getWinningAdUrl(),
                                t(n))
                            }
                            )).catch((function(e) {
                                t(r)
                            }
                            ))
                        }
                    }
                    if (a >= 50)
                        return clearInterval(c),
                        r;
                    a++
                }
                ), 100)
            }
            ))
        },
        interstitialConfigs: null,
        getInterstitialUnitsForEnv: function(t) {
            let e = [];
            try {
                let i = this.interstitialConfigs[t];
                return e = l.g.isMobile() ? i.units.mobile : l.g.isTablet() ? i.units.tablet : i.units.desktop,
                "string" == typeof e && (e = [e]),
                e
            } catch (t) {
                return e
            }
        },
        initInterstitial: function(t) {
            let e = this
              , i = [t = void 0 !== t ? t : "default"];
            e.interstitialConfigs && (i = e.getInterstitialUnitsForEnv(t));
            for (let e = 0; e < i.length; e++) {
                let n = i[e]
                  , o = f.c.getUnitFromId(n);
                o ? o.initialize() : Object(s.a)(`The interstitial unit with id ${n} for config ${t} does not exist`)
            }
        },
        _findWinningInterstitialUnit: function(t, e) {
            let i, n;
            for (let o = 0; o < t.length; o++) {
                let r = t[o]
                  , a = f.c.getUnitFromId(r);
                if (a) {
                    let t = a.getHighestBid();
                    t && (n ? t.cpm > n && (n = t.cpm,
                    i = a) : (n = t.cpm,
                    i = a))
                } else
                    Object(s.a)(`The interstitial unit with id ${r} for config ${e} does not exist`)
            }
            return i
        },
        triggerInterstitial: function(t, e) {
            let i = this
              , n = [e = void 0 !== e ? e : "default"];
            i.interstitialConfigs && (n = i.getInterstitialUnitsForEnv(e));
            let o = i._findWinningInterstitialUnit(n, e);
            if (o)
                o.trigger(t);
            else {
                Object(s.a)(`There was no winning ad unit for interstitial ${e}`);
                try {
                    void 0 !== t.fallbackFunction && "function" == typeof t.fallbackFunction ? t.fallbackFunction() : void 0 !== t.adBreakDone && "function" == typeof t.adBreakDone && t.adBreakDone()
                } catch (t) {}
            }
        },
        showVideoInterstitial: function(t, e) {
            let i, n = this, o = {
                type: "interstitial",
                name: "interstitial",
                minViewTime: 8e3,
                maxAdBreak: e,
                beforeAd: function() {},
                adBreakDone: function() {
                    "function" == typeof t && t()
                }
            }, r = ["video-interstitial"];
            this.interstitialConfigs && (r = n.getInterstitialUnitsForEnv(r)),
            r && (i = f.c.getUnitFromId(r[0])),
            i ? i.trigger(o) : Object(s.a)(`The interstitial ${unitId} does not exist`)
        },
        renderDispatchAd: function(t, e, i, n, o) {
            "multi" === o ? f.c.getUnitFromId(n).determineWinnerAndRender(t, e) : "skin" === o ? window[c.b].accountFunctions.renderSkin && "function" == typeof window[c.b].accountFunctions.renderSkin && window[c.b].accountFunctions.renderSkin(n) : window[c.c].renderAd(t, e)
        }
    },
    l.a.initialize(v),
    u.b.initialize(),
    new Promise((function(t, e) {
        let i, o = function(e) {
            clearTimeout(i),
            Object(s.e)("config_failure", Object(s.b)(), null, {
                reason: e
            }),
            u.b.geoResolved = !1,
            u.b.attemptToSetStateByAvailableAPIs(),
            t()
        }, r = new window.XMLHttpRequest;
        if (r.onreadystatechange = function() {
            if (4 === r.readyState) {
                let e = r.status;
                if (e >= 200 && e < 300 || 304 === e) {
                    let e = JSON.parse(r.responseText);
                    l.g.country = e.country,
                    l.g.regionState = e.regionState,
                    l.g.continent = e.continent,
                    l.g.ip = e.ip,
                    l.g.floors = e.floors,
                    l.g.zzMap = e.zzMap || {},
                    u.b.updateConsentGeos(e.continent, e.country, e.regionState),
                    e.excludeFromRefresh && l.a.setConfig("account.sponsorshipLineItemIds", e.excludeFromRefresh),
                    e.specialIds && l.a.setConfig("account.specialLineItemIds", e.specialIds),
                    u.b.geoResolved = !0,
                    clearTimeout(i),
                    t()
                }
            }
        }
        ,
        r.onerror = function() {
            const t = `error ${r.status}: ${r.statusText}`;
            o(t)
        }
        ,
        Object(n.e)("disable_lngtd"))
            Object(s.a)("Not allowed to run auction, canceling."),
            e();
        else {
            let t = (l.a.getConfig("account.configEndpoint") || "https://floors.lngtd.com/?") + "account=" + l.a.getConfig("account.name") + "&section=" + l.a.getConfig("account.section");
            r.open("GET", t, !0),
            r.send(),
            i = setTimeout((function() {
                r.abort(),
                o("timeout")
            }
            ), 1e4)
        }
    }
    )).then(window[c.b].preInit, (function() {}
    )),
    i(18)
}
, function(t, e) {
    (function(e) {
        t.exports = e
    }
    ).call(this, {})
}
, function(t) {
    t.exports = JSON.parse('{"account":{"name":"bookrags","organization":"Longitude","section":"default","allowedHosts":[],"disallowedUrls":[],"currency":"USD","amazonPublisherId":"c8b7d244-cdfc-48df-8b4a-98e8c4fadc6a","prebidPath":"//s.lngtdv.com/prebid/prebid7.42.1.min.js","lngtdAdvertiserId":"4874962235","refreshEnabled":true,"refreshInterval":30000,"dynamicFloorsEnabled":true,"floorMinimumCents":"5.00","adXMultiplier":"1.50","useGAM":true,"skipGAMOnNoBids":false,"deliverPrebidIfNoGAMFill":true,"dropBidderTest":true,"shouldFilterNonActiveBidders":true,"emptyAuctionLimitByMedia":{"banner":3,"video":3},"smartRequestSettings":{"row":{"banner":3,"video":3,"disabledTimeQty":120000,"lastBidAgeMax":90000}},"initRequiresFocus":false,"refreshRequiresFocus":false,"refreshRequiresUserInteraction":false,"refreshUnfilledImpressions":false,"refreshUnfilledImpressionsAfter":30000,"allowUnfilledRetries":1,"autorun":true,"autoDisplayAds":true,"disabledCountries":[],"desktopTimeout":2500,"mobileTimeout":2750,"pricePoints":["0.01","0.02","0.03","0.04","0.05","0.06","0.07","0.08","0.09","0.10","0.11","0.12","0.13","0.14","0.15","0.16","0.17","0.18","0.19","0.20","0.21","0.22","0.23","0.24","0.25","0.26","0.27","0.28","0.29","0.30","0.31","0.32","0.33","0.34","0.35","0.36","0.37","0.38","0.39","0.40","0.41","0.42","0.43","0.44","0.45","0.46","0.47","0.48","0.49","0.50","0.55","0.60","0.65","0.70","0.75","0.80","0.85","0.90","0.95","1.00","1.05","1.10","1.15","1.20","1.25","1.30","1.35","1.40","1.45","1.50","1.55","1.60","1.65","1.70","1.75","1.80","1.85","1.90","1.95","2.00","2.05","2.10","2.15","2.20","2.25","2.30","2.35","2.40","2.45","2.50","2.55","2.60","2.65","2.70","2.75","2.80","2.85","2.90","2.95","3.00","3.05","3.10","3.15","3.20","3.25","3.30","3.35","3.40","3.45","3.50","3.55","3.60","3.65","3.70","3.75","3.80","3.85","3.90","3.95","4.00","4.05","4.10","4.15","4.20","4.25","4.30","4.35","4.40","4.45","4.50","4.55","4.60","4.65","4.70","4.75","4.80","4.85","4.90","4.95","5.00","5.10","5.20","5.30","5.40","5.50","5.60","5.70","5.80","5.90","6.00","6.10","6.20","6.30","6.40","6.50","6.60","6.70","6.80","6.90","7.00","7.10","7.20","7.30","7.40","7.50","7.60","7.70","7.80","7.90","8.00","8.10","8.20","8.30","8.40","8.50","8.60","8.70","8.80","8.90","9.00","9.10","9.20","9.30","9.40","9.50","9.60","9.70","9.80","9.90","10.00","10.50","11.00","11.50","12.00","12.50","13.00","13.50","14.00","14.50","15.00","15.50","16.00","16.50","17.00","17.50","18.00","18.50","19.00","19.50","20.00","21.00","22.00","23.00","24.00","25.00","26.00","27.00","28.00","29.00","30.00","31.00","32.00","33.00","34.00","35.00","36.00","37.00","38.00","39.00","40.00","41.00","42.00","43.00","44.00","45.00","46.00","47.00","48.00","49.00","50.00","60.00","70.00","80.00","90.00","100.00","150.00","200.00","250.00","300.00","350.00","400.00","450.00","500.00","550.00","600.00","650.00","700.00","750.00","800.00","850.00","900.00","950.00","1000.00"],"pricePointsNew":["0.01","0.02","0.03","0.04","0.05","0.06","0.07","0.08","0.09","0.10","0.11","0.12","0.13","0.14","0.15","0.16","0.17","0.18","0.19","0.20","0.21","0.22","0.23","0.24","0.25","0.26","0.27","0.28","0.29","0.30","0.31","0.32","0.33","0.34","0.35","0.36","0.37","0.38","0.39","0.40","0.41","0.42","0.43","0.44","0.45","0.46","0.47","0.48","0.49","0.50","0.51","0.52","0.53","0.54","0.55","0.56","0.57","0.58","0.59","0.60","0.61","0.62","0.63","0.64","0.65","0.66","0.67","0.68","0.69","0.70","0.71","0.72","0.73","0.74","0.75","0.76","0.77","0.78","0.79","0.80","0.81","0.82","0.83","0.84","0.85","0.86","0.87","0.88","0.89","0.90","0.91","0.92","0.93","0.94","0.95","0.96","0.97","0.98","0.99","1.00","1.01","1.02","1.03","1.04","1.05","1.06","1.07","1.08","1.09","1.10","1.11","1.12","1.13","1.14","1.15","1.16","1.17","1.18","1.19","1.20","1.21","1.22","1.23","1.24","1.25","1.26","1.27","1.28","1.29","1.30","1.31","1.32","1.33","1.34","1.35","1.36","1.37","1.38","1.39","1.40","1.41","1.42","1.43","1.44","1.45","1.46","1.47","1.48","1.49","1.50","1.51","1.52","1.53","1.54","1.55","1.56","1.57","1.58","1.59","1.60","1.61","1.62","1.63","1.64","1.65","1.66","1.67","1.68","1.69","1.70","1.71","1.72","1.73","1.74","1.75","1.76","1.77","1.78","1.79","1.80","1.81","1.82","1.83","1.84","1.85","1.86","1.87","1.88","1.89","1.90","1.91","1.92","1.93","1.94","1.95","1.96","1.97","1.98","1.99","2.00","2.05","2.10","2.15","2.20","2.25","2.30","2.35","2.40","2.45","2.50","2.55","2.60","2.65","2.70","2.75","2.80","2.85","2.90","2.95","3.00","3.05","3.10","3.15","3.20","3.25","3.30","3.35","3.40","3.45","3.50","3.55","3.60","3.65","3.70","3.75","3.80","3.85","3.90","3.95","4.00","4.05","4.10","4.15","4.20","4.25","4.30","4.35","4.40","4.45","4.50","4.55","4.60","4.65","4.70","4.75","4.80","4.85","4.90","4.95","5.00","5.05","5.10","5.15","5.20","5.25","5.30","5.35","5.40","5.45","5.50","5.55","5.60","5.65","5.70","5.75","5.80","5.85","5.90","5.95","6.00","6.05","6.10","6.15","6.20","6.25","6.30","6.35","6.40","6.45","6.50","6.55","6.60","6.65","6.70","6.75","6.80","6.85","6.90","6.95","7.00","7.05","7.10","7.15","7.20","7.25","7.30","7.35","7.40","7.45","7.50","7.55","7.60","7.65","7.70","7.75","7.80","7.85","7.90","7.95","8.00","8.05","8.10","8.15","8.20","8.25","8.30","8.35","8.40","8.45","8.50","8.55","8.60","8.65","8.70","8.75","8.80","8.85","8.90","8.95","9.00","9.05","9.10","9.15","9.20","9.25","9.30","9.35","9.40","9.45","9.50","9.55","9.60","9.65","9.70","9.75","9.80","9.85","9.90","9.95","10.00","10.50","11.00","11.50","12.00","12.50","13.00","13.50","14.00","14.50","15.00","15.50","16.00","16.50","17.00","17.50","18.00","18.50","19.00","19.50","20.00","21.00","22.00","23.00","24.00","25.00","26.00","27.00","28.00","29.00","30.00","31.00","32.00","33.00","34.00","35.00","36.00","37.00","38.00","39.00","40.00","41.00","42.00","43.00","44.00","45.00","46.00","47.00","48.00","49.00","50.00","55.00","60.00","65.00","70.00","75.00","80.00","85.00","90.00","95.00","100.00","150.00","200.00","250.00","300.00","350.00","400.00","450.00","500.00","550.00","600.00","650.00","700.00","750.00","800.00","850.00","900.00","950.00","1000.00"],"useNewTargeting":false,"excludeSponsorshipFromRefresh":false,"sponsorshipLineItemIds":[""],"specialLineItemIds":{},"enableConfiant":true,"confiantGeos":["US","CA"],"enableLiveIntent":true,"liveintentId":"did-0041","enableHumanSecurity":false,"humanSecurityClientId":false,"enableBlockthrough":true,"blockthroughScriptPath":"//longitudeads-com.videoplayerhub.com/galleryplayer.js","enableSourcepoint":true,"sourcepointId":1368,"gdprVendorExceptions":[],"videoPlaylist":[],"ignoreAdvertiserIds":[],"configEndpoint":"https://floors.lngtd.com/?","confiantId":"GM-mpgJd-xsukoK5g6tV5fN1ayw"},"schain":{"validation":"strict","config":{"ver":"1.0","complete":1,"nodes":[{"asi":"longitudeads.com","sid":"9411","hp":1}]}},"partners":[{"shortName":"adagio","gamId":"","revShare":"1.00","allowRefresh":true,"unitFloors":{"div-gpt-ad-1433430846862-3":"0.00","bookrags_M_outstream":"0.00","bookrags_M_N_A":"0.00","bookrags_D_N_A":"0.00","bookrags_D_N_1":"0.00","div-gpt-ad-1433430846862-2":"0.00","BR_Mobile_Anchor":"0.00","bookrags_D_outstream":"0.00","BR_D_728x90_Anchor":"0.00"},"geoRestrictionsInclude":null,"geoRestrictionsExclude":null,"schainOverride":{}},{"shortName":"adx","gamId":"4879413283","revShare":"1.00","allowRefresh":true,"unitFloors":{},"geoRestrictionsInclude":null,"geoRestrictionsExclude":null,"schainOverride":{}},{"shortName":"amazon","gamId":"4873547270","revShare":"1.00","allowRefresh":true,"unitFloors":{"bookrags_M_outstream":"0.00","BR_D_728x90_Anchor":"0.00","bookrags_D_N_A":"0.00","bookrags_M_N_A":"0.00","bookrags_D_outstream":"0.00","BR_Mobile_Anchor":"0.00","div-gpt-ad-1433430846862-3":"0.00","div-gpt-ad-1433430846862-2":"0.00"},"geoRestrictionsInclude":null,"geoRestrictionsExclude":null,"schainOverride":{}},{"shortName":"appnexus","gamId":"73221392","revShare":"1.00","allowRefresh":true,"unitFloors":{"bookrags_M_outstream":"0.00","bookrags_M_N_A":"0.00","bookrags_D_outstream":"0.00","div-gpt-ad-1433430846862-3":"0.00","div-gpt-ad-1433430846862-2":"0.00","BR_Mobile_Anchor":"0.00","BR_D_728x90_Anchor":"0.00"},"geoRestrictionsInclude":null,"geoRestrictionsExclude":null,"schainOverride":{}},{"shortName":"conversant","gamId":"4590915326","revShare":"1.00","allowRefresh":true,"unitFloors":{"bookrags_M_outstream":"0.00","BR_Mobile_Anchor":"0.00","bookrags_D_outstream":"0.00","BR_D_728x90_Anchor":"0.00","div-gpt-ad-1433430846862-2":"0.00","div-gpt-ad-1433430846862-3":"0.00"},"geoRestrictionsInclude":["UK","DE","US","GB","CA","AU","FR","SE","ES","FI","NL"],"geoRestrictionsExclude":null,"schainOverride":{}},{"shortName":"criteo","gamId":"","revShare":"1.00","allowRefresh":true,"unitFloors":{"bookrags_M_outstream":"0.00","bookrags_D_outstream":"0.00","BR_Mobile_Anchor":"0.00","BR_D_728x90_Anchor":"0.00","div-gpt-ad-1433430846862-3":"0.00","div-gpt-ad-1433430846862-2":"0.00"},"geoRestrictionsInclude":null,"geoRestrictionsExclude":null,"schainOverride":{}},{"shortName":"gumgum","gamId":"","revShare":"1.00","allowRefresh":true,"unitFloors":{"bookrags_M_outstream":"0.00","bookrags_D_outstream":"0.00","div-gpt-ad-1433430846862-3":"0.00","div-gpt-ad-1433430846862-2":"0.00","BR_D_728x90_Anchor":"0.00"},"geoRestrictionsInclude":["US"],"geoRestrictionsExclude":null,"schainOverride":{}},{"shortName":"ix","gamId":"90270632","revShare":"1.00","allowRefresh":true,"unitFloors":{"bookrags_M_outstream":"0.00","bookrags_M_N_A":"0.00","bookrags_D_N_A":"0.00","bookrags_D_N_1":"0.00","bookrags_D_outstream":"0.00","BR_Mobile_Anchor":"0.00","BR_D_728x90_Anchor":"0.00","div-gpt-ad-1433430846862-3":"0.00","div-gpt-ad-1433430846862-2":"0.00"},"geoRestrictionsInclude":null,"geoRestrictionsExclude":null,"schainOverride":{}},{"shortName":"kargo","gamId":"","revShare":"1.00","allowRefresh":true,"unitFloors":{"bookrags_M_outstream":"0.00","BR_Mobile_Anchor":"0.00","bookrags_D_outstream":"0.00","BR_D_728x90_Anchor":"0.00","div-gpt-ad-1433430846862-3":"0.00","div-gpt-ad-1433430846862-2":"0.00"},"geoRestrictionsInclude":null,"geoRestrictionsExclude":null,"schainOverride":{}},{"shortName":"grid","gamId":"","revShare":"1.00","allowRefresh":true,"unitFloors":{"bookrags_M_outstream":"0.00","bookrags_M_N_A":"0.00","bookrags_D_N_A":"0.00","bookrags_D_N_1":"0.00","bookrags_D_outstream":"0.00","BR_Mobile_Anchor":"0.00","BR_D_728x90_Anchor":"0.00","div-gpt-ad-1433430846862-3":"0.00","div-gpt-ad-1433430846862-2":"0.00"},"geoRestrictionsInclude":null,"geoRestrictionsExclude":null,"schainOverride":{}},{"shortName":"medianet","gamId":"","revShare":"1.00","allowRefresh":true,"unitFloors":{"bookrags_M_outstream":"0.00","bookrags_D_outstream":"0.00","div-gpt-ad-1433430846862-2":"0.00","div-gpt-ad-1433430846862-3":"0.00","BR_D_728x90_Anchor":"0.00","BR_Mobile_Anchor":"0.00"},"geoRestrictionsInclude":null,"geoRestrictionsExclude":null,"schainOverride":{}},{"shortName":"nativo","gamId":"","revShare":"1.00","allowRefresh":true,"unitFloors":{"BR_Mobile_Anchor":"0.00","BR_D_728x90_Anchor":"0.00","div-gpt-ad-1433430846862-3":"0.00","div-gpt-ad-1433430846862-2":"0.00"},"geoRestrictionsInclude":null,"geoRestrictionsExclude":null,"schainOverride":{}},{"shortName":"ogury","gamId":"","revShare":"1.00","allowRefresh":true,"unitFloors":{"BR_Mobile_Anchor":"0.00"},"geoRestrictionsInclude":null,"geoRestrictionsExclude":null,"schainOverride":{}},{"shortName":"pubmatic","gamId":"","revShare":"1.00","allowRefresh":true,"unitFloors":{"bookrags_M_outstream":"0.00","bookrags_M_N_A":"0.00","bookrags_D_outstream":"0.00","div-gpt-ad-1433430846862-2":"0.00","div-gpt-ad-1433430846862-3":"0.00","BR_D_728x90_Anchor":"0.00","BR_Mobile_Anchor":"0.00"},"geoRestrictionsInclude":null,"geoRestrictionsExclude":["AL","BA","BI","BY","CD","CF","CU","IR","IQ","KP","LB","LY","ME","MK","RS","SD","RU","SS","SO","SY","UA","VE","YE","ZW"],"schainOverride":{}},{"shortName":"rubicon","gamId":"75584792","revShare":"1.00","allowRefresh":true,"unitFloors":{"bookrags_M_outstream":"0.00","bookrags_M_N_A":"0.00","bookrags_D_outstream":"0.00","div-gpt-ad-1433430846862-2":"0.00","BR_Mobile_Anchor":"0.00","div-gpt-ad-1433430846862-3":"0.00","BR_D_728x90_Anchor":"0.00"},"geoRestrictionsInclude":null,"geoRestrictionsExclude":null,"schainOverride":{}},{"shortName":"sharethrough","gamId":"","revShare":"1.00","allowRefresh":true,"unitFloors":{"bookrags_M_outstream":"0.00","bookrags_D_outstream":"0.00"},"geoRestrictionsInclude":null,"geoRestrictionsExclude":null,"schainOverride":{}},{"shortName":"sovrn","gamId":"75655832","revShare":"1.00","allowRefresh":true,"unitFloors":{"bookrags_M_outstream":"0.00"},"geoRestrictionsInclude":null,"geoRestrictionsExclude":null,"schainOverride":{}}],"adUnits":[{"uid":25,"gamPath":"/22020501169,1022590/bookrags/bookrags_D_1","gamSizes":[[300,250],[160,600],[300,600],[120,600]],"clsSize":null,"code":"div-gpt-ad-1433430846862-2","elementId":"div-gpt-ad-1433430846862-2","mediaTypes":{"banner":{"sizes":[[300,250],[160,600],[300,600],[120,600]]}},"bids":[{"bidder":"amazon","params":{"slot_id":"/22020501169,1022590/bookrags/bookrags_D_1","publisher_id":"c8b7d244-cdfc-48df-8b4a-98e8c4fadc6a"}},{"bidder":"nativo","params":{"placementId":"1250602"}},{"bidder":"adagio","params":{"placement":"bookrags_D_1","adUnitElementId":"div-gpt-ad-1433430846862-2","organizationId":"1240","site":"bookrags-com","pagetype":"default","divId":"div-gpt-ad-1433430846862-2"}},{"bidder":"rubicon","params":{"siteId":"95446","zoneId":"448412","accountId":"13708"}},{"bidder":"gumgum","params":{"slot":"228653","zone":"grg9rkjy"}},{"bidder":"kargo","params":{"placementId":"_gaPmoQVbVP"}},{"bidder":"grid","params":{"uid":"172095","video":{"placement":5}}},{"bidder":"medianet","params":{"crid":"949142513","cid":"8CUA0SYJJ"}},{"bidder":"pubmatic","params":{"adSlot":"bookrags_D_1","publisherId":"160037"}},{"bidder":"criteo","params":{"zoneId":1536507,"networkId":"125"}},{"bidder":"criteo","params":{"zoneId":1536505,"networkId":"125"}},{"bidder":"criteo","params":{"zoneId":1536503,"networkId":"125"}},{"bidder":"ix","params":{"siteId":"522323"}},{"bidder":"conversant","params":{"tag_id":"253b7e5f","site_id":"202225","secure":"1"}},{"bidder":"appnexus","params":{"placementId":"6576117"}}],"deviceType":"desktop","deviceTypes":["desktop"],"refresh":true,"lazyLoad":false,"requireBids":false,"baseFloor":"0.05","dynamicFloorParameters":"{\\"auction_type\\": {\\"init\\": 0.07, \\"refresh\\": 0.21}, \\"impression_tracker_floors\\": {\\"default\\": 0.09, \\"Safari_US\\": 0.6, \\"Edge_US\\": 0.31, \\"Chrome_US_desktop_default_A\\": 1.11, \\"Chrome_US\\": 0.94, \\"AU\\": 0.07, \\"Chrome_US_desktop_default_B\\": 0.72, \\"GB\\": 0.1, \\"Safari_CA\\": 0.2, \\"Chrome_CA_desktop_default_A\\": 0.31, \\"KR\\": 0.56, \\"US\\": 0.86, \\"CA\\": 0.23, \\"Chrome_CA\\": 0.31, \\"Chrome_US_desktop_default_C\\": 0.81}}","sections":["default"]},{"uid":26,"gamPath":"/22020501169,1022590/bookrags/bookrags_D_2","gamSizes":[[300,250],[160,600],[300,600],[120,600]],"clsSize":null,"code":"div-gpt-ad-1433430846862-3","elementId":"div-gpt-ad-1433430846862-3","mediaTypes":{"banner":{"sizes":[[300,250],[160,600],[300,600],[120,600]]}},"bids":[{"bidder":"adagio","params":{"placement":"bookrags_D_2","adUnitElementId":"div-gpt-ad-1433430846862-3","organizationId":"1240","site":"bookrags-com","pagetype":"default","divId":"div-gpt-ad-1433430846862-3"}},{"bidder":"amazon","params":{"slot_id":"/22020501169,1022590/bookrags/bookrags_D_2","publisher_id":"c8b7d244-cdfc-48df-8b4a-98e8c4fadc6a"}},{"bidder":"nativo","params":{"placementId":"1250603"}},{"bidder":"kargo","params":{"placementId":"_mfJHiVFXym"}},{"bidder":"gumgum","params":{"slot":"228654","zone":"grg9rkjy"}},{"bidder":"appnexus","params":{"placementId":"6576119"}},{"bidder":"grid","params":{"uid":"172097","video":{"placement":5}}},{"bidder":"medianet","params":{"crid":"949142513","cid":"8CUA0SYJJ"}},{"bidder":"pubmatic","params":{"adSlot":"bookrags_D_2","publisherId":"160037"}},{"bidder":"criteo","params":{"zoneId":1536508,"networkId":"125"}},{"bidder":"criteo","params":{"zoneId":1536506,"networkId":"125"}},{"bidder":"criteo","params":{"zoneId":1536504,"networkId":"125"}},{"bidder":"ix","params":{"siteId":"522324"}},{"bidder":"conversant","params":{"tag_id":"eca6419a","site_id":"202225","secure":"1"}},{"bidder":"rubicon","params":{"siteId":"95446","zoneId":"448414","accountId":"13708"}}],"deviceType":"desktop","deviceTypes":["desktop"],"refresh":true,"lazyLoad":false,"requireBids":false,"baseFloor":"0.05","dynamicFloorParameters":"{\\"auction_type\\": {\\"refresh\\": 0.061, \\"init\\": 0.177}, \\"impression_tracker_floors\\": {\\"default\\": 0.09, \\"GB\\": 0.07, \\"Chrome_US_desktop_default_A\\": 1.16, \\"Edge_US\\": 0.3, \\"Safari_US\\": 0.45, \\"Chrome_US_desktop_default_C\\": 0.81, \\"Chrome_CA\\": 0.21, \\"Safari_US_desktop_default_A\\": 0.34, \\"CA\\": 0.12, \\"Chrome_US_desktop_default_B\\": 1.14, \\"DE\\": 0.05, \\"Safari_CA\\": 0.05, \\"Chrome_US\\": 1.02, \\"AU\\": 0.05, \\"US\\": 0.88, \\"Chrome_CA_desktop_default_A\\": 0.25}}","sections":["default"]},{"uid":244,"gamPath":"/22020501169,1022590/bookrags/bookrags_D_A","gamSizes":[[728,90]],"clsSize":null,"code":"BR_D_728x90_Anchor","elementId":"BR_D_728x90_Anchor","mediaTypes":{"banner":{"sizes":[[728,90]]}},"bids":[{"bidder":"criteo","params":{"zoneId":1536509,"networkId":"125"}},{"bidder":"ix","params":{"siteId":"522325"}},{"bidder":"nativo","params":{"placementId":"1253939"}},{"bidder":"gumgum","params":{"slot":"","zone":"grg9rkjy"}},{"bidder":"medianet","params":{"crid":"949142513","cid":"8CUA0SYJJ"}},{"bidder":"grid","params":{"uid":"172096","video":{"placement":5}}},{"bidder":"pubmatic","params":{"adSlot":"bookrags_D_A","publisherId":"160037"}},{"bidder":"rubicon","params":{"siteId":"95446","zoneId":"1659366","accountId":"13708"}},{"bidder":"kargo","params":{"placementId":"_bWlVLH0SN2"}},{"bidder":"adagio","params":{"placement":"bookrags_D_A","adUnitElementId":"BR_D_728x90_Anchor","organizationId":"1240","site":"bookrags-com","pagetype":"default","divId":"BR_D_728x90_Anchor"}},{"bidder":"appnexus","params":{"placementId":"19009616"}},{"bidder":"conversant","params":{"tag_id":"2ab79769","site_id":"202225","secure":"1"}},{"bidder":"amazon","params":{"slot_id":"/22020501169,1022590/bookrags/bookrags_D_A","publisher_id":"c8b7d244-cdfc-48df-8b4a-98e8c4fadc6a"}}],"deviceType":"desktop","deviceTypes":["desktop"],"refresh":true,"lazyLoad":false,"requireBids":false,"baseFloor":"0.10","dynamicFloorParameters":"{\\"auction_type\\": {\\"refresh\\": 0.255, \\"init\\": 0.056}, \\"impression_tracker_floors\\": {\\"default\\": 0.13, \\"Safari_US_desktop_default_A\\": 0.25, \\"Chrome_CA\\": 0.34, \\"Edge_US\\": 0.36, \\"DE\\": 0.05, \\"Safari_CA\\": 0.1, \\"Chrome_CA_desktop_default_A\\": 0.66, \\"AU\\": 0.05, \\"Chrome_US_desktop_default_A\\": 1.0, \\"US\\": 0.86, \\"Chrome_US_desktop_default_B\\": 0.82, \\"Chrome_US\\": 1.04, \\"Safari_US\\": 0.37, \\"Chrome_US_desktop_default_C\\": 1.42, \\"GB\\": 0.08, \\"CA\\": 0.23}}","sections":["default"],"unitType":"danchor"},{"uid":1223,"gamPath":"/22020501169,1022590/bookrags/22692675613","gamSizes":[[400,300],[405,300]],"clsSize":null,"code":"bookrags_D_outstream","elementId":"bookrags_D_outstream","mediaTypes":{"video":{"context":"outstream","playerSize":[[400,300]],"mimes":["video/mp4","video/webm","video/x-ms-wmv","application/javascript"],"protocols":[1,2,3,4,5,6,7,8],"playbackmethod":[6],"pos":1,"skip":0,"skippable":false,"api":[1,2,7],"minduration":5,"maxduration":41,"linearity":1,"placement":5,"plcmt":4,"startdelay":0}},"bids":[{"bidder":"criteo","params":{"zoneId":1644838,"networkId":"125","video":{"playbackmethod":[6],"skip":0,"placement":5}}},{"bidder":"ix","params":{"siteId":"794197","video":{"mimes":["video/mp4","video/webm","video/x-ms-wmv","application/javascript"],"protocols":[1,2,3,4,5,6,7,8],"api":[1,2,7]}}},{"bidder":"gumgum","params":{"zone":"grg9rkjy"}},{"bidder":"medianet","params":{"crid":"226531544","cid":"8CUA0SYJJ","video":{"mimes":["video/mp4","video/webm","video/x-ms-wmv","application/javascript"],"protocols":[1,2,3,4,5,6,7,8],"api":[1,2,7]}}},{"bidder":"sharethrough","params":{"pkey":"mXGDG8hfE0yKrHbLxPTvzRHr","floor":"0.50","iframe":"True"}},{"bidder":"grid","params":{"uid":"348337","video":{"placement":5}}},{"bidder":"pubmatic","params":{"adSlot":"4350916","publisherId":"160037","video":{"mimes":["video/mp4","video/webm","video/x-ms-wmv","application/javascript"],"protocols":[1,2,3,4,5,6,7,8],"api":[1,2,7],"skippable":false,"playbackmethod":[6],"linearity":1,"placement":5,"startdelay":0}}},{"bidder":"rubicon","params":{"siteId":"95446","zoneId":"2343662","accountId":"13708","video":{"language":"en"}}},{"bidder":"kargo","params":{"placementId":"_v8qDfJEC7F"}},{"bidder":"adagio","params":{"placement":"bookrags_D_outstream","adUnitElementId":"bookrags_D_outstream","organizationId":"1240","site":"bookrags-com","pagetype":"default","divId":"bookrags_D_outstream","video":{"context":"outstream","playerSize":[[400,300]],"mimes":["video/mp4","video/webm","video/x-ms-wmv","application/javascript"],"protocols":[1,2,3,4,5,6,7,8],"playbackmethod":[6],"skip":0,"api":[1,2,7],"minduration":5,"maxduration":41,"linearity":1,"placement":5}}},{"bidder":"appnexus","params":{"placementId":"24567297","video":{"skippable":false,"playback_method":["auto_play_sound_off"],"mimes":["video/mp4","video/webm","video/x-ms-wmv","application/javascript"],"protocols":[1,2,3,4,5,6,7,8],"api":[1,2,7]}}},{"bidder":"conversant","params":{"tag_id":"689451ce","site_id":"202225","secure":"1","video":{"mimes":["video/mp4","video/webm","video/x-ms-wmv","application/javascript"],"protocols":[1,2,3,4,5,6,7,8],"api":[1,2,7]}}},{"bidder":"amazon","params":{"slot_id":"bookrags_D_outstream","publisher_id":"c8b7d244-cdfc-48df-8b4a-98e8c4fadc6a"}}],"deviceType":"desktop","deviceTypes":["desktop"],"refresh":false,"lazyLoad":false,"requireBids":false,"baseFloor":"0.50","dynamicFloorParameters":"{\\"auction_type\\": {\\"video\\": 0.374}, \\"impression_tracker_floors\\": {\\"default\\": 0.09, \\"Chrome_US_desktop_default_C\\": 1.44, \\"US\\": 1.38, \\"Edge_US_desktop_default_A\\": 0.63, \\"Chrome_US\\": 1.57, \\"Chrome_US_desktop_default_A\\": 1.62, \\"Chrome_US_desktop_default_B\\": 1.42, \\"DE\\": 0.06, \\"Chrome_CA_desktop_default_A\\": 0.23, \\"Safari_US\\": 0.69, \\"Edge_US\\": 0.43, \\"CA\\": 0.09, \\"GB\\": 0.05, \\"Chrome_CA\\": 0.1, \\"Safari_CA\\": 0.12, \\"AU\\": 0.14}}","sections":["default"],"unitType":"outstream","renderer":{"url":"longitude","render":"longitude"},"unitConfiguration":{"positionBottom":"95px","positionRight":"5px","amazonSlotId":"bookrags_D_outstream"}},{"uid":243,"gamPath":"/22020501169,1022590/bookrags/bookrags_M_A","gamSizes":[[320,50]],"clsSize":null,"code":"BR_Mobile_Anchor","elementId":"BR_Mobile_Anchor","mediaTypes":{"banner":{"sizes":[[320,50]]}},"bids":[{"bidder":"criteo","params":{"zoneId":1536510,"networkId":"125"}},{"bidder":"ix","params":{"siteId":"522326"}},{"bidder":"nativo","params":{"placementId":"1253940"}},{"bidder":"medianet","params":{"crid":"166812512","cid":"8CUA0SYJJ"}},{"bidder":"medianet","params":{"crid":"949142513","cid":"8CUA0SYJJ"}},{"bidder":"grid","params":{"uid":"172098","video":{"placement":5}}},{"bidder":"pubmatic","params":{"adSlot":"bookrags_M_A","publisherId":"160037"}},{"bidder":"rubicon","params":{"siteId":"95446","zoneId":"1817520","accountId":"13708"}},{"bidder":"kargo","params":{"placementId":"_iox7yBAmHV"}},{"bidder":"adagio","params":{"placement":"bookrags_M_A","adUnitElementId":"BR_Mobile_Anchor","organizationId":"1240","site":"bookrags-com","pagetype":"default","divId":"BR_Mobile_Anchor"}},{"bidder":"appnexus","params":{"placementId":"17011255"}},{"bidder":"conversant","params":{"tag_id":"f8d65c0d","site_id":"202225","secure":"1"}},{"bidder":"amazon","params":{"slot_id":"/22020501169,1022590/bookrags/bookrags_M_A","publisher_id":"c8b7d244-cdfc-48df-8b4a-98e8c4fadc6a"}},{"bidder":"ogury","params":{"adUnitId":"OGY-56F81D5A7690","assetKey":"OGY-56F81D5A7690","skipSizeCheck":true}}],"deviceType":"mobile","deviceTypes":["mobile"],"refresh":true,"lazyLoad":false,"requireBids":false,"baseFloor":"0.10","dynamicFloorParameters":"{\\"auction_type\\": {\\"init\\": 0}, \\"impression_tracker_floors\\": {\\"default\\": 0.1, \\"Mobile Safari_CA\\": 0.09, \\"Mobile Safari_US_mobile_default_B\\": 0.72, \\"AU\\": 0.07, \\"GSA_US_mobile_default_A\\": 0.14, \\"CA\\": 0.24, \\"GB\\": 0.22, \\"Mobile Safari_US_mobile_default_C\\": 0.22, \\"US\\": 0.68, \\"GSA_US\\": 0.28, \\"Mobile Chrome_US_mobile_default_A\\": 1.75, \\"IN\\": 0.05, \\"Mobile Safari_US_mobile_default_A\\": 0.6, \\"Mobile Chrome_US\\": 1.24, \\"Mobile Chrome_CA\\": 0.49, \\"Mobile Safari_US\\": 0.57}}","sections":["default"],"unitType":"manchor"},{"uid":1224,"gamPath":"/22020501169,1022590/bookrags/22694013150","gamSizes":[[200,112]],"clsSize":null,"code":"bookrags_M_outstream","elementId":"bookrags_M_outstream","mediaTypes":{"video":{"context":"outstream","playerSize":[[200,112]],"mimes":["video/mp4","video/webm","video/x-ms-wmv","application/javascript"],"protocols":[1,2,3,4,5,6,7,8],"playbackmethod":[6],"pos":1,"skip":0,"skippable":false,"api":[1,2,7],"minduration":5,"maxduration":41,"linearity":1,"placement":5,"plcmt":4,"startdelay":0}},"bids":[{"bidder":"criteo","params":{"zoneId":1644837,"networkId":"125","video":{"playbackmethod":[6],"skip":0,"placement":5}}},{"bidder":"ix","params":{"siteId":"1088688","video":{"mimes":["video/mp4","video/webm","video/x-ms-wmv","application/javascript"],"protocols":[1,2,3,4,5,6,7,8],"api":[1,2,7]}}},{"bidder":"sovrn","params":{"tagid":"1009761","bidfloor":"0.50"}},{"bidder":"gumgum","params":{"zone":"xsqeyzhn"}},{"bidder":"medianet","params":{"crid":"245943223","cid":"8CUA0SYJJ","video":{"mimes":["video/mp4","video/webm","video/x-ms-wmv","application/javascript"],"protocols":[1,2,3,4,5,6,7,8],"api":[1,2,7]}}},{"bidder":"sharethrough","params":{"pkey":"mknhqOe0K2Le5TkMwvYKw6Q7","floor":"0.50","iframe":"True"}},{"bidder":"grid","params":{"uid":"348338","video":{"placement":5}}},{"bidder":"pubmatic","params":{"adSlot":"4350917","publisherId":"160037","video":{"mimes":["video/mp4","video/webm","video/x-ms-wmv","application/javascript"],"protocols":[1,2,3,4,5,6,7,8],"api":[1,2,7],"skippable":false,"playbackmethod":[6],"linearity":1,"placement":5,"startdelay":0}}},{"bidder":"rubicon","params":{"siteId":"95446","zoneId":"3310688","accountId":"13708","video":{"language":"en"}}},{"bidder":"kargo","params":{"placementId":"_fCibIs6Q5t"}},{"bidder":"adagio","params":{"placement":"bookrags_M_outstream","organizationId":"1240","site":"bookrags-com","pagetype":"default","adUnitElementId":"bookrags_M_outstream","divId":"bookrags_M_outstream","video":{"context":"outstream","playerSize":[[200,112]],"mimes":["video/mp4","video/webm","video/x-ms-wmv","application/javascript"],"protocols":[1,2,3,4,5,6,7,8],"playbackmethod":[6],"skip":0,"api":[1,2,7],"minduration":5,"maxduration":41,"linearity":1,"placement":5}}},{"bidder":"appnexus","params":{"placementId":"24567298","video":{"skippable":false,"playback_method":["auto_play_sound_off"],"mimes":["video/mp4","video/webm","video/x-ms-wmv","application/javascript"],"protocols":[1,2,3,4,5,6,7,8],"api":[1,2,7]}}},{"bidder":"conversant","params":{"tag_id":"a5f86340","site_id":"202225","secure":"1","video":{"mimes":["video/mp4","video/webm","video/x-ms-wmv","application/javascript"],"protocols":[1,2,3,4,5,6,7,8],"api":[1,2,7]}}},{"bidder":"amazon","params":{"slot_id":"bookrags_M_outstream","publisher_id":"c8b7d244-cdfc-48df-8b4a-98e8c4fadc6a"}}],"deviceType":"mobile","deviceTypes":["mobile"],"refresh":false,"lazyLoad":false,"requireBids":false,"baseFloor":"0.50","dynamicFloorParameters":"{\\"impression_tracker_floors\\": {\\"default\\": 0.05, \\"DE\\": 0.69, \\"Mobile Chrome_US_mobile_default_A\\": 2.09, \\"Mobile Safari_US\\": 0.78, \\"Mobile Chrome_US\\": 1.78, \\"GB\\": 0.05, \\"Mobile Safari_CA\\": 0.12, \\"GSA_US\\": 0.7, \\"AU\\": 0.05, \\"GSA_US_mobile_default_A\\": 0.84, \\"Mobile Safari_US_mobile_default_C\\": 0.45, \\"CA\\": 0.21, \\"Mobile Safari_US_mobile_default_B\\": 0.93, \\"Mobile Chrome_CA\\": 0.6, \\"US\\": 0.98, \\"Mobile Safari_US_mobile_default_A\\": 0.76}}","sections":["default"],"unitType":"outstream","renderer":{"url":"longitude","render":"longitude"},"unitConfiguration":{"positionBottom":"55px","positionLeft":"5px","excludeUrls":"[\'/\']","width":200,"height":112,"amazonSlotId":"bookrags_M_outstream"}}],"floors":{},"modules":[{"name":"optable","settings":{"scriptPath":"https://longitudeads.solutions.cdn.optable.co/public-assets/longitudeads-sdk.js","siteSlug":"bookrags"}},{"name":"optable","settings":{"scriptPath":"https://longitudeads.solutions.cdn.optable.co/public-assets/longitudeads-sdk.js","siteSlug":"bookrags"}}]}')
}
, function(t, e, i) {
    "use strict";
    i.r(e);
    var n = i(0)
      , o = i(1);
    window[n.b].accountFunctions.getS2sConfig = function() {
        return {
            accountId: "bookrags",
            bidders: ["appnexus", "conversant", "rubicon"],
            timeout: 1e3,
            adapter: "prebidServer",
            endpoint: "https://d1kg2ahxtm0wjt.cloudfront.net/openrtb2/auction",
            syncEndpoint: "https://d1kg2ahxtm0wjt.cloudfront.net/cookie_sync",
            coopSync: !0,
            userSyncLimit: 5,
            syncTimeout: 500,
            enabled: !0,
            maxBids: 1,
            testing: !0,
            testServerOnly: !1,
            bidderControl: {
                appnexus: {
                    bidSource: {
                        server: 50,
                        client: 50
                    },
                    includeSourceKvp: !0
                },
                epsilon: {
                    bidSource: {
                        server: 50,
                        client: 50
                    },
                    includeSourceKvp: !0
                },
                rubicon: {
                    bidSource: {
                        server: 50,
                        client: 50
                    },
                    includeSourceKvp: !0
                }
            }
        }
    }
    ,
    window[n.b].accountFunctions.cleanUnitConfigs = function(t) {
        return t.forEach((function(t) {
            "bookrags_D_outstream" === t.code && (t.unitConfiguration.staticTags = [{
                url: "https://pubads.g.doubleclick.net/gampad/ads?iu=/22020501169,1022590/bookrags/22693675613&description_url=http%3A%2F%2Fbookrags.com&tfcd=0&npa=0&sz=640x480&gdfp_req=1&unviewed_position_start=1&output=vast&env=vp&impl=s&correlator=&nofb=1&plcmt=2&cust_params=video_floor%3D2",
                value: 2,
                bidder: "google"
            }]),
            "bookrags_M_outstream" === t.code && (t.unitConfiguration.staticTags = [{
                url: "https://pubads.g.doubleclick.net/gampad/ads?iu=/22020501169,1022590/bookrags/22694013150&description_url=http%3A%2F%2Fbookrags.com&tfcd=0&npa=0&sz=640x480&gdfp_req=1&unviewed_position_start=1&output=vast&env=vp&impl=s&correlator=&nofb=1&plcmt=2&cust_params=video_floor%3D2",
                value: 2,
                bidder: "google"
            }])
        }
        )),
        t
    }
    ,
    o.a.setConfig("account.useNewTargeting", !0),
    window[n.b].videoCacheEndpoint = "https://cache.lngtd.com/video"
}
]);
