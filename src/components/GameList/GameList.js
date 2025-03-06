import React from 'react';
import { LIST_LENGTH } from '../../constants';
import { range } from '../../utils';
import GuessRow from '../GuessRow/GuessRow';

function GameList({ list, answer }) {
  return (
    <div className="guess-results">
      {range(LIST_LENGTH).map((index) => {
        // const letterStatus = checkGuess(item, answer);
        // const winner = checkWin(letterStatus);
        // if (winner === true) setGameResult(true);
        return <GuessRow key={index} value={list[index]} answer={answer} />;
      })}
    </div>
  );
}

export default GameList;
