import constants from '../../constants';

export function reset(){
    return {type: constants.RESET}
}

export function logout(){
    return {type: constants.LOGOUT}
}

export function login(body){
  return dispatch => {
    return fetch('https://api.shatap.co:9999/login', {
      body: JSON.stringify(body),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => dispatch({type: constants.LOGIN_SUCCESS, payload: {data}}))
    .catch(err => console.log('err', err))
  }
}

export function fetchUsers(){
  return dispatch => {
    return fetch('https://api.shatap.co:9999/admin/users', {
      headers: {'Authorization': localStorage.getItem('shatapToken')}
    })
    .then(res => res.json())
    .then(users => dispatch({type: constants.LIST_USERS_SUCCESS, payload: {users}}))
    .catch(err => console.log('err', err))
  }
}
