// 13 Set / WeakSet 数据结构 (不重复的数组结构/不重复的对象结构)

// Set
let setArr = new Set(['aaa', 'bbb', 'ccc'])
console.log(setArr);
// 删除指定
setArr.delete('ccc');
console.log(setArr);
// 删除所有
setArr.clear();
console.log(setArr);
// 不同于数组Array.push，添加使用add，但是不能添加已有的
setArr.add('ddd');
console.log(setArr);
setArr.add('ddd');
console.log(setArr);
// 不同于数组Array.length，内容个数查询使用size
console.log(setArr.size);
// 查找 has
console.log(setArr.has('ddd'));

// WeakSet 
let weakObj = new WeakSet()
let obj = { a: 'aaa', b: 'bbb' }
weakObj.add(obj)
console.log(weakObj)

// WeakSet 也不允许添加重复，但是有坑
// ! 坑
let weakObj1 = new WeakSet()
let obj1 = { a: 'aaa', b: 'bbb' }
let obj2 = { a: 'aaa', b: 'bbb' }

weakObj1.add(obj1)
weakObj1.add(obj2)
// ! 可以同时存在，因为obj1和obj2是不同的内存地址
console.log(weakObj1)

let weakObj2 = new WeakSet()
let obj3 = { a: 'aaa', b: 'bbb' }
// ! 相同内存地址
let obj4 = obj3

weakObj2.add(obj3)
weakObj2.add(obj4)
// ! 这样才只有一组obj存在
console.log(weakObj2)