/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import s from './Logo.module.scss';



const Logo = (props) => {
  return (
    <div className={s.logo}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png" />
    </div>
  );
}

export default Logo;
