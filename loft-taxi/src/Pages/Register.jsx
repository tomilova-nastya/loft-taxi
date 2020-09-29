import React from 'react';
import { Logo, MCIcon } from 'loft-taxi-mui-theme';

export const Register = (props) => {
    return (
        <div className="loginPage-container" style={{ background: "#323232 url('login_background.png')" }}>
            <div className="logo-container">
                <Logo white />
            </div>
            <div className="loginPage-form-container">
                <form className="loginPage-form">
                    <h1>Регистрация</h1>

                    <p>Уже зарегистрированы? <span className="simpleLink" onClick={() => {
                        props.navigateTo("login");
                    }
                    }>Войти</span></p>

                    <label htmlFor="email">Адрес электронной почты*</label><br />
                    <input className="input-text" id="email" type="email" name="email" size="28" /><br />

                    <label className="short-input" htmlFor="Name">Имя*</label><label className="short-input" htmlFor="Surname">Фамилия*</label><br />
                    <input className="input-text short-input" id="Name" type="text" name="name" size="28"/>                   
                    <input className="input-text short-input" id="Surname" type="text" name="surname" size="28" /><br />

                    <label htmlFor="password">Пароль*</label><br />
                    <input className="input-text" id="password" type="password" name="password" size="28" /><br /><br />
                    <input className="input-button" id="registerButton" type="submit" name="registerButton" value="Зарегистрироваться" size="28" onClick={() => {
                        props.navigateTo("map");
                    }} />
                </form>
            </div>
        </div>
    )
}