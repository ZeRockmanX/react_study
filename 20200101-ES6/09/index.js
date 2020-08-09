// 09 严谨模式和箭头函数

// 严谨模式
function add(a, b) {
    'use strict'
    // ! 严格模式通过在脚本或函数的头部添加 "use strict"; 表达式来声明。
    // x = 3.14; // 报错 (x 未定义)
    return a + b;
}
console.log(add(1, 2))
console.log(add.length) // 返回参数个数， 如果存在默认值 如add(a, b=1) , 则只返回一个参数个数


// 箭头函数
let jia = (a, b) => a + b; // 等同于上面函数add的写法，如果要写return或者多行需要添加{}
console.log(jia(1, 2))