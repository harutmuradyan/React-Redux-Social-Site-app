/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import s from './DialogsMessage.module.scss';


const DialogsMessage = (props) => {
  return (
    <div className={s.dialogs_message}>
      <img src="https://cdn-icons-png.flaticon.com/512/194/194938.png"/>
      <p>{props.message}</p>
    </div>

  );
}

export default DialogsMessage;
