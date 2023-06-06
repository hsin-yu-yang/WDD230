async function getweather() {
    const apiURL =
        'https://api.openweathermap.org/data/2.5/weather?q=taoyuan&appid=7040ea904442a45d6950ba584410ce59' +
        'mperial&APPID=07407eccd051a7a7b4fc81e187f47771';
    const response  = await fetch(apiURL);
    const data      = await response.json();
    const wSpeed = data.wind.speed;
    const wSpeedSpan = document.querySelector('#windspeed');
    wSpeedSpan.innerHTML = "Wind Speed: " + wSpeed.toString() + 'mph';
    const temp = data.main.temp;
    const windChill = (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));
    const windChillSpan = document.querySelector('#windchill');
    windChillSpan.innerHTML = "Wind Chill: " + windChill.toString() + '°F';
    console.log(windChill);
    console.log(data);
    const currentTemp   = document.querySelector('#current-temp');
    const weathericon   = document.querySelector('#weathericon');
    const caption       = document.querySelector('figcaption');
    currentTemp.textContent = data.main.temp.toFixed(0);
    let imgsrc  = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let imgalt  = data.weather[0].description;
    imgalt      = imgalt.split(' ').map(capitalize).join(' ');
    currentTemp.textContent = data.main.temp.toFixed(0);
    weathericon.setAttribute('src', imgsrc);
    weathericon.setAttribute('alt', imgalt);
    caption.innerHTML = `Currently: ${imgalt}`;
  }
  function capitalize(word) {
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
  }
  window.addEventListener('load', getweather);