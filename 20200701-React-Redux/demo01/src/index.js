import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList'
import { Provider } from 'react-redux'
import store from './store'

//提供者 Provider
//包裹需要使用redux store的组件
const App = (
  <Provider store={store}>
    <TodoList />
  </Provider>
)

ReactDOM.render(App, document.getElementById('root')
);