import { APP_LOAD, REDIRECT, ARTICLE_SUBMITTED } from "../actionTypes";

export default (
  state = {
    num: 11,
    text: "33333333",
  },
  action
) => {
  switch (action.type) {
    case "numAdd":
      let num = ++state.num;
      return { ...state, num: num };
    case "numIncrease":
      let num1 = --state.num;
      return { ...state, num: num1 };
    case "addText":
      return { ...state, text: action.payload };
    default:
      return state;
  }
};
