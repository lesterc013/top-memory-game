import testImg from '../assets/twm-headshot.jpg';

export default function Card() {
  // div card
  // img
  // name
  return (
    <div className='card'>
      <img src={testImg} alt='card image' />
      <span>Tan Wei Min</span>
    </div>
  );
}
