// 14 map数据结构

// set get has delete clear size
let json = {
    name: 'aaa',
    skill: 'bbb',
}
console.log(json.name);

let map = new Map()
// json是键名 ， iam是键值
map.set(json, 'iam')
console.log(map);
// key是键名 ， json是键值
map.set('key', json)
console.log(map);

// get查看键值
console.log(map.get(json));
console.log(map.get('key'));

// has查找键名
console.log(map.has('key'));

// delete 删除
map.delete(json)
console.log(map);
// size 查看属性个数
console.log(map.size);

// clear 删除所有内容
map.clear()
console.log(map);
console.log(map.size);