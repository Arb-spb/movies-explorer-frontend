import './MoviesCardList.css';
import { FAKE_SAVE_CARDS_LIST } from '../../../constants';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  return (
    <div className="SavedMoviesCardList">
      <ul className="SavedMoviesCardList__list">
        {FAKE_SAVE_CARDS_LIST.map((card) => (
          <li key={card.id}>
            <MoviesCard {...card} />
          </li>
        ))}
      </ul>
      <button type="button" className="SavedMoviesCardList__more">Еще</button>
    </div>
  )
}

export default MoviesCardList;
