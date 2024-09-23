import React from 'react';
import './Forecast.css';

const Forecast = ({ data, unit }) => {
  const getDayOfWeek = (dateString) => {
    const options = { weekday: 'long' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getDate = (dateString) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const convertTemperature = (temp) => {
    return unit === 'metric' ? temp : (temp * 9/5) + 32; // Celsius to Fahrenheit
  };

  return (
    <div className="forecast">
      <h3>5-Day Forecast</h3>
      <div className="forecast-items">
        {data.list.filter((_, index) => index % 8 === 0).map((forecast, index) => (
          <div key={index} className="forecast-item">
            <p className="day">{getDayOfWeek(forecast.dt_txt)}</p>
            <p className="date">{getDate(forecast.dt_txt)}</p>
            <p className="temperature">
              High: {convertTemperature(forecast.main.temp_max).toFixed(1)}°
            </p>
            <p className="temperature">
              Low: {convertTemperature(forecast.main.temp_min).toFixed(1)}°
            </p>
            <img 
              src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} 
              alt={forecast.weather[0].description} 
              className="weather-icon"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
