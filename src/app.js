import React from 'react'
import Header from './header';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import ApplicationAllocatorSetup from './ApplicationAllocatorSetup';


const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/app-allocator-setup" component={ApplicationAllocatorSetup} />
      <Redirect from="/" to="/app-allocator-setup" />
    </Switch>
  </BrowserRouter>
)




export default App;
