
import React from 'react'
import Tx12_child from './tx12_child'

export default class Tx12 extends React.Component {
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
                                <Tx12_child
                                    key={item + index}
                                    itemInfo={item}
                                    index={index}
                                    deleteItemOnChild={this.deleteItem.bind(this)}
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
