import React from "react";
import "../styles/header.css";

export default function Header({ src, alt }) {
  return (
    <div className="container">
      <div className="header-container">
        <img src={src} alt={alt} />
        <h1>Curriculum Vitae</h1>
      </div>
    </div>
  );
}
