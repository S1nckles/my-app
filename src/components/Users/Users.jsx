import React from "react";
import s from './Users.module.css';
import axios from "axios";
import userPhoto from '../../assets/img/user.png';

class Users extends React.Component {
    // В класах перше виконується constructor потім render і останнім life cycle

    // Якщо в конструкторі є тільки super(props) то можно його не писати
    
    componentDidMount() {
        // Коли ми зробили функ. if ми очистили компоненту і вона стала чистою 
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            if (response.data.items) {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            }
        });   
    }
    
    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            if (response.data.items) {
                this.props.setUsers(response.data.items)
            }
        });   
    }
    
    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        
        
        return (
            <div className={s.wrapper}>
                <div className={s.pagination}>
                    {pages.map(p => {
                        return <span className={this.props.currentPage === p && s.active} onClick={(e) => {this.onPageChange(p)}}>{p}</span>
                    })}
                </div>
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
