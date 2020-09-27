import React from 'react';

export const Login = (props) => {
    return (
        <div className="loginPage-container" style={{ background: "#323232 url('login_background.png')" }}>
            <div className="loginPage-logo-container">
                <div className="loginPage-logo" style={{ background: "url('login_logo.png')" }}></div>
            </div>
            <div className="loginPage-form-container">
                <form className="loginPage-form">
                    <h1>Войти</h1>

                    <p>Новый пользователь? <span className="simpleLink" onClick={() => {
                        props.navigateTo("register");
                    }
                    }>Зарегистрируйтесь</span></p>

                    <label htmlFor="email">Имя пользователя</label><br />
                    <input id="email" type="email" name="email" size="28" /><br />
                    <label htmlFor="password">Пароль</label><br />
                    <input id="password" type="password" name="password" size="28" /><br /><br />
                    <input id="loginButton" type="submit" name="loginButton" value="Войти" size="28" onClick={() => {
                        props.navigateTo("map");
                    }} />
                </form>
            </div>
        </div>
    )
}