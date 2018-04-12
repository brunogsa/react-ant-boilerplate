import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'antd/lib/icon';
import 'antd/lib/icon/style/css';

import Input from 'antd/lib/input';
import 'antd/lib/input/style/css';

import Button from 'antd/lib/button';
import 'antd/lib/button/style/css';

import Box from '../components/Box';
import CenteringContainer from '../components/CenteringContainer';

const specificStyle = {
  fullRow: {
    width: '100%',
  },
};

class SignUpBox extends React.Component {
  constructor({ onClick, style, className }) {
    super();

    this.style = style;
    this.className = className;

    this.onClick = onClick;

    this.state = {
      email: '',
      password: '',
      fullName: '',
    };
  }

  handleFullNameChanges(value) {
    this.setState({
      fullName: value,
    });
  }

  handleEmailChanges(value) {
    this.setState({
      email: value,
    });
  }

  handlePasswordChanges(value) {
    this.setState({
      password: value,
    });
  }

  render() {
    return (

      <Box style={ this.style } className={ this.className }>
        <CenteringContainer>

          <h1>
            Create an Account
          </h1>

          <Input
            value={ this.state.fullName }

            placeholder="Full Name"
            size="default"

            onInput={ event => this.handleFullNameChanges(event.target.value) }

            suffix={(
              <Icon type="smile-o" />
            )}

            style={{
              ...specificStyle.fullRow,
            }}
            className="has-small-margin"
          />

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
            onClick={ this.onClick }

            style={{
              ...specificStyle.fullRow,
            }}
            className="has-small-margin has-bigger-margin-on-top"
          >
            Sign Up
          </Button>

          <Button
            type="ghost"
            size="large"
            onClick={ this.onClick }

            style={{
              ...specificStyle.fullRow,
            }}
            className="has-small-margin"
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
