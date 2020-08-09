// 05 字符串模版 （``）

// * 字符串模版 （``）
let foo = "aaaaaa";
let boo = "bbbb";
//原来使用 + 来连接
document.write("Here is " + foo + boo + "<br/>");
//（``）<- 连接符
document.write(`Here is ${foo}${boo}</br>`);

//支持运算符
let a = 1;
let b = 2;
let result = `${a + b}`
document.write(`${result}`);



document.write(`<br/>`);

// * 字符串查找
let c = 'aaa';
let d = 'aasdasdxxxcfaaaxzxc';
//d.indexOf(d)可以找到a所在b中的index位置 >0表示找到
document.write(d.indexOf(c) > 0);

//可以使用includes代替，这样直接返回true或false,简化写法
document.write(d.includes(c));
document.write(`<br/>`);

//查找在头部
document.write(d.startsWith(c));
document.write(`<br/>`);

//查找在尾部
document.write(d.endsWith(c));
document.write(`<br/>`);



// * 复制字符串
document.write('==|'.repeat(20));
document.write(`<br/>`);

