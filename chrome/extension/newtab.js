import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Root from '../../app/containers/App';
import './newtab.css';

chrome.storage.local.get('state', (obj) => {
  const { state } = obj;
  const initialState = JSON.parse(state || '{}');

  const createStore = require('../../app/store/configureStore');

  ReactDOM.render(
    <Provider store={createStore(initialState)}>
      <Root />
    </Provider>,
    document.querySelector('#root')
  );
});
