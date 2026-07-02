import '../styles/Header.css';

export default function Header({ bestScore, currentScore }) {
  return (
    <div className='header'>
      <div className='title'>Rick n Morty Memory Game WUBBALUBBADUBDUB</div>
      <div className='score-container'>
        <div className='best-score'>Best: {bestScore}</div>
        <div className='current-score'>Current: {currentScore}</div>
      </div>
    </div>
  );
}
