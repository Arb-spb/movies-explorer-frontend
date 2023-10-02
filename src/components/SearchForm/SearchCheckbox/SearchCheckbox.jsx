import './SearchCheckbox.css';

function SearchCheckbox() {
  return (
    <div className="SearchCheckbox">
      <input type="checkbox" className="SearchCheckbox__input" id="SearchCheckbox"/>
      <label htmlFor="SearchCheckbox" className="SearchCheckbox__label">Короткометражки</label>
    </div>
  )
}

export default SearchCheckbox;
