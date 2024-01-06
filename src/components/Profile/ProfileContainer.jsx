import React from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Profile } from "./Profile";
import { getUserProfile, getStatus, updateStatus } from "../../redux/reducers/profile-reducer";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let profileId = this.props.router.params.profileId;
    if(!profileId) {
      profileId = 21493;
      if (!profileId) {
        this.props.history.push('/login');
      }
    }
    // let profileId = this.props.router.params.userId;
    // if(!profileId) {
    //   profileId = this.props.authorizedProfileId;
    // }
    this.props.getUserProfile(profileId);
    this.props.getStatus(profileId);
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
    )
  }
}




// wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)
// ТУТ замість класової комп. зробили функ. з хуками, тому що react-router-dom удалила withRouter в нових версіях
function withRouter(Component) {
  function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
          <Component
              {...props}
              router={{ location, navigate, params }}
          />
      );
  }

  return ComponentWithRouterProp;
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedProfileId: state.auth.profileId,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
  withRouter,
  withAuthRedirect
)(ProfileContainer);