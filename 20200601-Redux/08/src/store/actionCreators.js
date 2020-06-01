//用常量替换变量，这样当常量写错时会报错，而变量不会报错，可以快速定位到错误的地方
import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes'

export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value: value
})

export const addItemAction = () => ({
    type: ADD_ITEM,
})

export const deleteAction = (index) => ({
    type: DELETE_ITEM,
    index: index
})

// 异步获取axios的数据
export const getListAction = (data) => ({
    type: GET_LIST,
    data: data
})