import React from 'react';
import { connect } from 'react-redux';
import { Navigate, Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { login } from '../../redux/auth-reducer.ts';
import s from './LoginForm.module.css';

const renderField = ({ input, meta: { touched, error }, ...props }) => (
    <div className={s.formControl}>
        <input {...input} {...props} className={touched && error ? s.error : ''} />
        {touched && error && <span>{error}</span>}
    </div>
);

const LoginForm = ({ handleSubmit, error }) => (
    <div className={s.loginBlock}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <Field name="email" placeholder="Email" component={renderField} type="text" />
            </div>
            <div>
                <Field name="password" placeholder="Password" component={renderField} type="password" />
            </div>
            <div>
                <Field name="rememberMe" component="input" type="checkbox" /> remember me
            </div>
            {error && <div className={s.formSummaryError}>{error}</div>}
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
        <div className={s.registerLink}>
            <Link to="/register">Register</Link>
        </div>
    </div>
);

const LoginReduxForm = reduxForm({
    form: 'login',
    validate: values => {
        const errors = {};
        if (!values.email) {
            errors.email = 'Field is required';
        }
        if (!values.password) {
            errors.password = 'Field is required';
        }
        return errors;
    }
})(LoginForm);

const Login = ({ login, isAuth }) => {
    const handleSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe);
    };

    if (isAuth) {
        return <Navigate to="/profile" />; // Редирект на страницу профиля после успешного логина
    }

    return <LoginReduxForm onSubmit={handleSubmit} />;
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { login })(Login);
