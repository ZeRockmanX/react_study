// 06 数字相关操作

// * 二进制声明 Binary 0B开头
let binary = 0B010101;
console.log(binary);

// * 八进制声明 Octal 0o开头
let octal = 0o666;
console.log(octal);


// * 数字判断
let a = 11 / 4;
// 是否是数字
console.log(Number.isFinite(a));
console.log(Number.isFinite('aaa'));
// NaN特殊的非数字
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(undefined));

let b = 918.1;
//是否是整型
console.log(Number.isInteger(b));
//转换成整型
console.log(Number.parseInt(b));
//转换成浮点
console.log(Number.parseFloat(b));


// * 安全范围内的整型 2的53次方减1 负2的53次方加1
let max = Math.pow(2, 53) - 1
let min = -Math.pow(2, 53) + 1
//是否是安全范围内的整型
console.log(Number.isSafeInteger(b));
// 可以直接使用常量的最大最小安全整型
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
