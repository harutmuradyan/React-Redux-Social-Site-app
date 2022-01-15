/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import s from './DialogsItem.module.scss';
import { Link } from 'react-router-dom';

const DialogsItem = (props) => {

  const path = "/dialogs/" + props.id;

  return (
    <div className={s.dialogs_item + ' ' + s.active}>
        <img src="https://cdn-icons-png.flaticon.com/512/194/194938.png"/>
        <Link to={path}>{props.name}</Link>
    </div>
  );
}

export default DialogsItem;
