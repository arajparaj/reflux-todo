import React from 'react';
import {Router, Route, IndexRedirect, useRouterHistory} from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';

import Layout from './layout/layout';
import NotFoundPage from './pages/not-found';
import HomePage from './pages/home'

const history = useRouterHistory(createHashHistory)({ queryKey: false });

const routes = (
  <Router history={history}>
    <Route path='/' component={Layout}>
      <IndexRedirect to='All'/>
      <Route path='All' component={HomePage}/>
      <Route path='completed' component={HomePage}/>
      <Route path='active' component={HomePage}/>
    </Route>
    <Route path="*" component={NotFoundPage}/>
  </Router>
);

export default routes;
