import testImg from '../assets/twm-headshot.jpg';
import '../styles/Card.css';

export default function Card({ src, name, reshuffleCards }) {
  return (
    <div className='card' onClick={reshuffleCards}>
      <img src={src} alt={`Image of ${name}`} />
      <div className='card-name'>{name}</div>
    </div>
  );
}
