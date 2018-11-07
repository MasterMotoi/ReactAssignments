import React, { PropTypes } from 'react';
import { Input } from 'react-toolbox/lib/input';
import * as styles from './Form.scss';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import FullWidthButton from 'components/FullWidthButton';
import FormError from './FormError.js';

const form = (props) => {
    return (
        <div>
            <form onSubmit={props.submit}>

            <Input
              label="Username"
              type="input"
              onChange={props.usernameChange}
              value={props.state.username}
            />

            <Input
              label="Password"
              type="password"
              onChange={props.pwdChange}
              value={props.state.password}
              className="pwdField"
            />

            {props.pwdConditions}

            {props.loads ? (
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
            <FormError error={props.errorMsg} />
            
            </form>
        </div>
    );
}

export default form;