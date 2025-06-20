import React from 'react';
import { useWeather } from '../../hooks/get-weather';

export function CurrentWeather({ city }) {
  const { data, loading, error } = useWeather(city);

  if (loading) return <p>Loading weather...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>Enter a city to see weather.</p>;

  return (
    <div>
      <h2>Weather in {data.name}</h2>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Conditions: {data.weather[0].description}</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind Speed: {data.wind.speed} m/s</p>
    </div>
  );
}
