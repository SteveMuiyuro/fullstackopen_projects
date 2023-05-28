import React from "react";

const Button = ({ handleChange, text }) => {
  return <button onClick={handleChange}>{text}</button>;
};

export default Button;
