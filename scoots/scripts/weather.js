const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-desc');
const humidity = document.querySelector('#humidity');
const forecastIcon = document.querySelector('#forecast-icon');
const forecastDesc = document.querySelector('#forecast-desc');
const weatherInfo = document.querySelector('#weather-info');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=20.600231&lon=-87.093894&units=imperial&appid=9a2fcfbaf1ae7d3e201a68db176df4cd';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.600231&lon=-87.093894&units=imperial&appid=9a2fcfbaf1ae7d3e201a68db176df4cd';

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
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    desc = desc.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.innerHTML = `${Math.round(data.main.temp)}&deg;F - ${data.weather[0].main} - ${desc}`;
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`;

    const tempMax = data.main.temp_max;
    weatherInfo.innerHTML = `Today's High: ${Math.round(tempMax)}&deg;F <button id="close-banner">❌</button>`;

    const closeButton = document.querySelector('#close-banner');
    if (closeButton) {
        closeButton.addEventListener('click', function () {
            const banner = document.querySelector('.banner');
            if (banner) {
                banner.style.display = 'none';
            }
        });
    }
}

function displayForecast(data) {
    const now = new Date();
    const nextDay = new Date(now);
    nextDay.setDate(now.getDate() + 1);
    nextDay.setHours(15, 0, 0, 0);

    let closestForecast = null;
    let minTimeDifference = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < data.list.length; i++) {
        const forecastDate = new Date(data.list[i].dt * 1000);

        const timeDifference = Math.abs(forecastDate - nextDay);
        if (timeDifference < minTimeDifference) {
            closestForecast = data.list[i];
            minTimeDifference = timeDifference;
        }
    }

    if (closestForecast) {
        const iconsrc = `https://openweathermap.org/img/w/${closestForecast.weather[0].icon}.png`;
        let desc = closestForecast.weather[0].description;
        desc = desc.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        forecastIcon.setAttribute('src', iconsrc);
        forecastIcon.setAttribute('alt', desc);
        forecastDesc.innerHTML = `${Math.round(closestForecast.main.temp)}&deg;F - ${closestForecast.weather[0].main} - ${desc}`;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const banner = document.querySelector('.banner');
    if (banner) {
        banner.style.display = 'block';

        const closeButton = banner.querySelector('#close-banner');
        if (closeButton) {
            closeButton.addEventListener('click', function () {
                banner.style.display = 'none';
            });
        }
    }

    apiFetch();
})


