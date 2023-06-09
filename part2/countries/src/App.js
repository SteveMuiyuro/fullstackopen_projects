import React, { useState, useEffect } from "react";
import axios from "axios";
import { getAll } from "./service/apis";
import Country from "./components/Country";

function App() {
  const [allCountries, setAllCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [value, setValue] = useState("");
  const [displayCountry, setDisplayCountry] = useState([]);
  const [weather, setWeather] = useState({});

  useEffect(() => {
    getAll("https://studies.cs.helsinki.fi/restcountries/api/all").then(
      (allData) => setAllCountries(allData)
    );
  }, [value, displayCountry]);

  function handleDisplay(id) {
    const country = filteredCountries.filter(
      (country) => id === country.capital
    );
    setDisplayCountry(country);
  }
  const countryElements = displayCountry.map((country) => (
    <Country country={country} />
  ));

  console.log(displayCountry);

  const filteredCountries = allCountries.filter((country) =>
    country.name.common.includes(value)
  );

  let countries = [];
  let display = "";
  if (filteredCountries.length <= 10) {
    const style = {
      display: "flex",
      justifyContent: "spaceBetween",
      alignItems: "center",
    };
    countries = filteredCountries.map((country) => (
      <div style={style}>
        <p>{country.name.common} </p>
        <button
          style={{ cursor: "pointer" }}
          onClick={() => handleDisplay(country.capital)}
        >
          show
        </button>
      </div>
    ));
  } else {
    display = <p>**To many matches add more filters**</p>;
  }

  function submitResult() {
    setSearchCountry(filteredCountries[0]);
  }

  function handleChange(e) {
    const { value } = e.target;
    setValue(value);
    submitResult();
  }

  return (
    <>
      <form onSubmit={submitResult}>
        <label>Search</label>
        <input value={value} onChange={handleChange} />
      </form>
      {display}
      {filteredCountries.length > 1 && countries}
      {filteredCountries.length === 1 && (
        <Country
          country={searchCountry}
          weather={weather}
          setWeather={setWeather}
        />
      )}
      {filteredCountries.length > 1 &&
        displayCountry.length === 1 &&
        countryElements}
    </>
  );
}

export default App;
