const AirportService = require("../services/airport-service");
const {successCodes} = require('../utils/error-codes')
const airportService = new AirportService();

//==========================Post:->/airport/create==============================//

const create = async (req, res) => {
  try {
    const airport = await airportService.create(req.body);
    return res.status(successCodes.CREATED).json({
      data: airport,
      success: true,
      message: "airport is successfully created",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      Message: "something went wrong in airport controller",
      error: { error },
    });
  }
};

//===========================Delete:->/airport/delete================================//

const destroy = async (req, res) => {
  try {
    const airport = await airportService.destroy(req.params.id);
    return res.status(successCodes.OK).json({
      data: airport,
      success: true,
      message: "airport is successfully deleted",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "something went wrong in airport controller",
      error: { error },
    });
  }
};

//================================get:->/airport/find===========================//

const getData = async (req, res) => {
  try {
    const airport = await airportService.getData(req.params.id);
    return res.status(successCodes.OK).json({
      data: airport,
      success: true,
      message: "airport is visible",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "something went wrong in airport controller",
      error: { error },
    });
  }
};

//===============================get:->/airport/findAll========================//

const getAllData = async (req, res) => {
  try {
    const airport = await airportService.getAllData();
    return res.status(successCodes.OK).json({
      data: airport,
      success: true,
      message: "airports is visible",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "some thing went wrong in airport controller",
      error: { error },
    });
  }
};

//==============================get:->/airport/update=========================//

const update = async (req, res) => {
  try {
    const airport = await airportService.updateData(req.body, req.params.id);
    return res.status(successCodes.OK).json({
      data: airport,
      success: true,
      message: "airpport is successfully updated",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "something went wrong in airport controller",
      error: { error },
    });
  }
};

module.exports = {
  create,
  destroy,
  getData,
  getAllData,
  update,
};
