import React from 'react';
import ReactDOM from 'react-dom';
import CountForState from './CountForState';
import CountForHook from './CountForHook';

const App = (
  <>
    <CountForState />
    <CountForHook />
  </>
)

ReactDOM.render(App, document.getElementById('root')
);