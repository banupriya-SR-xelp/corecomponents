import React from "react";
import ReactDOM from "react-dom";
import App from "../src/App.js";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import "babel-polyfill";
import { createStore, combineReducers, applyMiddleware } from "redux";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import modal from "../src/component/general/reducer/modal.reducers";
import toast from "../src/component/general/reducer/toast.reducers";

const rootReducer = combineReducers({
  modal,
  toast
});

let store = createStore(
  rootReducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
