import React from 'react';

function WeatherCard({ weather }) {
  const { name, main, weather: weatherInfo, wind } = weather;
  const iconUrl = `http://openweathermap.org/img/wn/${weatherInfo[0].icon}@2x.png`;

  return (
    <div
      className="card p-4 shadow-lg"
      style={{
        maxWidth: '400px',
        borderRadius: '20px',
        background: 'rgba(255, 255, 255, 0.25)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        color: '#333',
        border: '1px solid rgba(255, 255, 255, 0.3)'
      }}
    >
      <h2 className="text-center mb-3">{name}</h2>
      <div className="text-center">
        <img src={iconUrl} alt="Weather Icon" style={{ width: '100px' }} />
        <h4 className="text-capitalize mt-2">{weatherInfo[0].description}</h4>
      </div>
      <div className="mt-3">
        <p><strong>🌡️ Temperature:</strong> {main.temp} °C</p>
        <p><strong>💨 Wind Speed:</strong> {wind.speed} m/s</p>
      </div>
    </div>
  );
}

export default WeatherCard;
