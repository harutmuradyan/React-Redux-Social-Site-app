import React from 'react';
import s from './NewPost.module.scss';

let newPostElement = React.createRef();

let addPost = () => {
  let text = newPostElement.current.value;
  alert(text);
}


const NewPost = (props) => {
  return (
    <div className={s.myPosts_sertings}>
      <textarea ref={newPostElement}></textarea>
      <button className={s.succes} onClick={addPost}>Add Post</button>
      <button className={s.remove}>Remove</button>
    </div>
  );
}

export default NewPost;
