import React from "react";
import s from "./DialogItem.module.css";
import {NavLink} from 'react-router-dom';

export const DialogItem = (props) => {
    const path = '/dialogs/' + props.id;
    return <li className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </li>
}