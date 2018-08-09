import React from "react";
import Header from "./header";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import ApplicationAllocatorSetup from "./ApplicationAllocatorSetup";
import SetCriteria from "./SetCriteria";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/app-allocator-setup"
        component={ApplicationAllocatorSetup}
      />
      <Route exact path="/set-criteria" component={SetCriteria} />
      <Redirect from="/" to="/app-allocator-setup" />
    </Switch>
  </BrowserRouter>
);

export default App;
