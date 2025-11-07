window = global

function watch(obj, name, visited = new WeakSet()) {
    if (obj === null || typeof obj !== 'object' || visited.has(obj)) {
        return obj;
    }
    visited.add(obj);

    const checkPrototypeChain = (target, property) => {
        let current = Object.getPrototypeOf(target);
        while (current && current !== Object.prototype) {
            if (Object.prototype.hasOwnProperty.call(current, property)) {
                console.log(`原型链检测: true (对象: ${name}, 属性: ${property})`);
                return true;
            }
            current = Object.getPrototypeOf(current);
        }
        return false;
    };

    // 用于跟踪 instanceof 操作的辅助变量
    let isInstanceOfCheck = false;

    return new Proxy(obj, {
        get(target, property, receiver) {
            try {
                // 跳过 Symbol / prototype / constructor 类型访问
                if (typeof property === 'symbol' || property === 'constructor' || property === '__proto__') {
                    return Reflect.get(target, property, receiver);
                }

                // ✅ 特殊处理 navigator.platform
                if (name === "navigator" && property === "platform") {
                    console.log(`对象 => ${name}, 特殊处理属性: ${String(property)}, 模拟值为: Win32`);
                    return "Win32";
                }

                // ✅ 只 Reflect.get 一次（避免 getter 被触发两次）
                const value = Reflect.get(target, property, receiver);

                // ✅ undefined 才打印访问日志
                if (value === undefined) {
                    console.log(`对象 => ${name}, 读取属性: ${String(property)}, 值为: undefined`);
                } else {
                    console.log(`对象 => ${name}, 读取属性: ${String(property)}, 值为:`, value);
                }

                // ✅ 原型链检测
                if (!Object.prototype.hasOwnProperty.call(target, property)) {
                    checkPrototypeChain(target, property);
                }

                // ✅ 属性描述符检测
                const descriptor = Object.getOwnPropertyDescriptor(target, property);
                if (descriptor) {
                    if (descriptor.get || descriptor.set) {
                        console.log(`特殊检测: Getter/Setter (对象: ${name}, 属性: ${String(property)})`);
                    }
                    if (!descriptor.writable && !descriptor.get) {
                        console.log(`特殊检测: 只读属性 (对象: ${name}, 属性: ${String(property)})`);
                    }
                    if (!descriptor.configurable) {
                        console.log(`特殊检测: 不可配置属性 (对象: ${name}, 属性: ${String(property)})`);
                    }
                }

                // ✅ 深度递归监听（但排除 Symbol）
                if (typeof value === 'object' && value !== null) {
                    return watch(value, `${name}.${String(property)}`, visited);
                }

                return value;

            } catch (e) {
                console.error(`Error in get trap for ${name}.${String(property)}:`, e);
                return Reflect.get(target, property, receiver);
            }
        },

        set(target, property, newValue, receiver) {
            console.log(`对象 => ${name}, 设置属性: ${String(property)}, 值为: ${newValue}`);
            return Reflect.set(target, property, newValue, receiver);
        },

        has(target, property) {
            console.log(`对象 => ${name}, in 操作符检测: ${String(property)}`);
            return Reflect.has(target, property);
        },

        deleteProperty(target, property) {
            console.log(`对象 => ${name}, 删除属性: ${String(property)}`);
            return Reflect.deleteProperty(target, property);
        },

        ownKeys(target) {
            console.log(`对象 => ${name}, 获取自身所有键`);
            return Reflect.ownKeys(target);
        },

        setPrototypeOf(target, prototype) {
            console.log(`特殊检测: setPrototypeOf 被调用 (对象: ${name})`);
            return Reflect.setPrototypeOf(target, prototype);
        },

        getPrototypeOf(target) {
            // 检测 instanceof 操作（instanceof 会调用 getPrototypeOf）
            if (!isInstanceOfCheck) {
                isInstanceOfCheck = true;
                // 通过 Error 堆栈获取 instanceof 的右侧构造函数名
                let constructorName = '未知构造函数';
                try {
                    throw new Error();
                } catch (e) {
                    if (e.stack) {
                        // 解析堆栈信息，提取 instanceof 右侧的构造函数
                        const stackLines = e.stack.split('\n');
                        for (let line of stackLines) {
                            if (line.includes('instanceof')) {
                                const match = line.match(/instanceof\s+(\w+)/);
                                if (match && match[1]) {
                                    constructorName = match[1];
                                }
                                break;
                            }
                        }
                    }
                }
                console.log(`特殊检测: instanceof 操作 (对象: ${name}, 检测构造函数: ${constructorName})`);
                // 延迟重置，避免多次触发
                setTimeout(() => isInstanceOfCheck = false, 0);
            }
            console.log(`特殊检测: getPrototypeOf 被调用 (对象: ${name})`);
            return Reflect.getPrototypeOf(target);
        },

        // 可选：检测 isPrototypeOf 方法调用（与 instanceof 相关）
        apply(target, thisArg, argumentsList) {
            if (target.name === 'isPrototypeOf') {
                console.log(`特殊检测: isPrototypeOf 方法调用 (对象: ${name}, 检测对象: ${thisArg})`);
            }
            return Reflect.apply(target, thisArg, argumentsList);
        }
    });
}

