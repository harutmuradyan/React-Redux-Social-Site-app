import React from 'react';
import s from './DialogsMessage.module.scss';



const DialogsMessage = (props) => {
  return (
    <div className={s.dialogs_message}>
        <p>{props.message}</p>
    </div>
  );
}

export default DialogsMessage;
