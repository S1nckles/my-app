import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { Input } from "../Common/FormsControl/FormsControl";
import {logIn} from "../../redux/reducers/auth-reducer";
import { Navigate } from 'react-router-dom';


let LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        {/* В Field'ax є зразу функція onChange (flux круговорот), тому прописувати ми її не будемо */}
        <div className=""><Field name="email" component={Input} validate={[required]} type={"text"} placeholder="E-mail..." /></div>
        <div className=""><Field name="password" component={Input} validate={[required]} type={"password"} placeholder="Password..."/></div>
        <div className=""><Field name="rememberMe" component={'input'} type={"checkbox"}/>Remember me</div>
        <div className=""><button type="submit">Sign in</button></div>
    </form>
}

const LoginReduxForm = reduxForm({
    // унікальне ім'я для форми
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.logIn(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) { 
        return <Navigate to={'/profile'} />
    }
    return <div>
        <h1 style={{color: 'white'}}>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {logIn})(Login);