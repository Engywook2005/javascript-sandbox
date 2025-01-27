!function(e) {
    var t = {};
    function i(n) {
        if (t[n])
            return t[n].exports;
        var o = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(o.exports, o, o.exports, i),
        o.l = !0,
        o.exports
    }
    i.m = e,
    i.c = t,
    i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    i.t = function(e, t) {
        if (1 & t && (e = i(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (i.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var o in e)
                i.d(n, o, function(t) {
                    return e[t]
                }
                .bind(null, o));
        return n
    }
    ,
    i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return i.d(t, "a", t),
        t
    }
    ,
    i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    i.p = "",
    i(i.s = 15)
}([function(e, t, i) {
    "use strict";
    i.d(t, "a", (function() {
        return d
    }
    )),
    i.d(t, "g", (function() {
        return c
    }
    )),
    i.d(t, "h", (function() {
        return l
    }
    )),
    i.d(t, "f", (function() {
        return u
    }
    )),
    i.d(t, "e", (function() {
        return g
    }
    )),
    i.d(t, "d", (function() {
        return h
    }
    )),
    i.d(t, "b", (function() {
        return f
    }
    )),
    i.d(t, "c", (function() {
        return p
    }
    ));
    var n = i(3)
      , o = i(14)
      , s = i.n(o)
      , r = i(2)
      , a = i(1);
    const d = new function() {
        let e, t, i = !1;
        this.initialize = function(i) {
            e = i,
            t = i
        }
        ,
        this.updateSettings = function(e) {
            t = e
        }
        ,
        this.setConfig = function(e, i) {
            if ("string" != typeof e)
                throw "config: prop is not a string";
            if (e) {
                let n = e.split(".")
                  , o = n.length
                  , s = t;
                for (let e = 0; e < o - 1; e++)
                    if (s = s[n[e]],
                    void 0 === s)
                        return;
                if (void 0 === s[n[o - 1]])
                    return;
                return s[n[o - 1]] = i,
                i
            }
        }
        ,
        this.getConfig = function(e) {
            if (e) {
                if ("string" != typeof e)
                    throw "config: prop is not a string";
                return (e = e.replace(/\[["'`](.*)["'`]\]/g, ".$1")).split(".").reduce((function(e, t) {
                    return e ? e[t] : void 0
                }
                ), t || window)
            }
            return t
        }
        ,
        this.enableDebug = function() {
            Object(n.p)("lngtd_debug", "1"),
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
        this.isBidderPresent = function(e) {
            let t = !1;
            return this.getConfig("partners").forEach((function(i) {
                i.shortName === e && (t = !0)
            }
            )),
            t
        }
        ,
        this.getCleanedAdUnits = function() {
            let e = this.getConfig("adUnits");
            return window[a.b].accountFunctions.cleanUnitConfigs && "function" == typeof window[a.b].accountFunctions.cleanUnitConfigs && (e = window[a.b].accountFunctions.cleanUnitConfigs(e)),
            e
        }
        ,
        this.getUnitConfigFromId = function(e) {
            let t;
            return this.getCleanedAdUnits().forEach((function(i) {
                i.elementId === e && (t = i)
            }
            )),
            t
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
        let e = {};
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
            this.pvId = Object(n.n)(),
            this.lastUserInteraction = Date.now(),
            this.logPageViewManual || Object(r.f)()
        }
        ,
        this.defineEnvironment = function() {
            try {
                let t = (new s.a).getResult().withFeatureCheck();
                e.os = t.os.name || "unknown",
                e.browser = t.browser.name || "unknown",
                e.device = t.device.model || "unknown",
                e.device_type = t.device.type || "desktop",
                e.browser_version = t.browser.version || "unknown",
                e.combined = e.device + "|" + e.browser + "|" + e.os
            } catch (e) {}
            this.currentWindowWidth = window.innerWidth;
            try {
                navigator.cookieDeprecationLabel.getValue().then(e => {
                    this.cookieDeprecationState = e
                }
                )
            } catch (e) {}
        }
        ,
        this.defineTestGroups = function() {
            let e = Math.random();
            e >= .88 && (this.flooringTestGroup = e < .91 ? 1 : e < .94 ? 2 : e < .97 ? 3 : 4)
        }
        ,
        this.getDomain = function() {
            return window.location.hostname
        }
        ,
        this.getDeviceType = function() {
            return e.device_type
        }
        ,
        this.getBrowser = function() {
            return e.browser
        }
        ,
        this.getOS = function() {
            return e.os
        }
        ,
        this.getOrientation = function() {
            return window.innerWidth > window.innerHeight ? "Landscape" : "Portrait"
        }
        ,
        this.isMobile = function() {
            let t;
            try {
                let i = document.documentElement.clientWidth || document.body.clientWidth;
                t = "unknown" !== e.device_type ? "mobile" === e.device_type : i < 668,
                ["unknown", "tablet"].indexOf(c.getDeviceType()) > -1 && "Portrait" === this.getOrientation() && window.innerWidth < 728 && (t = !0)
            } catch (e) {
                t = !1
            }
            return t
        }
        ,
        this.isTablet = function() {
            return !!Object(n.d)("forcetablet") || ["unknown", "tablet"].indexOf(c.getDeviceType()) > -1 && "Portrait" === this.getOrientation() && window.innerWidth >= 728
        }
        ,
        this.isDesktop = function() {
            return !this.isMobile() && !this.isTablet()
        }
        ,
        this.getZZBidVal = function(e, t) {
            try {
                let e = this.zzMap
                  , i = t.slice(-5);
                if (e.hasOwnProperty(i))
                    return parseFloat(e[i])
            } catch (e) {}
            return e
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
            let e = "0";
            if (n.h) {
                e = window.sessionStorage.getItem("lngtd-sdp"),
                "" !== e && null != e || (window.sessionStorage.setItem("lngtd-sdp", "1"),
                e = "0");
                let t = parseInt(e) + 1;
                window.sessionStorage.setItem("lngtd-sdp", t.toString())
            } else {
                let e = Object(n.l)("lngtd-sdp");
                "" !== e && null != e || (Object(n.p)("lngtd-sdp", "1"),
                e = "0");
                let t = parseInt(e) + 1;
                Object(n.p)("lngtd-sdp", t.toString())
            }
            this.sessionDepth = parseInt(e)
        }
        ,
        this.getSetSessionId = function() {
            let e;
            n.h ? (e = window.sessionStorage.getItem("lngtd-session"),
            "" !== e && null != e || (e = Object(n.n)(),
            window.sessionStorage.setItem("lngtd-session", e))) : (e = Object(n.l)("lngtd-session"),
            "" !== e && null != e || (e = Object(n.n)(),
            Object(n.p)("lngtd-session", e))),
            this.sessionId = e
        }
    }
    ;
    function u(e) {
        let t;
        return d.getConfig("partners").forEach((function(i) {
            i.shortName === e && (t = i)
        }
        )),
        t
    }
    function g() {
        return c.isMobile() ? d.getConfig("account.mobileTimeout") : d.getConfig("account.desktopTimeout")
    }
    function h() {
        let e = {};
        return d.getConfig("partners").forEach((function(t) {
            t.gamId && (e[t.gamId] = t.shortName)
        }
        )),
        e
    }
    function f(e) {
        let t = d.getConfig("account.pricePoints");
        if (0 === e)
            return 0;
        {
            let i = parseFloat(t[0])
              , n = Math.abs(e - i);
            return t.forEach((function(t) {
                t = parseFloat(t);
                let o = Math.abs(e - t);
                o < n && (n = o,
                i = t)
            }
            )),
            i
        }
    }
    function p(e) {
        let t = d.getConfig("account.pricePointsNew");
        if (0 === e)
            return 0;
        {
            let i = parseFloat(t[0])
              , n = Math.abs(e - i);
            return t.forEach((function(t) {
                t = parseFloat(t);
                let o = Math.abs(e - t);
                o < n && (n = o,
                i = t)
            }
            )),
            i
        }
    }
}
, function(e, t, i) {
    "use strict";
    i.d(t, "c", (function() {
        return n
    }
    )),
    i.d(t, "b", (function() {
        return o
    }
    )),
    i.d(t, "a", (function() {
        return s
    }
    )),
    i.d(t, "d", (function() {
        return r
    }
    ));
    const n = "pbjs"
      , o = "lngtd"
      , s = "lngtd_debug"
      , r = "46"
}
, function(e, t, i) {
    "use strict";
    var n = i(0);
    function o(e) {
        let t;
        if (e && "function" == typeof e)
            try {
                t = e()
            } catch (e) {}
        if (!t) {
            const e = window.location.pathname.split("/");
            let i = "";
            try {
                i = e[1].toString()
            } catch (e) {}
            t = i.slice(0, 65)
        }
        return t
    }
    var s = i(1)
      , r = i(9)
      , a = i(4)
      , d = i(8)
      , c = i(10);
    function l() {
        try {
            let e = Array.prototype.slice.call(arguments)
              , t = "text-transform: uppercase;color:#222;background-color:#eee;padding:2px 4px;border-radius:4px;font-weight:600";
            if (n.a.getDebug() && window.console && e.length > 0) {
                let i = e.shift();
                e.length > 0 ? console.debug("%cLNGTD", t, i, e) : console.debug("%cLNGTD", t, i)
            }
        } catch (e) {}
    }
    function u() {}
    function g(e, t, i, o) {
        try {
            let r = {
                event: e,
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
            r.details = Object.assign({}, t, d);
            let c = !1;
            ["impression", "viewable_impression", "pageview"].indexOf(e) > -1 && (c = !0),
            c ? p(r) : function(e) {
                h.length >= 50 ? f() : h.push(e)
            }(r)
        } catch (e) {}
    }
    i.d(t, "a", (function() {
        return l
    }
    )),
    i.d(t, "g", (function() {
        return u
    }
    )),
    i.d(t, "e", (function() {
        return g
    }
    )),
    i.d(t, "b", (function() {
        return m
    }
    )),
    i.d(t, "f", (function() {
        return b
    }
    )),
    i.d(t, "d", (function() {
        return w
    }
    )),
    i.d(t, "c", (function() {
        return y
    }
    ));
    let h = [];
    function f() {
        let e = JSON.parse(JSON.stringify(h));
        h = [],
        p(e)
    }
    function p(e) {
        let t = new XMLHttpRequest
          , i = window[s.b].loggingEndpoint;
        t.open("POST", i, !0),
        t.setRequestHeader("Content-Type", "application/json;charset=UTF-8"),
        t.send(JSON.stringify(e))
    }
    function m() {
        let e = document.location.href;
        try {
            window.parent.document.location.href !== window.document.location.href && (e = window.parent.location.href)
        } catch (e) {}
        let t = "";
        try {
            t = window.frames.top.document.referrer
        } catch (e) {}
        return {
            account: n.a.getConfig("account.name"),
            section: n.a.getConfig("account.section"),
            page: o(window[s.b].accountFunctions.pageTypeFunc),
            pageview_id: n.g.pvId,
            referrer_url: t,
            page_url: e,
            device_type: n.g.getDeviceType(),
            browser: n.g.getBrowser(),
            session_depth: n.h.sessionDepth,
            country: n.g.country
        }
    }
    function b() {
        if (n.g.pvLogged && !n.g.logPageViewManual)
            return;
        let e = {};
        e.session_id = n.h.sessionId;
        let t = document.location.href;
        try {
            window.parent.document.location.href !== window.document.location.href && (t = window.parent.location.href)
        } catch (e) {}
        let i = "";
        try {
            i = window.frames.top.document.referrer
        } catch (e) {}
        e.page_url = t,
        e.referrer_url = i,
        n.g.pvLogged = !0,
        g("pageview", m(), null, e)
    }
    function w(e) {
        let t = e.bidderCode
          , i = e.adUnitCode
          , n = a.c.getUnitFromCode(i)
          , o = {
            bidder: t,
            bid: e.originalCpm,
            floor: n.getFloorForEnv(e.auctionId, !0),
            floor_raw: n.getFloorForEnv(e.auctionId, !1),
            unit: n.config.gamPath,
            auction_type: n.impressionType,
            auction_id: e.auctionId,
            refresh_count: n.filledImpressionCount,
            response_time: e.timeToRespond,
            size: e.width + "x" + e.height,
            encrypted_bid: e.encryptedBid,
            uid: e.requestId,
            source: e.source
        }
          , s = {};
        r.a.dropBidderCode && (s.dropped_bidder = r.a.dropBidderCode);
        try {
            let e = d.a.getPrebidUserIdsDefined();
            s.user_ids = e.join("|"),
            s.enr_li = c.c.getLiModuleEnabled(),
            s.enr_li_ids = d.a.getUserIdsForPartner("liveintent").join("|"),
            s.enr_op = r.a.testGroups.optable,
            s.enr_op_ids = d.a.getUserIdsForPartner("optable").join("|")
        } catch (e) {}
        d.a.currentEnrichTestId && (s.enrich_test = d.a.currentEnrichTestId);
        try {
            s.ip_br = r.a.testGroups.ip_br
        } catch (e) {}
        try {
            s.addomain = e.adserverTargeting.hb_adomain
        } catch (e) {}
        g("bid", m(), o, s)
    }
    function y(e) {
        try {
            let t = a.c.getUnitFromCode(e.adUnitCode)
              , i = e.originalCpm
              , o = t.getFloorForEnv(e.auctionId, !0);
            l(`Bid from ${e.bidder} below floor of ${o}:`, i, e);
            let s = {
                bidder: e.bidder,
                unit: t.config.gamPath,
                bid: i,
                floor: t.getFloorForEnv(e.auctionId, !0),
                auction_type: t.impressionType,
                timeout: Object(n.e)(),
                auction_id: e.auctionId,
                uid: e.bidId
            };
            g("bid_below_floor", m(), s, null)
        } catch (e) {}
    }
    setInterval((function() {
        h.length && f()
    }
    ), 5e3)
}
, function(e, t, i) {
    "use strict";
    i.d(t, "j", (function() {
        return o
    }
    )),
    i.d(t, "c", (function() {
        return s
    }
    )),
    i.d(t, "d", (function() {
        return r
    }
    )),
    i.d(t, "m", (function() {
        return a
    }
    )),
    i.d(t, "o", (function() {
        return d
    }
    )),
    i.d(t, "l", (function() {
        return c
    }
    )),
    i.d(t, "p", (function() {
        return l
    }
    )),
    i.d(t, "n", (function() {
        return u
    }
    )),
    i.d(t, "a", (function() {
        return g
    }
    )),
    i.d(t, "k", (function() {
        return h
    }
    )),
    i.d(t, "i", (function() {
        return f
    }
    )),
    i.d(t, "e", (function() {
        return p
    }
    )),
    i.d(t, "b", (function() {
        return m
    }
    )),
    i.d(t, "g", (function() {
        return b
    }
    )),
    i.d(t, "h", (function() {
        return w
    }
    )),
    i.d(t, "f", (function() {
        return y
    }
    ));
    var n = i(1);
    function o(e, t, i, n) {
        let o, s, r;
        if (i = void 0 !== i && i,
        n = n || {},
        s = !1,
        o = document.createElement("script"),
        o.type = "text/javascript",
        o.src = e,
        i && (o.async = "async"),
        n.attributes)
            for (const [e,t] of Object.entries(n.attributes))
                o.setAttribute(e, t);
        o.onreadystatechange = function() {
            s || this.readyState && "complete" !== this.readyState || (s = !0,
            t && t())
        }
        ,
        o.onload = o.onreadystatechange,
        r = document.getElementsByTagName("script")[0],
        r.parentNode.insertBefore(o, r)
    }
    function s(e, t) {
        void 0 === t && (t = 50);
        let i = document.getElementById(e);
        if (!i)
            return !1;
        if (!function(e) {
            let t = document.getElementById(e);
            if (!t)
                return !1;
            let i = t.currentStyle ? t.currentStyle.visibility : getComputedStyle(t, null).visibility
              , n = t.currentStyle ? t.currentStyle.display : getComputedStyle(t, null).display;
            if ("hidden" === i || "none" === n)
                return !1;
            for (; !/body/i.test(t); )
                if (t = t.parentNode,
                i = t.currentStyle ? t.currentStyle.visibility : getComputedStyle(t, null).visibility,
                n = t.currentStyle ? t.currentStyle.display : getComputedStyle(t, null).display,
                "hidden" === i || "none" === n)
                    return !1;
            return !0
        }(e))
            return !1;
        try {
            let e = i.getBoundingClientRect()
              , n = window.innerHeight || document.documentElement.clientHeight;
            return !(Math.floor(100 - (e.top >= 0 ? 0 : e.top) / (+-e.height / 1) * 100) < t || Math.floor(100 - (e.bottom - n) / e.height * 100) < t)
        } catch (e) {
            return !1
        }
    }
    function r(e) {
        let t = null
          , i = [];
        try {
            (window.location !== window.parent.location ? window.parent.location.search : document.location.search).substr(1).split("&").forEach((function(n) {
                i = n.split("="),
                i[0] === e && (t = decodeURIComponent(i[1]))
            }
            ))
        } catch (e) {}
        return t
    }
    function a(e, t, i) {
        i = i || window;
        let n = 0;
        i.addEventListener(e, (function() {
            let e = new Date;
            e - n >= 100 && (i.dispatchEvent(new CustomEvent(t)),
            n = e)
        }
        ))
    }
    function d(e) {
        "complete" === document.readyState || "interactive" === document.readyState ? setTimeout(e, 1) : document.addEventListener("DOMContentLoaded", e)
    }
    function c(e) {
        var t = e + "="
          , i = "";
        try {
            i = decodeURIComponent(document.cookie)
        } catch (e) {}
        for (var n = i.split(";"), o = 0; o < n.length; o++) {
            for (var s = n[o]; " " === s.charAt(0); )
                s = s.substring(1);
            if (0 === s.indexOf(t))
                return s.substring(t.length, s.length)
        }
        return ""
    }
    function l(e, t, i) {
        i = void 0 !== i ? i : .5;
        var n = new Date;
        n.setTime(n.getTime() + 60 * i * 60 * 1e3);
        var o = "expires=" + n.toUTCString();
        document.cookie = e + "=" + t + ";" + o + ";path=/"
    }
    function u() {
        let e;
        try {
            e = crypto.randomUUID()
        } catch (e) {}
        return e || (e = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx-xx".replace(/[xy]/g, (function(e) {
            var t = 16 * Math.random() | 0;
            return ("x" === e ? t : 3 & t | 8).toString(16)
        }
        ))),
        e
    }
    function g(e, t) {
        var i, n, o;
        for (i = 0; i < e.length; ++i)
            if (t.length === e[i].length) {
                for (o = e[i],
                n = 0; n < t.length && t[n] === o[n]; ++n)
                    ;
                if (n === t.length)
                    return i
            }
        return -1
    }
    function h(e, t) {
        const i = document.getElementById(e);
        let n, o = !1;
        if (i) {
            const e = new IntersectionObserver((function(e) {
                let i = null;
                if (e.forEach((function(e) {
                    (!i || e.time > i.time) && (i = e)
                }
                )),
                i) {
                    let e = 0;
                    const {intersectionRatio: s} = i;
                    if (s > 0 && (e = s),
                    0 === e && !o)
                        return void (o = !0);
                    n = setTimeout((function() {
                        t(e)
                    }
                    ), 0)
                }
            }
            ),{
                root: null,
                rootMargin: "0px",
                threshold: [0, .5, 1]
            });
            return e.observe(i),
            {
                remove: function() {
                    e.disconnect(),
                    clearTimeout(n)
                }
            }
        }
        return {}
    }
    function f(e) {
        let t = window[n.b].primaryBaseScriptPath + e
          , i = window[n.b].secondaryBaseScriptPath + e
          , o = function(e, t) {
            let i = document.createElement("script");
            i.type = "text/javascript",
            i.src = "http://localhost:8909/static/js/prebid.js",
            i.async = !0,
            i.onload = function() {}
            ,
            i.onerror = t;
            let n = document.getElementsByTagName("script")[0];
            n.parentNode.insertBefore(i, n)
        };
        o(t, (function() {
            o(i, (function() {}
            ))
        }
        ))
    }
    function p(e) {
        let t = 0
          , i = 0;
        do {
            t += e.offsetTop || 0,
            i += e.offsetLeft || 0,
            e = e.offsetParent
        } while (e);
        return {
            top: t,
            left: i
        }
    }
    function m(e) {
        setTimeout((function() {
            e()
        }
        ), 0)
    }
    function b(e) {
        return e.ttl - (e.hasOwnProperty("ttlBuffer") ? e.ttlBuffer : 1)
    }
    function w() {
        try {
            return window.sessionStorage.setItem("test", "test"),
            window.sessionStorage.removeItem("test"),
            !0
        } catch (e) {
            return !1
        }
    }
    function y(e) {
        const t = document.getElementById(e);
        try {
            let e = t.offsetHeight;
            return e += parseInt(window.getComputedStyle(t).getPropertyValue("margin-top")),
            e += parseInt(window.getComputedStyle(t).getPropertyValue("margin-bottom")),
            e
        } catch (e) {
            return t.offsetHeight
        }
    }
}
, function(e, t, i) {
    "use strict";
    var n = i(1)
      , o = i(0)
      , s = i(3)
      , r = i(11)
      , a = i(2)
      , d = i(12)
      , c = i(6)
      , l = i(9)
      , u = i(10)
      , g = i(8);
    function h(e) {
        this.cleanSizes = function() {
            this.config.mediaTypes.banner.sizes = this.filterSizes(this.config.mediaTypes.banner.sizes),
            this.config.gamSizes = this.filterSizes(this.config.gamSizes)
        }
        ,
        this.filterSizes = function(e) {
            let t = this
              , i = window.innerWidth
              , n = e.filter(e => e[0] <= i || "fluid" === e || "out-of-page" === e || "interstitial" === e || 1800 === e[0]);
            if (this.config.breakpointsSizes)
                try {
                    let e, o;
                    Object.keys(this.config.breakpointsSizes).forEach((function(n) {
                        e = parseInt(n),
                        i >= e && (o = t.config.breakpointsSizes[n])
                    }
                    )),
                    o && (n = n.filter(e => Object(s.a)(o, e) > -1))
                } catch (e) {}
            return n
        }
        ,
        b.call(this, e),
        this.stickyInContainer = void 0 !== this.unitConfiguration.stickyInContainer && "boolean" == typeof this.unitConfiguration.stickyInContainer && this.unitConfiguration.stickyInContainer,
        this.media = "banner",
        this.cleanSizes(),
        this.buildWrapper = function() {
            const e = document.getElementById(this.config.elementId)
              , t = p;
            if (e && !this.wrapperBuilt && !e.classList.contains(t) && !e.parentNode.classList.contains(t)) {
                let i = document.createElement("div");
                this.wrapperId = "ad-wrapper-" + this.config.elementId,
                i.className = e.className,
                i.classList.add(t),
                i.id = this.wrapperId,
                e.className = "",
                e.parentNode.insertBefore(i, e.nextSibling),
                i.appendChild(e),
                this.applyWrapperStyles(i),
                this.wrapperBuilt = !0
            }
        }
        ,
        this.applyWrapperStyles = function(e) {
            let t = "";
            if (this.config.clsSize)
                try {
                    const i = this.config.clsSize[0]
                      , n = this.config.clsSize[1];
                    t += "#" + this.config.elementId + " div iframe, #" + e.id + ", #" + this.config.elementId + " div div {min-width:" + i + "px;min-height:" + n + "px;}"
                } catch (e) {}
            window[n.b].accountFunctions.wrapperStyles && (t += "#" + e.id + " " + window[n.b].accountFunctions.wrapperStyles),
            this.stickyInContainer && (t += "#" + this.config.elementId + " {position:sticky;top:0;}");
            let i = document.createElement("style");
            i.innerHTML = t,
            i.classList.add("lngtd-ad-wrapper-styles"),
            document.head.appendChild(i)
        }
        ,
        this.applyBidSizingToWrapper = function(e) {
            let t = ["kargo"];
            try {
                if (-1 === t.indexOf(e.bidderCode)) {
                    let t = document.querySelector("#" + this.config.elementId + ">div>iframe")
                      , i = document.querySelector("#" + this.config.elementId + ">div");
                    t.style.minHeight = e.height + "px",
                    t.style.minWidth = e.width + "px",
                    i.style.minHeight = e.height + "px",
                    i.style.minWidth = e.width + "px"
                }
            } catch (e) {}
        }
    }
    i.d(t, "b", (function() {
        return p
    }
    )),
    i.d(t, "c", (function() {
        return m
    }
    )),
    i.d(t, "a", (function() {
        return b
    }
    ));
    let f = {};
    f.banner = h;
    const p = "lngtd-ad-wrapper-banner";
    const m = new function() {
        this.adUnits = [],
        this.hiddenAdClass = null,
        this.disallowSticky = !1,
        this.mustDisplayTogetherReady = [],
        this.mustDisplayTogetherHandled = [],
        this.initializeUnits = function() {
            let e = this;
            o.a.getCleanedAdUnits().forEach((function(t) {
                e.initializeUnit(t)
            }
            )),
            this.addDefaultStylesForUnits()
        }
        ,
        this.initializeUnit = function(e) {
            let t, i = e.unitType || "banner", n = f[i], s = !1;
            if (this.adUnits.forEach((function(i) {
                i.config.elementId === e.elementId && (s = !0,
                t = i)
            }
            )),
            !s && !t)
                try {
                    Object(a.a)("Initializing unit with config", e),
                    t = new n(e),
                    t.canRun() ? (t.setup(),
                    this.adUnits.push(t),
                    r.a.addAdUnit(t.config),
                    o.a.getConfig("account.useGAM") && !t.skipGAM && c.a.initializeUnit(t)) : (Object(a.a)(`Unit ${e.elementId} is not allowed to run on this page.`),
                    t.applyHiddenAdClass(),
                    t.retire(!0))
                } catch (e) {
                    Object(a.a)(e)
                }
            return t
        }
        ,
        this.allPostInit = function() {
            m.adUnits.forEach((function(e) {
                Object(s.b)((function() {
                    e.doPostInit()
                }
                ))
            }
            ))
        }
        ,
        this.getAllUnitConfigs = function() {
            let e = [];
            return this.adUnits.forEach((function(t) {
                e.push(t.config)
            }
            )),
            e
        }
        ,
        this.getUnitFromId = function(e) {
            let t = null;
            return this.adUnits.forEach((function(i) {
                i.config.elementId === e && (t = i)
            }
            )),
            t
        }
        ,
        this.getUnitFromCode = function(e) {
            let t = null;
            return this.adUnits.forEach((function(i) {
                i.config.code === e && (t = i)
            }
            )),
            t
        }
        ,
        this.getUnitFromPath = function(e) {
            let t = null;
            return this.adUnits.forEach((function(i) {
                i.config.gamPath === e && (t = i)
            }
            )),
            t
        }
        ,
        this.getAdUnitsOfType = function(e) {
            return this.adUnits.filter((function(t) {
                return t.config.unitType === e
            }
            ))
        }
        ,
        this.makeGAMCall = function(e, t) {
            let i = null;
            if (window[n.b].accountFunctions.getMustDisplayTogether && "function" == typeof window[n.b].accountFunctions.getMustDisplayTogether && (i = window[n.b].accountFunctions.getMustDisplayTogether()),
            d.a.setGAMTargeting(e),
            "init" === t && i && -1 === this.mustDisplayTogetherHandled.indexOf(e.config.code)) {
                Object(a.a)("For unit, must run together with these others", e.config.elementId, i);
                let n = !1
                  , o = null
                  , s = [];
                i.forEach((function(t) {
                    t.indexOf(e.config.code) > -1 && (o = t,
                    -1 === m.mustDisplayTogetherReady.indexOf(e.config.code) && m.mustDisplayTogetherReady.push(e.config.code))
                }
                )),
                o ? (o.forEach((function(e) {
                    let t = m.getUnitFromCode(e)
                      , i = null;
                    t && (i = document.getElementById(t.config.elementId)),
                    t && i ? s.push(t) : m.mustDisplayTogetherReady.push(e),
                    -1 === m.mustDisplayTogetherReady.indexOf(e) && (n = !0)
                }
                )),
                n || (s.forEach((function(e) {
                    m.mustDisplayTogetherHandled.push(e.config.code)
                }
                )),
                c.a.doPubAdsRefresh(s, t))) : c.a.doPubAdsRefresh([e], t)
            } else
                c.a.doPubAdsRefresh([e], t)
        }
        ,
        this.resetAnchors = function() {
            let e = this;
            ["danchor", "manchor", "sidebar-sticky"].forEach((function(t) {
                try {
                    e.getAdUnitsOfType(t)[0].reset()
                } catch (e) {}
            }
            )),
            this.disallowSticky = !1
        }
        ,
        this.resetMoments = function() {
            let e = this;
            ["moment-display", "moment-video"].forEach((function(t) {
                try {
                    e.getAdUnitsOfType(t)[0].reset()
                } catch (e) {}
            }
            ))
        }
        ,
        this.retireAllUnits = function() {
            this.adUnits.forEach((function(e) {
                e.retire(!1)
            }
            )),
            this.adUnits = [],
            this.removeListeners()
        }
        ,
        this.userInteractionHandler = function() {
            window[n.b].refreshPaused || m.adUnits.forEach((function(e) {
                e.canDisplayDueToUserInteraction && e.display("userInteraction")
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
            this.adUnits.forEach((function(e) {
                try {
                    e.setUpMediation()
                } catch (t) {
                    Object(a.a)("Error setting up mediation with unit", e.config.elementId, t)
                }
            }
            ))
        }
        ,
        this.removeAdWrapperStyles = function() {
            try {
                document.querySelectorAll(".lngtd-ad-wrapper-styles").forEach(e => e.remove())
            } catch (e) {}
        }
        ,
        this.addDefaultStylesForUnits = function() {
            let e = document.createElement("style");
            e.innerHTML = ".lngtd-dynamic-ad-container>div>div>iframe,.lngtd-dynamic-ad-container>div>iframe,.lngtd-dynamic-ad-container>iframe {margin: 0 auto;}.lngtd-ad-wrapper-banner>div>div>iframe,.lngtd-ad-wrapper-banner>div>iframe,.lngtd-ad-wrapper-banner>iframe {margin:0 auto;}",
            document.head.appendChild(e)
        }
    }
    ;
    function b(e) {
        this.unitConfiguration = void 0 !== e.unitConfiguration ? e.unitConfiguration : {},
        this.config = e,
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
            let e = document.getElementById(this.config.elementId);
            m.hiddenAdClass && e && e.classList.add(m.hiddenAdClass)
        }
        ,
        this.cleanForTestBidder = function() {
            let e = Object(s.d)("testbidder")
              , t = this.config.bids.length;
            for (; t--; ) {
                let i = this.config.bids[t];
                o.g.excludeBidders.length && o.g.excludeBidders.indexOf(i.bidder) > -1 && (e && e === i.bidder || this.config.bids.splice(t, 1)),
                e && i.bidder !== e && this.config.bids.splice(t, 1)
            }
        }
        ,
        this.cleanBidders = function() {
            let e = this
              , t = this.config.bids.length;
            for (; t--; ) {
                let i = this.config.bids[t];
                "adagio" === i.bidder && (i.params.category = o.g.country,
                i.params.environment = !0 === o.g.isMobile() ? "mobile" : "desktop");
                try {
                    "ogury" === i.bidder && (i.params.onAdShow = function(t) {
                        let i = window.top.document.querySelector("#ogy-root-container-" + t.ad_unit_id);
                        try {
                            var n = i.getElementsByTagName("iFrame")[0].contentDocument
                              , o = n.body.querySelector("#close-btn");
                            if (!o) {
                                let t = setInterval( () => {
                                    (o = n.body.querySelector("#close-btn")) && (o.addEventListener("click", () => {
                                        ["danchor", "manchor"].indexOf(e.config.unitType) > -1 && e.close()
                                    }
                                    ),
                                    clearInterval(t))
                                }
                                , 500)
                            }
                        } catch (e) {}
                    }
                    )
                } catch (e) {}
            }
        }
        ,
        this.cleanGeos = function() {
            let e = this
              , t = this.config.bids.length;
            for (; t--; ) {
                let i = e.config.bids[t];
                o.a.getConfig("partners").forEach((function(n) {
                    i.bidder === n.shortName && n.geoRestrictionsInclude && o.g.country && -1 === n.geoRestrictionsInclude.indexOf(o.g.country) && e.config.bids.splice(t, 1),
                    i.bidder === n.shortName && n.geoRestrictionsExclude && o.g.country && n.geoRestrictionsExclude.indexOf(o.g.country) > -1 && e.config.bids.splice(t, 1)
                }
                )),
                i.geoRestrictionsInclude && (o.g.country && -1 === i.geoRestrictionsInclude.indexOf(o.g.country) && e.config.bids.splice(t, 1),
                delete i.geoRestrictionsInclude),
                i.geoRestrictionsExclude && (o.g.country && i.geoRestrictionsExclude.indexOf(o.g.country) > -1 && e.config.bids.splice(t, 1),
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
            let e = !0;
            return o.g.isMobile() && -1 === this.config.deviceTypes.indexOf("mobile") && (e = !1),
            o.g.isDesktop() && -1 === this.config.deviceTypes.indexOf("desktop") && (e = !1),
            o.g.isTablet() && -1 === this.config.deviceTypes.indexOf("tablet") && (e = !1),
            window[n.b].manualExcludeUnits.indexOf(this.config.elementId) > -1 && (e = !1),
            this.unitConfiguration.minWindowWidth && window.innerWidth < this.unitConfiguration.minWindowWidth && (e = !1),
            e
        }
        ,
        this.startViewabilityCheck = function() {
            let e, t = this;
            Object(s.k)(this.config.elementId, (function(i) {
                clearTimeout(e),
                i >= .5 && (e = setTimeout((function() {
                    t.markAsViewable()
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
            let e = {
                uid: this.currentImpressionId
            };
            Object(a.e)("viewable_impression", Object(a.b)(), e, null),
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
        this._startRefresh = function(e) {
            let t = this;
            e = void 0 !== e ? e : o.a.getConfig("account.refreshInterval"),
            o.a.getConfig("account.refreshEnabled") && this.config.refresh && !this.refreshTimeout && (this.refreshTimeout = setTimeout((function() {
                t.refreshTimeout = null,
                t.impressionType = "refresh",
                Object(a.a)(`Triggering refresh of ad unit ${t.config.elementId} after ${e}ms`),
                t.refresh()
            }
            ), e))
        }
        ,
        this._doUnfilledRefresh = function() {
            this.metViewability = !0,
            this._startRefresh(this.refreshUnfilledInterval)
        }
        ,
        this.handleHeavyAdIntervention = function() {
            let e;
            e = this.winningBid ? {
                unit: this.config.gamPath,
                bidder: this.winningBid.bidderCode,
                uid: this.winningBid.requestId
            } : {
                unit: this.config.gamPath,
                bidder: null,
                uid: null
            },
            Object(a.e)("chrome_heavy_ad", Object(a.b)(), null, e),
            this.markAsViewable(),
            this.displayed = !1,
            this.refresh()
        }
        ,
        this.addOrtbParams = function() {
            let e = this.config.gamPath;
            if (this.config.gamPath || (e = this.config.elementId),
            window[n.b].accountFunctions.getUnitGPID && "function" == typeof window[n.b].accountFunctions.getUnitGPID) {
                const t = window[n.b].accountFunctions.getUnitGPID(this.config);
                t && (e = t)
            }
            this.config.ortb2Imp = {
                ext: {
                    gpid: e,
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
        this.getFloorForEnv = function(e, t) {
            let i = parseFloat(this.config.baseFloor);
            if (t = void 0 === t || t,
            (e = void 0 !== e ? e : this.currentAuctionId) && this.auctionFloors.hasOwnProperty(e))
                return this.auctionFloors[e];
            try {
                Object(s.d)("floor_override") && (i = parseFloat(Object(s.d)("floor_override")))
            } catch (e) {}
            let n = i;
            if (o.a.getConfig("account.dynamicFloorsEnabled") && !this.unitConfiguration.useStaticFloor)
                try {
                    let e = {};
                    try {
                        e = JSON.parse(o.g.floors[this.config.uid])
                    } catch (e) {}
                    const t = [];
                    t.push(o.g.getBrowser()),
                    t.push(o.g.country),
                    t.push(!0 === o.g.isMobile() ? "mobile" : "desktop"),
                    t.push(o.a.getConfig("account.section")),
                    t.push(0 === o.h.sessionDepth ? "A" : o.h.sessionDepth > 2 ? "C" : "B");
                    const s = t.join("_")
                      , r = [o.g.getBrowser(), o.g.country].join("_")
                      , a = o.g.country;
                    n = e.hasOwnProperty(s) ? e[s] : e.hasOwnProperty(r) ? e[r] : e.hasOwnProperty(a) ? e[a] : e.default,
                    n || (n = i)
                } catch (e) {}
            if (t)
                try {
                    let e = this.getHighestBid();
                    if (e && (n = Math.max(n, e.cpm)),
                    o.a.getConfig("account.dynamicFloorsEnabled") && this.allImpressionCount) {
                        let e = (n + this.getAllAvailableBidsInPool().reduce( (e, t) => e + t.cpm, 0) / 3) / 2;
                        n = this.multipleBidderBidsInPool() ? Math.max(n, e) : e
                    }
                } catch (e) {}
            return this.auctionFloors[e] = n,
            n
        }
        ,
        this.applyTestGroup = function(e, t) {
            return 1 === t || 2 === t ? Math.round(e * t / 4 * 100) / 100 : 3 === t || 4 === t ? Math.round(e * t / 2 * 100) / 100 : Math.round(100 * e) / 100
        }
        ,
        this.currentAuctionId = null,
        this.runAuction = function() {
            let e = this;
            this.auctionRunning && Object(a.a)(`Already auctioning this unit, so will remove (${this.config.elementId}) from this new auction`);
            let t = Object(s.n)();
            this.currentAuctionId = t,
            this.auctionRunning = !0,
            this.confiantRefreshed = !1,
            this.lastAuction = Date.now(),
            window[n.c].que.push((function() {
                e.amazonAuctionRunning = !0,
                e.prebidAuctionRunning = !0,
                Object(s.b)((function() {
                    e.runPrebidAuction(t)
                }
                )),
                Object(s.b)((function() {
                    e.runAmazonAuction(t)
                }
                ))
            }
            ))
        }
        ,
        this.runPrebidAuction = function(e) {
            let t = this;
            this.config.bids.filter(e => "amazon" !== e.bidder).length ? (Object(a.a)(`Running prebid auction for unit ${t.config.elementId} with config:`, t.config, e),
            window[n.c].requestBids({
                adUnitCodes: [t.config.code],
                bidsBackHandler: function(e, i, n) {
                    t.prebidAuctionRunning = !1,
                    t.auctionComplete()
                },
                timeout: Object(o.e)(),
                auctionId: e
            })) : (Object(a.a)(`NOT running prebid auction for ${this.config.elementId} because no bids present.`),
            this.prebidAuctionRunning = !1,
            t.auctionComplete())
        }
        ,
        this.shouldCallAmazon = function() {
            let e = d.a.getAmazonConfigForUnit(this);
            try {
                return e && this.config.mediaTypes.banner.sizes.length > 0 && d.a.initialized && !this.shouldSleepBidder("amazon")
            } catch (e) {
                return !1
            }
        }
        ,
        this.runAmazonAuction = function(e) {
            let t = this;
            this.amazonTargeting = null,
            this.shouldCallAmazon() ? (Object(a.a)(`Running amazon auction for ${this.config.elementId}`),
            d.a.runAuction(this, (function() {
                t.amazonAuctionRunning = !1,
                d.a.setBidsOnUnit(t),
                d.a.logBidsToBQ(t, e),
                t.auctionComplete()
            }
            ))) : (Object(a.a)(`NOT running amazon auction for ${this.config.elementId}.`),
            this.amazonAuctionRunning = !1,
            t.auctionComplete())
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
                let e = this.getAllAvailableBidsInPool();
                for (let t = 0; t < e.length; t++)
                    try {
                        let i = e[t]
                          , o = this.getFloorForEnv(i.auctionId, !0);
                        o && i.originalCpm < o && (Object(a.a)("Marking bid that was below auction floor as used", i),
                        window[n.c].markWinningBidAsUsed({
                            adId: i.adId
                        }))
                    } catch (e) {}
            } catch (e) {}
        }
        ,
        this.getHighestBid = function() {
            let e = null
              , t = window[n.c].getHighestCpmBids(this.config.code);
            return t.length > 0 && (e = t[0]),
            e
        }
        ,
        this.getSecondBid = function(e=null) {
            let t = null;
            try {
                let i = this.getAllAvailableBidsInPool();
                if (i.length > 0) {
                    let n = e ? i.filter(t => t.bidderCode !== e) : i;
                    n = e ? n.filter(e => e.responseTimestamp < this.displayed) : n,
                    n.sort( (e, t) => t.originalCpm - e.originalCpm),
                    n.length > 0 && (t = n[0])
                }
            } catch (e) {}
            return t
        }
        ,
        this.timeSinceLastAuction = function() {
            let e = 0;
            return this.lastAuction && (e = Date.now() - this.lastAuction),
            e
        }
        ,
        this.canRefreshUserInteraction = function() {
            let e = Date.now() - o.g.lastUserInteraction
              , t = !o.a.getConfig("account.refreshRequiresUserInteraction") || e < 6e4;
            return t || (clearInterval(this.displayInterval),
            window[n.b].pauseRefresh(!0, "userInteraction")),
            t
        }
        ,
        this.canDisplay = function() {
            let e = !1;
            if (this.displayed && !this.config.refresh)
                return !1;
            const t = Date.now() - this.displayed;
            if (this.displayed && t < o.a.getConfig("account.refreshInterval"))
                return Object(a.a)("Cannot display unit because it was displayed less than the refresh interval ago:", this.config.elementId),
                !1;
            if (!this.canRefreshUserInteraction())
                return Object(a.a)("Cannot display unit because the user has not interacted with the page recently:", this.config.elementId),
                !1;
            let i = Object(s.c)(this.config.elementId);
            return this.displayed ? this.config.refresh && (i && this._viewabilityMetForRefresh() && -1 === window[n.b].refreshDisallowed.indexOf(this.config.elementId) ? e = !0 : Object(a.a)("Cannot refresh unit because it didn't meet viewability requirements or is not allowed to refresh:", this.config.elementId)) : (!1 === this.config.lazyLoad || i) && this.lastAuction && this.timeSinceLastAuction() < 6e4 && (e = !0),
            e
        }
        ,
        this.deferDisplay = function() {
            const e = this;
            this.displayInterval || (Object(a.a)("Deferring display of unit because it cannot currently display", this.config.elementId),
            this.displayInterval = setInterval((function() {
                e.display("delay")
            }
            ), 500))
        }
        ,
        this.startSecondChance = function() {
            const e = this;
            this.secondChanceTimeout || (Object(a.a)("Setting up second chance opportunity for", this.config.elementId),
            this.secondChanceTimeout = setTimeout((function() {
                Object(a.a)("Firing second chance opportunity for", e.config.elementId),
                e.displayed = !1,
                e.refreshed = !1,
                e.secondChanceTimeout = null,
                e.secondChance()
            }
            ), 15e3))
        }
        ,
        this.secondChance = function() {
            this.runAuction()
        }
        ,
        this.retire = function(e) {
            if (Object(a.a)(`Retiring ${this.config.elementId}`),
            this.retired = !0,
            clearInterval(this.displayInterval),
            clearTimeout(this.secondChanceTimeout),
            clearTimeout(this.refreshTimeout),
            e) {
                const e = m.adUnits.indexOf(this);
                e > -1 && m.adUnits.splice(e, 1)
            }
            try {
                this.cleanup()
            } catch (e) {}
        }
        ,
        this.cleanup = function() {}
        ,
        this.display = function(e) {
            if (this.displayed && ["scroll", "focus", "click", "userInteraction"].indexOf(e) > -1 && (this.refreshTimeout || !this._viewabilityMetForRefresh()))
                return;
            if (this.refreshTimeout && "confiant" === e && clearTimeout(this.refreshTimeout),
            this.displayed && !this.config.refresh)
                return;
            if (["scroll", "focus", "click", "userInteraction"].indexOf(e) > -1 && this.secondChanceTimeout)
                return;
            if (window[n.b].manualExcludeUnits.indexOf(this.config.elementId) > -1)
                return void Object(a.a)("Cannot display unit because it is manually excluded:", this.config.elementId);
            this.displayInterval || this.refreshTimeout || Object(a.a)(`Display of unit ${this.config.elementId} called with trigger ${e}`);
            let t = this.canDisplay()
              , i = document.getElementById(this.config.elementId);
            !i && this.config.altSelector && (i = document.querySelector(this.config.altSelector),
            i && (this.config.elementId = i.id)),
            "init" === this.impressionType ? (!i || !document.hasFocus() && o.a.getConfig("account.initRequiresFocus") || this.auctionRunning) && (this.deferDisplay(),
            t = !1) : (!i || window[n.b].refreshPaused || !document.hasFocus() && o.a.getConfig("account.refreshRequiresFocus")) && (t = !1),
            "force" !== e && "confiant" !== e || (t = !0);
            let s = this.timeSinceLastAuction() > 6e4;
            s && (Object(a.a)("Cannot display unit because auction is stale:", this.config.elementId),
            t = !1,
            this.auctionRunning || this.runAuction(this.impressionType)),
            t ? (this.useWrapper && this.buildWrapper(),
            this.clearThirdPartyCreativeContainers(),
            clearInterval(this.displayInterval),
            this.displayed = Date.now(),
            "refresh" === this.impressionType && (this.refreshed = Date.now()),
            this.metViewability = !1,
            this.metGPTViewability = !1,
            !0 === o.a.getConfig("account.useGAM") ? m.makeGAMCall(this, this.impressionType) : this.getHighestBid() ? (this.winningBid = this.getHighestBid(),
            r.a.renderPrebidWinningBidWithoutGAM(this.getHighestBid(), this.config.elementId)) : window[n.b].fallbackForUnfilledNoGAM(this.config.elementId)) : "auction" === e && Object(a.a)("Not displaying unit ...", this.config.elementId, this.canDisplay(), s, i, this.auctionRunning)
        }
        ,
        this.customizeTargeting = function(e) {
            return e
        }
        ,
        this.adjustBidForAdxMultiplier = function(e, t) {
            const i = parseFloat(o.a.getConfig("account.adXMultiplier"))
              , n = parseFloat(e);
            t = void 0 !== t ? t : o.b;
            let s = n;
            try {
                s = 1 * n * i,
                s = t(s),
                s = s.toFixed(2)
            } catch (e) {}
            return s
        }
        ,
        this.getTargetingForGAM = function() {
            let e = {}
              , t = "false";
            e.elid = this.config.elementId;
            let i = null
              , r = window[n.c].getHighestCpmBids(this.config.code);
            if (r.length > 0) {
                i = r[0];
                let t = i.adserverTargeting;
                for (let n in t)
                    if (t.hasOwnProperty(n) && t[n])
                        try {
                            let s = t[n].toString();
                            if ("hb_pb" === n) {
                                try {
                                    s = this.adjustBidForAdxMultiplier(i.cpm)
                                } catch (e) {}
                                o.a.getConfig("account.useNewTargeting") && (s = this.adjustBidForAdxMultiplier(i.cpm, o.c),
                                n = "lngtd_pb"),
                                c.a.useSafeFrames && -1 === c.a.safeFramesExcludePartners.indexOf(i.bidder) && (e.safe_frames = (!0).toString())
                            }
                            e[n] = s
                        } catch (e) {
                            Object(a.a)("Error getting targeting for:", n, t, e)
                        }
            }
            if (!i && o.a.getConfig("account.dynamicFloorsEnabled"))
                try {
                    e["lngtd-floor"] = c.a.getUPRForAdUnit(this)[0]
                } catch (e) {}
            let d = c.a.slots[this.config.elementId].getTargeting("amznbid");
            if (i)
                this.winningBid = i;
            else if (0 !== d.length && d[0].length > 3)
                this.winningBid = null;
            else if (this.winningBid = null,
            t = "true",
            !0 === o.a.getConfig("account.skipGAMOnNoBids"))
                return Object(a.a)(this.config.elementId, "not calling GAM because no bids returned"),
                !1;
            return Object(s.d)("ensurefill") && (e.ensurefill = "1"),
            e.refresh_count = this.filledImpressionCount,
            e.display_type = this.impressionType,
            e.nobids = t,
            e = this.customizeTargeting(e),
            e
        }
        ,
        this.getWinningBidEstimatedValue = function(e) {
            let t = this.getFloorForEnv(this.currentAuctionId, !1);
            if (this.winningBid && this.winningBid.bidderCode === e)
                t = this.winningBid.originalCpm;
            else if (this.winningBid) {
                const e = parseFloat(o.a.getConfig("account.adXMultiplier"))
                  , i = parseFloat(this.winningBid.cpm);
                let n = i;
                try {
                    n = i * e,
                    t = Object(o.b)(n),
                    t = parseFloat(t) + .01
                } catch (e) {}
            }
            return "house" !== e && "unknown" !== e && e || (t = 0),
            t
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
                    const e = ["out-of-page", "moment-display"];
                    this.allowUnfilledRetries && this.unfilledRetryAttempts < this.allowUnfilledRetries && -1 === window[n.b].secondChanceDisallowed.indexOf(this.config.code) && -1 === e.indexOf(this.config.unitType) ? (this.unfilledRetryAttempts += 1,
                    this.startSecondChance()) : this.retireAndTrack(!0)
                }
                this.reset()
            }
        }
        ,
        this.retireAndTrack = function(e) {
            const t = this;
            try {
                if (o.a.getConfig("account.refreshEnabled") && this.config.refresh && -1 === window[n.b].refreshDisallowed.indexOf(this.config.elementId)) {
                    const e = o.a.getConfig("account.refreshInterval");
                    setInterval((function() {
                        window[n.b].refreshPaused || t.logRetiredOpportunity()
                    }
                    ), e)
                }
            } catch (e) {}
            this.retire(e)
        }
        ,
        this.logRetiredOpportunity = function() {
            let e = {};
            e.bidfloor = this.getFloorForEnv(null, !0);
            try {
                let t = g.a.getPrebidUserIdsDefined();
                e.user_ids = t.join("|")
            } catch (e) {}
            e.raw_impression_count = this.allImpressionCount;
            let t = {
                unit: this.config.gamPath,
                media: this.media
            };
            Object(a.e)("retired_opp", Object(a.b)(), t, e)
        }
        ,
        this.filledImpressionShow = function() {}
        ,
        this.shouldLogImpressionToBQ = function() {
            return !0
        }
        ,
        this.handleFilledImpression = function(e) {
            this.filledImpressionShow();
            let t, i = !1;
            try {
                c.a.slots[this.config.elementId].getTargetingKeys().indexOf("up_recovery") > -1 && (i = !0)
            } catch (e) {}
            try {
                c.a.slots[this.config.elementId].clearTargeting()
            } catch (e) {
                Object(a.a)("Error clearing targeting for ", this.config.elementId)
            }
            this.filledImpressionCount += 1,
            this.allImpressionCount += 1,
            this.startViewabilityCheck();
            let s, r = !1;
            if (e) {
                let i = Array.isArray(o.a.getConfig("account.ignoreAdvertiserIds")) ? o.a.getConfig("account.ignoreAdvertiserIds") : [];
                if (e.advertiserId && i.indexOf(e.advertiserId) > -1)
                    return;
                let s = Object(o.d)();
                if (this.winningBid && e.advertiserId == o.a.getConfig("account.lngtdAdvertiserId") ? (t = this.winningBid.bidderCode,
                r = !0) : this.winningBid ? s.hasOwnProperty(e.advertiserId) ? t = s[e.advertiserId] : !t && e.yieldGroupIds && e.yieldGroupIds.length > 0 && (t = "eb") : s.hasOwnProperty(e.advertiserId) && (t = s[e.advertiserId]),
                !t && e.yieldGroupIds && e.yieldGroupIds.length > 0 && (t = "eb"),
                o.a.getConfig("account.excludeSponsorshipFromRefresh") && e.lineItemId)
                    try {
                        let t = e.lineItemId.toString();
                        t && o.a.getConfig("account.sponsorshipLineItemIds").indexOf(t) > -1 && window[n.b].refreshDisallowed.push(this.config.elementId)
                    } catch (t) {
                        Object(a.a)("Issue preventing sponsorship refresh for", e, t)
                    }
                "object" == typeof o.a.getConfig("account.specialLineItemIds") && Object.keys(o.a.getConfig("account.specialLineItemIds")).length > 0 && e.lineItemId && window[n.b].accountFunctions.handleSpecialLineItem && "function" == typeof window[n.b].accountFunctions.handleSpecialLineItem && window[n.b].accountFunctions.handleSpecialLineItem(e.lineItemId)
            } else
                this.winningBid ? (s = !0,
                t = this.winningBid.bidderCode,
                r = !0) : (s = !0,
                t = "amazon",
                r = !1);
            t || (t = "unknown"),
            i && (t = "blockthrough");
            let d = {};
            try {
                d.companyIds = e.companyIds,
                d.yieldgroupIds = e.yieldgroupIds
            } catch (e) {}
            if (s && (d.manual_render = "true"),
            this.shouldLogImpressionToBQ() && this.logImpressionToBQ(t, d),
            this.lastAdvertiser = t,
            window[n.b].accountFunctions.impressionHandler && "function" == typeof window[n.b].accountFunctions.impressionHandler) {
                let e = this.getWinningBidEstimatedValue(t);
                window[n.b].accountFunctions.impressionHandler(e, t, this.cachedAmazonBid)
            }
            if (this.winningBid && r) {
                let e = Object(o.f)(this.winningBid.bidderCode);
                e && !e.allowRefresh && window[n.b].refreshDisallowed.push(this.config.elementId),
                this.applyBidSizingToWrapper(this.winningBid),
                this.richCreativePartnerHandler(),
                ["sublime", "venatus", "justpremium"].indexOf(this.winningBid.bidderCode) > -1 && window[n.b].skinAdUnitCode && (window[n.b].refreshDisallowed.push(this.config.elementId),
                m.disallowSticky = !0)
            }
        }
        ,
        this.richCreativePartnerHandler = function() {}
        ,
        this.getAllAvailableBidsInPool = function() {
            let e = window[n.c].getBidResponsesForAdUnitCode(this.config.elementId).bids.filter((function(e) {
                return e && (e.status && !("rendered" === e.status) || !e.status)
            }
            ))
              , t = (new Date).getTime();
            return e.filter((function(e) {
                return e.responseTimestamp + 1e3 * Object(s.g)(e) > t
            }
            ))
        }
        ,
        this.multipleBidderBidsInPool = function() {
            let e = this.getAllAvailableBidsInPool().map((function(e) {
                return e.bidderCode
            }
            ));
            return e.length > new Set(e).size
        }
        ,
        this.logImpressionToBQ = function(e, t) {
            let i, r = this.getWinningBidEstimatedValue(e);
            if (t = void 0 !== t ? t : {},
            "amazon" === e) {
                let e;
                try {
                    e = this.amazonTargeting.amznbid
                } catch (t) {
                    this.cachedAmazonBid && (e = this.cachedAmazonBid.amznbid)
                }
                e && e.length && (i = e),
                r = o.g.getZZBidVal(r, i)
            }
            e = void 0 !== e ? e : "unfilled",
            Object(a.a)(`Winning ${this.impressionType} impression for ${this.config.elementId}: ${e} at ${r}`);
            let d = {}
              , c = Object(s.n)();
            if (this.winningBid && this.winningBid.bidderCode === e) {
                try {
                    d.addomain = this.winningBid.adserverTargeting.hb_adomain,
                    d.creative_id = this.winningBid.adserverTargeting.hb_crid,
                    d.ad_id = this.winningBid.adId,
                    d.source = this.winningBid.source
                } catch (e) {}
                c = this.winningBid.requestId
            }
            if (this.winningBid) {
                let e = this.getSecondBid(this.winningBid.bidderCode);
                e && (d.secondbid_bidder = e.bidderCode,
                d.secondbid_bid = e.originalCpm)
            }
            "video" === this.media && (d.ad_length = this.currentAdDuration),
            this.confiantRefreshed && (d.confiant_refreshed = !0);
            try {
                let e = !1;
                void 0 !== window.eh2 && (e = !0),
                void 0 !== window.lngtdAuthd && (e = !0),
                d.authenticated = e
            } catch (e) {}
            this.currentImpressionId = c,
            this.winningBid ? d.bidfloor = this.getFloorForEnv(this.winningBid.auctionId, !0) : d.bidfloor = this.getFloorForEnv(this.currentAuctionId, !0),
            l.a.dropBidderCode && (d.dropped_bidder = l.a.dropBidderCode);
            try {
                let e = g.a.getPrebidUserIdsDefined();
                d.user_ids = e.join("|"),
                g.a.currentEnrichTestId && (d.enrich_test = g.a.currentEnrichTestId),
                d.enr_li = u.c.getLiModuleEnabled(),
                d.enr_li_ids = g.a.getUserIdsForPartner("liveintent").join("|"),
                d.enr_op = l.a.testGroups.optable,
                d.enr_op_ids = g.a.getUserIdsForPartner("optable").join("|")
            } catch (e) {}
            d.raw_impression_count = this.allImpressionCount,
            d = Object.assign({}, d, t),
            d = Object.assign({}, d, u.c.getExtraLogging());
            let h = {};
            window[n.b].accountFunctions.extraLogging && "function" == typeof window[n.b].accountFunctions.extraLogging && (h = window[n.b].accountFunctions.extraLogging()),
            d = Object.assign({}, d, h);
            try {
                let e = this.getAllAvailableBidsInPool().map(e => e.requestId);
                d.pool_bids = e.join("|")
            } catch (e) {}
            let f = {
                winning_bidder: e,
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
        this.matchHeightWithParentOrVerticallyCenter = function(e, t) {
            let i = document.getElementById(e);
            if (i)
                if (this.overrideParentSize) {
                    document.getElementById(t).style.height = i.offsetHeight + "px"
                } else
                    try {
                        let e = document.getElementById(t)
                          , n = i.style.top;
                        n = n ? parseInt(n.replace("px", "")) : 0;
                        let o = (e.offsetHeight - i.offsetHeight) / 2;
                        i.style.top = n + o + "px"
                    } catch (e) {}
        }
        ,
        this.handleSlotRenderEnded = function() {
            this.parentElementId && this.matchHeightWithParentOrVerticallyCenter(this.config.elementId, this.parentElementId)
        }
        ,
        this.clearThirdPartyCreativeContainers = function() {}
        ,
        this.shouldSleepBidder = function(e) {
            let t = !1;
            if (o.a.getConfig("account.shouldFilterNonActiveBidders")) {
                let i, n, s = o.a.getConfig("account.smartRequestSettings");
                if (s.hasOwnProperty(o.g.country) ? i = s[o.g.country] : s.hasOwnProperty("row") && (i = s.row),
                s.hasOwnProperty("never_sleep_bidders") && (n = s.never_sleep_bidders,
                Array.isArray(n) && n.includes(e)))
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
                    let n = this.getBiddingActivity(e)
                      , o = n.emptyAuctionCount
                      , s = n.disabled
                      , a = n.lastBid;
                    if (s) {
                        Date.now() - s >= r.disabledTimeQty ? this.enableBidder(e) : t = !0
                    } else {
                        let n = Date.now() - a;
                        a && n < r.lastBidAgeMax || o >= i && (this.disableBidder(e),
                        t = !0)
                    }
                } catch (e) {}
            }
            return "Edge" === o.g.getBrowser() && "triplelift" === e && "video" === this.media || t
        }
        ,
        this.getUnitBidderKey = function(e) {
            return ["lngtd", this.config.uid, e, "ba"].join("-")
        }
        ,
        this.persistSmartRequestAcrossSession = function() {
            try {
                return !o.a.getConfig("account.smartRequestSettings").hasOwnProperty("limitToPageview")
            } catch (e) {
                return !0
            }
        }
        ,
        this.setBiddingActivity = function(e, t) {
            if (Object(s.h)() && this.persistSmartRequestAcrossSession()) {
                let i = this.getUnitBidderKey(e)
                  , n = this.getBiddingActivity(e)
                  , o = Object.assign(n, t);
                window.sessionStorage.setItem(i, JSON.stringify(o))
            } else {
                this.getBiddingActivity(e);
                for (const [i,n] of Object.entries(t))
                    this.biddersActivity[e][i] = n
            }
        }
        ,
        this.getBiddingActivity = function(e) {
            if (Object(s.h)() && this.persistSmartRequestAcrossSession()) {
                let t = this.getUnitBidderKey(e);
                if (!window.sessionStorage.getItem(t)) {
                    let e = {
                        emptyAuctionCount: 0,
                        lastBid: null,
                        disabled: null
                    };
                    window.sessionStorage.setItem(t, JSON.stringify(e))
                }
                return JSON.parse(window.sessionStorage.getItem(t))
            }
            return this.biddersActivity.hasOwnProperty(e) || (this.biddersActivity[e] = {},
            this.biddersActivity[e].emptyAuctionCount = 0,
            this.biddersActivity[e].lastBid = null,
            this.biddersActivity[e].disabled = null),
            this.biddersActivity[e]
        }
        ,
        this.disableBidder = function(e) {
            let t = {
                disabled: Date.now()
            };
            this.setBiddingActivity(e, t)
        }
        ,
        this.enableBidder = function(e) {
            this.setBiddingActivity(e, {
                emptyAuctionCount: 0,
                disabled: null
            })
        }
        ,
        this.logBidActivity = function(e) {
            let t = {
                emptyAuctionCount: 0,
                lastBid: Date.now(),
                disabled: null
            };
            this.setBiddingActivity(e, t)
        }
        ,
        this.logNoBidActivity = function(e) {
            let t = {
                emptyAuctionCount: this.getBiddingActivity(e).emptyAuctionCount += 1
            };
            this.setBiddingActivity(e, t)
        }
        ,
        this.buildCloseCss = function(e, t, i, n, o, s, r) {
            return `#${e} {\n                    cursor:pointer;\n                    background-size:contain;\n                    background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAGxlWElmTU0AKgAAAAgAAwESAAMAAAABAAEAAAExAAIAAAAQAAAAModpAAQAAAABAAAAQgAAAABTaG90d2VsbCAwLjI4LjQAAAOgAQADAAAAAQABAACgAgAEAAAAAQAAACCgAwAEAAAAAQAAACAAAAAAAx1+rAAAAtNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDYuMC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MzI8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MzI8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpJbWFnZUhlaWdodD4zMjwvdGlmZjpJbWFnZUhlaWdodD4KICAgICAgICAgPHRpZmY6SW1hZ2VXaWR0aD4zMjwvdGlmZjpJbWFnZVdpZHRoPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPlNob3R3ZWxsIDAuMjguNDwveG1wOkNyZWF0b3JUb29sPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KejbhCAAABO5JREFUWAnNlktMnFUUx2cGRxQjykxSNGwMHWEhE1BjtE2MU1ttpxoSmxDDYyxhgcbEhamJTeyChbpp1VXVsCAgrwWJJvgCbSzdtK6sDQ0LnKLRFTYy4osAMuPv3N7zeedjvhlY6U3ud8/rnvO/957v3BsK/cctvNv4AwMDkaWlpcTW1tbeQqEQk/nhcHgFOtvU1HQNfX43PncKINzd3f0Ejo/TD9PjAUF+AcwMupGxsbFzjIUAO09cEUAmk3mc1Z2h3+/N2hnxDXNemZiYOF/OPBBAR0fHzbS3mfwiPdCunHN0YCic3dzcPDE1NbVRyrak476+vtvX19enmZDyTZItvUT/jH6FvkyXVk+gNrY/Db2P7vd7fmNjox0Qf4ix2/yGoXQ6XR2LxeQcU46hBP6Yfmp8fHzekW8jyZUkQN4A0NMoXf8C4oh/J27yeyC4bHvKka/h7HnOctSRBZIWYDtAjmP0Pv0Wa3wgGo2+Bf2S5c3gIgxJwuXzeclelUvwpyolkuvQpa2/T5EpCNwVDrr+Is6EMMEFoQYXY1m5l8WsqjaVSm3bNfUhOskf5UdHR7+CfoEuRyiN0wmfkdFwfDwAXV1dT8K3qYJx2t12gr+JbKWhoeFHVvawY2fIzs7Ofeh+Inlz2L6ueo5khKCfKM/4QE9PzyHlPQAYyZlpy0cikVPK8EveAf0qvYp+Nzs1S5BHVC/BsZfEvcvanHR3gp18DbnugkzzYhkAUl4RSoXTdontu6pMXV3dX9DXlWcUQDMCwgle6+ivU67XlLeJ+bXyADpiY944gmw2ey9KU9fFiN2Q/9xrg4ODm8iOIfjNE1oQduVu8FV26Njc3Nzfjq1UJNdnfHFxca/o9QgSrjEOvnV5oantFwEhhcYPwh88PTk5KcWqqDG3yCe8iWkAgK6uyPrfClckDgChNrLyksGtgVZNtTcxdQdUWHHkGnaTqcie4wjUFRk6jAHAduQcmZD1Pt6wAQmnpl5iqsA3+n2amAYAq7rmGrMStx4YVUDwVZT+nJgpVSc4ZtdnoaqqysQ0AJqbmxdxtOKAkGTzWn9/fxRQHyLYlnClEpNc+MhfMa2d+lxpbGzMCmMA2GfUrGpBu58V36d8Lpergd6jPKOXcAGJuYcAt6o99SIJLde0tll9uhkAIgXhB6pljMB75ZQrdBX+NHJ57y37s90B8bO1OT00NPQ7tDbxpfVfEnVEFSoUXt59lxlbrZKNKGS4D8YtH+rt7b2TV9KfUphU5o5yVNz5tw0PD/+qcu6YDOAloIkFfRnAD8KbP8YFEALAQRRfqjHjGhOOMmEOeteN4AeYL9exHkeBXDpkb0njTy4Xr83Pz3/f2toqv8tDVhhlfDaZTP6AruxLyHNiCbvySVgvOPS7LOasa1sEQBRcqedqamoehbxHeFqUVTwDiLaWlparNPdSumHhfPkFW7AdZM5JmeuoLnA8mYWFhS1H5iWGK5OjqMXBNDnwWJGCJER+Ednn9r5Ytvp6qR3YH4XfT3ePVs76QnV1dbsvMc1U19AI9COP03g8/g5O5UUTaKf2AaMEf4+Vv+x/jKp9Rcc2MeWppn+Hzi03SuAr7MoJN+FKTagIwE4K84w6zG48By8Pl1gJZxJU6vssdiP8vl9Ai6xs2ykAz4m8ZOwDJkEgc6WSFxI4m0gkvtMK5034vxP/ADsp+IPGMGBJAAAAAElFTkSuQmCC");\n                    background-color:rgba(255,255,255,0.5);\n                    border-radius: 50% 50% 50% 50%;\n                    width:${t};\n                    height:${t};\n                    position:absolute;\n                    top:${i};\n                    right:${n};\n                    bottom:${o};\n                    left:${s};\n                    margin-left:${r};\n                    z-index:9;\n                    display:none;\n                    box-shadow:0 0 6px rgba(255,255,255,0.5);\n                }`
        }
        ,
        this.cleanUnit(),
        this.modifyConfig()
    }
}
, function(e, t, i) {
    "use strict";
    i.d(t, "p", (function() {
        return g
    }
    )),
    i.d(t, "r", (function() {
        return h
    }
    )),
    i.d(t, "s", (function() {
        return f
    }
    )),
    i.d(t, "m", (function() {
        return p
    }
    )),
    i.d(t, "j", (function() {
        return m
    }
    )),
    i.d(t, "k", (function() {
        return b
    }
    )),
    i.d(t, "n", (function() {
        return w
    }
    )),
    i.d(t, "q", (function() {
        return v
    }
    )),
    i.d(t, "v", (function() {
        return A
    }
    )),
    i.d(t, "d", (function() {
        return C
    }
    )),
    i.d(t, "w", (function() {
        return O
    }
    )),
    i.d(t, "h", (function() {
        return _
    }
    )),
    i.d(t, "g", (function() {
        return S
    }
    )),
    i.d(t, "i", (function() {
        return T
    }
    )),
    i.d(t, "f", (function() {
        return E
    }
    )),
    i.d(t, "b", (function() {
        return P
    }
    )),
    i.d(t, "c", (function() {
        return x
    }
    )),
    i.d(t, "e", (function() {
        return j
    }
    )),
    i.d(t, "o", (function() {
        return U
    }
    )),
    i.d(t, "l", (function() {
        return F
    }
    )),
    i.d(t, "t", (function() {
        return B
    }
    )),
    i.d(t, "a", (function() {
        return k
    }
    )),
    i.d(t, "u", (function() {
        return R
    }
    ));
    var n = i(2)
      , o = i(0)
      , s = i(1)
      , r = i(4)
      , a = i(11)
      , d = i(3)
      , c = i(7)
      , l = i(6);
    const u = new Event("userInteraction")
      , g = new Event("pauseRefreshUserInteraction")
      , h = new Event("restartRefresh");
    function f() {
        Object(n.a)("Scroll handler called");
        let e = document.documentElement.scrollTop || document.body.scrollTop;
        e > o.g.lastScrollTop ? o.g.currentScrollDirection = "down" : o.g.currentScrollDirection = "up",
        o.g.lastScrollTop = e <= 0 ? 0 : e,
        document.dispatchEvent(u)
    }
    function p() {
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
    let y;
    function v() {
        Object(n.a)("Resize handler called", window.innerWidth, o.g.currentWindowWidth),
        window.innerWidth !== o.g.currentWindowWidth && o.g.refreshOnResize && (o.g.currentWindowWidth = window.innerWidth,
        clearTimeout(y),
        y = setTimeout((function() {
            window[s.b].resetAndRunAuction("resize")
        }
        ), 1e3))
    }
    function I(e) {
        let t = e.type;
        Object(n.a)("Human check handler called by ", e),
        o.g.isHuman = !0,
        document.removeEventListener(t, I, !1)
    }
    function A() {
        ["keyup", "mousemove", "swipe", "touchstart", "touchmove", "touchend", "scroll", "gesture"].forEach((function(e) {
            document.addEventListener(e, I, !1)
        }
        ))
    }
    function C(e) {
        try {
            let t = e.bidderRequests[0].bids[0].adUnitCode
              , i = r.c.getUnitFromCode(t)
              , o = {};
            try {
                let e = window[s.c].getBidResponsesForAdUnitCode(t).bids.filter((function(e) {
                    return void 0 === e.status
                }
                )).map(e => e.requestId);
                o.pool_bids = e.join("|")
            } catch (e) {}
            let a = {
                auction_id: e.auctionId,
                timeout: e.timeout,
                start: e.timestamp,
                end: e.auctionEnd,
                unit: i.config.gamPath,
                floor: i.getFloorForEnv(e.auctionId, !0),
                bids_requested: e.bidderRequests.length,
                bids_requested_bidders: e.bidderRequests.map(e => e.bidderCode),
                bids_requested_s2s_bidders: e.bidderRequests.filter(e => "s2s" === e.src).map(e => e.bidderCode),
                bids_received: e.bidsReceived.length,
                bids_received_s2s_bidders: e.bidsReceived.filter(e => "s2s" === e.source).map(e => e.bidderCode),
                bids_rejected: e.bidsRejected.length,
                no_bids: e.noBids.length,
                no_bids_bidders: e.noBids.map(e => e.bidder)
            };
            Object(n.e)("auction", Object(n.b)(), a, o)
        } catch (e) {}
    }
    function O(e) {
        try {} catch (e) {}
    }
    function _(e) {
        let t = e.bidderCode
          , i = e.adUnitCode
          , o = e.auctionId;
        void 0 === e.originalCpm && (e.originalCpm = e.cpm);
        let s = e.originalCpm
          , a = t + "_bid";
        Object(n.a)("bid response", o, i, a, s, e);
        let d = r.c.getUnitFromCode(i);
        if (d) {
            let i = d.getFloorForEnv(o, !0)
              , r = parseFloat(i.toPrecision(4))
              , a = parseFloat(s.toPrecision(4));
            if (i && a < r)
                return Object(n.c)(e),
                void d.logNoBidActivity(t);
            try {
                d.logBidActivity(t)
            } catch (e) {
                return
            }
        }
        try {
            (["outstream", "outstream-in-banner", "outstream-with-content", "moment-video", "video-third-party", "video"].indexOf(d.config.unitType) > -1 || d.alwaysCacheBids) && (e.vastUrl && e.adserverTargeting.hb_cache_id || (d.bidCachePromises[e.requestId] = d.cacheBidPromise(e)))
        } catch (e) {}
        Object(n.d)(e)
    }
    function S(e) {
        e.bids.forEach((function(t) {
            try {
                let i = r.c.getUnitFromCode(t.adUnitCode);
                e.bidderCode,
                i.config.gamPath,
                i.getFloorForEnv(t.auctionId, !0),
                i.impressionType,
                t.auctionId,
                t.bidId
            } catch (e) {}
        }
        ))
    }
    function T(e) {
        e.forEach((function(e) {
            Object(n.a)("bid timeout", e.bidder, e);
            try {
                let t = r.c.getUnitFromCode(e.adUnitCode)
                  , i = {
                    bidder: e.bidder,
                    unit: t.config.gamPath,
                    floor: t.getFloorForEnv(e.auctionId, !0),
                    auction_type: t.impressionType,
                    timeout: Object(o.e)(),
                    auction_id: e.auctionId,
                    uid: e.bidId
                };
                Object(n.e)("bid_timeout", Object(n.b)(), i, null)
            } catch (e) {}
        }
        ))
    }
    function E(e) {
        Object(n.a)("bid error", e.error, e.bidderRequest),
        e.bidderRequest.bids.forEach((function(t) {
            try {
                let i, o = r.c.getUnitFromCode(t.adUnitCode), s = {
                    bidder: e.bidderRequest.bidderCode,
                    unit: o.config.gamPath,
                    auction_type: o.impressionType,
                    auction_id: t.auctionId,
                    uid: t.bidId
                };
                try {
                    i = {
                        response: e.error.response,
                        response_text: e.error.responseText,
                        status: e.error.status,
                        status_text: e.error.statusText
                    }
                } catch (e) {}
                Object(n.e)("bid_error", Object(n.b)(), s, i)
            } catch (e) {}
        }
        ))
    }
    function P(e) {
        Object(n.a)("ad render failed", e.reason, e.message);
        const t = {
            reason: e.reason,
            message: e.message
        };
        Object(n.e)("ad_render_failure", Object(n.b)(), null, t)
    }
    function x(e) {
        Object(n.a)("ad render success", e.bid, e.adId);
        const t = {
            uid: e.bid.requestId,
            ad_id: e.adId
        };
        Object(n.e)("ad_render_success", Object(n.b)(), null, t)
    }
    function j(e) {
        try {
            e.auctionId,
            e.timeout,
            e.timestamp
        } catch (e) {}
    }
    function U(e) {
        let t = e.bidder
          , i = e.adUnitCode;
        try {
            r.c.getUnitFromCode(i).logNoBidActivity(t)
        } catch (e) {}
    }
    function F(e) {
        o.a.getConfig("account.shouldFilterNonActiveBidders") && e.forEach((function(e) {
            let t = []
              , i = r.c.getUnitFromId(e.elementId);
            e.bids.forEach((function(o) {
                i.shouldSleepBidder(o.bidder) ? Object(n.a)(`Filtering out bidder ${o.bidder} for unit ${e.elementId}`) : t.push(o)
            }
            )),
            e.bids = t
        }
        ))
    }
    function B(e) {
        e.forEach((function(e) {
            let t = r.c.getUnitFromId(e.elementId);
            if (t) {
                let i = t.getFloorForEnv(t.currentAuctionId, !0);
                try {
                    let t = {
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
                    e.ortb2Imp.ext.prebid = {
                        floors: t
                    },
                    e.ortb2Imp.bidfloor = i,
                    e.ortb2Imp.bidfloorcur = "USD"
                } catch (e) {}
                e.bids.forEach((function(e) {
                    e.floorData = {
                        floorMin: i
                    },
                    "rubicon" === e.bidder && t.config.mediaTypes.video && (e.params.floor = i),
                    "appnexus" === e.bidder && (e.params.reserve = i),
                    "openx" === e.bidder && (e.params.customFloor = i),
                    "ttd" === e.bidder && (e.params.bidfloor = i),
                    e.getFloor = function() {
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
    function k(e) {
        let t = e.slot.getSlotElementId()
          , i = r.c.getUnitFromId(t);
        if (i) {
            Object(n.a)("Viewability met for unit (GPT)", t, e);
            try {
                i.metGPTViewability = !0
            } catch (e) {
                Object(n.a)("Unit is not defined in LNGTD code:", t)
            }
            try {
                i.markAsViewable()
            } catch (e) {}
        }
    }
    function R(e) {
        try {
            let t = e.slot.getAdUnitPath()
              , i = e.slot.getSlotElementId()
              , u = r.c.getUnitFromId(i);
            if (u || (u = r.c.getUnitFromPath(t)),
            !u)
                return void Object(n.a)(`Cannot handle slotRenderEnded event for ${t} / ${i} because it cannot be found.`);
            if (u.handleSlotRenderEnded(),
            document.dispatchEvent(new CustomEvent("unitRenderComplete",{
                detail: {
                    unitId: i,
                    winningBid: u.winningBid,
                    originalEvent: e
                }
            })),
            e.isEmpty)
                u.winningBid && o.a.getConfig("account.deliverPrebidIfNoGAMFill") ? a.a.renderPrebidWinningBidWithoutGAM(u.winningBid, i) : (u.handleUnfilledImpression(),
                c.b.allowTaglessOnUnfilledAndNoConsent && (Object(d.d)("taglesstest") || c.b.iabConsent.allRejected) && (l.a.makeTaglessRequest(u.config, i, null),
                u.config.refresh = !1));
            else {
                try {
                    if (e.elementId) {
                        let t = document.getElementById(e.elementId)
                          , i = t.getElementsByTagName("iframe")[0];
                        t.ariaLabel = "Advertisement",
                        i.ariaLabel = "Advertisement"
                    }
                } catch (e) {}
                u.handleFilledImpression(e),
                window[s.b].accountFunctions.customRenderHandler && "function" == typeof window[s.b].accountFunctions.customRenderHandler && window[s.b].accountFunctions.customRenderHandler(u.winningBid)
            }
        } catch (e) {
            Object(n.a)(e)
        }
    }
}
, function(e, t, i) {
    "use strict";
    i.d(t, "a", (function() {
        return l
    }
    ));
    var n = i(3)
      , o = i(0)
      , s = i(2)
      , r = i(10)
      , a = i(1)
      , d = i(5)
      , c = i(8);
    const l = new function() {
        this.initialized = !1,
        this.slots = {},
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
            let e = this;
            googletag.cmd.push((function() {
                googletag.destroySlots(),
                googletag.pubads().clearTargeting();
                for (let t in e.slots)
                    if (e.slots.hasOwnProperty(t))
                        try {
                            let e = document.getElementById(t);
                            if (e)
                                for (let t = 0; t < e.children.length; t++)
                                    try {
                                        e.children[t].remove()
                                    } catch (e) {}
                        } catch (e) {}
                e.slots = {}
            }
            ))
        }
        ,
        this.loadScript = function(e) {
            let t = this;
            void 0 !== e && (this.gptScriptPath = e),
            !t.loaded && o.a.getConfig("account.useGAM") && Object(n.j)(this.gptScriptPath, (function() {
                t.loaded = !0
            }
            ), !0)
        }
        ,
        this.getTaxonomies = function() {
            let e = null;
            if (window[a.b].accountFunctions.getOrtb2Values && "function" == typeof window[a.b].accountFunctions.getOrtb2Values) {
                const t = window[a.b].accountFunctions.getOrtb2Values();
                let i = []
                  , n = [];
                if (t.site && t.site.cat)
                    for (let e = 0; e < t.site.cat.length; e++) {
                        let o = t.site.cat[e];
                        o.indexOf("IAB") ? (o = o.replace("IAB", ""),
                        i.push(o)) : n.push(o)
                    }
                (i.length || n.length) && (e = {},
                i.length && (e.IAB_CONTENT_1 = {
                    values: i
                }),
                n.length && (e.IAB_CONTENT_2_2 = {
                    values: n
                }))
            }
            return e
        }
        ,
        this.defineBaseSettings = function() {
            let e = this;
            googletag.cmd.push((function() {
                googletag.pubads().enableSingleRequest(),
                googletag.pubads().disableInitialLoad(),
                googletag.enableServices(),
                googletag.pubads().addEventListener("impressionViewable", d.a),
                googletag.pubads().addEventListener("slotRenderEnded", d.u);
                try {
                    window.parent.document.location.href !== window.document.location.href && googletag.pubads().set("page_url", window.parent.document.location.href)
                } catch (e) {}
                if (e.useSafeFrames && "force" === e.useSafeFrames) {
                    const e = {
                        allowOverlayExpansion: !0,
                        allowPushExpansion: !0,
                        sandbox: !0
                    };
                    googletag.pubads().setForceSafeFrame(!0),
                    googletag.pubads().setSafeFrameConfig(e)
                }
            }
            )),
            this.setBaseTargeting()
        }
        ,
        this.setBaseTargeting = function() {
            let e = this;
            googletag.cmd.push((function() {
                googletag.pubads().setTargeting("session-depth", o.h.sessionDepth.toString()),
                googletag.pubads().setTargeting("lngtd_version", a.d),
                e.setAdditionalTargeting()
            }
            ))
        }
        ,
        this.resetSlotTargeting = function(e) {
            let t = this;
            googletag.cmd.push((function() {
                googletag.pubads().clearTargeting(),
                t.slots[e.config.elementId].clearTargeting(),
                t.setBaseTargeting()
            }
            ))
        }
        ,
        this.setAdditionalTargeting = function() {
            let e = this;
            this.defineAdditionalTargeting(),
            Object.keys(e.additionalTargeting).length > 0 && googletag.cmd.push((function() {
                Object.keys(e.additionalTargeting).forEach((function(t) {
                    try {
                        googletag.pubads().setTargeting(t, e.additionalTargeting[t].toString())
                    } catch (e) {}
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
        this.setAdditionalSlotTargeting = function(e) {}
        ,
        this.initializeUnit = function(e) {
            this.defineGPTSlotForUnit(e),
            this.defineSlotCustom(e)
        }
        ,
        this.defineSlotCustom = function(e) {}
        ,
        this.defineOutOfPageUnit = function(e) {
            let t = this;
            googletag.cmd.push((function() {
                let i = googletag.defineOutOfPageSlot(e.config.gamPath, e.config.elementId).addService(googletag.pubads());
                if (!document.getElementById(e.config.elementId)) {
                    var n = document.createElement("div");
                    n.id = e.config.elementId,
                    n.style.cssText = "width:100%;height:0px;",
                    document.body.appendChild(n)
                }
                i && (googletag.display(i),
                t.slots[e.config.elementId] = i,
                Object(s.a)("GPT OOP created", i))
            }
            ))
        }
        ,
        this.defineInterstitialUnit = function(e) {
            let t = this;
            googletag.cmd.push((function() {
                let i = googletag.defineOutOfPageSlot(e.config.gamPath, googletag.enums.OutOfPageFormat.INTERSTITIAL).addService(googletag.pubads());
                i && (googletag.display(i),
                t.slots[e.config.elementId] = i,
                Object(s.a)("GPT interstitial created", i),
                t.auctionAndCallGPTInterstitial(e, i))
            }
            ))
        }
        ,
        this.gamingInterstitials = {},
        this.defineInterstitialGamingUnit = function(e) {
            let t = this;
            googletag.cmd.push((function() {
                let i = googletag.defineOutOfPageSlot(e.config.gamPath, googletag.enums.OutOfPageFormat.GAME_MANUAL_INTERSTITIAL).addService(googletag.pubads());
                i && (console.log("H5 INTERSTITIAL DEFINED", e.config.elementId),
                t.gamingInterstitials[e.config.elementId] = i,
                googletag.display(i))
            }
            ))
        }
        ,
        this.triggerInterstitialGamingUnit = function(e, t) {
            const i = this.gamingInterstitials[e.config.elementId];
            let n = setTimeout((function() {
                t()
            }
            ), 2500);
            i ? googletag.cmd.push((function() {
                googletag.pubads().addEventListener("gameManualInterstitialSlotReady", t => {
                    console.log("H5 INTERSTITIAL READY", e.config.elementId),
                    i === t.slot && (clearTimeout(n),
                    t.makeGameManualInterstitialVisible())
                }
                ),
                googletag.pubads().addEventListener("gameManualInterstitialSlotClosed", (function() {
                    console.log("H5 INTERSTITIAL CLOSED", e.config.elementId),
                    clearTimeout(n),
                    t()
                }
                )),
                googletag.pubads().addEventListener("slotRenderEnded", (function(o) {
                    i === o.slot && o.isEmpty && (clearTimeout(n),
                    console.log("H5 INTERSTITIAL DID NOT FILL", e.config.elementId),
                    t())
                }
                )),
                googletag.pubads().refresh([i])
            }
            )) : t()
        }
        ,
        this.auctionAndCallGPTInterstitial = function(e, t) {
            Object(s.a)("GPT interstitial auction running", e, t);
            let i = Object(n.n)()
              , r = function() {
                l.setTargetingForAdUnit(e),
                googletag.cmd.push((function() {
                    Object(s.a)("GPT interstitial calling", t),
                    googletag.pubads().refresh([t])
                }
                ))
            };
            window[a.c].que.push((function() {
                window[a.c].requestBids({
                    adUnitCodes: [e.config.code],
                    bidsBackHandler: r,
                    timeout: Object(o.e)(),
                    auctionId: i
                })
            }
            ))
        }
        ,
        this.defineGPTSlotForUnit = function(e) {
            let t = this;
            t.slots.hasOwnProperty(e.config.elementId) || "" === e.config.gamPath || googletag.cmd.push((function() {
                const i = ["dynamic-parent", "outstream", "outstream-in-banner", "outstream-with-content", "video-third-party", "video-auction-only", "video"];
                try {
                    if ("out-of-page" === e.config.unitType)
                        t.defineOutOfPageUnit(e);
                    else if ("interstitial" === e.config.unitType)
                        window.innerWidth < 2500 && t.defineInterstitialUnit(e);
                    else if (i.indexOf(e.config.unitType) > -1)
                        ;
                    else {
                        let i = googletag.defineSlot(e.config.gamPath, e.config.gamSizes, e.config.elementId).addService(googletag.pubads());
                        i && (t.slots[e.config.elementId] = i)
                    }
                } catch (t) {
                    Object(s.a)(t),
                    Object(s.a)("Error defining GPT slot for unit", e.config)
                }
            }
            ))
        }
        ,
        this.defineGPTSlotWithinAdUnitAndDisplay = function(e) {
            let t = this;
            googletag.cmd.push((function() {
                let i = googletag.defineSlot(e.gamPath, e.gamSizes, e.elementId).addService(googletag.pubads());
                i && (t.slots[e.elementId] = i,
                t.setAdditionalTargeting(),
                googletag.pubads().refresh([i]),
                t.logRequestsToBQ([i]))
            }
            ))
        }
        ,
        this.setSlotTargeting = function(e, t) {
            let i = this.slots[e];
            if (i)
                for (const [e,n] of Object.entries(t))
                    i.setTargeting(e, n)
        }
        ,
        this.doPubAdsRefresh = function(e, t) {
            let i = this
              , n = [];
            Object(s.a)("GAM being called for units:", e),
            googletag.cmd.push((function() {
                try {
                    e.forEach((function(e) {
                        let t = document.getElementById(e.config.elementId);
                        t && (t.style.textAlign = "center",
                        t.dataset.state = "loaded");
                        let o = i.slots[e.config.elementId];
                        "init" === e.impressionType && googletag.display(o),
                        i.setTargetingForAdUnit(e),
                        n.push(o)
                    }
                    ))
                } catch (e) {
                    Object(s.a)("Error with GPT prep", e)
                }
                if (n.length > 0) {
                    let e = c.a.getUserPPID();
                    e && googletag.pubads().setPublisherProvidedId(e),
                    googletag.pubads().refresh(n),
                    i.logRequestsToBQ(n)
                }
            }
            ))
        }
        ,
        this.logRequestsToBQ = function(e) {
            l.logAllRequests && e.forEach((function(e) {
                let t = {
                    path: e.getAdUnitPath(),
                    element_id: e.getSlotElementId()
                };
                Object(s.e)("gam_request", Object(s.b)(), null, t)
            }
            ))
        }
        ,
        this.getUPRForAdUnit = function(e) {
            let t = e.getFloorForEnv(e.currentAuctionId, !0)
              , i = .01
              , n = [.01, .02, .03, .04, .05, .07, .09, .12, .15, .2, .25, .3, .35, .4, .5, 1];
            if (t > 0) {
                let e = n[0]
                  , o = Math.abs(t - e);
                n.forEach((function(e) {
                    let n = Math.abs(t - e);
                    n < o && t > e && (o = n,
                    i = e)
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
        this.getVideoUPRForAdUnit = function(e) {
            let t = e.getFloorForEnv(e.currentAuctionId, !0)
              , i = .01
              , n = [.01, .02, .03, .04, .05, .07, .09, .12, .15, .2, .25, .3, .35, .4, .5, 1];
            if (t > 0) {
                let e = n[0]
                  , o = Math.abs(t - e);
                n.forEach((function(e) {
                    let n = Math.abs(t - e);
                    n < o && t > e && (o = n,
                    i = e)
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
        this.setTargetingForAdUnit = function(e) {
            this.setAdditionalTargeting();
            let t = e.getTargetingForGAM();
            this.setSlotTargeting(e.config.elementId, t),
            this.setAdditionalSlotTargeting(e.config.elementId)
        }
        ,
        this.makeTaglessRequest = function(e, t, i) {
            Object(s.a)("Making tagless call to GAM for:", t, e);
            let n = document.getElementById(t);
            Object(s.a)("Tagless will fill", n);
            let o = {
                tagless: !0
            };
            i && "object" == typeof i && (o = Object.assign({}, o, i));
            const r = new URLSearchParams(o).toString()
              , a = encodeURIComponent(r);
            let d = {
                adunit: e.gamPath,
                width: e.gamSizes[0][0],
                height: e.gamSizes[0][1],
                targeting: a
            };
            !function(e) {
                let t = Math.floor(1e8 * Math.random());
                e.requestUrl = "https://securepubads.g.doubleclick.net/gampad/adx?iu=" + e.adunit + "&sz=" + e.width + "x" + e.height + "&c=" + t + "&tile=1&d_imp=1",
                e.targeting && (e.requestUrl = e.requestUrl + "&t=" + e.targeting)
            }(d),
            function(e) {
                if (e.requestUrl) {
                    const t = new XMLHttpRequest;
                    t.open("GET", e.requestUrl),
                    t.send(),
                    t.onreadystatechange = () => {
                        4 === t.readyState && (e.adData = t.responseText,
                        e.adData && function(e) {
                            let t = document.createElement("iframe");
                            t.style.width = e.width + "px",
                            t.style.height = e.height + "px";
                            try {
                                n.innerHTML = "",
                                n.appendChild(t),
                                t.contentWindow.document.open(),
                                t.contentWindow.document.write(e.adData),
                                t.contentWindow.document.close()
                            } catch (e) {
                                Object(s.a)("Error fulfilling tagless request", e)
                            }
                        }(e))
                    }
                }
            }(d)
        }
    }
}
, function(e, t, i) {
    "use strict";
    i.d(t, "b", (function() {
        return a
    }
    )),
    i.d(t, "a", (function() {
        return d
    }
    ));
    var n = i(1)
      , o = i(0)
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
        this.allowTaglessOnUnfilledAndNoConsent = !1,
        this.initialize = function() {
            let e = window.sessionStorage.getItem("lngtd-iabconsent");
            e && (this.iabConsent = JSON.parse(e))
        }
        ,
        this.gdprCountries = ["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "GB", "CH", "NO", "IS", "LI", "AD", "RS", "UA", "RU", "AL"],
        this.usPrivacyStates = ["CA", "CO", "CT", "OR", "UT", "TX", "VA"],
        this.setIabConsent = function(e, t) {
            e && t && (a.iabConsent[e] = t),
            s.h && window.sessionStorage.setItem("lngtd-iabconsent", JSON.stringify(this.iabConsent))
        }
        ,
        this.getIabConsent = function(e) {
            return e ? this.iabConsent[e] : null
        }
        ,
        this.waitForCMP = function(e) {
            let t = this;
            if (a.cmpGPP) {
                const i = setInterval((function() {
                    window.__gpp && (clearInterval(i),
                    __gpp("addEventListener", (function(i) {
                        if (i.pingData && "ready" === i.pingData.signalStatus && !a.cmpLoaded && (a.cmpLoaded = !0,
                        e()),
                        "sectionChange" === i.eventName)
                            try {
                                const e = lngtd.consent.getIabConsent("gpp");
                                e && e.parsedSections[Object.keys(e.parsedSections)[0]].SaleOptOut !== i.pingData.parsedSections[Object.keys(i.pingData.parsedSections)[0]].SaleOptOut ? (t.setIabConsent("gpp", i.pingData),
                                window[n.b].resetAndRunAuction()) : t.setIabConsent("gpp", i.pingData)
                            } catch (e) {
                                Object(r.a)("Error checking new consent against existing", e),
                                t.setIabConsent("gpp", i.pingData)
                            }
                    }
                    )))
                }
                ), 100)
            } else if (a.cmpCCPA) {
                const t = setInterval((function() {
                    window.__uspapi && (clearInterval(t),
                    a.cmpLoaded = !0,
                    e())
                }
                ), 100)
            }
            if (a.cmpGDPR) {
                const i = setInterval((function() {
                    if (window.__tcfapi) {
                        clearInterval(i),
                        a.cmpLoaded = !0;
                        const n = function(i, n) {
                            !i || "useractioncomplete" !== i.eventStatus && "tcloaded" !== i.eventStatus || (i.purpose && 0 === Object.keys(i.purpose.consents).length && t.setIabConsent("allRejected", !0),
                            t.setIabConsent("gdpr", i),
                            e())
                        };
                        window.__tcfapi("addEventListener", 2, n)
                    }
                }
                ), 100)
            }
        }
        ,
        this.updateConsentGeos = function(e, t, i) {
            e && "EU" !== e && (this.cmpGDPR = !1),
            t && -1 === this.gdprCountries.indexOf(t) && (this.cmpGDPR = !1),
            t && "US" !== t && (this.cmpCCPA = !1,
            this.cmpGPP = !1),
            t && "US" === t && i && -1 === this.usPrivacyStates.indexOf(i) && (this.cmpCCPA = !1,
            this.cmpGPP = !1),
            t && null !== this.cmpGDPR && null !== this.cmpCCPA && null !== this.cmpGPP || this.attemptToSetStateByAvailableAPIs()
        }
        ,
        this.attemptToSetStateByAvailableAPIs = function() {
            if (this.geoResolved || !o.a.getConfig("account.enableSourcepoint") || Object(s.d)("ignoreCMP") || d.loadStubs(),
            null === this.cmpGDPR && (this.cmpGDPR = !!window.__tcfapi,
            o.g.country && this.gdprCountries.indexOf(o.g.country) > -1 && !window.__tcfapi)) {
                let e = {
                    country: o.g.country,
                    regionState: o.g.regionState,
                    tcfapi: !!window.__tcfapi
                };
                Object(r.e)("consent_issue", Object(r.b)(), null, e)
            }
            if (null === this.cmpCCPA && (this.cmpCCPA = !!window.__uspapi),
            null === this.cmpGPP && (this.cmpGPP = !!window.__gpp,
            o.g.country && "US" === o.g.country && o.g.regionState && this.usPrivacyStates.indexOf(o.g.regionState) > -1 && !window.__gpp)) {
                let e = {
                    country: o.g.country,
                    regionState: o.g.regionState,
                    gpp: !!window.__gpp,
                    uspapi: !!window.__uspapi
                };
                Object(r.e)("consent_issue", Object(r.b)(), null, e)
            }
        }
        ,
        this.cmpApplies = function() {
            return this.cmpGDPR || this.cmpCCPA || this.cmpGPP
        }
        ,
        this.gppOptedOut = function() {
            if (this.cmpApplies() && this.cmpGPP && this.iabConsent.gpp && Object.keys(this.iabConsent.gpp.parsedSections).length)
                for (let e of Object.keys(this.iabConsent.gpp.parsedSections)) {
                    if (1 === this.iabConsent.gpp.parsedSections[e].SaleOptOut)
                        return !0
                }
            return !1
        }
    }
    ;
    const d = new function() {
        this.stubsLoaded = !1,
        this.getConsentCallback = null,
        this.loadStubs = function() {
            if (!this.stubsLoaded) {
                function e(t) {
                    return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    }
                    : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }
                    )(t)
                }
                this.stubsLoaded = !0,
                function() {
                    for (var t, i, n = [], o = window, s = o; s; ) {
                        try {
                            if (s.frames.__tcfapiLocator) {
                                t = s;
                                break
                            }
                        } catch (t) {}
                        if (s === o.top)
                            break;
                        s = o.parent
                    }
                    t || (function e() {
                        var t = o.document
                          , i = !!o.frames.__tcfapiLocator;
                        if (!i)
                            if (t.body) {
                                var n = t.createElement("iframe");
                                n.style.cssText = "display:none",
                                n.name = "__tcfapiLocator",
                                t.body.appendChild(n)
                            } else
                                setTimeout(e, 5);
                        return !i
                    }(),
                    o.__tcfapi = function() {
                        for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
                            t[o] = arguments[o];
                        if (!t.length)
                            return n;
                        "setGdprApplies" === t[0] ? t.length > 3 && 2 === parseInt(t[1], 10) && "boolean" == typeof t[3] && (i = t[3],
                        "function" == typeof t[2] && t[2]("set", !0)) : "ping" === t[0] ? "function" == typeof t[2] && t[2]({
                            gdprApplies: i,
                            cmpLoaded: !1,
                            cmpStatus: "stub"
                        }) : n.push(t)
                    }
                    ,
                    o.addEventListener("message", (function(t) {
                        var i = "string" == typeof t.data
                          , n = {};
                        if (i)
                            try {
                                n = JSON.parse(t.data)
                            } catch (t) {}
                        else
                            n = t.data;
                        var o = "object" === e(n) ? n.__tcfapiCall : null;
                        o && window.__tcfapi(o.command, o.version, (function(e, n) {
                            var s = {
                                __tcfapiReturn: {
                                    returnValue: e,
                                    success: n,
                                    callId: o.callId
                                }
                            };
                            t && t.source && t.source.postMessage && t.source.postMessage(i ? JSON.stringify(s) : s, "*")
                        }
                        ), o.parameter)
                    }
                    ), !1))
                }(),
                function() {
                    var e = window
                      , t = document;
                    function i(t) {
                        var i = "string" == typeof t.data;
                        try {
                            var n = i ? JSON.parse(t.data) : t.data;
                            if (n.__cmpCall) {
                                var o = n.__cmpCall;
                                e.__uspapi(o.command, o.parameter, (function(e, n) {
                                    var s = {
                                        __cmpReturn: {
                                            returnValue: e,
                                            success: n,
                                            callId: o.callId
                                        }
                                    };
                                    t.source.postMessage(i ? JSON.stringify(s) : s, "*")
                                }
                                ))
                            }
                        } catch (n) {}
                    }
                    !function i() {
                        if (!e.frames.__uspapiLocator)
                            if (t.body) {
                                var n = t.body
                                  , o = t.createElement("iframe");
                                o.style.cssText = "display:none",
                                o.name = "__uspapiLocator",
                                n.appendChild(o)
                            } else
                                setTimeout(i, 5)
                    }(),
                    "function" != typeof __uspapi && (e.__uspapi = function() {
                        var e = arguments;
                        if (__uspapi.a = __uspapi.a || [],
                        !e.length)
                            return __uspapi.a;
                        "ping" === e[0] ? e[2]({
                            gdprAppliesGlobally: !1,
                            cmpLoaded: !1
                        }, !0) : __uspapi.a.push([].slice.apply(e))
                    }
                    ,
                    __uspapi.msgHandler = i,
                    e.addEventListener("message", i, !1))
                }(),
                window.__gpp_addFrame = function(e) {
                    if (!window.frames[e])
                        if (document.body) {
                            var t = document.createElement("iframe");
                            t.style.cssText = "display:none",
                            t.name = e,
                            document.body.appendChild(t)
                        } else
                            window.setTimeout(window.__gpp_addFrame, 10, e)
                }
                ,
                window.__gpp_stub = function() {
                    var e = arguments;
                    if (__gpp.queue = __gpp.queue || [],
                    __gpp.events = __gpp.events || [],
                    !e.length || 1 == e.length && "queue" == e[0])
                        return __gpp.queue;
                    if (1 == e.length && "events" == e[0])
                        return __gpp.events;
                    var t = e[0]
                      , i = e.length > 1 ? e[1] : null
                      , n = e.length > 2 ? e[2] : null;
                    if ("ping" === t)
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
                    else if ("addEventListener" === t) {
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
                    } else if ("removeEventListener" === t) {
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
                        "hasSection" === t ? i(!1, !0) : "getSection" === t || "getField" === t ? i(null, !0) : __gpp.queue.push([].slice.apply(e))
                }
                ,
                window.__gpp_msghandler = function(e) {
                    var t = "string" == typeof e.data;
                    try {
                        var i = t ? JSON.parse(e.data) : e.data
                    } catch (e) {
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
                            e.source.postMessage(t ? JSON.stringify(s) : s, "*")
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
                    gdpr: {},
                    events: {
                        onConsentReady: this.getConsentCallback && "function" == typeof this.getConsentCallback ? (e, t, i, n) => {
                            if (n.applies) {
                                const t = t => {
                                    window._sp_[e].loadPrivacyManagerModal(t)
                                }
                                ;
                                this.getConsentCallback(t, e)
                            }
                        }
                        : () => {}
                    }
                }
            },
            Object(s.j)("//cdn.privacy-mgmt.com/unified/wrapperMessagingWithoutDetection.js", (function() {}
            ))
        }
    }
}
, function(e, t, i) {
    "use strict";
    i.d(t, "a", (function() {
        return d
    }
    ));
    var n = i(0)
      , o = i(1)
      , s = i(10)
      , r = i(12)
      , a = i(9);
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
            let e = this.userIds
              , t = this.getUpdatedUserIds();
            t && t.length > 0 && t.forEach((function(t) {
                let i = !1;
                for (let n = 0; n < e.length; n++) {
                    e[n].name === t.name && (e[n] = t,
                    i = !0)
                }
                i || e.push(t)
            }
            ));
            let i = s.c.getUserId();
            i && e.push(i),
            e = this.enrichIds(e),
            this.userIds = e
        }
        ,
        this.getUpdatedUserIds = function() {}
        ,
        this.testEnrichIds = !1,
        this.currentEnrichTestId = null,
        this.enrichIds = function(t) {
            let i = ["criteo", "id5", "connectId", "uid2", "liveintent", "optable", "amazon"];
            if (this.testEnrichIds && (window.eh2 || window.ehttd)) {
                const e = i[Math.floor(Math.random() * i.length)];
                i = [e],
                this.currentEnrichTestId = e
            }
            if (i.indexOf("criteo") > -1 && this.enrichCriteo(),
            t.forEach((function(t) {
                "id5id" === t.name && i.indexOf("id5") > -1 && (t.params.pd = e(!1)),
                "connectId" === t.name && void 0 !== window.eh2 && i.indexOf("connectId") > -1 && (t.params.he = window.eh2)
            }
            )),
            window.ehttd && i.indexOf("uid2") > -1) {
                let e = this.getUid2Credentials();
                t.push({
                    name: "uid2",
                    params: {
                        serverPublicKey: e.serverPublicKey,
                        subscriptionId: e.subscriptionId,
                        emailHash: window.ehttd
                    }
                })
            }
            return i.indexOf("amazon") > -1 && r.a.enrichUser(),
            -1 === i.indexOf("liveintent") && (s.c.testGroup = !1),
            -1 === i.indexOf("optable") && (a.a.testGroups.optable = !1),
            t
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
            } catch (e) {}
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
            let e = window[o.c].getUserIds();
            return Object.keys(e)
        }
        ,
        this.getUid2Source = function() {
            let e = null;
            const t = window[o.c].getUserIds();
            return Object.keys(t).indexOf("pubProvidedId") > -1 && t.pubProvidedId.length && t.pubProvidedId[0].ext && "optable.co" === t.pubProvidedId[0].ext.matcher && (e = "optable"),
            Object.keys(t).indexOf("uid2") > -1 && (e = t.uid2.ext && "liveintent.com" === t.uid2.ext.provider ? "liveintent" : "uid2"),
            e
        }
        ,
        this.getUserIdsForPartner = function(e) {
            const t = window[o.c].getUserIds();
            if ("liveintent" === e)
                return Object.keys(Object.fromEntries(Object.entries(t).filter( ([e,t]) => t.ext && "liveintent.com" === t.ext.provider)));
            if ("optable" === e) {
                return t.pubProvidedId.filter(e => "optable.co" === e.inserter).map(e => e.source)
            }
        }
        ,
        this.getUserPPID = function() {
            let e = null
              , t = window[o.c].getUserIds();
            if (t.hasOwnProperty("pubcid") && (e = t.pubcid),
            window[o.b].accountFunctions.getPPID && "function" == typeof window[o.b].accountFunctions.getPPID) {
                let t = window[o.b].accountFunctions.getPPID();
                t && (e = t)
            }
            return e
        }
        ;
        let e = function() {
            let e = {
                _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                encode: function(t) {
                    let i, n, o, s, r, a, d, c = "", l = 0;
                    for (t = e._utf8_encode(t); l < t.length; )
                        i = t.charCodeAt(l++),
                        n = t.charCodeAt(l++),
                        o = t.charCodeAt(l++),
                        s = i >> 2,
                        r = (3 & i) << 4 | n >> 4,
                        a = (15 & n) << 2 | o >> 6,
                        d = 63 & o,
                        isNaN(n) ? a = d = 64 : isNaN(o) && (d = 64),
                        c = c + this._keyStr.charAt(s) + this._keyStr.charAt(r) + this._keyStr.charAt(a) + this._keyStr.charAt(d);
                    return c
                },
                decode: function(t) {
                    let i, n, o, s, r, a, d, c = "", l = 0;
                    for (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""); l < t.length; )
                        s = this._keyStr.indexOf(t.charAt(l++)),
                        r = this._keyStr.indexOf(t.charAt(l++)),
                        a = this._keyStr.indexOf(t.charAt(l++)),
                        d = this._keyStr.indexOf(t.charAt(l++)),
                        i = s << 2 | r >> 4,
                        n = (15 & r) << 4 | a >> 2,
                        o = (3 & a) << 6 | d,
                        c += String.fromCharCode(i),
                        64 != a && (c += String.fromCharCode(n)),
                        64 != d && (c += String.fromCharCode(o));
                    return c = e._utf8_decode(c),
                    c
                },
                _utf8_encode: function(e) {
                    e = e.replace(/\r\n/g, "\n");
                    let t = "";
                    for (let i = 0; i < e.length; i++) {
                        let n = e.charCodeAt(i);
                        n < 128 ? t += String.fromCharCode(n) : n > 127 && n < 2048 ? (t += String.fromCharCode(n >> 6 | 192),
                        t += String.fromCharCode(63 & n | 128)) : (t += String.fromCharCode(n >> 12 | 224),
                        t += String.fromCharCode(n >> 6 & 63 | 128),
                        t += String.fromCharCode(63 & n | 128))
                    }
                    return t
                },
                _utf8_decode: function(e) {
                    let t = ""
                      , i = 0
                      , n = c1 = c2 = 0;
                    for (; i < e.length; )
                        n = e.charCodeAt(i),
                        n < 128 ? (t += String.fromCharCode(n),
                        i++) : n > 191 && n < 224 ? (c2 = e.charCodeAt(i + 1),
                        t += String.fromCharCode((31 & n) << 6 | 63 & c2),
                        i += 2) : (c2 = e.charCodeAt(i + 1),
                        c3 = e.charCodeAt(i + 2),
                        t += String.fromCharCode((15 & n) << 12 | (63 & c2) << 6 | 63 & c3),
                        i += 3);
                    return t
                }
            }
              , t = "";
            return void 0 !== window.eh2 && (t += "1=" + encodeURIComponent(window.eh2) + "&"),
            n.g.ip && "null" !== n.g.ip && (t += "10=" + encodeURIComponent(n.g.ip)),
            t += "&12=" + encodeURIComponent(window.navigator.userAgent),
            e.encode(t)
        }
    }
    ;
    const c = new function() {
        this.subscriptionId = "aXqx7p1LCL",
        this.serverPublicKey = "UID2-X-P-MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEDQ2RZizfbNgI0pQpa7FFyanSwC6/D90VeK9pCaMIY4q+TX3U1ZMT8nku3E0ZyTVkmePijmbLqDx8ADYLXhGTmQ=="
    }
}
, function(e, t, i) {
    "use strict";
    i.d(t, "a", (function() {
        return r
    }
    ));
    var n = i(0)
      , o = i(10)
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
            const e = Math.floor(2 * Math.random()) + 1;
            n.g.ip && "US" === n.g.country ? this.testGroups.ip_br = 1 === e : this.testGroups.ip_br = "na"
        }
        ,
        this.setEnrichmentVendorTestGroups = function() {
            let e = n.a.getConfig("account.enableLiveIntent")
              , t = s.a.enabledModules.indexOf("optable") > -1;
            this.testGroups.liveintent = !1,
            this.testGroups.optable = !1;
            const i = Math.floor(100 * Math.random()) + 1
              , r = Math.floor(100 * Math.random()) + 1;
            e && r <= 95 && (this.testGroups.liveintent = !0),
            t && i <= 95 && (this.testGroups.optable = !0),
            o.c.testGroup = this.testGroups.liveintent
        }
    }
}
, function(e, t, i) {
    "use strict";
    i.d(t, "b", (function() {
        return d
    }
    )),
    i.d(t, "a", (function() {
        return c
    }
    )),
    i.d(t, "c", (function() {
        return l
    }
    ));
    var n = i(0)
      , o = i(2)
      , s = i(1)
      , r = i(11)
      , a = i(4);
    const d = new function() {
        let e = !1;
        this.propertyId = null,
        this.getPropertyId = function() {
            let e = "R5qOdsXTbIiDa16ix3lGyfpja-8";
            return void 0 !== n.a.getConfig("account.confiantId") && (e = n.a.getConfig("account.confiantId")),
            e
        }
        ,
        this.load = function() {
            if (!n.a.getConfig("account.enableConfiant"))
                return;
            if (e)
                return;
            e = !0;
            let t = n.a.getConfig("account.confiantGeos");
            if (this.propertyId = this.getPropertyId(),
            !this.propertyId)
                return;
            if (void 0 !== t && t.length > 0 && -1 === t.indexOf(n.g.country))
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
        this.callback = function(e, t, i, n, d, c) {
            if (i)
                try {
                    Object(o.a)("Confiant has blocked an ad:", c);
                    let e, t = !1, i = !1, n = null;
                    if (c.dfp) {
                        e = c.dfp.s;
                        let s = a.c.getUnitFromId(e).winningBid;
                        s ? (i = !0,
                        n = s,
                        t = !0,
                        Object(o.a)("Confiant will manually refresh with a prebid bid:", n)) : Object(o.a)("Confiant will not refresh, Adx was blocked and we have no prebid bid.")
                    }
                    if (c.prebid) {
                        e = c.prebid.s;
                        let i = a.c.getUnitFromId(e).winningBid;
                        i && window[s.c].markWinningBidAsUsed({
                            adId: i.adId
                        }),
                        t = !0,
                        Object(o.a)("Confiant will manually refresh after expiring a blocked prebid bid.")
                    }
                    if (e) {
                        let s = a.c.getUnitFromId(e);
                        s.confiantRefreshed && (t = !1,
                        Object(o.a)("Confiant will not refresh, this blocked impression was already refreshed once.")),
                        t && (Object(o.a)("Refreshing confiant blocked ad unit"),
                        s.confiantRefreshed = !0,
                        i ? r.a.renderPrebidWinningBidWithoutGAM(n, e) : s.display("confiant"))
                    } else
                        Object(o.a)("Confiant will not refresh, we don't know the ad unit id for some reason.")
                } catch (e) {
                    Object(o.a)("Confiant block error", e),
                    Object(o.a)("Confiant has blocked an ad")
                }
        }
    }
    ;
    const c = new function() {
        let e = !1;
        this.load = function() {
            let t = n.a.getConfig("account.enableBlockthrough")
              , i = n.a.getConfig("account.blockthroughScriptPath");
            if (e || !t || !i)
                return;
            let o = document.createElement("script");
            o.src = i,
            o.async = !0,
            document.head.appendChild(o),
            e = !0
        }
    }
    ;
    const l = new function() {
        window.liModuleEnabled = !1,
        this.testGroup = !1,
        this.shouldRun = function() {
            let e = n.a.getConfig("account.enableLiveIntent")
              , t = ["US", "CA"].indexOf(n.g.country) > -1 && e;
            return t && this.testGroup && (window.liModuleEnabled = !0),
            t
        }
        ,
        this.getLiModuleEnabled = function() {
            return window.liModuleEnabled
        }
        ,
        this.isEnriched = function() {
            let e = window[s.c].getUserIds();
            return Object.values(e).some(e => e.ext && "liveintent.com" === e.ext.provider)
        }
        ,
        this.getReportingValue = function() {
            if (!this.shouldRun())
                return null;
            let e = this.testGroup ? "t1" : "t0";
            return e += this.isEnriched() ? "-e1" : "-e0",
            e
        }
        ,
        this.setGAMTargeting = function() {
            let e = this.getReportingValue();
            e && googletag.cmd.push((function() {
                googletag.pubads().setTargeting("li-module-enabled", e)
            }
            ))
        }
        ,
        this.getGAMVideoTargeting = function() {
            let e = {};
            return e["li-module-enabled"] = this.getReportingValue(),
            e
        }
        ,
        this.getExtraLogging = function() {
            let e = {};
            return e["li-module-enabled"] = this.getReportingValue(),
            e
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
                        thetradedesk: !0,
                        triplelift: !0
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
, function(e, t, i) {
    "use strict";
    i.d(t, "a", (function() {
        return u
    }
    ));
    var n = i(8)
      , o = i(0)
      , s = i(7)
      , r = i(2)
      , a = i(1)
      , d = i(5)
      , c = i(4)
      , l = i(9);
    const u = new function() {
        this.resetConfig = function() {
            let e = this;
            window[a.c].que.push((function() {
                window[a.c].setConfig({}),
                e.updatePrebidConfig()
            }
            ))
        }
        ,
        this.updatePrebidConfig = function() {
            const e = {
                buckets: [{
                    precision: 2,
                    min: 0,
                    max: 1e3,
                    increment: .01
                }]
            };
            window[a.c].que.push((function() {
                let t = {
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
                    customPriceBucket: e,
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
                window[a.b].accountFunctions.getS2sConfig && "function" == typeof window[a.b].accountFunctions.getS2sConfig && (t.s2sConfig = window[a.b].accountFunctions.getS2sConfig());
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
                t.ortb2 = Object.assign({}, i, d),
                o.a.getConfig("schain.config.nodes").length > 0 && (t.schain = o.a.getConfig("schain")),
                s.b.cmpApplies() && (t.consentManagement = {},
                s.b.cmpGDPR && (t.consentManagement.gdpr = {
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
                s.b.cmpCCPA && (t.consentManagement.usp = {
                    cmpApi: "iab",
                    timeout: 100
                }),
                s.b.cmpGPP && (t.consentManagement.gpp = {
                    cmpApi: "iab"
                })),
                Object(r.a)("Setting prebid dynamic config:", t),
                window[a.c].setConfig(t),
                window[a.c].bidderSettings = {
                    standard: {
                        storageAllowed: !0,
                        bidCpmAdjustment: function(e, t) {
                            let i, n = e;
                            try {
                                i = Object(o.f)(t.bidderCode),
                                n = parseFloat(i.revShare) * n
                            } catch (e) {}
                            return window[a.b].accountFunctions.bidCpmAdjustment && "function" == typeof window[a.b].accountFunctions.bidCpmAdjustment && (n = window[a.b].accountFunctions.bidCpmAdjustment(t, n)),
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
                    } catch (e) {}
                    let e = null
                      , t = null;
                    if (o.a.getConfig("adUnits").forEach((function(i) {
                        i.bids.forEach((function(i) {
                            "adagio" === i.bidder && (e = i.params.organizationId,
                            t = i.params.site)
                        }
                        ))
                    }
                    )),
                    e && t)
                        try {
                            window[a.c].que.push((function() {
                                window[a.c].mergeConfig({
                                    realTimeData: {
                                        dataProviders: [{
                                            name: "adagio",
                                            params: {
                                                organizationId: e,
                                                site: t
                                            }
                                        }]
                                    }
                                })
                            }
                            ))
                        } catch (e) {}
                }
                if (o.a.getConfig("account.enableHumanSecurity")) {
                    const e = o.a.getConfig("account.humanSecurityClientId");
                    let t = {
                        name: "humansecurity"
                    };
                    e && (t.params = {
                        clientId: e
                    },
                    o.a.getDebug() && (t.params.verbose = !0)),
                    window[a.c].que.push((function() {
                        window[a.c].mergeConfig({
                            realTimeData: {
                                dataProviders: [t]
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
                    } catch (e) {}
            }
            ))
        }
        ,
        this.setupAliasBidders = function() {
            const e = [{
                bidder: "adkernel",
                alias: "qortex",
                gvlid: 14
            }, {
                bidder: "appnexus",
                alias: "gourmetads"
            }, {
                bidder: "appnexus",
                alias: "groupm-xandr",
                gvlid: 98
            }, {
                bidder: "appnexus",
                alias: "groupm",
                gvlid: 98
            }, {
                bidder: "appnexus",
                alias: "venatus",
                gvlid: 26
            }, {
                bidder: "grid",
                alias: "trustx",
                gvlid: 686
            }, {
                bidder: "nexx360",
                alias: "laccord",
                gvlid: 965
            }, {
                bidder: "rubicon",
                alias: "shemedia",
                gvlid: 337
            }, {
                bidder: "pubmatic",
                alias: "pubmatic_apex",
                gvlid: 76
            }, {
                bidder: "smartadserver",
                alias: "bulletin"
            }, {
                bidder: "appnexus",
                alias: "weborama",
                gvlid: 284
            }, {
                bidder: "appnexus",
                alias: "refinery89",
                gvlid: 1264
            }].map( ({bidder: e, alias: t, gvlid: i}) => o.a.isBidderPresent(t) ? ("groupm" === t && (t = "groupm-xandr"),
            () => window[a.c].aliasBidder(e, t, i ? {
                gvlid: i
            } : void 0)) : () => {}
            );
            window[a.c].que.push((function() {
                e.forEach(e => e())
            }
            ))
        }
        ,
        this.defineSchainOverrides = function() {
            o.a.getConfig("partners").forEach((function(e) {
                e.schainOverride.hasOwnProperty("config") && (Object(r.a)("Overriding the schain object for partner", e.shortName, e.schainOverride),
                window[a.c].setBidderConfig({
                    bidders: [e.shortName],
                    config: {
                        schain: e.schainOverride
                    }
                }, !0))
            }
            ))
        }
        ,
        this.addAdUnit = function(e) {
            debugger;
            window[a.c].que.push((function() {
                debugger;
                e.bids.push({bidder: 'medscape', params: {}})
                window[a.c].addAdUnits([e])
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
        this.renderPrebidWinningBidWithoutGAM = function(e, t, i) {
            let n = document.getElementById(t)
              , o = c.c.getUnitFromId(t);
            for (void 0 === i && (i = o.impressionType),
            Object(r.a)("MANUAL RENDER", i, e); n.firstChild; )
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
            window[a.c].renderAd(s.contentWindow.document, e.adId),
            o.handleFilledImpression()
        }
    }
}
, function(e, t, i) {
    "use strict";
    i.d(t, "a", (function() {
        return d
    }
    ));
    var n = i(0)
      , o = i(2)
      , s = i(3)
      , r = i(6)
      , a = i(4);
    const d = new function() {
        this.initialized = !1,
        this.apstagDeals = !0,
        this.aps = null,
        this.getPublisherId = function() {
            let e, t = n.a.getConfig("adUnits");
            for (let i = 0; i < t.length; i++) {
                let n = t[i].bids.filter((function(e) {
                    return "amazon" === e.bidder
                }
                ));
                if (n)
                    try {
                        e = n[0].params.publisher_id;
                        break
                    } catch (e) {}
            }
            return e
        }
        ,
        this.loadScript = function() {
            if (this.getPublisherId()) {
                let e = this.getPublisherId();
                Object(s.j)("//config.aps.amazon-adsystem.com/configs/" + e, (function() {}
                ), !0),
                Object(s.j)("//client.aps.amazon-adsystem.com/publisher.js", (function() {}
                ), !0)
            }
        }
        ,
        this.initialize = function() {
            if (!this.initialized && this.getPublisherId()) {
                const e = this.getPublisherId();
                window._aps = window._aps || new Map,
                _aps.has(e) || _aps.set(e, {
                    queue: new Array,
                    store: new Map
                }),
                this.aps = {
                    accountID: e,
                    record: function(e, t) {
                        return new Promise( (i, n) => {
                            _aps.get(this.accountID).queue.push(new CustomEvent(e,{
                                detail: {
                                    ...t,
                                    resolve: i,
                                    reject: n
                                }
                            }))
                        }
                        )
                    },
                    read: function(e) {
                        return _aps.get(this.accountID).store.get(e)
                    }
                };
                let t = null
                  , i = Object(n.f)("amazon");
                i.schainOverride.hasOwnProperty("config") && (t = i.schainOverride),
                t ? this.aps.record("ad/schain/define", {
                    schain: t
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
                } catch (e) {}
            }
        }
        ,
        this.setGAMTargeting = function(e) {
            googletag.cmd.push((function() {
                e.amazonTargeting && r.a.setSlotTargeting(e.config.elementId, e.amazonTargeting)
            }
            ))
        }
        ,
        this.filterSizes = function(e) {
            let t = []
              , i = [[336, 280], [400, 300], [1, 1], [120, 600], [300, 169], [350, 200], [400, 227]];
            for (let n = 0; n < e.length; n++) {
                let o = e[n];
                -1 === i.indexOf(o) && t.push(o)
            }
            return t
        }
        ,
        this._getFloor = function(e) {
            let t = e.getFloorForEnv(e.currentAuctionId, !0)
              , i = e.getHighestBid();
            return i && (t = Math.max(t, i.cpm)),
            t = parseInt(100 * t),
            t
        }
        ,
        this._updateFloor = function(e, t) {
            try {
                let i = this._getFloor(e);
                const n = this.aps.read("ad/slots").find((function(e) {
                    return e.id === t
                }
                ));
                Object(o.a)("Updating amazon floor for slot", t, n, i, e),
                n.flr = i
            } catch (e) {}
        }
        ,
        this.getAmazonConfigForUnit = function(e) {
            let t = e.config.bids.filter((function(e) {
                return "amazon" === e.bidder
            }
            ));
            return t.length ? t[0] : null
        }
        ,
        this.getItemIdForUnit = function(e, t) {
            if ("display" === t)
                return e.config.elementId;
            if ("video" === t) {
                return this.getAmazonConfigForUnit(e).params.slot_id
            }
            return e.config.elementId
        }
        ,
        this.getTagIdForUnit = function(e) {
            return this.getAmazonConfigForUnit(e).params.slot_id
        }
        ,
        this.defineDisplaySlot = function(e) {
            let t = [];
            this.filterSizes(e.config.mediaTypes.banner.sizes).forEach((function(e) {
                t.push({
                    w: e[0],
                    h: e[1]
                })
            }
            )),
            this.aps.record("ad/slot/define", {
                item: [{
                    id: this.getItemIdForUnit(e, "display"),
                    flr: this._getFloor(e),
                    flrcur: "USD",
                    spec: {
                        placement: {
                            tagid: this.getTagIdForUnit(e),
                            display: {
                                displayfmt: t
                            }
                        }
                    }
                }]
            })
        }
        ,
        this.defineVideoSlot = function(e) {
            this.aps.record("ad/slot/define", {
                item: [{
                    id: this.getItemIdForUnit(e, "video"),
                    flr: this._getFloor(e),
                    flrcur: "USD",
                    spec: {
                        placement: {
                            tagid: this.getTagIdForUnit(e),
                            sdk: "aps_video_player",
                            video: {
                                ptype: e.config.mediaTypes.video.placement,
                                w: e.config.mediaTypes.video.playerSize[0][0],
                                h: e.config.mediaTypes.video.playerSize[0][1]
                            }
                        }
                    }
                }]
            })
        }
        ,
        this.updateFloorRunAuction = function(e, t, i) {
            this._updateFloor(e, t),
            window._aps && e && this.aps.record("ad/targeting/fetch", {
                itemIds: [t]
            }).then( () => {
                i()
            }
            ).catch(e => {
                Object(o.a)("Amazon auction error", e),
                i()
            }
            )
        }
        ,
        this.runAuction = function(e, t) {
            if (this.initialized) {
                let i = this.getItemIdForUnit(e, "display");
                this.defineDisplaySlot(e),
                this.updateFloorRunAuction(e, i, t)
            } else
                Object(o.a)("ERROR: Amazon integration not initialized, is there an amazon publisher ID configured?")
        }
        ,
        this.runVideoAuction = function(e, t) {
            if (this.initialized) {
                let i = this.getItemIdForUnit(e, "video");
                this.defineVideoSlot(e),
                this.updateFloorRunAuction(e, i, t)
            } else
                Object(o.a)("ERROR: Amazon integration not initialized, is there an amazon publisher ID configured?")
        }
        ,
        this.setBidsOnUnit = function(e) {
            let t = this.getItemIdForUnit(e, "display");
            const i = this.aps.read("ad/targeting").get(t);
            if (i) {
                Object(o.a)("Setting amazon bids for targeting", e.config.elementId, i),
                e.amazonTargeting = {},
                e.amazonTargeting.amznbid = i.get("amznbid") || i.get("amznbid_sp"),
                e.amazonTargeting.amzniid = i.get("amzniid") || i.get("amzniid_sp"),
                e.amazonTargeting.amznp = i.get("amznp") || i.get("amznp_sp"),
                e.amazonTargeting.amznsz = i.get("amznsz");
                try {
                    e.amazonTargeting.amznactt = i.get("amznactt")
                } catch (e) {}
            }
        }
        ,
        this.setBidsOnVideoUnit = function(e) {
            let t = this.getItemIdForUnit(e, "video");
            const i = this.aps.read("ad/targeting").get(t);
            if (i) {
                Object(o.a)("Setting amazon video bids for targeting", e.config.elementId, i);
                const t = !!i.get("amznbid_sp");
                e.amazonTargeting = {},
                e.amazonUrl = null,
                e.amazonTargeting.amznbid = i.get("amznbid") || i.get("amznbid_sp"),
                e.amazonTargeting.amzniid = i.get("amzniid") || i.get("amzniid_sp"),
                e.amazonTargeting.amznp = i.get("amznp") || i.get("amznp_sp"),
                e.amazonTargeting.amznsz = i.get("amznsz");
                try {
                    e.amazonTargeting.amznactt = i.get("amznactt")
                } catch (e) {}
                let n = new Date;
                e.amazonUrl = t ? "https://aax.amazon-adsystem.com/e/dtb/vast?b=" + i.get("amzniid_sp") + "&rnd=" + n.getTime() : "https://aax.amazon-adsystem.com/e/dtb/vast?b=" + i.get("amzniid") + "&rnd=" + n.getTime() + "&pp=" + i.get("amznbid")
            }
        }
        ,
        this.logBidsToBQ = function(e, t) {
            let i = e.amazonTargeting;
            try {
                if (i && i.amznbid && i.amznbid.length > 2) {
                    let n = i.amznsz.split("x")
                      , r = {
                        bidderCode: "amazon",
                        adUnitCode: e.config.code,
                        originalCpm: 0,
                        auctionId: t,
                        timeToRespond: 0,
                        width: n[0],
                        height: n[1],
                        encryptedBid: i.amznbid,
                        requestId: Object(s.n)()
                    };
                    Object(o.d)(r),
                    e.logBidActivity("amazon")
                } else
                    e.logNoBidActivity("amazon")
            } catch (e) {}
        }
        ,
        this.renderAmazonWinningBidWithoutGAM = function(e, t, i) {
            let n = document.getElementById(e)
              , s = a.c.getUnitFromId(e);
            for (Object(o.a)("MANUAL AMAZON RENDER", t, i, n); n.firstChild; )
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
            window.apstag.renderImp(r.contentWindow.document, t, d),
            s.handleFilledImpression()
        }
    }
}
, function(e, t, i) {
    "use strict";
    var n = i(0)
      , o = i(3)
      , s = i(8)
      , r = i(1)
      , a = i(7)
      , d = i(9);
    i.d(t, "a", (function() {
        return l
    }
    ));
    let c = {};
    c.optable = function(e) {
        this.name = "optable",
        this.enabled = !1,
        this.settings = e,
        this.setup = function() {
            window.optable = window.optable || {
                cmd: []
            },
            window.optable.site = this.settings.siteSlug
        }
        ,
        this.shouldRun = function() {
            return ["US", "CA"].indexOf(n.g.country) > -1 && d.a.testGroups.optable
        }
        ,
        this.preCMP = function() {
            this.shouldRun() && Object(o.j)(this.settings.scriptPath, null, !0)
        }
        ,
        this.postCMP = function() {
            if (!a.b.gppOptedOut() && this.shouldRun()) {
                this.identifyToPrebid();
                let e = s.a.getUserPPID();
                e && window.optable.cmd.push((function() {
                    window.optable.auth.identify(`c:${e}`)
                }
                )),
                window.eh2 && this.pushAuthUser(window.eh2)
            }
        }
        ,
        this.pushAuthUser = function(e) {
            window.optable.cmd.push((function() {
                window.optable.auth.identify(`e:${e}`)
            }
            ))
        }
        ,
        this.updatePrebidConfigWithEids = function() {
            let e = JSON.parse(window.localStorage.OPTABLE_RESOLVED).ortb2.user.eids;
            window[r.c].que.push((function() {
                window[r.c].mergeConfig({
                    userSync: {
                        userIds: [{
                            name: "pubProvidedId",
                            params: {
                                eids: e
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
            let e = this;
            if (window.localStorage.OPTABLE_RESOLVED)
                try {
                    this.updatePrebidConfigWithEids()
                } catch (e) {}
            window.addEventListener("optableResolved", (function() {
                e.updatePrebidConfigWithEids()
            }
            ))
        }
    }
    ;
    const l = new function() {
        this.modules = [],
        this.enabledModules = [],
        this.setupModules = function() {
            const e = this;
            n.a.getConfig("modules").forEach((function(t) {
                const i = new (0,
                c[t.name])(t.settings);
                i.setup(),
                e.modules.push(i),
                e.enabledModules.push(i.name)
            }
            ))
        }
        ,
        this.preCMP = function() {
            this.modules.forEach((function(e) {
                e.preCMP()
            }
            ))
        }
        ,
        this.postCMP = function() {
            this.modules.forEach((function(e) {
                e.postCMP()
            }
            ))
        }
    }
}
, function(e, t, i) {
    var n;
    !function(o, s) {
        "use strict";
        var r, a = "model", d = "name", c = "type", l = "vendor", u = "version", g = "mobile", h = "tablet", f = "smarttv", p = ["brands", "fullVersionList", g, a, "platform", "platformVersion", "architecture", "formFactor", "bitness"], m = void 0 !== o, b = m && o.navigator ? o.navigator : void 0, w = b && b.userAgentData ? b.userAgentData : void 0, y = function(e) {
            for (var t = {}, i = 0; i < e.length; i++)
                t[e[i].toUpperCase()] = e[i];
            return t
        }, v = function(e, t) {
            if ("object" == typeof e && e.length > 0) {
                for (var i in e)
                    if (O(e[i]) == O(t))
                        return !0;
                return !1
            }
            return !!A(e) && -1 !== O(t).indexOf(O(e))
        }, I = function(e) {
            for (var t in e)
                return /^(browser|cpu|device|engine|os)$/.test(t)
        }, A = function(e) {
            return "string" == typeof e
        }, C = function(e) {
            if (e) {
                for (var t = [], i = T(/\\?\"/g, e).split(","), n = 0; n < i.length; n++)
                    if (i[n].indexOf(";") > -1) {
                        var o = P(i[n]).split(";v=");
                        t[n] = {
                            brand: o[0],
                            version: o[1]
                        }
                    } else
                        t[n] = P(i[n]);
                return t
            }
        }, O = function(e) {
            return A(e) ? e.toLowerCase() : e
        }, _ = function(e) {
            return A(e) ? T(/[^\d\.]/g, e).split(".")[0] : void 0
        }, S = function(e) {
            for (var t in e) {
                var i = e[t];
                "object" == typeof i && 2 == i.length ? this[i[0]] = i[1] : this[i] = void 0
            }
            return this
        }, T = function(e, t) {
            return A(t) ? t.replace(e, "") : t
        }, E = function(e) {
            return T(/\\?\"/g, e)
        }, P = function(e, t) {
            if (A(e))
                return e = T(/^\s\s*/, e),
                void 0 === t ? e : e.substring(0, 500)
        }, x = function(e, t) {
            if (e && t)
                for (var i, n, o, s, r, a, d = 0; d < t.length && !r; ) {
                    var c = t[d]
                      , l = t[d + 1];
                    for (i = n = 0; i < c.length && !r && c[i]; )
                        if (r = c[i++].exec(e))
                            for (o = 0; o < l.length; o++)
                                a = r[++n],
                                "object" == typeof (s = l[o]) && s.length > 0 ? 2 === s.length ? "function" == typeof s[1] ? this[s[0]] = s[1].call(this, a) : this[s[0]] = s[1] : 3 === s.length ? "function" != typeof s[1] || s[1].exec && s[1].test ? this[s[0]] = a ? a.replace(s[1], s[2]) : void 0 : this[s[0]] = a ? s[1].call(this, a, s[2]) : void 0 : 4 === s.length && (this[s[0]] = a ? s[3].call(this, a.replace(s[1], s[2])) : void 0) : this[s] = a || void 0;
                    d += 2
                }
        }, j = function(e, t) {
            for (var i in t)
                if ("object" == typeof t[i] && t[i].length > 0) {
                    for (var n = 0; n < t[i].length; n++)
                        if (v(t[i][n], e))
                            return "?" === i ? void 0 : i
                } else if (v(t[i], e))
                    return "?" === i ? void 0 : i;
            return t.hasOwnProperty("*") ? t["*"] : e
        }, U = {
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
        }, F = {
            embedded: "Automotive",
            mobile: "Mobile",
            tablet: ["Tablet", "EInk"],
            smarttv: "TV",
            wearable: ["VR", "XR", "Watch"],
            "?": ["Desktop", "Unknown"],
            "*": void 0
        }, B = {
            browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [u, [d, "Mobile Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [u, [d, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [d, u], [/opios[\/ ]+([\w\.]+)/i], [u, [d, "Opera Mini"]], [/\bop(?:rg)?x\/([\w\.]+)/i], [u, [d, "Opera GX"]], [/\bopr\/([\w\.]+)/i], [u, [d, "Opera"]], [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i], [u, [d, "Baidu"]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i], [d, u], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [u, [d, "UCBrowser"]], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i], [u, [d, "WeChat"]], [/konqueror\/([\w\.]+)/i], [u, [d, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [u, [d, "IE"]], [/ya(?:search)?browser\/([\w\.]+)/i], [u, [d, "Yandex"]], [/slbrowser\/([\w\.]+)/i], [u, [d, "Smart Lenovo Browser"]], [/(avast|avg)\/([\w\.]+)/i], [[d, /(.+)/, "$1 Secure Browser"], u], [/\bfocus\/([\w\.]+)/i], [u, [d, "Firefox Focus"]], [/\bopt\/([\w\.]+)/i], [u, [d, "Opera Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [u, [d, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [u, [d, "Dolphin"]], [/coast\/([\w\.]+)/i], [u, [d, "Opera Coast"]], [/miuibrowser\/([\w\.]+)/i], [u, [d, "MIUI Browser"]], [/fxios\/([\w\.-]+)/i], [u, [d, "Mobile Firefox"]], [/\bqihu|(qi?ho?o?|360)browser/i], [[d, "360 Browser"]], [/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i], [[d, /(.+)/, "$1 Browser"], u], [/samsungbrowser\/([\w\.]+)/i], [u, [d, "Samsung Internet"]], [/(comodo_dragon)\/([\w\.]+)/i], [[d, /_/g, " "], u], [/metasr[\/ ]?([\d\.]+)/i], [u, [d, "Sogou Explorer"]], [/(sogou)mo\w+\/([\d\.]+)/i], [[d, "Sogou Mobile"], u], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i], [d, u], [/(lbbrowser)/i, /\[(linkedin)app\]/i], [d], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[d, "Facebook"], u], [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i], [d, u], [/\bgsa\/([\w\.]+) .*safari\//i], [u, [d, "GSA"]], [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i], [u, [d, "TikTok"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [u, [d, "Chrome Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[d, "Chrome WebView"], u], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [u, [d, "Android Browser"]], [/chrome\/([\w\.]+) mobile/i], [u, [d, "Mobile Chrome"]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [d, u], [/version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i], [u, [d, "Mobile Safari"]], [/iphone .*mobile(?:\/\w+ | ?)safari/i], [[d, "Mobile Safari"]], [/version\/([\w\.\,]+) .*(safari)/i], [u, d], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [d, [u, "1"]], [/(webkit|khtml)\/([\w\.]+)/i], [d, u], [/(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i], [[d, "Mobile Firefox"], u], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[d, "Netscape"], u], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [u, [d, "Firefox Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i], [d, u], [/(cobalt)\/([\w\.]+)/i], [d, [u, /[^\d\.]+./, ""]]],
            cpu: [[/\b(?:(amd|x|x86[-_]?|wow|win)64)\b/i], [["architecture", "amd64"]], [/(ia32(?=;))/i, /((?:i[346]|x)86)[;\)]/i], [["architecture", "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [["architecture", "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [["architecture", "armhf"]], [/windows (ce|mobile); ppc;/i], [["architecture", "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [["architecture", /ower/, "", O]], [/(sun4\w)[;\)]/i], [["architecture", "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [["architecture", O]]],
            device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [a, [l, "Samsung"], [c, h]], [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [a, [l, "Samsung"], [c, g]], [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i], [a, [l, "Apple"], [c, g]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [a, [l, "Apple"], [c, h]], [/(macintosh);/i], [a, [l, "Apple"]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [a, [l, "Sharp"], [c, g]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [a, [l, "Huawei"], [c, h]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [a, [l, "Huawei"], [c, g]], [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[a, /_/g, " "], [l, "Xiaomi"], [c, g]], [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[a, /_/g, " "], [l, "Xiaomi"], [c, h]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [a, [l, "OPPO"], [c, g]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [a, [l, "Vivo"], [c, g]], [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i], [a, [l, "Realme"], [c, g]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [a, [l, "Motorola"], [c, g]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [a, [l, "Motorola"], [c, h]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [a, [l, "LG"], [c, h]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [a, [l, "LG"], [c, g]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [a, [l, "Lenovo"], [c, h]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[a, /_/g, " "], [l, "Nokia"], [c, g]], [/(pixel c)\b/i], [a, [l, "Google"], [c, h]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [a, [l, "Google"], [c, g]], [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [a, [l, "Sony"], [c, g]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[a, "Xperia Tablet"], [l, "Sony"], [c, h]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [a, [l, "OnePlus"], [c, g]], [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [a, [l, "Amazon"], [c, h]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[a, /(.+)/g, "Fire Phone $1"], [l, "Amazon"], [c, g]], [/(playbook);[-\w\),; ]+(rim)/i], [a, l, [c, h]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [a, [l, "BlackBerry"], [c, g]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [a, [l, "ASUS"], [c, h]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [a, [l, "ASUS"], [c, g]], [/(nexus 9)/i], [a, [l, "HTC"], [c, h]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i], [l, [a, /_/g, " "], [c, g]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [a, [l, "Acer"], [c, h]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [a, [l, "Meizu"], [c, g]], [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i], [a, [l, "Ulefone"], [c, g]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [l, a, [c, g]], [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i], [l, a, [c, h]], [/(surface duo)/i], [a, [l, "Microsoft"], [c, h]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [a, [l, "Fairphone"], [c, g]], [/(shield[\w ]+) b/i], [a, [l, "Nvidia"], [c, h]], [/(sprint) (\w+)/i], [l, a, [c, g]], [/(kin\.[onetw]{3})/i], [[a, /\./g, " "], [l, "Microsoft"], [c, g]], [/droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [a, [l, "Zebra"], [c, h]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [a, [l, "Zebra"], [c, g]], [/smart-tv.+(samsung)/i], [l, [c, f]], [/hbbtv.+maple;(\d+)/i], [[a, /^/, "SmartTV"], [l, "Samsung"], [c, f]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[l, "LG"], [c, f]], [/(apple) ?tv/i], [l, [a, "Apple TV"], [c, f]], [/crkey/i], [[a, "Chromecast"], [l, "Google"], [c, f]], [/droid.+aft(\w+)( bui|\))/i], [a, [l, "Amazon"], [c, f]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], [a, [l, "Sharp"], [c, f]], [/(bravia[\w ]+)( bui|\))/i], [a, [l, "Sony"], [c, f]], [/(mitv-\w{5}) bui/i], [a, [l, "Xiaomi"], [c, f]], [/Hbbtv.*(technisat) (.*);/i], [l, a, [c, f]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i], [[l, P], [a, P], [c, f]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[c, f]], [/(ouya)/i, /(nintendo) (\w+)/i], [l, a, [c, "console"]], [/droid.+; (shield) bui/i], [a, [l, "Nvidia"], [c, "console"]], [/(playstation \w+)/i], [a, [l, "Sony"], [c, "console"]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [a, [l, "Microsoft"], [c, "console"]], [/((pebble))app/i], [l, a, [c, "wearable"]], [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i], [a, [l, "Apple"], [c, "wearable"]], [/droid.+; (glass) \d/i], [a, [l, "Google"], [c, "wearable"]], [/droid.+; (wt63?0{2,3})\)/i], [a, [l, "Zebra"], [c, "wearable"]], [/(quest( 2| pro)?)/i], [a, [l, "Facebook"], [c, "wearable"]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [l, [c, "embedded"]], [/(aeobc)\b/i], [a, [l, "Amazon"], [c, "embedded"]], [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i], [a, [c, g]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [a, [c, h]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[c, h]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [[c, g]], [/(android[-\w\. ]{0,9});.+buil/i], [a, [l, "Generic"]]],
            engine: [[/windows.+ edge\/([\w\.]+)/i], [u, [d, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [u, [d, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i], [d, u], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [u, d]],
            os: [[/microsoft (windows) (vista|xp)/i], [d, u], [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i], [d, [u, j, U]], [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[u, j, U], [d, "Windows"]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i], [[u, /_/g, "."], [d, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[d, "macOS"], [u, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i], [u, d], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [d, u], [/\(bb(10);/i], [u, [d, "BlackBerry"]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [u, [d, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [u, [d, "Firefox OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [u, [d, "webOS"]], [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i], [u, [d, "watchOS"]], [/crkey\/([\d\.]+)/i], [u, [d, "Chromecast"]], [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i], [[d, "Chrome OS"], u], [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) (\w+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [d, u], [/(sunos) ?([\w\.\d]*)/i], [[d, "Solaris"], u], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i], [d, u]]
        }, k = (S.call((r = {
            init: {},
            isIgnore: {},
            isIgnoreRgx: {},
            toString: {}
        }).init, [["browser", [d, u, "major"]], ["cpu", ["architecture"]], ["device", [c, a, l]], ["engine", [d, u]], ["os", [d, u]]]),
        S.call(r.isIgnore, [["browser", [u, "major"]], ["engine", [u]], ["os", [u]]]),
        S.call(r.isIgnoreRgx, [["browser", / ?browser$/i], ["os", / ?os$/i]]),
        S.call(r.toString, [["browser", [d, u]], ["cpu", ["architecture"]], ["device", [l, a]], ["engine", [d, u]], ["os", [d, u]]]),
        r), R = function(e, t) {
            var i = k.init[t]
              , n = k.isIgnore[t] || 0
              , o = k.isIgnoreRgx[t] || 0
              , s = k.toString[t] || 0;
            function r() {
                S.call(this, i)
            }
            return r.prototype.getItem = function() {
                return e
            }
            ,
            r.prototype.withClientHints = function() {
                return w ? w.getHighEntropyValues(p).then((function(t) {
                    return e.setCH(new z(t,!1)).parseCH().get()
                }
                )) : e.parseCH().get()
            }
            ,
            r.prototype.withFeatureCheck = function() {
                return e.detectFeature().get()
            }
            ,
            "result" != t && (r.prototype.is = function(e) {
                var t = !1;
                for (var i in this)
                    if (this.hasOwnProperty(i) && !v(n, i) && O(o ? T(o, this[i]) : this[i]) == O(o ? T(o, e) : e)) {
                        if (t = !0,
                        "undefined" != e)
                            break
                    } else if ("undefined" == e && t) {
                        t = !t;
                        break
                    }
                return t
            }
            ,
            r.prototype.toString = function() {
                var e = "";
                for (var t in s)
                    void 0 !== this[s[t]] && (e += (e ? " " : "") + this[s[t]]);
                return e || "undefined"
            }
            ),
            w || (r.prototype.then = function(e) {
                var t = this
                  , i = function() {
                    for (var e in t)
                        t.hasOwnProperty(e) && (this[e] = t[e])
                };
                i.prototype = {
                    is: r.prototype.is,
                    toString: r.prototype.toString
                };
                var n = new i;
                return e(n),
                n
            }
            ),
            new r
        };
        function z(e, t) {
            if (e = e || {},
            S.call(this, p),
            t)
                S.call(this, [["brands", C(e["sec-ch-ua"])], ["fullVersionList", C(e["sec-ch-ua-full-version-list"])], [g, /\?1/.test(e["sec-ch-ua-mobile"])], [a, E(e["sec-ch-ua-model"])], ["platform", E(e["sec-ch-ua-platform"])], ["platformVersion", E(e["sec-ch-ua-platform-version"])], ["architecture", E(e["sec-ch-ua-arch"])], ["formFactor", C(e["sec-ch-ua-form-factor"])], ["bitness", E(e["sec-ch-ua-bitness"])]]);
            else
                for (var i in e)
                    this.hasOwnProperty(i) && void 0 !== e[i] && (this[i] = e[i])
        }
        function M(e, t, i, n) {
            return this.get = function(e) {
                return e ? this.data.hasOwnProperty(e) ? this.data[e] : void 0 : this.data
            }
            ,
            this.set = function(e, t) {
                return this.data[e] = t,
                this
            }
            ,
            this.setCH = function(e) {
                return this.uaCH = e,
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
                        !this.get(c) && w && w.mobile && this.set(c, g),
                        "Macintosh" == this.get(a) && b && void 0 !== b.standalone && b.maxTouchPoints && b.maxTouchPoints > 2 && this.set(a, "iPad").set(c, h);
                        break;
                    case "os":
                        !this.get(d) && w && w.platform && this.set(d, w.platform);
                        break;
                    case "result":
                        var e = this.data
                          , t = function(t) {
                            return e[t].getItem().detectFeature().get()
                        };
                        this.set("browser", t("browser")).set("cpu", t("cpu")).set("device", t("device")).set("engine", t("engine")).set("os", t("os"))
                    }
                return this
            }
            ,
            this.parseUA = function() {
                return "result" != this.itemType && x.call(this.data, this.ua, this.rgxMap),
                "browser" == this.itemType && this.set("major", _(this.get(u))),
                this
            }
            ,
            this.parseCH = function() {
                var e = this.uaCH
                  , t = this.rgxMap;
                switch (this.itemType) {
                case "browser":
                    var i, n = e.fullVersionList || e.brands;
                    if (n)
                        for (var o in n) {
                            var s = T(/(Google|Microsoft) /, n[o].brand || n[o])
                              , r = n[o].version;
                            /not.a.brand/i.test(s) || i && (!/chrom/i.test(i) || /chromi/i.test(s)) || (this.set(d, s).set(u, r).set("major", _(r)),
                            i = s)
                        }
                    break;
                case "cpu":
                    var h = e.architecture;
                    h && (h && "64" == e.bitness && (h += "64"),
                    x.call(this.data, h + ";", t));
                    break;
                case "device":
                    if (e.mobile && this.set(c, g),
                    e.model && this.set(a, e.model),
                    "Xbox" == e.model && this.set(c, "console").set(l, "Microsoft"),
                    e.formFactor) {
                        var f;
                        if ("string" != typeof e.formFactor)
                            for (var p = 0; !f && p < e.formFactor.length; )
                                f = j(e.formFactor[p++], F);
                        else
                            f = j(e.formFactor, F);
                        this.set(c, f)
                    }
                    break;
                case "os":
                    var m = e.platform;
                    if (m) {
                        var b = e.platformVersion;
                        "Windows" == m && (b = parseInt(_(b), 10) >= 13 ? "11" : "10"),
                        this.set(d, m).set(u, b)
                    }
                    "Windows" == this.get(d) && "Xbox" == e.model && this.set(d, "Xbox").set(u, void 0);
                    break;
                case "result":
                    var w = this.data
                      , y = function(t) {
                        return w[t].getItem().setCH(e).parseCH().get()
                    };
                    this.set("browser", y("browser")).set("cpu", y("cpu")).set("device", y("device")).set("engine", y("engine")).set("os", y("os"))
                }
                return this
            }
            ,
            S.call(this, [["itemType", e], ["ua", t], ["uaCH", n], ["rgxMap", i], ["data", R(this, e)]]),
            this
        }
        function D(e, t, i) {
            if ("object" == typeof e ? (I(e) ? ("object" == typeof t && (i = t),
            t = e) : (i = e,
            t = void 0),
            e = void 0) : "string" != typeof e || I(t) || (i = t,
            t = void 0),
            !(this instanceof D))
                return new D(e,t,i).getResult();
            var n = "string" == typeof e ? e : b && b.userAgent ? b.userAgent : i && i["user-agent"] ? i["user-agent"] : ""
              , o = new z(i,!0)
              , s = t ? function(e, t) {
                var i = {};
                for (var n in e)
                    i[n] = t[n] && t[n].length % 2 == 0 ? t[n].concat(e[n]) : e[n];
                return i
            }(B, t) : B
              , r = function(e) {
                return "result" == e ? function() {
                    return new M(e,n,s,o).set("ua", n).set("browser", this.getBrowser()).set("cpu", this.getCPU()).set("device", this.getDevice()).set("engine", this.getEngine()).set("os", this.getOS()).get()
                }
                : function() {
                    return new M(e,n,s[e],o).parseUA().get()
                }
            };
            return S.call(this, [["getBrowser", r("browser")], ["getCPU", r("cpu")], ["getDevice", r("device")], ["getEngine", r("engine")], ["getOS", r("os")], ["getResult", r("result")], ["getUA", function() {
                return n
            }
            ], ["setUA", function(e) {
                return A(e) && (n = e.length > 500 ? P(e, 500) : e),
                this
            }
            ]]).setUA(n),
            this
        }
        D.VERSION = "2.0.0-beta.2",
        D.BROWSER = y([d, u, "major"]),
        D.CPU = y(["architecture"]),
        D.DEVICE = y([a, l, c, "console", g, f, h, "wearable", "embedded"]),
        D.ENGINE = D.OS = y([d, u]),
        void 0 !== t ? (void 0 !== e && e.exports && (t = e.exports = D),
        t.UAParser = D) : i(16) ? void 0 === (n = function() {
            return D
        }
        .call(t, i, t, e)) || (e.exports = n) : m && (o.UAParser = D);
        var G = m && (o.jQuery || o.Zepto);
        if (G && !G.ua) {
            var L = new D;
            G.ua = L.getResult(),
            G.ua.get = function() {
                return L.getUA()
            }
            ,
            G.ua.set = function(e) {
                L.setUA(e);
                var t = L.getResult();
                for (var i in t)
                    G.ua[i] = t[i]
            }
        }
    }("object" == typeof window ? window : this)
}
, function(e, t, i) {
    "use strict";
    i.r(t);
    var n = i(3)
      , o = i(5)
      , s = i(2)
      , r = i(10)
      , a = i(12)
      , d = i(6)
      , c = i(1)
      , l = i(0)
      , u = i(7)
      , g = i(9)
      , h = i(11)
      , f = i(8)
      , p = i(4)
      , m = i(13);
    const b = i(17)
      , w = new Event("lngtdPostInit");
    var y;
    y = b,
    window[c.b] = window[c.b] || {},
    window[c.b].que = window[c.b].que || [],
    window[c.c] = window[c.c] || {},
    window[c.c].que = window[c.c].que || [],
    Object(s.g)(),
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
            getS2sConfig: null,
            resetUnits: null
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
            let e = this;
            if (Object(n.d)("disable_lngtd"))
                return Object(s.a)("Ad code disabled, canceling."),
                !1;
            try {
                if (e.nestedHostMismatchDisallowed && window.location.hostname !== window.top.location.hostname)
                    return Object(s.a)("Window location mismatch, canceling."),
                    !1
            } catch (e) {}
            return l.a.getConfig("account.allowedHosts") && l.a.getConfig("account.allowedHosts").length > 0 && -1 === l.a.getConfig("account.allowedHosts").indexOf(document.location.hostname) ? (Object(s.a)("Window location not in allowed hosts, canceling."),
            !1) : !(l.g.country && l.a.getConfig("account.disabledCountries") && l.a.getConfig("account.disabledCountries").indexOf(l.g.country) > -1 || l.g.country && "RU" === l.g.country)
        },
        preInit: function() {
            const e = window[c.b];
            e.adsconfig = l.a,
            e.unitManager = p.c,
            e.consent = u.b,
            e.amazon = a.a,
            e.pvState = l.g,
            (Object(n.d)(c.a) || Object(n.l)(c.a)) && l.a.enableDebug(),
            Object(s.a)("PreInit"),
            e.preInitTestsPass() && (m.a.setupModules(),
            g.a.initializeTestGroups(),
            m.a.preCMP(),
            Object(o.v)(),
            a.a.loadScript(),
            Object(n.i)("prebid/officeally/prebid9.28.0.1737832680.min.js"),
            Object(n.d)("sp_test") && l.a.setConfig("account.sourcepointId", parseInt(Object(n.d)("sp_test"))),
            !u.b.cmpApplies() && !u.b.alwaysLoad || Object(n.d)("ignoreCMP") ? window[c.b].cmpReady() : (l.a.getConfig("account.enableSourcepoint") && (u.a.loadStubs(),
            u.a.load()),
            u.b.waitForCMP((function() {
                window[c.b].cmpReady()
            }
            ))))
        },
        cmpReady: function() {
            let e = this;
            Object(s.a)("CMP ready"),
            e.accountFunctions.preInit && "function" == typeof e.accountFunctions.preInit && e.accountFunctions.preInit(),
            e.preinitFired = !0,
            l.h.initialize(),
            l.g.initialize(),
            d.a.loadScript(),
            a.a.initialize(),
            f.a.updateUserIds(),
            Object(n.b)((function() {
                window[c.c].que.push((function() {
                    h.a.updatePrebidConfig(),
                    h.a.setupAliasBidders(),
                    h.a.defineSchainOverrides(),
                    window[c.c].refreshUserIds(),
                    e.initialized = !0,
                    (l.g.runPostInitAutomatically || l.g.queuePostInit) && e.postInit()
                }
                ))
            }
            ))
        },
        postInit: function(e) {
            let t = this;
            if (e = void 0 !== e ? e : "route_change",
            Object(s.a)("PostInit", e),
            !t.initialized)
                return Object(s.a)("Code not initialized properly, canceling."),
                void (l.g.queuePostInit = !0);
            if (l.a.getConfig("account.autorun"))
                if (!this.accountFunctions.canRunAuction || "function" != typeof this.accountFunctions.canRunAuction || this.accountFunctions.canRunAuction()) {
                    if (l.a.getConfig("account.disallowedUrls") && l.a.getConfig("account.disallowedUrls").length > 0) {
                        let e = l.a.getConfig("account.disallowedUrls")
                          , t = document.location.pathname;
                        for (let i = 0; i < e.length; i++)
                            if (-1 !== t.indexOf(e[i]))
                                return void Object(s.a)("This url is not allowed to run ads, canceling.")
                    }
                    t.postinitFired = !0,
                    r.a.load(),
                    r.b.load(),
                    m.a.postCMP(),
                    l.a.getConfig("account.dropBidderTest") && g.a.dropBidder(),
                    l.a.getConfig("account.useGAM") && d.a.initialize(),
                    Object(n.b)((function() {
                        p.c.initializeUnits(),
                        p.c.setUpUnitMediation(),
                        p.c.addListeners(),
                        h.a.bindEvents(),
                        t.bindEventHandlers(),
                        t.accountFunctions.postInit && "function" == typeof t.accountFunctions.postInit && t.accountFunctions.postInit(),
                        document.dispatchEvent(w);
                        for (let e = 0; e < p.c.adUnits.length; e++) {
                            let t = p.c.adUnits[e];
                            Object(n.b)((function() {
                                t.doPostInit()
                            }
                            ))
                        }
                        t.initializeQueue()
                    }
                    ))
                } else
                    Object(s.a)("Not allowed to run auction, canceling.");
            else
                Object(s.a)("Autorun disallowed, canceling.")
        },
        initializeQueue: function() {
            const e = this;
            if (window[c.b].que.length)
                for (; window[c.b].que.length > 0; ) {
                    const t = window[c.b].que.shift();
                    e.processQueueItem(t)
                }
            window[c.b].que = new Proxy(window[c.b].que,{
                set: (t, i, n) => ("function" == typeof n && e.processQueueItem(n),
                !0)
            })
        },
        processQueueItem: function(e) {
            Object(n.b)((function() {
                try {
                    e()
                } catch (e) {
                    Object(s.a)("Error executing queued function", e)
                }
            }
            ))
        },
        eventHandlersBound: !1,
        bindEventHandlers: function() {
            let e = this;
            e.eventHandlersBound || (Object(s.a)("Binding event handlers", e.eventHandlersBound),
            e.eventHandlersBound = !0,
            Object(n.m)("scroll", "throttledScroll", window),
            window.addEventListener("throttledScroll", o.s),
            window.addEventListener("focus", o.m),
            window.addEventListener("blur", o.j),
            window.addEventListener("click", o.k),
            window.addEventListener("touchstart", o.k),
            Object(n.m)("mousemove", "throttledMouseMove", window),
            window.addEventListener("throttledMouseMove", o.n),
            Object(n.m)("resize", "throttledResize", window),
            window.addEventListener("throttledResize", (function() {
                Object(o.q)()
            }
            )))
        },
        reset: function(e) {
            d.a.resetUnits(),
            h.a.unbindEvents(),
            window[c.c].que.push((function() {
                window[c.c].removeAdUnit()
            }
            )),
            this.manualExcludeUnits = [],
            window[c.b].accountFunctions.resetUnits && "function" == typeof window[c.b].accountFunctions.resetUnits && window[c.b].accountFunctions.resetUnits(),
            p.c.resetAnchors(),
            p.c.resetMoments(),
            p.c.retireAllUnits(),
            p.c.removeAdWrapperStyles(),
            h.a.resetConfig()
        },
        resetUnit: function(e) {
            const t = p.c.getUnitFromId(e);
            t.displayed = !1,
            t.refreshed = !1,
            t.retired = !1,
            t.impressionType = "init",
            t.lastAuction = null,
            t.doPostInit()
        },
        resetAndRunAuction: function(e) {
            Object(s.a)("Reset and run auction called"),
            document.dispatchEvent(new CustomEvent("resetAndRunAuction",{
                detail: {
                    trigger: e
                }
            }));
            const t = window[c.b];
            e = void 0 !== e ? e : "route_change",
            t.reset(e),
            l.g.newPageView(),
            l.a.getConfig("account.dropBidderTest") && g.a.resetDropBidder(),
            t.postInit(e)
        },
        refreshPaused: !1,
        pauseRefresh: function(e, t) {
            e = void 0 === e || e,
            this.refreshPaused || (Object(s.a)("PAUSING REFRESH"),
            this.refreshPaused = Date.now(),
            e && document.addEventListener("userInteraction", (function() {
                window[c.b].restartRefresh("user_interaction")
            }
            )),
            "userInteraction" === t && document.dispatchEvent(o.p),
            Object(s.e)("refresh_pause", Object(s.b)(), null, null))
        },
        restartRefresh: function(e) {
            let t = window[c.b];
            if (t.refreshPaused) {
                let i = Date.now() - t.refreshPaused;
                Object(s.a)(`RESTARTING REFRESH after ${i}ms`),
                t.refreshPaused = !1,
                document.dispatchEvent(o.r);
                let n = {
                    time_since_pause: i,
                    trigger: e
                };
                Object(s.e)("refresh_restart", Object(s.b)(), null, n),
                i < 18e4 ? p.c.adUnits.forEach((function(e) {
                    e.display("refreshRestarted")
                }
                )) : t.resetAndRunAuction("restartRefresh")
            }
        },
        start: function() {
            this.preinitFired ? this.postinitFired || (l.a.setConfig("account.autorun", !0),
            this.postInit()) : this.accountFunctions.preInit = function() {
                l.a.setConfig("account.autorun", !0)
            }
        },
        fallbackForUnfilledNoGAM: function(e) {},
        logPageView: function() {
            Object(s.f)()
        },
        handleHeavyAdIntervention: function(e, t, i) {
            if (e && "HeavyAdIntervention" === e.body.id) {
                let e = p.c.getUnitFromId(i);
                Object(s.a)("HEAVY AD INTERVENTION", t, i, e),
                e.handleHeavyAdIntervention()
            }
        },
        getAdvertisingUrlPromiseForPlayer: function(e) {
            const t = this;
            let i = e.unitId
              , o = e.runAuction || !0;
            const r = e.runAuction || "https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/single_preroll_skippable&sz=640x480&ciu_szs=300x250%2C728x90&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=";
            let a = 0;
            return new Promise((function(e, d) {
                const c = setInterval((function() {
                    if (t.eventHandlersBound) {
                        clearInterval(c);
                        let t = p.c.getUnitFromId(i);
                        if (t || e(r),
                        Object(n.d)("testtag"))
                            e(r);
                        else {
                            if (!o)
                                return t.getWinningAdUrl();
                            t.videoAuctionPromise().then((function() {
                                let i, n = r, o = t.getHighestBid(!1);
                                o && (i = t.bidCachePromises[o.requestId]),
                                o && i ? (Object(s.a)(`We do not have a winning video url but we do have a winning bid for ${t.config.elementId} ... attempting to resolve bid cache promise`),
                                i.then((function() {
                                    n = t.getWinningAdUrl(),
                                    e(n)
                                }
                                )).catch((function() {
                                    n = t.getWinningAdUrl(),
                                    e(n)
                                }
                                ))) : (n = t.getWinningAdUrl(),
                                e(n))
                            }
                            )).catch((function(t) {
                                e(r)
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
        getInterstitialUnitsForEnv: function(e) {
            let t = [];
            try {
                let i = this.interstitialConfigs[e];
                return t = l.g.isMobile() ? i.units.mobile : l.g.isTablet() ? i.units.tablet : i.units.desktop,
                "string" == typeof t && (t = [t]),
                t
            } catch (e) {
                return t
            }
        },
        _findH5FallbackInterstitialUnitForEnv: function(e) {
            let t;
            if (this.interstitialConfigs && this.interstitialConfigs[e] && this.interstitialConfigs[e].fallback_h5) {
                let i;
                i = l.g.isMobile() ? this.interstitialConfigs[e].fallback_h5.mobile : l.g.isTablet() ? this.interstitialConfigs[e].fallback_h5.tablet : this.interstitialConfigs[e].fallback_h5.desktop,
                i && (t = p.c.getUnitFromId(i))
            }
            return t
        },
        _findWinningInterstitialUnit: function(e, t) {
            let i, n;
            for (let o = 0; o < e.length; o++) {
                let r = e[o]
                  , a = p.c.getUnitFromId(r);
                if (a) {
                    let e = a.getHighestBid();
                    e && (n ? e.cpm > n && (n = e.cpm,
                    i = a) : (n = e.cpm,
                    i = a))
                } else
                    Object(s.a)(`The interstitial unit with id ${r} for config ${t} does not exist`)
            }
            return i
        },
        _handleInterstitialNoFill: function(e, t) {
            try {
                let i, n;
                void 0 !== e.fallbackFunction && "function" == typeof e.fallbackFunction && (i = e.fallbackFunction),
                void 0 !== e.adBreakDone && "function" == typeof e.adBreakDone && (n = e.adBreakDone);
                const o = this._findH5FallbackInterstitialUnitForEnv(t);
                if (o && o.config.gamPath) {
                    let e = function() {};
                    i ? e = i : n && (e = n),
                    d.a.triggerInterstitialGamingUnit(o, e)
                } else
                    i ? i() : n && n()
            } catch (e) {}
        },
        initInterstitial: function(e) {
            let t = this
              , i = [e = void 0 !== e ? e : "default"];
            t.interstitialConfigs && (i = t.getInterstitialUnitsForEnv(e));
            for (let t = 0; t < i.length; t++) {
                let n = i[t]
                  , o = p.c.getUnitFromId(n);
                o ? o.initialize() : Object(s.a)(`The interstitial unit with id ${n} for config ${e} does not exist`)
            }
            const n = this._findH5FallbackInterstitialUnitForEnv(e);
            n && n.config.gamPath && d.a.defineInterstitialGamingUnit(n)
        },
        triggerInterstitial: function(e, t) {
            let i = this
              , n = [t = void 0 !== t ? t : "default"];
            i.interstitialConfigs && (n = i.getInterstitialUnitsForEnv(t));
            let o = i._findWinningInterstitialUnit(n, t);
            o ? o.trigger(e) : (Object(s.a)(`There was no winning ad unit for interstitial ${t}`),
            this._handleInterstitialNoFill(e, t))
        },
        showVideoInterstitial: function(e, t) {
            let i, n = this, o = {
                type: "interstitial",
                name: "interstitial",
                minViewTime: 8e3,
                maxAdBreak: t,
                beforeAd: function() {},
                adBreakDone: function() {
                    "function" == typeof e && e()
                }
            }, r = ["video-interstitial"];
            this.interstitialConfigs && (r = n.getInterstitialUnitsForEnv(r)),
            r && (i = p.c.getUnitFromId(r[0])),
            i ? i.trigger(o) : Object(s.a)(`The interstitial ${unitId} does not exist`)
        },
        renderDispatchAd: function(e, t, i, n, o) {
            "multi" === o ? p.c.getUnitFromId(n).determineWinnerAndRender(e, t) : "skin" === o ? window[c.b].accountFunctions.renderSkin && "function" == typeof window[c.b].accountFunctions.renderSkin && window[c.b].accountFunctions.renderSkin(n) : window[c.c].renderAd(e, t)
        }
    },
    l.a.initialize(y),
    u.b.initialize(),
    new Promise((function(e, t) {
        let i, o = function(t) {
            clearTimeout(i),
            Object(s.e)("config_failure", Object(s.b)(), null, {
                reason: t
            }),
            u.b.geoResolved = !1,
            u.b.attemptToSetStateByAvailableAPIs(),
            e()
        }, r = new window.XMLHttpRequest;
        if (r.onreadystatechange = function() {
            if (4 === r.readyState) {
                let t = r.status;
                if (t >= 200 && t < 300 || 304 === t) {
                    let t = JSON.parse(r.responseText);
                    l.g.country = t.country,
                    l.g.regionState = t.regionState,
                    l.g.continent = t.continent,
                    l.g.ip = t.ip,
                    l.g.floors = t.floors,
                    l.g.zzMap = t.zzMap || {},
                    u.b.updateConsentGeos(t.continent, t.country, t.regionState),
                    t.excludeFromRefresh && l.a.setConfig("account.sponsorshipLineItemIds", t.excludeFromRefresh),
                    t.specialIds && l.a.setConfig("account.specialLineItemIds", t.specialIds),
                    u.b.geoResolved = !0,
                    clearTimeout(i),
                    e()
                }
            }
        }
        ,
        r.onerror = function() {
            const e = `error ${r.status}: ${r.statusText}`;
            o(e)
        }
        ,
        Object(n.d)("disable_lngtd"))
            Object(s.a)("Not allowed to run auction, canceling."),
            t();
        else {
            let e = (l.a.getConfig("account.configEndpoint") || "https://floors.lngtd.com/?") + "account=" + l.a.getConfig("account.name") + "&section=" + l.a.getConfig("account.section");
            r.open("GET", e, !0),
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
, function(e, t) {
    (function(t) {
        e.exports = t
    }
    ).call(this, {})
}
, function(e) {
    e.exports = JSON.parse('{"account":{"name":"officeally","organization":"Publisher Health","section":"pm_ehr_skycraper_right","allowedHosts":[],"disallowedUrls":[],"currency":"USD","amazonPublisherId":"","prebidPath":"//s.lngtdv.com/prebid/prebid7.42.1.min.js","lngtdAdvertiserId":"5658933761","refreshEnabled":true,"refreshInterval":30000,"dynamicFloorsEnabled":false,"floorMinimumCents":"5.00","adXMultiplier":"1.00","useGAM":true,"skipGAMOnNoBids":false,"deliverPrebidIfNoGAMFill":false,"dropBidderTest":false,"shouldFilterNonActiveBidders":false,"emptyAuctionLimitByMedia":{"banner":3,"video":3},"smartRequestSettings":{},"initRequiresFocus":false,"refreshRequiresFocus":false,"refreshRequiresUserInteraction":false,"refreshUnfilledImpressions":false,"refreshUnfilledImpressionsAfter":30000,"allowUnfilledRetries":1,"autorun":true,"autoDisplayAds":true,"disabledCountries":[],"desktopTimeout":2000,"mobileTimeout":2500,"pricePoints":["0.01","0.02","0.03","0.04","0.05","0.06","0.07","0.08","0.09","0.10","0.11","0.12","0.13","0.14","0.15","0.16","0.17","0.18","0.19","0.20","0.21","0.22","0.23","0.24","0.25","0.26","0.27","0.28","0.29","0.30","0.31","0.32","0.33","0.34","0.35","0.36","0.37","0.38","0.39","0.40","0.41","0.42","0.43","0.44","0.45","0.46","0.47","0.48","0.49","0.50","0.55","0.60","0.65","0.70","0.75","0.80","0.85","0.90","0.95","1.00","1.05","1.10","1.15","1.20","1.25","1.30","1.35","1.40","1.45","1.50","1.55","1.60","1.65","1.70","1.75","1.80","1.85","1.90","1.95","2.00","2.05","2.10","2.15","2.20","2.25","2.30","2.35","2.40","2.45","2.50","2.55","2.60","2.65","2.70","2.75","2.80","2.85","2.90","2.95","3.00","3.05","3.10","3.15","3.20","3.25","3.30","3.35","3.40","3.45","3.50","3.55","3.60","3.65","3.70","3.75","3.80","3.85","3.90","3.95","4.00","4.05","4.10","4.15","4.20","4.25","4.30","4.35","4.40","4.45","4.50","4.55","4.60","4.65","4.70","4.75","4.80","4.85","4.90","4.95","5.00","5.10","5.20","5.30","5.40","5.50","5.60","5.70","5.80","5.90","6.00","6.10","6.20","6.30","6.40","6.50","6.60","6.70","6.80","6.90","7.00","7.10","7.20","7.30","7.40","7.50","7.60","7.70","7.80","7.90","8.00","8.10","8.20","8.30","8.40","8.50","8.60","8.70","8.80","8.90","9.00","9.10","9.20","9.30","9.40","9.50","9.60","9.70","9.80","9.90","10.00","10.50","11.00","11.50","12.00","12.50","13.00","13.50","14.00","14.50","15.00","15.50","16.00","16.50","17.00","17.50","18.00","18.50","19.00","19.50","20.00","21.00","22.00","23.00","24.00","25.00","26.00","27.00","28.00","29.00","30.00","31.00","32.00","33.00","34.00","35.00","36.00","37.00","38.00","39.00","40.00","41.00","42.00","43.00","44.00","45.00","46.00","47.00","48.00","49.00","50.00","60.00","70.00","80.00","90.00","100.00","150.00","200.00","250.00","300.00","350.00","400.00","450.00","500.00","550.00","600.00","650.00","700.00","750.00","800.00","850.00","900.00","950.00","1000.00"],"pricePointsNew":["0.01","0.02","0.03","0.04","0.05","0.06","0.07","0.08","0.09","0.10","0.11","0.12","0.13","0.14","0.15","0.16","0.17","0.18","0.19","0.20","0.21","0.22","0.23","0.24","0.25","0.26","0.27","0.28","0.29","0.30","0.31","0.32","0.33","0.34","0.35","0.36","0.37","0.38","0.39","0.40","0.41","0.42","0.43","0.44","0.45","0.46","0.47","0.48","0.49","0.50","0.51","0.52","0.53","0.54","0.55","0.56","0.57","0.58","0.59","0.60","0.61","0.62","0.63","0.64","0.65","0.66","0.67","0.68","0.69","0.70","0.71","0.72","0.73","0.74","0.75","0.76","0.77","0.78","0.79","0.80","0.81","0.82","0.83","0.84","0.85","0.86","0.87","0.88","0.89","0.90","0.91","0.92","0.93","0.94","0.95","0.96","0.97","0.98","0.99","1.00","1.01","1.02","1.03","1.04","1.05","1.06","1.07","1.08","1.09","1.10","1.11","1.12","1.13","1.14","1.15","1.16","1.17","1.18","1.19","1.20","1.21","1.22","1.23","1.24","1.25","1.26","1.27","1.28","1.29","1.30","1.31","1.32","1.33","1.34","1.35","1.36","1.37","1.38","1.39","1.40","1.41","1.42","1.43","1.44","1.45","1.46","1.47","1.48","1.49","1.50","1.51","1.52","1.53","1.54","1.55","1.56","1.57","1.58","1.59","1.60","1.61","1.62","1.63","1.64","1.65","1.66","1.67","1.68","1.69","1.70","1.71","1.72","1.73","1.74","1.75","1.76","1.77","1.78","1.79","1.80","1.81","1.82","1.83","1.84","1.85","1.86","1.87","1.88","1.89","1.90","1.91","1.92","1.93","1.94","1.95","1.96","1.97","1.98","1.99","2.00","2.05","2.10","2.15","2.20","2.25","2.30","2.35","2.40","2.45","2.50","2.55","2.60","2.65","2.70","2.75","2.80","2.85","2.90","2.95","3.00","3.05","3.10","3.15","3.20","3.25","3.30","3.35","3.40","3.45","3.50","3.55","3.60","3.65","3.70","3.75","3.80","3.85","3.90","3.95","4.00","4.05","4.10","4.15","4.20","4.25","4.30","4.35","4.40","4.45","4.50","4.55","4.60","4.65","4.70","4.75","4.80","4.85","4.90","4.95","5.00","5.05","5.10","5.15","5.20","5.25","5.30","5.35","5.40","5.45","5.50","5.55","5.60","5.65","5.70","5.75","5.80","5.85","5.90","5.95","6.00","6.05","6.10","6.15","6.20","6.25","6.30","6.35","6.40","6.45","6.50","6.55","6.60","6.65","6.70","6.75","6.80","6.85","6.90","6.95","7.00","7.05","7.10","7.15","7.20","7.25","7.30","7.35","7.40","7.45","7.50","7.55","7.60","7.65","7.70","7.75","7.80","7.85","7.90","7.95","8.00","8.05","8.10","8.15","8.20","8.25","8.30","8.35","8.40","8.45","8.50","8.55","8.60","8.65","8.70","8.75","8.80","8.85","8.90","8.95","9.00","9.05","9.10","9.15","9.20","9.25","9.30","9.35","9.40","9.45","9.50","9.55","9.60","9.65","9.70","9.75","9.80","9.85","9.90","9.95","10.00","10.50","11.00","11.50","12.00","12.50","13.00","13.50","14.00","14.50","15.00","15.50","16.00","16.50","17.00","17.50","18.00","18.50","19.00","19.50","20.00","21.00","22.00","23.00","24.00","25.00","26.00","27.00","28.00","29.00","30.00","31.00","32.00","33.00","34.00","35.00","36.00","37.00","38.00","39.00","40.00","41.00","42.00","43.00","44.00","45.00","46.00","47.00","48.00","49.00","50.00","55.00","60.00","65.00","70.00","75.00","80.00","85.00","90.00","95.00","100.00","150.00","200.00","250.00","300.00","350.00","400.00","450.00","500.00","550.00","600.00","650.00","700.00","750.00","800.00","850.00","900.00","950.00","1000.00"],"useNewTargeting":false,"excludeSponsorshipFromRefresh":false,"sponsorshipLineItemIds":[""],"specialLineItemIds":{},"enableConfiant":true,"confiantGeos":[],"enableLiveIntent":false,"liveintentId":"","enableHumanSecurity":false,"humanSecurityClientId":false,"enableBlockthrough":false,"blockthroughScriptPath":"","enableSourcepoint":false,"sourcepointId":1368,"gdprVendorExceptions":[],"videoPlaylist":[],"ignoreAdvertiserIds":[],"configEndpoint":"https://floors.lngtd.com/?","docereeScriptPath":"https://servedbydoceree.doceree.com/resources/p/doc_ad/35/87/dc.js","docereeScriptAttributes":{"data-siteId":"87","data-platId":"1","data-pubId":"35"},"confiantId":"cdAjlzzYDT5PKuZPhxl7wwWsn5s"},"schain":{"validation":"strict","config":{"ver":"1.0","complete":1,"nodes":[{"asi":"longitudeads.com","sid":"9170","hp":1}]}},"partners":[{"shortName":"adx","gamId":"5623550568","revShare":"1.00","allowRefresh":true,"unitFloors":{},"geoRestrictionsInclude":null,"geoRestrictionsExclude":null,"schainOverride":{}},{"shortName":"deepintent","gamId":"","revShare":"1.00","allowRefresh":true,"unitFloors":{"ad-sidebar-right":"0.00","ad-leaderboard":"0.00","ad-skyscraper-left":"0.00"},"geoRestrictionsInclude":null,"geoRestrictionsExclude":null,"schainOverride":{}},{"shortName":"lasso","gamId":"","revShare":"1.00","allowRefresh":true,"unitFloors":{"ad-skyscraper-left":"0.00","ad-leaderboard":"0.00","ad-sidebar-right":"0.00"},"geoRestrictionsInclude":null,"geoRestrictionsExclude":null,"schainOverride":{}},{"shortName":"pulsepoint","gamId":"","revShare":"1.00","allowRefresh":true,"unitFloors":{"ad-sidebar-right":"0.00","ad-leaderboard":"0.00","ad-skyscraper-left":"0.00"},"geoRestrictionsInclude":null,"geoRestrictionsExclude":null,"schainOverride":{}},{"shortName":"relevatehealth","gamId":"","revShare":"1.00","allowRefresh":true,"unitFloors":{"ad-sidebar-right":"0.00","ad-skyscraper-left":"0.00","ad-leaderboard":"0.00"},"geoRestrictionsInclude":null,"geoRestrictionsExclude":null,"schainOverride":{}}],"adUnits":[{"uid":3866,"gamPath":"/23083163163/PM.EHR.Skyscraper.Right","gamSizes":[[160,600],[120,600]],"clsSize":null,"code":"ad-sidebar-right","elementId":"ad-sidebar-right","mediaTypes":{"banner":{"sizes":[[160,600],[120,600]]}},"bids":[{"bidder":"deepintent","params":{"tagId":"1618","publisherId":""}},{"bidder":"lasso","params":{"adUnitId":"7017","sizes":[[160,600],[120,600]]}},{"bidder":"pulsepoint","params":{"ct":776115,"cp":562430}},{"bidder":"relevatehealth","params":{"placement_id":110126}}],"deviceType":"mobile","deviceTypes":["mobile","desktop","tablet"],"refresh":true,"lazyLoad":false,"requireBids":false,"baseFloor":"10.00","dynamicFloorParameters":"{}","sections":["PM_EHR_Skycraper_Right"]}],"floors":{},"modules":[{"name":"optable","settings":{"scriptPath":"https://longitudeads.solutions.cdn.optable.co/public-assets/longitudeads-sdk.js","siteSlug":"officeally"}}]}')
}
, function(e, t, i) {
    "use strict";
    i.r(t);
    var n = i(1)
      , o = i(0);
    i(19),
    window[n.b].accountFunctions.preInit = function() {
        o.a.setConfig("account.autorun", !1)
    }
}
, function(e, t, i) {
    "use strict";
    i.r(t);
    var n = i(1)
      , o = i(6)
      , s = i(3)
      , r = (i(8),
    i(0));
    !function() {
        const e = function() {
            return window.ph1 || "1"
        };
        Object(s.o)((function() {
            const t = window.ph2;
            let i = e();
            window.eh2 = t,
            window[n.c].que.push((function() {
                window[n.c].setBidderConfig({
                    bidders: ["pulsepoint"],
                    config: {
                        ortb2: {
                            user: {
                                ext: {
                                    eids: [{
                                        source: "officeally.com",
                                        uids: [{
                                            id: i
                                        }]
                                    }]
                                }
                            }
                        }
                    }
                }),
                Object(s.d)("medscapetest") && window[n.c].setBidderConfig({
                    bidders: ["medscape"],
                    config: {
                        provider: {
                            npi_hashed: i,
                            email_hashed: t
                        },
                        patient: {
                            age: 27,
                            gender: "F",
                            ndc: []
                        },
                        geo: r.g.country,
                        publisherDomain: "officeally"
                    }
                })
            }
            ));
            try {
                !function(e, t, i, n) {
                    if (!e.ditm_dpes) {
                        e.ditm_dpes = function(t) {
                            e.ditm_dpes.loaded ? t() : e.ditm_dpes.queue.push(t)
                        }
                        ,
                        e.ditm_dpes.loaded = !1,
                        e.ditm_dpes.queue = [],
                        e.ditm_dpes.version = "1.0";
                        var o = t.getElementsByTagName("script")[0]
                          , s = t.createElement("script");
                        s.async = !1,
                        s.src = "//cdn.deepintent.com/dpes.js",
                        o && o.parentNode && o.parentNode.insertBefore(s, o)
                    }
                }(window, document),
                ditm_dpes((function() {
                    const e = {
                        siteId: "80134",
                        type: "direct",
                        storage: "localStorage",
                        identifiers: [{
                            key: "npi"
                        }],
                        hash: "SHA-256",
                        npi: i
                    };
                    ditm_dpes((function() {
                        DeepIntent.Dpes.init(e)
                    }
                    ))
                }
                ))
            } catch (e) {}
            window[n.b].que.push((function() {
                Object(s.o)((function() {
                    window.optable.cmd.push((function() {
                        window.optable.auth.identify(`c10:${i}`)
                    }
                    ))
                }
                ))
            }
            ))
        }
        )),
        window[n.b].accountFunctions.cleanUnitConfigs = function(t) {
            debugger;
            let i = e()
              , n = [];
            return t.forEach((function(e) {
                if (Object(s.d)("medscapetest")) {
                    let t = {
                        bidder: "medscape"
                    };
                    e.bids.push(t)
                }
                e.bids.forEach((function(e) {
                    "relevatehealth" === e.bidder && (e.params.user_id = i,
                    window.adObject && (e.params.customdata = JSON.stringify(window.adObject)))
                }
                )),
                n.push(e)
            }
            )),
            n
        }
        ,
        o.a.useSafeFrames = !0,
        window[n.b].nestedHostMismatchDisallowed = !1
    }()
}
]);
