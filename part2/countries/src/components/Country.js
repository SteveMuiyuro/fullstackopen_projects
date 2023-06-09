import React, { useEffect } from "react";

export default function Country(props) {
  const { country, weather, setWeather } = props;
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const request = fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&units=metric&appid=${apiKey}`
    );
    request
      .then((response) => response.json())
      .then((data) => setWeather(data));
  }, []);

  function getIcon(icn) {
    return `https://openweathermap.org/img/wn/${icn}@2x.png`;
  }

  const { temp } = weather.main;
  const { icon } = weather.weather[0];
  const { speed } = weather.wind;
  const IconImageurl = getIcon(icon);

  return (
    <>
      <p>
        Country: <b>{country.name.common}</b>
      </p>
      <p>
        Capital: <b>{country.capital}</b>
      </p>
      <p>
        Area: <b>{country.area}</b>
      </p>

      <img src={country.flags.png} />

      <h2>Weather in {country.capital}</h2>
      <p>Temparture: {temp} Celcius</p>
      <img src={IconImageurl} />
      <p>Wind: {speed} m/s</p>
    </>
  );
}
