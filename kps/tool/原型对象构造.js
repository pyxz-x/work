Event.prototype
注意有没有构造函数与symbol
看属性描述符
Object.getOwnPropertyDescriptors(Event.prototype)
找构造函数的描述符
Object.getOwnPropertyDescriptors(Event)
注意prototypr中的writable是否为true，浏览器中为false，一些属性是否含有get与set
定义symbol
a = {}
Object.defineProperties(a, {
    [Symbol.toString]: { 'value': '2' }
})

一些构造函数不可以new也不可以a() 会报错
定义全局对象 Event
// 定义构造函数
Object.defineProperty(window, 'Event', {
    configurable: true,
    enumerable: false,
    writable: true,
    value: function Event() { }   // 会通过tosting方法检测出来  需要函数保护 
})
// 定义构造函数中的属性
Object.defineProperties(Event, {
    AT_TARGET: { value: 2, writable: false, enumerable: true, configurable: false },
    BUBBLING_PHASE: { value: 3, writable: false, enumerable: true, configurable: false },
    CAPTURING_PHASE: { value: 1, writable: false, enumerable: true, configurable: false },
    NONE: { value: 0, writable: false, enumerable: true, configurable: false },
    length: { value: 1, writable: false, enumerable: false, configurable: true },
    name: { value: 'Event', writable: false, enumerable: false, configurable: true },
    prototype: { value: Event.prototype, writable: false, enumerable: false, configurable: false }
})
// 处理原型对象
// 处理get方法
let EventGetter = {
    bubblesget: function () { },
    cancelBubbleget: function () { }
}
Object.defineProperty(EventGetter.bubblesget, 'name', { name: 'get bubbles' })
Object.defineProperty(EventGetter.cancelBubbleget, 'name', { name: 'get cancelBubble' })

// 处理set方法
let EventSetter = {
    cancelBubbleset: function () { }
}
Object.definePropertys(EventSetter.cancelBubbleset, {
    name: { value: 'set cancelBubble' },
    length: { value: 1 }
})

Object.defineProperties(Event.prototype, {
    AT_TARGET: { value: 2, writable: false, enumerable: true, configurable: false },
    BUBBLING_PHASE: { value: 3, writable: false, enumerable: true, configurable: false },
    CAPTURING_PHASE: { value: 1, writable: false, enumerable: true, configurable: false },
    NONE: { value: 0, writable: false, enumerable: true, configurable: false },
    bubbles: { set: undefined, enumerable: true, configurable: true, get: function () { } },
    cancelBubble: { enumerable: true, configurable: true, get: function () { }, set: function () { } },
    [Symbol.toString]: { value: 'Event', writable: false, enumerable: false, configurable: true }
})

每一个对象都会绑定一个 vm属性