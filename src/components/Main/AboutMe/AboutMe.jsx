import './AboutMe.css';
import foto from '../../../images/foto.jpg';

function AboutMe() {
  return (
    <section className="AboutMe">
      <div className="AboutMe__container">
        <h3 className="AboutMe__title">Студент</h3>
        <div className="AboutMe__content">
          <div className="AboutMe__wrap">
            <h5 className="AboutMe__name">Татьяна</h5>
            <p className="AboutMe__description">Фронтенд-разработчик, 30&nbsp;лет</p>
            <p className="AboutMe__description">
              Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет экономики СГУ. У&nbsp;меня есть жена и&nbsp;дочь. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить.
              С&nbsp;2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;. После того, как прошёл курс по&nbsp;веб-разработке, начал заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.
            </p>
            <a href="https://github.com/Arb-spb" target="_blank" rel="noreferrer nofollow noopener" className="AboutMe__github">Github</a>
          </div>
          <div className="AboutMe__media">
            <img src={foto} alt="фотография" className="AboutMe__img" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;
