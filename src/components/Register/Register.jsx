import './Register.css';
import logo from "../../images/logo.svg";
import {Link} from "react-router-dom";
import {ROUTE_REGISTER} from "../../constants";

function Register() {
  return (
    <section className="Register">
      <div className="Register__container">
        <div className="Register__logo">
          <img src={logo} alt="логотип" />
        </div>
        <h3 className="Register__title">Добро пожаловать!</h3>
        <form className="Register__from">
          <div className="Register__group">
            <lable htmlFor="name" className="Register__label">Имя</lable>
            <input
              id="name"
              type="text"
              name="name"
              className="Register__input"
              placeholder=""
            />
          </div>
          <div className="Register__group">
            <lable htmlFor="email" className="Register__label">E-mail</lable>
            <input
              id="email"
              type="email"
              name="email"
              className="Register__input"
              placeholder=""
            />
          </div>
          <div className="Register__group">
            <lable htmlFor="password" className="Register__label">E-mail</lable>
            <input
              id="password"
              type="password"
              name="password"
              className="Register__input"
              placeholder=""
            />
          </div>
          <button type="submit" className="Register__submit">
            <span>Зарегистрироваться</span>
          </button>
        </form>
        <p className="Register__text">Уже зарегистрированы? <Link to={ROUTE_REGISTER} className="Register__register">Войти</Link></p>
      </div>
    </section>
  )
}

export default Register;
