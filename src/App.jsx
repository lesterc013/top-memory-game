import { useState } from 'react';
import './App.css';
import PlayingField from './components/PlayingField';
import Header from './components/Header';

function App() {
  const [idsClicked, setIdsClicked] = useState(new Set());
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  function checkScoringLogic(e) {
    console.log(e);
    const clickedId = e.currentTarget.id;
    if (idsClicked.has(clickedId)) {
      setBestScore(currentScore);
      setCurrentScore(0);
      setIdsClicked(new Set());
    } else {
      setCurrentScore((curr) => (curr += 1));
      setIdsClicked(new Set([...idsClicked, clickedId]));
    }
  }

  return (
    <div className='app-container'>
      <Header bestScore={bestScore} currentScore={currentScore} />

      <div className='playing-field-wrapper'>
        <PlayingField checkScoringLogic={checkScoringLogic} />
      </div>
    </div>
  );
}

export default App;
