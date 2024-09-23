# Weather Application

## Overview

This Weather Application is a responsive React-based application that provides real-time weather information, including a 5-day forecast, temperature unit conversion, and city search functionality. The app fetches weather data from the OpenWeatherMap API.

## Features

- **Default City Display**: Shows weather for New York by default.
- **City Search**: Users can search for the weather in different cities.
- **5-Day Forecast**: Displays daily high and low temperatures, weather conditions, and icons.
- **Temperature Unit Conversion**: Users can toggle between Celsius and Fahrenheit.
- **Responsive Design**: The app is fully responsive, ensuring a smooth user experience on various devices.
- **Pull to Refresh**: Users can pull to refresh weather data.

## Technologies Used

- React
- CSS (for styling)
- OpenWeatherMap API
- Flexbox for layout

## Project Setup

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up the API Key**:

   Replace `YOUR_API_KEY` in the code with your actual OpenWeatherMap API key.

4. **Start the application**:

   ```bash
   npm start
   ```

   The app will open in your default web browser at `http://localhost:3000`.

## Usage

- Search for any city using the search input.
- Use the toggle switch to switch between Celsius and Fahrenheit.
- Pull down on the forecast section to refresh weather data.

## File Structure

```
weather-app/
├── src/
│   ├── components/
│   │   ├── Forecast.js
│   │   ├── Weather.js
│   ├── App.js
│   ├── index.js
│   └── styles/
│       ├── Forecast.css
│       └── App.css
├── public/
│   └── index.html
└── package.json
```
