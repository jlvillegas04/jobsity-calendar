/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

import './Forecast.scss'

export default function WeatherForecast({ reminderKey }) {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);



  const apiKey = "7cf25fddc4d4eb12b92a6b9a277f7257";
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

  useEffect(() => {
    const savedCity = localStorage.getItem(`savedCity_${reminderKey}`);
    if (savedCity) {
      setCity(savedCity);
    }
  }, [reminderKey]);

  async function checkWeather() {
    if (!city) {
        setError('Please enter a city.');
        setWeatherData(null);
        return;
    }
    try {
      const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
      if (response.status === 404) {
        setError('City not found');
        setWeatherData(null);
      } else {
        const data = await response.json();
        setWeatherData(data);
        setError(null);

        localStorage.setItem(`savedCity_${reminderKey}`, city);
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError('An error occurred while fetching weather data.');
      setWeatherData(null);
    }
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          checkWeather();
        }}
      >
        <div className="search">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city"
            required
            className='search-box'
          />
          <button type="button" onClick={checkWeather} className='weather-btn'>Get Weather</button>
        </div>
      </form>
      {error && <div className="error">{error}</div>}
      {weatherData && (
        <div className="weather">
          <div className="city">{weatherData.name}</div>
          <div className="temp">{Math.round(weatherData.main.temp)}°C</div>
          <div className="humidity">{weatherData.main.humidity}% Humidity</div>
          <div className="wind">{weatherData.wind.speed} km/h winds</div>

        </div>
      )}
    </div>
  );
}
