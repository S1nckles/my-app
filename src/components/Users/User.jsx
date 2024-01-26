import React from "react";
import s from './Users.module.css';
import userPhoto from '../../assets/img/user.png';
import {Navigate, NavLink} from 'react-router-dom';

const User = ({user, followingInProgress, follow, unfollow, ...props}) => {
    return <div>
        <div>
            
            <div className={s.userPhoto}>
                <NavLink to={`/profile/` + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="UserPhoto" />
                </NavLink>
            </div>
            <div>
                { user.followed 
                    ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={ () => { 
                        !props.isAuth ? <Navigate to={"/login"}/> : unfollow(user.id);
                    }}>Unfollow</button> 
                    : <button disabled={followingInProgress.some(id => id === user.id)} onClick={ () => {
                        !props.isAuth ? <Navigate to={"/login"}/> : follow(user.id);
                    } }>Follow</button> }
            </div>
        </div>
        <div>
            <div className="">
                {user.name}
            </div>
            <div className="">
                {user.status}
            </div>
            <div className="">
                {/* <h2>{u.location.country}</h2> */}
                {/* <h3>{u.location.city}</h3> */}
            </div>
        </div>
    </div>
}
export default User