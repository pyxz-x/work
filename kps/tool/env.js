delete __dirname
delete __filename
window = globalThis



// console.log(performance.now())

// console.log(new TextEncoder().encode(window.performance.now))
HTMLIFrameElement = function(){
    throw new TypeError('Illegal invocation')
}
HTMLIFrameElement.prototype = {}

Object.defineProperties(HTMLIFrameElement.prototype, {
    contentWindow:{
      value: window,
      writable: false,
      configurable: false,
      enumerable: true
},
    style:{
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
    }
});
var iframe = {}
Object.setPrototypeOf(iframe, HTMLIFrameElement.prototype)

HTMLDivElement = function HTMLDivElement() {
    throw new TypeError('Illegal invocation')
}
HTMLDivElement.prototype = {}
Object.defineProperties(HTMLDivElement.prototype,{
    children:{
        get(){
            return{0 :iframe}
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
console.log(Object.getPrototypeOf(div_dom))
document = {
    createElement: function (tagname) {
        debugger;
        console.log('window.window.document.createElement==>', tagname)
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
// 0.3版本
function watch(obj, name, visited = new WeakSet()) {
    // 防止循环引用导致无限递归
    // if (obj === null || typeof obj !== 'object' || visited.has(obj)) {
    //     return obj;
    // }

    // visited.add(obj);

    // 检查原型链访问
    const checkPrototypeChain = (target, property) => {
        let current = target;
        while (current) {
            if (Object.prototype.hasOwnProperty.call(current, property)) {
                return false; // 属性直接存在于当前对象上
            }
            current = Object.getPrototypeOf(current);
            if (current && current !== Object.prototype && current !== null) {
                console.log(`原型链检测:true (对象: ${name}, 属性: ${property})`);
                return true;
            }
        }
        return false;
    };

    return new Proxy(obj, {
        get: function (target, property, receiver) {
            try {
                // 排除一些不常见的或可能导致问题的属性
                if (typeof property === 'symbol' || property === 'constructor' || property === '__proto__') {
                    return Reflect.get(target, property, receiver);
                }

                // *** 核心修改：针对 window.navigator.platform 的特殊处理 ***
                if (name === "navigator" && property === "platform") {
                    console.log(`对象 => ${name}, 特殊处理属性: ${String(property)}, 模拟值为: 'MacIntel'`); // 你可以根据需要修改模拟值
                    return "MacIntel"; // 直接返回一个你想要的模拟值，绕过原生访问
                }
                // ***************************************************************

                const value = Reflect.get(target, property, receiver);

                // 深度监听嵌套对象
                if (typeof value === 'object' && value !== null) {
                    // 为嵌套对象生成一个更具体的名称
                    const nestedName = `${name}.${String(property)}`;
                    // console.log("deep",nestedName)
                    return watch(value, nestedName, visited);
                }

                // 只在值为 undefined 时打印属性访问信息
                if (value === undefined) {
                    console.log(`对象 => ${name}, 读取属性: ${String(property)}, 值为: undefined, 类型为: ${typeof value}`);
                }

                // 检测原型链访问 (无论值是否为undefined，都检测)
                // 如果属性不在 target 上，但通过原型链访问到，则标记为 true
                if (!Object.prototype.hasOwnProperty.call(target, property)) {
                    checkPrototypeChain(target, property);
                }

                // 检测描述符 (无论值是否为undefined，都检测)
                const descriptor = Object.getOwnPropertyDescriptor(target, property);
                if (descriptor) {
                    if (descriptor.get || descriptor.set) {
                        console.log(`特殊检测: 存在Getter/Setter (对象: ${name}, 属性: ${String(property)})`);
                    }
                    if (!descriptor.writable && !descriptor.get) {
                        console.log(`特殊检测: 只读属性 (对象: ${name}, 属性: ${String(property)})`);
                    }
                    if (!descriptor.configurable) {
                        console.log(`特殊检测: 不可配置属性 (对象: ${name}, 属性: ${String(property)})`);
                    }
                }
            } catch (e) {
                console.error(`Error in get trap for ${name}.${String(property)}:`, e);
            }
            return Reflect.get(target, property, receiver);
        },
        set: (target, property, newValue, receiver) => {
            try {
                // set 操作不受 undefined 值限制，依然打印
                console.log(`对象 => ${name}, 设置属性: ${String(property)}, 值为: ${typeof newValue === 'function' ? 'function' : newValue}, 类型为: ${typeof newValue}`);
            } catch (e) {
                console.error(`Error in set trap for ${name}.${String(property)}:`, e);
            }

            // 深度监听嵌套对象
            if (typeof newValue === 'object' && newValue !== null) {
                // 为嵌套对象生成一个更具体的名称
                const nestedName = `${name}.${String(property)}`;
                // console.log("deep",nestedName)
                newValue= watch(newValue, nestedName, visited);
            }
            return Reflect.set(target, property, newValue, receiver);
        },
        // 捕获 in 操作符
        has: function (target, property) {
            console.log(`对象 => ${name}, in 操作符检测属性: ${String(property)}`);
            return Reflect.has(target, property);
        },
        // 捕获 delete 操作符
        deleteProperty: function (target, property) {
            console.log(`对象 => ${name}, 删除属性: ${String(property)}`);
            return Reflect.deleteProperty(target, property);
        },
        // 捕获 Object.keys(), Object.values(), Object.entries() 等操作
        ownKeys: function (target) {
            console.log(`对象 => ${name}, 获取自身所有键`);
            return Reflect.ownKeys(target);
        },
        // 捕获 Object.defineProperty()
        // defineProperty: function(target, property, descriptor) {
        //     console.log(`对象 => ${name}, 定义属性: ${String(property)}`);
        //     return Reflect.defineProperty(target, property, descriptor);
        // },
        // 捕获 Object.setPrototypeOf()
        setPrototypeOf: function (target, prototype) {
            console.log(`特殊检测: setPrototypeOf 被调用 (对象: ${name})`);

            return Reflect.setPrototypeOf(target, prototype);
        },
        // 捕获 Object.getPrototypeOf()
        getPrototypeOf: function (target) {
            console.log(`特殊检测: getPrototypeOf 被调用 (对象: ${name})`);
            const nestedName = `${name}.${String("原型")}`;
            if(target.__proto__){
                // console.log(target)
                return watch(Reflect.getPrototypeOf(target),nestedName);
            }
            return Reflect.getPrototypeOf(target)
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
