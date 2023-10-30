import React from "react";
import s from './Nav.module.css';
import {NavLink} from 'react-router-dom';
import { FriendsContainer } from "./Friends/FriendsContainer";

export const Nav = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li><NavLink to='/profile' activeclassname={s.activeLink}>Home</NavLink></li>
                <li><NavLink to='/dialogs' activeclassname={s.activeLink}>Messages</NavLink></li>
                <li><NavLink to='/news' activeclassname={s.activeLink}>News</NavLink></li>
                <li><NavLink to='/music' activeclassname={s.activeLink}>Music</NavLink></li>
                <li><NavLink to='/contacts' activeclassname={s.activeLink}>Contacts</NavLink></li>
            </ul>
            <FriendsContainer />
        </nav>
        
    );
}