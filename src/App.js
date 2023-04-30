import React, { useState } from "react";
import Die from "./Die";
import "./App.css";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

export default function App() {
  const [dice, setDice] = useState(allnewDice);
  const [tenzies, setTenzies] = useState(false);

  const holdDice = (id) => {
    setDice((prev) => {
      return prev.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      );
    });
  };

  function rollDice() {
    if (!tenzies) {
      setDice((prev) => {
        return prev.map((die) =>
          die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) }
        );
      });
    } else {
      setTenzies(false);
      setDice(allnewDice);
    }
  }

  function allnewDice() {
    let newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        id: nanoid(),
        isHeld: false,
      });
    }
    return newDice;
  }
  React.useEffect(() => {
    let firstNum = dice[0].value;
    let allHeld = dice.every((die) => die.isHeld === true);
    let allNumbers = dice.every((die) => die.value === firstNum);
    if (allHeld && allNumbers) {
      setTenzies((prev) => !prev);
    }
  }, [dice]);

  return (
    <div className="container">
      {tenzies && <Confetti />}
      <Die
        array={dice}
        holdDice={holdDice}
        rollDice={rollDice}
        tenzies={tenzies}
      />
      ;
    </div>
  );
}
