const res = require('express/lib/response')
const WeatherRepository = require('../repositories/weatherRepository')
const repositoryWeather = new WeatherRepository()
const CityRepository = require('../repositories/cityRepository')
const repositoryCity = new CityRepository()


const weatherCoordinates = async (lon, lat) => {

    const weather = await repositoryWeather.weatherByCoordinates(lon, lat)

    return {
        description : weather.weather[0].description,
        temperature : weather.main.temp,
        temperatureMax : weather.main.temp_max,
        temperatureMin : weather.main.temp_min

    } 
    

}

const weatherCityId = async (city , id) => {

  const cities = await repositoryCity.foundCities(city)

  const cityData = await  cities.features.find(e => e.id == id ) 
  const lon = cityData.geometry.coordinates[1]
  const lat = cityData.geometry.coordinates[0]

  return await weatherCoordinates(lon , lat)

}

module.exports = {
    weatherCoordinates,
    weatherCityId
}