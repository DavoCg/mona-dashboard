import {createStore, applyMiddleware} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

const createStoreWithMiddleware = (history) => applyMiddleware(
    thunkMiddleware,
    routerMiddleware(history)
)(createStore);

export default function configureStore(initialState, history){
    return createStoreWithMiddleware(history)(rootReducer, initialState);
}