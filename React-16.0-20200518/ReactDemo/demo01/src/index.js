import React from 'react'
import ReactDOM from 'react-dom'

// !Hello world
import App from './App'
ReactDOM.render(<App />, document.getElementById('root'))

// !简单按钮
// import Tx01 from './tx01'
// ReactDOM.render(<Tx01 />, document.getElementById('root'))

// !setState 状态更新
// import Tx02 from './tx02'
// ReactDOM.render(<Tx02 />, document.getElementById('root'))

// !map循环，增加项目到列表
// import Tx03 from './tx03'
// ReactDOM.render(<Tx03 />, document.getElementById('root'))

// !删除列表项目，踩坑：禁止直接更新this.state里面的数据
// import Tx04 from './tx04'
// ReactDOM.render(<Tx04 />, document.getElementById('root'))

// !踩坑 1,注释 2,css引用 3,className 4,输入带html的数据 5,forhtml
// import Tx05 from './tx05'
// ReactDOM.render(<Tx05 />, document.getElementById('root'))

// !快速搭建基本框架 Simple React Snippets
// import Tx06 from './tx06'
// ReactDOM.render(<Tx06 />, document.getElementById('root'))

// !父子组件拆分
// import Tx07 from './tx07'
// ReactDOM.render(<Tx07 />, document.getElementById('root'))

// !父子组件 父传子 子传父 , 
// !单项数据流 父传子中的state数据只能用，不能改写，改写需要父类传方法到子类，才能在子类中修改
// import Tx08 from './tx08'
// ReactDOM.render(<Tx08 />, document.getElementById('root'))

// !传值校验类型 （非typescript）
// import Tx09 from './tx09'
// ReactDOM.render(<Tx09 />, document.getElementById('root'))

// !ref 绑定
// import Tx10 from './tx10'
// ReactDOM.render(<Tx10 />, document.getElementById('root'))

// !生命周期
// React_生命周期_01.jpg
// React_生命周期_02.jpg
// React_生命周期.js
// ?DOM初始化时 constructor->UNSAFE_componentWillMount->render->
// ?state有更新时 shouldComponentUpdate->UNSAFE_componentWillUpdate->render->componentDidUpdate
// ?props父传子更新时 UNSAFE_componentWillMount->shouldComponentUpdate->UNSAFE_componentWillUpdate->render->componentDidUpdate(所有render后依次执行)
// import Tx11 from './tx11'
// ReactDOM.render(<Tx11 />, document.getElementById('root'))

// !性能改善 不必每次都更新渲染 shouldComponentUpdate
// import Tx12 from './tx12'
// ReactDOM.render(<Tx12 />, document.getElementById('root'))

// !axios ajax远程请求
// import Tx13 from './tx13'
// ReactDOM.render(<Tx13 />, document.getElementById('root'))

// ! 三种bind方法Test， CSS动画样式
// import Tx14 from './tx14'
// ReactDOM.render(<Tx14 />, document.getElementById('root'))

// reacr-transition-group 动画库(官方库) CSSTransition
// import Tx15 from './tx15'
// ReactDOM.render(<Tx15 />, document.getElementById('root'))

// 多DOM动画 reacr-transition-group 动画库(官方库) TransitionGroup
// import Tx16 from './tx16'
// ReactDOM.render(<Tx16/>, document.getElementById('root'))