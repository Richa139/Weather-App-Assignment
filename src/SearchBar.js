import React from 'react';
import './SearchBar.css'; // Create a separate CSS file for styling

const SearchBar = ({ city, setCity, handleSearch, setUnit }) => {
  return (
    <div className="search-bar">
      <input 
        type="text" 
        value={city} 
        onChange={(e) => setCity(e.target.value)} 
        placeholder="Enter city name" 
        className="input-field"
      />
      <button onClick={handleSearch} className="search-button">Search</button>
      <select className="unit-select" onChange={(e) => setUnit(e.target.value)}>
        <option value="metric">°C</option>
        <option value="imperial">°F</option>
      </select>
    </div>
  );
};

export default SearchBar;
