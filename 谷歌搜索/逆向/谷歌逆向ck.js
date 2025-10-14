(function() {
    var b = window.addEventListener;
    window.addEventListener = function(a, c, d) {
        a !== "unload" && b(a, c, d)
    }
    ;
}
).call(this);
(function() {
    var _g = {
        kEI: 'HGruaLqzAbCm2roPvcXxkQY',
        kEXPI: '31',
        kBL: 'Cmfc',
        kOPI: 89978449
    };
    (function() {
        var a;
        ((a = window.google) == null ? 0 : a.stvsc) ? google.kEI = _g.kEI : window.google = _g;
    }
    ).call(this);
}
)();
(function() {
    google.sn = 'web';
    google.kHL = 'zh-CN';
    google.rdn = false;
}
)();
(function() {
    var g = this || self;
    function k() {
        return window.google && window.google.kOPI || null
    }
    ;var l, m = [];
    function n(a) {
        for (var b; a && (!a.getAttribute || !(b = a.getAttribute("eid"))); )
            a = a.parentNode;
        return b || l
    }
    function p(a) {
        for (var b = null; a && (!a.getAttribute || !(b = a.getAttribute("leid"))); )
            a = a.parentNode;
        return b
    }
    function q(a) {
        /^http:/i.test(a) && window.location.protocol === "https:" && (google.ml && google.ml(Error("a"), !1, {
            src: a,
            glmm: 1
        }),
        a = "");
        return a
    }
    function r(a, b, d, c, h) {
        var e = "";
        b.search("&ei=") === -1 && (e = "&ei=" + n(c),
        b.search("&lei=") === -1 && (c = p(c)) && (e += "&lei=" + c));
        var f = b.search("&cshid=") === -1 && a !== "slh";
        c = "&zx=" + Date.now().toString();
        g._cshid && f && (c += "&cshid=" + g._cshid);
        (d = d()) && (c += "&opi=" + d);
        return "/" + (h || "gen_204") + "?atyp=i&ct=" + String(a) + "&cad=" + (b + e + c)
    }
    ;l = google.kEI;
    google.getEI = n;
    google.getLEI = p;
    google.ml = function() {
        return null
    }
    ;
    google.log = function(a, b, d, c, h, e) {
        e = e === void 0 ? k : e;
        d || (d = r(a, b, e, c, h));
        if (d = q(d)) {
            a = new Image;
            var f = m.length;
            m[f] = a;
            a.onerror = a.onload = a.onabort = function() {
                delete m[f]
            }
            ;
            a.src = d
        }
    }
    ;
    google.logUrl = function(a, b) {
        b = b === void 0 ? k : b;
        return r("", a, b)
    }
    ;
}
).call(this);
(function() {
    google.y = {};
    google.sy = {};
    function e(a, b, c) {
        if (a)
            var d = a.id;
        else {
            do
                d = Math.random();
            while (c[d])
        }
        c[d] = [a, b]
    }
    var f;
    (f = google).x || (f.x = function(a, b) {
        e(a, b, google.y)
    }
    );
    var g;
    (g = google).sx || (g.sx = function(a, b) {
        e(a, b, google.sy)
    }
    );
    google.lm = [];
    var h;
    (h = google).plm || (h.plm = function(a) {
        google.lm.push.apply(google.lm, a)
    }
    );
    google.lq = [];
    var k;
    (k = google).load || (k.load = function(a, b, c) {
        google.lq.push([[a], b, c])
    }
    );
    var l;
    (l = google).loadAll || (l.loadAll = function(a, b) {
        google.lq.push([a, b])
    }
    );
    google.bx = !1;
    var m;
    (m = google).lx || (m.lx = function() {}
    );
    var n = [], p;
    (p = google).fce || (p.fce = function(a, b, c, d) {
        n.push([a, b, c, d])
    }
    );
    google.qce = n;
    google.adl = [];
}
).call(this);
google.f = {};
(function() {
    document.documentElement.addEventListener("submit", function(b) {
        var a;
        if (a = b.target) {
            var c = a.getAttribute("data-submitfalse");
            a = c === "1" || c === "q" && !a.elements.q.value ? !0 : !1
        } else
            a = !1;
        a && (b.preventDefault(),
        b.stopPropagation())
    }, !0);
    document.documentElement.addEventListener("click", function(b) {
        var a;
        a: {
            for (a = b.target; a && a !== document.documentElement; a = a.parentElement)
                if (a.tagName === "A") {
                    a = a.getAttribute("data-nohref") === "1";
                    break a
                }
            a = !1
        }
        a && b.preventDefault()
    }, !0);
}
).call(this);
(function() {
    google.hs = {
        h: true,
        nhs: false,
        sie: false
    };
}
)();
(function() {
    google.c = {
        cap: 2000,
        doiu: 1,
        timl: false,
        vis: true
    };
}
)();
(function() {
    var n = this || self;
    window.google = window.google || {};
    var p = window.performance && window.performance.timing && "navigationStart"in window.performance.timing
      , aa = google.stvsc && google.stvsc.ns
      , r = p ? aa || window.performance.timing.navigationStart : void 0;
    function t() {
        return window.performance.now() - (google.stvsc && google.stvsc.pno || 0)
    }
    var ba = google.stvsc && google.stvsc.rs
      , u = p ? ba || window.performance.timing.responseStart : void 0;
    var ca = google.c.cap
      , v = google.c.timl;
    function w(a, b, d) {
        google.tick("load", a, b, d)
    }
    function x(a, b) {
        google.c.e("load", a, String(b))
    }
    ;var da = function(a) {
        this.g = a;
        this.l = [];
        var b = this.g.getAttribute("data-deferred");
        this.A = a.hasAttribute("data-noaft");
        this.i = !!b;
        if (b = !this.i)
            a: {
                for (b = 0; b < y.length; ++b)
                    if (a.getAttribute("data-" + y[b])) {
                        b = !0;
                        break a
                    }
                b = !1
            }
        this.j = b;
        (b = a.src) && this.j && (this.D = b);
        !this.j && b || a.setAttribute("data-lzy_", "1");
        (this.v = this.A ? !0 : this.i || this.j ? !1 : !this.g.src || this.g.complete) || z(this);
        google.c.wh > 1 && A(this)
    }
      , z = function(a) {
        google.rll(a.g, !0, function() {
            var b = Date.now();
            if (a.D && a.g.src === a.D || a.g.getAttribute("data-deferred") === "1")
                z(a);
            else if (!a.B) {
                a.i && a.g.setAttribute("data-deferred", "3");
                a.B = b;
                a.g.setAttribute("data-iml", String(b));
                for (var d = 0; d < a.l.length; ++d)
                    a.l[d](b);
                a.l.length = 0
            }
        })
    }
      , A = function(a) {
        a.C === void 0 && (a.C = google.cv(a.g));
        return a.C
    }
      , y = "src bsrc url ll image img-url lioi".split(" ");
    google.c.iim = google.c.iim || {};
    var B = google.c.iim
      , ea = 0;
    function C(a) {
        var b = a.getAttribute("data-csiid") || google.kEI + "_" + String(++ea);
        B[b] || (a.setAttribute("data-csiid", b),
        B[b] = new da(a));
        return B[b]
    }
    function D(a, b) {
        b = (b || document).getElementsByTagName("img");
        for (var d = 0, c = b.length; d < c; ++d)
            a(C(b[d]))
    }
    ;var E = {};
    function F(a, b) {
        google.timers.load.m[a] === !1 ? b() : (E[a] || (E[a] = []),
        E[a].push(b))
    }
    google.c.q = F;
    google.caft = function(a) {
        F("aft", a)
    }
    ;
    function G(a, b, d) {
        var c = a.parentElement;
        if (c && (c.classList.contains("q1MG4e") || c.classList.contains("uhHOwf")) && (c.style.height || c.style.width)) {
            var e = c.getBoundingClientRect()
              , k = a.getBoundingClientRect();
            if (e.height < k.height || e.width < k.width)
                a = c
        }
        if (!d)
            for (d = a; d && d.id !== "center_col" && d.id !== "rhs"; )
                d = d.parentElement;
        if (!d)
            for (d = a; d && d.tagName !== "G-SCROLLING-CAROUSEL"; )
                d = d.parentElement;
        (c = !a) || (a.style.display === "none" ? c = !0 : document.defaultView && document.defaultView.getComputedStyle ? (c = document.defaultView.getComputedStyle(a),
        c = !!c && (c.visibility === "hidden" || c.height === "0px" && c.width === "0px")) : c = !1);
        if (c)
            b = 0;
        else if (a.getBoundingClientRect) {
            b: {
                for (c = a; c && c !== d; c = c.parentElement)
                    if (c.style.overflow === "hidden")
                        break b;
                c = null
            }
            (e = c) ? (c = a.getBoundingClientRect(),
            e = e.getBoundingClientRect(),
            c = c.bottom < e.top || c.top >= e.bottom || c.right < e.left || c.left >= e.right) : c = !1;
            if (c)
                b = 0;
            else {
                c = a.getBoundingClientRect();
                var h = c.left + (b ? 0 : window.pageXOffset);
                e = c.top + (b ? 0 : window.pageYOffset);
                k = c.width;
                var m = c.height
                  , f = 0;
                if (!(m <= 0 && k <= 0)) {
                    var q = window.innerHeight || document.documentElement.clientHeight;
                    e + m < 0 ? f = 2 : e >= q && (f = 4);
                    if (h + k < 0 || h >= (window.innerWidth || document.documentElement.clientWidth))
                        f |= 8;
                    else if (d) {
                        h = c.left;
                        if (!b)
                            for (b = a; b && b !== d; b = b.parentElement)
                                h += b.scrollLeft;
                        b = d.getBoundingClientRect();
                        if (h + k < b.left || h >= b.right)
                            f |= 8;
                        c.top >= b.bottom && (f |= 4)
                    }
                    f || (f = 1,
                    e + m > q && (f |= 4))
                }
                b = f
            }
        } else
            b = 1;
        return b
    }
    ;google.timers = {};
    google.startTick = function(a, b) {
        google.timers[a] = {
            t: {
                start: b || Date.now()
            },
            e: {},
            m: {}
        }
    }
    ;
    google.tick = function(a, b, d, c) {
        d = d !== void 0 ? d : Date.now();
        google.timers[a].t[b] = d;
        c && r && performance.mark && (a = d - r,
        a > 0 && performance.mark(c, {
            startTime: a
        }))
    }
    ;
    google.c.e = function(a, b, d) {
        google.timers[a].e[b] = d
    }
    ;
    google.c.b = function(a) {
        var b = google.timers.load.m;
        b[a] && google.ml(Error("b"), !1, {
            m: a
        });
        b[a] = !0
    }
    ;
    google.c.u = function(a) {
        var b = google.timers.load.m
          , d = !0;
        if (b[a]) {
            for (var c = E[a] || [], e = 0; e < c.length; ++e)
                try {
                    c[e]()
                } catch (h) {
                    google.ml(h, !1)
                }
            c.length = 0;
            b[a] = !1;
            for (var k in b)
                b[k] && (d = !1)
        } else {
            d = "";
            for (c in b)
                d += c + ":" + b[c] + ";";
            google.ml(Error("a"), !1, {
                m: a,
                s: d
            });
            d = !1
        }
        (a = d) && google.csiReport(google.timers.load, "all");
        return a
    }
    ;
    google.rll = function(a, b, d) {
        function c(e) {
            d(e);
            a.removeEventListener("load", c, !1);
            a.removeEventListener("error", c, !1)
        }
        a.addEventListener("load", c, !1);
        b && a.addEventListener("error", c, !1)
    }
    ;
    var H, I = Date.now(), J = window.performance;
    J && (J.now && (H = Math.floor(t())),
    r && u && u > r && u <= I && (I = u,
    H = u - r));
    google.startTick("load", I);
    var K = H;
    google.timers.load.wsrt = K;
    performance.mark && performance.mark("SearchAFTStart", {
        startTime: K
    });
    w("hst", window._hst, "SearchHeadStart");
    google.c.b("xe");
    function L(a) {
        return document.visibilityState === "hidden" ? (w("fht", a),
        !0) : !1
    }
    function M() {
        L() && N()
    }
    function N() {
        document.removeEventListener("visibilitychange", M, !0)
    }
    L(0) || document.addEventListener("visibilitychange", M, !0);
    google.c.rq = [N];
    google.cv = G;
    function O() {
        if (window.performance && window.performance.getEntriesByType) {
            var a = window.performance.getEntriesByType("navigation");
            if (a.length !== 0)
                return a[0]
        }
    }
    ;function P() {
        if (typeof google !== "undefined" && google && google.rdn) {
            var a = O();
            return a ? a.type : null
        }
        return window.performance && window.performance.navigation && window.performance.navigation.type
    }
    ;var fa = window.location;
    function Q(a) {
        return (a = fa.search.match(new RegExp("[?&]" + a + "=(\\d+)"))) ? Number(a[1]) : -1
    }
    function R(a) {
        var b = google.timers.load
          , d = b.e
          , c = google.stvsc;
        c && (d.ssr = 1);
        if (c ? c.isBF : typeof google !== "undefined" && google && google.rdn ? P() === "back_forward" : P() === 2)
            d.bb = 1;
        (typeof google !== "undefined" && google && google.rdn ? P() === "reload" : P() === 1) && (d.r = 1);
        if (c = O()) {
            var e = c.type;
            e && (d.nt = e);
            e = c.deliveryType;
            e != null && (d.dt = e);
            e = c.transferSize;
            e != null && (d.ts = e);
            c = c.nextHopProtocol;
            c != null && (d.nhp = c)
        }
        (c = window.navigation) && (c = c.activation) && (c = c.navigationType) && (d.ant = c);
        d = b.m;
        if (!d || !d.prs) {
            c = window._csc === "agsa" && window._cshid;
            d = Q("qsubts");
            typeof google !== "undefined" && google && google.rdn ? (e = P(),
            e = !e || e === "navigate") : e = !P();
            e = e && !c ? b.qsubts || d : 0;
            var k = "r";
            e > 0 && (c = b.fbts || Q("fbts"),
            c > 0 && (b.t.start = Math.max(e, c),
            k = b.fbts === c ? "i" : "u"));
            var h = b.t
              , m = h.start;
            c = {};
            b.wsrt !== void 0 && (c.wsrt = b.wsrt);
            if (m)
                for (var f in h)
                    if (f !== "start") {
                        var q = h[f];
                        c[f] = f === "sgl" ? q : Math.max(q - m, 0)
                    }
            e > 0 && (c.gsasrt = b.t.start - e,
            f = Q("qsd"),
            f > 0 && x("qsd", f),
            x("ests", (b.qsubts === e ? "i" : "u") + k),
            b.qsubts && b.qsubts !== d && x("qd", b.qsubts - d));
            b = b.e;
            a = "/gen_204?s=" + google.sn + "&t=" + a + "&atyp=csi&ei=" + google.kEI + "&rt=";
            f = "";
            for (l in c)
                a += "" + f + l + "." + c[l],
                f = ",";
            for (var g in b)
                a += "&" + g + "=" + b[g];
            var l = "";
            n._cshid && (l += "&cshid=" + n._cshid);
            (g = window.google && window.google.kOPI || null) && (l += "&opi=" + g);
            l = a += l;
            typeof navigator.sendBeacon === "function" ? navigator.sendBeacon(l, "") : google.log("", "", l)
        }
    }
    ;function S() {
        w("cbt");
        R("cap")
    }
    ;function T(a, b, d) {
        function c(f) {
            m = Math.max(m, f);
            ++h;
            e || k !== h || d(m)
        }
        var e = !0
          , k = 0
          , h = 0
          , m = 0;
        D(function(f) {
            a(f) && (++k,
            f.B || f.v ? c(f.B || 0) : f.l.push(c))
        });
        b();
        (e = !1,
        k !== h) || d(m)
    }
    ;var U = !1, V = 0, W = 0, X = 0, Y;
    function Z() {
        Y && clearTimeout(Y)
    }
    function ha(a, b) {
        google.c.wh > 1 || (google.c.wh = Math.floor(window.innerHeight || document.documentElement.clientHeight));
        var d = google.c.wh;
        var c = !b
          , e = !X && document.getElementById("rhs");
        b = b ? Math.floor(b.getBoundingClientRect().top + window.pageYOffset) : -1;
        e && !c ? (X = a,
        D(function(g) {
            g.F = !0
        }, e)) : (e = c || google.c.wh > 1 && b >= d,
        !W && e && (W = a,
        V = b));
        if (c && W) {
            var k = 0
              , h = 0
              , m = 0
              , f = !1
              , q = !1;
            T(function(g) {
                if (!(A(g) & 1))
                    return !1;
                if (g.v)
                    return ++m,
                    !g.A;
                A(g) & 4 && (g.F ? q = !0 : f = !0);
                g.i && ++h;
                ++k;
                return !0
            }, function() {
                x("ima", k);
                x("imad", h);
                x("imac", m);
                document.getElementsByClassName("Ib7Efc").length && x("ddl", 1);
                var g = document.getElementById("eKIzJc");
                g && (g = G(g),
                x("aio", g));
                x("wh", d)
            }, function(g) {
                g && w("afti", g);
                V > 0 && w("afts", W);
                X && w("aftr", X);
                var l = W;
                X > l && (l = X);
                g && (g > l || f && (!X || V < 0) || q && V > 0) && (l = g);
                w("aft", l, "trigger:SearchAFTEnd");
                google.c.q("frt", function() {
                    Z();
                    R("aft")
                });
                google.c.u("aft")
            })
        }
    }
    ;function ia(a) {
        T(function(b) {
            return !!(A(b) & 1)
        }, function() {
            w("frts", a)
        }, function(b) {
            w("frvt", Math.max(b, a));
            google.c.u("frt")
        })
    }
    ;var ja = !1;
    google.c.wh = Math.floor(window.innerHeight || document.documentElement.clientHeight);
    google.c.b("prt");
    var ka = ca || 0;
    if (ka > 0) {
        a: {
            if (r !== void 0) {
                var la = ka - t();
                if (la > 0) {
                    Y = setTimeout(S, la);
                    break a
                }
                S()
            }
            Y = void 0
        }
        google.c.rq.push(Z)
    }
    google.c.maft = function(a, b) {
        D(function() {});
        U || (google.c.b("aft"),
        U = !0);
        ha(a, b)
    }
    ;
    google.c.mfrvt = function(a) {
        ia(a)
    }
    ;
    google.c.miml = function(a) {
        function b(c) {
            var e = A(c);
            c.g.setAttribute("data-atf", String(e));
            return v && !c.A && (!c.j || !!(A(c) & 1))
        }
        function d(c) {
            v && w("iml", c || a);
            google.c.u("iml")
        }
        ja || (google.c.b("iml"),
        function() {
            T(b, function() {}, d)
        }(0),
        ja = !0)
    }
    ;
    google.c.b("frt");
    google.c.ubf = !0;
    google.c.setup = function(a) {
        a = C(a);
        return google.c.wh > 1 ? A(a) : null
    }
    ;
}
).call(this);
(function() {
    function b() {
        if (typeof google !== "undefined" && google && google.rdn) {
            a: {
                if (window.performance && window.performance.getEntriesByType) {
                    var a = window.performance.getEntriesByType("navigation");
                    if (a.length !== 0) {
                        a = a[0];
                        break a
                    }
                }
                a = void 0
            }
            return a ? a.type : null
        }
        return window.performance && window.performance.navigation && window.performance.navigation.type
    }
    ;a: {
        var c = window, d, e = c.location.search.match(RegExp("[?&]sei=([^&#]+)"));
        if ((d = e ? e[1] : null) && c.sessionStorage) {
            var f;
            try {
                f = c.sessionStorage.getItem(d)
            } catch (a) {
                break a
            }
            if (f) {
                var g;
                b: {
                    var h = c.location.search, k;
                    if (k = window._csc !== "agsa" || !window._cshid)
                        if (typeof google !== "undefined" && google && google.rdn) {
                            var l = b();
                            k = !l || l === "navigate"
                        } else
                            k = !b();
                    if (k) {
                        var m, n = h.match(RegExp("[?&]qsubts=(\\d+)"));
                        m = n && Number(n[1]);
                        if (m > 0) {
                            g = m;
                            break b
                        }
                    }
                    g = void 0
                }
                var p = g
                  , q = (p && p > 0 ? p : performance.timing.navigationStart) - Number(f);
                q > 0 && (google.tick("load", "sgl", q),
                performance && performance.mark && performance.mark("SearchSGL", {
                    startTime: q
                }));
                try {
                    c.sessionStorage.removeItem(d)
                } catch (a) {}
            }
        }
    }
    ;
}
).call(this);
(function() {
    function b() {
        for (var a = google.drc.shift(); a; )
            a(),
            a = google.drc.shift()
    }
    ;google.drc = [function() {
        google.tick && google.tick("load", "dcl")
    }
    ];
    google.dclc = function(a) {
        google.drc.length ? google.drc.push(a) : a()
    }
    ;
    window.addEventListener ? (document.addEventListener("DOMContentLoaded", b, !1),
    window.addEventListener("load", b, !1)) : window.attachEvent && window.attachEvent("onload", b);
}
).call(this);
(function() {
    function e(c, d) {
        for (var b = f, a = 0; a < c.length; a++) {
            var g = c[a];
            (d ? b.etc : b.et).push(g);
            b.c.addEventListener(g, b.h, d)
        }
    }
    ;var f = function() {
        var c = window.document.documentElement
          , d = []
          , b = function(a) {
            d.push(a)
        };
        return {
            c: c,
            q: d,
            et: [],
            etc: [],
            d: b,
            h: function(a) {
                b({
                    eventType: a.type,
                    event: a,
                    targetElement: a.target,
                    eic: c,
                    timeStamp: Date.now(),
                    eia: void 0,
                    eirp: void 0,
                    eiack: void 0
                })
            }
        }
    }();
    e("click focusin focusout auxclick change copy dblclick beforeinput input keyup keydown keypress mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup paste pointerdown pointerenter pointerleave pointerup touchstart touchmove touchend touchcancel transitioncancel transitionend transitionrun transitionstart animationcancel animationend dragover dragenter dragleave drop dragstart dragend scroll speech".split(" "));
    e(["focus", "blur", "error", "load"], !0);
    window._ejsa = f;
}
).call(this);
(function() {
    window.google.erd = {
        jsr: 1,
        bv: 2307,
        sd: true,
        de: true,
        dpf: 'mnlbcKMWZaGcP6QT7gAjeItXFq-mT5Hq8F1JYFtXG6s'
    };
}
)();
(function() {
    var sdo = false;
    var mei = 10;
    var diel = 0;
    var g = this || self;
    var k, l = (k = g.mei) != null ? k : 1, m, p = (m = g.diel) != null ? m : 0, q, r = (q = g.sdo) != null ? q : !0, t = 0, u, w = google.erd, x = w.jsr;
    google.ml = function(a, b, d, n, e) {
        e = e === void 0 ? 2 : e;
        b && (u = a && a.message);
        d === void 0 && (d = {});
        d.cad = "ple_" + google.ple + ".aple_" + google.aple;
        if (google.dl)
            return google.dl(a, e, d, !0),
            null;
        b = d;
        if (x < 0) {
            window.console && console.error(a, b);
            if (x === -2)
                throw a;
            b = !1
        } else
            b = !a || !a.message || a.message === "Error loading script" || t >= l && !n ? !1 : !0;
        if (!b)
            return null;
        t++;
        d = d || {};
        b = encodeURIComponent;
        var c = "/gen_204?atyp=i&ei=" + b(google.kEI);
        google.kEXPI && (c += "&jexpid=" + b(google.kEXPI));
        c += "&srcpg=" + b(google.sn) + "&jsr=" + b(w.jsr) + "&bver=" + b(w.bv);
        w.dpf && (c += "&dpf=" + b(w.dpf));
        var f = a.lineNumber;
        f !== void 0 && (c += "&line=" + f);
        var h = a.fileName;
        h && (h.indexOf("-extension:/") > 0 && (e = 3),
        c += "&script=" + b(h),
        f && h === window.location.href && (f = document.documentElement.outerHTML.split("\n")[f],
        c += "&cad=" + b(f ? f.substring(0, 300) : "No script found.")));
        google.ple && google.ple === 1 && (e = 2);
        c += "&jsel=" + e;
        for (var v in d)
            c += "&",
            c += b(v),
            c += "=",
            c += b(d[v]);
        c = c + "&emsg=" + b(a.name + ": " + a.message);
        c = c + "&jsst=" + b(a.stack || "N/A");
        c.length >= 12288 && (c = c.substring(0, 12288));
        a = c;
        n || google.log(0, "", a);
        return a
    }
    ;
    window.onerror = function(a, b, d, n, e) {
        u !== a && (a = e instanceof Error ? e : Error(a),
        d === void 0 || "lineNumber"in a || (a.lineNumber = d),
        b === void 0 || "fileName"in a || (a.fileName = b),
        google.ml(a, !1, void 0, !1, a.name === "SyntaxError" || a.message.substring(0, 11) === "SyntaxError" || a.message.indexOf("Script error") !== -1 ? 3 : p));
        u = null;
        r && t >= l && (window.onerror = null)
    }
    ;
}
)();
(function() {
    history.replaceState(history.state, "", function(a, b) {
        return b.replace(new RegExp("(\\?|&)" + a + "=[^&#]*(&?)"), function(e, c, d) {
            return d ? c : ""
        })
    }("sg_ss", location.href));
}
).call(this);
google.arwt = function(a) {
    a.href = document.getElementById(a.id.substring(a.id.slice(0, 3) === "vcs" ? 3 : 1)).href;
    return !0
}
;
(function() {
    google.eufsv = true;
    (function() {
        var e = function() {
            for (var a = Number(this), c = [], b = a; b < arguments.length; b++)
                c[b - a] = arguments[b];
            return c
        };
        function g(a) {
            var c = e.apply(1, arguments).filter(Boolean).join("&");
            if (!c)
                return a;
            var b = a.match(/[?&]adurl=/);
            return b ? a.slice(0, b.index + 1) + c + "&" + a.slice(b.index + 1) : a + (a.indexOf("?") < 0 ? "?" : "&") + c
        }
        function h(a, c) {
            return a === 0 ? "ri=1" : a === 1 ? c ? "ri=24" : "ri=27" : a === 2 ? c ? "ri=25" : "ri=26" : ""
        }
        function k(a, c) {
            return c ? "&" + a + "=" + encodeURIComponent(c) : ""
        }
        var l = function(a) {
            var c = a.url;
            a = a.A;
            this.i = c;
            this.B = a;
            this.v = (new Date).getTime() - 17040672E5;
            this.g = {};
            for (var b = /[?&]([^&=]+)=([^&]*)/g; a = b.exec(c); )
                this.g[a[1]] = a[2]
        }
          , m = function(a, c) {
            return a.g[c]
        }
          , p = function(a, c) {
            if (a.g.dsh === "1")
                return null;
            var b = a.g.ae;
            if (b === "1") {
                var d = a.g.adurl;
                if (d)
                    try {
                        return {
                            version: 3,
                            l: decodeURIComponent(d),
                            j: g(a.i, "act=1", h(c, !0), n(a))
                        }
                    } catch (f) {}
            }
            return b === "2" ? {
                version: 4,
                l: g(a.i, "dct=1", "suid=" + a.v, h(c, !1)),
                j: g(a.i, "act=1", h(c, !0), "suid=" + a.v)
            } : null
        }
          , q = function(a, c) {
            return c === 2 ? g(a.i, "ri=2") : c === 0 ? g(a.i, "ri=16") : a.i
        }
          , n = function(a) {
            a = a.B;
            if (!a)
                return "";
            var c = k("uap", a.platform) + k("uapv", a.platformVersion) + k("uafv", a.uaFullVersion) + k("uaa", a.architecture) + k("uam", a.model) + k("uab", a.bitness);
            a.fullVersionList && (c += "&uafvl=" + encodeURIComponent(a.fullVersionList.map(function(b) {
                return encodeURIComponent(b.brand) + ";" + encodeURIComponent(b.version)
            }).join("|")));
            a.wow64 != null && (c += "&uaw=" + Number(a.wow64));
            return c.slice(1)
        };
        var r = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
        var t = function() {
            var a = google.eufsv
              , c = this;
            this.g = null;
            (a === void 0 ? 0 : a) && navigator.userAgentData && navigator.userAgentData.getHighEntropyValues && navigator.userAgentData.getHighEntropyValues("platform platformVersion uaFullVersion architecture model bitness fullVersionList wow64".split(" ")).then(function(b) {
                c.g = b
            })
        };
        t.prototype.handle = function(a) {
            var c = a.hasAttribute("data-ohref")
              , b = c ? a.getAttribute("data-ohref") : a.href;
            c || a.setAttribute("data-ohref", b);
            c = m(new l({
                url: b
            }), "ch") === void 0 ? g(b, "ch=1") : b;
            b = new l({
                url: c,
                A: this.g
            });
            a: {
                var d = b.g.co;
                if (d === "1")
                    d = "https://www.googleadservices.com/pagead/conversion/16521530460/?gad_source=1&adview_type=3";
                else if (d === "2")
                    d = "https://www.google.com/pagead/1p-conversion/16521530460/?gad_source=1&adview_type=5";
                else
                    break a;
                var f = b.g.gclid;
                f && (d += "&adview_gclid=" + f);
                navigator.sendBeacon(d, "") || v(d, !1)
            }
            a: {
                d = b.g.cce;
                if (d === "1")
                    d = 0;
                else if (d === "2")
                    d = 1;
                else {
                    d = null;
                    break a
                }
                f = g(b.i, "cc=1");
                var u = f.indexOf("?");
                d = u < 0 ? null : {
                    url: "https://www.googleadservices.com/pagead/aclk" + f.slice(u),
                    method: d
                }
            }
            d && (d.method === 0 ? navigator.sendBeacon && navigator.sendBeacon(d.url, "") : d.method === 1 && v(d.url, !0));
            w() && b.g.ase === "5" ? (b = p(b, 2)) ? (a.attributionSrc = b.j,
            b = b.l) : b = "" : b = "";
            b || (b = this.g,
            b = new l({
                url: c,
                A: b === void 0 ? null : b
            }),
            b.g.dsh === "1" || b.g.aspm !== "1" ? b = (d = p(b, 0)) ? navigator.sendBeacon ? navigator.sendBeacon(d.j, "") ? d.l : q(b, 2) : q(b, 0) : c : (b = p(b, 1)) ? (v(b.j, !0),
            b = b.l) : b = c);
            b && b !== a.href && (c = b,
            r.test(c) && (a.href = c))
        }
        ;
        function v(a, c) {
            var b = {
                keepalive: !0,
                mode: "no-cors"
            };
            c && (b.credentials = "include");
            fetch(a, b)
        }
        function x(a, c) {
            var b = m(new l({
                url: a
            }), "nis");
            return b === c ? a : b !== void 0 ? a.replace(/([?&])nis=[^&]*/, function(d, f) {
                return f + "nis=" + c
            }) : g(a, "nis=" + c)
        }
        function w() {
            var a;
            return !((a = document.featurePolicy) == null || !a.allowsFeature("attribution-reporting"))
        }
        ;var y = new t;
        google.ausb = function(a) {
            if (!a)
                return google.ml(Error("a"), !1),
                !0;
            if (a.hasAttribute("data-impdclcc"))
                try {
                    var c = a.hasAttribute("attributionsourceid") && a.hasAttribute("attributiondestination") ? "2" : a.hasAttribute("attributionsrc") ? w() ? "6" : "5" : w() ? "7" : "8";
                    var b = x(a.href, c);
                    r.test(b) && (a.href = b)
                } catch (d) {}
            a.getAttribute("data-sbv2") && y.handle(a);
            return !0
        }
        ;
    }
    ).call(this);
}
)();
(function() {
    var c = this || self;
    function d(a) {
        return a ? a.closest("A") : null
    }
    function e(a) {
        if (a = d(a.target))
            switch (a.getAttribute("data-agdh")) {
            case "arwt":
                google.arwt(a);
                break;
            case "fvd3vc":
                c.J4LCUe(a);
                break;
            case "EdKoMd":
                (0,
                google.f.LmvwCb)(a)
            }
        return !0
    }
    ;window.document.documentElement.addEventListener("mousedown", e, !0);
    window.document.documentElement.addEventListener("touchstart", e, !0);
    window.document.documentElement.addEventListener("click", function(a) {
        var b = d(a.target);
        if (b)
            switch (b.getAttribute("data-agch")) {
            case "ausb":
                google.ausb(b);
                break;
            case "HJ3bqe":
                window.YvikHb(a, b);
                break;
            case "cqUJI":
                (0,
                google.f.DfwaCb)(b)
            }
        return !0
    }, !0);
}
).call(this);
(function() {
    var t = 2500;
    (function() {
        'use strict';
        function a() {
            const c = document.querySelectorAll("link[blocking=render]");
            for (const d of c)
                d.remove()
        }
        const b = t - performance.now();
        b > 0 ? setTimeout(a, b) : a();
    }
    ).call(this);
}
)();
(function() {
    'use strict';
    var h = this || self;
    var m = h.JSON.parse
      , q = h.JSON.stringify;
    function r(a, b, c) {
        (a = a.getItem(b + ";;" + c)) ? (b = a.indexOf("_"),
        a = b < 0 ? null : m(a.substr(b + 1))) : a = null;
        return a
    }
    function t(a, b, c, d, e="m", n=!0) {
        let k = !1, g;
        try {
            if (e != "x") {
                var f = a == "s" ? window.sessionStorage : window.localStorage
                  , l = r(f, "_c", "i") || 0
                  , p = q(l + 1);
                f.setItem("_c;;i", "p:*|l:9007199254740991_" + p);
                g = l;
                p = f;
                f = b;
                l = c;
                var z = g
                  , A = q(d);
                p.setItem(f + ";;" + l, "p:" + e + "|l:" + (z + "_") + A);
                k = !0
            }
        } catch (D) {}
        n && (h.mPPkxd || (h.mPPkxd = []),
        h.mPPkxd.push([k, arguments, g]))
    }
    ;var u = [{
        g: "data-vt-d",
        types: []
    }, {
        g: "data-vt-mb",
        types: ["sb", "mb"]
    }, {
        g: "data-vt-rq",
        types: ["rq"]
    }, {
        g: "data-vt-spth",
        types: ["spth"]
    }, {
        g: "data-vt-lows",
        types: ["lows"]
    }];
    function v(a, b, c) {
        try {
            let d, e;
            a == null || (d = a.viewTransition) == null || (e = d.types) == null || e.clear();
            for (const n of b) {
                let k, g, f;
                (k = a) == null || (g = k.viewTransition) == null || (f = g.types) == null || f.add(n)
            }
        } catch (d) {
            google.ml(d, !0, {
                src: c
            })
        }
    }
    function w(a) {
        try {
            window.addEventListener("pageswap", b => {
                v(b, a, "mpa_vt-ps");
                t("s", "mpavt", "mpa-vt-types", JSON.stringify(a))
            }
            , {
                once: !0
            })
        } catch (b) {
            google.ml(b, !0, {
                src: "mpa_vt-el"
            })
        }
    }
    ;let x;
    window.addEventListener("pagereveal", async a => {
        a: {
            try {
                var b = r(window.sessionStorage, "mpavt", "mpa-vt-types");
                break a
            } catch (c) {}
            b = null
        }
        if (b) {
            b = JSON.parse(b);
            try {
                window.sessionStorage.removeItem("mpavt;;mpa-vt-types")
            } catch (c) {}
            b && v(a, b, "mpa_vt-pr")
        }
        try {
            let c;
            await (a == null ? void 0 : (c = a.viewTransition) == null ? void 0 : c.finished)
        } finally {
            y()
        }
    }
    , {
        once: !0
    });
    B();
    document.addEventListener("click", a => {
        try {
            a: {
                for (const {g: c, types: d} of u) {
                    let e;
                    if ((e = a.target) == null ? 0 : e.closest(`[${c}]`)) {
                        var b = d;
                        break a
                    }
                }
                b = []
            }
            a = b;
            a.length > 0 ? (B(),
            w(a)) : y()
        } catch (c) {
            google.ml(c, !0, {
                src: "mpa_vt-t"
            })
        }
    }
    , {
        capture: !0,
        passive: !0
    });
    function C() {
        x || (x = document.createElement("style"),
        document.head.append(x));
        return x
    }
    function y() {
        C().textContent = "@view-transition{navigation:none;}"
    }
    function B() {
        C().textContent = "@view-transition{navigation:auto;}"
    }
    ;
}
).call(this);
(function() {
    'use strict';
    try {
        window.addEventListener("pagereveal", async a => {
            try {
                const c = a.viewTransition;
                if (c) {
                    await c.ready;
                    a = [["root"], ["sb"], ["mb"], ["ubi", !0]];
                    for (const [l,d] of a)
                        f(l, d)
                }
            } catch (c) {
                google.ml(c, !0, {
                    src: "mpa_vt-c"
                })
            }
        }
        , {
            capture: !0,
            passive: !0
        })
    } catch (a) {
        google.ml(a, !0, {
            src: "mpa_vt-i"
        })
    }
    function q(a) {
        return Number(a.split("px")[0])
    }
    function f(a, c) {
        const l = `::view-transition-group(${a})`
          , d = document.getAnimations().find(r => {
            let m;
            return ((m = r.effect) == null ? void 0 : m.pseudoElement) === l
        }
        );
        if (d) {
            var n = d.effect
              , b = n.getKeyframes();
            if (b[1].width === "auto") {
                d.currentTime = d.effect.getTiming().duration;
                var e = window.getComputedStyle(document.documentElement, l);
                var g = new DOMMatrix(e.transform);
                var h = q(e.width);
                e = q(e.height);
                d.currentTime = 0
            } else
                g = new DOMMatrix(b[1].transform),
                h = q(b[1].width),
                e = q(b[1].height);
            var k = new DOMMatrix(b[0].transform)
              , p = q(b[0].height);
            h = q(b[0].width) / h;
            c = c ? p / e : h;
            var t = k.e;
            k = k.f;
            var u = g.e;
            g = g.f;
            a !== "sb" && (k + p < 0 || g + e < 0) && d.cancel();
            n.setKeyframes([{
                transform: `translate(${t}px, ${k}px) scale(${h}, ${c})`,
                easing: b[0].easing
            }, {
                transform: `translate(${u}px, ${g}px) scale(1, 1)`,
                easing: b[1].easing
            }])
        }
    }
    ;
}
).call(this);
