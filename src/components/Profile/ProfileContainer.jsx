import React from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Profile } from "./Profile";
import { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile } from "../../redux/reducers/profile-reducer";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";
import { useEffect } from "react";

const ProfileContainer = (props) => {

  useEffect( () => {
    let profileId = props.router.params.profileId;
    if(!profileId) {
      profileId = 21493;
      if (!profileId) {
        props.history.push('/login');
      }
    }

    props.getUserProfile(profileId);
    props.getStatus(profileId);
  }, [props.router.params.profileId]);

  return <Profile {...props} profile={props.profile}
    status={props.status} updateStatus={props.updateStatus} savePhoto={props.savePhoto} isOwner={props.isOwner} saveProfile={props.saveProfile} />
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
              router={{ location, navigate, params}}
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
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
  withRouter,
  withAuthRedirect
)(ProfileContainer);