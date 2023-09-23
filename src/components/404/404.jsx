import './404.css';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="NotFound">
      <div className="NotFound__container">
        <div className="NotFound__content">
          <h1 className="NotFound__content-title">404</h1>
          <p className="NotFound__content-desc">Страница не найдена</p>
        </div>
        <div className="NotFound__footer">
          <button type="button" className="NotFound__back" onClick={() => navigate(-1)}>назад</button>
        </div>
      </div>
    </main>
  )
}

export default NotFound;
