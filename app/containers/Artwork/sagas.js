import { delay } from 'redux-saga';
import { call, takeEvery } from 'redux-saga/effects';

function* testSaga() {
  yield call(delay, 1000);
  console.log('test Saga');
}

export default function* artworkSaga() {
  yield takeEvery('*', testSaga);
}
