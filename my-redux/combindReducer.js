module.exports = function combindReducer(reducers) {
  //过滤掉不是function 的reducer
  const reducerKeys = Object.keys(reducers);
  const finalReducers = {};
  reducerKeys.forEach((key) => {
    if (typeof reducers[key] === "function") {
      finalReducers[key] = reducers[key];
    }
  });
  const finalReducersKeys = Object.keys(finalReducers);
  let hasChange = false;
  const nextState = {};
  return function combind(state = {}, action) {
    finalReducersKeys.forEach((key) => {
      const previousValue = state[key];
      const nextValue = reducers[key](previousValue, action);
      nextState[key] = nextValue;
      hasChange = hasChange || previousValue !== nextValue;
    });
    console.log(hasChange, nextState, state);
    return hasChange ? nextState : state;
  };
};
