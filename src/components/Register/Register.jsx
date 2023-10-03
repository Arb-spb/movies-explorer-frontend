import './Register.css';
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { ROUTE_LOGIN } from "../../constants";
import Input from '../Input/Input';

function Register() {
  return (
    <main className="Register">
      <section className="Register__container">
        <div className="Register__logo">
          <img src={logo} alt="логотип" />
        </div>
        <h3 className="Register__title">Добро пожаловать!</h3>
        <form className="Register__from">
          <div className="Register__group">
            <Input
              htmlFor="name"
              type="text"
              name="name"
              label="Имя"
            />
          </div>
          <div className="Register__group">
            <Input
              htmlFor="email"
              type="email"
              name="email"
              label="E-mail"
            />
          </div>
          <div className="Register__group">
            <Input
              htmlFor="password"
              type="password"
              name="password"
              label="Пароль"
            />
          </div>
          <button type="submit" className="Register__submit">
            <span>Зарегистрироваться</span>
          </button>
        </form>
        <p className="Register__text">Уже зарегистрированы? <Link to={ROUTE_LOGIN} className="Register__register">Войти</Link></p>
      </section>
    </main>
  )
}

export default Register;
