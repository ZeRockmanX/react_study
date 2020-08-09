// 04 对象扩展运算符（...）和rest运算符

// 对象扩展运算符
foo('a', 'b', 'c');

//不知道会有几个参数传入，可以使用 ... 来传入，这样即使有不存在的参数也不会报错
function foo(...arg) {
    console.log(arg[0]);
    console.log(arg[1]);
    console.log(arg[2]);
    console.log(arg[3]);
    // 4，5不存在也 不会报错，只是显示undefined
    console.log(arg[4]);
    console.log(arg[5]);
}

let aar1 = ['aaa', 'bbb', 'ccc'];
// ! 不会重新开辟新的内存空间，只是arr2指向arr1的内存地址
let arr2 = arr1;
arr2.push('ddd');
// ! arr1和aar2的结果是一样的
console.log(arr1);
console.log(arr2);

let aar1 = ['aaa', 'bbb', 'ccc'];
// ? 使用 对象运算符(...) 则会重新开辟新的内存空间
let arr2 = [...arr1];
arr2.push('ddd');
console.log(arr1);
console.log(arr2);


// rest扩展运算符
boo(0, 1, 2, 3, 4, 5, 6, 7)
// 不知道剩余（rest）还会有几个参数传入
function boo(first, ...arg) {
    console.log(first);
    // * For/of循环，比for i++精简/易懂
    for (let val of arg) {
        console.log(val);
    }
}
