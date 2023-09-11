import React from "react";

function GuessForm({ onGuess, disabled }) {
  const [input, setInput] = React.useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    onGuess(input);
    setInput("");
  };
  return (
    <form className="guess-input-wrapper" onSubmit={onSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value.toUpperCase())}
        required
        maxLength="5"
        pattern="\w{5}"
        disabled={disabled}
      />
    </form>
  );
}

export default GuessForm;
