//用常量替换变量，这样当常量写错时会报错，而变量不会报错，可以快速定位到错误的地方
import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes'

// 异步工具
import axios from 'axios'
// mock API请求
import mock_ajax_data from '../mock_ajax_data'

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

export const getListAction = (data) => ({
    type: GET_LIST,
    data: data
})

// 使用中间件把ajax请求全部放到redux中，这样componentDidMount中就不会臃肿
// getListThunk执行完调用再调用getListAction去store中更新
export const getListThunk = () => {
    return (dispatch) => {
        // 异步ajax请求 (mock的数据)
        axios.get('/get_mock_data')
            .then((res) => {
                const action = getListAction(res.data.data)
                dispatch(action)
            })
    }
}