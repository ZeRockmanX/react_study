import React, { Component } from 'react'
class Tx03 extends Component {
    // 初始化props
    constructor(props) {
        // 继承父类的props
        super(props)
        // {}代表是个对象obj
        this.state = {
            // obj赋值使用:冒号
            inputValue: 'init',
            list: ['item01', 'item02']
        }
    }

    render() {
        return (
            // <>里是html代码 {}里表示js代码
            <>
                <div>
                    <input value={this.state.inputValue} onChange={this.inputFunc.bind(this)} />
                    <button onClick={this.addList.bind(this)}>add</button>
                </div>
                <ul>
                    {
                        // map(value,key),key要展现出来，不然嘿呦warning警告
                        this.state.list.map((item, index) => {
                            return <li id={index + item}>{item}</li>
                        })
                    }
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

    addList() {
        // this和更新的理由同上
        // ES6语法 ... 三个点表示将现有的数据扩展开
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            //等于 list: ['item01', 'item02', this.state.inputValue],
            inputValue: ''
        })
        //console.log(this.state.list[2])就是第一个追加进来的数据
    }
}

export default Tx03