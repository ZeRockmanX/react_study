import React, { Component } from 'react';
import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'
import store from './store/index'

//将方法统一写到一个文件，方便管理和调用
import { changeInputAction, addItemAction, deleteAction } from './store/actionCreators'


class Tx01 extends Component {

    constructor(props) {
        super(props)
        console.log(store.getState())
        //初始化时state数据从store里面拿
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        // 订阅store数据变化事件，state中的数据跟着变化
        store.subscribe(this.storeChange)
    }

    // 订阅事件： 如何redux数据有变化就更新state里面的数据
    storeChange() {
        this.setState(store.getState())
    }

    //分离到actionCreators.js中，并且通过export来给外部调用
    changeInputValue(e) {
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }

    //分离到actionCreators.js中，并且通过export来给外部调用
    clickBtn() {
        const action = addItemAction()
        store.dispatch(action)
    }

    //分离到actionCreators.js中，并且通过export来给外部调用
    deleteItem(e, index) {
        const action = deleteAction(index)
        store.dispatch(action)
    }

    render() {
        return (
            <div sytle={{ margin: '10px' }}>
                <div>
                    <Input
                        placeholder={this.state.inputValue}
                        sytle={{ width: '200px', marginRight: '10px' }}
                        onChange={this.changeInputValue}
                        value={this.state.inputValue}
                    />
                    <Button
                        type="primary"
                        onClick={this.clickBtn}
                    >Add</Button>
                </div>
                <div sytle={{ margin: '10px', width: '300px' }}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        //绑定删除事件绑定了两个事件this本身和index
                        renderItem={(item, index) => (<List.Item onClick={this.deleteItem.bind(this, index)}>{item}</List.Item>)}
                    />
                </div>
                <div>this.state.inputValue -> {this.state.inputValue}</div>
            </div>
        );
    }
}

export default Tx01;