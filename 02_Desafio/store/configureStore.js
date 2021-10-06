import thunk from './middleware/thunk.js';
import localStorage from './middleware/localStorage.js'

const { createStore, combineReducers, compose, applyMiddleware } = Redux

const componseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || componse
const enhancer = componseEnhancers(applyMiddleware(thunk, localStorage));
const reducer = combineReducers({token, user});
const store = createStore(reducer, enhancer);

export default store;