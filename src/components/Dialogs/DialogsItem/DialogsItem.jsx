/* eslint-disable react/jsx-no-undef */
import React from 'react';
import s from './DialogsItem.module.scss';
import { Link } from 'react-router-dom';

const DialogsItem = (props) => {

  const path = "/dialogs/" + props.id;

  return (
    <div className={s.dialogs_item + ' ' + s.active}>
        <Link to={path}>{props.name}</Link>
    </div>
  );
}

export default DialogsItem;
