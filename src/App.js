import React from "react";
import logo from "./logo.svg";
import styles from "./App.css";
import Input from "./component/general/Input";
import { Route, Switch, Redirect } from "react-router-dom";
import Auth from "./component/Auth/Auth";
import NotFound from "./component/general/NotFound";
import AuthContainer from "./component/Auth/container/AuthContainer";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={AuthContainer} />
      <Route exact path="/notfound" component={NotFound} />
      <Route>
        <Redirect to="/notfound"></Redirect>
      </Route>
    </Switch>
  );
}

export default App;
