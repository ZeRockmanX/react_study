import React, { Component } from 'react';
//store在app处由Provider传入
//import store from './store'
import { connect } from 'react-redux'

class TodoList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div>
            <div>
                <input value={this.props.inputValue} />
                <button>submit</button>
            </div>
        </div>);
    }
}

//映射器 用于翻译store内的数据转为传入的props内容
const stateToProps=(state)=>{
    return {
        inputValue:state.inputValue
    }
}

//连接映射器 state内容转props
export default connect(stateToProps, null)(TodoList);