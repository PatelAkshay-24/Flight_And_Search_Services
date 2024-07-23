const { Airplane } = require("../models/index");

class AirplaneRepository {

  //====================getAirplane==================//
  async getAirplane(id) {
    try {
      const airplane = await Airplane.findByPk(id);
      return airplane;
    } catch (error) {
      console.log("something went wrong in Airplane Repository");
      throw { error };
    }
  }
}

module.exports = AirplaneRepository