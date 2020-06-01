import React, { Component } from 'react';
import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'
import store from './store/index'

class Tx01 extends Component {

constructor(props){
    super(props)
    console.log(store.getState())
    this.state=store.getState()
}

    render() {
        return (
            <div sytle={{ margin: '10px' }}>
                <div>
                    <Input
                        placeholder={this.state.inputValue}
                        sytle={{ width: '200px', marginRight: '10px' }}
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
            </div>
        );
    }
}

export default Tx01;