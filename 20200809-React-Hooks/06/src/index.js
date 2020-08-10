import React from 'react';
import ReactDOM from 'react-dom';
import { ColorsHooks } from './ColorsHooks';
import ButtonsHooks from './ButtonsHooks';
import ShowAreaHooks from './ShowAreaHooks';

const App = (
  <>
    <ColorsHooks>
      <ShowAreaHooks />
      <ButtonsHooks />
    </ColorsHooks>
  </>
)

ReactDOM.render(App, document.getElementById('root')
);