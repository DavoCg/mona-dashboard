export function onLogout(state){
  localStorage.removeItem('shatapToken');
  return {...state, logged: false}
}

export function onListUsersSuccess(state, action){
  const {payload} = action;
  return {...state, all: payload.users.docs}
}

export function onLoginSuccess(state, action){
  const {payload} = action;
  localStorage.setItem('shatapToken', payload.data.token);
  return {...state, logged: true}
}
