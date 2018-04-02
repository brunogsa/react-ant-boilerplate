import React from 'react';
import PropTypes from 'prop-types';

import Button from 'antd/lib/button';
import 'antd/lib/button/style/css';

import Box from '../components/Box';
import CenteringContainer from '../components/CenteringContainer';

class LoginBox extends React.Component {
  constructor({ onClick }) {
    super();
    this.onClick = onClick;
  }

  render() {
    return (

      <Box>
        <CenteringContainer>

          <h1>
            Login Page
          </h1>

          <Button
            type="ghost"
            size="large"
            onClick={ this.onClick }
          >
            Doesn´t have an Account? Sign Up!
          </Button>

        </CenteringContainer>
      </Box>

    );
  }
}

LoginBox.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LoginBox;
