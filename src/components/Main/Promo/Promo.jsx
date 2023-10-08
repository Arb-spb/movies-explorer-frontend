import './Promo.css';
import promo from '../../../images/promo.png';

function Promo() {
  return (
    <section className="Promo">
      <div className="Promo__container">
        <h1 className="Promo__text">Учебный проект студента факультета Веб&#8209;разработки.</h1>
        <div className="Promo__media">
          <img src={promo} alt="promo" className="Promo__media-img" />
        </div>
      </div>
    </section>
  )
}

export default Promo;
