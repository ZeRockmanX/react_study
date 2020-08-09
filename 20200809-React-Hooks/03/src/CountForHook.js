import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


function IndexPage() {
    useEffect(() => {
        console.log(`useEffect use -> 去主页`)
        return () => {
            console.log('因为没有第二个参数，componentWillUnmount销毁，离开主页，显示了这条信息')
        }
        // ! 没有第二个参数表示只要有变化就会刷新整个渲染流程
    })
    return <h1>主页</h1>
}

function ListPage() {
    useEffect(() => {
        console.log(`useEffect use -> 去列表页`)
        return () => {
            console.log('有第二个但是为空表示整个页面被更新才会触发整个渲染流程componentWillUnmount销毁，离开了列表页面，显示了这条信息')
        }
        // ! 有第二个参数表示但是为空 表示整个页面被更新才会触发整个渲染流程
    }, [])
    return <h1>列表页面</h1>
}

function CountForHook() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        //useEffect代替componentDidMount与componentDidUpdate
        console.log(`useEffect use -> click is ${count}`)
        return () => {
            console.log('当前表示只有count状态更新时才启用componentWillUnmount销毁，显示了这条信息')
        }
        // ! 有第二个参数并且里面有状态函数名 表示当指定的状态函数变化才会触发整个渲染流程
    }, [count])

    return (
        <div>
            <div>
                <p>Hook Count: {count}</p>
                <button onClick={() => setCount(count + 1)}>Hook Click me + 1</button>
            </div>

            <Router>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/list">列表页面</Link></li>
                </ul>
                <Route path="/" exact component={IndexPage} />
                <Route path="/list/" component={ListPage} />
            </Router>
        </div>
    );
}

export default CountForHook;