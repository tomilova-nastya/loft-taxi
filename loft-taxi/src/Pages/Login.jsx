import React from 'react';
import {Logo, MCIcon} from 'loft-taxi-mui-theme';
import PropTypes from 'prop-types';

export const Login = (props) => {
    return (
        <div className="loginPage-container" style={{ background: "#323232 url('login_background.png')" }}>
            <div className="logo-container">
                <Logo white />
            </div>
            <div className="loginPage-form-container">
                <form className="loginPage-form">
                    <h1>Войти</h1>

                    <p>Новый пользователь? <span className="simpleLink" onClick={() => {
                        props.navigateTo("register");
                    }
                    }>Зарегистрируйтесь</span></p>

                    <label htmlFor="email">Имя пользователя*</label><br />
                    <input className="input-text" id="email" type="email" name="email" size="28" /><br />
                    <label htmlFor="password">Пароль*</label><br />
                    <input className="input-text" id="password" type="password" name="password" size="28" /><br /><br />
                    <input className="input-button" id="loginButton" type="submit" name="loginButton" value="Войти" size="28" onClick={() => {
                        props.navigateTo("map");
                    }} />
                </form>
            </div>
        </div>
    )
};

Login.propTypes = {
    navigateTo: PropTypes.func.isRequired
};