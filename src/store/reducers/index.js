import { combineReducers } from "redux";

import Login from "./login";
import Auth from "./auth";
import Saga from "./saga";

export default combineReducers({
  Login,
  Auth,
  Saga,
});
