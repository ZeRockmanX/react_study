import React, { Component } from 'react';
class Tx08_child extends Component {
    //props里存在调用这个class的键名
    constructor(props) {
        super(props)
        //加这样一句就可以不用每个调用这个方法的地方追加bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    render() {
        //单项数据流 父传子中的state数据只能用，不能改写，改写需要父类传方法到子类，才能在子类中修改
        console.log(this.props.list)
        return (
            <>
                <li onClick={this.handleClick}>{this.props.itemInfo}</li>
            </>
        );
    }

    handleClick() {
        // 父组件定义的deleteItemOnChild
        this.props.deleteItemOnChild(this.props.index)
    }
}

export default Tx08_child;