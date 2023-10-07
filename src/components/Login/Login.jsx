import './Login.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { ROUTE_REGISTER } from '../../constants';
import Input from '../Input/Input';

function Login() {
  return (
    <main className="Login">
      <section className="Login__container">
        <Link className="Login__logo" to="/">
          <img src={logo} alt="логотип" />
        </Link>
        <h1 className="Login__title">Рады видеть!</h1>
        <form className="Login__from">
          <div className="Login__group">
            <Input
              htmlFor="email"
              type="email"
              name="email"
              label="E-mail"
            />
          </div>
          <div className="Login__group">
            <Input
              htmlFor="password"
              type="password"
              name="password"
              label="Пароль"
            />
          </div>
          <button type="submit" className="Login__submit">
            <span>Войти</span>
          </button>
        </form>
        <p className="Login__text">Ещё не&nbsp;зарегистрированы? <Link to={ROUTE_REGISTER} className="Login__register">Регистрация</Link></p>
      </section>
    </main>
  )
}

export default Login;
