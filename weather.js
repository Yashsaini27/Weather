
const inputBox=document.querySelector('.input-box');
const searchBtn=document.getElementById('searchBtn');
console.log(searchBtn);
const weather_img=document.querySelector('.weather-img');
const temperature=document.querySelector('.temperature')
const description=document.querySelector('.description');
const humidity=document.getElementById('humidity');
const wind_speed=document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');

async function checkWeather(city)
{
	const api_key="afbaa95c877133b3190bd69c10d6f4c1"
	
	const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
	const weather_data=await fetch(`${url}`).then(response=>
		response.json());

		if(weather_data.cod===`404`)
		{
			location_not_found.style.display="flex";
			weather_body.style.display="none";
			console.log(error);
			return;
		}

		location_not_found.style.display="none";
		weather_body.style.display="flex";
		temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
		description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;

	switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "/images/download.png";
            break;
        case 'Clear':
            weather_img.src = "images/clear.png";
            break;
        case 'Rain':
            weather_img.src = "/images/rain.png";
            break;
        case 'Mist':
            weather_img.src = "/images/mist.png";
            break;
        case 'Snow':
            weather_img.src = "/images/snow.png";
            break;

    }

		console.log(weather_data);
}
//  async function checkWeather()
//  {
// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'ca6336022cmsh9dbfe10f66540b5p18ddfejsnc421d07b1a4a',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
//  }
//  checkWeather()
 
 searchBtn.addEventListener('click', ()=>{
	checkWeather(inputBox.value);
})