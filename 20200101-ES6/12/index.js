// 12 Symbol 静态属性

// 保护属性
let obj = { name: 'aaa', sex: 'bbb' }
let age = Symbol();
obj[age] = 18

// 循环中不会出现age属性
for (let item in obj) {
    console.log(obj[item]);
}
//正常调用使用[]
console.log(obj[age]);


// Symbol键名的使用
let aaa = Symbol()
let obj2 = {
    [aaa]: 'bbb',
    ddd: 'ddd',
}
console.log(obj2[aaa])
obj2[aaa] = 'ccc'
console.log(obj2[aaa])

// 循环中不会出现[aaa]属性
for (let item in obj2) {
    console.log(obj2[item]);
}

let a = new String
let b = new Number
let c = new Boolean
let d = new Array
let e = new Object
let f = Symbol()

const symbol1 = Symbol();
const symbol2 = Symbol(42);
const symbol3 = Symbol('foo');

// ! 每个从Symbol()返回的symbol值都是唯一的!!!
console.log(typeof symbol1);
// expected output: "symbol"

console.log(symbol2 === 42);
// expected output: false

console.log(symbol3.toString());
// expected output: "Symbol(foo)"

console.log(Symbol('foo') === Symbol('foo'));
// expected output: false