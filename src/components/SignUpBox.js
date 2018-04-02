import React from 'react';
import PropTypes from 'prop-types';

import Button from 'antd/lib/button';
import 'antd/lib/button/style/css';

import Box from '../components/Box';
import CenteringContainer from '../components/CenteringContainer';

class SignUpBox extends React.Component {
  constructor({ onClick }) {
    super();
    this.onClick = onClick;
  }

  render() {
    return (

      <Box>
        <CenteringContainer>

          <h1>
            Sign Up Page
          </h1>

          <Button
            type="ghost"
            size="large"
            onClick={ this.onClick }
          >
            I already have an Account
          </Button>

        </CenteringContainer>
      </Box>

    );
  }
}

SignUpBox.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SignUpBox;
