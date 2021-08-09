import { combineReducers } from 'redux';

import Login from "./login"
import Auth from "./auth"

export default combineReducers({
    Login, Auth
  });