// 15 proxy 代理 预处理

// 普通对象
let obj = {
    add: function (val) {
        return val + 100
    },
    name: 'aaa'
}

// Proxy({原普通对象},{代理预处理事件})
// 就是拦截机制处理
let proxy = new Proxy({
    add: function (val) {
        return val + 100
    },
    name: 'bbb'
}, {
    get: function (target, key, receiver) {
        // target就是第一个设置的对象
        console.log(target)
        // key是第一个对象的键名
        console.log(key)
        // 必须有return否则外面没有输出
        return target[key]

        //如果target对象中指定了getter，receiver则为getter调用时的this值。
        //Reflect.get()方法与从 对象 (target[propertyKey]) 中读取属性类似，但它是通过一个函数执行来操作的。
        //return Reflect.get(target, key, receiver);
    },
    set: function (target, key, value, receiver) {
        console.log(`设置 KEY:${key} 的新 VALUE :${value}`);
        //target就是第一个设置的对象,key是第一个对象的键名,value是要设置的新键值
        return target[key] = value
    },
})
// SET 代理设置属性
proxy.name = 'ccc'
// GET 代理获取属性
console.log(proxy.name)


var p = new Proxy(function () { }, {
    apply: function (target, thisArg, argumentsList) {
        console.log('called: ' + argumentsList.join(', '));
        return argumentsList[0] + argumentsList[1] + argumentsList[2];
    },
    /*
        apply: function (target, ctx, args) {
            return Reflect.apply(...arguments) * 2;
        }
        */
});
// APPLY 代理使用方法
console.log(p(1, 2, 3));


/*
Proxy支持拦截的操作，一共有13种：

get(target, propKey, receiver)：拦截对象属性的读取，比如proxy.foo和proxy['foo']。
set(target, propKey, value, receiver)：拦截对象属性的设置，比如proxy.foo = v或proxy['foo'] = v，返回一个布尔值。
has(target, propKey)：拦截propKey in proxy的操作，返回一个布尔值。
deleteProperty(target, propKey)：拦截delete proxy[propKey]的操作，返回一个布尔值。
ownKeys(target)：拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、for...in循环，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而Object.keys()的返回结果仅包括目标对象自身的可遍历属性。
getOwnPropertyDescriptor(target, propKey)：拦截Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象。
defineProperty(target, propKey, propDesc)：拦截Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值。
preventExtensions(target)：拦截Object.preventExtensions(proxy)，返回一个布尔值。
getPrototypeOf(target)：拦截Object.getPrototypeOf(proxy)，返回一个对象。
isExtensible(target)：拦截Object.isExtensible(proxy)，返回一个布尔值。
setPrototypeOf(target, proto)：拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。
apply(target, object, args)：拦截 Proxy 实例作为函数调用的操作，比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)。
construct(target, args)：拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args)。
*/