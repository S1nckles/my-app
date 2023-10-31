import React from "react";
import s from './Users.module.css';
import axios from "axios";
import userPhoto from '../../assets/img/user.png';

class Users extends React.Component {
    constructor(props) {
        super(props);
        // Коли ми зробили функ. if ми очистили компоненту і вона стала чистою 
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                if (response.data.items) {
                    this.props.setUsers(response.data.items)
                }
            });
        }
    }
    
    render() {
        return (
            <div className={s.wrapper}>
                {this.props.users.map(u => (
                    <div key={u.id}>
                        <div>
                            <div className={s.userPhoto}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="UserPhoto" />
                            </div>
                            <div>
                                { u.followed 
                                    ? <button onClick={ () => { this.props.unfollow(u.id) } }>Unfollow</button> 
                                    : <button onClick={ () => { this.props.follow(u.id) } }>Follow</button> }
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
}

export default Users;
