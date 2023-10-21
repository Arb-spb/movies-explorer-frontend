import './Input.css';

function Input(props) {
  const {
    htmlFor,
    type,
    name,
    label,
    placeholder = '',
    value,
    onChange,
    errText,
  } = props;

  return (
    <div className="Input">
      <label htmlFor={htmlFor} className="Input__label">{label}</label>
      <input
        id={htmlFor}
        type={type}
        name={name}
        className="Input__control"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {errText && <span className="Input__error">{errText}</span>}
    </div>
  )
}

export default Input;
