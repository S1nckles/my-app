import { connect } from "react-redux";
import { Friends } from "./Friends";

let mapStateToProps = (state) => {
    return {
        friendsData: state.sidebar.friendsData
    }
}
let mapDispatchToProps = (dispatch) => {
    return {}
}

export let FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);