/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import s from './Background.module.scss';
import Avatar from "./Avatar/Avatar";

const Background = (props) => {
    return (
        <div className={s.background}>
            <Avatar />
        </div>
    );
  }
export default Background;