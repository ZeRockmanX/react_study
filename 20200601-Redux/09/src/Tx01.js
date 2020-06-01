import React, { Component } from 'react';
import 'antd/dist/antd.css'
import store from './store/index'
import { changeInputAction, addItemAction, deleteAction, getListAction } from './store/actionCreators'
import Tx01UI from './Tx01UI'
// 异步工具
import axios from 'axios'
// mock API请求
import mock_ajax_data from './mock_ajax_data'

// ! UI分离，只留下逻辑部分
class Tx01 extends Component {
    constructor(props) {
        super(props)
        console.log(store.getState())
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        store.subscribe(this.storeChange)
    }

    componentDidMount() {
        // 异步ajax请求 (mock的数据)
        axios.get('/get_mock_data')
            .then((res) => {
                const data = res.data.data
                const action = getListAction(data)
                store.dispatch(action)
            })
    }

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
            <Tx01UI
                inputValue={this.state.inputValue}
                list={this.state.list}
                changeInputValue={this.changeInputValue}
                clickBtn={this.clickBtn}
                deleteItem={this.deleteItem}
            />
        );
    }
}

export default Tx01;