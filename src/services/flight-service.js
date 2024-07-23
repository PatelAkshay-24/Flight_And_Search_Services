//import Repository
const { FlightRepository, AirplaneRepository } = require("../repository/index");

//Import Utils
const { compareTime } = require("../utils/helper");

//Services
class FlightService {


  constructor() {
    this.airplaneRepository = new AirplaneRepository();
    this.flightRepository = new FlightRepository();
  }

  //=======================create=========================//

  async createFlight(data) {
    try {
      if (!compareTime(data.arrivalTime, data.departureTime)) {
        throw { error: "arrival time is not less then departuretime" };
      }
      const airplane = await this.airplaneRepository.getAirplane(
        data.airplaneId
      );

      const flight = await this.flightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });
      console.log(flight);
      return flight;
    } catch (error) {
      console.log("something went wrong in FlightService ");
      throw { error };
    }
  }

  //=======================getFlight========================//

  async getFlight(flightId) {
    try {
      const flight = await this.flightRepository.getFlight(flightId);
      return flight;
    } catch (error) {
      console.log("something went wrong in flight service");
      throw { error };
    }
  }

  //=======================getFlights======================//
  
  async getFlights(filter) {
    try {
      const flights = await this.flightRepository.getFlights(filter);
      return flights;
    } catch (error) {
      console.log("something went wrong in flight Service");
      throw { error };
    }
  }

  //======================update Flight===================//
  
  async updateFlight(data, flightId) {
    try {
      const flight = await this.flightRepository.updateFlight(data, flightId);
      return flight;
    } catch (error) {
      console.log("something went wrong in flight Service");
      throw { error };
    }
  }

  //======================delete flights=====================//
  
  async deleteFlight(flightId) {
    try {
      const flight = await this.flightRepository.deleteFlight(flightId);
      return flight;
    } catch (error) {
      console.log("something went wrong in flight service");
      throw { error };
    }
  }
}

module.exports = FlightService;
