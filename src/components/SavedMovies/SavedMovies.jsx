import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from '../Movies/Preloader/Preloader';
import NotFoundCard from '../NotFoundCard/NotFoundCard';
import { STATUS_API_ERROR, STATUS_LOADING } from '../../constants';
import { useSaveMovies } from '../../hooks/useSaveMovies';
import MoviesApiError from "../Movies/MoviesApiError/MoviesApiError";

function SavedMovies() {
  const [state, func] = useSaveMovies();

  return (
    <main className="SavedMovies">
      <div className="SavedMovies__container">
        <section className="SavedMovies__search">
          <SearchForm
            value={state.value}
            errorSearchText={state.errorSearchText}
            isShorts={state.isShorts}
            onChange={func.onChange}
            onSubmit={func.onSubmit}
            onShorts={func.onShorts}
          />
        </section>
        <section className="SavedMovies__list">
          {state.status === STATUS_LOADING && <Preloader/>}
          {!state.data.length && state.status !== STATUS_LOADING && <NotFoundCard />}
          {state.status === STATUS_API_ERROR && <MoviesApiError errText={state.errorApiText} />}
          {!!state.data.length && (
            <MoviesCardList
              cards={state.data}
              onDelete={func.onDelete}
            />
          )}
        </section>
      </div>
    </main>
  )
}

export default SavedMovies;
