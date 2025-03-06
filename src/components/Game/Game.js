import React from 'react';

import { sample, range } from '../../utils';
import { WORDS } from '../../data';
import { LIST_LENGTH, GUESS_LENGTH } from '../../constants';
import GameList from '../GameList';
import GuessInput from '../GuessInput';

// Pick a random word on every pageload.
export const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.log({ answer });

function Game() {
  const [visibleList, setVisibleList] = React.useState([]);
  const [gameResult, setGameResult] = React.useState(false);

  function handleGuesses(guess) {
    const newArr = [...visibleList, guess];
    setVisibleList(newArr);
  }
  return (
    <>
      <GameList list={visibleList} answer={answer} />
      <GuessInput handleGuesses={handleGuesses} />
    </>
  );
}

export default Game;
