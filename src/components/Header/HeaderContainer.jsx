import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Header } from "./Header";
import { setUserData, toggleIsFetching } from "../../redux/reducers/auth-reducer";
import Loading from "../Common/Loading/Loading";

class HeaderContainer extends React.Component {
    componentDidMount() {
      this.props.toggleIsFetching(true);
      // debugger
      axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true 
      })
        .then(response => {
          if (response.data.resultCode === 0) {
            this.props.toggleIsFetching(false);
            let { id, email, login } = response.data.data;
            this.props.setUserData(id, email, login);
          }
        })
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
  isFetching: state.auth.isFetching
});

export default connect(mapStateToProps, {setUserData, toggleIsFetching})(HeaderContainer);