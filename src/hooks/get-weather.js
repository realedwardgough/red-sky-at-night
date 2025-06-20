import { useState, useEffect } from 'react';
import { fetchCurrentWeather } from '../lib/weather-api';

export function useWeather(city) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city) return;

    setLoading(true);
    setError(null);

    fetchCurrentWeather(city)
      .then((weatherData) => {
        setData(weatherData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [city]);

  return { data, loading, error };
}
