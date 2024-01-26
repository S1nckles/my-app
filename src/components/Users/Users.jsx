import React from "react";
import s from './Users.module.css';
import userPhoto from '../../assets/img/user.png';
import {Navigate, NavLink} from 'react-router-dom';
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";

const Users = ({totalUsersCount, pageSize, currentPage, onPageChange, users, ...props}) => {
    return (
        <div className={s.wrapper}>
            <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage} onPageChange={onPageChange} />
            <div>
                {users.map(u => <User user={u} followingInProgress={props.followingInProgress} follow={props.follow} unfollow={props.unfollow} key={u.id} {...props} />)}
            </div>
        </div>
    );
}

export default Users;
