import { FollowAC, SetCurrentPageAC, SetTotalUsersCountAC, SetUsersAC, UnFollowAC } from "../../redux/reducers/users-reducer";
import { connect } from "react-redux";
import Users from "./Users";

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
export default connect(mapStateToProps, mapDispatchToProps)(Users);