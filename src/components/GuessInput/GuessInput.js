import React from 'react';
import { GUESS_LENGTH, LIST_LENGTH } from '../../constants';

function GuessInput({ handleGuesses }) {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (guess.length !== GUESS_LENGTH) {
      alert('Guess should be a LIST_LENGTH letter word');
      return;
    }
    setGuess(guess);
    handleGuesses(guess);
    setGuess('');
  }
  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>

        <input
          required
          minLength={5}
          maxLength={5}
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

export default GuessInput;
