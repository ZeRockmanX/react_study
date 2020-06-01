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
        // 深度拷贝state一份到新的变量newState里
        let newState = JSON.parse(JSON.stringify(state))

        // newState.inputValue就是action.type === 'changeInput'中变更
        newState.list.push(newState.inputValue)

        //清空inputValue
        newState.inputValue = ''

        //返回新变量newState去store，再由store去订阅刷新state： store.subscribe(this.storeChange）
        return newState;
    }

    return state
}