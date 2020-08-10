import React, { useRef, useState, useEffect } from 'react';

function CountForHook() {
    const inputEl = useRef(null)

    const onButtonclick = () => {
        inputEl.current.value = "HelloWorld"
        console.log(inputEl)
    }

    const [text, setText] = useState('please input and check console.log')
    const testRef = useRef()

    useEffect(() => {
        testRef.current = text
        console.log(`testRef.current ->  ${testRef.current}`)
    })

    return (
        <div>
            <div>
                {/* 使用ref来捕获dom元素 */}
                <input ref={inputEl} type="text" />
                <button onClick={onButtonclick}>add to input</button>
                <br />
                <br />
                <input value={text} onChange={(e) => { setText(e.target.value) }} />
            </div>
        </div>
    );
}

export default CountForHook;