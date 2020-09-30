import React from 'react';
import { Login } from './Pages/Login';
import { Register } from './Pages/Register';
import { Map } from './Pages/Map';
import { Profile } from './Pages/Profile';
import PropTypes from 'prop-types';

class App extends React.Component {

  state = { currentPage: "login" };

  navigateTo = (page) => {
    this.setState({ currentPage: page });
    console.log("navigateTo: " + page);
  };

  PAGES = {
      login: <Login navigateTo={this.navigateTo} />,
      register: <Register navigateTo={this.navigateTo} />,
      map: <Map />,
      profile: <Profile />
  }

  render() {
    return <>
      <header className="header" style={{display:"none"}}>
        <nav>
          <ul>
            <li>
              <button
                onClick={() => {
                  this.navigateTo("login");
                }}>
                Войти
                </button>
            </li>
            <li>
              <button
                onClick={() => {
                  this.navigateTo("register");
                }}>
                Зарегистрироваться
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  this.navigateTo("map");
                }}>
                Карта
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  this.navigateTo("profile");
                }}>
                Профиль
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          {this.PAGES[this.state.currentPage]}
        </section>
      </main>
    </>
  }
};

export default App;