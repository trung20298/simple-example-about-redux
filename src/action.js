export function add_text(newText) {
  return { type: "ADD_TEXT", value: newText };
}

export function getData() {
  return function (dispatch) {
    return fetch("http://localhost:3000/students1")
      .then((response) => response.json())
      .then((json) => {
        console.log("data:", json);
        dispatch({ type: "DATA_LOADED", value1: json });
      });
  };
}
