import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
// import { Navigate } from "react-router-dom";
import s from "../common/FormsControls/FormsControls.module.css";

const LoginForm = (props) => {
    debugger;
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={Input} validate={[required]} />
            </div>
            <div>
                <Field type={"password"} name={"password"} placeholder={"Password"} component={Input} validate={[required]} />
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input} /> remember me
            </div>
            { props.error && <div className={s.formSummaryError}>
                {props.error}
            </div> 
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    // if (props.isAuth) {
    //     return <Navigate to={"/profile"} />
    // }

    return <div>
        <h1>LOGIN</h1>
        <ReduxLoginForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);