import React, { Component } from 'react';
class Tx12_child extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    
    // !使用chrome中的react development tools中的Components中的设置选项Highlight updates when components render.可以看见哪些被渲染的组件
    // ?有两个传参 nextProps,nextState
    shouldComponentUpdate(nextProps,nextState) {
        // 不使用shouldComponentUpdate判断的话，输入框输入字母会不断渲染子页面
        // 下次数据不同于当前数据时（只有itemInfo有变化才渲染组件）
        if (nextProps.itemInfo !== this.props.itemInfo) {
            return true;
        } else {
            return false;
        }
    }

    render() {
        console.log("不使用shouldComponentUpdate判断的话，输入框输入字母会不断渲染子页面")
        return (
            <>
                <li onClick={this.handleClick}>{this.props.itemInfo}</li>
            </>
        );
    }
    handleClick() {
        this.props.deleteItemOnChild(this.props.index)
    }
}

export default Tx12_child;