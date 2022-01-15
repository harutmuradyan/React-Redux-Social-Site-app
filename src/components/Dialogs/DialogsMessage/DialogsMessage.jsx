import React from 'react';
import s from './DialogsMessage.module.scss';


const DialogsMessage = (props) => {
  return (
    <div className={s.dialogs_message}>
        <div>
          <p>{props.message}</p>
        </div>
    </div>

  );
}

export default DialogsMessage;
