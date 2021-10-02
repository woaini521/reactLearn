import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import { rootSaga } from "./sagas";
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware, reduxThunk)
);
sagaMiddleware.run(rootSaga, "rootsaga");
export default store;
