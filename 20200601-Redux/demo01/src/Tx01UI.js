import React, { Component } from 'react';
import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'

// ! UI部分，仅包含渲染页面没有业务逻辑
class Tx01UI extends Component {

    render() {
        return (
            <div sytle={{ margin: '10px' }}>
                <div>
                    <Input
                        placeholder={this.props.inputValue}
                        sytle={{ width: '200px', marginRight: '10px' }}
                        onChange={this.props.changeInputValue}
                        value={this.props.inputValue}
                    />
                    <Button
                        type="primary"
                        onClick={this.props.clickBtn}
                    >
                        Add
                    </Button>
                </div>
                <div sytle={{ margin: '10px', width: '300px' }}>
                    <List
                        bordered
                        dataSource={this.props.list}
                        // 使用匿名函数来传递index
                        renderItem={(item, index) => (
                            <List.Item onClick={() => { this.props.deleteItem(index) }}>{item}</List.Item>
                        )}
                    />
                </div>
            </div>
        );
    }
}

export default Tx01UI;