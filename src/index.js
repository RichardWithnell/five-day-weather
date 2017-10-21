/* @flow */

import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import registerServiceWorker from './registerServiceWorker'

const rootEl = document.getElementById('root')
if (rootEl) {
  ReactDOM.render(<App />, rootEl)
}
registerServiceWorker()
