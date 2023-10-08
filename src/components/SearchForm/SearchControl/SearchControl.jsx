import './SearchControl.css';
import searchIcon from "../../../images/search.svg";

function SearchControl() {
  return (
    <div className="SearchControl">
      <form className="SearchControl__wrapper">
        <img src={searchIcon} alt="поиск" className="SearchControl__img" />
        <input
          type="text"
          autoComplete="off"
          autoCapitalize="off"
          spellCheck="false"
          aria-autocomplete="list"
          className="SearchControl__input"
          placeholder="Фильм"
        />
        <button type="button" className="SearchControl__submit">Найти</button>
      </form>
    </div>
  )
}

export default SearchControl;
