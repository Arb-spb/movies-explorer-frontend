import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
  const { cards,onDelete } = props;

  return (
    <div className="SavedMoviesCardList">
      <ul className="SavedMoviesCardList__list">
        {cards.map((card) => (
          <li key={card._id}>
            <MoviesCard {...card} onDelete={onDelete} />
          </li>
        ))}
      </ul>
      <button type="button" className="SavedMoviesCardList__more">Еще</button>
    </div>
  )
}

export default MoviesCardList;
