export default function Header({ bestScore, currentScore }) {
  return (
    <div className='header'>
      <div className='title'>Rick n Morty's Memory Game WUBBALUBBADUBDUB</div>
      <div className='score-container'>
        <div className='best-score'>Best Score: {bestScore}</div>
        <div className='current-score'>Current Score: {currentScore}</div>
      </div>
    </div>
  );
}
