import React, { useState } from "react";
import Statistics from "./components/Statistics";
import Button from "./components/Button";
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;

  const handleClickGood = () => {
    setGood((prev) => prev + 1);
  };

  const handleClickNeutral = () => {
    setNeutral((prev) => prev + 1);
  };

  const handleClickBad = () => {
    setBad((prev) => prev + 1);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleChange={handleClickGood} text="Good" />
      <Button handleChange={handleClickNeutral} text="Neutral" />
      <Button handleChange={handleClickBad} text="Bad" />
      <h1>Statistics</h1>
      <table>
        <tbody>
          <Statistics value={good} text="Good" />
          <Statistics value={neutral} text="Neutral" />
          <Statistics value={bad} text="Bad" />
          <tr>
            <td>Total</td>
            <td>{total}</td>
          </tr>
          <tr>
            <td>Average</td>
            <td>{total / 3}</td>
          </tr>
          <tr>
            <td>Positive</td>
            <td>{good && total !== 0 ? (good / total) * 100 : 0}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;
