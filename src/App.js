import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import NotFound from "./component/general/NotFound";
import AuthContainer from "./component/Auth/container/AuthContainer";
import CustomerProfile from "./component/customer/component/CustomerProfile";
import CustomerProfileContainer from "./component/customer/container/CustomerProfileConatiner";
import CustomerDetailsContainer from "./component/customer/container/CustomerDetailsConatiner";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={AuthContainer} />
      <Route
        exact
        path="/customerProfile"
        component={CustomerProfileContainer}
      />
       <Route
        exact
        path="/customerDetails"
        component={CustomerDetailsContainer}
      />
      <Route exact path="/notfound" component={NotFound} />
      <Route>
        <Redirect to="/notfound"></Redirect>
      </Route>
    </Switch>
  );
}

export default App;
