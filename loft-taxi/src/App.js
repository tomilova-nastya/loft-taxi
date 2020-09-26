import React from 'react';
import { Login } from './Pages/Login';
import { Register } from './Pages/Register';
import { Map } from './Pages/Map';
import { Profile } from './Pages/Profile';

const PAGES = {
  login: <Login />,
  register: <Register />,
  map: <Map />,
  profile: <Profile />
}

class App extends React.Component {

  state = { currentPage: "login" };

  navigateTo = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    return <>
      <header>
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
          {PAGES[this.state.currentPage]}
        </section>
      </main>
    </>
  }
};

export default App;