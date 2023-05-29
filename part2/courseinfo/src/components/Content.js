import React from "react";
import Part from "./Part";

const Content = ({ parts }) => {
  const partelements = parts.map((part) => (
    <Part key={part.id} part={part.name} exercises={part.exercises} />
  ));

  return <>{partelements}</>;
};

export default Content;
