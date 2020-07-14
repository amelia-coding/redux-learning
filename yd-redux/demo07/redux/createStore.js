export default function createStore(reducer, initState, rewriteCreateStoreFunc) {
    if (rewriteCreateStoreFunc) {
        const newCreateStore = rewriteCreateStoreFunc(createStore);
        return newCreateStore;
    }
    let state = initState;
    let listeners = [];
    function subscribe(listener) {
        listeners.push(listener);
    }
    function getState() {
        return state;
    }
    function dispatch(action) {
        /**通过用户的action找到我们执行修改计划state */
        // state = newState;
        state = reducer(state, action);
        // 进行状态的通知
        for (let i = 0; i < listeners.length; i++) {
            const listener = listeners[i];
            listener();
        }
    }
    function replaceReducer(nextReducer) {
        reducer = nextReducer;
        dispatch({ type: Symbol() });
    }
    //核心的一部 触发了全部的reducer
    dispatch({ type: Symbol() });
    return {
        subscribe,
        dispatch,
        replaceReducer,
        getState
    }
}