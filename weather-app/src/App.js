import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import WeatherCard from './WeatherCard';
import './App.css';

const API_KEY = '2141ebdae44c40803811f2b5c7ef91a5';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeatherData(null);
    }
  };

  return (
    <div className="App">
      <SearchBar onSearch={fetchWeatherData} />
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
};

export default App;
