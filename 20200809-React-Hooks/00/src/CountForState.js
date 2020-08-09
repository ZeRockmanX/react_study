import React, { Component } from 'react';

class CountForState extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 }
    }
    componentDidMount() {
        console.log(`componentDidMount use -> click is ${this.state.count}`)

    }
    componentDidUpdate() {
        console.log(`componentDidUpdate use -> click is ${this.state.count}`)

    }

    render() {
        return (
            <div>
                <div>
                    <p>CountForState Count: {this.state.count}</p>
                    <button onClick={this.addCount.bind(this)}>Click me + 1</button>
                </div>
            </div>);
    }
    addCount() {
        this.setState({ count: this.state.count + 1 })
    }
}

export default CountForState;