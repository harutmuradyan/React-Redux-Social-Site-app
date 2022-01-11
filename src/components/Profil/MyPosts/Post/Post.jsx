/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import s from './Post.module.scss';

const Post = () => {
    return (
        <div>
            <div className={`${s.item} ${s.active}`}>
                <img src="https://cdn-icons-png.flaticon.com/512/194/194938.png"/>
                Post2
                <div>
                    <span>Like</span>
                </div>
            </div>
        </div>
    )
}

export default Post;