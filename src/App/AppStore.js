import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./AppReducers";
import AppSagas from "./AppSagas";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const configureStore = initialState => {
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(AppSagas);

  return store;
};

export default configureStore;
