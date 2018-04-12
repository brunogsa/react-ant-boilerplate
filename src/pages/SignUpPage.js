import React from 'react';

import Page from '../components/Page';
import CenteringContainer from '../components/CenteringContainer';
import SignUpBox from '../components/SignUpBox';

import navigation from '../services/navigation';

const SignUpPage = ({ history }) => (

  <Page>
    <CenteringContainer>

      <SignUpBox
        onClick={ () => navigation.toLoginPage(history) }
        style={{ minWidth: '20%' }}
      />

    </CenteringContainer>
  </Page>

);

export default SignUpPage;
