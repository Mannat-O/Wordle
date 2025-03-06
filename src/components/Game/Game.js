import React from 'react';

import { sample, range } from '../../utils';
import { WORDS } from '../../data';
import { LIST_LENGTH, GUESS_LENGTH } from '../../constants';
import GameList from '../GameList';
import GuessInput from '../GuessInput';
import Banner from '../Banner/Banner';

// Pick a random word on every pageload.
export const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.log({ answer });

function Game() {
  const [visibleList, setVisibleList] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('running');

  function handleGuesses(guess) {
    const newArr = [...visibleList, guess];
    setVisibleList(newArr);
    if (guess === answer) {
      setGameStatus('win');
    } else if (newArr.length === LIST_LENGTH) {
      setGameStatus('lost');
    }
  }

  return (
    <>
      <GameList list={visibleList} answer={answer} />

      <GuessInput handleGuesses={handleGuesses} gameStatus={gameStatus} />

      {gameStatus !== 'running' ? (
        <Banner
          gameStatus={gameStatus}
          answer={answer}
          numOfGuesses={visibleList.length}
        />
      ) : (
        ''
      )}
    </>
  );
}

export default Game;
