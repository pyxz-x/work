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