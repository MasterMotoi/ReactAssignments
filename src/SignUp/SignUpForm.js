import React, { PropTypes, Component } from 'react';
import { Input } from 'react-toolbox/lib/input';
import FullWidthButton from 'components/FullWidthButton';
import FormError from 'components/FormError';
import _curry from 'lodash/curry';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import _identity from 'lodash/identity';
import './SignUpForm.scss'
import '../App/App.scss'

class SignUpForm extends Component {

  static propTypes = {
    isLoading: PropTypes.bool,
    errorMessage: PropTypes.string,
    onSubmit: PropTypes.func,
  };

  static defaultProps = {
    isLoading: false,
    errorMessage: '',
    onSubmit: _identity,
  };

  constructor(props, context) {
    super(props, context);
    // do we need initial state?, if so set it here...
    this.state = {
      password: '',
      username: '',
      errors: {
        password: [],
        username: [],
      },
    };
  }

  // update the state when the input fields change...
  handleInputChange = _curry((name, value) => {
    this.setState({ [name]: value });
  });
  handleUsernameChange = this.handleInputChange('username');
  handlePasswordChange = this.handleInputChange('password');

  // handle the form submission...
  handleSubmit = e => {
    e.preventDefault();

    const usernameErrors = this.validateUsernameField();
    const passwordErrors = this.validatePasswordField();

    this.setState({
      errors: {
        ...this.state.errors,
        username: usernameErrors,
        password: passwordErrors,
      },
    });

    if (Array.concat(usernameErrors, passwordErrors).length === 0) { // is form valid
      this.props.onSubmit({
        username: this.state.username,
        password: this.state.password,
      });
    }
  };

  validateUsernameField = () => {
    const errors = [];
    const value = this.state.username;

    if (value.length < 3) {
      errors.push('Username minimum length is 3 chars');
    }

    return errors;
  };

  validatePasswordField = () => {
    const errors = [];
    const value = this.state.password;
    
    if (value.length < 8) {
      errors.push('The password should be at least 8 characters long');
    }

    if (!/(?=.*?[a-z])/.test(value)) { // lowercase
      errors.push('The password should contain at least one lowercase character');
    }

    if (!/(?=.*?[A-Z])/.test(value)) { // uppercase
      errors.push('The password should contain at least one uppercase character');
    }

    if (!/(?=.*?[0-9])/.test(value)) { // digit
      errors.push('The password should contain at least one digit character');
    }

    if (!/(?=.*?[#?!@$%^&*-])/.test(value)) { // symbol
      errors.push('The password should contain at least one symbol');
    }

    return errors;
  };

  renderFieldErrors = fieldName => {
    const errors = (this.state.errors[fieldName] || []).map(
      message => <div key={message}>{message}</div>
    );
    return errors.length ? <FormError error={errors} /> : null;
  };

  goodPWD = errors => {
    
    if (errors.length == 0) {
      return (
        <div className="validationPWD">
          <p>Your password is secure enough, you're good to go !</p>
        </div>
      );
    }
    return "";
  }

  render() {
    const { isLoading, errorMessage } = this.props;
    const passwordErrors = this.validatePasswordField();
    
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <Input
            label="Username"
            type="input"
            onChange={this.handleUsernameChange}
            value={this.state.username}
          />

          {this.renderFieldErrors('username')}

          <Input
            label="Password"
            type="password"
            onChange={this.handlePasswordChange}
            value={this.state.password}
            className="pwdField"
          />
          {this.renderFieldErrors('password')}

          {/* <ul>
            {passwordErrors.map(function (error){
              return (<li>{error}</li>)
            })}
          </ul> */}

          <ul>
            <li id="er1" className="unsuccess">Error 1</li>
            <li id="er2" className="unsuccess">Error 2</li>
            <li id="er3" className="unsuccess">Error 3</li>
          </ul>

          {this.goodPWD(passwordErrors)}

          {isLoading ? (
            <div>
              <ProgressBar type="circular" mode="indeterminate" multicolor />
            </div>
          ) : (
            <FullWidthButton
              label="Sign up!"
              type="submit"
              raised
              primary
            />
          )}
          <FormError error={errorMessage} />

        </form>
      </div>
    );
  }
}

export default SignUpForm;
