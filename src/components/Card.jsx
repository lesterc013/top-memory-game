import testImg from '../assets/twm-headshot.jpg';
import '../styles/Card.css';

export default function Card({
  cardId,
  src,
  name,
  reshuffleCards,
  checkScoringLogic,
}) {
  return (
    <div
      id={cardId}
      className='card'
      onClick={(e) => {
        reshuffleCards();
        checkScoringLogic(e);
      }}
    >
      <img src={src} alt={`Image of ${name}`} />
      <div className='card-name'>{name}</div>
    </div>
  );
}
