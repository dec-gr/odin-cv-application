import '../styles/Card.css';

export default function Card({ children }) {
  return (
    <div className="card">
      <div className="cardContent">{children}</div>
    </div>
  );
}
