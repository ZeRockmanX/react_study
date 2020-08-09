// 08 数组新增
// * json 数组格式
let str1 = {
    '0': 'aaa',
    '1': 'bbb',
    '2': 'ccc',
    length: 3
}
//在有length的json数据可以使用Array.from转换成数组
let arr1 = Array.from(str1);
console.log(arr1);


// * Array.of方法 字符串转数组
let str2 = '[3,4,5,6]';
//使用eval，但是eval运行效能低
let arr2 = eval(str2);
console.log(arr2);
//使用Array.of生成数组
let arr3 = Array.of(3, 4, 5, 6);
console.log(arr3);


// * find() 查找方法
// 赋值了就是实例化的体现
let arr4 = ['aaa', 'bbb', 'ccc'];
console.log(arr4.find(function (value, index, arr5) {
    //就是循环查找，找到第一个则返回
    console.log(value);
    console.log(index);
    console.log(arr5);
    return value == 'bbb';
}));