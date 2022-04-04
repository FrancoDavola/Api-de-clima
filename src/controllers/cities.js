const express = require('express')
const Success = require('../handler/successHandler')
const {foundCities} = require('../service/cityService')

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const cities = async (req, res, next) =>  {
    try{
        const cities = await foundCities(req.params.city)
        const success = new Success(cities)
            res.json(success)
    } catch(err){
        next(err)
    }
    
}





module.exports = {
    cities,
}