//用常量替换变量，这样当常量写错时会报错，而变量不会报错，可以快速定位到错误的地方
import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes'

// 创建一个管理员
const defaultState = {
    inputValue: "Write Someting",
    // 初始为空，然后从ajax获取数据
    list: []
}
export default (state = defaultState, action) => {

    console.log(state, action)

    // ! store必须是唯一的，只有一个store空间
    // ! Reducer里面只能接受state,不能改变state
    // ! Reducer中 必须是纯函数，不能直接给数字或者new之类可变内容，只能 变量赋值给变量 a=b

    if (action.type === CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState;
    }

    if (action.type === ADD_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState;
    }

    if (action.type === DELETE_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        //删除List列表中index索引所在的数据，并且只删除1个
        newState.list.splice(action.index, 1)
        return newState;
    }

    // 匹配请求的类型'get list from api'
    if (action.type === GET_LIST) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list = action.data.list
        return newState;
    }

    return state
}