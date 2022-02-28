import React from 'react';
import { connect } from 'react-redux';
import Profile from '../Profile/Profile.jsx';
import { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile } from '../../Redux/profile-reducer.js';
import { withRouter } from "react-router-dom";
// import { withAuthRedirect } from '../hoc/withAuthRedirect.js';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevState, prevProps, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }

    }

    render() {
        debugger;
        return (
            <Profile {...this.props} 
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                isOwner={!this.props.match.params.userId}
                savePhoto={this.props.savePhoto} />
        )
    }
}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
// if (!this.props.isAuth === false) return <Navigate to="/login" />;
// return <ProfileContainer {...props} />

// AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent);
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile }),
    withRouter //,
    // withAuthRedirect

)(ProfileContainer);