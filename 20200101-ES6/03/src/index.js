// 03 变量的解析赋值
let a = 0;
let b = 1;
let c = 2;
//可以直接写成数组结构
let [a, b, c] = [0, 1, 2];

// 左右结构必须相等
let [a, [b, c], d] = [1, [2, 3], 4];

// 可以设置默认值
let [foo = true] = [];
console.log(foo);


//undefined和null的区别
//undefined是未定义
//null是定义了但没有值
let [a, b = 'B的初始值'] = ['A赋值'];

let [a, b = 'B的初始值'] = ['A赋值', null];


//对象赋值

let { foo, boo } = { foo: "foo value", boo: "foo value" };

console.log(foo);
console.log(boo);

// ! 如果先命名了变量，再赋值需要加上括号
let foo;
({ foo } = { foo: 'foo value' });
console.log(foo);

// 字符串赋值
const [a, b, c, d, e] = 'Hello';
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
// * 打出每个字符 常用于权限判断（每个字母表示一个等级）