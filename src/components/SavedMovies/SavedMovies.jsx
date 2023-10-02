import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';

function SavedMovies() {
  return (
    <div className="SavedMovies">
      <div className="SavedMovies__container">
        <section className="SavedMovies__search">
          <SearchForm />
        </section>
        <section className="SavedMovies__list">
          <MoviesCardList />
        </section>
      </div>
    </div>
  )
}

export default SavedMovies;
