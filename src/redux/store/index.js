import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

const middleware = [thunk];
const { createLogger } = require('redux-logger');
middleware.push(createLogger({ collapsed: true }));

const NOOP = () => { };

const store = createStore(rootReducer || NOOP, applyMiddleware(...middleware));

export { store };
