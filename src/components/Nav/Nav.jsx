import React from "react";
import s from './Nav.module.css';

export const Nav = () => {
    return (
        <nav className={s.nav}>
            <ul>
            <li><a className={s.active} href='#'>Home</a></li>
            <li><a href='#'>Messages</a></li>
            <li><a href='#'>News</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Contacts</a></li>
            </ul>
        </nav>
    );
}

