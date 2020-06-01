
import React, { Component } from 'react';
// npm install react-transition-group --save
import { CSSTransition } from 'react-transition-group'
import './style_tx15.css';

class Tx15 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow_3: true,
        }
    }

    render() {
        return (
            <div>
                <CSSTransition
                    in={this.state.isShow_3}
                    timeout={2000}
                    classNames="CSST-text"
                    unmountOnExit
                >
                    <div>OPQRSTU</div>
                </CSSTransition>
                <div><button onClick={this.toToggole_3}>Click 在func处用箭头函数(e)=>{}绑定this的方法</button></div>
            </div>
        );
    }
    toToggole_3 = (e) => {
        this.setState({
            isShow_3: this.state.isShow_3 ? false : true
        })
    }
}

export default Tx15;