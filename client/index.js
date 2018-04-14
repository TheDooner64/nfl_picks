/* global window */
/* eslint no-underscore-dangle: 0 */
import {applyMiddleware, compose, createStore} from 'redux'
import App from './components/app'
import {Provider} from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import reducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware())
const initialState = {}
const store = createStore(reducers, initialState, enhancer)

// <Provider store={createStoreWithMiddleware(reducers)}>

// Redux docs suggest passing a default state like so
// const store = createStore(todoApp, window.STATE_FROM_SERVER)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
