import React, { useState, useEffect } from 'react';
import { useMemo } from 'react';

function CountForHook() {
    const [one, setOne] = useState('One is here')
    const [two, setTwo] = useState('Two is here')


    return (
        <div>
            <div>
                <button onClick={() => setOne(new Date().getTime() + ' One is updated ')}>Click One</button>
                <button onClick={() => setTwo(new Date().getTime() + ' Two is updated ')}>Click Two</button>
                <ChildComponent name1={one} name2={two}></ChildComponent>
            </div>
        </div>
    );
}


function ChildComponent({ name1, name2 }) {

    function actionOnChildUpdateData() {
        console.log('Now updating')
        return name1 + '<- it is name1'
    }


    // ! 这样不论点哪个按钮 方法actionOnChildUpdateData总是会被执行，影响效率，有性能问题
    //const actionOnChild = actionOnChildUpdateData(name)

    // * 这样只有当变量 one 被更新才会运行方法actionOnChildUpdateData， 变量 two 被刷新不会触发actionOnChildUpdateData方法
    const actionOnChild = useMemo(() => actionOnChildUpdateData(name1), [name1])

    return (
        <>
            <div>{actionOnChild}</div>
            <div>{name2}</div>
        </>
    )
}

export default CountForHook;