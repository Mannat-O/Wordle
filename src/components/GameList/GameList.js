import React from 'react';
import { GUESS_LENGTH } from '../../constants';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function GameList({ list, answer }) {
  return (
    <div className="guess-results">
      {list.map((item) => {
        const letterStatus = checkGuess(item, answer);
        return (
          <p key={crypto.randomUUID()} className="guess">
            {range(GUESS_LENGTH).map((num) => {
              return (
                <span
                  key={crypto.randomUUID()}
                  className={
                    letterStatus !== null
                      ? `cell ${letterStatus[num].status}`
                      : 'cell'
                  }>
                  {item.length !== 0 ? letterStatus[num].letter : ''}
                </span>
              );
            })}
          </p>
        );
      })}
    </div>
  );
}

export default GameList;
