const dotenv = require('dotenv')

const envFound = dotenv.config()
if(!envFound) {
    throw new Error('No se encontro el .env')
}

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = {
    port : process.env.PORT,
    log : process.env.LOG_LEVEL,
    swagger : {
        path : '/documentation'
    },
    apiWeather : {
        key : process.env.API_KEY_WEATHER_MAPBOX,
        path : 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
    },
    apiOpenWeather : {
        key : process.env.API_KEY_WEATHER_OPENWEATHER,
        path : 'https://api.openweathermap.org/data/2.5/weather'
    }
}