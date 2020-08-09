// 18 模块化操作 import 引入 export 输出

// 需要两个文件
// a文件export导出，b文件import导入

// aaa.js
export let z = 'zzz'
// 或者多个
let a = 'aaa'
let b = 'bbb'
let c = 'ccc'
export { a, b, c }
// 或者别名
export {
    aname as a,
    bsex as b,
    cskill as c
}
// bbb.js
import { z } from './aaa.js'
console.log(z)
import { a, b, c } from './aaa.js'
console.log(a)
import { aname, bsex, cskill } from './aaa.js'
console.log(aname)

// ccc.js
export default d = 'ddd'
// ddd.js
// 由于使用defult则在引入的地方可以自定义引入的名字
import ddd from './ccc.js'
console.log(ddd)

// eee.js
export function eee() {
    console.log('111')
}
// fff.js
// 方法同样适用导入导出
import eee from './eee.js'
eee()

// ggg.js
function ggg() {
    console.log('222')
}
export { ggg as g }
// hhh.js
// 方法同样适用导入导出用别名
import g from './ggg.js'
g()

// iii.js
export default function () {
    console.log('333')
}
// jjj.js
// 方法同样适用 由于使用defult则在引入的地方可以自定义引入的名字
import i_i_i from './iii.js'
i_i_i()