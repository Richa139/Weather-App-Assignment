import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import CitySelect from './CitySelect';
import WeatherDisplay from './WeatherDisplay';
import Forecast from './Forecast';
import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [city, setCity] = useState('New York'); // Default city
  const [unit, setUnit] = useState('metric'); // metric for Celsius
  const startY = useRef(0);
  
  const fetchWeatherData = async (city) => {
    const apiKey = 'd2a67dcf670c442225c5149c041b5ce7';
    try {
      const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`);
      const forecastResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${apiKey}`);
      
      setWeatherData(weatherResponse.data);
      setForecastData(forecastResponse.data);
    } catch (error) {
      console.error("Error fetching data", error);
      alert("Could not fetch data. Please check the city name.");
    }
  };

  const handleSearch = () => {
    fetchWeatherData(city);
  };

  useEffect(() => {
    fetchWeatherData(city); // Fetch data for the default city on mount
  }, [city, unit]);

  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === 'metric' ? 'imperial' : 'metric'));
  };

  const handleTouchStart = (e) => {
    startY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    const currentY = e.touches[0].clientY;
    if (currentY > startY.current + 100) {
      fetchWeatherData(city); // Pull to refresh
      startY.current = currentY; // Reset starting Y position
    }
  };

  return (
    <div 
      className="app" 
      onTouchStart={handleTouchStart} 
      onTouchMove={handleTouchMove}
    >
      <h1>Weather App</h1>
      <CitySelect city={city} setCity={setCity} handleSearch={handleSearch} />
      <label className="toggle-switch">
        <input type="checkbox" onChange={toggleUnit} checked={unit === 'imperial'} />
        <span className="slider"></span>
      </label>
      <span>{unit === 'metric' ? '°C' : '°F'}</span>
      {weatherData && <WeatherDisplay data={weatherData} unit={unit} />}
      {forecastData && <Forecast data={forecastData} unit={unit} />}
    </div>
  );
};

export default App;
