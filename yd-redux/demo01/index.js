import { createStore } from "./redux/index.js";
// 初始化状态值
let initState = {
    counter: {
        count: 0
    },
    info: {
        name: "",
        description: ""
    }
}
let store = createStore(initState);

store.subscribe(() => {
    let state = store.getState();
    console.log(`${state.info.name}:${state.info.description}`)
})
store.subscribe(() => {
    let state = store.getState();
    console.log(`🍌${state.counter.count}`)
})
store.changeState({
    ...store.getState(),
    info: {
        name: "老袁",
        description: "京程一灯🏮"
    }
});