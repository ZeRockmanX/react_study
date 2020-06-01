
import React from 'react'
import './style.css'
import Tx11_child from './tx11_child'

export default class Tx11 extends React.Component {

    // ?DOM初始化时 constructor->UNSAFE_componentWillMount->render->

    constructor(props) {
        super(props)
        this.state = {
            inputValue: 'init',
            list: ['item01', 'item02']
        }
    }

    // !componentWillMount 已经更名
    UNSAFE_componentWillMount() {
        console.log("1 - init - UNSAFE_componentWillMount/componentWillMount")
    }

    //render() {console.log("3 - init - render")}

    componentDidMount() {
        console.log("3 - init - componentDidMount")
    }

    // ?state有更新时 shouldComponentUpdate->UNSAFE_componentWillUpdate->render->componentDidUpdate
    // -----------------------------------------
    shouldComponentUpdate() {
        console.log("1 - shouldComponentUpdate")
        // return true才会继续到render处
        return true
    }
    // !componentDidUpdate 已经更名
    UNSAFE_componentWillUpdate() {
        console.log("2 - stateUpdate - UNSAFE_componentWillUpdate/componentDidUpdate")
    }

    //render() {console.log("3 - stateUpdate - render")}

    componentDidUpdate() {
        console.log("4 - stateUpdate - componentDidUpdate")
    }
    // -----------------------------------------


    render() {
        console.log("2 - init - 3 - stateUpdate - render")
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
                                <Tx11_child
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
