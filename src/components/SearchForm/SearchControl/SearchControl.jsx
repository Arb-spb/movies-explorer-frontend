import './SearchControl.css';
import searchIcon from "../../../images/search.svg";

function SearchControl() {
  return (
    <div className="SearchControl">
      <div className="SearchControl__wrapper">
        <img src={searchIcon} alt="поиск" className="SearchControl__img" />
        <input
          type="text"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          aria-autocomplete="list"
          className="SearchControl__input"
          placeholder="Фильм"
        />
        <button type="submit" className="SearchControl__submit">Найти</button>
      </div>
    </div>
  )
}

export default SearchControl;
