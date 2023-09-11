import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessForm from "../GuessForm/GuessForm";
import GuessResults from "../GuessResults/GuessResults";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import HappyBanner from "../HappyBanner/HappyBanner";
import SadBanner from "../SadBanner/SadBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const onGuess = (guess) => {
    const copy = [...guesses];
    setGuesses([...copy, checkGuess(guess, answer)]);
  };
  const lastGuess = guesses.slice(-1)[0];
  const isWon = lastGuess && lastGuess.map((e) => e.letter).join("") === answer;
  const isLoose = !isWon && guesses.length === NUM_OF_GUESSES_ALLOWED;

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessForm onGuess={onGuess} disabled={isWon || isLoose} />
      {isWon && <HappyBanner guesses={guesses} />}
      {isLoose && <SadBanner answer={answer} />}
    </>
  );
}

export default Game;
