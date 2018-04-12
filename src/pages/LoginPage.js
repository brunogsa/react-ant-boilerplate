import React from 'react';

import Page from '../components/Page';
import CenteringContainer from '../components/CenteringContainer';
import LoginBox from '../components/LoginBox';

import navigation from '../services/navigation';

const LoginPage = ({ history }) => (

  <Page>
    <CenteringContainer>

      <LoginBox
        onSuccessLogin={ () => console.log('Redirect to Dashboard Page') }
        onSignUpClick={ () => navigation.toSignUpPage(history) }
        style={{ minWidth: '20%' }}
      />

    </CenteringContainer>
  </Page>

);

export default LoginPage;
