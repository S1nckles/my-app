import { React } from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from "react-redux";

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
});

export const withAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        // замість <Redirect /> використовуємо <Navigate />
        if(!props.isAuth) return <Navigate to={"/login"} />
        return <Component {...props} />
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent;
}
// export const withAuthRedirectTrue = (Component) => {
//     const RedirectComponent = (props) => {
//         // замість <Redirect /> використовуємо <Navigate />
//         if(props.isAuth) return <Navigate to={"/profile"} />
//         return <Component {...props} />
//     }

//     let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
//     return ConnectedAuthRedirectComponent;
// }