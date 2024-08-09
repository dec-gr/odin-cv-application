import '../styles/Input.css';

export default function InputTextBox({ label, onChange, fieldValue = '' }) {
  return (
    <label className="Input">
      {label}
      <textarea onChange={onChange} value={fieldValue}></textarea>
    </label>
  );
}
