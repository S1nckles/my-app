import React from "react";
import { FriendItem } from "./FriendItem/FriendItem";
import s from './Friends.module.css';

export const Friends = (props) => {
    let friendElem = props.friendsData.map(d => <FriendItem friend={d.friend} id={d.id}/>);
    return (
        <div className={s.friends}>
            <h4 className={s.friendsTitle}>Friends</h4>
            <div className={s.friendsItems}>
                <div className={s.friendsItem}>
                    {friendElem}
                </div>
            </div>
        </div>
    );
}