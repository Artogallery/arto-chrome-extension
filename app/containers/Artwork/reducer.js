const initialState = {

};

const actionsMap = {
};

export default function artwork(state = initialState, action) {
  const reduceFn = actionsMap(action.type);
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
