import React from 'react';

import Page from '../components/Page';
import CenteringContainer from '../components/CenteringContainer';
import LoginBox from '../components/LoginBox';

import navigation from '../services/navigation';

const LoginPage = ({ history }) => (

  <Page>
    <CenteringContainer>
      <LoginBox onClick={ () => navigation.toSignUpPage(history) } />
    </CenteringContainer>
  </Page>

);

export default LoginPage;
