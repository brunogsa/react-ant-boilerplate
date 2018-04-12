import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'antd/lib/icon';
import 'antd/lib/icon/style/css';

import Input from 'antd/lib/input';
import 'antd/lib/input/style/css';

import Button from 'antd/lib/button';
import 'antd/lib/button/style/css';

import message from 'antd/lib/message';
import 'antd/lib/message/style/css';

import emailValidator from 'email-validator';

import Box from '../components/Box';
import CenteringContainer from '../components/CenteringContainer';

const specificStyle = {
  fullRow: {
    width: '100%',
  },
};

class LoginBox extends React.Component {
  constructor({
    onSuccessLogin,
    onSignUpClick,
    style,
    className,

  }) {
    super();

    this.style = style;
    this.className = className;

    this.onSuccessLogin = onSuccessLogin;
    this.onSignUpClick = onSignUpClick;

    this.state = {
      email: '',
      password: '',

      hasEmail: false,
      hasPassword: false,
      isValidEmail: false,
      isLoading: false,
    };
  }

  handleLoginClick() {
    message.success('Welcome back!', 2, this.onSuccessLogin);
  }

  handleEmailChanges(value) {
    const hasEmail = value !== null && value !== undefined && value !== '';
    const isValidEmail = emailValidator.validate(value);

    this.setState({
      email: value,
      hasEmail,
      isValidEmail,
    });
  }

  handlePasswordChanges(value) {
    const hasPassword = value !== null && value !== undefined && value !== '';

    this.setState({
      password: value,
      hasPassword,
    });
  }

  render() {
    return (

      <Box style={ this.style } className={ this.className }>
        <CenteringContainer>

          <h1>
            Welcome Back
          </h1>

          <Input
            value={ this.state.email }
            type="email"

            placeholder="Email"
            size="default"

            onInput={ event => this.handleEmailChanges(event.target.value) }

            suffix={(
              <Icon type="mail" />
            )}

            style={{
              ...specificStyle.fullRow,
            }}
            className="has-small-margin"
          />

          <Input
            value={ this.state.password }
            type="password"

            placeholder="Password"
            size="default"

            onInput={ event => this.handlePasswordChanges(event.target.value) }

            suffix={(
              <Icon type="key" />
            )}

            style={{
              ...specificStyle.fullRow,
            }}
            className="has-small-margin"
          />

          <Button
            type="primary"
            size="large"
            onClick={ () => this.handleLoginClick() }

            disabled={
              !this.state.hasEmail
              || !this.state.isValidEmail
              || !this.state.hasPassword
              || this.state.isLoading
            }

            style={{
              ...specificStyle.fullRow,
            }}
            className="has-small-margin has-bigger-margin-on-top"
          >
            Login
          </Button>

          <Button
            type="ghost"
            size="large"
            onClick={ this.onSignUpClick }

            style={{
              ...specificStyle.fullRow,
            }}
            className="has-small-margin"
          >
            Doesn´t have an Account? Sign Up!
          </Button>

        </CenteringContainer>
      </Box>

    );
  }
}

LoginBox.propTypes = {
  onSuccessLogin: PropTypes.func.isRequired,
};

export default LoginBox;
