import * as ActionTypes from './constants';

const initialState = {
  artwork: null,
  isFetching: false
};

const actionsMap = {
  [ActionTypes.FETCH_ARTWORK_REQUEST](state, action) {
    return {
      ...state,
      isFetching: true
    };
  },
  [ActionTypes.FETCH_ARTWORK_SUCCESS](state, action) {
    return {
      artwork: action.payload,
      isFetching: false
    };
  },
  [ActionTypes.FETCH_ARTWORK_FAIL](state, action) {
    return {
      ...state,
      isFetching: false
    };
  }
};

export default function artwork(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
