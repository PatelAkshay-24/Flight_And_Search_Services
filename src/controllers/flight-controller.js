const { FlightService } = require("../services/index");
const {successCodes,serverErrorCodes} = require('../utils/error-codes')
const flightService = new FlightService();

//post:->/flight/create
const create = async (req, res) => {
  try {
    const flight = await flightService.createFlight(req.body);
    return res.status(successCodes.CREATED).json({
      data: flight,
      success: true,
      message: "flight is successfully created",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(serverErrorCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      success: false,
      message: "flights is not created",
      error: error,
    });
  }
};

//GET:->/flight/find
const getFlight = async (req, res) => {
  try {
    const flight = await flightService.getFlight(req.params.id);
    return res.status(successCodes.OK).json({
      data: flight,
      success: true,
      message: "flight are visible",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(serverErrorCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      success: false,
      message: "something went wrong in flight controller",
      error: { error },
    });
  }
};

//GET:->/flight/findAll
const getFlights = async (req, res) => {
  try {
    const flights = await flightService.getFlights(req.query);
    return res.status(successCodes.OK).json({
      data: flights,
      success: true,
      message: "get all Flights",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "something went wrong in flight controller",
      error: { error },
    });
  }
};

//update:->/flight/update
const updateFlight = async (req, res) => {
  try {
    const flight = await flightService.updateFlight(req.body, req.params.id);
    return res.status(successCodes.OK).json({
      data: flight,
      success: true,
      message: "flight is successfully updated",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "something went wrong in flight controller",
      error: { error },
    });
  }
};

//Delete:->/flight/delete
const deleteFlight = async (req, res) => {
  try {
    const flight = await flightService.deleteFlight(req.params.id);
    return res.status(successCodes.OK).json({
      data: flight,
      success: true,
      message: "flight is deleted",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "flight is not deleted",
      error: { error },
    });
  }
};


module.exports = {
  create,
  getFlight,
  getFlights,
  updateFlight,
  deleteFlight
};
