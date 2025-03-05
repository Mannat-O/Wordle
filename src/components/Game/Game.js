import React from 'react';

import { sample, range } from '../../utils';
import { WORDS } from '../../data';
import { LIST_LENGTH, GUESS_LENGTH } from '../../constants';
import GameList from '../GameList';

// Pick a random word on every pageload.
export const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function generateList(list) {
  if (list.length >= LIST_LENGTH) return list;
  const newArr = [...list, ...Array(LIST_LENGTH - list.length).fill('')];

  return newArr;
}

function Game() {
  const [guess, setGuess] = React.useState('');
  const [guessList, setGuessList] = React.useState(generateList([]));
  const [visibleList, setVisibleList] = React.useState([]);
  return (
    <>
      <GameList list={guessList} answer={answer} />
      <form
        className="guess-input-wrapper"
        onSubmit={(event) => {
          event.preventDefault();

          if (guess.length !== GUESS_LENGTH) {
            alert('Guess should be a LIST_LENGTH letter word');
            return;
          }
          const newArr = [...visibleList];
          newArr.push(guess);
          setVisibleList(newArr);
          const newList = generateList(newArr);

          setGuessList(newList);
          console.log(newList);
          setGuess('');
        }}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          value={guess}
          onChange={(event) => {
            setGuess(event.target.value.toUpperCase());
          }}
        />
      </form>
    </>
  );
}

export default Game;
