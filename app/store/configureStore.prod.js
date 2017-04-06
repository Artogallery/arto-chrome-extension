import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import artworkSaga from '../containers/Artwork/sagas';
import rootReducer from './reducers';
import storage from '../utils/storage';

const saga = createSagaMiddleware();

export default function (initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(saga),
      storage()
    )
  );
  saga.run(artworkSaga);

  return store;
}
