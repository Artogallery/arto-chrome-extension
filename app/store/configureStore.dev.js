import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import artworkSaga from '../containers/Artwork/sagas';
import rootReducer from './reducers';
import storage from '../utils/storage';

// If Redux DevTools Extension is installed use it, otherwise use Redux compose
/* eslint-disable no-underscore-dangle */
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//     // Options: http://zalmoxisus.github.io/redux-devtools-extension/API/Arguments.html
//   }) :
//   compose;
/* eslint-enable no-underscore-dangle */

const saga = createSagaMiddleware();
const logger = createLogger();

export default function (initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(saga, logger),
      storage()
    ));

  saga.run(artworkSaga);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers');

      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
