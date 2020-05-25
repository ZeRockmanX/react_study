
import React from 'react'
import './style.css'
import Tx09_child from './tx09_child'


export default class Tx09 extends React.Component {
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
                                <Tx09_child
                                    key={item + index}
                                    itemInfo={item}
                                    index={index}
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
