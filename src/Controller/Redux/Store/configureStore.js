'use strict'

import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import createSagaMiddleWare from 'redux-saga'

import rootReducer from '../Reducers'
// import rootSaga from '../ActionSaga/rootSaga'

const middleWare = createSagaMiddleWare()
// const middleWare = [sagaMiddleWare]
middleWare.push(thunkMiddleware)

if (process.env['NODE_ENV'] === 'development') {
  middleWare.push(logger)
}

const store = createStore(rootReducer, applyMiddleware(...middleWare))

// sagaMiddleWare.run(rootSaga)

export default store
