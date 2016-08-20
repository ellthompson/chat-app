import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import * as reducers from 'scripts/reducers/script.js';
import { socketioMiddleware } from 'scripts/middleware/script.js';

const storeEnhancers = [applyMiddleware(socketioMiddleware)];
if (window.devToolsExtension) storeEnhancers.push(window.devToolsExtension());

const store = createStore(
    combineReducers(reducers),
    compose(...storeEnhancers)
);

export default store;
