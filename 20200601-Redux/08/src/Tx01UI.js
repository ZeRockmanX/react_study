import React from 'react';
import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'

// ! UI部分，没有业务逻辑可以使用无状态组件，不用class以及不用继承Component组件，里面是纯函数内容，这样可以提高性能
const Tx01UI = (props) => {
    return (
        < div sytle={{ margin: '10px' }}>
            <div>
                <Input
                    placeholder={props.inputValue}
                    sytle={{ width: '200px', marginRight: '10px' }}
                    onChange={props.changeInputValue}
                    value={props.inputValue}
                />
                <Button
                    type="primary"
                    onClick={props.clickBtn}
                >
                    Add
            </Button>
            </div>
            <div sytle={{ margin: '10px', width: '300px' }}>
                <List
                    bordered
                    dataSource={props.list}
                    // 使用匿名函数来传递index
                    renderItem={(item, index) => (
                        <List.Item onClick={() => { props.deleteItem(index) }}>{item}</List.Item>
                    )}
                />
            </div>
        </div >
    )
}

export default Tx01UI;