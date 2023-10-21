import './SearchForm.css';
import SearchControl from './SearchControl/SearchControl';
import SearchCheckbox from './SearchCheckbox/SearchCheckbox';

function SearchForm(props) {
  const {
    value,
    errorSearchText,
    isShorts,
    onChange,
    onSubmit,
    onShorts,
  } = props;

  return (
    <div className="SearchForm">
      <SearchControl
        value={value}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      <SearchCheckbox onShorts={onShorts} isShorts={isShorts} />
      {errorSearchText && <p className="SearchForm__error">{errorSearchText}</p>}
    </div>
  )
}

export default SearchForm;
