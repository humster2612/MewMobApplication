import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { register } from '../../redux/auth-reducer.ts';
import s from './Register.module.css';
import { Navigate } from 'react-router-dom';

const renderField = ({ input, meta: { touched, error }, ...props }) => (
    <div className={s.formControl}>
        <input {...input} {...props} className={touched && error ? s.error : ''} />
        {touched && error && <span>{error}</span>}
    </div>
);

const RegisterForm = ({ handleSubmit, error }) => (
    <div className={s.registerBlock}>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <Field name="username" placeholder="Username" component={renderField} type="text" />
            </div>
            <div>
                <Field name="email" placeholder="Email" component={renderField} type="email" />
            </div>
            <div>
                <Field name="password" placeholder="Password" component={renderField} type="password" />
            </div>
            {error && <div className={s.error}>{error}</div>}
            <div>
                <button type="submit">Register</button>
            </div>
        </form>
    </div>
);

const RegisterReduxForm = reduxForm({
    form: 'register',
    validate: values => {
        const errors = {};
        if (!values.username) {
            errors.username = 'Username is required';
        }
        if (!values.email) {
            errors.email = 'Email is required';
        }
        if (!values.password) {
            errors.password = 'Password is required';
        }
        return errors;
    }
})(RegisterForm);

const Register = ({ register, error }) => {
    const [isRegistered, setIsRegistered] = useState(false);

    const handleSubmit = async (formData) => {
        try {
            await register(formData.username, formData.email, formData.password);
            setIsRegistered(true);
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };

    if (isRegistered) {
        return <Navigate to="/login" />;
    }

    return <RegisterReduxForm onSubmit={handleSubmit} error={error} />;
};

const mapStateToProps = (state) => ({
    error: state.auth.error
});

export default connect(mapStateToProps, { register })(Register);
