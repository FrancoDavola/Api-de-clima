const CityRepository = require('../repositories/cityRepository')
const respository = new CityRepository()


const foundCities = async (city) => {

    const cities = await respository.foundCities(city)

   return cities.features.map( e => {
        return {
            id : e.id,
            name : e.place_name,
            log : e.geometry.coordinates[0],
            lat : e.geometry.coordinates[1]
        }
    })

    

}

module.exports = {
    foundCities
}