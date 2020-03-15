import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Capture from './pages/capture';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main}/>
      <Route path="/captures" component={Capture}></Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;

