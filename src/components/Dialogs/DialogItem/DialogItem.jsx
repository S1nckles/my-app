import React from "react";
import s from "./DialogItem.module.css";
import {NavLink} from 'react-router-dom';

export const DialogItem = (props) => {
    const path = '/dialogs/' + props.id;
    return <li className={s.dialog}>
            <NavLink to={path}> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP80vKAtEEvPGQPABqNl1LsQbZPQc6p_mo7w&usqp=CAU" alt="" />{props.name}</NavLink>
        </li>
}