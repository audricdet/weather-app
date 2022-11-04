// const call all

const inputCity = document.querySelector('#city')
const btn = document.querySelector('#add')
const apikey = "9d7ace9cd00adbb60d5671007ea20326"

// const call today

const city = document.querySelector('#city-output')
const day = document.querySelector('.day-of-forecast')
const weather = document.querySelector('.weather')
const probabilityOfPrecipitation = document.querySelector('.p-o-p')
const temperature = document.querySelector('.temperature')
const windSpeed = document.querySelector('.windspeed')
const humidity = document.querySelector('.humidity')

// const call day 1

const day1 = document.querySelector('.day-of-forecast-1')
const weather1 = document.querySelector('.weather-1')
const probabilityOfPrecipitation1 = document.querySelector('.p-o-p-1')
const temperature1 = document.querySelector('.temperature-1')
const windSpeed1 = document.querySelector('.windspeed-1')
const humidity1 = document.querySelector('.humidity-1')

// const call day 2

const day2 = document.querySelector('.day-of-forecast-2')
const weather2 = document.querySelector('.weather-2')
const probabilityOfPrecipitation2 = document.querySelector('.p-o-p-2')
const temperature2 = document.querySelector('.temperature-2')
const windSpeed2 = document.querySelector('.windspeed-2')
const humidity2 = document.querySelector('.humidity-2')

// const call day 3

const day3 = document.querySelector('.day-of-forecast-3')
const weather3 = document.querySelector('.weather-3')
const probabilityOfPrecipitation3 = document.querySelector('.p-o-p-3')
const temperature3 = document.querySelector('.temperature-3')
const windSpeed3 = document.querySelector('.windspeed-3')
const humidity3 = document.querySelector('.humidity-3')

// const call day 4

const day4 = document.querySelector('.day-of-forecast-4')
const weather4 = document.querySelector('.weather-4');
const probabilityOfPrecipitation4 = document.querySelector('.p-o-p-4')
const temperature4 = document.querySelector('.temperature-4')
const windSpeed4 = document.querySelector('.windspeed-4')
const humidity4 = document.querySelector('.humidity-4')

// convert Kelvin to Celsius 

const convertTemp = (val) => {
    return Math.round(val - 273)
}

// convert probaility of precipitation

const convertPoP = (value) => {
    return Math.round(value * 100)
}

// fetch

