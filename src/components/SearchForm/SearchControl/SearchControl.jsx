import './SearchControl.css';
import searchIcon from "../../../images/search.svg";

function SearchControl(props) {
  const {
    value,
    onChange,
    onSubmit,
  } = props;

  return (
    <div className="SearchControl">
      <form className="SearchControl__wrapper" onSubmit={onSubmit}>
        <img src={searchIcon} alt="поиск" className="SearchControl__img" />
        <input
          type="text"
          autoComplete="off"
          autoCapitalize="off"
          spellCheck="false"
          aria-autocomplete="list"
          className="SearchControl__input"
          placeholder="Фильм"
          value={value}
          onChange={onChange}
        />
        <button type="submit" className="SearchControl__submit">Найти</button>
      </form>
    </div>
  )
}

export default SearchControl;
