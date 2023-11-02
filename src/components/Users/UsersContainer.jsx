import React from "react";
import { FollowAC, SetCurrentPageAC, SetTotalUsersCountAC, SetUsersAC, UnFollowAC } from "../../redux/reducers/users-reducer";
import { connect } from "react-redux";
import axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {
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
        return <Users totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChange={this.onPageChange}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow} /> 
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(FollowAC(userId))
        },
        unfollow: (userId) => {
            dispatch(UnFollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(SetUsersAC(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(SetCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (count) => {
            dispatch(SetTotalUsersCountAC(count))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);