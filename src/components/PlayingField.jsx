import { useState, useEffect } from 'react';
import Card from './Card';

const API_ENDPOINT = 'https://rickandmortyapi.com/api/character';
const NUM_CARDS = 12;

export default function PlayingField() {
  const [cardData, setCardData] = useState([]);

  // Initialise the 12 cardData objects.
  useEffect(() => {
    const cardDataPlaceholder = [];
    const promises = [];
    const controller = new AbortController();

    async function getCardData(charId) {
      try {
        let res = await fetch(`${API_ENDPOINT}/${charId}`, {
          signal: controller.signal,
        });
        res = await res.json();
        cardDataPlaceholder.push(res);
      } catch (err) {
        console.log(err);
      }
    }

    // Run all the fetches
    for (let i = 0; i < NUM_CARDS; i++) {
      const promise = getCardData(i + 1);
      promises.push(promise);
    }

    // Only set state when all fetch results resolve.
    Promise.all(promises).then(() => setCardData(cardDataPlaceholder));

    // Clean up function using master switch to abort all fetch requests at once.
    return () => {
      if (controller) {
        controller.abort();
        console.log('All fetch requests aborted');
      }
    };
  }, []);

  return (
    <div className='playing-field'>
      {cardData.map((c) => (
        <Card key={c.image} src={c.image} name={c.name} />
      ))}
    </div>
  );
}
