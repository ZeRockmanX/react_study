// 创建一个管理员
const defaultState = {
    inputValue: "Write Someting",
    list: [
        'Test Case1',
        'Test Case2',
        'Test Case3',
    ]
}
export default (state = defaultState, action) => {

    console.log(state, action)

    // ! Reducer里面只能接受state,不能改变state

    if (action.type === 'changeInput') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState;
    }

    // 匹配请求的类型是'addItem‘
    if (action.type === 'addItem') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState;
    }

    // 匹配请求的类型'deleteItem'
    if (action.type === 'deleteItem') {
        let newState = JSON.parse(JSON.stringify(state))
        //删除List列表中index索引所在的数据，并且只删除1个
        newState.list.splice(action.index, 1)
        return newState;
    }

    return state
}