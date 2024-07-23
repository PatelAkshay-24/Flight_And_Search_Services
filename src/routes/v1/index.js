const express = require('express')
const router = express.Router()

//import controller
const cityController = require('../../controllers/city-controller')
const flightController = require('../../controllers/flight-controller')
const airportController = require('../../controllers/airport-controller')

//Import middlewares
const {flightMiddleware} = require('../../middlewares/index')

//========================Routers===========================//

//city
router.post('/city/create',cityController.create)
router.delete('/city/delete/:id',cityController.destroy)
router.patch('/city/update/:id',cityController.update)
router.get('/city/find/:id',cityController.getCity)
router.get('/city/findAll',cityController.getAllCities)

//flight
router.post('/flight/create',flightController.create)
router.get('/flight/find/:id',flightController.getFlight)
router.get('/flight/findAll',flightController.getFlights)
router.patch('/flight/update/:id',flightController.updateFlight)
router.delete('/flight/delete/:id',flightController.deleteFlight)

//airport
router.post('/airport/create',airportController.create)
router.get('/airport/find/:id',airportController.getData)
router.get('/airport/findAll',airportController.getAllData)
router.patch('/airport/update/:id',airportController.update)
router.delete('/airport/delete/:id',airportController.destroy)

//export module
module.exports = router
