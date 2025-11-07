
data的生成过程
u = new window[td.M(n5, ee(80, 55))]()[td.t(ee, ee)(124, 76)](nU)
u = new window[
    前面为构造轨迹
后面为加密轨迹
[new window[tU + tM.K(eT, eT)(44, 268)]()[tM.x(eT, 15, 150)], t5]

往前跟

function (t) {
    var n = tM(t);
    return function (t) {
        for (var n, e, r = 0, i = t.length, a = ""; r < i;)
            n = t.subarray(r, Math.min(r + 32768, i)),
                a += null == (e = window.String.fromCharCode) ? void 0 : e.apply(null, n),
                r += 32768;
        return window.btoa(a)
    }((0,
        Z.deflate)(n))
} (b)
b为轨迹 传入后 tM 进行u8 然后进行压缩再进行base64生成data


