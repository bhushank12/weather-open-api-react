function ShowWeatherInfo({ weatherData }) {
  if(!weatherData || !weatherData.main) return <p>No weather data available</p>;

  const { temp, humidity, temp_min, temp_max } = weatherData.main;
  return (
    <div class="weather-info">
      <span><strong>Current Temperature:</strong> {weatherData.main.temp} &deg;C</span>
      <span><strong>Humidity:</strong> {weatherData.main.humidity} %</span>
      <span><strong>Temp Min:</strong> {weatherData.main.temp_min}</span>
      <span><strong>Temp Max:</strong> {weatherData.main.temp_max}</span>
    </div>
  );
}

export default ShowWeatherInfo;
