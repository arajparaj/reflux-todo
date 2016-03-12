import React from 'react';
import {Router, Route, IndexRoute, useRouterHistory} from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';

import Layout from './layout/layout';
import NotFoundPage from './pages/not-found';
import HomePage from './pages/home'

const history = useRouterHistory(createHashHistory)({ queryKey: false });

const routes = (
  <Router history={history}>
    <Route path='/' component={Layout}>
      <IndexRoute component={HomePage}/>
    </Route>
    <Route path="*" component={NotFoundPage}/>
  </Router>
);

export default routes;
