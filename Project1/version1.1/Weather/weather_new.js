const apiKey = 'aca8cb12e2f477338eec7f9249864994'; // Replace with your OpenWeatherMap API key
const pexelsApiKey = 'JyOgdRiWx2YdKgyZLqkYlOgDrGtMqNkBqStOg0WswuSWd1eN7eUbQMFq'; // Replace with your Pexels API key
const city = 'Darbhanga';
const state = 'Bihar';
const country = 'IN';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&appid=${apiKey}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const temperature = data.main.temp - 273.15; // Convert from Kelvin to Celsius
    const weatherDescription = data.weather[0].description;
    const weatherIcon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;

    // Search for background image on Pexels based on weather conditions
    const weatherKeywords = ['clear', 'cloud', 'rain', 'snow'];
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

        const weatherContainer = document.getElementById('weather-container');
        weatherContainer.innerHTML = `
          <h2>Current weather in ${city}, ${state}, ${country}</h2>
          <p>Temperature: ${temperature.toFixed(1)} &#8451;</p>
          <p>Weather: ${weatherDescription}</p>
          <p>Humidity: ${humidity}%</p>
          <p>Wind speed: ${windSpeed} m/s</p>
          <img src="${weatherIcon}" alt="${weatherDescription}">
        `;
      })
      .catch(error => {
        console.error(error);
        const errorContainer = document.getElementById('error-container');
        errorContainer.innerHTML = '<p>Failed to fetch background image. Please try again later.</p>';
      });
  })
  .catch(error => {
    console.error(error);
    const errorContainer = document.getElementById('error-container');
    errorContainer.innerHTML = '<p>Failed to fetch weather data. Please try again later.</p>';
  });