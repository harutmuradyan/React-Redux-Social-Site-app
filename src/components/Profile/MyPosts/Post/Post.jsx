/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import s from './Post.module.scss';

const Post = (props) => {

    return (
        <div>
            <div className={`${s.item} ${s.active}`}>
                <img src="https://cdn-icons-png.flaticon.com/512/194/194938.png"/>
                {props.message}
                <div>
                    <span>{props.likeCount}</span>
                </div>
            </div>
        </div>
    )
}

export default Post;