import '../styles/InputSection.css';
import { useState } from 'react';

export default function InputSection({ children, sectionHeader }) {
  const [showDetails, setShowDetails] = useState(true);

  function handleShowDetailsClick() {
    setShowDetails(!showDetails);
  }
  return (
    <div className="inputSection">
      <div className="inputHeader">
        <h2>{sectionHeader}</h2>
        <button onClick={handleShowDetailsClick}>
          {!showDetails && 'Show Details'}
          {showDetails && 'Hide Details'}
        </button>
      </div>

      {showDetails && children}
    </div>
  );
}
