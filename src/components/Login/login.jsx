import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { createField, Input } from "../Common/FormsControl/FormsControl";
import {logIn} from "../../redux/reducers/auth-reducer";
import { Navigate } from 'react-router-dom';
import s from '../Common/FormsControl/FormsControl.module.css';

// Коли ми в душках замість пропс використовуємо фігурні душки то ми таякби беремо з пропсів значення і можемо його викор-ти без пропсів
let LoginForm = ({handleSubmit, error}) => {
    return <form onSubmit={handleSubmit}>
        {/* В Field'ax є зразу функція onChange (flux круговорот), тому прописувати ми її не будемо */}
        {createField("email", Input, [required], "text", "E-mail")}
        {createField("password", Input, [required], "password", "Password...")}
        {createField("rememberMe", 'input', null, "checkbox", null, 'Remember me')}
        {error && <div className={s.formSummaryError}>{error}</div>}
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