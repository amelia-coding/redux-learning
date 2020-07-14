import { createStore } from "./redux/index.js";
import reducer from "./reducer.js";
// 初始化状态值
let initState = {
    count: 0,
    info: {
        name: "",
        description: ""
    }
}
let store = createStore(reducer, initState);

store.subscribe(() => {
    let state = store.getState();
    console.log(`🍌${state.count}`)
})
store.dispatch({
    type: "INCRMENT"
});
store.dispatch({
    type: "DECERMENT"
});