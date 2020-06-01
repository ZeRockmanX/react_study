// 新引入中间件
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
//增强函数 链式函数（执行一个函数再执行一个函数）
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(applyMiddleware(thunk))

// ! createStore只接收两个参数，所以用增强函数将第二个参数中放入多个函数
const store = createStore(
    reducer,
    enhancer
)

export default store