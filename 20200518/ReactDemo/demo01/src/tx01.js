import React, { Component, Fragment } from 'react'
class Tx01 extends Component {
    render() {
        return (
            // 使用 Fragment 标签可以使外部不用特意包一层，例如使用flex布局时
            // 可用<> </>代替 
            <Fragment>
                <div><input /><button>add</button></div>
                <ul>
                    <li>one</li>
                    <li>two</li>
                </ul>
            </Fragment>
        );
    }
}

export default Tx01