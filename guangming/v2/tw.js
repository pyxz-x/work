window = global;

!function (t) {
    "use strict";
    function e(t) {
        for (var e = t.length; --e >= 0;)
            t[e] = 0
    }
    var n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0])
        , r = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13])
        , i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7])
        , a = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15])
        , o = Array(576);
    e(o);
    var u = Array(60);
    e(u);
    var c = Array(512);
    e(c);
    var s = Array(256);
    e(s);
    var f = Array(29);
    e(f);
    var l, h, p, d = Array(30);
    function A(t, e, n, r, i) {
        this.static_tree = t,
            this.extra_bits = e,
            this.extra_base = n,
            this.elems = r,
            this.max_length = i,
            this.has_stree = t && t.length
    }
    function v(t, e) {
        this.dyn_tree = t,
            this.max_code = 0,
            this.stat_desc = e
    }
    e(d);
    var y = function (t) {
        return t < 256 ? c[t] : c[256 + (t >>> 7)]
    }
        , b = function (t, e) {
            t.pending_buf[t.pending++] = 255 & e,
                t.pending_buf[t.pending++] = e >>> 8 & 255
        }
        , g = function (t, e, n) {
            t.bi_valid > 16 - n ? (t.bi_buf |= e << t.bi_valid & 65535,
                b(t, t.bi_buf),
                t.bi_buf = e >> 16 - t.bi_valid,
                t.bi_valid += n - 16) : (t.bi_buf |= e << t.bi_valid & 65535,
                    t.bi_valid += n)
        }
        , m = function (t, e, n) {
            g(t, n[2 * e], n[2 * e + 1])
        }
        , C = function (t, e) {
            var n = 0;
            do
                n |= 1 & t,
                    t >>>= 1,
                    n <<= 1;
            while (--e > 0);
            return n >>> 1
        }
        , w = function (t, e, n) {
            var r, i, a = Array(16), o = 0;
            for (r = 1; r <= 15; r++)
                o = o + n[r - 1] << 1,
                    a[r] = o;
            for (i = 0; i <= e; i++) {
                var u = t[2 * i + 1];
                0 !== u && (t[2 * i] = C(a[u]++, u))
            }
        }
        , x = function (t) {
            var e;
            for (e = 0; e < 286; e++)
                t.dyn_ltree[2 * e] = 0;
            for (e = 0; e < 30; e++)
                t.dyn_dtree[2 * e] = 0;
            for (e = 0; e < 19; e++)
                t.bl_tree[2 * e] = 0;
            t.dyn_ltree[512] = 1,
                t.opt_len = t.static_len = 0,
                t.sym_next = t.matches = 0
        }
        , k = function (t) {
            t.bi_valid > 8 ? b(t, t.bi_buf) : t.bi_valid > 0 && (t.pending_buf[t.pending++] = t.bi_buf),
                t.bi_buf = 0,
                t.bi_valid = 0
        }
        , _ = function (t, e, n, r) {
            var i = 2 * e
                , a = 2 * n;
            return t[i] < t[a] || t[i] === t[a] && r[e] <= r[n]
        }
        , O = function (t, e, n) {
            for (var r = t.heap[n], i = n << 1; i <= t.heap_len && (i < t.heap_len && _(e, t.heap[i + 1], t.heap[i], t.depth) && i++,
                !_(e, r, t.heap[i], t.depth));)
                t.heap[n] = t.heap[i],
                    n = i,
                    i <<= 1;
            t.heap[n] = r
        }
        , E = function (t, e, i) {
            var a, o, u, c, l = 0;
            if (0 !== t.sym_next)
                do
                    a = (255 & t.pending_buf[t.sym_buf + l++]) + ((255 & t.pending_buf[t.sym_buf + l++]) << 8),
                        o = t.pending_buf[t.sym_buf + l++],
                        0 === a ? m(t, o, e) : (m(t, (u = s[o]) + 256 + 1, e),
                            0 !== (c = n[u]) && g(t, o -= f[u], c),
                            m(t, u = y(--a), i),
                            0 !== (c = r[u]) && g(t, a -= d[u], c));
                while (l < t.sym_next);
            m(t, 256, e)
        }
        , S = function (t, e) {
            var n, r, i, a = e.dyn_tree, o = e.stat_desc.static_tree, u = e.stat_desc.has_stree, c = e.stat_desc.elems, s = -1;
            for (t.heap_len = 0,
                t.heap_max = 573,
                n = 0; n < c; n++)
                0 !== a[2 * n] ? (t.heap[++t.heap_len] = s = n,
                    t.depth[n] = 0) : a[2 * n + 1] = 0;
            for (; t.heap_len < 2;)
                a[2 * (i = t.heap[++t.heap_len] = s < 2 ? ++s : 0)] = 1,
                    t.depth[i] = 0,
                    t.opt_len--,
                    u && (t.static_len -= o[2 * i + 1]);
            for (e.max_code = s,
                n = t.heap_len >> 1; n >= 1; n--)
                O(t, a, n);
            i = c;
            do
                n = t.heap[1],
                    t.heap[1] = t.heap[t.heap_len--],
                    O(t, a, 1),
                    r = t.heap[1],
                    t.heap[--t.heap_max] = n,
                    t.heap[--t.heap_max] = r,
                    a[2 * i] = a[2 * n] + a[2 * r],
                    t.depth[i] = (t.depth[n] >= t.depth[r] ? t.depth[n] : t.depth[r]) + 1,
                    a[2 * n + 1] = a[2 * r + 1] = i,
                    t.heap[1] = i++,
                    O(t, a, 1);
            while (t.heap_len >= 2);
            t.heap[--t.heap_max] = t.heap[1],
                function (t, e) {
                    var n, r, i, a, o, u, c = e.dyn_tree, s = e.max_code, f = e.stat_desc.static_tree, l = e.stat_desc.has_stree, h = e.stat_desc.extra_bits, p = e.stat_desc.extra_base, d = e.stat_desc.max_length, A = 0;
                    for (a = 0; a <= 15; a++)
                        t.bl_count[a] = 0;
                    for (c[2 * t.heap[t.heap_max] + 1] = 0,
                        n = t.heap_max + 1; n < 573; n++)
                        (a = c[2 * c[2 * (r = t.heap[n]) + 1] + 1] + 1) > d && (a = d,
                            A++),
                            c[2 * r + 1] = a,
                            r > s || (t.bl_count[a]++,
                                o = 0,
                                r >= p && (o = h[r - p]),
                                u = c[2 * r],
                                t.opt_len += u * (a + o),
                                l && (t.static_len += u * (f[2 * r + 1] + o)));
                    if (0 !== A) {
                        do {
                            for (a = d - 1; 0 === t.bl_count[a];)
                                a--;
                            t.bl_count[a]--,
                                t.bl_count[a + 1] += 2,
                                t.bl_count[d]--,
                                A -= 2
                        } while (A > 0);
                        for (a = d; 0 !== a; a--)
                            for (r = t.bl_count[a]; 0 !== r;)
                                (i = t.heap[--n]) > s || (c[2 * i + 1] !== a && (t.opt_len += (a - c[2 * i + 1]) * c[2 * i],
                                    c[2 * i + 1] = a),
                                    r--)
                    }
                }(t, e),
                w(a, s, t.bl_count)
        }
        , M = function (t, e, n) {
            var r, i, a = -1, o = e[1], u = 0, c = 7, s = 4;
            for (0 === o && (c = 138,
                s = 3),
                e[2 * (n + 1) + 1] = 65535,
                r = 0; r <= n; r++)
                i = o,
                    o = e[2 * (r + 1) + 1],
                    ++u < c && i === o || (u < s ? t.bl_tree[2 * i] += u : 0 !== i ? (i !== a && t.bl_tree[2 * i]++,
                        t.bl_tree[32]++) : u <= 10 ? t.bl_tree[34]++ : t.bl_tree[36]++,
                        u = 0,
                        a = i,
                        0 === o ? (c = 138,
                            s = 3) : i === o ? (c = 6,
                                s = 3) : (c = 7,
                                    s = 4))
        }
        , P = function (t, e, n) {
            var r, i, a = -1, o = e[1], u = 0, c = 7, s = 4;
            for (0 === o && (c = 138,
                s = 3),
                r = 0; r <= n; r++)
                if (i = o,
                    o = e[2 * (r + 1) + 1],
                    !(++u < c && i === o)) {
                    if (u < s)
                        do
                            m(t, i, t.bl_tree);
                        while (0 != --u);
                    else
                        0 !== i ? (i !== a && (m(t, i, t.bl_tree),
                            u--),
                            m(t, 16, t.bl_tree),
                            g(t, u - 3, 2)) : u <= 10 ? (m(t, 17, t.bl_tree),
                                g(t, u - 3, 3)) : (m(t, 18, t.bl_tree),
                                    g(t, u - 11, 7));
                    u = 0,
                        a = i,
                        0 === o ? (c = 138,
                            s = 3) : i === o ? (c = 6,
                                s = 3) : (c = 7,
                                    s = 4)
                }
        }
        , z = !1
        , T = function (t, e, n, r) {
            g(t, 0 + (r ? 1 : 0), 3),
                k(t),
                b(t, n),
                b(t, ~n),
                n && t.pending_buf.set(t.window.subarray(e, e + n), t.pending),
                t.pending += n
        }
        , I = function (t) {
            z || (function () {
                var t, e, a, v, y, b = Array(16);
                for (a = 0,
                    v = 0; v < 28; v++)
                    for (f[v] = a,
                        t = 0; t < 1 << n[v]; t++)
                        s[a++] = v;
                for (s[a - 1] = v,
                    y = 0,
                    v = 0; v < 16; v++)
                    for (d[v] = y,
                        t = 0; t < 1 << r[v]; t++)
                        c[y++] = v;
                for (y >>= 7; v < 30; v++)
                    for (d[v] = y << 7,
                        t = 0; t < 1 << r[v] - 7; t++)
                        c[256 + y++] = v;
                for (e = 0; e <= 15; e++)
                    b[e] = 0;
                for (t = 0; t <= 143;)
                    o[2 * t + 1] = 8,
                        t++,
                        b[8]++;
                for (; t <= 255;)
                    o[2 * t + 1] = 9,
                        t++,
                        b[9]++;
                for (; t <= 279;)
                    o[2 * t + 1] = 7,
                        t++,
                        b[7]++;
                for (; t <= 287;)
                    o[2 * t + 1] = 8,
                        t++,
                        b[8]++;
                for (w(o, 287, b),
                    t = 0; t < 30; t++)
                    u[2 * t + 1] = 5,
                        u[2 * t] = C(t, 5);
                l = new A(o, n, 257, 286, 15),
                    h = new A(u, r, 0, 30, 15),
                    p = new A([], i, 0, 19, 7)
            }(),
                z = !0),
                t.l_desc = new v(t.dyn_ltree, l),
                t.d_desc = new v(t.dyn_dtree, h),
                t.bl_desc = new v(t.bl_tree, p),
                t.bi_buf = 0,
                t.bi_valid = 0,
                x(t)
        }
        , B = T
        , U = function (t, e, n, r) {
            var i, c, s = 0;
            t.level > 0 ? (2 === t.strm.data_type && (t.strm.data_type = function (t) {
                var e, n = 4093624447;
                for (e = 0; e <= 31; e++,
                    n >>>= 1)
                    if (1 & n && 0 !== t.dyn_ltree[2 * e])
                        return 0;
                if (0 !== t.dyn_ltree[18] || 0 !== t.dyn_ltree[20] || 0 !== t.dyn_ltree[26])
                    return 1;
                for (e = 32; e < 256; e++)
                    if (0 !== t.dyn_ltree[2 * e])
                        return 1;
                return 0
            }(t)),
                S(t, t.l_desc),
                S(t, t.d_desc),
                s = function (t) {
                    var e;
                    for (M(t, t.dyn_ltree, t.l_desc.max_code),
                        M(t, t.dyn_dtree, t.d_desc.max_code),
                        S(t, t.bl_desc),
                        e = 18; e >= 3 && 0 === t.bl_tree[2 * a[e] + 1]; e--)
                        ;
                    return t.opt_len += 3 * (e + 1) + 5 + 5 + 4,
                        e
                }(t),
                i = t.opt_len + 3 + 7 >>> 3,
                (c = t.static_len + 3 + 7 >>> 3) <= i && (i = c)) : i = c = n + 5,
                n + 4 <= i && -1 !== e ? T(t, e, n, r) : 4 === t.strategy || c === i ? (g(t, 2 + (r ? 1 : 0), 3),
                    E(t, o, u)) : (g(t, 4 + (r ? 1 : 0), 3),
                        function (t, e, n, r) {
                            var i;
                            for (g(t, e - 257, 5),
                                g(t, n - 1, 5),
                                g(t, r - 4, 4),
                                i = 0; i < r; i++)
                                g(t, t.bl_tree[2 * a[i] + 1], 3);
                            P(t, t.dyn_ltree, e - 1),
                                P(t, t.dyn_dtree, n - 1)
                        }(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, s + 1),
                        E(t, t.dyn_ltree, t.dyn_dtree)),
                x(t),
                r && k(t)
        }
        , N = function (t, e, n) {
            return t.pending_buf[t.sym_buf + t.sym_next++] = e,
                t.pending_buf[t.sym_buf + t.sym_next++] = e >> 8,
                t.pending_buf[t.sym_buf + t.sym_next++] = n,
                0 === e ? t.dyn_ltree[2 * n]++ : (t.matches++,
                    e--,
                    t.dyn_ltree[2 * (s[n] + 256 + 1)]++,
                    t.dyn_dtree[2 * y(e)]++),
                t.sym_next === t.sym_end
        }
        , j = function (t) {
            var e;
            g(t, 2, 3),
                m(t, 256, o),
                16 === (e = t).bi_valid ? (b(e, e.bi_buf),
                    e.bi_buf = 0,
                    e.bi_valid = 0) : e.bi_valid >= 8 && (e.pending_buf[e.pending++] = 255 & e.bi_buf,
                        e.bi_buf >>= 8,
                        e.bi_valid -= 8)
        }
        , R = function (t, e, n, r) {
            for (var i = 65535 & t | 0, a = t >>> 16 & 65535 | 0, o = 0; 0 !== n;) {
                n -= o = n > 2e3 ? 2e3 : n;
                do
                    a = a + (i = i + e[r++] | 0) | 0;
                while (--o);
                i %= 65521,
                    a %= 65521
            }
            return i | a << 16 | 0
        }
        , F = new Uint32Array(function () {
            for (var t, e = [], n = 0; n < 256; n++) {
                t = n;
                for (var r = 0; r < 8; r++)
                    t = 1 & t ? 3988292384 ^ t >>> 1 : t >>> 1;
                e[n] = t
            }
            return e
        }())
        , L = function (t, e, n, r) {
            var i = r + n;
            t ^= -1;
            for (var a = r; a < i; a++)
                t = t >>> 8 ^ F[255 & (t ^ e[a])];
            return -1 ^ t
        }
        , q = {
            2: "need dictionary",
            1: "stream end",
            0: "",
            "-1": "file error",
            "-2": "stream error",
            "-3": "data error",
            "-4": "insufficient memory",
            "-5": "buffer error",
            "-6": "incompatible version"
        }
        , H = {
            Z_NO_FLUSH: 0,
            Z_PARTIAL_FLUSH: 1,
            Z_SYNC_FLUSH: 2,
            Z_FULL_FLUSH: 3,
            Z_FINISH: 4,
            Z_BLOCK: 5,
            Z_TREES: 6,
            Z_OK: 0,
            Z_STREAM_END: 1,
            Z_NEED_DICT: 2,
            Z_ERRNO: -1,
            Z_STREAM_ERROR: -2,
            Z_DATA_ERROR: -3,
            Z_MEM_ERROR: -4,
            Z_BUF_ERROR: -5,
            Z_NO_COMPRESSION: 0,
            Z_BEST_SPEED: 1,
            Z_BEST_COMPRESSION: 9,
            Z_DEFAULT_COMPRESSION: -1,
            Z_FILTERED: 1,
            Z_HUFFMAN_ONLY: 2,
            Z_RLE: 3,
            Z_FIXED: 4,
            Z_DEFAULT_STRATEGY: 0,
            Z_BINARY: 0,
            Z_TEXT: 1,
            Z_UNKNOWN: 2,
            Z_DEFLATED: 8
        }
        , V = B
        , D = N
        , Z = H.Z_NO_FLUSH
        , G = H.Z_PARTIAL_FLUSH
        , K = H.Z_FULL_FLUSH
        , W = H.Z_FINISH
        , Y = H.Z_BLOCK
        , Q = H.Z_OK
        , X = H.Z_STREAM_END
        , J = H.Z_STREAM_ERROR
        , $ = H.Z_DATA_ERROR
        , tt = H.Z_BUF_ERROR
        , te = H.Z_DEFAULT_COMPRESSION
        , tn = H.Z_FILTERED
        , tr = H.Z_HUFFMAN_ONLY
        , ti = H.Z_RLE
        , ta = H.Z_FIXED
        , to = H.Z_DEFAULT_STRATEGY
        , tu = H.Z_UNKNOWN
        , tc = H.Z_DEFLATED
        , ts = function (t, e) {
            return t.msg = q[e],
                e
        }
        , tf = function (t) {
            return 2 * t - (t > 4 ? 9 : 0)
        }
        , tl = function (t) {
            for (var e = t.length; --e >= 0;)
                t[e] = 0
        }
        , th = function (t) {
            var e, n, r, i = t.w_size;
            r = e = t.hash_size;
            do
                n = t.head[--r],
                    t.head[r] = n >= i ? n - i : 0;
            while (--e);
            r = e = i;
            do
                n = t.prev[--r],
                    t.prev[r] = n >= i ? n - i : 0;
            while (--e)
        }
        , tp = function (t, e, n) {
            return (e << t.hash_shift ^ n) & t.hash_mask
        }
        , td = function (t) {
            var e = t.state
                , n = e.pending;
            n > t.avail_out && (n = t.avail_out),
                0 !== n && (t.output.set(e.pending_buf.subarray(e.pending_out, e.pending_out + n), t.next_out),
                    t.next_out += n,
                    e.pending_out += n,
                    t.total_out += n,
                    t.avail_out -= n,
                    e.pending -= n,
                    0 === e.pending && (e.pending_out = 0))
        }
        , tA = function (t, e) {
            U(t, t.block_start >= 0 ? t.block_start : -1, t.strstart - t.block_start, e),
                t.block_start = t.strstart,
                td(t.strm)
        }
        , tv = function (t, e) {
            t.pending_buf[t.pending++] = e
        }
        , ty = function (t, e) {
            t.pending_buf[t.pending++] = e >>> 8 & 255,
                t.pending_buf[t.pending++] = 255 & e
        }
        , tb = function (t, e, n, r) {
            var i = t.avail_in;
            return i > r && (i = r),
                0 === i ? 0 : (t.avail_in -= i,
                    e.set(t.input.subarray(t.next_in, t.next_in + i), n),
                    1 === t.state.wrap ? t.adler = R(t.adler, e, i, n) : 2 === t.state.wrap && (t.adler = L(t.adler, e, i, n)),
                    t.next_in += i,
                    t.total_in += i,
                    i)
        }
        , tg = function (t, e) {
            var n, r, i = t.max_chain_length, a = t.strstart, o = t.prev_length, u = t.nice_match, c = t.strstart > t.w_size - 262 ? t.strstart - (t.w_size - 262) : 0, s = t.window, f = t.w_mask, l = t.prev, h = t.strstart + 258, p = s[a + o - 1], d = s[a + o];
            t.prev_length >= t.good_match && (i >>= 2),
                u > t.lookahead && (u = t.lookahead);
            do
                if (s[(n = e) + o] === d && s[n + o - 1] === p && s[n] === s[a] && s[++n] === s[a + 1]) {
                    a += 2,
                        n++;
                    do
                        ;
                    while (s[++a] === s[++n] && s[++a] === s[++n] && s[++a] === s[++n] && s[++a] === s[++n] && s[++a] === s[++n] && s[++a] === s[++n] && s[++a] === s[++n] && s[++a] === s[++n] && a < h);
                    if (r = 258 - (h - a),
                        a = h - 258,
                        r > o) {
                        if (t.match_start = e,
                            o = r,
                            r >= u)
                            break;
                        p = s[a + o - 1],
                            d = s[a + o]
                    }
                }
            while ((e = l[e & f]) > c && 0 != --i);
            return o <= t.lookahead ? o : t.lookahead
        }
        , tm = function (t) {
            var e, n, r, i = t.w_size;
            do {
                if (n = t.window_size - t.lookahead - t.strstart,
                    t.strstart >= i + (i - 262) && (t.window.set(t.window.subarray(i, i + i - n), 0),
                        t.match_start -= i,
                        t.strstart -= i,
                        t.block_start -= i,
                        t.insert > t.strstart && (t.insert = t.strstart),
                        th(t),
                        n += i),
                    0 === t.strm.avail_in)
                    break;
                if (e = tb(t.strm, t.window, t.strstart + t.lookahead, n),
                    t.lookahead += e,
                    t.lookahead + t.insert >= 3)
                    for (r = t.strstart - t.insert,
                        t.ins_h = t.window[r],
                        t.ins_h = tp(t, t.ins_h, t.window[r + 1]); t.insert && (t.ins_h = tp(t, t.ins_h, t.window[r + 3 - 1]),
                            t.prev[r & t.w_mask] = t.head[t.ins_h],
                            t.head[t.ins_h] = r,
                            r++,
                            t.insert--,
                            !(t.lookahead + t.insert < 3));)
                        ;
            } while (t.lookahead < 262 && 0 !== t.strm.avail_in)
        }
        , tC = function (t, e) {
            var n, r, i, a = t.pending_buf_size - 5 > t.w_size ? t.w_size : t.pending_buf_size - 5, o = 0, u = t.strm.avail_in;
            do {
                if (n = 65535,
                    i = t.bi_valid + 42 >> 3,
                    t.strm.avail_out < i || (i = t.strm.avail_out - i,
                        n > (r = t.strstart - t.block_start) + t.strm.avail_in && (n = r + t.strm.avail_in),
                        n > i && (n = i),
                        n < a && (0 === n && e !== W || e === Z || n !== r + t.strm.avail_in)))
                    break;
                o = e === W && n === r + t.strm.avail_in ? 1 : 0,
                    V(t, 0, 0, o),
                    t.pending_buf[t.pending - 4] = n,
                    t.pending_buf[t.pending - 3] = n >> 8,
                    t.pending_buf[t.pending - 2] = ~n,
                    t.pending_buf[t.pending - 1] = ~n >> 8,
                    td(t.strm),
                    r && (r > n && (r = n),
                        t.strm.output.set(t.window.subarray(t.block_start, t.block_start + r), t.strm.next_out),
                        t.strm.next_out += r,
                        t.strm.avail_out -= r,
                        t.strm.total_out += r,
                        t.block_start += r,
                        n -= r),
                    n && (tb(t.strm, t.strm.output, t.strm.next_out, n),
                        t.strm.next_out += n,
                        t.strm.avail_out -= n,
                        t.strm.total_out += n)
            } while (0 === o);
            return (u -= t.strm.avail_in) && (u >= t.w_size ? (t.matches = 2,
                t.window.set(t.strm.input.subarray(t.strm.next_in - t.w_size, t.strm.next_in), 0),
                t.strstart = t.w_size,
                t.insert = t.strstart) : (t.window_size - t.strstart <= u && (t.strstart -= t.w_size,
                    t.window.set(t.window.subarray(t.w_size, t.w_size + t.strstart), 0),
                    t.matches < 2 && t.matches++,
                    t.insert > t.strstart && (t.insert = t.strstart)),
                    t.window.set(t.strm.input.subarray(t.strm.next_in - u, t.strm.next_in), t.strstart),
                    t.strstart += u,
                    t.insert += u > t.w_size - t.insert ? t.w_size - t.insert : u),
                t.block_start = t.strstart),
                t.high_water < t.strstart && (t.high_water = t.strstart),
                o ? 4 : e !== Z && e !== W && 0 === t.strm.avail_in && t.strstart === t.block_start ? 2 : (i = t.window_size - t.strstart,
                    t.strm.avail_in > i && t.block_start >= t.w_size && (t.block_start -= t.w_size,
                        t.strstart -= t.w_size,
                        t.window.set(t.window.subarray(t.w_size, t.w_size + t.strstart), 0),
                        t.matches < 2 && t.matches++,
                        i += t.w_size,
                        t.insert > t.strstart && (t.insert = t.strstart)),
                    i > t.strm.avail_in && (i = t.strm.avail_in),
                    i && (tb(t.strm, t.window, t.strstart, i),
                        t.strstart += i,
                        t.insert += i > t.w_size - t.insert ? t.w_size - t.insert : i),
                    t.high_water < t.strstart && (t.high_water = t.strstart),
                    i = t.bi_valid + 42 >> 3,
                    a = (i = t.pending_buf_size - i > 65535 ? 65535 : t.pending_buf_size - i) > t.w_size ? t.w_size : i,
                    ((r = t.strstart - t.block_start) >= a || (r || e === W) && e !== Z && 0 === t.strm.avail_in && r <= i) && (n = r > i ? i : r,
                        o = e === W && 0 === t.strm.avail_in && n === r ? 1 : 0,
                        V(t, t.block_start, n, o),
                        t.block_start += n,
                        td(t.strm)),
                    o ? 3 : 1)
        }
        , tw = function (t, e) {
            for (var n, r; ;) {
                if (t.lookahead < 262) {
                    if (tm(t),
                        t.lookahead < 262 && e === Z)
                        return 1;
                    if (0 === t.lookahead)
                        break
                }
                if (n = 0,
                    t.lookahead >= 3 && (t.ins_h = tp(t, t.ins_h, t.window[t.strstart + 3 - 1]),
                        n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h],
                        t.head[t.ins_h] = t.strstart),
                    0 !== n && t.strstart - n <= t.w_size - 262 && (t.match_length = tg(t, n)),
                    t.match_length >= 3) {
                    if (r = D(t, t.strstart - t.match_start, t.match_length - 3),
                        t.lookahead -= t.match_length,
                        t.match_length <= t.max_lazy_match && t.lookahead >= 3) {
                        t.match_length--;
                        do
                            t.strstart++,
                                t.ins_h = tp(t, t.ins_h, t.window[t.strstart + 3 - 1]),
                                n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h],
                                t.head[t.ins_h] = t.strstart;
                        while (0 != --t.match_length);
                        t.strstart++
                    } else
                        t.strstart += t.match_length,
                            t.match_length = 0,
                            t.ins_h = t.window[t.strstart],
                            t.ins_h = tp(t, t.ins_h, t.window[t.strstart + 1])
                } else
                    r = D(t, 0, t.window[t.strstart]),
                        t.lookahead--,
                        t.strstart++;
                if (r && (tA(t, !1),
                    0 === t.strm.avail_out))
                    return 1
            }
            return t.insert = t.strstart < 2 ? t.strstart : 2,
                e === W ? (tA(t, !0),
                    0 === t.strm.avail_out ? 3 : 4) : t.sym_next && (tA(t, !1),
                        0 === t.strm.avail_out) ? 1 : 2
        }
        , tx = function (t, e) {
            for (var n, r, i; ;) {
                if (t.lookahead < 262) {
                    if (tm(t),
                        t.lookahead < 262 && e === Z)
                        return 1;
                    if (0 === t.lookahead)
                        break
                }
                if (n = 0,
                    t.lookahead >= 3 && (t.ins_h = tp(t, t.ins_h, t.window[t.strstart + 3 - 1]),
                        n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h],
                        t.head[t.ins_h] = t.strstart),
                    t.prev_length = t.match_length,
                    t.prev_match = t.match_start,
                    t.match_length = 2,
                    0 !== n && t.prev_length < t.max_lazy_match && t.strstart - n <= t.w_size - 262 && (t.match_length = tg(t, n),
                        t.match_length <= 5 && (t.strategy === tn || 3 === t.match_length && t.strstart - t.match_start > 4096) && (t.match_length = 2)),
                    t.prev_length >= 3 && t.match_length <= t.prev_length) {
                    i = t.strstart + t.lookahead - 3,
                        r = D(t, t.strstart - 1 - t.prev_match, t.prev_length - 3),
                        t.lookahead -= t.prev_length - 1,
                        t.prev_length -= 2;
                    do
                        ++t.strstart <= i && (t.ins_h = tp(t, t.ins_h, t.window[t.strstart + 3 - 1]),
                            n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h],
                            t.head[t.ins_h] = t.strstart);
                    while (0 != --t.prev_length);
                    if (t.match_available = 0,
                        t.match_length = 2,
                        t.strstart++,
                        r && (tA(t, !1),
                            0 === t.strm.avail_out))
                        return 1
                } else if (t.match_available) {
                    if ((r = D(t, 0, t.window[t.strstart - 1])) && tA(t, !1),
                        t.strstart++,
                        t.lookahead--,
                        0 === t.strm.avail_out)
                        return 1
                } else
                    t.match_available = 1,
                        t.strstart++,
                        t.lookahead--
            }
            return t.match_available && (r = D(t, 0, t.window[t.strstart - 1]),
                t.match_available = 0),
                t.insert = t.strstart < 2 ? t.strstart : 2,
                e === W ? (tA(t, !0),
                    0 === t.strm.avail_out ? 3 : 4) : t.sym_next && (tA(t, !1),
                        0 === t.strm.avail_out) ? 1 : 2
        };
    function tk(t, e, n, r, i) {
        this.good_length = t,
            this.max_lazy = e,
            this.nice_length = n,
            this.max_chain = r,
            this.func = i
    }
    var t_ = [new tk(0, 0, 0, 0, tC), new tk(4, 4, 8, 4, tw), new tk(4, 5, 16, 8, tw), new tk(4, 6, 32, 32, tw), new tk(4, 4, 16, 16, tx), new tk(8, 16, 32, 32, tx), new tk(8, 16, 128, 128, tx), new tk(8, 32, 128, 256, tx), new tk(32, 128, 258, 1024, tx), new tk(32, 258, 258, 4096, tx)];
    function tO() {
        this.strm = null,
            this.status = 0,
            this.pending_buf = null,
            this.pending_buf_size = 0,
            this.pending_out = 0,
            this.pending = 0,
            this.wrap = 0,
            this.gzhead = null,
            this.gzindex = 0,
            this.method = tc,
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
            tl(this.dyn_ltree),
            tl(this.dyn_dtree),
            tl(this.bl_tree),
            this.l_desc = null,
            this.d_desc = null,
            this.bl_desc = null,
            this.bl_count = new Uint16Array(16),
            this.heap = new Uint16Array(573),
            tl(this.heap),
            this.heap_len = 0,
            this.heap_max = 0,
            this.depth = new Uint16Array(573),
            tl(this.depth),
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
    var tE = function (t) {
        if (!t)
            return 1;
        var e = t.state;
        return e && e.strm === t && (42 === e.status || 57 === e.status || 69 === e.status || 73 === e.status || 91 === e.status || 103 === e.status || 113 === e.status || 666 === e.status) ? 0 : 1
    }
        , tS = function (t) {
            if (tE(t))
                return ts(t, J);
            t.total_in = t.total_out = 0,
                t.data_type = tu;
            var e = t.state;
            return e.pending = 0,
                e.pending_out = 0,
                e.wrap < 0 && (e.wrap = -e.wrap),
                e.status = 2 === e.wrap ? 57 : e.wrap ? 42 : 113,
                t.adler = 2 === e.wrap ? 0 : 1,
                e.last_flush = -2,
                I(e),
                Q
        }
        , tM = function (t) {
            var e, n = tS(t);
            return n === Q && ((e = t.state).window_size = 2 * e.w_size,
                tl(e.head),
                e.max_lazy_match = t_[e.level].max_lazy,
                e.good_match = t_[e.level].good_length,
                e.nice_match = t_[e.level].nice_length,
                e.max_chain_length = t_[e.level].max_chain,
                e.strstart = 0,
                e.block_start = 0,
                e.lookahead = 0,
                e.insert = 0,
                e.match_length = e.prev_length = 2,
                e.match_available = 0,
                e.ins_h = 0),
                n
        }
        , tP = function (t, e, n, r, i, a) {
            if (!t)
                return J;
            var o = 1;
            if (e === te && (e = 6),
                r < 0 ? (o = 0,
                    r = -r) : r > 15 && (o = 2,
                        r -= 16),
                i < 1 || i > 9 || n !== tc || r < 8 || r > 15 || e < 0 || e > 9 || a < 0 || a > ta || 8 === r && 1 !== o)
                return ts(t, J);
            8 === r && (r = 9);
            var u = new tO;
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
                u.level = e,
                u.strategy = a,
                u.method = n,
                tM(t)
        }
        , tz = {
            deflateInit2: tP,
            deflateSetHeader: function (t, e) {
                return tE(t) || 2 !== t.state.wrap ? J : (t.state.gzhead = e,
                    Q)
            },
            deflate: function (t, e) {
                if (tE(t) || e > Y || e < 0)
                    return t ? ts(t, J) : J;
                var n = t.state;
                if (!t.output || 0 !== t.avail_in && !t.input || 666 === n.status && e !== W)
                    return ts(t, 0 === t.avail_out ? tt : J);
                var r = n.last_flush;
                if (n.last_flush = e,
                    0 !== n.pending) {
                    if (td(t),
                        0 === t.avail_out)
                        return n.last_flush = -1,
                            Q
                } else if (0 === t.avail_in && tf(e) <= tf(r) && e !== W)
                    return ts(t, tt);
                if (666 === n.status && 0 !== t.avail_in)
                    return ts(t, tt);
                if (42 === n.status && 0 === n.wrap && (n.status = 113),
                    42 === n.status) {
                    var i = tc + (n.w_bits - 8 << 4) << 8;
                    if (i |= (n.strategy >= tr || n.level < 2 ? 0 : n.level < 6 ? 1 : 6 === n.level ? 2 : 3) << 6,
                        0 !== n.strstart && (i |= 32),
                        ty(n, i += 31 - i % 31),
                        0 !== n.strstart && (ty(n, t.adler >>> 16),
                            ty(n, 65535 & t.adler)),
                        t.adler = 1,
                        n.status = 113,
                        td(t),
                        0 !== n.pending)
                        return n.last_flush = -1,
                            Q
                }
                if (57 === n.status) {
                    if (t.adler = 0,
                        tv(n, 31),
                        tv(n, 139),
                        tv(n, 8),
                        n.gzhead)
                        tv(n, (n.gzhead.text ? 1 : 0) + (n.gzhead.hcrc ? 2 : 0) + (n.gzhead.extra ? 4 : 0) + (n.gzhead.name ? 8 : 0) + (n.gzhead.comment ? 16 : 0)),
                            tv(n, 255 & n.gzhead.time),
                            tv(n, n.gzhead.time >> 8 & 255),
                            tv(n, n.gzhead.time >> 16 & 255),
                            tv(n, n.gzhead.time >> 24 & 255),
                            tv(n, 9 === n.level ? 2 : n.strategy >= tr || n.level < 2 ? 4 : 0),
                            tv(n, 255 & n.gzhead.os),
                            n.gzhead.extra && n.gzhead.extra.length && (tv(n, 255 & n.gzhead.extra.length),
                                tv(n, n.gzhead.extra.length >> 8 & 255)),
                            n.gzhead.hcrc && (t.adler = L(t.adler, n.pending_buf, n.pending, 0)),
                            n.gzindex = 0,
                            n.status = 69;
                    else if (tv(n, 0),
                        tv(n, 0),
                        tv(n, 0),
                        tv(n, 0),
                        tv(n, 0),
                        tv(n, 9 === n.level ? 2 : n.strategy >= tr || n.level < 2 ? 4 : 0),
                        tv(n, 3),
                        n.status = 113,
                        td(t),
                        0 !== n.pending)
                        return n.last_flush = -1,
                            Q
                }
                if (69 === n.status) {
                    if (n.gzhead.extra) {
                        for (var a = n.pending, o = (65535 & n.gzhead.extra.length) - n.gzindex; n.pending + o > n.pending_buf_size;) {
                            var u = n.pending_buf_size - n.pending;
                            if (n.pending_buf.set(n.gzhead.extra.subarray(n.gzindex, n.gzindex + u), n.pending),
                                n.pending = n.pending_buf_size,
                                n.gzhead.hcrc && n.pending > a && (t.adler = L(t.adler, n.pending_buf, n.pending - a, a)),
                                n.gzindex += u,
                                td(t),
                                0 !== n.pending)
                                return n.last_flush = -1,
                                    Q;
                            a = 0,
                                o -= u
                        }
                        var c = new Uint8Array(n.gzhead.extra);
                        n.pending_buf.set(c.subarray(n.gzindex, n.gzindex + o), n.pending),
                            n.pending += o,
                            n.gzhead.hcrc && n.pending > a && (t.adler = L(t.adler, n.pending_buf, n.pending - a, a)),
                            n.gzindex = 0
                    }
                    n.status = 73
                }
                if (73 === n.status) {
                    if (n.gzhead.name) {
                        var s, f = n.pending;
                        do {
                            if (n.pending === n.pending_buf_size) {
                                if (n.gzhead.hcrc && n.pending > f && (t.adler = L(t.adler, n.pending_buf, n.pending - f, f)),
                                    td(t),
                                    0 !== n.pending)
                                    return n.last_flush = -1,
                                        Q;
                                f = 0
                            }
                            s = n.gzindex < n.gzhead.name.length ? 255 & n.gzhead.name.charCodeAt(n.gzindex++) : 0,
                                tv(n, s)
                        } while (0 !== s);
                        n.gzhead.hcrc && n.pending > f && (t.adler = L(t.adler, n.pending_buf, n.pending - f, f)),
                            n.gzindex = 0
                    }
                    n.status = 91
                }
                if (91 === n.status) {
                    if (n.gzhead.comment) {
                        var l, h = n.pending;
                        do {
                            if (n.pending === n.pending_buf_size) {
                                if (n.gzhead.hcrc && n.pending > h && (t.adler = L(t.adler, n.pending_buf, n.pending - h, h)),
                                    td(t),
                                    0 !== n.pending)
                                    return n.last_flush = -1,
                                        Q;
                                h = 0
                            }
                            l = n.gzindex < n.gzhead.comment.length ? 255 & n.gzhead.comment.charCodeAt(n.gzindex++) : 0,
                                tv(n, l)
                        } while (0 !== l);
                        n.gzhead.hcrc && n.pending > h && (t.adler = L(t.adler, n.pending_buf, n.pending - h, h))
                    }
                    n.status = 103
                }
                if (103 === n.status) {
                    if (n.gzhead.hcrc) {
                        if (n.pending + 2 > n.pending_buf_size && (td(t),
                            0 !== n.pending))
                            return n.last_flush = -1,
                                Q;
                        tv(n, 255 & t.adler),
                            tv(n, t.adler >> 8 & 255),
                            t.adler = 0
                    }
                    if (n.status = 113,
                        td(t),
                        0 !== n.pending)
                        return n.last_flush = -1,
                            Q
                }
                if (0 !== t.avail_in || 0 !== n.lookahead || e !== Z && 666 !== n.status) {
                    var p = 0 === n.level ? tC(n, e) : n.strategy === tr ? function (t, e) {
                        for (var n; ;) {
                            if (0 === t.lookahead && (tm(t),
                                0 === t.lookahead)) {
                                if (e === Z)
                                    return 1;
                                break
                            }
                            if (t.match_length = 0,
                                n = D(t, 0, t.window[t.strstart]),
                                t.lookahead--,
                                t.strstart++,
                                n && (tA(t, !1),
                                    0 === t.strm.avail_out))
                                return 1
                        }
                        return t.insert = 0,
                            e === W ? (tA(t, !0),
                                0 === t.strm.avail_out ? 3 : 4) : t.sym_next && (tA(t, !1),
                                    0 === t.strm.avail_out) ? 1 : 2
                    }(n, e) : n.strategy === ti ? function (t, e) {
                        for (var n, r, i, a, o = t.window; ;) {
                            if (t.lookahead <= 258) {
                                if (tm(t),
                                    t.lookahead <= 258 && e === Z)
                                    return 1;
                                if (0 === t.lookahead)
                                    break
                            }
                            if (t.match_length = 0,
                                t.lookahead >= 3 && t.strstart > 0 && (r = o[i = t.strstart - 1]) === o[++i] && r === o[++i] && r === o[++i]) {
                                a = t.strstart + 258;
                                do
                                    ;
                                while (r === o[++i] && r === o[++i] && r === o[++i] && r === o[++i] && r === o[++i] && r === o[++i] && r === o[++i] && r === o[++i] && i < a);
                                t.match_length = 258 - (a - i),
                                    t.match_length > t.lookahead && (t.match_length = t.lookahead)
                            }
                            if (t.match_length >= 3 ? (n = D(t, 1, t.match_length - 3),
                                t.lookahead -= t.match_length,
                                t.strstart += t.match_length,
                                t.match_length = 0) : (n = D(t, 0, t.window[t.strstart]),
                                    t.lookahead--,
                                    t.strstart++),
                                n && (tA(t, !1),
                                    0 === t.strm.avail_out))
                                return 1
                        }
                        return t.insert = 0,
                            e === W ? (tA(t, !0),
                                0 === t.strm.avail_out ? 3 : 4) : t.sym_next && (tA(t, !1),
                                    0 === t.strm.avail_out) ? 1 : 2
                    }(n, e) : t_[n.level].func(n, e);
                    if (3 !== p && 4 !== p || (n.status = 666),
                        1 === p || 3 === p)
                        return 0 === t.avail_out && (n.last_flush = -1),
                            Q;
                    if (2 === p && (e === G ? j(n) : e !== Y && (V(n, 0, 0, !1),
                        e === K && (tl(n.head),
                            0 === n.lookahead && (n.strstart = 0,
                                n.block_start = 0,
                                n.insert = 0))),
                        td(t),
                        0 === t.avail_out))
                        return n.last_flush = -1,
                            Q
                }
                return e !== W ? Q : n.wrap <= 0 ? X : (2 === n.wrap ? (tv(n, 255 & t.adler),
                    tv(n, t.adler >> 8 & 255),
                    tv(n, t.adler >> 16 & 255),
                    tv(n, t.adler >> 24 & 255),
                    tv(n, 255 & t.total_in),
                    tv(n, t.total_in >> 8 & 255),
                    tv(n, t.total_in >> 16 & 255),
                    tv(n, t.total_in >> 24 & 255)) : (ty(n, t.adler >>> 16),
                        ty(n, 65535 & t.adler)),
                    td(t),
                    n.wrap > 0 && (n.wrap = -n.wrap),
                    0 !== n.pending ? Q : X)
            },
            deflateEnd: function (t) {
                if (tE(t))
                    return J;
                var e = t.state.status;
                return t.state = null,
                    113 === e ? ts(t, $) : Q
            },
            deflateSetDictionary: function (t, e) {
                var n = e.length;
                if (tE(t))
                    return J;
                var r = t.state
                    , i = r.wrap;
                if (2 === i || 1 === i && 42 !== r.status || r.lookahead)
                    return J;
                if (1 === i && (t.adler = R(t.adler, e, n, 0)),
                    r.wrap = 0,
                    n >= r.w_size) {
                    0 === i && (tl(r.head),
                        r.strstart = 0,
                        r.block_start = 0,
                        r.insert = 0);
                    var a = new Uint8Array(r.w_size);
                    a.set(e.subarray(n - r.w_size, n), 0),
                        e = a,
                        n = r.w_size
                }
                var o = t.avail_in
                    , u = t.next_in
                    , c = t.input;
                for (t.avail_in = n,
                    t.next_in = 0,
                    t.input = e,
                    tm(r); r.lookahead >= 3;) {
                    var s = r.strstart
                        , f = r.lookahead - 2;
                    do
                        r.ins_h = tp(r, r.ins_h, r.window[s + 3 - 1]),
                            r.prev[s & r.w_mask] = r.head[r.ins_h],
                            r.head[r.ins_h] = s,
                            s++;
                    while (--f);
                    r.strstart = s,
                        r.lookahead = 2,
                        tm(r)
                }
                return r.strstart += r.lookahead,
                    r.block_start = r.strstart,
                    r.insert = r.lookahead,
                    r.lookahead = 0,
                    r.match_length = r.prev_length = 2,
                    r.match_available = 0,
                    t.next_in = u,
                    t.input = c,
                    t.avail_in = o,
                    r.wrap = i,
                    Q
            }
        };
    function tT(t) {
        return (tT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        }
            : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
        )(t)
    }
    var tI = function (t) {
        for (var e = Array.prototype.slice.call(arguments, 1); e.length;) {
            var n, r, i = e.shift();
            if (i) {
                if ("object" !== tT(i))
                    throw TypeError(i + "must be non-object");
                for (var a in i) {
                    ; n = i,
                        r = a,
                        Object.prototype.hasOwnProperty.call(n, r) && (t[a] = i[a])
                }
            }
        }
        return t
    }
        , tB = function (t) {
            for (var e = 0, n = 0, r = t.length; n < r; n++)
                e += t[n].length;
            for (var i = new Uint8Array(e), a = 0, o = 0, u = t.length; a < u; a++) {
                var c = t[a];
                i.set(c, o),
                    o += c.length
            }
            return i
        };
    try {
        String.fromCharCode.apply(null, new Uint8Array(1))
    } catch (t) { }
    for (var tU = new Uint8Array(256), tN = 0; tN < 256; tN++)
        tU[tN] = tN >= 252 ? 6 : tN >= 248 ? 5 : tN >= 240 ? 4 : tN >= 224 ? 3 : tN >= 192 ? 2 : 1;
    tU[254] = tU[254] = 1;
    var tj = function (t) {
        if ("function" == typeof TextEncoder && TextEncoder.prototype.encode)
            return (new TextEncoder).encode(t);
        var e, n, r, i, a, o = t.length, u = 0;
        for (i = 0; i < o; i++)
            55296 == (64512 & (n = t.charCodeAt(i))) && i + 1 < o && 56320 == (64512 & (r = t.charCodeAt(i + 1))) && (n = 65536 + (n - 55296 << 10) + (r - 56320),
                i++),
                u += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4;
        for (e = new Uint8Array(u),
            a = 0,
            i = 0; a < u; i++)
            55296 == (64512 & (n = t.charCodeAt(i))) && i + 1 < o && 56320 == (64512 & (r = t.charCodeAt(i + 1))) && (n = 65536 + (n - 55296 << 10) + (r - 56320),
                i++),
                n < 128 ? e[a++] = n : (n < 2048 ? e[a++] = 192 | n >>> 6 : (n < 65536 ? e[a++] = 224 | n >>> 12 : (e[a++] = 240 | n >>> 18,
                    e[a++] = 128 | n >>> 12 & 63),
                    e[a++] = 128 | n >>> 6 & 63),
                    e[a++] = 128 | 63 & n);
        return e
    }
        , tR = function () {
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
        , tF = Object.prototype.toString
        , tL = H.Z_NO_FLUSH
        , tq = H.Z_SYNC_FLUSH
        , tH = H.Z_FULL_FLUSH
        , tV = H.Z_FINISH
        , tD = H.Z_OK
        , tZ = H.Z_STREAM_END
        , tG = H.Z_DEFAULT_COMPRESSION
        , tK = H.Z_DEFAULT_STRATEGY
        , tW = H.Z_DEFLATED;
    function tY(t) {
        this.options = tI({
            level: tG,
            method: tW,
            chunkSize: 16384,
            windowBits: 15,
            memLevel: 8,
            strategy: tK
        }, t || {});
        var e, n = this.options;
        n.raw && n.windowBits > 0 ? n.windowBits = -n.windowBits : n.gzip && n.windowBits > 0 && n.windowBits < 16 && (n.windowBits += 16),
            this.err = 0,
            this.msg = "",
            this.ended = !1,
            this.chunks = [],
            this.strm = new tR,
            this.strm.avail_out = 0;
        var r = tz.deflateInit2(this.strm, n.level, n.method, n.windowBits, n.memLevel, n.strategy);
        if (r !== tD)
            throw Error(q[r]);
        if (n.header && tz.deflateSetHeader(this.strm, n.header),
            n.dictionary) {
            if (e = "string" == typeof n.dictionary ? tj(n.dictionary) : "[object ArrayBuffer]" === tF.call(n.dictionary) ? new Uint8Array(n.dictionary) : n.dictionary,
                (r = tz.deflateSetDictionary(this.strm, e)) !== tD)
                throw Error(q[r]);
            this._dict_set = !0
        }
    }
    function tQ(t, e) {
        var n = new tY(e);
        if (n.push(t, !0),
            n.err)
            throw n.msg || q[n.err];
        return n.result
    }
    tY.prototype.push = function (t, e) {
        var n, r, i = this.strm, a = this.options.chunkSize;
        if (this.ended)
            return !1;
        for (r = e === ~~e ? e : !0 === e ? tV : tL,
            "string" == typeof t ? i.input = tj(t) : "[object ArrayBuffer]" === tF.call(t) ? i.input = new Uint8Array(t) : i.input = t,
            i.next_in = 0,
            i.avail_in = i.input.length; ;)
            if (0 === i.avail_out && (i.output = new Uint8Array(a),
                i.next_out = 0,
                i.avail_out = a),
                (r === tq || r === tH) && i.avail_out <= 6)
                this.onData(i.output.subarray(0, i.next_out)),
                    i.avail_out = 0;
            else {
                if ((n = tz.deflate(i, r)) === tZ)
                    return i.next_out > 0 && this.onData(i.output.subarray(0, i.next_out)),
                        n = tz.deflateEnd(this.strm),
                        this.onEnd(n),
                        this.ended = !0,
                        n === tD;
                if (0 !== i.avail_out) {
                    if (r > 0 && i.next_out > 0)
                        this.onData(i.output.subarray(0, i.next_out)),
                            i.avail_out = 0;
                    else if (0 === i.avail_in)
                        break
                } else
                    this.onData(i.output)
            }
        return !0
    }
        ,
        tY.prototype.onData = function (t) {
            this.chunks.push(t)
        }
        ,
        tY.prototype.onEnd = function (t) {
            t === tD && (this.result = tB(this.chunks)),
                this.chunks = [],
                this.err = t,
                this.msg = this.strm.msg
        }
        ;
    var tX = function (t, e) {
        return (e = e || {}).raw = !0,
            tQ(t, e)
    }
        , tJ = function (t, e) {
            return (e = e || {}).gzip = !0,
                tQ(t, e)
        };
    window.tQ = tQ;
    // t.Deflate = tY,
    //     t.constants = H,
    //     t.default = {
    //         Deflate: tY,
    //         deflate: tQ,
    //         deflateRaw: tX,
    //         gzip: tJ,
    //         constants: H
    //     },
    //     t.deflate = tQ,
    //     t.deflateRaw = tX,
    //     t.gzip = tJ,
    //     Object.defineProperty(t, "__esModule", {
    //         value: !0
    //     })
}()

