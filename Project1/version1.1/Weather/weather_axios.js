// const weatherInfo = document.getElementById('info')

function getWeather(){
    axios.get('https://api.open-meteo.com/v1/forecast?latitude=26.1542&longitude=85.8918&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m')
    .then(data => display(data))
    .catch(err => console.error(err))
}

function display(res){
    document.getElementById('info').innerHTML = `
    <div class="container">
    <div class="card-body" >
      <pre>Weather of Darbhanga: ${JSON.stringify(res.data.current_weather,null,1)}</pre>
    </div>
  </div>
`;
    // // console.log(data.data.current_weather)
    // let result=JSON.stringify(data.data.current_weather);
    // // console.log(result)
    // weatherInfo.innerHTML = `<h1>Weather of Darbhanga: ${result}</h1>`
    // // weatherInfo.style.background= "grey";
    // weatherInfo.style.width="Auto";
    // // weatherInfo.style.fontSize="20px";
    // weatherInfo.style.color="skyblue";
    // weatherInfo.style.textAlign="center";
}

getWeather()