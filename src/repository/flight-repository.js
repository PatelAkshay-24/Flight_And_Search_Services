const { Flight } = require("../models/index");
const { Op, where } = require("sequelize");
class FlightRepository {
  
  
  //create Filter
  #createFilter(data) {
    let filter = {};
    if (data.arrivalAirportId) {
      filter.arrivalAirportId = data.arrivalAirportId;
    }
    if (data.departureAirportId) {
      filter.departureAirportId = data.departureAirportId;
    }
    if (data.minPrice && data.maxPrice) {
      Object.assign(filter, 
        {[Op.and]: [
          {price: { [Op.lte]: data.maxPrice } },
          {price: { [Op.gte]: data.minPrice } }
        ]});
    }
    if (data.minPrice) {
      Object.assign(filter, { price: { [Op.gte]: data.minPrice } });
    }
    if (data.maxPrice) {
      Object.assign(filter, { price: { [Op.lte]: data.maxPrice } });
    }
    return filter;
  }

  //===============================create========================//
  
  async createFlight(data) {
    try {
      const flight = await Flight.create(data);
      return flight;
    } catch (error) {
      console.log("something went wrong in FlightRepository");
      throw { error };
    }
  }

  //============================getflight========================//
  
  async getFlight(flightId) {
    try {
      const flight = await Flight.findByPk(flightId);
      return flight;
    } catch (error) {
      console.log("something went wrong in flightRepository layor");
      throw { error };
    }
  }

  //============================getFlights=======================//
  
  async getFlights(filter) {
    try {
      const filterobject = this.#createFilter(filter);
      const flights = await Flight.findAll({
        where: filterobject,
      });
      return flights;
    } catch (error) {
      console.log("something went wrong in flight repository");
      throw { error };
    }
  }

  //==========================updateFlight=======================//
  
  async updateFlight(data, flightId) {
    try {
      const flight = await Flight.update(data, {
        where: {
          id: flightId,
        },
      });
      return flight;
    } catch (error) {
      console.log("something went wrong in flight Repository");
      throw { error };
    }
  }

  //=========================Delete Flights=======================//
  
  async deleteFlight(flightId) {
    try {
      const flight = await Flight.destroy({
        where: {
          id: flightId,
        },
      });
      return flight;
    } catch (error) {
      console.log("something went wrong in flight repository");
      throw { error };
    }
  }
}

module.exports = FlightRepository;
