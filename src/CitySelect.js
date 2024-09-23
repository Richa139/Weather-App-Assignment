import React, { useState } from 'react';
import './CitySelect.css';

const cities = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
  "San Antonio",
  "San Diego",
  "Dallas",
  "San Jose",
  "Austin",
  "Jacksonville",
  "Fort Worth",
  "Columbus",
  "San Francisco",
  "Charlotte",
  "Indianapolis",
  "Seattle",
  "Denver",
  "Washington",
  "Boston"
];

const CitySelect = ({ city, setCity, handleSearch }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filteredCities, setFilteredCities] = useState(cities);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setCity(value);
    setFilteredCities(cities.filter(city => city.toLowerCase().includes(value.toLowerCase())));
    setIsDropdownOpen(value.length > 0);
  };

  const handleCitySelect = (city) => {
    setCity(city);
    setIsDropdownOpen(false);
    handleSearch();
  };

  return (
    <div className="city-select">
      <input
        type="text"
        value={city}
        onChange={handleInputChange}
        placeholder="Enter city name"
        className="input-field"
        onFocus={() => setIsDropdownOpen(true)}
      />
      {isDropdownOpen && (
        <ul className="dropdown-list">
          {filteredCities.map((city, index) => (
            <li key={index} className="dropdown-item" onClick={() => handleCitySelect(city)}>
              {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CitySelect;
