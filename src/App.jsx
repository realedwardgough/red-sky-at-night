import React, { useState } from 'react';
import { CurrentWeather } from './features/weather/current-weather.jsx';

function App() {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const cityInput = e.target.elements.city.value.trim();
    if (cityInput) {
      setCity(cityInput);
    }
  };

  return (
    <div>
      <h1>Red Sky at Night</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="city" placeholder="Enter city" />
        <button type="submit">Get Weather</button>
      </form>
      <CurrentWeather city={city} />
    </div>
  );
}

export default App;
