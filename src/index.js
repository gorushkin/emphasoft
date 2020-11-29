import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import App from './App';
import 'bootstrap';
import './style.scss';

import { Provider } from 'react-redux';
import reducer from './slices';

const store = configureStore({ reducer });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
