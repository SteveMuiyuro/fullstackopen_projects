let weather = {
  apiKey: "2f25358c904d23048565b4e242d24641",

  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data))
      .catch((er) => {
        console.log(er);
      });
  },

  displayWeather: function (data) {
    const { name } = data;
    const { description, icon } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = `Weather in ${name} `;
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".wind").innerText = speed + "km/h";
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".humidity").innerText =
      "Humidity:" + humidity + "%";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },

  search: function () {
    const searchValue = document.querySelector(".search-bar").value;
    this.fetchWeather(searchValue);
  },
};

document.querySelector("button").addEventListener("click", () => {
  weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    weather.search();
  }
});

weather.fetchWeather("Nairobi");
