delete __dirname
delete __filename
window = globalThis



// console.log(performance.now())

// console.log(new TextEncoder().encode(window.performance.now))
HTMLIFrameElement = function () {
    throw new TypeError('Illegal invocation')
}
HTMLIFrameElement.prototype = {}

Object.defineProperties(HTMLIFrameElement.prototype, {
    'contentWindow': {
        value: window,
        writable: false,
        configurable: false,
        enumerable: true
    },
    'style': {
        get() {
            return {
                0: "width",
                1: "height",
                2: "display",
                display: "none",
                width: "0px",
                height: "0px",
                border: "0px"
            }
        }
    },
});
var iframe = {}
Object.setPrototypeOf(iframe, HTMLIFrameElement.prototype)

HTMLDivElement = function HTMLDivElement() {
    throw new TypeError('Illegal invocation')
}
HTMLDivElement.prototype = {}
Object.defineProperties(HTMLDivElement.prototype, {
    children: {
        get() {
            return { 0: iframe }
        }
    },
    innerHTML: {
        get() {
            return '<iframe src="javascript:;"></iframe>'
        }
    },
})

div_dom = {}
Object.setPrototypeOf(div_dom, HTMLDivElement.prototype)
document = {
    createElement: function (tagname) {
        debugger;
        //        console.log('window.window.document.createElement==>', tagname)
        if (tagname === 'div') {
            return watch(div_dom, 'div_dom')
        }

    },
    body: {
        appendChild: function appendChild(tag) {
            // console.log("appendChild",tag)
        }
    }
}
location = {
    "ancestorOrigins": {},
    "href": "https://arcteryx.com/ca/zh",
    "origin": "https://arcteryx.com",
    "protocol": "https:",
    "host": "arcteryx.com",
    "hostname": "arcteryx.com",
    "port": "",
    "pathname": "/ca/zh",
    "search": "",
    "hash": ""
}
navigator = {
    sayswho: "Chrome 141",
    appCodeName: "Mozilla",
    appName: "Netscape",
    appVersion: "5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36",
    cookieEnabled: true,
    deprecatedRunAdAuctionEnforcesKAnonymity: false,
    deviceMemory: 8,
    hardwareConcurrency: 8,
    language: "zh-CN",
    onLine: true,
    pdfViewerEnabled: true,
}
history = {}
screen = {
    availHeight: 976,
    availLeft: 0,
    availTop: 25,
    availWidth: 1920,
    colorDepth: 24,
    height: 1080,
    isExtended: false,
    onchange: null,
    // orientation: ScreenOrientation {angle: 0, type: 'landscape-primary', onchange: null}
    pixelDepth: 24,
    width: 1920,
}
localStorage = {}
// window.KPSDK = {};
// KPSDK = window.KPSDK


window.parent = {
    AlgoliaAnalyticsObject: "a97f87db-2d95-431c-98ed-8c7741ef2a60",
    postMessage: function (tagName) {
        // console.log('parent.postMessage => ', tagName)
    },
}
window.Promise = function () {
}
window.KPSDK = {}
KPSDK = window.KPSDK

// 0.3版本
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
            console.log(`特殊检测: getPrototypeOf 被调用 (对象: ${name})`);
            return Reflect.getPrototypeOf(target);
        }
    });
}

// 函数保护 防止检测  设置symbol属性
function set_native(func, key, value) {
    Object.defineProperty(func, key, {
        enumerable: false,
        configurable: true,
        writable: true,
        value: value
    });
}
setNative = function (func, funcname) {
    set_native(func, symbol, `function ${funcname || func.name || ''}() { [native code] }`);
}

// 应用代理监控
window = watch(window, 'window');
document = watch(document, 'document');
location = watch(location, 'location');
navigator = watch(navigator, 'navigator');
localStorage = watch(localStorage, 'localStorage');
screen = watch(screen, 'screen');
history = watch(history, 'history');
// performance=watch(performance,"performance")
