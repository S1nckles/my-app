import React from "react";
import { connect } from "react-redux";
import { Header } from "./Header";
import { getUserData, logOut } from "../../redux/reducers/auth-reducer";
import Loading from "../Common/Loading/Loading";

const HeaderContainer = (props) => {
  return <>
    {props.isFetching ? <Loading /> : null }
    <Header {...props} />;
  </>
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  isFetching: state.auth.isFetching,
});

export default connect(mapStateToProps, {getUserData, logOut})(HeaderContainer);