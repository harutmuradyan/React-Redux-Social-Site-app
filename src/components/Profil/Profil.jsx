/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import s from './Profil.module.scss';
import MyPosts from './MyPosts/MyPosts';

const Profil = () => {
    return (
        <div className={s.profil}>
            <div>
                <img src="https://mangrumnewmedia.files.wordpress.com/2016/09/socialmedia.jpg"/>
            </div>
            <div>
                Avatar + description
            </div>

            <div>
                New posts
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profil;