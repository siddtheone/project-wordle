import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((_, i) => (
        <p className="guess" key={i}>
          {range(5).map((_, j) => (
            <span
              className={`cell ${guesses[i] && guesses[i][j].status}`}
              key={j}
            >
              {guesses[i] && guesses[i][j].letter}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
