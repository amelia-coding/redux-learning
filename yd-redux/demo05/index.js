import { createStore, combineReducers } from "./redux/index.js";
import counterReducer from "./reducers/counter.js";
import infoReducer from "./reducers/info.js";
const reducer = combineReducers({
    counter: counterReducer
});
let store = createStore(reducer);

const nextReducer = combineReducers({
    counter: counterReducer,
    info: infoReducer
});
store.replaceReducer(nextReducer);
console.dir(store.getState());
// store.subscribe(() => {
//     let state = store.getState();
//     console.log(`🍌${state.counter.count}`)
//     console.log(`🍊${state.info.name}`);
//     console.log(`🐻${state.info.description}`)
//     console.log(`----------`)
// })
// store.dispatch({
//     type: "INCRMENT"
// });
// store.dispatch({
//     type: "SET_NAME",
//     name: "京程一灯②号"
// });