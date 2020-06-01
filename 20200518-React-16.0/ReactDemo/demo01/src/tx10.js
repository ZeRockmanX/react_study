
import React from 'react'

export default class Tx05 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: 'init',
            list: ['item01', 'item02']
        }
    }

    render() {
        return (
            <>
                <div>
                    <input
                        id='inhere'
                        value={this.state.inputValue}
                        // 1.字符串
                        // 通过 this.refs.inputInfo 来引用真实dom的节点---dom 节点上使用
                        // ref="inputInfo" 

                        // 2.回调函数
                        // es6 写法 意思是 textInput<input>这个组件
                        // 回调函数就是在dom节点或组件上挂载函数，函数的入参是dom节点或组件实例，达到的效果与字符串形式是一样的，都是获取其引用。
                        // inputInfo里面是input标签是所有内容
                        ref={(inputInfo) => { this.textInput = inputInfo }}

                        onChange={this.inputFunc.bind(this)}
                    />
                    <button onClick={this.addList.bind(this)}>add</button>
                </div>
                <ul ref={ulInfo => { this.ulInfo = ulInfo }}>
                    {
                        this.state.list.map((item, index) => {
                            return (<li key={index} onClick={this.deleteItem.bind(this, index)}>{item}</li>)
                        })
                    }
                </ul>
            </>
        );
    }
    inputFunc(e) {
        // this.refs.inputInfo 里面是 input这个标签的所有内容
        // console.log(this.refs.inputInfo)
        // this.textInput 里面是 input这个标签的所有内容
        //console.log(this.textInput)
        this.setState(
            // 这里就可以不用  { inputValue: e.target.value } 这样的写法了
            // 也可以这样写比较直观，语意化
            { inputValue: this.textInput.value }
            // 因为在input组件上用ref绑定了 this.input = input ,所以可以直接用this.input
        )
    }

    addList() {

        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        }, () => {
            // 使用回调函数才能获取正确的总列数，因为回调函数是在setState执行之后执行的
            console.log("使用回调函数获得正确的总数： " + this.ulInfo.querySelectorAll('li').length)
        })
        // !setState是异步执行，需要时间，所以直接在后面执行console.log得到的答案是错误的
        console.log("错误的总数： " + this.ulInfo.querySelectorAll('li').length)
    }

    deleteItem(index) {
        let newList = this.state.list
        newList.splice(index, 1)
        this.setState({
            list: newList
        })
    }
}
