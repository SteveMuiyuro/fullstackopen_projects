import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import AddPerson from "./components/AddPerson";
import RenderPhone from "./components/RenderPhone";
import axios from "axios";
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  const filteredNames = persons.filter((person) =>
    person.name.includes(search)
  );

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then((response) => setPersons(response.data));
  }, []);

  function addPerson(e) {
    e.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
      id: newName,
    };
    const nameExists = persons.some((person) => person.name === newName);
    if (!nameExists) {
      setPersons((prev) => [...prev, newPerson]);
      setNewName("");
      setNewNumber("");
    } else {
      alert(`${newName} already in phonebook`);
      setNewName("");
      setNewNumber("");
    }
  }

  function handleChangeName(e) {
    const { value } = e.target;
    setNewName(value);
  }

  function handleChangeNumber(e) {
    const { value } = e.target;
    setNewNumber(value);
  }

  function handleChangeSearch(e) {
    const { value } = e.target;
    setSearch(value);
  }
  const personsInfo = filteredNames.map((person) => (
    <p key={person.id}>
      {person.name} {person.number}
    </p>
  ));

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <Filter search={search} handleChangeSearch={handleChangeSearch} />
      </div>

      <h2>Add New Number</h2>
      <AddPerson
        addPerson={addPerson}
        newName={newName}
        handleChangeName={handleChangeName}
        handleChangeNumber={handleChangeNumber}
        newNumber={newNumber}
      />

      <h2>Numbers</h2>
      <RenderPhone personsInfo={personsInfo} />
    </div>
  );
};

export default App;
