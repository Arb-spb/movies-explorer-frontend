import './MoviesApiError.css';

function MoviesApiError({ errText }) {
  return (
    <div className="MoviesApiError">
      <p className="MoviesApiError__text">{errText}</p>
    </div>
  )
}

export default MoviesApiError;
