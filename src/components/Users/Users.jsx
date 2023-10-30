import React from "react";
import s from './Users.module.css';

const Users = (props) => {
    debugger;
    if (props.users.length === 0) {
        props.setUsers([
            {id: 1, photoUrl: 'https://www.vokrug.tv/pic/product/5/d/3/7/5d376f9569e01c50983e48dd251417d6.jpg', 
            fullName: 'Mykola', status: 'FreeDom for us nation', location: {country: 'Ukraine', city: 'Lviv'}},
            {id: 2, photoUrl: 'https://www.vokrug.tv/pic/product/5/d/3/7/5d376f9569e01c50983e48dd251417d6.jpg', 
            fullName: 'Rahim', status: 'FreeDom too', location: {country: 'Georgia', city: 'Tbilisi'}},
            {id: 3, photoUrl: 'https://www.vokrug.tv/pic/product/5/d/3/7/5d376f9569e01c50983e48dd251417d6.jpg', 
            fullName: 'Jack', status: 'New live', location: {country: 'USA', city: 'Alixandria'}},
            {id: 4, photoUrl: 'https://www.vokrug.tv/pic/product/5/d/3/7/5d376f9569e01c50983e48dd251417d6.jpg', 
            fullName: 'Tomash', status: 'Prace v Prahe', location: {country: 'Czech', city: 'Prague'}}
        ])
    }
return <div className={s.wrapper}>
        {props.users.map(u => <div key={u.id}>
            <div>
                <div className={s.userPhoto}>
                    <img src={u.photoUrl} alt="UserPhoto" />
                </div>
                <div>
                    { u.followed 
                        ? <button onClick={ () => { props.unfollow(u.id) } }>Unfollow</button> 
                        : <button onClick={ () => { props.follow(u.id) } }>Follow</button> }
                </div>
            </div>
            <div>
                <div className="">
                    {u.fullName}
                </div>
                <div className="">
                    {u.status}
                </div>
                <div className="">
                    <h2>{u.location.country}</h2>
                    <h3>{u.location.city}</h3>
                </div>
            </div>
            </div>)}
    </div>
}

export default Users;