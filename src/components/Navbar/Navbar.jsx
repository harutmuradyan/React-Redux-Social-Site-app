/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-undef */
import React from "react";
import s from './Navbar.module.scss';
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import SocialSite from "../SocialSite/SocialSite";

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <div>
                <Logo/>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <Link to="/profile">
                    Profil
                </Link>
            </div>
            <div className={s.item}>
                <Link  to="/dialogs">
                    Message
                </Link>
            </div>
            <div className={s.item}>
                <Link to="/news">
                    News
                </Link>
            </div>
            <div className={s.item}>
                <Link to="/music">
                    Music
                </Link>
            </div>
            <div className={s.item}>
                <Link to="/sertings">
                    Sertings
                </Link>
            </div>
            <div>
                <SocialSite/>
            </div>
        </nav>
    )
}

export default Navbar;