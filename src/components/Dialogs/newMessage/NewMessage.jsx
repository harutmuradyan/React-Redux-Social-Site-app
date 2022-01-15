import React from 'react';
import s from './NewMessage.module.scss';

let newMessageElement = React.createRef();

let addPost = () => {
  let text = newMessageElement.current.value;
  alert(text);
}


const NewMessage = (props) => {
  return (
    <div className={s.myMessage_sertings}>
      <textarea ref={newMessageElement}></textarea>
      <button className={s.succes} onClick={addPost}>Add Post</button>
      <button className={s.remove}>Remove</button>
    </div>
  );
}

export default NewMessage;
