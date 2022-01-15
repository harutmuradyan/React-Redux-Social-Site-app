/* eslint-disable array-callback-return */
import React from 'react';
import s from './Dialogs.module.scss';
import DialogsItem from './DialogsItem/DialogsItem';
import DialogsMessage from './DialogsMessage/DialogsMessage';


const Dialogs = (props) => {

  let dialogsItems = props.state.dialogs.map( d => { 
    return <DialogsItem name={d.name} id={d.id} />}
  );


  let dialogsMessages = props.state.messages.map ( m => { 
    return <DialogsMessage message={m.message}/>}
  );

  return (
    
      <div className={s.dialogs_page}>
        <div className={s.dialogs_items}>
          <div>
             {dialogsItems}
          </div>
        </div>

        <div className={s.dialogs_messages}>
          <div>
            {dialogsMessages}
          </div>
        </div>
      </div>
  
  );
}

export default Dialogs;
