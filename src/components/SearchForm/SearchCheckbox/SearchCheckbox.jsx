import './SearchCheckbox.css';

function SearchCheckbox({ isShorts, onShorts }) {
  return (
    <div className="SearchCheckbox">
      <input
        type="checkbox"
        className="SearchCheckbox__input"
        id="SearchCheckbox"
        checked={isShorts}
        onChange={onShorts}
      />
      <label
        htmlFor="SearchCheckbox"
        className="SearchCheckbox__label"
      >
        Короткометражки
      </label>
    </div>
  )
}

export default SearchCheckbox;
