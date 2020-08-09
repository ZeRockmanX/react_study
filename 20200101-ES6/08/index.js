// 08 数组相关

// * fill() 填充 
let arr = ['aaa', 'bbb', 'ccc'];

// 第一个参数是替换值，
// 第二个参数是索引号开始位从0开始（包含开始位）
// ! 第三个参数是索引号结束位从0开始（不会替换结束号位的内容!!!）
// 替换 索引号2开始到索引号3结束之前的内容
arr.fill('ddd', 2, 3)
console.log(arr);

// * forof 循环
let arr2 = ['111', '222', '333'];
// 常用
for (let item of arr2) {
    console.log(item)
}
// 带索引和内容
for (let item of arr2.entries()) {
    console.log(item)
}
// 一般常用带索引和内容
for (let [index, value] of arr2.entries()) {
    console.log('Index:' + index + ' -> Value:' + value)
}

// * 特殊循环取值
let arr3 = ['111', '222', '333'];
let list = arr3.entries();
console.log(list.next().value)
console.log('-----')
console.log(list.next().value)
console.log('+++++')
console.log(list.next().value)
console.log('%%%%%')
