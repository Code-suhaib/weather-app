import React, { useState } from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const API_KEY = 'be018240d3920e659787b513ffeeee09'; 

  const handleSearch = async () => {
    if (!city) return;
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
      setError('');
    } catch (err) {
      setError('City not found. Please try again.');
      setWeather(null);
    }
  };

  return (
    <div 
      className="min-vh-100 d-flex flex-column justify-content-center align-items-center"
      style={{
        background: 'linear-gradient(to right, #83a4d4, #b6fbff)',
        color: '#333',
        padding: '30px'
      }}
    >
      <div className="text-center mb-4">
        <h1 style={{ fontWeight: 'bold', fontSize: '3rem' }}>🌤️ Weather Forecast</h1>
        <p style={{ fontSize: '1.2rem', color: '#444' }}>Get real-time weather updates for any city!</p>
      </div>

      <div className="input-group mb-4 w-75 w-md-50" style={{ maxWidth: '500px' }}>
        <input
          type="text"
          className="form-control shadow-sm"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{ borderRadius: '10px 0 0 10px' }}
        />
        <button
          className="btn btn-primary px-4 shadow-sm"
          onClick={handleSearch}
          style={{ borderRadius: '0 10px 10px 0' }}
        >
          Search
        </button>
      </div>

      {error && <div className="alert alert-danger w-100 text-center" style={{ maxWidth: '500px' }}>{error}</div>}

      {weather && (
        <div className="w-100 d-flex justify-content-center">
          <WeatherCard weather={weather} />
        </div>
      )}
    </div>
  );
}

export default App;
