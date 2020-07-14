export default function createStore(initState) {
    let state = initState;
    let listeners = [];
    function subscribe(listener) {
        listeners.push(listener);
    }
    function getState() {
        return state;
    }
    function changeState(newState) {
        state = newState;
        // 进行状态的通知
        for (let i = 0; i < listeners.length; i++) {
            const listener = listeners[i];
            listener();
        }
    }
    return {
        subscribe,
        changeState,
        getState
    }
}