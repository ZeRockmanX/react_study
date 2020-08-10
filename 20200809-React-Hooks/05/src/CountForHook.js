import React, { useReducer } from 'react';

function CountForHook() {
    // useReducer((),()) 业务处理 第一个参数是业务逻辑，第二个参数是初始值
    const [count, dispatch] = useReducer((state, action) => {
        switch (action) {
            case 'add':
                return state + 1
            case 'sub':
                return state - 1
            default:
                return state
        }
        // 0 是state初始值
    }, 0)

    return (
        <div>
            <div>
                <p>Count is: {count}</p>
                <button onClick={() => dispatch('add')}>Increment +++++</button>
                <button onClick={() => dispatch('sub')}>Decrement -----</button>
            </div>
        </div>
    );
}

export default CountForHook;