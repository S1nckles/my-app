import React from "react";
import s from './Friends.module.css';

export const Friends = () => {
    return (
        <div className={s.friends}>
            <h4 className={s.friendsTitle}>Friends</h4>
            <div className={s.friendsItems}>
                <div className={s.friendsItem}>
                    <a href="#">
                        <img src="https://cdn-icons-png.flaticon.com/128/5079/5079583.png" alt="" />
                        <span>Mike</span>
                    </a>
                </div>
                <div className={s.friendsItem}>
                    <a href="#">
                        <img src="https://cdn-icons-png.flaticon.com/128/5079/5079583.png" alt="" />
                        <span>John</span>
                    </a>
                </div>
                <div className={s.friendsItem}>
                    <a href="#">
                        <img src="https://cdn-icons-png.flaticon.com/128/5079/5079583.png" alt="" />
                        <span>Nick</span>
                    </a>
                </div>
            </div>
        </div>
    );
}