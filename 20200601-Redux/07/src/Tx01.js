import React, { Component } from 'react';
import 'antd/dist/antd.css'
import store from './store/index'
import { changeInputAction, addItemAction, deleteAction } from './store/actionCreators'

// 引入使用分离出去到UI界面
import Tx01UI from './Tx01UI'

// ! UI分离，只留下逻辑部分
class Tx01 extends Component {
    constructor(props) {
        super(props)
        console.log(store.getState())
        //初始化时state数据从store里面拿
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        // 订阅store数据变化事件，state中的数据跟着变化
        store.subscribe(this.storeChange)
    }

    // 订阅事件： 如何redux数据有变化就更新state里面的数据
    storeChange() {
        this.setState(store.getState())
    }

    changeInputValue(e) {
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }

    clickBtn() {
        const action = addItemAction()
        store.dispatch(action)
    }

    deleteItem(e, index) {
        const action = deleteAction(index)
        store.dispatch(action)
    }

    render() {
        return (
            // UI的内容
            <Tx01UI
                //传值过去给UI使用
                inputValue={this.state.inputValue}
                list={this.state.list}
                //传方法过去给UI调用
                changeInputValue={this.changeInputValue}
                clickBtn={this.clickBtn}
                deleteItem={this.deleteItem}
            />
        );
    }
}

export default Tx01;