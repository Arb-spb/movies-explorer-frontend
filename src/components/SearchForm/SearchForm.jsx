import './SearchForm.css';
import SearchControl from './SearchControl/SearchControl';
import SearchCheckbox from './SearchCheckbox/SearchCheckbox';

function SearchForm() {
  return (
    <div className="SearchForm">
      <SearchControl />
      <SearchCheckbox />
    </div>
  )
}

export default SearchForm;
