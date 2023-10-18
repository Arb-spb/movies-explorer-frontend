import './Register.css';
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { ROUTE_LOGIN } from "../../constants";
import Input from '../Input/Input';
import { useRegister } from '../../hooks/useRegister';

function Register() {
  const [state, func] = useRegister();
  const isDisabled = !state.name || !!state.errName || !state.email || !!state.errEmail || !state.password || !!state.errPassword

  return (
    <main className="Register">
      <section className="Register__container">
        <Link className="Register__logo" to="/">
          <img src={logo} alt="логотип" />
        </Link>
        <h1 className="Register__title">Добро пожаловать!</h1>
        <form className="Register__from" onSubmit={func.onSubmit}>
          <div className="Register__group">
            <Input
              htmlFor="name"
              type="text"
              name="name"
              label="Имя"
              vaue={state.name}
              errText={state.errName}
              onChange={func.onName}
            />
          </div>
          <div className="Register__group">
            <Input
              htmlFor="email"
              type="email"
              name="email"
              label="E-mail"
              value={state.email}
              errText={state.errEmail}
              onChange={func.onEmail}
            />
          </div>
          <div className="Register__group">
            <Input
              htmlFor="password"
              type="password"
              name="password"
              label="Пароль"
              value={state.password}
              errText={state.errPassword}
              onChange={func.onPassword}
            />
          </div>
          {state.errApi && <p className="Register__error">{state.errApi}</p>}
          <button
            type="submit"
            className="Register__submit"
            disabled={isDisabled}
          >
            <span>Зарегистрироваться</span>
          </button>
        </form>
        <p className="Register__text">Уже зарегистрированы? <Link to={ROUTE_LOGIN} className="Register__register">Войти</Link></p>
      </section>
    </main>
  )
}

export default Register;
