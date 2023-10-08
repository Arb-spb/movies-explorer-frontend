import './MoviesCardList.css';
import { FAKE_CARDS_LIST } from '../../../constants';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  return (
    <div className="MoviesCardList">
      <ul className="MoviesCardList__list">
        {FAKE_CARDS_LIST.map((card) => (
          <li key={card.id}>
            <MoviesCard {...card} />
          </li>
        ))}
      </ul>
      <button type="button" className="MoviesCardList__more">Еще</button>
    </div>
  )
}

export default MoviesCardList;
