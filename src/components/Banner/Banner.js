import React from 'react';

function Banner({ gameStatus, numOfGuesses, answer }) {
  console.log(gameStatus);
  if (gameStatus === 'win') {
    return (
      <div className="happy banner">
        <p>
          Congratulations! You guessed it in{' '}
          {numOfGuesses === 1 ? '1 guess' : `${numOfGuesses} guesses`}
        </p>
      </div>
    );
  } else if (gameStatus === 'lost') {
    return (
      <div className="sad banner">
        <p>
          The correct answer is <strong>{answer}</strong>
        </p>
      </div>
    );
  }
}

export default Banner;
