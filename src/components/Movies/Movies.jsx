import './Movies.css';
import Preloader from './Preloader/Preloader';
import {STATUS_API_ERROR, STATUS_LOADING, STATUS_NOT_FOUND_CARD} from '../../constants';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import NotFoundCard from '../NotFoundCard/NotFoundCard';
import MoviesApiError from './MoviesApiError/MoviesApiError';
import { useMovies } from '../../hooks/useMovies';

function Movies() {
  const [state, func] = useMovies();

  return (
    <main className="Movies">
      <div className="Movies__container">
        <section className="Movies__search">
          <SearchForm
            value={state.value}
            isShorts={state.isShorts}
            errorSearchText={state.errorSearchText}
            onChange={func.onChange}
            onSubmit={func.onSubmit}
            onShorts={func.onShorts}
          />
        </section>
        <section className="Movies__list">
          {state.status === STATUS_LOADING && <Preloader/>}
          {state.status === STATUS_NOT_FOUND_CARD && <NotFoundCard/>}
          {state.status === STATUS_API_ERROR && <MoviesApiError errText={state.errorMoviesApiText} />}
          {!!state.data.length && (
            <MoviesCardList
              cards={state.data}
              isMore={state.isMore}
              onMore={func.onMore}
              onLike={func.onLike}
            />
          )}
        </section>
      </div>
    </main>
  )
}

export default Movies;
