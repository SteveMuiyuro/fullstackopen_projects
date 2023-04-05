import React from "react";

export default function InfoInput() {
  return (
    <form>
      <p className="info-header">Edit your Personal Information:</p>
      <div className="personal-input">
        <div className="label">
          <lable htmlFor="name">Name:</lable>
          <input type="text" placeholder="Enter Name" id="name" />
        </div>

        <div className="label">
          <lable htmlFor="email">Email:</lable>
          <input type="email" placeholder="Enter Email" id="email" />
        </div>

        <div className="label">
          <lable htmlFor="number">Contacts:</lable>
          <input type="number" placeholder="Enter Phone Number" id="number" />
        </div>

        <div className="label">
          <lable htmlFor="linkedin">Linkedin:</lable>
          <input
            type="text"
            placeholder="Enter Linkedin Profile"
            id="linkedin"
          />
        </div>
        <button className="personal-btn">Submit</button>
      </div>
    </form>
  );
}
