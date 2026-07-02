import { useState, useEffect } from 'react';
import Card from './Card';
import '../styles/PlayingField.css';

const API_ENDPOINT = 'https://rickandmortyapi.com/api/character';
const NUM_CARDS = 12;

export default function PlayingField({ checkScoringLogic }) {
  const [cardData, setCardData] = useState([]);

  // Initialise the 12 cardData objects.
  useEffect(() => {
    const chosenIds = new Set();
    const cardDataPlaceholder = [];
    const promises = [];
    const controller = new AbortController();

    async function getMaxNumOfIds() {
      try {
        let res = await fetch(`${API_ENDPOINT}`, {
          signal: controller.signal,
        });
        res = await res.json();
        const maxNumOfIds = res.info.count;
        // For num cards of times, getRandomNumber in that maxNum range.
        // Add to the set if its not inside, else do it again
        for (let i = 0; i < NUM_CARDS; i++) {
          let randId = getRandomNumber(maxNumOfIds);
          while (chosenIds.has(randId)) {
            randId = getRandomNumber(maxNumOfIds);
          }
          chosenIds.add(randId);
        }
      } catch (err) {
        console.log(err);
      }
    }

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

    // Wrapper async function so I can await multiple async functions...
    async function loadCards() {
      await getMaxNumOfIds();
      // Make fetch call for each random ID
      chosenIds.forEach((id) => {
        const promise = getCardData(id);
        promises.push(promise);
      });

      // Only set state when all fetch results resolve.
      await Promise.all(promises);

      setCardData(shuffleArray([...cardDataPlaceholder]));
    }

    loadCards();

    // Clean up function using master switch to abort all fetch requests at once.
    return () => {
      if (controller) {
        controller.abort();
        console.log('All fetch requests aborted');
      }
    };
  }, []);

  // Send as prop to Card to attach to onClick.
  function reshuffleCards() {
    setCardData(shuffleArray([...cardData]));
  }

  return (
    <div className='playing-field'>
      {cardData.map((c) => (
        <Card
          key={c.id}
          cardId={c.id}
          src={c.image}
          name={c.name}
          reshuffleCards={reshuffleCards}
          checkScoringLogic={checkScoringLogic}
        />
      ))}
    </div>
  );
}

function getRandomNumber(maxNum) {
  return Math.floor(Math.random() * maxNum);
}

function shuffleArray(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element - destructuring
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
