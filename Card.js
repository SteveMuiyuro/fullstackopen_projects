import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.imageUrl} className="card-image" />
      <div className="card-info">
        <div className="spans">
          <img src="./images/location.png" className="image-location" />
          <span className="location"> {props.location}</span>
          <a href={props.googleMapsUrl} target="_blank">
            View on Google Maps
          </a>
        </div>
        <h1 className="title">{props.title}</h1>
        <p className="period">
          {props.startDate} - {props.endDate}
        </p>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
}
