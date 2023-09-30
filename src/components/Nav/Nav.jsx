import React from "react";
import s from './Nav.module.css';
import {NavLink} from 'react-router-dom';
import { Friends } from "./Friends/Friends";

export const Nav = (props) => {
    debugger;
    return (
        <nav className={s.nav}>
            <ul>
                <li><NavLink to='/profile' activeClassName={s.activeLink}>Home</NavLink></li>
                <li><NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink></li>
                <li><NavLink to='/news' activeClassName={s.activeLink}>News</NavLink></li>
                <li><NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink></li>
                <li><NavLink to='/contacts' activeClassName={s.activeLink}>Contacts</NavLink></li>
            </ul>
            <Friends state={props.state.friendsData}/>
        </nav>
        
    );
}