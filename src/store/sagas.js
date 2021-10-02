import { takeEvery, put, call, select, take, fork } from "redux-saga/effects";
import { APPLY_TAG_FILTER } from "./actionTypes";
import axios from "axios";
export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
export const Admin = () => {
  return axios.get(
    "https://mock.mengxuegu.com/mock/61108f2b0f12550baa9b6817/example/admin"
  );
};
export const userMessage = () => {
  return axios.post(
    "https://mock.mengxuegu.com/mock/61108f2b0f12550baa9b6817/example/user",
    { code: "1234", name: "yyyy" }
  );
};
function* hello() {
  console.log("hello world");
}
function* add() {
  //就是指挥saga中间件向仓库派发动作
  // yield call(delay, 1000);
  yield put({ type: "numAdd" });
  console.log(1111, "numAdd");
}
function* addTake() {
  //就是指挥saga中间件向仓库派发动作
  for (let i = 0; i < 4; i++) {
    yield take("numAdd");
  }
  yield put({ type: "addText", payload: "添加三次成功发" });
}
function* Increase() {
  //就是指挥saga中间件向仓库派发动作
  while (true) {
    const data = yield take("numIncrease");
    yield put({ type: "addText", payload: "1111111" });
    console.log(111111, data);
  }
}
function* sagaLogin() {
  const products = yield call(Admin);
  console.log(products, "products");
  yield put({
    type: "LOGIN",
    payload: {
      name: products.data.data.name,
      password: products.data.data.password,
    },
  });
}
// function* hello() {
//   console.log("hello world");
// }
function* watchAdd() {
  //监听派发给仓库的动作，如果动作类型匹配的话，会执行对应的监听生成器
  yield takeEvery("sagaAdd", add);
}

export function* rootSaga(data) {
  console.log(data, "data");
  yield fork(watchAdd);
  yield takeEvery(["sagaLogin", "numAdd"], sagaLogin);
  yield fork(Increase);
  yield fork(hello);
  yield fork(addTake);
  yield takeEvery("sagaAdd", add);
}
