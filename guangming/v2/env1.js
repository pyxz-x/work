window = global;



function n(t) {
    for (var n = t.length; --n >= 0;)
        t[n] = 0
}
var e = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0])
    , r = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13])
    , i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7])
    , a = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15])
    , o = Array(576);
n(o);
var u = Array(60);
n(u);
var s = Array(512);
n(s);
var c = Array(256);
n(c);
var f = Array(29);
n(f);
var l, h, p, d = Array(30);
T = !1
U = {
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
var D = {
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
F = function (t, n, e) {
    return t.pending_buf[t.sym_buf + t.sym_next++] = n,
        t.pending_buf[t.sym_buf + t.sym_next++] = n >> 8,
        t.pending_buf[t.sym_buf + t.sym_next++] = e,
        0 === n ? t.dyn_ltree[2 * e]++ : (t.matches++,
            n--,
            t.dyn_ltree[2 * (c[e] + 256 + 1)]++,
            t.dyn_dtree[2 * b(n)]++),
        t.sym_next === t.sym_end
}
var H = D.Z_NO_FLUSH
var K = D.Z_PARTIAL_FLUSH
var q = D.Z_FULL_FLUSH
var V = D.Z_FINISH
var J = D.Z_BLOCK
var G = D.Z_OK
var Z = D.Z_STREAM_END
var Q = D.Z_STREAM_ERROR
var X = D.Z_DATA_ERROR
var Y = D.Z_BUF_ERROR
var W = D.Z_DEFAULT_COMPRESSION
var $ = D.Z_FILTERED
var tt = D.Z_HUFFMAN_ONLY
var tn = D.Z_RLE
var te = D.Z_FIXED
var tr = (D.Z_DEFAULT_STRATEGY,
    D.Z_UNKNOWN)
var ti = D.Z_DEFLATED
function v(t, n) {
    this.dyn_tree = t,
        this.max_code = 0,
        this.stat_desc = n
}
x = function (t) {
    var n;
    for (n = 0; n < 286; n++)
        t.dyn_ltree[2 * n] = 0;
    for (n = 0; n < 30; n++)
        t.dyn_dtree[2 * n] = 0;
    for (n = 0; n < 19; n++)
        t.bl_tree[2 * n] = 0;
    t.dyn_ltree[512] = 1,
        t.opt_len = t.static_len = 0,
        t.sym_next = t.matches = 0
}
w = function (t, n) {
    var e = 0;
    do
        e |= 1 & t,
            t >>>= 1,
            e <<= 1;
    while (--n > 0);
    return e >>> 1
}
C = function (t, n, e) {
    var r, i, a = Array(16), o = 0;
    for (r = 1; r <= 15; r++)
        o = o + e[r - 1] << 1,
            a[r] = o;
    for (i = 0; i <= n; i++) {
        var u = t[2 * i + 1];
        0 !== u && (t[2 * i] = w(a[u]++, u))
    }
}
function A(t, n, e, r, i) {
    this.static_tree = t,
        this.extra_bits = n,
        this.extra_base = e,
        this.elems = r,
        this.max_length = i,
        this.has_stree = t && t.length
}
N = function (t) {
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
tb = function (t, n) {
    var e, r, i, a = t.pending_buf_size - 5 > t.w_size ? t.w_size : t.pending_buf_size - 5, o = 0, u = t.strm.avail_in;
    do {
        if (e = 65535,
            i = t.bi_valid + 42 >> 3,
            t.strm.avail_out < i || (i = t.strm.avail_out - i,
                e > (r = t.strstart - t.block_start) + t.strm.avail_in && (e = r + t.strm.avail_in),
                e > i && (e = i),
                e < a && (0 === e && n !== V || n === H || e !== r + t.strm.avail_in)))
            break;
        o = +(n === V && e === r + t.strm.avail_in),
            M(t, 0, 0, o),
            t.pending_buf[t.pending - 4] = e,
            t.pending_buf[t.pending - 3] = e >> 8,
            t.pending_buf[t.pending - 2] = ~e,
            t.pending_buf[t.pending - 1] = ~e >> 8,
            tf(t.strm),
            r && (r > e && (r = e),
                t.strm.output.set(t.window.subarray(t.block_start, t.block_start + r), t.strm.next_out),
                t.strm.next_out += r,
                t.strm.avail_out -= r,
                t.strm.total_out += r,
                t.block_start += r,
                e -= r),
            e && (td(t.strm, t.strm.output, t.strm.next_out, e),
                t.strm.next_out += e,
                t.strm.avail_out -= e,
                t.strm.total_out += e)
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
        o ? 4 : n !== H && n !== V && 0 === t.strm.avail_in && t.strstart === t.block_start ? 2 : (i = t.window_size - t.strstart,
            t.strm.avail_in > i && t.block_start >= t.w_size && (t.block_start -= t.w_size,
                t.strstart -= t.w_size,
                t.window.set(t.window.subarray(t.w_size, t.w_size + t.strstart), 0),
                t.matches < 2 && t.matches++,
                i += t.w_size,
                t.insert > t.strstart && (t.insert = t.strstart)),
            i > t.strm.avail_in && (i = t.strm.avail_in),
            i && (td(t.strm, t.window, t.strstart, i),
                t.strstart += i,
                t.insert += i > t.w_size - t.insert ? t.w_size - t.insert : i),
            t.high_water < t.strstart && (t.high_water = t.strstart),
            i = t.bi_valid + 42 >> 3,
            a = (i = t.pending_buf_size - i > 65535 ? 65535 : t.pending_buf_size - i) > t.w_size ? t.w_size : i,
            ((r = t.strstart - t.block_start) >= a || (r || n === V) && n !== H && 0 === t.strm.avail_in && r <= i) && (e = r > i ? i : r,
                o = +(n === V && 0 === t.strm.avail_in && e === r),
                M(t, t.block_start, e, o),
                t.block_start += e,
                tf(t.strm)),
            o ? 3 : 1)
}
ty = function (t, n) {
    for (var e, r; ;) {
        if (t.lookahead < 262) {
            if (tv(t),
                t.lookahead < 262 && n === H)
                return 1;
            if (0 === t.lookahead)
                break
        }
        if (e = 0,
            t.lookahead >= 3 && (t.ins_h = tc(t, t.ins_h, t.window[t.strstart + 3 - 1]),
                e = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h],
                t.head[t.ins_h] = t.strstart),
            0 !== e && t.strstart - e <= t.w_size - 262 && (t.match_length = tA(t, e)),
            t.match_length >= 3)
            if (r = F(t, t.strstart - t.match_start, t.match_length - 3),
                t.lookahead -= t.match_length,
                t.match_length <= t.max_lazy_match && t.lookahead >= 3) {
                t.match_length--;
                do
                    t.strstart++,
                        t.ins_h = tc(t, t.ins_h, t.window[t.strstart + 3 - 1]),
                        e = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h],
                        t.head[t.ins_h] = t.strstart;
                while (0 != --t.match_length);
                t.strstart++
            } else
                t.strstart += t.match_length,
                    t.match_length = 0,
                    t.ins_h = t.window[t.strstart],
                    t.ins_h = tc(t, t.ins_h, t.window[t.strstart + 1]);
        else
            r = F(t, 0, t.window[t.strstart]),
                t.lookahead--,
                t.strstart++;
        if (r && (tl(t, !1),
            0 === t.strm.avail_out))
            return 1
    }
    return t.insert = t.strstart < 2 ? t.strstart : 2,
        n === V ? (tl(t, !0),
            0 === t.strm.avail_out ? 3 : 4) : t.sym_next && (tl(t, !1),
                0 === t.strm.avail_out) ? 1 : 2
}
R = function (t, n, e, r) {
    for (var i = 65535 & t, a = t >>> 16 & 65535, o = 0; 0 !== e;) {
        e -= o = e > 2e3 ? 2e3 : e;
        do
            a = a + (i = i + n[r++] | 0) | 0;
        while (--o);
        i %= 65521,
            a %= 65521
    }
    return i | a << 16
}
td = function (t, n, e, r) {
    var i = t.avail_in;
    return i > r && (i = r),
        0 === i ? 0 : (t.avail_in -= i,
            n.set(t.input.subarray(t.next_in, t.next_in + i), e),
            1 === t.state.wrap ? t.adler = R(t.adler, n, i, e) : 2 === t.state.wrap && (t.adler = j(t.adler, n, i, e)),
            t.next_in += i,
            t.total_in += i,
            i)
}
tc = function (t, n, e) {
    return (n << t.hash_shift ^ e) & t.hash_mask
}
tv = function (t) {
    var n, e, r, i = t.w_size;
    do {
        if (e = t.window_size - t.lookahead - t.strstart,
            t.strstart >= i + (i - 262) && (t.window.set(t.window.subarray(i, i + i - e), 0),
                t.match_start -= i,
                t.strstart -= i,
                t.block_start -= i,
                t.insert > t.strstart && (t.insert = t.strstart),
                ts(t),
                e += i),
            0 === t.strm.avail_in)
            break;
        if (n = td(t.strm, t.window, t.strstart + t.lookahead, e),
            t.lookahead += n,
            t.lookahead + t.insert >= 3)
            for (r = t.strstart - t.insert,
                t.ins_h = t.window[r],
                t.ins_h = tc(t, t.ins_h, t.window[r + 1]); t.insert && (t.ins_h = tc(t, t.ins_h, t.window[r + 3 - 1]),
                    t.prev[r & t.w_mask] = t.head[t.ins_h],
                    t.head[t.ins_h] = r,
                    r++,
                    t.insert--,
                    !(t.lookahead + t.insert < 3));)
                ;
    } while (t.lookahead < 262 && 0 !== t.strm.avail_in)
}
var b = function (t) {
    return t < 256 ? s[t] : s[256 + (t >>> 7)]
}
_ = function (t, n, e, r) {
    var i = 2 * n
        , a = 2 * e;
    return t[i] < t[a] || t[i] === t[a] && r[n] <= r[e]
}
E = function (t, n, e) {
    for (var r = t.heap[e], i = e << 1; i <= t.heap_len && (i < t.heap_len && _(n, t.heap[i + 1], t.heap[i], t.depth) && i++,
        !_(n, r, t.heap[i], t.depth));)
        t.heap[e] = t.heap[i],
            e = i,
            i <<= 1;
    t.heap[e] = r
}
z = function (t, n) {
    var e, r, i, a = n.dyn_tree, o = n.stat_desc.static_tree, u = n.stat_desc.has_stree, s = n.stat_desc.elems, c = -1;
    for (t.heap_len = 0,
        t.heap_max = 573,
        e = 0; e < s; e++)
        0 !== a[2 * e] ? (t.heap[++t.heap_len] = c = e,
            t.depth[e] = 0) : a[2 * e + 1] = 0;
    for (; t.heap_len < 2;)
        a[2 * (i = t.heap[++t.heap_len] = c < 2 ? ++c : 0)] = 1,
            t.depth[i] = 0,
            t.opt_len--,
            u && (t.static_len -= o[2 * i + 1]);
    for (n.max_code = c,
        e = t.heap_len >> 1; e >= 1; e--)
        E(t, a, e);
    i = s;
    do
        e = t.heap[1],
            t.heap[1] = t.heap[t.heap_len--],
            E(t, a, 1),
            r = t.heap[1],
            t.heap[--t.heap_max] = e,
            t.heap[--t.heap_max] = r,
            a[2 * i] = a[2 * e] + a[2 * r],
            t.depth[i] = (t.depth[e] >= t.depth[r] ? t.depth[e] : t.depth[r]) + 1,
            a[2 * e + 1] = a[2 * r + 1] = i,
            t.heap[1] = i++,
            E(t, a, 1);
    while (t.heap_len >= 2);
    t.heap[--t.heap_max] = t.heap[1],
        function (t, n) {
            var e, r, i, a, o, u, s = n.dyn_tree, c = n.max_code, f = n.stat_desc.static_tree, l = n.stat_desc.has_stree, h = n.stat_desc.extra_bits, p = n.stat_desc.extra_base, d = n.stat_desc.max_length, A = 0;
            for (a = 0; a <= 15; a++)
                t.bl_count[a] = 0;
            for (s[2 * t.heap[t.heap_max] + 1] = 0,
                e = t.heap_max + 1; e < 573; e++)
                (a = s[2 * s[2 * (r = t.heap[e]) + 1] + 1] + 1) > d && (a = d,
                    A++),
                    s[2 * r + 1] = a,
                    r > c || (t.bl_count[a]++,
                        o = 0,
                        r >= p && (o = h[r - p]),
                        u = s[2 * r],
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
                        (i = t.heap[--e]) > c || (s[2 * i + 1] !== a && (t.opt_len += (a - s[2 * i + 1]) * s[2 * i],
                            s[2 * i + 1] = a),
                            r--)
            }
        }(t, n),
        C(a, c, t.bl_count)
}
O = function (t, n, e) {
    var r, i, a = -1, o = n[1], u = 0, s = 7, c = 4;
    for (0 === o && (s = 138,
        c = 3),
        n[2 * (e + 1) + 1] = 65535,
        r = 0; r <= e; r++)
        i = o,
            o = n[2 * (r + 1) + 1],
            ++u < s && i === o || (u < c ? t.bl_tree[2 * i] += u : 0 !== i ? (i !== a && t.bl_tree[2 * i]++,
                t.bl_tree[32]++) : u <= 10 ? t.bl_tree[34]++ : t.bl_tree[36]++,
                u = 0,
                a = i,
                0 === o ? (s = 138,
                    c = 3) : i === o ? (s = 6,
                        c = 3) : (s = 7,
                            c = 4))
}
y = function (t, n) {
    t.pending_buf[t.pending++] = 255 & n,
        t.pending_buf[t.pending++] = n >>> 8 & 255
}
m = function (t, n, e) {
    t.bi_valid > 16 - e ? (t.bi_buf |= n << t.bi_valid & 65535,
        y(t, t.bi_buf),
        t.bi_buf = n >> 16 - t.bi_valid,
        t.bi_valid += e - 16) : (t.bi_buf |= n << t.bi_valid & 65535,
            t.bi_valid += e)
}
g = function (t, n, e) {
    m(t, e[2 * n], e[2 * n + 1])
}
S = function (t, n, i) {
    var a, o, u, s, l = 0;
    if (0 !== t.sym_next)
        do
            a = (255 & t.pending_buf[t.sym_buf + l++]) + ((255 & t.pending_buf[t.sym_buf + l++]) << 8),
                o = t.pending_buf[t.sym_buf + l++],
                0 === a ? g(t, o, n) : (g(t, (u = c[o]) + 256 + 1, n),
                    0 !== (s = e[u]) && m(t, o -= f[u], s),
                    g(t, u = b(--a), i),
                    0 !== (s = r[u]) && m(t, a -= d[u], s));
        while (l < t.sym_next);
    g(t, 256, n)
}
B = function (t, n, e) {
    var r, i, a = -1, o = n[1], u = 0, s = 7, c = 4;
    for (0 === o && (s = 138,
        c = 3),
        r = 0; r <= e; r++)
        if (i = o,
            o = n[2 * (r + 1) + 1],
            !(++u < s && i === o)) {
            if (u < c)
                do
                    g(t, i, t.bl_tree);
                while (0 != --u);
            else
                0 !== i ? (i !== a && (g(t, i, t.bl_tree),
                    u--),
                    g(t, 16, t.bl_tree),
                    m(t, u - 3, 2)) : u <= 10 ? (g(t, 17, t.bl_tree),
                        m(t, u - 3, 3)) : (g(t, 18, t.bl_tree),
                            m(t, u - 11, 7));
            u = 0,
                a = i,
                0 === o ? (s = 138,
                    c = 3) : i === o ? (s = 6,
                        c = 3) : (s = 7,
                            c = 4)
        }
}
k = function (t) {
    t.bi_valid > 8 ? y(t, t.bi_buf) : t.bi_valid > 0 && (t.pending_buf[t.pending++] = t.bi_buf),
        t.bi_buf = 0,
        t.bi_valid = 0
}
I = function (t, n, e, r) {
    var i, s, c = 0;
    t.level > 0 ? (2 === t.strm.data_type && (t.strm.data_type = function (t) {
        var n, e = 0xf3ffc07f;
        for (n = 0; n <= 31; n++,
            e >>>= 1)
            if (1 & e && 0 !== t.dyn_ltree[2 * n])
                return 0;
        if (0 !== t.dyn_ltree[18] || 0 !== t.dyn_ltree[20] || 0 !== t.dyn_ltree[26])
            return 1;
        for (n = 32; n < 256; n++)
            if (0 !== t.dyn_ltree[2 * n])
                return 1;
        return 0
    }(t)),
        z(t, t.l_desc),
        z(t, t.d_desc),
        c = function (t) {
            var n;
            for (O(t, t.dyn_ltree, t.l_desc.max_code),
                O(t, t.dyn_dtree, t.d_desc.max_code),
                z(t, t.bl_desc),
                n = 18; n >= 3 && 0 === t.bl_tree[2 * a[n] + 1]; n--)
                ;
            return t.opt_len += 3 * (n + 1) + 5 + 5 + 4,
                n
        }(t),
        i = t.opt_len + 3 + 7 >>> 3,
        (s = t.static_len + 3 + 7 >>> 3) <= i && (i = s)) : i = s = e + 5,
        e + 4 <= i && -1 !== n ? M(t, n, e, r) : 4 === t.strategy || s === i ? (m(t, 2 + +!!r, 3),
            S(t, o, u)) : (m(t, 4 + +!!r, 3),
                function (t, n, e, r) {
                    var i;
                    for (m(t, n - 257, 5),
                        m(t, e - 1, 5),
                        m(t, r - 4, 4),
                        i = 0; i < r; i++)
                        m(t, t.bl_tree[2 * a[i] + 1], 3);
                    B(t, t.dyn_ltree, n - 1),
                        B(t, t.dyn_dtree, e - 1)
                }(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, c + 1),
                S(t, t.dyn_ltree, t.dyn_dtree)),
        x(t),
        r && k(t)
}
tl = function (t, n) {
    I(t, t.block_start >= 0 ? t.block_start : -1, t.strstart - t.block_start, n),
        t.block_start = t.strstart,
        tf(t.strm)
}
tA = function (t, n) {
    var e, r, i = t.max_chain_length, a = t.strstart, o = t.prev_length, u = t.nice_match, s = t.strstart > t.w_size - 262 ? t.strstart - (t.w_size - 262) : 0, c = t.window, f = t.w_mask, l = t.prev, h = t.strstart + 258, p = c[a + o - 1], d = c[a + o];
    t.prev_length >= t.good_match && (i >>= 2),
        u > t.lookahead && (u = t.lookahead);
    do
        if (c[(e = n) + o] === d && c[e + o - 1] === p && c[e] === c[a] && c[++e] === c[a + 1]) {
            a += 2,
                e++;
            do
                ;
            while (c[++a] === c[++e] && c[++a] === c[++e] && c[++a] === c[++e] && c[++a] === c[++e] && c[++a] === c[++e] && c[++a] === c[++e] && c[++a] === c[++e] && c[++a] === c[++e] && a < h);
            if (r = 258 - (h - a),
                a = h - 258,
                r > o) {
                if (t.match_start = n,
                    o = r,
                    r >= u)
                    break;
                p = c[a + o - 1],
                    d = c[a + o]
            }
        }
    while ((n = l[n & f]) > s && 0 != --i);
    return o <= t.lookahead ? o : t.lookahead
}
tm = function (t, n) {
    for (var e, r, i; ;) {
        if (t.lookahead < 262) {
            if (tv(t),
                t.lookahead < 262 && n === H)
                return 1;
            if (0 === t.lookahead)
                break
        }
        if (e = 0,
            t.lookahead >= 3 && (t.ins_h = tc(t, t.ins_h, t.window[t.strstart + 3 - 1]),
                e = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h],
                t.head[t.ins_h] = t.strstart),
            t.prev_length = t.match_length,
            t.prev_match = t.match_start,
            t.match_length = 2,
            0 !== e && t.prev_length < t.max_lazy_match && t.strstart - e <= t.w_size - 262 && (t.match_length = tA(t, e),
                t.match_length <= 5 && (t.strategy === $ || 3 === t.match_length && t.strstart - t.match_start > 4096) && (t.match_length = 2)),
            t.prev_length >= 3 && t.match_length <= t.prev_length) {
            i = t.strstart + t.lookahead - 3,
                r = F(t, t.strstart - 1 - t.prev_match, t.prev_length - 3),
                t.lookahead -= t.prev_length - 1,
                t.prev_length -= 2;
            do
                ++t.strstart <= i && (t.ins_h = tc(t, t.ins_h, t.window[t.strstart + 3 - 1]),
                    e = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h],
                    t.head[t.ins_h] = t.strstart);
            while (0 != --t.prev_length);
            if (t.match_available = 0,
                t.match_length = 2,
                t.strstart++,
                r && (tl(t, !1),
                    0 === t.strm.avail_out))
                return 1
        } else if (t.match_available) {
            if ((r = F(t, 0, t.window[t.strstart - 1])) && tl(t, !1),
                t.strstart++,
                t.lookahead--,
                0 === t.strm.avail_out)
                return 1
        } else
            t.match_available = 1,
                t.strstart++,
                t.lookahead--
    }
    return t.match_available && (r = F(t, 0, t.window[t.strstart - 1]),
        t.match_available = 0),
        t.insert = t.strstart < 2 ? t.strstart : 2,
        n === V ? (tl(t, !0),
            0 === t.strm.avail_out ? 3 : 4) : t.sym_next && (tl(t, !1),
                0 === t.strm.avail_out) ? 1 : 2
};
function tg(t, n, e, r, i) {
    this.good_length = t,
        this.max_lazy = n,
        this.nice_length = e,
        this.max_chain = r,
        this.func = i
}
var tw = [new tg(0, 0, 0, 0, tb), new tg(4, 4, 8, 4, ty), new tg(4, 5, 16, 8, ty), new tg(4, 6, 32, 32, ty), new tg(4, 4, 16, 16, tm), new tg(8, 16, 32, 32, tm), new tg(8, 16, 128, 128, tm), new tg(8, 32, 128, 256, tm), new tg(32, 128, 258, 1024, tm), new tg(32, 258, 258, 4096, tm)];

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
tP = Object.prototype.toString
tj = D.Z_NO_FLUSH
tU = D.Z_SYNC_FLUSH
tD = D.Z_FULL_FLUSH
tF = D.Z_FINISH
tH = D.Z_OK
tK = D.Z_STREAM_END
tq = D.Z_DEFAULT_COMPRESSION
tV = D.Z_DEFAULT_STRATEGY
tJ = D.Z_DEFLATED;

