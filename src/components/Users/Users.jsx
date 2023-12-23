import React from "react";
import s from './Users.module.css';
import userPhoto from '../../assets/img/user.png';
import {Navigate, NavLink} from 'react-router-dom';

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    
    return (
        <div className={s.wrapper}>
            <div className={s.pagination}>
                {pages.map(p => {
                    return <span className={props.currentPage === p && s.active} onClick={(e) => {props.onPageChange(p)}}>{p}</span>
                })}
            </div>
            {props.users.map(u => (
                <div key={u.id}>
                    <div>
                        <div className={s.userPhoto}>
                            <NavLink to={`/profile/` + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="UserPhoto" />
                            </NavLink>
                        </div>
                        <div>
                            { u.followed 
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={ () => { 
                                    !props.isAuth ? <Navigate to={"/login"}/> : props.unfollow(u.id);
                                }}>Unfollow</button> 
                                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={ () => {
                                    !props.isAuth ? <Navigate to={"/login"}/> : props.follow(u.id);
                                } }>Follow</button> }
                        </div>
                    </div>
                    <div>
                        <div className="">
                            {u.name}
                        </div>
                        <div className="">
                            {u.status}
                        </div>
                        <div className="">
                            {/* <h2>{u.location.country}</h2> */}
                            {/* <h3>{u.location.city}</h3> */}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Users;
