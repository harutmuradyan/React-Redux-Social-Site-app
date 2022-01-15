/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import s from '../MyPosts/MyPosts.module.scss';
import Post from './Post/Post'

const MyPosts = (props) => {


    let postElement = props.posts.map( p => {
        return <Post message={p.message} likeCount={p.likesCount} />
    });

    return (
        <div className={s.myPosts}>
           <div className={s.myPosts_sertings}>
                <textarea></textarea>
                <button >Add Post</button>
                <button >Remove</button>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    )
}

export default MyPosts;