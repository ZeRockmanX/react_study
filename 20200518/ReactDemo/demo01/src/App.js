import React, { Component } from 'react'
//Es6写法的结构赋值 等同于
//import React from 'react'
//const Component = React.Component

// component允许使用js写html的语法（语法稍微有点区别）
class App extends Component {
    render() {
        return (
            // jsx写法 简略含义：在代码里 <>中是html语法，{}是js语法
            <div className='title'>
                {true ? '111' : '222'}
                Hello World
            </div>
        )
        // js写法
        // var child1 = React.createElement('li',null,'Hello world for js')
        // var root = React.createElement('ul',{className:'title'},child1)
    }
}

//给组建起名字，暴露组建接口 自定义组建必须大写开头
export default App