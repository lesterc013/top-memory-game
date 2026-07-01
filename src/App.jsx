import './App.css';
import Card from './components/Card';

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

      <div className='playing-field'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
