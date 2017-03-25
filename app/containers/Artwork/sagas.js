import { delay } from 'redux-saga';
import { call, takeEvery, put, takeLatest, take } from 'redux-saga/effects';

import request from '../../utils/request';
import {
  fetchArtwork,
  fetchArtworkSuccess,
  fetchArtworkFail
} from './actions';
import { FETCH_ARTWORK_REQUEST } from './constants';

const API_ENDPOINT = 'https://app.arto.gallery/v1/api/artworks/random';

// const getArtwork = () => {
//   fetch(API_ENDPOINT)
//     .then(res => res.json())
//     .then(text => console.log(text))
//     .catch(error => console.error(error));
// };

// function* testSaga() {
//   yield call(delay, 1000);
// }

function* getArtwork() {
  try {
    yield put(fetchArtwork);

    const artwork = yield call(request, API_ENDPOINT);
    console.log('artwork', artwork);

    yield put(fetchArtworkSuccess(artwork));
  } catch (error) {
    yield put(fetchArtworkFail(error));
  }
}


export default function* artworkSaga() {
  yield takeLatest(FETCH_ARTWORK_REQUEST, getArtwork);
}
