import './Movies.css';
import Preloader from './Preloader/Preloader';
import { STATUS_LOADING } from '../../constants';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';

function Movies() {
  const status = STATUS_LOADING + 'not-load';

  if (status === STATUS_LOADING) {
    return (
      <main className="Movies">
        <Preloader/>
      </main>
    )
  }

  return (
    <main className="Movies">
      <div className="Movies__container">
        <section className="Movies__search">
          <SearchForm />
        </section>
        <section className="Movies__list">
          <MoviesCardList />
        </section>
      </div>
    </main>
  )
}

export default Movies;
