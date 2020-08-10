import React, { useContext } from 'react'
import { ColorContext, UPDATE_COLOR } from './ColorsHooks'

function ButtonsHooks() {
    const { dispatch } = useContext(ColorContext)

    return (
        <div>
            <div>
                <button onClick={() => { dispatch({ type: UPDATE_COLOR, color: 'red' }) }}>红颜色</button>
                <button onClick={() => { dispatch({ type: UPDATE_COLOR, color: 'blue' }) }}>蓝颜色</button>
                <button onClick={() => { dispatch({ type: UPDATE_COLOR, color: 'yellow' }) }}>黄颜色</button>
            </div>
        </div>
    );
}

export default ButtonsHooks