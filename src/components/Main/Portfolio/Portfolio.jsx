import './Portfolio.css';
import {PORTFOLIO} from "../../../constants";

function Portfolio() {
  return (
    <section className="Portfolio">
      <div className="Portfolio__container">
        <h5 className="Portfolio__title">Портфолио</h5>
        {PORTFOLIO.map(item => (
          <a key={item.id} href={item.to} target="_blank" rel="noreferrer nofollow noopener" className="Portfolio__wrap">
            <span className="Portfolio__text">{item.text}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none" className="Portfolio__icon">
              <path d="M1.56392 10.7145L0.566762 9.71733L7.98153 2.28977H2.25426L2.26705 0.909091H10.3594V9.0142H8.96591L8.97869 3.28693L1.56392 10.7145Z" fill="white"/>
            </svg>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Portfolio;
