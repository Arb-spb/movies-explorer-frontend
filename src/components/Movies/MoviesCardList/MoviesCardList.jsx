import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
  const { cards, isMore, onMore, onLike } = props;

  return (
    <div className="MoviesCardList">
      <ul className="MoviesCardList__list">
        {cards.map((card) => (
          <li key={card.id}>
            <MoviesCard {...card} onLike={onLike} />
          </li>
        ))}
      </ul>
      {isMore && (
        <button
          type="button"
          className="MoviesCardList__more"
          onClick={onMore}
        >
          Еще
        </button>
      )}
    </div>
  )
}

export default MoviesCardList;
