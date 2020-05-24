
//使用 React.Component代替： import React, { Component } from 'react' 
import React from 'react'
// css的引入方法
import './style.css'

// 使用默认名Tx05 export 出去，而无需使用 class Tx04 extends Component {} 然后再 export default Tx04出去
export default class Tx05 extends React.Component {
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
                {/* 注释1 */}
                { 
                    //注释2
                }
                <div>
                    <label htmlFor='inhere'>click this 'for'(change to use htmlFor) to input (bind lable to input)</label>
                    {/* html的class 需要改写为className */}
                    <input id='inhere' className="tx05use" value={this.state.inputValue} onChange={this.inputFunc.bind(this)} />
                    <button onClick={this.addList.bind(this)}>add</button>
                </div>
                <ul>
                    {
                        // map(value,key),key要展现出来，不然会有warning警告
                        this.state.list.map((item, index) => {
                            return (
                                <li
                                    id={index + item}
                                    onClick={this.deleteItem.bind(this, index)}
                                    // 支持展示标签内容 接收带有html标签效果的内容 需要两个大括号
                                    dangerouslySetInnerHTML={{__html:item}}
                                >
                                </li>)
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

    deleteItem(index) {
        let newList = this.state.list
        newList.splice(index, 1)
        this.setState({
            list: newList
        })
        // !禁止直接更新this.state里面的数据！！！对性能有严重的影响
        // !禁止直接更新this.state里面的数据！！！
        // !禁止直接更新this.state里面的数据！！！
        /*
        this.state.list.splice(index, 1)
        this.setState({
            list: this.state.list
        })
        */
    }
}
