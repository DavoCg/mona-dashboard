export function onListOffersSuccess(state, action){
  const {payload} = action;
  return {...state, all: payload.offers.docs}
}
