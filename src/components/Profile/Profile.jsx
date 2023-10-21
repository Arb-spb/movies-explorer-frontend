import './Profile.css';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useProfile } from "../../hooks/useProfile";
import Input from '../Input/Input';

function Profile() {
  const auth = useContext(AuthContext);
  const [state, func, ref] = useProfile();
  const isDisabled = !!state.errName || !!state.errEmail || (state.name === auth.user.name && state.email === auth.user.email);

  return (
    <main className="Profile">
      <section className="Profile__container">
        <h1 className="Profile__title">Привет, {auth.user.name}!</h1>
        {!state.isEdit && (
          <>
            <div className="Profile__name" onClick={func.onEdit}>
              <span className="Profile__text Profile__text-key">Имя</span>
              <span className="Profile__text">{auth.user.name}</span>
            </div>
            <div className="Profile__email" onClick={func.onEdit}>
              <span className="Profile__text Profile__text-key">E-mail</span>
              <span className="Profile__text">{auth.user.email}</span>
            </div>
          </>
        )}
        {state.isEdit && (
          <form className="Profile__form" ref={ref}>
            <div className="Profile__group">
              <Input
                htmlFor="name"
                type="text"
                name="name"
                label="Имя"
                value={state.name}
                errText={state.errName}
                onChange={func.onName}
              />
            </div>
            <div className="Profile__group">
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
          </form>
        )}
        {!!state.successApi && <p className="Profile__success">{state.successApi}</p>}
        {!!state.errApi && <p className="Profile__error">{state.errApi}</p>}
        <div className="Profile__actions">
          <button
            className="Profile__edit"
            type="button"
            disabled={isDisabled}
            onClick={func.onSubmit}
          >
            Редактировать
          </button>
          <button className="Profile__logout" onClick={func.onLogout}>Выйти из&nbsp;аккаунта</button>
        </div>
      </section>
    </main>
  )
}

export default Profile;
