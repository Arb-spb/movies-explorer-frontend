import './Footer.css';
import { useLocation } from 'react-router-dom';
import { ROUTE_PROFILE } from '../../constants';

function Footer() {
  const location = useLocation();

  if (location.pathname === ROUTE_PROFILE) {
    return null;
  }

  return (
    <footer className="Footer">
      <div className="Footer__container">
        <h5 className="Footer__title">Учебный проект Яндекс.Практикум х&nbsp;BeatFilm.</h5>
        <div className="Footer__wrap">
          <span className="Footer__praktikum">Яндекс.Практикум</span>
          <a href="https://github.com/arba-octo" className="Footer__github" target="_blank" rel="noreferrer nofollow noopener">Github</a>
          <span className="Footer__als">©2020</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
