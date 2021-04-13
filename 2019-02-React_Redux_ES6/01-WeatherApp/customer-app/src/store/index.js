import { createStore, compose, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import reducers from './../reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//retrasa la resolucion y una vez que la tiene la aplica, es como el await de ES7
export const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(promiseMiddleware)));
