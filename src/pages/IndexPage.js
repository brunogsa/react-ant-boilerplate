import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import routes from '../routes';

import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import DashboardPage from './DashboardPage';

const isLogged = false;

const PublicRoutes = (

  <Switch>
    <Route exact path={ routes.login } component={ LoginPage } />
    <Route exact path={ routes.signUp } component={ SignUpPage } />

    <Route
      render={ () => <Redirect to={ routes.login } /> }
    />
  </Switch>

);

const ProtectedRoutes = (

  <Switch>
    <Route exact path={ routes.dashboard } component={ DashboardPage } />

    <Route
      render={ () => <Redirect to={ routes.dashboard } /> }
    />
  </Switch>

);

const IndexPage = () => (

  <HashRouter>
    { isLogged ? ProtectedRoutes : PublicRoutes }
  </HashRouter>

);

export default IndexPage;
