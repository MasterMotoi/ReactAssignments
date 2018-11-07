import React from 'react';
import style from './Logo.scss';

const Logo = (props) => {
  let className = style.logo;
  if (props.className) className += ` ${props.className}`;

  /* eslint-disable */
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
    >
      <path d="M32.2,12.4C32.2,12.4,32.2,12.3,32.2,12.4C31.8,11.3,29,5.9,13.6,0c0,0-0.1,0-0.1,0C13.2,0,13,0.2,13,0.4v2.4C9.8,1.9,5.8,1.2,1.5,0.2H1.4c-0.2,0-0.4,0.2-0.4,0.4v34.1c0,0.2,0.1,0.4,0.4,0.4C2,35.3,3.6,35.5,5.8,36v12.7c0,0.2,0.2,0.4,0.4,0.4c0,0,0,0,0.1,0c4.2-0.6,7.7-0.8,10.7-0.8c13.2,0,15.2,4.9,15.3,5.4v-5.7v-1.5L32.2,12.4C32.3,12.5,32.3,12.4,32.2,12.4z M14.6,2.1c4.1,1.6,7.1,3.2,9.4,4.6c0,0,0,0,0.1,0c1.6,1,2.8,1.9,3.7,2.7c0,0,0,0,0,0c2,1.7,2.7,2.9,2.9,3.3v29.6c-6.2-5.8-13.6-8.5-16.1-9.2V9.8V8.2V5V3.3V2.1z M2.5,33.7V2.1c0.8,0.2,1.6,0.4,2.4,0.5c2.8,0.6,5.4,1.1,7.6,1.8c0.2,0,0.3,0.1,0.4,0.1v3.8v1.6V34c0,0.2,0.1,0.4,0.3,0.4c1.6,0.4,8.9,2.7,15.4,8.3c-5.8-3.8-14.2-6.4-21.3-8.1c-0.4-0.1-0.8-0.2-1.2-0.3c-0.1,0-0.2,0-0.4-0.1C4.5,34,3.3,33.8,2.5,33.7z M30.7,49.6c-2.4-1.6-6.5-2.9-13.7-2.9c-2.9,0-6.1,0.2-9.6,0.7v-11c6.9,1.6,17.6,4.8,23.3,10V49.6z" />
      <path d="M62.6,11.6C62.6,11.6,62.6,11.6,62.6,11.6c-1.6,0.3-6.4,1.4-11.6,2.9V12c0-0.2-0.2-0.4-0.4-0.4c0,0-0.1,0-0.1,0c-10.1,2.7-16,8.8-18.6,11.6c0,0,0,0,0,0c-0.3,0.3-0.5,0.5-0.7,0.8c0,0,0,0,0,0c-0.2,0.2-0.3,0.4-0.5,0.7c0,0-0.1,0.1-0.1,0.1v34.5v2.9V64c2.4-3.7,9.5-4.7,16.1-4.7c5.4,0,10.4,0.6,11.9,0.8h0.1c0.2,0,0.4-0.2,0.4-0.4V47.3c1.1-0.3,2.4-0.6,3.6-0.9c0.2,0,0.3-0.2,0.3-0.4V12C63.1,11.7,62.9,11.6,62.6,11.6z M49.4,13.6v1.4v1.7v3v1.6v23.1c-3.2,1.1-11.6,4.4-17.2,10.2V25.2c0.2-0.3,0.4-0.5,0.8-0.8l0.1-0.1l0,0c0.6-0.7,1.7-1.9,3.3-3.3c0.8-0.7,1.8-1.5,2.9-2.3C41.9,16.8,45.3,14.9,49.4,13.6z M57.5,58.4c-2.3-0.3-6.4-0.7-10.8-0.7c-6.5,0-11.4,0.9-14.5,2.7v-1.3c2.5-2.9,8.9-7.2,25.3-11.4V58.4z M61.5,45.1c-0.8,0.2-1.6,0.4-2.3,0.6l-0.4,0.1c-0.4,0.1-0.8,0.2-1.2,0.3c-13.4,3.4-20.6,7-24.4,10c6-6.4,15.8-9.8,17.6-10.4c0.2-0.1,0.3-0.2,0.3-0.4V21.3v-1.6v-3.6c0.1,0,0.3-0.1,0.4-0.1c4-1.2,7.8-2.1,10-2.6V45.1z" />
    </svg>
  );
  /* eslint-enable */
};

Logo.propTypes = {
  className: React.PropTypes.string,
};

export default Logo;
