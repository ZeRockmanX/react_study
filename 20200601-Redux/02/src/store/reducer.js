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

    // 匹配查询请求的类型是'changeInput'
    if (action.type === 'changeInput') {
        // 深度拷贝state一份到新的变量newState里
        let newState = JSON.parse(JSON.stringify(state))

        // newState接收传进来新的值 action的构造在Tx01中定义了
        newState.inputValue = action.value

        //返回新变量newState去store，再由store去订阅刷新state： store.subscribe(this.storeChange）
        return newState;
    }


    return state
}