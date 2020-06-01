### Redux
yarn add create-react-app
yarn add redux
yarn add antd 
install create-react-app demo01
### Chrome
marketing search "redux dev"
store->index.js add：
```
const store = createStore(
    reducer,
    // add
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

```

### Redux Flow
![avatar](./Redux.jpg)

### Study
01 初始化以及读取store中的数据
02 更新store中的数据 state数据从redux获取新的数据并展示
03