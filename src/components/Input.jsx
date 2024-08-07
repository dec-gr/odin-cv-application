import '../styles/Input.css';

export default function Input({
  label,
  type = 'text',
  controlled = false,
  onChange,
  value = '',
}) {
  return (
    <label className="Input">
      {label}
      {/* <input type={type} role="textbox"></input> */}
      {controlled ? (
        <input type={type} onChange={onChange} value={value}></input>
      ) : (
        <input type={type}></input>
      )}
    </label>
  );
}
