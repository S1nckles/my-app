import React from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Profile } from "./Profile";
import { getUserProfile } from "../../redux/reducers/profile-reducer";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  
  componentDidMount() {
    let profileId = this.props.router.params.profileId;
    if(!profileId) {
      profileId = 21493
    }
    this.props.getUserProfile(profileId);
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
}




// wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)
// ТУТ замість класової комп. зробили функ. з хуками, тому що в класовій не імпорт. withRouter
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
});

export default compose(
  connect(mapStateToProps, {getUserProfile}),
  withRouter,
  withAuthRedirect
)(ProfileContainer);