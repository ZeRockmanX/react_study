import React, { useState } from 'react';

function CountForHook() {
    const [count, setCount] = useState(0)

    const handlerAddCountButton = () => {
        addCount(count, setCount)
    }

    return (
        <div>
            <div>
                <p>Hook Count: {count}</p>
                <button onClick={handlerAddCountButton}>1 Hook Click me + 1</button>
                 /
                <button onClick={() => setCount(count + 1)}>2 Hook Click me + 1</button>
            </div>
        </div>
    );
}

function addCount(count, setCount) {
    let tmpCount = count + 1
    setCount(tmpCount)
}

export default CountForHook;