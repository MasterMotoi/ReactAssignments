import React, { PropTypes, Component }  from 'react';
import * as style from './ErrorsPWD.scss';

const errorsPWD = (props) => {
  if (props.errorArray.length == 0) {
    return (
      <div className="validationPWD">
        <p>Your password is secure enough, you're good to go !</p>
      </div>
    );
  }
  return (
    <div>
      <ul>
        <li id="er1" className={style.unsuccess}>The password should be at least 8 characters long</li>
        <li id="er2" className={style.unsuccess}>The password should contain at least one lowercase character</li>
        <li id="er3" className={style.unsuccess}>The password should contain at least one uppercase character</li>
        <li id="er4" className={style.unsuccess}>The password should contain at least one digit character</li>
        <li id="er5" className={style.unsuccess}>The password should contain at least one symbol</li>
      </ul>
    </div>
  );
}

export default errorsPWD;