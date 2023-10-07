import './Header.css';
import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import logo from '../../images/logo.svg';
import burgerOpen from '../../images/burger-open.svg';
import { NAVIGATION_DESKTOP, ROUTE_HOME } from "../../constants";

function Header() {
  const location = useLocation();
  const [isOpen, setOpen] = useState(false);
  const isAuth = true;
  let isDark = true;

  if (location.pathname === ROUTE_HOME) {
    isDark = false;
  }

  const handleOpen = () => {
    setOpen(true);
  }
  const handleClosed = () => {
    setOpen(false);
  }

  return (
    <header className={`Header${isDark ? ' Header--dark' : ''}`}>
      <Navigation isOpen={isOpen} onClosed={handleClosed} />
        <div className="Header__container">
          <div className="Header__wrap">
            <div className="Header__left">
              <Link to="/" className="Header__left-logo">
                <img src={logo} alt="логотип"/>
              </Link>
              {isAuth && (
                <nav className="Header__Navigation">
                  <ul className="Header__Navigation-list">
                    {NAVIGATION_DESKTOP.map(item => (
                      <li key={item.id}>
                        <NavLink  className="Header__Navigation-link" to={item.to}>{item.text}</NavLink >
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
            </div>
            {isAuth && (
              <Link to="/profile" className="Header__right">
                <div className="Header__right-profile">
                  <span>Аккаунт</span>
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="26" height="26" rx="13" fill={isDark ? "#313131" : "#0F4157"}/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M14.4301 14.9678C15.7919 14.4057 16.7503 13.0648 16.7503 11.5C16.7503 9.42893 15.0714 7.75 13.0003 7.75C10.9293 7.75 9.25035 9.42893 9.25035 11.5C9.25035 13.0647 10.2087 14.4056 11.5705 14.9677C10.1758 15.1999 8.89287 15.7659 7.80859 16.5806L9.19015 18.4194C10.2514 17.6221 11.569 17.15 13.0001 17.15C14.4312 17.15 15.7488 17.6221 16.8101 18.4194L18.1916 16.5806C17.1074 15.766 15.8246 15.2 14.4301 14.9678Z"
                          fill="white"/>
                  </svg>
                </div>
              </Link>
            )}
            {!isAuth && (
              <div className="Header__right-auth">
                <Link to="/signup" className="Header__right-register">Регистрация</Link>
                <Link to="/signin" className="Header__right-login">Войти</Link>
              </div>
            )}
            {isAuth && (
              <button type="button" className="Header__right-open" onClick={handleOpen}>
                <img src={burgerOpen} alt="открыть меню"/>
              </button>
            )}
          </div>
        </div>
    </header>
  )
}

export default Header
