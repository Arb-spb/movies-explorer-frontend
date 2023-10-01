import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className="FilterCheckbox">
      <input type="checkbox" className="FilterCheckbox__input" id="FilterCheckbox"/>
      <label htmlFor="FilterCheckbox" className="FilterCheckbox__label">Короткометражки</label>
    </div>
  )
}

export default FilterCheckbox;