tp = function (t, n) {
    t.pending_buf[t.pending++] = n >>> 8 & 255,
        t.pending_buf[t.pending++] = 255 & n
}
tf = function (t) {
    var n = t.state
        , e = n.pending;
    e > t.avail_out && (e = t.avail_out),
        0 !== e && (t.output.set(n.pending_buf.subarray(n.pending_out, n.pending_out + e), t.next_out),
            t.next_out += e,
            n.pending_out += e,
            t.total_out += e,
            t.avail_out -= e,
            n.pending -= e,
            0 === n.pending && (n.pending_out = 0))
}
to = function (t) {
    return 2 * t - 9 * (t > 4)
}
tS = function (t, n) {
    if (tx(t) || n > J || n < 0)
        return t ? ta(t, Q) : Q;
    var e = t.state;
    if (!t.output || 0 !== t.avail_in && !t.input || 666 === e.status && n !== V)
        return ta(t, 0 === t.avail_out ? Y : Q);
    var r = e.last_flush;
    if (e.last_flush = n,
        0 !== e.pending) {
        if (tf(t),
            0 === t.avail_out)
            return e.last_flush = -1,
                G
    } else if (0 === t.avail_in && to(n) <= to(r) && n !== V)
        return ta(t, Y);
    if (666 === e.status && 0 !== t.avail_in)
        return ta(t, Y);
    if (42 === e.status && 0 === e.wrap && (e.status = 113),
        42 === e.status) {
        var i = ti + (e.w_bits - 8 << 4) << 8;
        if (i |= (e.strategy >= tt || e.level < 2 ? 0 : e.level < 6 ? 1 : 6 === e.level ? 2 : 3) << 6,
            0 !== e.strstart && (i |= 32),
            tp(e, i += 31 - i % 31),
            0 !== e.strstart && (tp(e, t.adler >>> 16),
                tp(e, 65535 & t.adler)),
            t.adler = 1,
            e.status = 113,
            tf(t),
            0 !== e.pending)
            return e.last_flush = -1,
                G
    }
    if (57 === e.status) {
        if (t.adler = 0,
            th(e, 31),
            th(e, 139),
            th(e, 8),
            e.gzhead)
            th(e, +!!e.gzhead.text + 2 * !!e.gzhead.hcrc + 4 * !!e.gzhead.extra + 8 * !!e.gzhead.name + 16 * !!e.gzhead.comment),
                th(e, 255 & e.gzhead.time),
                th(e, e.gzhead.time >> 8 & 255),
                th(e, e.gzhead.time >> 16 & 255),
                th(e, e.gzhead.time >> 24 & 255),
                th(e, 9 === e.level ? 2 : 4 * (e.strategy >= tt || e.level < 2)),
                th(e, 255 & e.gzhead.os),
                e.gzhead.extra && e.gzhead.extra.length && (th(e, 255 & e.gzhead.extra.length),
                    th(e, e.gzhead.extra.length >> 8 & 255)),
                e.gzhead.hcrc && (t.adler = j(t.adler, e.pending_buf, e.pending, 0)),
                e.gzindex = 0,
                e.status = 69;
        else if (th(e, 0),
            th(e, 0),
            th(e, 0),
            th(e, 0),
            th(e, 0),
            th(e, 9 === e.level ? 2 : 4 * (e.strategy >= tt || e.level < 2)),
            th(e, 3),
            e.status = 113,
            tf(t),
            0 !== e.pending)
            return e.last_flush = -1,
                G
    }
    if (69 === e.status) {
        if (e.gzhead.extra) {
            for (var a = e.pending, o = (65535 & e.gzhead.extra.length) - e.gzindex; e.pending + o > e.pending_buf_size;) {
                var u = e.pending_buf_size - e.pending;
                if (e.pending_buf.set(e.gzhead.extra.subarray(e.gzindex, e.gzindex + u), e.pending),
                    e.pending = e.pending_buf_size,
                    e.gzhead.hcrc && e.pending > a && (t.adler = j(t.adler, e.pending_buf, e.pending - a, a)),
                    e.gzindex += u,
                    tf(t),
                    0 !== e.pending)
                    return e.last_flush = -1,
                        G;
                a = 0,
                    o -= u
            }
            var s = new Uint8Array(e.gzhead.extra);
            e.pending_buf.set(s.subarray(e.gzindex, e.gzindex + o), e.pending),
                e.pending += o,
                e.gzhead.hcrc && e.pending > a && (t.adler = j(t.adler, e.pending_buf, e.pending - a, a)),
                e.gzindex = 0
        }
        e.status = 73
    }
    if (73 === e.status) {
        if (e.gzhead.name) {
            var c, f = e.pending;
            do {
                if (e.pending === e.pending_buf_size) {
                    if (e.gzhead.hcrc && e.pending > f && (t.adler = j(t.adler, e.pending_buf, e.pending - f, f)),
                        tf(t),
                        0 !== e.pending)
                        return e.last_flush = -1,
                            G;
                    f = 0
                }
                c = e.gzindex < e.gzhead.name.length ? 255 & e.gzhead.name.charCodeAt(e.gzindex++) : 0,
                    th(e, c)
            } while (0 !== c);
            e.gzhead.hcrc && e.pending > f && (t.adler = j(t.adler, e.pending_buf, e.pending - f, f)),
                e.gzindex = 0
        }
        e.status = 91
    }
    if (91 === e.status) {
        if (e.gzhead.comment) {
            var l, h = e.pending;
            do {
                if (e.pending === e.pending_buf_size) {
                    if (e.gzhead.hcrc && e.pending > h && (t.adler = j(t.adler, e.pending_buf, e.pending - h, h)),
                        tf(t),
                        0 !== e.pending)
                        return e.last_flush = -1,
                            G;
                    h = 0
                }
                l = e.gzindex < e.gzhead.comment.length ? 255 & e.gzhead.comment.charCodeAt(e.gzindex++) : 0,
                    th(e, l)
            } while (0 !== l);
            e.gzhead.hcrc && e.pending > h && (t.adler = j(t.adler, e.pending_buf, e.pending - h, h))
        }
        e.status = 103
    }
    if (103 === e.status) {
        if (e.gzhead.hcrc) {
            if (e.pending + 2 > e.pending_buf_size && (tf(t),
                0 !== e.pending))
                return e.last_flush = -1,
                    G;
            th(e, 255 & t.adler),
                th(e, t.adler >> 8 & 255),
                t.adler = 0
        }
        if (e.status = 113,
            tf(t),
            0 !== e.pending)
            return e.last_flush = -1,
                G
    }
    if (0 !== t.avail_in || 0 !== e.lookahead || n !== H && 666 !== e.status) {
        var p = 0 === e.level ? tb(e, n) : e.strategy === tt ? function (t, n) {
            for (var e; ;) {
                if (0 === t.lookahead && (tv(t),
                    0 === t.lookahead)) {
                    if (n === H)
                        return 1;
                    break
                }
                if (t.match_length = 0,
                    e = F(t, 0, t.window[t.strstart]),
                    t.lookahead--,
                    t.strstart++,
                    e && (tl(t, !1),
                        0 === t.strm.avail_out))
                    return 1
            }
            return t.insert = 0,
                n === V ? (tl(t, !0),
                    0 === t.strm.avail_out ? 3 : 4) : t.sym_next && (tl(t, !1),
                        0 === t.strm.avail_out) ? 1 : 2
        }(e, n) : e.strategy === tn ? function (t, n) {
            for (var e, r, i, a, o = t.window; ;) {
                if (t.lookahead <= 258) {
                    if (tv(t),
                        t.lookahead <= 258 && n === H)
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
                if (t.match_length >= 3 ? (e = F(t, 1, t.match_length - 3),
                    t.lookahead -= t.match_length,
                    t.strstart += t.match_length,
                    t.match_length = 0) : (e = F(t, 0, t.window[t.strstart]),
                        t.lookahead--,
                        t.strstart++),
                    e && (tl(t, !1),
                        0 === t.strm.avail_out))
                    return 1
            }
            return t.insert = 0,
                n === V ? (tl(t, !0),
                    0 === t.strm.avail_out ? 3 : 4) : t.sym_next && (tl(t, !1),
                        0 === t.strm.avail_out) ? 1 : 2
        }(e, n) : tw[e.level].func(e, n);
        if (3 !== p && 4 !== p || (e.status = 666),
            1 === p || 3 === p)
            return 0 === t.avail_out && (e.last_flush = -1),
                G;
        if (2 === p && (n === K ? L(e) : n !== J && (M(e, 0, 0, !1),
            n === q && (tu(e.head),
                0 === e.lookahead && (e.strstart = 0,
                    e.block_start = 0,
                    e.insert = 0))),
            tf(t),
            0 === t.avail_out))
            return e.last_flush = -1,
                G
    }
    return n !== V ? G : e.wrap <= 0 ? Z : (2 === e.wrap ? (th(e, 255 & t.adler),
        th(e, t.adler >> 8 & 255),
        th(e, t.adler >> 16 & 255),
        th(e, t.adler >> 24 & 255),
        th(e, 255 & t.total_in),
        th(e, t.total_in >> 8 & 255),
        th(e, t.total_in >> 16 & 255),
        th(e, t.total_in >> 24 & 255)) : (tp(e, t.adler >>> 16),
            tp(e, 65535 & t.adler)),
        tf(t),
        e.wrap > 0 && (e.wrap = -e.wrap),
        0 !== e.pending ? G : Z)
}
function tG(t) {
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
tz = function (t) {
    if (tx(t))
        return Q;
    var n = t.state.status;
    return t.state = null,
        113 === n ? ta(t, X) : G
}
tG.prototype.push = function (t, n) {
    var e, r, i = this.strm, a = this.options.chunkSize;
    if (this.ended)
        return !1;
    for (r = n === ~~n ? n : !0 === n ? tF : tj,
        "string" == typeof t ? i.input = tL(t) : "[object ArrayBuffer]" === tP.call(t) ? i.input = new Uint8Array(t) : i.input = t,
        i.next_in = 0,
        i.avail_in = i.input.length; ;)
        if (0 === i.avail_out && (i.output = new Uint8Array(a),
            i.next_out = 0,
            i.avail_out = a),
            (r === tU || r === tD) && i.avail_out <= 6)
            this.onData(i.output.subarray(0, i.next_out)),
                i.avail_out = 0;
        else {
            if ((e = tS(i, r)) === tK)
                return i.next_out > 0 && this.onData(i.output.subarray(0, i.next_out)),
                    e = tz(this.strm),
                    this.onEnd(e),
                    this.ended = !0,
                    e === tH;
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

tG.prototype.onData = function (t) {
    this.chunks.push(t)
}
tM = function (t) {
    for (var n = 0, e = 0, r = t.length; e < r; e++)
        n += t[e].length;
    for (var i = new Uint8Array(n), a = 0, o = 0, u = t.length; a < u; a++) {
        var s = t[a];
        i.set(s, o),
            o += s.length
    }
    return i
}
tG.prototype.onEnd = function (t) {
    t === tH && (this.result = tM(this.chunks)),
        this.chunks = [],
        this.err = t,
        this.msg = this.strm.msg
}



function lzh_1(t) {
    var lzh_Z = {}
    lzh_Z.deflate = function tZ(t, n) {
        var e = new tG(n);
        if (e.push(t, !0),
            e.err)
            throw e.msg || U[e.err];
        return e.result
    }
    lzh_a = new TextEncoder
    var n = lzh_a.encode(t);
    return function (t) {
        for (var n, e, r = 0, i = t.length, a = ""; r < i;)
            n = t.subarray(r, Math.min(r + 32768, i)),
                a += null == (e = window.String.fromCharCode) ? void 0 : e.apply(null, n),
                r += 32768;
        return window.btoa(a)
    }((0,
        lzh_Z.deflate)(n))
}
guiji = 'a1773eb8e2234dda41d2beba939817d7{"TrackList":{"mc":"76,510,827, ,1","tc":"","mu":"151,507,1018, ,1","te":"","mp":"394,459,176,1|375,463,184,1|366,464,193,1|365,462,199,1|368,459,207,1|369,458,215,1|370,457,223,1|370,457,234,1|373,457,357,1|375,457,360,1|373,457,368,1|366,457,377,1|355,458,387,1|339,459,396,1|320,462,400,1|298,466,407,1|274,472,416,1|249,478,424,1|225,484,435,1|201,490,439,1|180,494,447,1|161,499,455,1|144,503,463,1|130,505,475,1|118,508,480,1|109,511,488,1|103,513,495,1|100,515,505,1|98,516,515,1|98,517,519,1|98,518,527,1|98,518,535,1|100,520,544,1|100,520,554,1|100,521,600,1|98,523,608,1|95,524,616,1|91,525,625,1|87,526,635,1|82,527,640,1|80,527,647,1|76,526,656,1|75,525,665,1|74,524,674,1|73,522,679,1|73,520,687,1|73,518,697,1|73,516,704,1|73,514,715,1|74,512,719,1|76,511,727,1|76,510,735,1|78,509,848,1|80,509,855,1|82,509,864,1|86,508,874,1|91,507,879,1|97,507,888,1|103,507,896,1|111,507,904,1|119,507,914,1|127,507,919,1|134,507,928,1|140,507,935,1|145,507,945,1|148,507,951,1|150,507,959,1|150,507,967,1|151,507,975,1","tmv":"","mm":"76,510,827,1|78,509,848,1|80,509,856,1|82,509,864,1|86,508,874,1|91,507,879,1|97,507,888,1|103,507,896,1|111,507,904,1|119,507,914,1|127,507,919,1|134,507,928,1|140,507,936,1|145,507,945,1|148,507,951,1|150,507,959,1|150,507,967,1|151,507,975,1|151,507,1018,1","ks":"","fi":"","startTime":1762148273607,"si":"417,1920,862,417,847,983,1080,99.50248756218906,1686"},"TrackStartTime":1762148273607,"VerifyTime":1762148274628,"xPos":"26","slidePos":"75","arg":"MzNbFAlwXAg5fw=="}'
console.log(lzh_1(guiji))