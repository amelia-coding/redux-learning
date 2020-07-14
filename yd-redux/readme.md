1.State本身容器 -> container
2.State变化生成一个新的状态
3.currentState -> __value
4.接受一个函数成为变形关系 action -> f
5.currentReducer -> map
6.middleware -> IO函子
7.applyMiddleware.js 使用自定义的middleware 扩展redux
bindActionCreators.js 把actions转成拥有同名keys的对象
combineReducers.js 对reducer进行拆分 拆分后的每一块就是一个独立的state
compose.js 从右到左组合多个函数 函数式编程常用到
createStore.js 创建一个Redux Store来放所有的state

8.1.combineReducers组合reducers
2.{
    counter: counterReducer,
    info: infoReducer
}
3. reducer = return function combinaction(state = {}, action) {}
4.store.dispatch -> {
    type: "INCRMENT"
}
5.state = reducer(state, action);
6.没有传state -> dispatch > state ❎ ->  reducer(state={}, action);
7.counter、info 遍历出来
8.reducer = reducers[key];
counter.js、info.js

{
    a:()=>{
        var state = 1
        switch(){}
    },
    b()=>{
        var state = 2
        switch(){}
    }
}

7.