const getWeather = () => {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+inputCity.value+'&appid='+apikey)
    .then(response => response.json())
    .then(data => {

        let cityout = data.city.name
        city.innerHTML = `Weather of ${cityout}`
//today

        let dateOfForecast = data.list[0].dt_txt 
        day.innerHTML = `<i class="fa-solid fa-clock"></i> Date : ${dateOfForecast}`
        let weatherInfo = data.list[0].clouds.all
        weather.innerHTML = `<i class="fa-solid fa-cloud"></i> Cloudiness : ${weatherInfo} %`
        let precipitation = data.list[0].pop
        probabilityOfPrecipitation.innerHTML = `<i class="fa-solid fa-cloud-rain"></i> Precipitation : ${convertPoP(precipitation)} %`
        let temp = data.list[0].main.temp
        temperature.innerHTML = `<i class="fa-solid fa-temperature-quarter"></i> Temperature : ${convertTemp(temp)} °C`
        let windspeed = data.list[0].wind.speed
        windSpeed.innerHTML = `<i class="fa-solid fa-wind"></i> Wind speed : ${windspeed} Km/h`
        let humidite = data.list[0].main.humidity
        humidity.innerHTML = `<i class="fa-solid fa-droplet"></i> Humidity : ${humidite} %`

// day 1

        let dateOfForecast1 = data.list[8].dt_txt 
        day1.innerHTML = `<i class="fa-solid fa-clock"></i> Date : ${dateOfForecast1}`
        let weatherInfo1 = data.list[8].clouds.all
        weather1.innerHTML = `<i class="fa-solid fa-cloud"></i> Cloudiness : ${weatherInfo1} %`
        let precipitation1 = data.list[8].pop
        probabilityOfPrecipitation1.innerHTML = `<i class="fa-solid fa-cloud-rain"></i> Precipitation : ${convertPoP(precipitation1)} %`
        let temp1 = data.list[8].main.temp
        temperature1.innerHTML = `<i class="fa-solid fa-temperature-quarter"></i> Temperature : ${convertTemp(temp1)} °C`
        let windspeed1 = data.list[8].wind.speed
        windSpeed1.innerHTML = `<i class="fa-solid fa-wind"></i> Wind speed : ${windspeed1} Km/h`
        let humidite1 = data.list[8].main.humidity
        humidity1.innerHTML = `<i class="fa-solid fa-droplet"></i> Humidity : ${humidite1} %`

// day 2

        let dateOfForecast2 = data.list[16].dt_txt 
        day2.innerHTML = `<i class="fa-solid fa-clock"></i> Date : ${dateOfForecast2}`
        let weatherInfo2 = data.list[16].clouds.all
        weather2.innerHTML = `<i class="fa-solid fa-cloud"></i> Cloudiness : ${weatherInfo2} %`
        let precipitation2 = data.list[16].pop
        probabilityOfPrecipitation2.innerHTML = `<i class="fa-solid fa-cloud-rain"></i> Precipitation : ${convertPoP(precipitation2)} %`
        let temp2 = data.list[16].main.temp
        temperature2.innerHTML = `<i class="fa-solid fa-temperature-quarter"></i> Temperature : ${convertTemp(temp2)} °C`
        let windspeed2 = data.list[16].wind.speed
        windSpeed2.innerHTML = `<i class="fa-solid fa-wind"></i> Wind speed : ${windspeed2} Km/h`
        let humidite2 = data.list[16].main.humidity
        humidity2.innerHTML = `<i class="fa-solid fa-droplet"></i> Humidity : ${humidite2} %`

// day 3

        let dateOfForecast3 = data.list[24].dt_txt 
        day3.innerHTML = `<i class="fa-solid fa-clock"></i> Date : ${dateOfForecast3}`
        let weatherInfo3 = data.list[24].clouds.all
        weather3.innerHTML = `<i class="fa-solid fa-cloud"></i> Cloudiness : ${weatherInfo3} %`
        let precipitation3 = data.list[24].pop
        probabilityOfPrecipitation3.innerHTML = `<i class="fa-solid fa-cloud-rain"></i> Precipitation : ${convertPoP(precipitation3)} %`
        let temp3 = data.list[24].main.temp
        temperature3.innerHTML = `<i class="fa-solid fa-temperature-quarter"></i> Temperature : ${convertTemp(temp3)} °C`
        let windspeed3 = data.list[24].wind.speed
        windSpeed3.innerHTML = `<i class="fa-solid fa-wind"></i> Wind speed : ${windspeed3} Km/h`
        let humidite3 = data.list[24].main.humidity
        humidity3.innerHTML = `<i class="fa-solid fa-droplet"></i> Humidity : ${humidite3} %`

// day 4 

        let dateOfForecast4 = data.list[32].dt_txt 
        day4.innerHTML = `<i class="fa-solid fa-clock"></i> Date : ${dateOfForecast4}`
        let weatherInfo4 = data.list[32].clouds.all
        weather4.innerHTML = `<i class="fa-solid fa-cloud"></i> Cloudiness : ${weatherInfo4} %`
        let precipitation4 = data.list[32].pop
        probabilityOfPrecipitation4.innerHTML = `<i class="fa-solid fa-cloud-rain"></i> Precipitation : ${convertPoP(precipitation4)} %`
        let temp4 = data.list[32].main.temp
        temperature4.innerHTML = `<i class="fa-solid fa-temperature-quarter"></i> Temperature : ${convertTemp(temp4)} °C`
        let windspeed4 = data.list[32].wind.speed
        windSpeed4.innerHTML = `<i class="fa-solid fa-wind"></i> Wind speed : ${windspeed4} Km/h`
        let humidite4 = data.list[32].main.humidity
        humidity4.innerHTML = `<i class="fa-solid fa-droplet"></i> Humidity : ${humidite4} %`

    })
    .catch(error => {
        console.log('There was an error!', error)
    })
}




btn.addEventListener('click', getWeather)