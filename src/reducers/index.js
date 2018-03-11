import {combineReducers} from 'redux';
import userReducer from './user';
import offerReducer from './offer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
    user: userReducer,
    offer: offerReducer,
    routing: routerReducer
});

export default rootReducer;
