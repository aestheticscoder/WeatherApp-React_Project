import React from 'react';

const WeatherCard = ({ data }) => {
  const { name, main, weather } = data;

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <p>{weather[0].description}</p>
      <p>Temperature: {main.temp} °C</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Wind Speed: {data.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
