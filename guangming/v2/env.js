

function v(t, n) {
    this.dyn_tree = t,
        this.max_code = 0,
        this.stat_desc = n
}
N = function (t) {
    T = true
    T || (!function () {
        var t, n, a, v, b, y = Array(16);
        for (a = 0,
            v = 0; v < 28; v++)
            for (f[v] = a,
                t = 0; t < 1 << e[v]; t++)
                c[a++] = v;
        for (c[a - 1] = v,
            b = 0,
            v = 0; v < 16; v++)
            for (d[v] = b,
                t = 0; t < 1 << r[v]; t++)
                s[b++] = v;
        for (b >>= 7; v < 30; v++)
            for (d[v] = b << 7,
                t = 0; t < 1 << r[v] - 7; t++)
                s[256 + b++] = v;
        for (n = 0; n <= 15; n++)
            y[n] = 0;
        for (t = 0; t <= 143;)
            o[2 * t + 1] = 8,
                t++,
                y[8]++;
        for (; t <= 255;)
            o[2 * t + 1] = 9,
                t++,
                y[9]++;
        for (; t <= 279;)
            o[2 * t + 1] = 7,
                t++,
                y[7]++;
        for (; t <= 287;)
            o[2 * t + 1] = 8,
                t++,
                y[8]++;
        for (C(o, 287, y),
            t = 0; t < 30; t++)
            u[2 * t + 1] = 5,
                u[2 * t] = w(t, 5);
        l = new A(o, e, 257, 286, 15),
            h = new A(u, r, 0, 30, 15),
            p = new A([], i, 0, 19, 7)
    }(),
        T = !0),
        t.l_desc = new v(t.dyn_ltree, l),
        t.d_desc = new v(t.dyn_dtree, h),
        t.bl_desc = new v(t.bl_tree, p),
        t.bi_buf = 0,
        t.bi_valid = 0,
        x(t)
}


var tx = function (t) {
    if (!t)
        return 1;
    var n = t.state;
    return n && n.strm === t && (42 === n.status || 57 === n.status || 69 === n.status || 73 === n.status || 91 === n.status || 103 === n.status || 113 === n.status || 666 === n.status) ? 0 : 1
}
tk = function (t) {
    tr = 2
    if (tx(t))
        return ta(t, Q);
    t.total_in = t.total_out = 0,
        t.data_type = tr;
    var n = t.state;
    return n.pending = 0,
        n.pending_out = 0,
        n.wrap < 0 && (n.wrap = -n.wrap),
        n.status = 2 === n.wrap ? 57 : n.wrap ? 42 : 113,
        t.adler = +(2 !== n.wrap),
        n.last_flush = -2,
        N(n),
        G
}
t_ = function (t) {
    var n, e = tk(t);
    return e === G && ((n = t.state).window_size = 2 * n.w_size,
        tu(n.head),
        n.max_lazy_match = tw[n.level].max_lazy,
        n.good_match = tw[n.level].good_length,
        n.nice_match = tw[n.level].nice_length,
        n.max_chain_length = tw[n.level].max_chain,
        n.strstart = 0,
        n.block_start = 0,
        n.lookahead = 0,
        n.insert = 0,
        n.match_length = n.prev_length = 2,
        n.match_available = 0,
        n.ins_h = 0),
        e
}

