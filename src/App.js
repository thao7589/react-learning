import React from 'react';

import './App.css';
import WeatherCard from './components/WeatherCard/WeatherCard';

function App() {
  return (
    <div className="App">
      <WeatherCard temp='24'/>
      <WeatherCard temp='10'/>
      <WeatherCard temp='25'/>
      <WeatherCard temp='40'/>
    </div>
  );
}

export default App;
