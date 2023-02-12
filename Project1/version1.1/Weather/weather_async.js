const weatherInfo = document.getElementById('info');

async function fetchData(){

       const info= await (await fetch('https://api.open-meteo.com/v1/forecast?latitude=26.1542&longitude=85.8918&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m')).json() ;
       
       return info.current_weather;
}

async function display() {
       const weather = await fetchData() ;
        const result =  JSON.stringify(weather);
        current= result.split('" "') ;
        weatherInfo.innerHTML = `<h1>Weather of Darbhanga: ${current}</h1>` ;
       //  weatherInfo.style.background= "grey";
        weatherInfo.style.width="Auto";
        // weatherInfo.style.fontSize="20px";
        weatherInfo.style.color="skyblue";
        weatherInfo.style.textAlign="center";
}

display()