import React, { useState, useEffect } from 'react';

function CountForHook() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        //useEffect代替componentDidMount与componentDidUpdate
        console.log(`useEffect use -> click is ${count}`)
    })

    const handlerAddCountButton = () => {
        addCount(count, setCount)
    }

    return (
        <div>
            <div>
                <p>Hook Count: {count}</p>
                <button onClick={handlerAddCountButton}>Hook Click me + 1</button>
                 /
                <button onClick={() => setCount(count + 1)}>Other Hook Click me + 1</button>
            </div>
        </div>
    );
}

function addCount(count, setCount) {
    let tmpCount = count + 1
    setCount(tmpCount)
}

export default CountForHook;