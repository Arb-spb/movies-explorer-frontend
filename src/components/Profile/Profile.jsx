import './Profile.css';

function Profile() {
  return (
    <section className="Profile">
      <div className="Profile__container">
        <h1 className="Profile__title">Привет, Татьяна!</h1>
        <div className="Profile__name">
          <span className="Profile__text Profile__text-key">Имя</span>
          <span className="Profile__text">Татьяна</span>
        </div>
        <div className="Profile__email">
          <span className="Profile__text Profile__text-key">E-mail</span>
          <span className="Profile__text">pochta@yandex.ru</span>
        </div>
        <div className="Profile__actions">
          <button className="Profile__edit">Редактировать</button>
          <button className="Profile__logout">Выйти из&nbsp;аккаунта</button>
        </div>
      </div>
    </section>
  )
}

export default Profile;
