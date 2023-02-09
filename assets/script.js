a//Operweather API Key //
const apiKey ='e3bbb766e4d287c29747fa27da5ef845';
//Current Weather Info //
var currWeather = $("currentWeather");
// Five Day Forecast Info //
var forecast = $("#weatherForecast");
// City Array //
var citiesArray;
let cityName ='';

// Call API for current weather by lat and lon //
function returnCurrentWeather(lat,lon) {
    let queryURL ='api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}';
    fetch(queryURL)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    });
}
// Call API for lat and lon by city name //
function returnLatLon(cityName) {
    let queryURL ='"http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey';
    fetch (queryURL)
    .then(function(response){
        return response.json();
    })
    .then(function(data) {
        console.log(data)
      })
}
returnLatLon();