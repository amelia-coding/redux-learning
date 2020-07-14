import { createStore, combineReducers } from "./redux/index.js";
import counterReducer from "./reducers/counter.js";
import infoReducer from "./reducers/info.js";
// 初始化状态值
let initState = {
    counter: {
        count: 0
    },
    info: {
        name: "",
        description: "默认的状态描述"
    }
}
const reducer = combineReducers({
    counter: counterReducer,
    info: infoReducer
});
let store = createStore(reducer);

store.subscribe(() => {
    let state = store.getState();
    console.log(`🍌${state.counter.count}`)
    console.log(`🍊${state.info.name}`);
    console.log(`🐻${state.info.description}`)
    console.log(`----------`)
})
store.dispatch({
    type: "INCRMENT"
});
store.dispatch({
    type: "SET_NAME",
    name: "京程一灯②号"
});