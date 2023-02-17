const weatherInfo = document.getElementById('info')
function fetchData(){
    return new  Promise((resolve, reject)=>{
        fetch('https://api.openweathermap.org/data/2.5/weather?q=darbhanga&appid=aca8cb12e2f477338eec7f9249864994')
        // fetch('http://api.weatherapi.com/v1/current.json?key=5d2bd095ab6e4219a55155936231102&q=India&aqi=yes')
        // fetch('https://api.open-meteo.com/v1/forecast?latitude=26.1542&longitude=85.8918&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m')
        .then(response => response.json())
        .then(data => resolve(data));
        //.current.condition.text
    })
}

function display(data) {
      const city = "Darbhanga"
      const temperature = data.main.temp - 273.15; // Convert from Kelvin to Celsius
      const feelLike = data.main.feels_like - 273.15;
      const weatherDescription = data.weather[0].description;
      const weatherIcon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;
       weatherInfo.innerHTML = `
            <h2>Current weather in ${city}</h2>
            <p>Temperature: ${temperature.toFixed(1)} &#8451;</p>
            <p>Feels Like: ${feelLike.toFixed(1)} &#8451;</p>
            <p>Weather: ${weatherDescription}</p>
            <p>Humidity: ${humidity}%</p>
            <p>Wind speed: ${windSpeed} m/s</p>
            <img src="${weatherIcon}" alt="${weatherDescription}">
          `;
        // weatherInfo.style.background= "grey";
        weatherInfo.style.width="Auto";
        // weatherInfo.style.fontSize="20px";
        weatherInfo.style.color="skyblue";
        weatherInfo.style.textAlign="center";



}

fetchData().then(display)