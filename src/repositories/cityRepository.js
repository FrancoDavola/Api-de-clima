const axios = require('axios');
const config = require('../config')


class CityRepository {

    constructor() {
        this.path = config.apiWeather.path
        this.limit = 5
        this.language = 'es',
        this.token = config.apiWeather.key

    }

    async  foundCities(city){

        try{
            const instance = axios.create({
                baseURL: `${this.path}${city}.json`,
                params: {
                    'access_token': this.token,
                    'limit': this.limit,
                    'language': this.language
                },
              });
    
            const response = await instance.get();
    
            return response.data;
            
        }catch (err){
            throw err;
        }
    }

}

module.exports = CityRepository