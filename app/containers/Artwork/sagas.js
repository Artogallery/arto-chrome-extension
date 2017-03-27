import { call, put, takeLatest } from 'redux-saga/effects';

import request from '../../utils/request';
import {
  fetchArtworkSuccess,
  fetchArtworkFail
} from './actions';
import { FETCH_ARTWORK_REQUEST } from './constants';

const API_ENDPOINT = 'https://app.arto.gallery/v1/api/artworks/random';

function* getArtwork() {
  try {
    const payload = yield call(request, API_ENDPOINT);
    yield put(fetchArtworkSuccess(payload));
  } catch (error) {
    yield put(fetchArtworkFail(error));
  }
}


export default function* artworkSaga() {
  yield takeLatest(FETCH_ARTWORK_REQUEST, getArtwork);
}
