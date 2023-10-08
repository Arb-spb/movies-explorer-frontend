import './Input.css';

function Input(props) {
  const {
    htmlFor,
    type,
    name,
    label,
    placeholder = ''
  } = props;

  return (
    <div className="Input">
      <lable htmlFor={htmlFor} className="Input__label">{label}</lable>
      <input
        id={htmlFor}
        type={type}
        name={name}
        className="Input__control"
        placeholder={placeholder}
      />
    </div>
  )
}

export default Input;
