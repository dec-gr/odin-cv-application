import '../styles/Input.css';

export default function InputTextBox({ label, onChange, value = '' }) {
  return (
    <label className="Input">
      {label}
      <textarea onChange={onChange} value={value}></textarea>
    </label>
  );
}
