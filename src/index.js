/* @flow */

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './stores'
import App from './components/App'

import registerServiceWorker from './registerServiceWorker'

const rootEl = document.getElementById('root')
if (rootEl) {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootEl
  )
} else {
  console.error('Failed to get root element for React')
}
registerServiceWorker()
