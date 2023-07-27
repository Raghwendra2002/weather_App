import React, { useState } from 'react';
import axios from 'axios';
import './home.css';
const Home = (props) => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = '9e21bf08854f056cac3f8fbd76d77b3b'; // Replace with your API key

  const fetchWeatherData = () => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => setWeatherData(response.data))
      .catch((error) => {
        console.error('Error fetching data:', error);
        setWeatherData(null);
      });
  };

  const handleSearch = () => {
    fetchWeatherData();
  };

  return (
    <>
   { props.authorised &&
    <div className='container mt-4 homes'>
      <input
      
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <br />
      <button  className='search mt-2' onClick={handleSearch}>Search</button>

      {weatherData && (
        <div className='data'> 
          <h2>Weather in {weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp} K</p>
          <p>Description: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity} %</p>
          
        </div>
      )}
    </div>
    }

{!props.authorised && 
      <div className="container text-center mt-4">

       <h1 className='mb-4'> Oops Unauthorized Access</h1>
       <h1 className='mt-4'>Please Login</h1>

      </div>
    
}

    </>
  );
};

export default Home;