P = function t(n, e, r, i, a, o) {
    var u, s, c, f, l, h, p, d, A, v;
    function b(t) {
        var n, e;
        for (e = 0,
        n = []; u.e(u.P(u.b(u.F(e, t), 37), -65), -65); e++)
            n.push(e);
        return n
    }
    function y(t, n) {
        return !t || u.I(n, u.P("__proto_", "_")) ? null : t[u.P("hasOwnProper", "ty")](n) ? t : u.N(y, Object[u.P("getPrototype", "Of")](t), n)
    }
    for ((u = {}).e = function(t, n) {
        return t < n
    }
    ,
    u.P = function(t, n) {
        return t + n
    }
    ,
    u.b = function(t, n) {
        return t * n
    }
    ,
    u.F = function(t, n) {
        return t - n
    }
    ,
    u.I = function(t, n) {
        return t == n
    }
    ,
    u.N = function(t, n, e) {
        return t(n, e)
    }
    ,
    u.j = function(t, n, e, r, i, a, o) {
        return t(n, e, r, i, a, o)
    }
    ,
    u.V = function(t, n) {
        return t / n
    }
    ,
    u.R = function(t, n, e, r, i, a) {
        return t(n, e, r, i, a)
    }
    ,
    u.k = function(t, n) {
        return t > n
    }
    ,
    u.U = function(t, n) {
        return t(n)
    }
    ,
    u.n = function(t, n) {
        return t >= n
    }
    ,
    u.m = function(t, n) {
        return t & n
    }
    ,
    u.o = function(t, n) {
        return t in n
    }
    ,
    u.i = function(t, n) {
        return t % n
    }
    ,
    u.g = function(t, n) {
        return t === n
    }
    ,
    u.y = function(t, n) {
        return t | n
    }
    ,
    u.T = function(t, n) {
        return t !== n
    }
    ,
    u.x = function(t, n) {
        return t != n
    }
    ,
    u.u = function(t, n) {
        return t >>> n
    }
    ,
    u.f = function(t, n) {
        return t << n
    }
    ,
    u.w = function(t, n) {
        return t >> n
    }
    ,
    u.a = function(t, n) {
        return t <= n
    }
    ,
    u.L = function(t, n) {
        return t instanceof n
    }
    ,
    (s = Object[u.P("crea", "te")](a.s || {}))._ = window,
    s["*"] = a.t || this,
    a.e && (s[i[r[u.P(n, 1)]]] = a.e),
    s[u.P("argument", "s")] = o,
    c = 0,
    f = void 0; u.e(u.P(u.b(u.F(n, r[u.P("leng", "th")]), 24), -5), -5); )
        if (v = r[n++],
        u.I(v, 16) ? (l = e.pop(),
        h = r[n++],
        l || (n = h)) : u.I(v, 39) ? (l = e.pop(),
        h = e.pop(),
        p = u.e(u.P(u.b(u.F(h, l), 43), -94), -94),
        (d = r[n++]) && e.push(p)) : u.I(v, 0) ? (l = e.pop(),
        h = e.pop(),
        r[n++] && e.push(h[l])) : u.I(v, 3) ? (l = e.pop(),
        h = e.pop(),
        p = u.V(u.b(-81, h), u.b(l, -81)),
        (d = r[n++]) && e.push(p)) : u.I(v, 36) ? (l = r[n++],
        h = e.pop(),
        u.U(b, l)[u.P("forE", "ach")](function() {
            e.pop()
        }),
        r[n++] && e.push(h)) : u.I(v, 23) ? (l = e.pop(),
        h = e.pop(),
        p = delete h[l],
        r[n++] && e.push(p)) : u.I(v, 29) ? c = 1 : u.I(v, 32) ? (l = e.pop(),
        h = e.pop(),
        p = u.n(u.P(u.b(u.F(h, l), 72), 21), 21),
        (d = r[n++]) && e.push(p)) : u.I(v, 35) ? (l = e.pop(),
        h = e.pop(),
        p = ~u.m(~h, ~l),
        (d = r[n++]) && e.push(p)) : u.I(v, 45) ? (l = e.pop(),
        h = e.pop(),
        p = u.P(h, l),
        (d = r[n++]) && e.push(p)) : u.I(v, 25) ? (l = e.pop(),
        h = e.pop(),
        p = u.o(h, l),
        (d = r[n++]) && e.push(p)) : u.I(v, 15) ? (l = i[r[n++]],
        p = (h = s)[l],
        r[n++] && e.push(p)) : u.I(v, 47) || (u.I(v, 8) ? (l = e.pop(),
        h = e.pop(),
        p = -u.i(-h, l),
        (d = r[n++]) && e.push(p)) : u.I(v, 28) ? (l = e.pop(),
        h = e.pop(),
        p = r[n++],
        u.I(h, -1) && (h = p),
        n = h = l[h]) : u.I(v, 12) ? e.push(window) : u.I(v, 43) ? (l = e.pop(),
        h = e.pop(),
        (p = e.pop())[h] = l,
        r[n++] && e.push(p)) : u.I(v, 17) ? (h = typeof (l = e.pop()),
        r[n++] && e.push(h)) : u.I(v, 14) ? (l = e.pop(),
        h = r[n++],
        l && (n = h)) : u.I(v, 51) ? (l = r[n++],
        h = e.pop(),
        p = e.pop(),
        d = u.N(y, p, h) || p,
        A = l ? --d[h] : d[h]--,
        r[n++] && e.push(A)) : u.I(v, 54) ? (l = e.pop(),
        h = e.pop(),
        p = u.F(u.b(u.P(h, 48), l), u.b(48, l)),
        (d = r[n++]) && e.push(p)) : u.I(v, 48) ? (l = r[n++],
        h = [],
        u.U(b, l)[u.P("forE", "ach")](function() {
            h[u.P("unsh", "ift")](e.pop())
        }),
        r[n++] && e.push(h)) : u.I(v, 41) ? s[h = i[l = r[n++]]] = void 0 : u.I(v, 38) ? (l = e.pop(),
        h = e.pop(),
        p = e.pop(),
        (d = u.g(h, s) && u.N(y, h, l) || h)[l] = p,
        (A = r[n++]) && e.push(p)) : u.I(v, 40) ? (l = e.pop(),
        h = e.pop(),
        p = ~u.y(~h, ~l),
        (d = r[n++]) && e.push(p)) : u.I(v, 53) ? (l = e.pop(),
        h = e.pop(),
        p = u.T(h, l),
        (d = r[n++]) && e.push(p)) : u.I(v, 56) ? (l = e.pop(),
        h = r[n++],
        p = r[n++],
        d = function(n) {
            return function() {
                return u.j(t, n, e, r, i, {
                    s: s,
                    t: this,
                    r: 1
                }, arguments)
            }
        }(h),
        p ? e.push(d) : s[l] = d) : u.I(v, 52) ? (l = e.pop(),
        h = e.pop(),
        p = u.V(u.F(u.b(h, 91), u.b(l, 91)), 91),
        (d = r[n++]) && e.push(p)) : u.I(v, 2) ? (h = !(l = e.pop()),
        r[n++] && e.push(h)) : u.I(v, 42) ? (l = e.pop(),
        h = e.pop(),
        p = u.x(h, l),
        (d = r[n++]) && e.push(p)) : u.I(v, 22) ? (l = r[n++],
        h = "",
        u.U(b, l)[u.P("forE", "ach")](function() {
            h += e.pop()
        }),
        r[n++] && e.push(h)) : u.I(v, 5) ? (l = r[n++],
        (h = u.R(t, n, e, r, i, {
            s: s,
            t: s["*"]
        })) ? u.g(h, 1) ? c = 1 : (c = 1,
        f = a.r ? e.pop() : h) : n = l) : u.I(v, 6) ? (l = e.pop(),
        h = e.pop(),
        p = u.y(u.m(h, ~l), u.m(~h, l)),
        (d = r[n++]) && e.push(p)) : u.I(v, 49) ? (l = e.pop(),
        h = e.pop(),
        p = u.k(u.P(u.b(u.F(h, l), 66), 71), 71),
        (d = r[n++]) && e.push(p)) : u.I(v, 7) ? e.push(s) : u.I(v, 21) ? (l = r[n++],
        h = e.pop(),
        p = e.pop(),
        o = [],
        u.U(b, l)[u.P("forE", "ach")](function() {
            o[u.P("unsh", "ift")](e.pop())
        }),
        d = u.g(p, null) ? h[u.P("appl", "y")](s, o) : p[h][u.P("appl", "y")](p, o),
        r[n++] && e.push(d)) : u.I(v, 33) ? n = l = r[n++] : u.I(v, 1) ? e.push({}) : u.I(v, 9) ? (l = e.pop(),
        h = e.pop(),
        p = u.u(h, l),
        (d = r[n++]) && e.push(p)) : u.I(v, 55) ? (l = r[n++],
        h = e.pop(),
        p = e.pop(),
        d = u.N(y, p, h) || p,
        A = l ? ++d[h] : d[h]++,
        r[n++] && e.push(A)) : u.I(v, 30) ? (h = ~(l = e.pop()),
        r[n++] && e.push(h)) : u.I(v, 37) ? (l = e.pop(),
        h = e.pop(),
        p = r[n++],
        o = [],
        u.U(b, p)[u.P("forE", "ach")](function() {
            o[u.P("unsh", "ift")](e.pop())
        }),
        d = new (u.U(b, p)[u.P("redu", "ce")](function(t, n) {
            return t.bind(h, o[n])
        }, h[l])),
        r[n++] && e.push(d)) : u.I(v, 18) ? function() {
            throw e.pop()
        }() : u.I(v, 11) ? (l = e.pop(),
        h = e.pop(),
        p = u.I(h, l),
        (d = r[n++]) && e.push(p)) : u.I(v, 24) ? (l = r[n++],
        h = u.R(t, n, e, r, i, {
            s: s,
            t: s["*"]
        }),
        u.g(h, void 0) ? n = l : (c = 1,
        f = a.r ? e.pop() : h)) : u.I(v, 46) ? (l = r[n++],
        o || (o = [][u.P("conc", "at")](e)),
        u.U(b, u.P(l, 1))[u.P("forE", "ach")](function(t) {
            s[e.pop()] = o[u.V(u.F(u.b(l, 46), u.b(t, 46)), 46)]
        })) : u.I(v, 26) ? (l = e.pop(),
        h = e.pop(),
        p = u.f(h, l),
        (d = r[n++]) && e.push(p)) : u.I(v, 50) ? (c = 1,
        f = a.r ? e.pop() : r[n++]) : u.I(v, 20) ? (l = e.pop(),
        h = void 0,
        r[n++] && e.push(h)) : u.I(v, 44) ? (l = r[n++],
        e.push(i[l])) : u.I(v, 34) ? (l = r[n++],
        h = r[n++],
        p = r[n++],
        d = r[n++],
        n = l,
        function() {
            try {
                l = u.R(t, h, e, r, i, {
                    s: s,
                    t: s["*"]
                }),
                u.k(u.P(u.b(u.F(l, 0), 42), 79), 79) && (c = 1,
                f = a.r ? e.pop() : l)
            } catch (n) {
                l = u.R(t, p, e, r, i, {
                    s: s,
                    t: s["*"],
                    e: n
                }),
                u.k(u.P(u.b(u.F(l, 0), 51), 76), 76) && (c = 1,
                f = a.r ? e.pop() : l)
            } finally {
                l = u.R(t, d, e, r, i, {
                    s: s,
                    t: s["*"]
                }),
                u.k(u.P(u.b(u.F(l, 0), 59), 16), 16) && (c = 1,
                f = a.r ? e.pop() : l)
            }
        }()) : u.I(v, 13) ? (l = e.pop(),
        h = e.pop(),
        p = u.g(h, l),
        (d = r[n++]) && e.push(p)) : u.I(v, 19) ? (l = e.pop(),
        h = e.pop(),
        p = u.w(h, l),
        (d = r[n++]) && e.push(p)) : u.I(v, 10) ? e.push(e[u.V(u.F(u.b(e[u.P("leng", "th")], 53), u.b(1, 53)), 53)]) : u.I(v, 4) ? (l = e.pop(),
        h = e.pop(),
        p = u.a(u.P(u.b(u.F(h, l), 86), 88), 88),
        (d = r[n++]) && e.push(p)) : u.I(v, 27) ? e.pop() : u.I(v, 31) ? (l = e.pop(),
        h = e.pop(),
        p = u.L(h, l),
        (d = r[n++]) && e.push(p)) : function() {
            throw Error()
        }()),
        c)
            return f
}
// 轨迹参数arg
T = [0, [], [41, 0, 41, 1, 41, 2, 41, 3, 41, 4, 7, 44, 5, 0, 1, 44, 6, 0, 1, 7, 44, 4, 38, 0, 41, 7, 7, 44, 5, 0, 1, 44, 8, 0, 1, 7, 44, 7, 38, 0, 41, 9, 7, 44, 5, 0, 1, 44, 10, 0, 1, 7, 44, 9, 38, 0, 41, 11, 7, 44, 5, 0, 1, 44, 12, 44, 13, 56, 72, 1, 33, 96, 44, 0, 46, 0, 15, 0, 1, 44, 14, 6, 1, 7, 44, 9, 0, 1, 44, 15, 21, 1, 1, 50, 2, 29, 44, 16, 44, 17, 44, 18, 44, 19, 48, 4, 1, 44, 20, 21, 1, 1, 44, 21, 21, 1, 1, 0, 1, 7, 44, 11, 38, 0, 41, 22, 7, 44, 5, 0, 1, 44, 12, 44, 13, 56, 140, 1, 33, 164, 44, 0, 46, 0, 15, 0, 1, 44, 23, 6, 1, 7, 44, 9, 0, 1, 44, 15, 21, 1, 1, 50, 2, 29, 44, 24, 44, 25, 44, 26, 44, 27, 48, 4, 1, 44, 20, 21, 1, 1, 44, 21, 21, 1, 1, 0, 1, 7, 44, 22, 38, 0, 41, 28, 7, 44, 5, 0, 1, 44, 12, 44, 13, 56, 208, 1, 33, 232, 44, 0, 46, 0, 15, 0, 1, 44, 29, 6, 1, 7, 44, 9, 0, 1, 44, 15, 21, 1, 1, 50, 2, 29, 44, 30, 44, 31, 44, 32, 44, 33, 44, 34, 44, 30, 44, 35, 44, 36, 44, 37, 44, 38, 44, 33, 44, 39, 44, 40, 44, 33, 44, 31, 44, 30, 44, 31, 44, 41, 48, 18, 1, 44, 20, 21, 1, 1, 44, 21, 21, 1, 1, 0, 1, 7, 44, 28, 38, 0, 41, 42, 7, 44, 5, 0, 1, 44, 12, 44, 13, 56, 304, 1, 33, 328, 44, 0, 46, 0, 15, 0, 1, 44, 43, 6, 1, 7, 44, 9, 0, 1, 44, 15, 21, 1, 1, 50, 2, 29, 44, 44, 44, 45, 44, 46, 44, 47, 44, 44, 44, 45, 44, 48, 44, 49, 44, 50, 44, 51, 44, 47, 44, 52, 44, 53, 44, 47, 44, 54, 44, 45, 44, 54, 44, 55, 48, 18, 1, 44, 20, 21, 1, 1, 44, 21, 21, 1, 1, 0, 1, 7, 44, 42, 38, 0, 41, 56, 7, 44, 5, 0, 1, 44, 12, 44, 13, 56, 400, 1, 33, 424, 44, 0, 46, 0, 15, 0, 1, 44, 57, 6, 1, 7, 44, 9, 0, 1, 44, 15, 21, 1, 1, 50, 2, 29, 44, 40, 44, 58, 44, 59, 44, 41, 44, 30, 44, 40, 48, 6, 1, 44, 20, 21, 1, 1, 44, 21, 21, 1, 1, 0, 1, 7, 44, 56, 38, 0, 41, 60, 7, 44, 5, 0, 1, 44, 12, 44, 13, 56, 472, 1, 33, 496, 44, 0, 46, 0, 15, 0, 1, 44, 61, 6, 1, 7, 44, 9, 0, 1, 44, 15, 21, 1, 1, 50, 2, 29, 44, 62, 44, 63, 44, 64, 44, 65, 44, 66, 44, 67, 44, 68, 44, 64, 48, 8, 1, 44, 20, 21, 1, 1, 44, 21, 21, 1, 1, 0, 1, 7, 44, 60, 38, 0, 7, 44, 69, 0, 1, 44, 13, 0, 1, 7, 44, 0, 38, 1, 7, 44, 69, 0, 1, 44, 70, 0, 1, 7, 44, 1, 38, 1, 36, 1, 0, 15, 0, 1, 7, 44, 28, 21, 1, 1, 7, 44, 60, 21, 1, 1, 7, 44, 0, 38, 0, 44, 71, 44, 72, 44, 73, 44, 48, 44, 74, 44, 75, 44, 51, 44, 76, 44, 77, 44, 52, 44, 78, 44, 79, 44, 80, 44, 81, 44, 82, 44, 83, 44, 84, 44, 85, 44, 86, 44, 87, 44, 88, 44, 89, 44, 90, 44, 91, 44, 46, 44, 44, 44, 92, 44, 29, 44, 93, 44, 94, 44, 50, 44, 95, 44, 55, 44, 96, 44, 97, 44, 53, 44, 70, 44, 57, 44, 98, 44, 99, 44, 100, 44, 101, 44, 102, 44, 103, 44, 104, 44, 105, 44, 49, 44, 106, 44, 54, 44, 107, 44, 108, 44, 109, 44, 110, 44, 111, 44, 112, 44, 113, 44, 114, 44, 45, 44, 115, 44, 116, 44, 117, 44, 47, 44, 13, 44, 118, 48, 64, 1, 7, 44, 2, 38, 0, 24, 984, 41, 0, 44, 13, 7, 44, 0, 38, 0, 41, 3, 44, 13, 7, 44, 3, 38, 0, 5, 975, 15, 0, 1, 7, 44, 2, 0, 1, 44, 119, 0, 1, 39, 1, 16, 973, 15, 0, 1, 15, 3, 1, 45, 1, 7, 44, 2, 0, 1, 7, 44, 0, 0, 1, 0, 1, 45, 1, 7, 44, 2, 0, 1, 7, 44, 3, 0, 1, 0, 1, 45, 1, 44, 70, 19, 1, 15, 0, 1, 7, 44, 1, 0, 1, 44, 119, 0, 1, 8, 1, 7, 44, 1, 0, 1, 44, 120, 21, 1, 1, 45, 1, 7, 44, 2, 0, 1, 44, 119, 0, 1, 44, 70, 52, 1, 40, 1, 7, 44, 3, 38, 0, 15, 0, 1, 15, 3, 1, 53, 1, 16, 972, 24, 970, 7, 44, 2, 0, 1, 7, 44, 0, 0, 1, 0, 1, 7, 44, 2, 0, 1, 7, 44, 3, 0, 1, 0, 1, 6, 1, 7, 44, 2, 0, 1, 7, 44, 0, 0, 1, 38, 0, 7, 44, 2, 0, 1, 7, 44, 0, 0, 1, 0, 1, 7, 44, 2, 0, 1, 7, 44, 3, 0, 1, 0, 1, 6, 1, 7, 44, 2, 0, 1, 7, 44, 3, 0, 1, 38, 0, 7, 44, 2, 0, 1, 7, 44, 0, 0, 1, 0, 1, 7, 44, 2, 0, 1, 7, 44, 3, 0, 1, 0, 1, 6, 1, 7, 44, 2, 0, 1, 7, 44, 0, 0, 1, 38, 0, 29, 33, 972, 29, 50, 1, 7, 44, 0, 55, 0, 0, 33, 739, 29, 44, 12, 7, 44, 3, 38, 0, 24, 1473, 41, 1, 44, 13, 7, 44, 1, 38, 0, 41, 4, 44, 13, 7, 44, 4, 38, 0, 41, 7, 44, 13, 7, 44, 7, 38, 0, 5, 1464, 15, 1, 1, 7, 44, 0, 0, 1, 44, 119, 0, 1, 39, 1, 16, 1462, 15, 4, 1, 15, 7, 1, 6, 1, 7, 44, 2, 0, 1, 7, 44, 4, 0, 1, 0, 1, 7, 44, 2, 0, 1, 7, 44, 7, 0, 1, 0, 1, 6, 1, 45, 1, 7, 44, 2, 0, 1, 44, 119, 0, 1, 44, 70, 52, 1, 40, 1, 7, 44, 7, 38, 0, 15, 4, 1, 15, 7, 1, 53, 1, 16, 1223, 24, 1221, 7, 44, 2, 0, 1, 7, 44, 4, 0, 1, 0, 1, 7, 44, 2, 0, 1, 7, 44, 7, 0, 1, 0, 1, 6, 1, 7, 44, 2, 0, 1, 7, 44, 4, 0, 1, 38, 0, 7, 44, 2, 0, 1, 7, 44, 4, 0, 1, 0, 1, 7, 44, 2, 0, 1, 7, 44, 7, 0, 1, 0, 1, 6, 1, 7, 44, 2, 0, 1, 7, 44, 7, 0, 1, 38, 0, 7, 44, 2, 0, 1, 7, 44, 4, 0, 1, 0, 1, 7, 44, 2, 0, 1, 7, 44, 7, 0, 1, 0, 1, 6, 1, 7, 44, 2, 0, 1, 7, 44, 4, 0, 1, 38, 0, 29, 33, 1223, 41, 11, 15, 1, 1, 7, 44, 0, 0, 1, 44, 120, 21, 1, 1, 7, 44, 11, 38, 0, 15, 11, 1, 15, 4, 1, 7, 44, 2, 0, 1, 7, 44, 4, 0, 1, 0, 1, 45, 1, 45, 1, 7, 44, 11, 38, 0, 15, 11, 1, 15, 7, 1, 7, 44, 2, 0, 1, 7, 44, 7, 0, 1, 0, 1, 45, 1, 52, 1, 7, 44, 11, 38, 0, 15, 11, 1, 7, 44, 2, 0, 1, 7, 44, 4, 0, 1, 0, 1, 7, 44, 2, 0, 1, 7, 44, 7, 0, 1, 0, 1, 45, 1, 6, 1, 7, 44, 11, 38, 0, 15, 11, 1, 7, 44, 2, 0, 1, 7, 44, 2, 0, 1, 7, 44, 4, 0, 1, 0, 1, 7, 44, 2, 0, 1, 7, 44, 7, 0, 1, 0, 1, 45, 1, 7, 44, 2, 0, 1, 44, 119, 0, 1, 44, 70, 52, 1, 40, 1, 0, 1, 6, 1, 7, 44, 11, 38, 0, 15, 11, 1, 44, 121, 40, 1, 7, 44, 11, 38, 0, 15, 11, 1, 7, 44, 9, 0, 1, 44, 15, 21, 1, 1, 7, 44, 11, 38, 0, 15, 3, 1, 15, 11, 1, 45, 1, 7, 44, 3, 38, 0, 15, 4, 1, 44, 70, 45, 1, 7, 44, 2, 0, 1, 44, 119, 0, 1, 44, 70, 52, 1, 40, 1, 7, 44, 4, 38, 0, 29, 50, 1, 7, 44, 1, 55, 0, 0, 33, 1020, 29, 44, 122, 15, 3, 1, 7, 44, 22, 0, 1, 44, 123, 21, 2, 1, 7, 44, 3, 38, 0, 15, 3, 1, 50, 2], ["o", "n", "r", "t", "e", "_", "Boolean", "a", "Number", "h", "String", "m", "", 0, 147, "fromCharCode", 242, 231, 252, 241, "map", "join", "C", 246, 148, 130, 153, 151, "l", 4, 97, 106, 103, 107, 96, 81, 86, 77, 71, 105, 116, 112, "c", 102, 2, 3, 5, 9, 51, 52, 47, 37, 11, 22, 8, 18, "f", 17, 98, 114, "s", 229, 144, 139, 128, 150, 134, 132, 149, "arguments", 1, 32, 50, 10, 6, 44, 16, 46, 62, 19, 43, 25, 23, 30, 60, 33, 53, 34, 7, 26, 12, 48, 20, 61, 13, 49, 29, 27, 39, 56, 41, 38, 55, 31, 15, 58, 40, 57, 45, 35, 59, 36, 42, 54, 63, 24, 28, 14, 21, "length", "charCodeAt", 255, null, "call"], {"r": 1}, ["j153dA7Nsq", "tu3tugfxamh8wp7h"]]
c = P.apply(void 0, T)
console.log(c)
