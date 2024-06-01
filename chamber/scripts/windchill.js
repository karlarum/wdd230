document.addEventListener('DOMContentLoaded', (event) => {
    function findWindChill(temp, speed) {
        if (temp <= 50 && speed > 3) {
            let windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
            return windChill.toFixed(1);
        } else {
            return "N/A"
        }
    }
    const currentTemp = document.getElementById('temperature');
    const currentSpeed = document.getElementById('windspeed');
    const currentChill = document.getElementById('windchill');

    const temp = parseFloat(currentTemp.textContent);
    const speed = parseFloat(currentSpeed.textContent);

    const windChill = findWindChill(temp, speed);
    currentChill.textContent = windChill;
});