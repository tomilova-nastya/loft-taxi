import React from 'react'

export const Register = (props) => {
    return (
        <div className="loginPage-container" style={{ background: "#323232 url('login_background.png')" }}>
            <div className="loginPage-logo-container">
                <div className="loginPage-logo" style={{ background: "url('login_logo.png')" }}></div>
            </div>
            <div className="loginPage-form-container">
                <form className="loginPage-form">
                    <h1>Регистрация</h1>
                    <p>Уже зарегистрированы? <span className="simpleLink" onClick={() => {
                        props.navigateTo("login");
                    }}>Войти</span></p>
                    <label htmlFor="email">Адрес электронной почты</label><br />
                    <input id="email" type="email" name="email" size="28" /><br />
                    <label htmlFor="Name">Имя</label><br />
                    <input id="Name" type="text" name="name" size="28" /><br />
                    <label htmlFor="Surname">Фамилия</label><br />
                    <input id="Surname" type="text" name="surname" size="28" /><br />
                    <label htmlFor="password">Пароль</label><br />
                    <input id="password" type="password" name="password" size="28" /><br /><br />
                    <input id="registerButton" type="submit" name="registerButton" value="Зарегистрироваться" size="28" onClick={() => {
                        props.navigateTo("map");
                    }} />
                </form>
            </div>
        </div>
    )
}