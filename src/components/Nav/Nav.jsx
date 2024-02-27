import React from "react";
import s from './Nav.module.css';
import {NavLink} from 'react-router-dom';
import { FriendsContainer } from "./Friends/FriendsContainer";

export const Nav = () => {
    return (
        <nav className={s.nav}>
            <ul> 
                <li><NavLink to='/profile' className={({ isActive }) =>
                    isActive ? `${s.activeLink}` : ""
                }>Home</NavLink></li>
                <li><NavLink to='/dialogs' className={({ isActive }) =>
                    isActive ? `${s.activeLink}` : ""
                }>Messages</NavLink></li>
                <li><NavLink to='/users' className={({ isActive }) =>
                    isActive ? `${s.activeLink}` : ""
                }>Find Users</NavLink></li>
                <li><NavLink to='/news' className={({ isActive }) =>
                    isActive ? `${s.activeLink}` : ""
                }>News</NavLink></li>
                <li><NavLink to='/music' className={({ isActive }) =>
                    isActive ? `${s.activeLink}` : ""
                }>Music</NavLink></li>
                <li><NavLink to='/contacts' className={({ isActive }) =>
                    isActive ? `${s.activeLink}` : ""
                }>Contacts</NavLink></li>
            </ul>
            <FriendsContainer />
        </nav>
        
    );
}