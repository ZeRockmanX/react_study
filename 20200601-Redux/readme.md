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

01 init and get info from store
02
03