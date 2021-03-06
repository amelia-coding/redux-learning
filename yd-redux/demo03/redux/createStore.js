export default function createStore(reducer, initState) {
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
    return {
        subscribe,
        dispatch,
        getState
    }
}