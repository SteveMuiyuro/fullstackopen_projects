import React from "react";
import Dice from "./Dice";
export default function Die(props) {
  const elements = props.array.map((num) => (
    <Dice
      key={num.id}
      id={num.id}
      value={num.value}
      isHeld={num.isHeld}
      holdDice={props.holdDice}
    />
  ));

  return (
    <div className="die-content">
      <div className="title-content">
        <h1>Tenzies</h1>
        <p>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
      </div>
      <div className="dice-container">{elements}</div>
      <button onClick={props.rollDice}>
        {props.tenzies ? "New Game" : "Roll"}
      </button>
    </div>
  );
}
