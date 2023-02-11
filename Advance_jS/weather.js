const weatherInfo = document.getElementById('info')
function fetchData(){
    return new  Promise((resolve, reject)=>{
        // fetch('https://api.openweathermap.org/data/2.5/weather?lat=26.1667&lon=85.9&appid=aca8cb12e2f477338eec7f9249864994')
        // fetch('http://api.weatherapi.com/v1/current.json?key=5d2bd095ab6e4219a55155936231102&q=India&aqi=yes')
        fetch('https://api.open-meteo.com/v1/forecast?latitude=26.1542&longitude=85.8918&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m')
        .then(response => response.json())
        .then(data => resolve(data.current_weather));
        //.current.condition.text
    })
}

function display(weather) {
    result=JSON.stringify(weather);
    current= result.split('" "')
        weatherInfo.innerText = `Weather of Darbhanga= ${current}`
        weatherInfo.style.background= "grey"
        weatherInfo.style.width="700px"
}

fetchData().then(display)