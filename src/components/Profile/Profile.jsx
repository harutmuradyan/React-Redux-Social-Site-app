/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import s from './Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';
import Background from "./Background/Background";
import Description from './Description/Description'
import NewPost from "./NewPost/NewPost";

const Profile = (props) => {

    return (
        <div className={s.profil}>
            <Background />
            <div>
                <Description/>
            </div>

            <div>
                <NewPost/>
            </div>
            <div className={s.posts_content}>
                <MyPosts posts={props.state.posts}/>
            </div>
        </div>
    )
}

export default Profile;