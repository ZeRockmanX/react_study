import React, { Component } from 'react';
class Tx11_child extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    // !组件第一次存在于Dom中，函数时不会被执行 所以初始化时不会被执行
    // !如果已经存在于Dom中，函数才会被执行
    // !componentWillReceiveProps 已经更名
    UNSAFE_componentWillReceiveProps() {
        console.log("1 - child - props - UNSAFE_componentWillReceiveProps/componentWillReceiveProps")
    }

    shouldComponentUpdate() {
        console.log("2 - child - props - shouldComponentUpdate")
        // reurn true才会继续到render处
        return true
    }

    // !componentDidUpdate 已经更名
    UNSAFE_componentWillUpdate() {
        console.log("3 - child - props - UNSAFE_componentWillUpdate/componentDidUpdate")
    }


    // !所有的子render执行完后才会依次执行componentDidUpdate
    componentDidUpdate() {
        console.log("5 - child - props - componentDidUpdate")
    }

    render() {
        console.log("4 - child - props - render")
        return (
            <>
                <li onClick={this.handleClick}>{this.props.itemInfo}</li>
            </>
        );
    }

    handleClick() {
        this.props.deleteItemOnChild(this.props.index)
    }

    // 只有在删除的时候才会被调用componentWillUnmount
    // 位置在componentDidUpdate之前
    componentWillUnmount(){
        console.log("删除时 - child - componentWillUnmount")
    }

    // !错误在渲染阶段中被捕获，但在事件处理程序中不会被捕获。
    componentDidCatch(){
        console.log("React-16.0 - render错误时触发 - child - componentDidCatch")
    }

}

export default Tx11_child;