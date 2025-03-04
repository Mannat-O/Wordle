import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState('');
  const [guessList, setGuessList] = React.useState([]);

  return (
    <>
      <form
        class="guess-input-wrapper"
        onSubmit={(event) => {
          event.preventDefault();

          if (guess.length !== 5) {
            alert('Guess should be a 5 letter word');
            return;
          }
          const newList = [...guessList];
          newList.push(guess);
          setGuessList(newList);
          console.log(newList);
          setGuess('');
        }}>
        <label for="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          value={guess}
          onChange={(event) => {
            setGuess(event.target.value.toUpperCase());
          }}
        />
      </form>
      <div class="guess-results">
        {guessList.map((item) => {
          return <p class="guess">{item}</p>;
        })}
      </div>
    </>
  );
}

export default Game;
