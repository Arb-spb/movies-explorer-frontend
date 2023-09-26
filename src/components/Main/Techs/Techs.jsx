import './Techs.css';
import { TECHNOLOGIES } from "../../../constants";

function Techs() {
  return (
    <section className="Techs">
      <div className="Techs__container">
        <h3 className="Techs__title">Технологии</h3>
        <h2 className="Techs__main">7&nbsp;технологий</h2>
        <p className="Techs__description">На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые применили в&nbsp;дипломном проекте.</p>
        <div className="Techs__wrap">
          <ul className="Techs__list">
            {TECHNOLOGIES.map(item => (
              <li key={item.id} className="Techs__item">{item.text}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Techs;
