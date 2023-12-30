// import React from "react";
// import { compose } from "redux";
// import { connect } from "react-redux";
// import { isLogIn } from "../../redux/reducers/auth-reducer";
// import Login from "./login";


// class LoginContainer extends React.Component {

//     componentDidMount() {
//         this.props.isLogIn(this.props.email, this.props.password, this.props.rememberMe);
//     }
    
//     render() {
//         return <Login />
//     }
// }

// const mapStateToProps = (state) => ({
//     email: state.auth.email,
//     password: state.auth.password,
//     rememberMe: state.auth.rememberMe
// })

// export default compose(
//     connect(mapStateToProps, {isLogIn})
// )(LoginContainer);