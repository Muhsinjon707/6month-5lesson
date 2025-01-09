import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import axios from "axios";

function OpenWeather() {
  const API_KEY = "c35626cc8e04c8b0e90ac333e0f3d23e";
  const url = "https://api.openweathermap.org";

  const [weatherdata, setWeatherData] = useState([]);
  const [city, setCity] = useState("");

  async function fetchWeather(city) {
    try {
      const response = await axios.get(url, {
        params: {
          q: city,
          appid: API_KEY,
          units: "metric",
        },
      });
      console.log(response.data);
      setWeatherData(response.data);
    } catch (error) {
      console.log(error);
    }

    useEffect(() => {
      fetchWeather();
    }, []);
  }

  return (
    <div>
      <form className={styles.form}>
        <label htmlFor="chooseCity" className={styles.cityLabel}>
          Choose a city:{" "}
        </label>
        <input
          type="text"
          className={styles.cityInput}
          name="chooseCity"
          id="chooseCity"
          placeholder="Enter a city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button
          type="button"
          className={styles.searchBtn}
          onClick={fetchWeather}
        >
          SEARCH
        </button>
      </form>

      <div className={styles.wrapper}>
        {console.log(weatherdata)}
        {/* {weatherdata && (
          <div>
            <h2>Weather in {weatherdata.name}</h2>
            <p>Temperature: {weatherdata.main}°C</p>
            <p>Condition: {weatherdata.weather}</p>
            <p>Humidity: {weatherdata.}%</p>
            <p>Wind Speed: {weatherdata.wind.speed} m/s</p>
          </div>
        )} */}
      </div>
    </div>
  );
}

export default OpenWeather;
