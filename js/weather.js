//navigator.geolocation.getCurrentPosition()
const API_KEY = "7a4f8edfc4d1cd71a255165f0744c60e";


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("you live in", lat, lon );
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(url).then((response) => response.json()).then((data) => {
        const weatherContainer = document.querySelector("#weather span:first-child");
        const cityContainer = document.querySelector("#weather span:last-child");
        cityContainer.innerText = data.name;
        weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        });
}
function onGeoError(){
    console.log("can't find you, no weaher for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);