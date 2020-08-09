// 16 Promise 回调

// ES5 回调地狱
function fun1(a) {
    a();
}
function fun2(b) {
    b();
};
function fun3(c) {
    console.log("333");
};
fun1(() => {
    fun2(() => {
        fun3()
    })
});

// Promise
let state = 1
function step1(resolve, reject) {
    console.log("1 start")
    if (state == 1) {
        resolve('1 success')
    } else {
        reject('1 error')
    }
}
function step2(resolve, reject) {
    console.log("2 start")
    if (state == 1) {
        resolve('2 success')
    } else {
        reject('2 error')
    }
}
function step3(resolve, reject) {
    console.log("3 start")
    if (state == 1) {
        resolve('3 success')
    } else {
        reject('3 error')
    }
}

// Promise用then来顺序执行 then后面使用前面一个中的resolve 
new Promise(step1)
    .then(function (val) {
        console.log(val)
        return new Promise(step2)

    }).then(function (val) {
        console.log(val)
        return new Promise(step3)
    })
    .then(function (val) {
        console.log(val)
    });

// ? 如需使用catch捕获reject (个人感觉格式仍然有点像回调地狱的写法风格)
new Promise(step1)
    .then(function (val) {
        console.log(val)
        return new Promise(step2)
            .then(function (val) {
                console.log(val)
                return new Promise(step3)
                    .then(function (val) {
                        console.log(val)
                    }).catch(err => console.log(err));
            }).catch(err => console.log(err))
    }).catch(err => console.log(err))

// ES8 async / await (格式更明朗)
// async里面使用await来顺序执行，出错使用try，catch捕获reject
async function run() {
    //await必须写在async里面
    try {
        await new Promise(step1);
    } catch{
    }
    try {
        await new Promise(step2);
    } catch{
    }
    try {
        await new Promise(step3);
    } catch{
    }

    // catch可捕获所有
    try {
        await new Promise(step1);
        await new Promise(step2);
        await new Promise(step3);
    } catch{
    }
}
run()