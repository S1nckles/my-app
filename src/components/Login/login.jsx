import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLength, required } from "../../utils/validators/validators";
import { Input } from "../Common/FormsControl/FormsControl";

let LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        {/* В Field'ax є зразу функція onChange (flux круговорот), тому прописувати ми її не будемо */}
        <div className=""><Field name="login" component={Input} validate={[required, maxLength]} type={"text"} placeholder="Login..." /></div>
        <div className=""><Field name="password" component={Input} validate={[required, maxLength]} type={"password"} placeholder="Password..."/></div>
        <div className=""><Field name="rememberMe" component={'input'} validate={[required, maxLength]} type={"checkbox"}/>Remember me</div>
        <div className=""><button type="submit">Sign in</button></div>
    </form>
}

const LoginReduxForm = reduxForm({
    // унікальне ім'я для форми
    form: 'login'
  })(LoginForm)

const Login = (props) => {
    const onSubmit = (loginUserPost) => {
        loginUserPost();
    }

    return <div className="">
        <h1 style={{color: 'white'}}>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login;