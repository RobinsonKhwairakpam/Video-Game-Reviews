import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//Redux
import reducers from './reducers';
import { createStore, applyMiddleware, compose } from 'redux'
//import { configureStore } from "@reduxjs/toolkit"
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

const store = createStore(reducers, compose(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

