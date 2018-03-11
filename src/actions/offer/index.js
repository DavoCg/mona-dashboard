import constants from '../../constants';

export function fetchOffers(){
  return dispatch => {
    return fetch('https://api.shatap.co:9999/admin/offers', {
      headers: {'Authorization': localStorage.getItem('shatapToken')}
    })
    .then(res => res.json())
    .then(offers => dispatch({type: constants.LIST_OFFERS_SUCCESS, payload: {offers}}))
    .catch(err => console.log('err', err))
  }
}
