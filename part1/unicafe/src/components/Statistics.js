import React from "react";

const Statistics = ({ value, text }) => {
  return (
    <tr>
      <td>{text}</td>
      <td> {value ? value : "No Feedback Given"}</td>
    </tr>
  );
};

export default Statistics;
