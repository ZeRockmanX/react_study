import React, { Component } from 'react';
import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'
import store from './store/index'

class Tx01 extends Component {

    constructor(props) {
        super(props)
        console.log(store.getState())
        //初始化时state数据从store里面拿
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        // 订阅store数据变化事件，state中的数据跟着变化
        store.subscribe(this.storeChange)
    }


    // 输入文本function
    changeInputValue(e) {
        // 把输入的内容做成一个数组
        const action = {
            type: 'changeInput',
            value: e.target.value
        }
        //将包含输入内容的数组传给(告诉)redux -> (接着请去reducer.js查看)
        store.dispatch(action)
    }

    // 订阅事件： 如何redux数据有变化就更新state里面的数据
    storeChange() {
        this.setState(store.getState())
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
                    <Button type="primary">Add</Button>
                </div>
                <div sytle={{ margin: '10px', width: '300px' }}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={item => (<List.Item>{item}</List.Item>)}
                    />
                </div>
                <div>this.state.inputValue -> {this.state.inputValue}</div>
            </div>
        );
    }
}

export default Tx01;