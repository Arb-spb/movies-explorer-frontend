import './MoviesCard.css';
import { getMoviesTime } from '../../../utils/GetMoviesTime';
import { URL_BASE_MOVIES_API } from '../../../constants';

function MoviesCard(props) {
  const {
    image,
    duration,
    favorite,
    nameRU,
    onLike,
    id,
    country,
    director,
    year,
    description,
    trailerLink,
    nameEN,
    deleteId,
  } = props;

  return (
    <div className="MoviesCard">
      <div className="MoviesCard__wrapper">
        <img src={`${URL_BASE_MOVIES_API}${image.url}`} alt={nameRU} className="MoviesCard__img" />
      </div>
      <div className="MoviesCard__content">
        <span className="MoviesCard__text">{nameRU}</span>
        <button className="Movies__icon" type="button" onClick={() => onLike({
          country,
          director,
          duration,
          year,
          description,
          image: `${URL_BASE_MOVIES_API}${image.url}`,
          trailerLink,
          nameRU,
          nameEN,
          thumbnail: `${URL_BASE_MOVIES_API}${image.formats.thumbnail.url}`,
          movieId: id,
          favorite,
          deleteId,
        })}>
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="9" viewBox="0 0 10 9" fill="none">
            <path
            d="M7.27273 0C6.27273 0 5.54545 0.523077 5 1.08974C4.45455 0.566667 3.72727 0 2.72727 0C1.13636 0 0 1.2641 0 2.83333C0 3.61795 0.318182 4.31538 0.909091 4.79487L5 8.5L9.09091 4.79487C9.63636 4.27179 10 3.61795 10 2.83333C10 1.2641 8.86364 0 7.27273 0Z"
            fill={favorite ? "#EE3465" : "#fff"}
          />
          </svg>
        </button>
      </div>
      <span className="MoviesCard__time">{getMoviesTime(duration)}</span>
      <a href={trailerLink} className="MoviesCard__trailerLink" target="_blank" rel="noreferrer noopener nofollow" />
    </div>
  )
}

export default MoviesCard;
