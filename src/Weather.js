import React, { useState } from 'react';
import './Weather.css';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    );
    const data = await response.json();
    setWeatherData(data);
  };

  return (
    <div className="weather-container">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={fetchWeather}>Get Weather</button>
      {weatherData && (
        <div className="weather-info">
          <h2>{weatherData.name}</h2>
          <p>{weatherData.weather[0].description}</p>
          <p>Temperature: {Math.round(weatherData.main.temp - 273.15)}°C</p>
        </div>
      )}
    </div>
  );
};

export default Weather;

