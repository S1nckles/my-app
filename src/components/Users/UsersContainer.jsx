import React from "react";
import { follow, setCurrentPage, unfollow, toggleFollowingProgress, requestUsers } from "../../redux/reducers/users-reducer";
import { connect } from "react-redux";
import Users from "./Users";
import Loading from "../Common/Loading/Loading";
import { compose } from "redux";
import { getFetching, getFollowingInProgress, getPage, getPageSize, getTotalUsersCount, getUsers } from "../../redux/users-selectors";

class UsersContainer extends React.Component {
    // В класах перше виконується constructor потім render і останнім life cycle

    // Якщо в конструкторі є тільки super(props) то можно його не писати
    
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
        
        // this.props.toggleIsFetching(true);
        // // Коли ми зробили функ. if ми очистили компоненту і вона стала чистою 
        // UserAPI.requestUsers(this.props.currentPage, this.props.pageSize).then(response => {
        //     if (response.items) {
        //         this.props.toggleIsFetching(false);
        //         this.props.setUsers(response.items);
        //         this.props.setTotalUsersCount(response.totalCount);
        //     }
        // });   
    }
    onPageChange = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize);

        // this.props.toggleIsFetching(true);
        // this.props.setCurrentPage(pageNumber);
        // UserAPI.requestUsers(pageNumber, this.props.pageSize).then(response => {
        //     if (response.items) {
        //         this.props.toggleIsFetching(false);
        //         this.props.setUsers(response.items)
        //     }
        // });   
    }
    render() { 
        return  <>
                    {this.props.isFetching ? <Loading /> : null }
                    <Users totalUsersCount={this.props.totalUsersCount}
                            pageSize={this.props.pageSize}
                            currentPage={this.props.currentPage}
                            onPageChange={this.onPageChange}
                            users={this.props.users}
                            follow={this.props.follow}
                            unfollow={this.props.unfollow}
                            toggleFollowingProgress={this.props.toggleFollowingProgress}
                            followingInProgress={this.props.followingInProgress}
                            isAuth={this.props.isAuth}/> 
                </>
    }
}

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress,
//         isAuth: state.auth.isAuth
//     }
// }
let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getPage(state),
        isFetching: getFetching(state),
        followingInProgress: getFollowingInProgress(state),
        isAuth: state.auth.isAuth
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(FollowAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(UnFollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(SetUsersAC(users))
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(SetCurrentPageAC(currentPage))
//         },
//         setTotalUsersCount: (count) => {
//             dispatch(SetTotalUsersCountAC(count))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(SetIsFetchingAC(isFetching))
//         }
//     }
// }
export default compose(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers})
)(UsersContainer);