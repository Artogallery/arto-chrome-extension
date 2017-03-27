import * as types from './constants';


export function fetchArtwork() {
  return {
    type: types.FETCH_ARTWORK_REQUEST
  };
}

export function fetchArtworkSuccess(payload) {
  return {
    type: types.FETCH_ARTWORK_SUCCESS,
    payload
  };
}

export function fetchArtworkFail(error) {
  return {
    type: types.FETCH_ARTWORK_FAIL,
    error
  };
}
