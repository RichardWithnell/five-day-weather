/* @flow */

import { applyMiddleware, compose, createStore } from 'redux'

import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from '../reducers'

let middleware = [thunk]

if (process.env.NODE_ENV !== 'production') {
  middleware = [...middleware, createLogger()]
}

const enhancer = compose(applyMiddleware(...middleware))

export default createStore(reducer, enhancer)
