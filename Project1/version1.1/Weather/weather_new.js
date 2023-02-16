const apiKey = 'aca8cb12e2f477338eec7f9249864994'; // Replace with your OpenWeatherMap API key
const pexelsApiKey = 'JyOgdRiWx2YdKgyZLqkYlOgDrGtMqNkBqStOg0WswuSWd1eN7eUbQMFq'; // Replace with your Pexels API key
const searchForm = document.getElementById('search-form');
const cityInput = document.getElementById('city-input');
const weatherContainer = document.getElementById('weather-container');
const errorContainer = document.getElementById('error-container');
const title = document.getElementById('title');

window.addEventListener("DOMContentLoaded", ()=> {
  fetch('https://api.pexels.com/v1/search?query=clear&per_page=1', { headers: { Authorization: pexelsApiKey } })
        .then(response => response.json())
        .then(data => {
          const backgroundImage = data.photos[0].src.large;

          // Set background image
          document.body.style.backgroundImage = `url(${backgroundImage})`;
        })

        const city= "Darbhanga"
       
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
      .then(data => {
      const temperature = data.main.temp - 273.15; // Convert from Kelvin to Celsius
      const feelLike = data.main.feels_like - 273.15;
      const weatherDescription = data.weather[0].description;
      const weatherIcon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;
       weatherContainer.innerHTML = `
            <h2>Current weather in ${city}</h2>
            <p>Temperature: ${temperature.toFixed(1)} &#8451;</p>
            <p>Feels Like: ${feelLike.toFixed(1)} &#8451;</p>
            <p>Weather: ${weatherDescription}</p>
            <p>Humidity: ${humidity}%</p>
            <p>Wind speed: ${windSpeed} m/s</p>
            <img src="${weatherIcon}" alt="${weatherDescription}">
          `;
          title.innerHTML = `Weather | ${city}`
      })
})


searchForm.addEventListener('submit', e => {
  e.preventDefault();
  const city = cityInput.value.trim();
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const temperature = data.main.temp - 273.15; // Convert from Kelvin to Celsius
      const feelLike = data.main.feels_like - 273.15;
      const weatherDescription = data.weather[0].description;
      const weatherIcon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;

      // Search for background image on Pexels based on weather conditions
      const weatherKeywords = ['clear', 'cloud', 'rain', 'snow', 'smoke', 'mist', 'haze', 'sunny'];
      let query = 'nature'; // Default query
      for (let i = 0; i < weatherKeywords.length; i++) {
        if (weatherDescription.includes(weatherKeywords[i])) {
          query = weatherKeywords[i];
          break;
        }
      }

      const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${query}&per_page=1`;
      fetch(pexelsApiUrl, { headers: { Authorization: pexelsApiKey } })
        .then(response => response.json())
        .then(data => {
          const backgroundImage = data.photos[0].src.large;

          // Set background image
          document.body.style.backgroundImage = `url(${backgroundImage})`;

          weatherContainer.innerHTML = `
            <h2>Current weather in ${city}</h2>
            <p>Temperature: ${temperature.toFixed(1)} &#8451;</p>
            <p>Feels Like: ${feelLike.toFixed(1)} &#8451;</p>
            <p>Weather: ${weatherDescription}</p>
            <p>Humidity: ${humidity}%</p>
            <p>Wind speed: ${windSpeed} m/s</p>
            <img src="${weatherIcon}" alt="${weatherDescription}">
          `;
          title.innerHTML = `Weather | ${city}`
      })
      .catch(error => {
        console.error(error);
        const errorContainer = document.getElementById('error-container');
        errorContainer.innerHTML = '<p>Failed to fetch background image. Please try again later.</p>';
        setTimeout(()=>{
          errorContainer.innerHTML=""
        },3000)
      });
  })
  .catch(error => {
    console.error(error);
    const errorContainer = document.getElementById('error-container');
    errorContainer.innerHTML = '<p>Failed to fetch weather data. Please try again later.</p>';
    setTimeout(()=>{
      errorContainer.innerHTML=""
    },3000)
  })
})