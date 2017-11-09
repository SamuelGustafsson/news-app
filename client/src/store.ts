import { createStore, applyMiddleware, compose } from "redux";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = composeEnhancers(applyMiddleware(sagaMiddleware))(
  createStore
)(reducer, initialState);

sagaMiddleware.run(rootSaga);
