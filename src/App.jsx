import "./App.scss";
import React, { useState } from "react";
import Card from "./Card/Card";

function App() {
  const numArray = [1, 2, 3, 4, 5, 6, 7];
  const [numOfNotes, setNumOfNotes] = useState(1);
  const [letters, setLetters] = useState([]);

  const generateLetters = () => {
    const lettersArray = [];

    for (let i = 0; i < numOfNotes; i++) {
      const randNum = Math.floor(Math.random() * numArray.length);
      const letterToPush = String.fromCharCode(65 + randNum);
      if (lettersArray.includes(letterToPush)) {
        i--;
        continue;
      }
      lettersArray.push(letterToPush);
    }

    setLetters(lettersArray);
  };

  return (
    <div className="app">
      <div className="app__background"></div>
      <div className="app__select-and-btn">
        <select
          className="app__select"
          name="letters"
          id="letters"
          onChange={(e) => setNumOfNotes(e.target.value)}
          value={numOfNotes}
        >
          {numArray.map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <button className="app__btn" onClick={() => generateLetters()}>
          generate notes
        </button>
      </div>
      <div className="cards">
        {letters.map((letter, i) => (
          <div key={letter}>
            <Card>{letter}</Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;