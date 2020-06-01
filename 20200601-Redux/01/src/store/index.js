// 创建一个仓库
import { createStore } from 'redux'
// 引入管理员
import reducer from './reducer'
const store = createStore(
    reducer,
    // chrome 插件有redux dev插件，就启用
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store