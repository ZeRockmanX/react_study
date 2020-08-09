// 10 函数和数组追加 (解构，in查找，循环forEach,filter,some,map) 数组转字符串(toString,join)

// 对象的函数解构 JSON
let json = {
    a: 'aaa',
    b: 'bbb',
    c: 'ccc',
}

function fun({ a, b, c }) {
    console.log(a, b, c)
}

fun(json)


// 数组解构 ARRAY
let arr = ['aaa', 'bbb', 'ccc']
function test(a, b, c) {
    console.log(a, b, c)
}
test(...arr)//...展开arr数组

// in 查找 JSON
let obj = {
    a: 'ccc',
    b: 'ddd',
}
console.log('b' in obj) // 找的是键名 不是值

// in 查找 ARRAY
let array = [, '', ,]
console.log(1 in array); // 数组空位的判断

//数组遍历循环
let arrayFor = ['aaa', 'bbb', 'ccc']
for (let key in arr) { console.log(key) } //for in 循环键名
for (let val of arr) { console.log(val) } //for of 循环键值
arr.forEach((val, index) => console.log(index, val))
arr.filter(x => console.log(x))
arr.some(x => console.log(x))
console.log(arr.map(x => x))
console.log(arr.map(x => 'web')) //替换了所有值

//数组转字符串
let arrayString = ['aaa', 'bbb', 'ccc']
console.log(arrayString.toString()) //会得到一串字符
console.log(arrayString.join('-')) //会得到一串字符中间用-连接