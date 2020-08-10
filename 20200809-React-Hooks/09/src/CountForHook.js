import React, { useState, useEffect, useCallback } from 'react';

// Hooks自定义函数必须开头用use起步
function useWinSize() {
    const [size, setSize] = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
    })


    //useCallback同useMemo，useMemo是暂存状态，useCallback是暂存方法
    const onResize = useCallback(() => {
        setSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
        })
    }, [])

    useEffect(() => {
        window.addEventListener('resize', onResize, false)
        //return是销毁时
        return () => {
            window.removeEventListener('resize', onResize, false)
        }
    })

    return (
        size
    );
}


function CountForHook() {
    const size = useWinSize()

    return (
        <div>
            Page size:{size.width} x {size.height}

        </div>
    )
}

export default CountForHook