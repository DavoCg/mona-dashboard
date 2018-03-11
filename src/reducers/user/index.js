import constants from '../../constants';
import * as modifiers from './modifiers';
import exporter from '../exporter';

const initialState = {
    logged: !!localStorage.getItem('shatapToken'),
    all: []
};

const handlers = {
    [constants.RESET]: () => initialState,
    [constants.LOGOUT]: modifiers.onLogout,
    [constants.LOGIN_SUCCESS]: modifiers.onLoginSuccess,
    [constants.LIST_USERS_SUCCESS]: modifiers.onListUsersSuccess,
};

export default exporter(initialState, handlers);
