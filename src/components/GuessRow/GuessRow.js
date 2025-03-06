import React from 'react';
import { GUESS_LENGTH } from '../../constants';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function GuessRow({ value, answer }) {
  const letterStatus = checkGuess(value, answer);
  return (
    <p className="guess">
      {range(GUESS_LENGTH).map((index) => {
        return (
          <span
            key={index}
            className={
              letterStatus != null
                ? `cell ${letterStatus[index].status}`
                : 'cell'
            }>
            {letterStatus ? letterStatus[index].letter : undefined}
          </span>
        );
      })}
    </p>
  );
}

export default GuessRow;
