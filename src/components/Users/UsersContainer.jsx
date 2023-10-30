import { FollowAC, SetUsersAC, UnFollowAC } from "../../redux/reducers/users-reducer";
import { connect } from "react-redux";
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
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
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);