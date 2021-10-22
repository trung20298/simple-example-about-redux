import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
// import A from "./addNewText"; //only have mapStateToProps
import B from "./addNewText2"; //Have mapStateToProps and mapDispatchToProps
import { block_word } from "./middleware";
import thunk from "redux-thunk";
import Data from "./Data";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  data: [],
};

function reducer(state = initialState, action) {
  if (action.type === "DATA_LOADED") {
    return Object.assign({}, state, {
      data: state.data.concat(action.value1),
    });
  }
  return state;
}

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case "ADD_TEXT":
//       let newState = [...state, action.value];
//       return newState;
//     case "DATA_LOADED":
//       let newState1 = [...state, action.value1];
//       return newState1;
//     // return [...state, action.value1];
//     default:
//       return state;
//   }
// };

const store = createStore(
  reducer,
  storeEnhancers(applyMiddleware(thunk))
  // applyMiddleware(block_word)
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* <A /> */}
        {/* <B /> */}
        <Data />
      </Provider>
    );
  }
}

export default App;
