import { AnyAction } from "./types/actions";
import { Middleware, MiddlewareAPI } from "./types/middleware";
import { Reducer } from "./types/reducers";
import { Dispatch, StoreCreator, StoreEnhancer } from "./types/store";

export default function applyMiddleware(
  ...middlewares: Middleware[]
): StoreEnhancer<any> {
  return (createStore: StoreCreator) => <S, A extends AnyAction>(
    reducer: Reducer<S, A>,
    ...args: any[]
  ) => {
    const store = createStore(reducer, ...args);
    let dispatch: Dispatch = () => {
      throw new Error(
        "Dispatching while constructing your middleware is not allowed. " +
          "Other middleware would not be applied to this dispatch."
      );
    };
    const middlewareAPI: MiddlewareAPI = {
      getState: store.getState,
      dispatch: (action, ...args) => dispatch(action, ...args),
    };
    const chain = middlewares.map((middleware) => middleware(middlewareAPI));
    dispatch = compose<typeof dispatch>(...chain)(store.dispatch);

    return {
      ...store,
      dispatch,
    };
  };
}

function compose<R>(...funcs: Function[]): (...args: any[]) => R;
function compose(...funcs: Function[]) {
  if (funcs.length === 0) {
    // infer the argument type so it is usable in inference down the line
    return <T>(arg: T) => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce((a, b) => (...args: any) => a(b(...args)));
}
