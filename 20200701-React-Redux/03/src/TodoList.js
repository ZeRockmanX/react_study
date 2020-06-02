import React, { Component } from 'react';
import { connect } from 'react-redux'

// 可优化为无状态化组件
/*
const TodoList = (props)=>{
            let {inputValue,inputChange,clickButton,list}=props
            return (
                <div>
                    <div>
                        <input
                            value={inputValue}
                            onChange={inputChange}
                        />
                        <button onClick={clickButton}>submit</button>
                    </div>
                    <ul>
                        {
                            list.map((item, index) => {
                                return (<li key={index}>{item}</li>)
                            })
                        }
                    </ul>
                </div>);
}
*/

// class优化，也可直接优化成无状态化组件
class TodoList extends Component {
    render() {
        //不用每次写this
        let { inputValue, inputChange, clickButton, list } = this.props
        return (
            <div>
                <div>
                    <input
                        value={inputValue}
                        onChange={inputChange}
                    />
                    <button onClick={clickButton}>submit</button>
                </div>
                <ul>
                    {
                        list.map((item, index) => {
                            return (<li key={index}>{item}</li>)
                        })
                    }
                </ul>
            </div>);
    }
}

//映射器 用于翻译store内的数据转为传入的props内容
const stateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

//映射器 用于翻译store内的方法转为传入的props内容
const dispathToProps = (dispatch) => {
    return {
        inputChange(e) {
            let action = {
                type: 'change_input',
                value: e.target.value
            }
            dispatch(action)
        },
        clickButton(e) {
            let action = {
                type: 'add_item'
            }
            dispatch(action)
        }

    }
}

//连接映射器 state内容转props state中的方法转为props的方法，执行完后merge数据并且给到state中，然后在render时候放到页面上
export default connect(stateToProps, dispathToProps)(TodoList);