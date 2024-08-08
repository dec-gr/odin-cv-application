import '../styles/Input.css';

export default function Input({
  label,
  type = 'text',
  controlled = false,
  onChange,
  fieldValue = '',
  disabled = false,
}) {
  // const value = type === 'checkBox' ? 'checked' : value;

  return (
    <label className="Input">
      {label}
      {/* <input type={type} role="textbox"></input> */}
      {controlled ? (
        <input
          type={type}
          onChange={onChange}
          value={fieldValue}
          disabled={disabled}
        ></input>
      ) : (
        <input type={type}></input>
      )}
    </label>
  );
}
