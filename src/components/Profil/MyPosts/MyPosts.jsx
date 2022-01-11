/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import s from '../MyPosts/MyPosts.module.scss';
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default MyPosts;