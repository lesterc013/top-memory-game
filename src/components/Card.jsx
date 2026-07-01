import testImg from '../assets/twm-headshot.jpg';
import '../styles/Card.css';

export default function Card() {
  return (
    <div className='card'>
      <img src={testImg} alt='card image' />
      <div className='card-name'>Tan Wei Min</div>
    </div>
  );
}
