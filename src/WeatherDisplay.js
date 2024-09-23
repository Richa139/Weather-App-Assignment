import React from 'react';
import './WeatherDisplay.css';

const WeatherDisplay = ({ data, unit }) => {
  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; // URL for the weather icon

  const convertTemperature = (temp) => {
    return unit === 'metric' ? temp : (temp * 9/5) + 32; // Celsius to Fahrenheit
  };

  return (
    <div className="weather-display">
      <h2>{data.name}, {data.sys.country}</h2>
      <img src={iconUrl} alt={data.weather[0].description} className="weather-icon" />
      <p className="temperature">Temperature: {convertTemperature(data.main.temp).toFixed(1)}°</p>
      <p>Weather: {data.weather[0].description}</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind Speed: {data.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherDisplay;
