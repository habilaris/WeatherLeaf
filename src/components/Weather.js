// src/components/Weather.js
import React from 'react';
import { FaSun, FaCloud, FaCloudSun, FaCloudMoon, FaCloudShowersHeavy, FaLeaf } from 'react-icons/fa';
import { IconContext } from 'react-icons';

function Weather({ city, temperature, description, isLoading, isError }) {
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p className="weather-info">Failed to fetch weather data. Please try again.</p>
      ) : (
        <div>
          <h2 className="weather-info">Weather in {city}</h2>
          <p className="weather-info">Temperature: {temperature}°C</p>
          <p className="weather-info">Description: {description}</p>
          <IconContext.Provider value={{ color: '#2ecc71', size: '3em' }}>
            <div className="weather-icon">{renderWeatherIcon(description)}</div>
          </IconContext.Provider>
        </div>
      )}
    </div>
  );
}

function renderWeatherIcon(description) {
  switch (description.toLowerCase()) {
    case 'clear sky':
      return <FaSun />;
    case 'few clouds':
    case 'scattered clouds':
    case 'broken clouds':
      return <FaCloudSun />;
    case 'overcast clouds':
      return <FaCloud />;
    case 'light rain':
    case 'moderate rain':
    case 'heavy intensity rain':
      return <FaCloudShowersHeavy />;
    default:
      return <FaLeaf />;
  }
}

export default Weather;