tu = function (t) {
    for (var n = t.length; --n >= 0;)
        t[n] = 0
}
function tC() {
    this.strm = null,
        this.status = 0,
        this.pending_buf = null,
        this.pending_buf_size = 0,
        this.pending_out = 0,
        this.pending = 0,
        this.wrap = 0,
        this.gzhead = null,
        this.gzindex = 0,
        this.method = ti,
        this.last_flush = -1,
        this.w_size = 0,
        this.w_bits = 0,
        this.w_mask = 0,
        this.window = null,
        this.window_size = 0,
        this.prev = null,
        this.head = null,
        this.ins_h = 0,
        this.hash_size = 0,
        this.hash_bits = 0,
        this.hash_mask = 0,
        this.hash_shift = 0,
        this.block_start = 0,
        this.match_length = 0,
        this.prev_match = 0,
        this.match_available = 0,
        this.strstart = 0,
        this.match_start = 0,
        this.lookahead = 0,
        this.prev_length = 0,
        this.max_chain_length = 0,
        this.max_lazy_match = 0,
        this.level = 0,
        this.strategy = 0,
        this.good_match = 0,
        this.nice_match = 0,
        this.dyn_ltree = new Uint16Array(1146),
        this.dyn_dtree = new Uint16Array(122),
        this.bl_tree = new Uint16Array(78),
        tu(this.dyn_ltree),
        tu(this.dyn_dtree),
        tu(this.bl_tree),
        this.l_desc = null,
        this.d_desc = null,
        this.bl_desc = null,
        this.bl_count = new Uint16Array(16),
        this.heap = new Uint16Array(573),
        tu(this.heap),
        this.heap_len = 0,
        this.heap_max = 0,
        this.depth = new Uint16Array(573),
        tu(this.depth),
        this.sym_buf = 0,
        this.lit_bufsize = 0,
        this.sym_next = 0,
        this.sym_end = 0,
        this.opt_len = 0,
        this.static_len = 0,
        this.matches = 0,
        this.insert = 0,
        this.bi_buf = 0,
        this.bi_valid = 0
}


tE = function (t, n, e, r, i, a) {
    W = -1
    ti = 8
    te = 4
    if (!t)
        return Q;
    var o = 1;
    if (n === W && (n = 6),
        r < 0 ? (o = 0,
            r = -r) : r > 15 && (o = 2,
                r -= 16),
        i < 1 || i > 9 || e !== ti || r < 8 || r > 15 || n < 0 || n > 9 || a < 0 || a > te || 8 === r && 1 !== o)
        return ta(t, Q);
    8 === r && (r = 9);
    var u = new tC;
    return t.state = u,
        u.strm = t,
        u.status = 42,
        u.wrap = o,
        u.gzhead = null,
        u.w_bits = r,
        u.w_size = 1 << u.w_bits,
        u.w_mask = u.w_size - 1,
        u.hash_bits = i + 7,
        u.hash_size = 1 << u.hash_bits,
        u.hash_mask = u.hash_size - 1,
        u.hash_shift = ~~((u.hash_bits + 3 - 1) / 3),
        u.window = new Uint8Array(2 * u.w_size),
        u.head = new Uint16Array(u.hash_size),
        u.prev = new Uint16Array(u.w_size),
        u.lit_bufsize = 1 << i + 6,
        u.pending_buf_size = 4 * u.lit_bufsize,
        u.pending_buf = new Uint8Array(u.pending_buf_size),
        u.sym_buf = u.lit_bufsize,
        u.sym_end = 3 * (u.lit_bufsize - 1),
        u.level = n,
        u.strategy = a,
        u.method = e,
        t_(t)
}
tR = function () {
    this.input = null,
        this.next_in = 0,
        this.avail_in = 0,
        this.total_in = 0,
        this.output = null,
        this.next_out = 0,
        this.avail_out = 0,
        this.total_out = 0,
        this.msg = "",
        this.state = null,
        this.data_type = 2,
        this.adler = 0
}
function tB(t) {
    return typeof t
}
function tT(t) {
    for (var n = Array.prototype.slice.call(arguments, 1); n.length;) {
        var e = n.shift();
        if (e) {
            if ("object" !== tB(e))
                throw TypeError(e + "must be non-object");
            for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
        }
    }
    return t
}

Z = {}
Z.deflate = function tG(t) {
    tq = -1
    tJ = 8
    tV = 0
    this.options = tT({
        level: tq,
        method: tJ,
        chunkSize: 16384,
        windowBits: 15,
        memLevel: 8,
        strategy: tV
    }, t || {});
    var n, e, r, i = this.options;
    i.raw && i.windowBits > 0 ? i.windowBits = -i.windowBits : i.gzip && i.windowBits > 0 && i.windowBits < 16 && (i.windowBits += 16),
        this.err = 0,
        this.msg = "",
        this.ended = !1,
        this.chunks = [],
        this.strm = new tR,
        this.strm.avail_out = 0;
    var a = tE(this.strm, i.level, i.method, i.windowBits, i.memLevel, i.strategy);
    if (a !== tH)
        throw Error(U[a]);
    if (i.header && (n = this.strm,
        e = i.header,
        tx(n) || 2 !== n.state.wrap || (n.state.gzhead = e)),
        i.dictionary) {
        if (r = "string" == typeof i.dictionary ? tL(i.dictionary) : "[object ArrayBuffer]" === tP.call(i.dictionary) ? new Uint8Array(i.dictionary) : i.dictionary,
            (a = tO(this.strm, r)) !== tH)
            throw Error(U[a]);
        this._dict_set = !0
    }
}

