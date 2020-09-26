import React from 'react'

export const Login = () => {
    return (
        <form>
            <label htmlFor="email">Адрес электронной почты</label>
            <input id="email" type="email" name="email" size="28"/>
            <label htmlFor="password">Пароль</label>
            <input id="password" type="password" name="password" size="28"/>
        </form>
    )
}