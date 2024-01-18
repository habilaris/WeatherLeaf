// src/App.js
import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import Header from './components/Header';
import Weather from './components/Weather';
import './App.css';

document.title = "WeatherLeaf";

const suggestions = [
  // Sample suggestions, you can replace these with your actual suggestions
  { label: 'New York' },
  { label: 'London' },
  { label: 'Paris' },
  { label: 'Tokyo' },
  { label: 'Peshawar' },
  { label: 'Islamabad' },
  { label: 'Rawalpindi' },
  { label: 'Hyderabad' },
  { label: 'Karachi' },
  { label: 'Lahore' },
  { label: 'Azad Kashmir' },
  { label: 'Japan' },
];

function App() {
  const [value, setValue] = useState('');
  const [suggestionsList, setSuggestionsList] = useState([]);
  const [temperature, setTemperature] = useState('');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getSuggestions = (inputValue) => {
    const inputValueLower = inputValue.trim().toLowerCase();
    const inputLength = inputValueLower.length;

    return inputLength === 0
      ? []
      : suggestions.filter(
          (suggestion) =>
            suggestion.label.toLowerCase().slice(0, inputLength) === inputValueLower
        );
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestionsList(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestionsList([]);
  };

  const getSuggestionValue = (suggestion) => suggestion.label;

  const renderSuggestion = (suggestion) => <div>{suggestion.label}</div>;

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);

    try {
      const apiKey = '50d60b628fb394ce56ef30c695698a11';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apiKey}&units=metric`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }

      const data = await response.json();
      setTemperature(data.main.temp);
      setDescription(data.weather[0].description);

      // Set the document title here
      document.title = `Weather in ${value}`;
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const inputProps = {
    placeholder: 'Enter city',
    value,
    onChange: onChange,
  };

  return (
    <>
      <div className="container">
        <Header />
        <form onSubmit={handleFormSubmit}>
          <label>
            Enter City:
            <Autosuggest
              suggestions={suggestionsList}
              onSuggestionsFetchRequested={onSuggestionsFetchRequested}
              onSuggestionsClearRequested={onSuggestionsClearRequested}
              getSuggestionValue={getSuggestionValue}
              renderSuggestion={renderSuggestion}
              inputProps={inputProps}
            />
          </label>
          <button type="submit">Get Weather</button>
        </form>
        <div className="weather-container">
          <Weather
            city={value}
            temperature={temperature}
            description={description}
            isLoading={isLoading}
            isError={isError}
          />
        </div>
      </div>
      <div>
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-info">
              <p>&copy; 2024 WeatherLeaf. All rights reserved.</p>
              <p>Created by Habil Aris</p>
            </div>
            <div className="social-icons">
              {/* Add your social media icons and links here */}
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              {/* Add more social media icons as needed */}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
