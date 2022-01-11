/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import s from './Sidebar.module.scss';

const Sidebar = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <a>
                    Profil
                </a>
            </div>
            <div className={s.item}>
                <a>
                    Message
                </a>
            </div>
            <div className={s.item}>
                <a>
                    News
                </a>
            </div>
            <div className={s.item}>
                <a>
                    Music
                </a>
            </div>
            <div className={s.item}>
                <a>
                    Sertings
                </a>
            </div>
        </nav>
    )
}

export default Sidebar;