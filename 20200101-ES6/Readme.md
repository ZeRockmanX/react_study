### Study

```
01 ES6开发环境搭建
02 新的声明方式
03 变量的解析赋值
04 对象扩展运算符（...）和rest运算符
05 字符串模版 （``） 字符串查找includes 复制字符串repeat
06 数字相关操作
07 Json 数组
08 数组相关
09 严谨模式和箭头函数
10 函数和数组追加 (解构，in查找，循环forEach,filter,some,map) 数组转字符串(toString,join)
11 ES6对象
12 Symbol 静态属性
13 Set / WeakSet 数据结构 (不重复的数组结构/不重复的对象结构)
14 map数据结构
15 proxy 代理 预处理
16 Promise 回调
17 class 类
18 模块化操作 import 引入 export 输出
19 ES7 ES8 ...
```

### command
```
可以直接使用node index.js来执行文件
```

### 01 Init (It will change to ES5 code when you code for ES6)

```
cd 01
#init /01/ [index.html]
#init /01/dist/ is empty
#init /01/src/ [index.js]

npm init -y
#it will create package.json

npm install -g babel-cli
#babel can use es6 change to es5
#cli mean commnad

npm install --save-dev babel-preset-es2015 babel-cli

#create .babelrc on /root
{
    "presets": [
        "es2015"
    ],
    "plugins": []
}

# build es6 to es5
babel src/index.js -o dist/index.js

# Or you can modify package.json add:
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "babel src/index.js -o dist/index.js"
  },
# And you can use command
npm run build
```
### 05 Init

```
cd 05
#init /05/ [index.html]
#init /05/ [index.js]

npm init -y

#npm install -g live-server
#The browser will auto refreshed when you saving your file

or 也可以保存后实时刷新

npm install --save browser-sync （安装在当前目录下面）
在项目中的"scripts": {}处添加：
"dev":"browser-sync start --server --files *.*"
*.*表示调试器观察所有文件
dev表示自定义启动名，比如npm run dev

全局安装用法
npm install -g browser-sync
进入你的项目文件根目录
browser-sync start --server 

运行:
npm run dev
```