import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) => {
    const { handleSubmit } = props;

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <Field name={"login"} placeholder={"Login"}  component={"input"} />
                </div>
                <div>
                    <Field name={"password"} placeholder={"Password"} component={"input"} type={"password"} />
                </div>
                <div>
                    <Field name={"rememberMe"} component={"input"} type={"checkbox"} /> remember me
                </div>
                <div>
                    <button type={"submit"}>Login</button>
                </div>
            </form>
        </div>
    );
};
const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {
    const handleSubmit = (formData) => {
        console.log(formData);
    };

    return <LoginReduxForm onSubmit={handleSubmit} />;
};

export default Login;
