import { createStore, combineReducers, applyMiddleware } from 'redux';
import { listingReducer } from './reducers/listingReducer';
import { thunk } from 'redux-thunk';

const initialState = {};
const reducer = combineReducers({
    listings: listingReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;