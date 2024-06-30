const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=30.481253&lon=-86.442100&units=imperial&appid=9a2fcfbaf1ae7d3e201a68db176df4cd';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=30.481253&lon=-86.442100&units=imperial&appid=9a2fcfbaf1ae7d3e201a68db176df4cd';

// handle errors using a block function
async function apiFetch() {
    try {
        // fetch current weather
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }

        // fetch forecast
        const forecastResponse = await fetch(forecastUrl);
        if (forecastResponse.ok) {
            const forecastData = await forecastResponse.json();
            displayForecast(forecastData);
        } else {
            throw Error(await forecastResponse.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// display results
function displayResults(data) {
    // icon code and description
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    desc = desc.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    // display zero decimal points
    captionDesc.innerHTML = `${Math.round(data.main.temp)}&deg;F - ` + desc;
}

function displayForecast(data) {
    for (let i = 0; i < 3; i++) {
        const forecast = data.list[i * 8];
        const iconsrc = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
        let desc = forecast.weather[0].description;
        desc = desc.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        document.getElementById(`forecast-icon${i + 1}`).setAttribute('src', iconsrc);
        document.getElementById(`forecast-icon${i + 1}`).setAttribute('alt', desc);
        document.getElementById(`forecast-desc${i + 1}`).textContent = `${Math.round(forecast.main.temp)}°F - ${desc}`;
    }
}

apiFetch();