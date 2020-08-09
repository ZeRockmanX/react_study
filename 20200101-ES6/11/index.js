// 11 ES6对象

// 简化赋值
let name1 = 'aaa'
let sex1 = 'bbb'
// es5 需要设置键名
let obj1 = { name1: name1, sex1: sex1 }
// es6 只需要填写变量名即可，键名自动生成为变量名
let obj2 = { name1, sex1 }
console.log(obj1)
console.log(obj2)

// 键名 key 值构建
let key = 'skill'
let obj3 = {
    [key]: 'web'
}
console.log(obj3)

// 对象内的自定义方法 普通/箭头
let obj4 = {
    add1: function (a, b) {
        return a + b
    },
    add2: (a, b) => a + b,
}
console.log(obj4.add1(1, 2))
console.log(obj4.add2(1, 2))

//is() 对比方法
// === 同值相等，is是严格相等
console.log(+0 === -0) //true
console.log(NaN === NaN) //false
console.log(Object.is(+0 === -0)) //false
console.log(Object.is(NaN, NaN)) //true

// assign 合并对象
let a = { a: 'aaa' }
let b = { b: 'bbb' }
let c = { c: 'ccc' }
let d = Object.assign(a, b, c);
let e = { ...a, ...b, ...c }

console.log(d)
console.log(e)