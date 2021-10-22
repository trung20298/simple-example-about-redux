import { ADD_TEXT } from "./addNewText2";

const block = ["here", "hi", " hello", "noway"];

export function block_word({ dispatch }) {
  return function (next) {
    return function (action) {
      //anything
      if (action.type === ADD_TEXT) {
        const foundWord = block.filter((word) => action.value.includes(word));
        if (foundWord.length) {
          return dispatch({ type: "FOUND_BAD_WORD" });
        }
      }
      return next(action);
    };
  };
}
