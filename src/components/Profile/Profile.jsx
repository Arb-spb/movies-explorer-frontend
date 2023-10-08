import { Link } from 'react-router-dom'
import './Profile.css';

function Profile() {
  return (
    <main className="Profile">
      <section className="Profile__container">
        <h1 className="Profile__title">Привет, Виталий!</h1>
        <div className="Profile__name">
          <span className="Profile__text Profile__text-key">Имя</span>
          <span className="Profile__text">Виталий</span>
        </div>
        <div className="Profile__email">
          <span className="Profile__text Profile__text-key">E-mail</span>
          <span className="Profile__text">pochta@yandex.ru</span>
        </div>
        <div className="Profile__actions">
          <button className="Profile__edit" type="button">Редактировать</button>
          <Link className="Profile__logout" to="/">Выйти из&nbsp;аккаунта</Link>
        </div>
      </section>
    </main>
  )
}

export default Profile;
