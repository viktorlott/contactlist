import { combineReducers } from "redux"
import createSagaMiddleware from 'redux-saga'
import rootSaga from 'store/saga'
import reducers from './reducers'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

/**
 * Implementing redux-saga as a replacement for redux-thunk
 * 
 * Can be expanded on if further logic has to be added. For example, a login/authentication flow.
 *
 */
const sagaMiddleware = createSagaMiddleware()

const reducer = combineReducers(reducers)

const store = configureStore({
    reducer,
    middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]
})

sagaMiddleware.run(rootSaga)

export default store