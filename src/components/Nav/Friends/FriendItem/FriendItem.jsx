import React from "react";
import s from './FriendItem.module.css'

export const FriendItem = (props) => {
    return (
        <a href="#" className={s.friendElem}>
            <img src="https://cdn-icons-png.flaticon.com/128/5079/5079583.png" alt="" />
            <span>{props.friend}</span>
        </a>
    )
}