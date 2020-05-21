import React, { Component } from 'react'
class Tx02 extends Component {
    // 初始化props
    constructor(props) {
        // 继承父类的props
        super(props)
        // {}代表是个对象obj
        this.state = {
            // obj赋值使用:冒号
            inputValue: 'init',
            list: []
        }
    }

    render() {
        return (
            // <>里是html代码 {}里表示js代码
            <>
                <div><input value={this.state.inputValue} onChange={this.inputFunc.bind(this)} /><button>add</button></div>
                <ul>
                    <li>one</li>
                    <li>two</li>
                </ul>
            </>
        );
    }
    inputFunc(e) {
        // e只是个约定变量名
        console.log(e)
        // !此处不能直接使用 this 必须在调用的地方使用bind(this)才能把this带到这个func里面使用
        // onChange={this.inputFunc.bind(this)}
        // 更新需要使用 setState() 而不是直接使用 = 来更新
        this.setState(
            // 对象obj，使用的是:赋值
            { inputValue: e.target.value }
        )
    }
}

export default Tx02