/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import s from './Avatar.module.scss';



const Avatar = (props) => {
  return (
    <div className={s.avatar}>
      <img src="https://cdn-icons-png.flaticon.com/512/194/194938.png"/>
    </div>
  );
}

export default Avatar;
