import './App.css';
import PlayingField from './components/PlayingField';

function App() {
  return (
    <div className='app-container'>
      <div className='header'>
        <div className='title'>Title</div>
        <div className='score-container'>
          <div className='best-score'>Best Score</div>
          <div className='current-score'>Current Score</div>
        </div>
      </div>

      <PlayingField />
    </div>
  );
}

export default App;
