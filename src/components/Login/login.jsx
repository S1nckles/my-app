import React from "react";
import { Field, reduxForm } from "redux-form";

let LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        {/* В Field'ax є зразу функція onChange (flux круговорот), тому прописувати ми її не будемо */}
        <div className=""><Field name="login" component={"input"} type={"text"} placeholder="Login..." /></div>
        <div className=""><Field name="password" component={"input"} type={"password"} placeholder="Password..."/></div>
        <div className=""><Field name="rememberMe" component={"input"} type={"checkbox"}/>Remember me</div>
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