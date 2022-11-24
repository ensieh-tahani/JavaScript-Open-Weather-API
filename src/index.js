//JS Challenge 2
let apiKey= "c7699193d293035651e73a0adb1b4454";

//JS Challenge 3

function logSydney(response){
    console.log(response);
  }
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=Sydney&units=metric";

axios.get(`${apiUrl}&appid=${apiKey}`).then(logSydney);

//JS Challenge 4
function logCurrentTemp(response){
    console.log(response.data.main.temp);
  }
  axios.get(`${apiUrl}&appid=${apiKey}`).then(logCurrentTemp);
  
  //challenge 5 
  function displayWeather(response){
  let weatherh1= document.querySelector("#weather");
  let currentWeather=Math.round(response.data.main.temp);
  let currentLocation=response.data.name;
  weatherh1.innerHTML=`It is ${currentWeather} degrees in ${currentLocation}`;
  
  }
  
  axios.get(`${apiUrl}&appid=${apiKey}`).then(displayWeather);
  
