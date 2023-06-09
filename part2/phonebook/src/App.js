import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import AddPerson from "./components/AddPerson";
import RenderPhone from "./components/RenderPhone";
import axios from "axios";
import promiseFunctions from "./service/notes";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const [addMessage, setAddMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const filteredNames = persons.filter((person) =>
    person.name.includes(search)
  );

  useEffect(() => {
    promiseFunctions.getAll().then((allData) => setPersons(allData));
  }, []);

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

  function removePerson(id) {
    const targetPerson = persons.find((person) => person.id === id);
    alert(`Delete ${targetPerson.name}`);
    promiseFunctions
      .remove(id, targetPerson)
      .then(() =>
        setPersons((prev) => prev.filter((person) => person.id !== id))
      );
  }

  const personsInfo = filteredNames.map((person) => (
    <div key={person.id}>
      <p key={person.id}>
        {person.name} {person.number}
        <button
          key={person.id}
          id={person.id}
          onClick={() => removePerson(person.id)}
        >
          Delete
        </button>
      </p>
    </div>
  ));

  function updateNumber(id) {
    const targetNumber = persons.find((person) => person.id === id);
    const updatedPerson = { ...targetNumber, number: newNumber };
    promiseFunctions
      .update(id, updatedPerson)
      .then((newData) =>
        setPersons((prev) =>
          prev.map((person) => (person.id !== id ? person : newData))
        )
      )
      .catch((err) => {
        setErrorMessage(
          `the person ${updatedPerson.name} was already deleted from the server`
        );
        setTimeout(() => {
          setErrorMessage("");
        }, 5000);
      });
    setNewName("");
    setNewNumber("");
  }

  function addNumber(e) {
    e.preventDefault();
    const newPerson = { name: newName, number: newNumber };
    const nameExists = persons.some((person) => person.name === newName);
    if (!nameExists) {
      promiseFunctions
        .create(newPerson)
        .then((newInfo) => setPersons((prev) => [...prev, newInfo]));
      setTimeout(() => {
        setAddMessage(`${newPerson.name} has been added in phonebook`);
      }, 5000);
      setTimeout(() => {
        setAddMessage("");
      }, 10000);
      setNewName("");
      setNewNumber("");
    } else {
      alert(
        `${newName} already added to phonebook, replace the old number with new one?`
      );

      const existingPerson = persons.find((person) => person.name === newName);

      updateNumber(existingPerson.id);
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={addMessage} error={errorMessage} />

      <div>
        <Filter search={search} handleChangeSearch={handleChangeSearch} />
      </div>

      <h2>Add New Number</h2>
      <AddPerson
        // addPerson={addPerson}
        newName={newName}
        handleChangeName={handleChangeName}
        handleChangeNumber={handleChangeNumber}
        newNumber={newNumber}
        addNumber={addNumber}
      />

      <h2>Numbers</h2>
      <RenderPhone personsInfo={personsInfo} />
    </div>
  );
};

export default App;
