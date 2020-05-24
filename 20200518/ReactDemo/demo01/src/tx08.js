
import React from 'react'
import './style.css'
// 导入子组件
import Tx08_child from './tx08_child'


export default class Tx08 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: 'init',
            list: ['item01', 'item02']
        }
    }

    render() {
        return (
            <>
                <div>
                    <input value={this.state.inputValue} onChange={this.inputFunc.bind(this)} />
                    <button onClick={this.addList.bind(this)}>add</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <Tx08_child
                                    // 左边传什么键名，子组件就用 this点键名 获取
                                    key={item + index}
                                    itemInfo={item}
                                    index={index}
                                    // 子组件修改父组件 需要把父组件中的方法传给子组件中使用
                                    // 在constructor中追加
                                    // this.deleteItem=this.deleteItem.bind(this)
                                    // 就可在这里直接写this.deleteItem
                                    deleteItemOnChild={this.deleteItem.bind(this)}
                                    // 单项数据流 父传子中的state数据只能用，不能改写，改写需要父类传方法到子类，才能在子类中修改
                                    list={this.state.list}
                                />
                            )
                        })
                    }
                </ul>
            </>
        );
    }
    inputFunc(e) {
        this.setState(
            { inputValue: e.target.value }
        )
    }

    addList() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }

    deleteItem(index) {
        let newList = this.state.list
        newList.splice(index, 1)
        this.setState({
            list: newList
        })
    }
}
