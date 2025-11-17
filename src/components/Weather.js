import { useContext, useEffect, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import ShowWeatherInfo from "./ShowWeatherInfo";

function Weather() {
  const [cityNameInput, setCityNameInput] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [debounceCityInput, setDebounceCityInput] = useState("");

  const { theme, setTheme } = useContext(ThemeContext);
  const API_KEY = "38c92b5f0482a979c695ce96bca17604";
  const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

  function cityNameInputHandler(event) {
    setCityNameInput(event.target.value);
  }

  function toggleTheme(event) {
    event.target.checked ? setTheme('dark') : setTheme('light');
  }

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceCityInput(cityNameInput);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [cityNameInput])

  useEffect(() => {
    if (!debounceCityInput) {
      setWeatherData(null);
      return;
    }

    if(debounceCityInput.length > 3) {
      async function fetchWeatherData() {
        const res = await fetch(`${BASE_URL}?q=${debounceCityInput}&appid=${API_KEY}&units=metric`);
        const data = await res.json();
        setWeatherData(data);
      }
      fetchWeatherData();
    }
  }, [debounceCityInput])

  return (
    <div className={theme == "light" ? "container-light" : "container-dark" }>
      <label><strong>Enter city name: </strong></label>
      <input
        className="city-name-input"
        type="text"
        value={cityNameInput}
        onChange={cityNameInputHandler}
        placeholder="City Name"
      />
      <ShowWeatherInfo weatherData={weatherData} />
      <label>
        <input
          className="theme-toggle-checkbox"
          type="checkbox"
          checked={theme === 'dark'}
          onChange={toggleTheme}
        />
        Dark Theme
      </label>
    </div>
  );
}

export default Weather;
