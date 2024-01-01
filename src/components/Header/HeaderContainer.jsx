import React from "react";
import { connect } from "react-redux";
import { Header } from "./Header";
import { getUserData, logOut } from "../../redux/reducers/auth-reducer";
import Loading from "../Common/Loading/Loading";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getUserData(this.props.id, this.props.email, this.props.login);
  }

  render() {
    return <>
            {this.props.isFetching ? <Loading /> : null }
            <Header {...this.props} />;
          </>
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  isFetching: state.auth.isFetching,
});

export default connect(mapStateToProps, {getUserData, logOut})(HeaderContainer);