import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import ModalContainer from "./component/general/container/ModalContainer";
import ButtonContainer from "./component/Demo/container/ButtonContainer";
import ToastContainer from "./component/general/container/ToastContainer";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" component={ButtonContainer}></Route>
      </Switch>
      <ModalContainer />
      <ToastContainer />
    </React.Fragment>
  );
}

export default App;
