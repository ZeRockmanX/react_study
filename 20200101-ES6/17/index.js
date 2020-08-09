// 17 class 类

// 同PHP
class Coder {
    name(val) {
        console.log(val)
        return val;
    }
    // 隔开不用像对象一样加逗号 ','
    skill(val) {
        // 调用内部方法用this
        console.log(this.name('aaa') + ' skill is: ' + val)
    }
    // 构造函数 new时传参
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    add() {
        return this.a + this.b
    }
}
//实例化一个类
let res = new Coder(1, 2)
console.log(res.add());
res.name('abc')
res.skill('bbb')

// 继承同PHP
class Htmler extends Coder { }
let htmler_res = new Htmler
//子类调用父类方法
htmler_res.name('子类调用父类方法')