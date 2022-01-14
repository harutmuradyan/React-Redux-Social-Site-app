/* eslint-disable array-callback-return */
import React from 'react';
import s from './Dialogs.module.scss';
import DialogsItem from './DialogsItem/DialogsItem';
import DialogsMessage from './DialogsMessage/DialogsMessage';


const Dialogs = (props) => {

  let dialogsData = [
    {id : 1 , name : "Gary"},
    {id : 2 , name : "Roman"},
    {id : 3 , name : "Andre"},
    {id : 4 , name : "Alisa"},
    {id : 5 , name : "Juli"} 
  ]

  let messagesData = [
    {id : 0 , message : "Hi"},
    {id : 1 , message : "How are you"},
    {id : 2 , message : "whots your name"},
    {id : 3 , message : "Yes. I am interested"},
    {id : 4 , message : "Thank you"}
  ]

  let dialogsItems = dialogsData.map( d => { 
    return <DialogsItem name={d.name} id={d.id} />}
  );


  let dialogsMessages = messagesData.map ( m => { 
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
