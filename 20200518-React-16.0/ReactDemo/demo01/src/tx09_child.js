import React, { Component } from 'react';
// 规定属性类型
import PropTypes from 'prop-types'

class Tx09_child extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    render() {
        return (
            <>
                <li onClick={this.handleClick}>{this.props.itemInfo}
                    <span style={{color:'#CF0000'}}> |{this.props.addNewPointOnchild}| </span>
                </li>
            </>
        );
    }

    handleClick() {
        // 父组件定义的deleteItemOnChild
        this.props.deleteItemOnChild(this.props.index)
    }
}

Tx09_child.propsTypes = {
    key: PropTypes.any,
    // isRequired必传项目，父类调用的时候必须赋值 <Tx09_child itemInfo=xxx
    itemInfo: PropTypes.string.isRequired,
    index: PropTypes.number,
    // func是方法
    deleteItemOnChild: PropTypes.func,
    list: PropTypes.any,
    addNewPointOnchild: PropTypes.string,
}
Tx09_child.defaultProps = {
    addNewPointOnchild: 'this red text is add on child',
}

export default Tx09_child;