function encrypt_mouse(m){
    let t = window.tQ(new Uint8Array(m.split('').map(char => char.charCodeAt(0))))
    for (var e, n, r = 0, i = t.length, a = ""; r < i; )
        e = t.subarray(r, Math.min(r + 32768, i)),
        a += null === (n = window.String.fromCharCode) || void 0 === n ? void 0 : n.apply(null, e),
        r += 32768; 
    return btoa(a)
}
guiji = 'a1773eb8e2234dda41d2beba939817d7{"TrackList":{"mc":"76,510,827, ,1","tc":"","mu":"151,507,1018, ,1","te":"","mp":"394,459,176,1|375,463,184,1|366,464,193,1|365,462,199,1|368,459,207,1|369,458,215,1|370,457,223,1|370,457,234,1|373,457,357,1|375,457,360,1|373,457,368,1|366,457,377,1|355,458,387,1|339,459,396,1|320,462,400,1|298,466,407,1|274,472,416,1|249,478,424,1|225,484,435,1|201,490,439,1|180,494,447,1|161,499,455,1|144,503,463,1|130,505,475,1|118,508,480,1|109,511,488,1|103,513,495,1|100,515,505,1|98,516,515,1|98,517,519,1|98,518,527,1|98,518,535,1|100,520,544,1|100,520,554,1|100,521,600,1|98,523,608,1|95,524,616,1|91,525,625,1|87,526,635,1|82,527,640,1|80,527,647,1|76,526,656,1|75,525,665,1|74,524,674,1|73,522,679,1|73,520,687,1|73,518,697,1|73,516,704,1|73,514,715,1|74,512,719,1|76,511,727,1|76,510,735,1|78,509,848,1|80,509,855,1|82,509,864,1|86,508,874,1|91,507,879,1|97,507,888,1|103,507,896,1|111,507,904,1|119,507,914,1|127,507,919,1|134,507,928,1|140,507,935,1|145,507,945,1|148,507,951,1|150,507,959,1|150,507,967,1|151,507,975,1","tmv":"","mm":"76,510,827,1|78,509,848,1|80,509,856,1|82,509,864,1|86,508,874,1|91,507,879,1|97,507,888,1|103,507,896,1|111,507,904,1|119,507,914,1|127,507,919,1|134,507,928,1|140,507,936,1|145,507,945,1|148,507,951,1|150,507,959,1|150,507,967,1|151,507,975,1|151,507,1018,1","ks":"","fi":"","startTime":1762148273607,"si":"417,1920,862,417,847,983,1080,99.50248756218906,1686"},"TrackStartTime":1762148273607,"VerifyTime":1762148274628,"xPos":"26","slidePos":"75","arg":"MzNbFAlwXAg5fw=="}'

// console.log(encrypt_mouse(guiji))
module.exports = {
    encrypt_mouse: encrypt_mouse
}