function lzh_1(t) {
    a = new TextEncoder
    var n = a.encode(t);
    return function (t) {
        for (var n, e, r = 0, i = t.length, a = ""; r < i;)
            n = t.subarray(r, Math.min(r + 32768, i)),
                a += null == (e = window.String.fromCharCode) ? void 0 : e.apply(null, n),
                r += 32768;
        return window.btoa(a)
    }((0,
        Z.deflate)(n))
}
guiji = "6094eb0af69aad497d1dd5a5f5f4ce25{\"TrackList\":{\"mc\":\"233,422,9921, ,1\",\"tc\":\"\",\"mu\":\"254,419,10503, ,1\",\"te\":\"\",\"mp\":\"711,409,9022,1|708,409,9022,1|707,409,9023,1|704,409,9025,1|701,409,9026,1|700,409,9026,1|699,409,9027,1|696,409,9028,1|693,409,9029,1|689,409,9032,1|687,409,9033,1|684,409,9033,1|683,409,9034,1|680,409,9035,1|677,409,9037,1|676,409,9037,1|672,409,9038,1|671,409,9039,1|668,409,9040,1|665,409,9041,1|663,409,9042,1|660,409,9043,1|657,409,9044,1|656,409,9045,1|652,409,9046,1|651,409,9047,1|648,409,9048,1|644,409,9049,1|643,409,9050,1|640,409,9051,1|636,409,9052,1|633,409,9053,1|631,409,9054,1|628,409,9055,1|625,409,9056,1|623,409,9057,1|620,409,9058,1|616,409,9059,1|613,409,9060,1|611,409,9061,1|608,408,9062,1|604,408,9063,1|601,408,9064,1|599,408,9065,1|596,408,9067,1|592,408,9067,1|589,408,9068,1|587,408,9069,1|584,408,9070,1|580,408,9071,1|576,408,9072,1|573,408,9073,1|571,408,9074,1|568,408,9075,1|564,408,9076,1|561,408,9077,1|557,408,9078,1|555,408,9079,1|552,407,9080,1|548,407,9081,1|545,407,9082,1|541,406,9083,1|539,406,9084,1|536,406,9085,1|532,405,9086,1|529,405,9087,1|525,405,9088,1|523,404,9089,1|520,404,9090,1|516,404,9091,1|513,404,9092,1|511,404,9093,1|508,403,9094,1|504,403,9095,1|501,403,9096,1|499,403,9097,1|496,403,9098,1|492,403,9099,1|489,403,9100,1|488,403,9101,1|484,403,9102,1|481,403,9103,1|479,403,9104,1|476,403,9105,1|473,403,9106,1|471,403,9107,1|468,403,9108,1|467,403,9109,1|464,403,9110,1|461,403,9111,1|459,403,9112,1|456,403,9113,1|455,403,9115,1|452,403,9115,1|451,403,9116,1|448,403,9117,1|447,403,9118,1|444,403,9119,1|443,403,9120,1|440,403,9121,1|439,403,9122,1|436,403,9123,1|435,403,9124,1|433,403,9125,1|432,403,9126,1|429,403,9127,1|428,403,9128,1|427,403,9129,1|424,403,9130,1|421,403,9132,1|420,403,9133,1|417,403,9135,1|416,403,9136,1|415,403,9137,1|413,403,9138,1|412,403,9139,1|409,403,9141,1|408,403,9143,1|407,403,9144,1|405,403,9146,1|404,403,9147,1|403,403,9148,1|401,403,9149,1|400,403,9150,1|399,403,9153,1|397,403,9154,1|396,403,9155,1|396,404,9157,1|395,404,9158,1|393,404,9160,1|392,404,9161,1|392,405,9163,1|391,405,9165,1|389,407,9168,1|388,407,9170,1|387,407,9175,1|385,408,9178,1|384,409,9182,1|384,411,9186,1|383,411,9191,1|383,412,9194,1|381,412,9197,1|381,413,9198,1|381,415,9202,1|380,415,9203,1|380,416,9210,1|380,417,9214,1|380,419,9218,1|379,419,9220,1|377,419,9225,1|377,420,9227,1|376,421,9230,1|376,423,9234,1|375,423,9237,1|373,423,9240,1|373,424,9242,1|372,424,9243,1|372,425,9247,1|371,425,9249,1|369,425,9252,1|369,427,9253,1|368,427,9255,1|367,427,9259,1|365,427,9260,1|364,427,9262,1|363,427,9266,1|361,427,9267,1|360,427,9269,1|359,427,9272,1|357,427,9274,1|356,427,9275,1|355,427,9278,1|353,427,9279,1|352,427,9280,1|351,427,9283,1|349,427,9284,1|348,427,9286,1|347,427,9288,1|345,427,9289,1|344,427,9290,1|343,427,9292,1|341,427,9293,1|340,427,9294,1|339,427,9296,1|337,427,9297,1|336,427,9298,1|333,427,9300,1|332,427,9302,1|331,427,9303,1|329,427,9304,1|328,427,9305,1|327,427,9307,1|324,427,9308,1|323,427,9310,1|321,427,9311,1|320,427,9312,1|319,427,9314,1|316,427,9315,1|315,427,9317,1|313,427,9318,1|312,427,9319,1|311,427,9321,1|309,427,9322,1|308,427,9323,1|307,427,9324,1|305,427,9325,1|304,427,9326,1|303,427,9328,1|301,427,9330,1|300,427,9331,1|299,427,9333,1|297,427,9334,1|296,427,9335,1|295,427,9337,1|293,427,9339,1|292,427,9340,1|291,427,9343,1|289,427,9345,1|288,427,9346,1|287,427,9349,1|285,427,9351,1|284,427,9353,1|283,427,9358,1|281,427,9360,1|281,426,9361,1|280,426,9362,1|279,426,9367,1|277,426,9369,1|276,425,9371,1|275,425,9375,1|273,425,9377,1|272,425,9380,1|272,424,9381,1|271,424,9383,1|269,424,9385,1|268,424,9387,1|267,424,9390,1|267,423,9391,1|265,423,9392,1|264,423,9394,1|263,423,9398,1|261,423,9400,1|260,422,9402,1|259,422,9406,1|257,422,9409,1|256,422,9411,1|255,422,9418,1|253,422,9423,1|252,422,9428,1|251,422,9437,1|249,422,9441,1|248,422,9446,1|247,422,9454,1|245,422,9457,1|244,422,9461,1|243,422,9467,1|241,422,9470,1|240,422,9472,1|239,422,9477,1|237,422,9480,1|236,422,9482,1|235,422,9489,1|233,422,9542,1|234,422,10155,1|235,422,10161,1|236,422,10167,1|237,422,10173,1|238,422,10179,1|238,421,10184,1|239,421,10186,1|240,421,10196,1|241,421,10207,1|242,421,10220,1|242,420,10225,1|243,420,10287,1|244,420,10305,1|245,420,10310,1|246,420,10312,1|247,420,10315,1|248,420,10318,1|252,419,10334,1|253,419,10337,1|254,419,10410,1\",\"tmv\":\"\",\"mm\":\"233,422,9919,1|234,422,10156,1|235,422,10162,1|236,422,10168,1|237,422,10173,1|238,422,10180,1|238,421,10184,1|239,421,10187,1|240,421,10197,1|241,421,10208,1|242,421,10220,1|242,420,10225,1|243,420,10288,1|244,420,10305,1|245,420,10310,1|246,420,10312,1|247,420,10316,1|248,420,10319,1|252,419,10335,1|253,419,10337,1|254,419,10411,1|254,419,10503,1\",\"ks\":\"\",\"fi\":\"\",\"startTime\":1762067699768,\"si\":\"712,1536,695,712,680,816,864,133.5113484539948,1536\"},\"TrackStartTime\":1762067699768,\"VerifyTime\":1762067710299,\"xPos\":\"3\",\"slidePos\":\"21\",\"arg\":\"GTVBYHNoyGk7Qw==\"}"
console.log(lzh_1(guiji))