import './SearchForm.css';
import searchIcon from '../../../images/search.svg';

function SearchForm() {
  return (
    <div className="SearchForm">
      <div className="SearchForm__wrapper">
        <img src={searchIcon} alt="поиск" className="SearchForm__img" />
        <input
          type="text"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          aria-autocomplete="list"
          className="SearchForm__input"
          placeholder="Фильм"
        />
        <button type="submit" className="SearchForm__submit">Найти</button>
      </div>
    </div>
  )
}

export default SearchForm;
