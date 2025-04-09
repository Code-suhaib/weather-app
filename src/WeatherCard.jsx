import React from 'react';

function WeatherCard({ weather }) {
  const { name, main, weather: weatherInfo, wind } = weather;
  const iconUrl = `http://openweathermap.org/img/wn/${weatherInfo[0].icon}@4x.png`;

  return (
    <div className="card mx-auto shadow-lg border-0" style={{ maxWidth: '400px', borderRadius: '20px', background: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
      <div className="card-body text-dark p-4">
        <h2 className="card-title text-center mb-3 fw-bold">{name}</h2>
        
        <div className="text-center">
          <img src={iconUrl} alt="Weather Icon" className="img-fluid" style={{ width: '100px' }} />
          <h5 className="text-capitalize mt-3">{weatherInfo[0].description}</h5>
        </div>

        <ul className="list-group list-group-flush mt-4">
          <li className="list-group-item d-flex justify-content-between bg-transparent border-0 px-0">
            <strong>🌡️ Temperature:</strong> <span>{main.temp} °C</span>
          </li>
          <li className="list-group-item d-flex justify-content-between bg-transparent border-0 px-0">
            <strong>💨 Wind Speed:</strong> <span>{wind.speed} m/s</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default WeatherCard;
