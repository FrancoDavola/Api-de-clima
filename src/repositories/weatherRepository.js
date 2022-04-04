const axios = require('axios');
const config = require('../config');

class WeatherRepository {

    constructor(){
        this.path = config.apiOpenWeather.path
        this.units = 'metric'
        this.lang = 'es',
        this.appid = config.apiOpenWeather.key
    }

 async   weatherByCoordinates(lon, lat){


        try{
            const instance = axios.create({
                baseURL: `${this.path}`,
                params: {
                    'appid': this.appid,
                    'lang': this.lang,
                    'units' : this.units,
                    lon,
                    lat

                },
              });
    
            const response = await instance.get();
    
            return response.data;
            
        }catch (err){
            throw err;
        }
    }
}

module.exports = WeatherRepository