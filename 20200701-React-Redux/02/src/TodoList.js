import React, { Component } from 'react';
import { connect } from 'react-redux'

class TodoList extends Component {
    render() {
        return (
            <div>
                <div>
                    <input
                        value={this.props.inputValue}
                        onChange={this.props.inputChange}
                    />
                    <button onClick={this.props.clickButton}>submit</button>
                </div>
                <ul>
                    {
                        this.props.list.map((item, index) => {
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