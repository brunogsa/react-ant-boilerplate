import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import routes from '../routes';

import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';

const IndexPage = () => (

  <HashRouter>

    <Switch>
      <Route exact path={ routes.login } component={ LoginPage } />
      <Route exact path={ routes.signUp } component={ SignUpPage } />

      <Route
        render={ () => <Redirect to={ routes.login } /> }
      />
    </Switch>

  </HashRouter>

);

export default IndexPage;
