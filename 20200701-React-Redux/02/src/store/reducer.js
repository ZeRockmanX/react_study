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
    console.log(action)
    if (action.type === 'change_input') {
        //ES6赋值法
        return { ...state, inputValue: action.value };
    }

    if (action.type === 'add_item') {
        //push用法等同于[...state.list,state.inputValue] 等于 
        //ES6赋值法
        return {
            ...state,
            'inputValue': "",
            'list': [
                ...state.list,
                state.inputValue
            ]
        }
    }
    return state
}