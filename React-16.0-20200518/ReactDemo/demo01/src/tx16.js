
import React, { Component } from 'react';
// npm install react-transition-group --save
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './style_tx16.css';

export default class Tx16 extends React.Component {
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
                    <input value={this.state.inputValue} onChange={this.inputFunc.bind(this)} />
                    <button onClick={this.addList.bind(this)}>add</button>
                </div>
                <ul>
                    <TransitionGroup>
                        {
                            this.state.list.map((item, index) => {
                                return (
                                    <CSSTransition
                                        timeout={2000}
                                        classNames='CSST-text'
                                        unmountOnExit
                                        appear={true}
                                        key={index + item}
                                    >
                                        <li
                                            id={index + item}
                                            onClick={this.deleteItem.bind(this, index)}
                                        >
                                            {item}
                                        </li>
                                    </CSSTransition>
                                )
                            })
                        }
                    </TransitionGroup>
                </ul>
            </>
        );
    }
    inputFunc(e) {
        this.setState(
            { inputValue: e.target.value }
        )
    }

    addList() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }

    deleteItem(index) {
        let newList = this.state.list
        newList.splice(index, 1)
        this.setState({
            list: newList
        })
    }
}
