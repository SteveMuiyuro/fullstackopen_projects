import react from "react";

export default function Personal({ name, email, contacts, linkedin }) {
  return (
    <div className="container">
      <div className="personal">
        <h2 className="sub-header">Personal Info</h2>
        <div className="info">
          <h3>Name: </h3> {name}
          <h3>Email: </h3> {email}
          <h3>Contacts: </h3>
          {contacts}
          <h3>Linkedin: </h3> {linkedin}
        </div>
        <hr />
      </div>
    </div>
  );
}
