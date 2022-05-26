import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga'
import { loadState, saveState } from "./localStorage";

import reducers from './reducers/reducers'
import saga from "./saga/saga";

const sagaMiddleware = createSagaMiddleware()
const enhancer = applyMiddleware(sagaMiddleware)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const localStorage = loadState()

const store = createStore(
    reducers,
    localStorage,
    composeEnhancers(enhancer)
)

sagaMiddleware.run(saga)

store.subscribe(() => {
    saveState({favoriteReducer: store.getState().favoriteReducer})
})

export default store