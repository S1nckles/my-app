import React, { useEffect } from "react";
import { follow, setCurrentPage, unfollow, toggleFollowingProgress, requestUsers } from "../../redux/reducers/users-reducer";
import { connect } from "react-redux";
import Users from "./Users";
import Loading from "../Common/Loading/Loading";
import { compose } from "redux";
import { getFetching, getFollowingInProgress, getPage, getPageSize, getTotalUsersCount, getUsers } from "../../redux/users-selectors";

const UsersContainer = React.memo((props) => {
    useEffect(() => {
        props.requestUsers(props.currentPage, props.pageSize);
    }, [props.currentPage]);
    // componentDidMount() {
    //     this.props.requestUsers(this.props.currentPage, this.props.pageSize); 
        // this.props.toggleIsFetching(true);
        // // Коли ми зробили функ. if ми очистили компоненту і вона стала чистою 
        // UserAPI.requestUsers(this.props.currentPage, this.props.pageSize).then(response => {
        //     if (response.items) {
        //         this.props.toggleIsFetching(false);
        //         this.props.setUsers(response.items);
        //         this.props.setTotalUsersCount(response.totalCount);
        //     }
        // });   
    // }

    const onPageChange = (pageNumber) => {
        props.requestUsers(pageNumber, props.pageSize);
        // this.props.toggleIsFetching(true);
        // this.props.setCurrentPage(pageNumber);
        // UserAPI.requestUsers(pageNumber, this.props.pageSize).then(response => {
        //     if (response.items) {
        //         this.props.toggleIsFetching(false);
        //         this.props.setUsers(response.items)
        //     }
        // });  
    };

    return (
        <>
            {props.isFetching ? <Loading /> : null}
            <Users
                totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                onPageChange={onPageChange}
                users={props.users}
                follow={props.follow}
                unfollow={props.unfollow}
                toggleFollowingProgress={props.toggleFollowingProgress}
                followingInProgress={props.followingInProgress}
                isAuth={props.isAuth}
            />
        </>
    );
});

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
    console.log('render mapStateToProps');
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getPage(state),
        isFetching: getFetching(state),
        followingInProgress: getFollowingInProgress(state),
        isAuth: state.auth.isAuth
    };
};

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
    connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers })
)(UsersContainer);