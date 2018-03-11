const globalConstants = {
    RESET: 'RESET'
};

const userConstants = {
    LOGOUT: 'LOGOUT',
    LIST_USERS_SUCCESS: 'LIST_USERS_SUCCESS',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS'
};

const offerConstants = {
    LIST_OFFERS_SUCCESS: 'LIST_OFFERS_SUCCESS',
};

const searchConstants = {
  LIST_SEARCHES_SUCCESS: 'LIST_SEARCHES_SUCCESS',
};

export default Object.assign(globalConstants, userConstants, offerConstants, searchConstants);
