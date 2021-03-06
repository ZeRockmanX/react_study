import React, { useContext } from 'react'
import { ColorContext } from './ColorsHooks'


function ShowAreaHooks() {
    const { color } = useContext(ColorContext)
    return (
        <div style={{ color: color }}>
            字体的颜色是 {color}
        </div>
    );
}

export default ShowAreaHooks