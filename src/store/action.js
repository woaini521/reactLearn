import { LOGIN, LOGOUT, REGISTEE } from "./actionTypes";
import axios from "axios";
export const Login = () => {
  return (dispatch) => {
    axios
      .get(
        "https://mock.mengxuegu.com/mock/61108f2b0f12550baa9b6817/example/talk"
      )
      .then((res) => {
        console.log(res.data.data, 2222);
        dispatch({
          type: LOGIN,
          payload: {
            name: res.data.data.name,
            password: res.data.data.password,
          },
        });
      });
  };
};

export const Loginout = () => {
  return {
    type: LOGOUT,
  };
};

export const actions = {
  Login: () => {
    return (dispatch) => {
      axios
        .get(
          "https://mock.mengxuegu.com/mock/61108f2b0f12550baa9b6817/example/talk"
        )
        .then((res) => {
          console.log(res.data.data, 2222);
          dispatch({
            type: LOGIN,
            payload: {
              name: res.data.data.name,
              password: res.data.data.password,
            },
          });
        });
    };
  },
  Loginout:() =>{
    return {
        type: LOGOUT,
      };
  }
};
