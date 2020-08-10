import React, { useState, createContext, useContext } from 'react';

function CountForHook() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <div>
                <p>Hook Count: {count}</p>
                <button onClick={() => setCount(count + 1)}>Hook Click me + 1</button>
            </div>


            {/*子组件用CountContext.Provider包起来*/}
            <CountContext.Provider value={count}>
                <Counter />
            </CountContext.Provider>
        </div>
    );
}

const CountContext = createContext();

function Counter() {
    // 使用useContext接收
    let count = useContext(CountContext)
    return (<h1>CountForHook [父] 组件通过useContext传到Couter [子] 的count -》 {count}</h1>)
}

export default CountForHook;