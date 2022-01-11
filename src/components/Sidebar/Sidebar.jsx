import React from "react";
import './sidebar.scss';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div>
                <ul>
                    <li>
                        Profile
                    </li>
                    <li>
                        Message
                    </li>
                    <li>
                        News
                    </li>
                    <li>
                        Music
                    </li>
                    <li>
                        Sertings
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;