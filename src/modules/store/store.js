/**
 * Global store object
 */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../../reducers';

const appReducer = reducers

const rootReducer = (state, action) => {
    return appReducer(state, action);
}

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store