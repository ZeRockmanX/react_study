
import React from 'react'
import './style.css'
// 导入子组件
import Tx07_child from './tx07_child'


export default class Tx07 extends React.Component {
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
                                <Tx07_child />
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
