export default function combineReducers(reducers) {
    const reducersKeys = Object.keys(reducers);
    return function combinaction(state = {}, action) {
        /**每次生成新的state */
        const nextState = {};
        for (let i = 0; i < reducersKeys.length; i++) {
            const key = reducersKeys[i];
            const reducer = reducers[key];
            console.log("state-->",state);
            console.log("action-->",action);
            /**首先取到之前key对应的state */
            const previousStateForKey = state[key];
            /**执行对应的reducer */
            const nextStateForKey = reducer(previousStateForKey,action);
            nextState[key] = nextStateForKey;
        }
        return nextState;
    }
}