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
03 点击功能 input中的数据放到store中的list里面，再将store中更新后的list数据返还给state（setState渲染页面）
04 list中点击删除项目事件