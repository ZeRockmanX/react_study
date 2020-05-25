import React, { Component } from 'react';
import './style_14.css';

class Tx14 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow_1: true,
            isShow_2: true,
            isShow_3: true,
        }
        this.toToggole_2 = this.toToggole_2.bind(this)
    }

    render() {
        return (
            <div>
                <div className={this.state.isShow_1 ? 'show_1' : 'hide_1'}>ABCDEFG</div>
                <div><button onClick={this.toToggole_1.bind(this)}>Click 调用时用bind绑定this的方法</button></div>
                <div>---------------------------------------------------------------------------</div>
                <div className={this.state.isShow_2 ? 'show_2' : 'hide_2'}>HIJKLNM</div>
                <div><button onClick={this.toToggole_2}>Click constructor中绑定this的方法</button></div>
                <div>---------------------------------------------------------------------------</div>
                <div className={this.state.isShow_3 ? 'show_3' : 'hide_3'}>OPQRSTU</div>
                <div><button onClick={this.toToggole_3}>Click 在func处用箭头函数(e)=>{}绑定this的方法</button></div>
            </div>
        );
    }
    // 调用是绑定this的方法
    toToggole_1() {
        this.setState({
            isShow_1: this.state.isShow_1 ? false : true
        })
    }

    // constructor中绑定this的方法
    toToggole_2() {
        this.setState({
            isShow_2: this.state.isShow_2 ? false : true
        })
    }

    // 箭头函数绑定this的方法
    toToggole_3 = (e) => {
        this.setState({
            isShow_3: this.state.isShow_3 ? false : true
        })
    }
}

export default Tx14;