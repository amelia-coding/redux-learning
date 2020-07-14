import { createStore, combineReducers } from "./redux/index.js";
import counterReducer from "./reducers/counter.js";
import infoReducer from "./reducers/info.js";
import exceptionMiddleware from "./middlewares/exceptionMiddleware.js";
import loggerMiddleware from "./middlewares/loggerMiddleware.js";
import timeMiddleWare from "./middlewares/timeMiddleWare.js";

const reducer = combineReducers({
    counter: counterReducer,
    info: infoReducer
});
let store = createStore(reducer);
const next = store.dispatch;
const time = timeMiddleWare(store);
const logger = loggerMiddleware(store);
const exception = exceptionMiddleware(store);
store.dispatch = exception(time(logger(next)));

// console.dir(store.getState());
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