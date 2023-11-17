import React from "react";
import s from "./Header.module.css";
import {NavLink} from 'react-router-dom';

export const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-256.png'/>
            <div className={s.authBlock}>
                {props.isAuth ? <span>{props.login}</span> : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}