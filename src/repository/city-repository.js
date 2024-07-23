const { Op } = require("sequelize");
const { City } = require("../models/index");

//Repository
class CityRepository {
  //follow to crud opreation in city model

  //=====================create=======================//
 
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.log("somthing went wrong in city repository");
      throw { error };
    }
  }

  //======================Delete======================//
  
  async deleteCity(cityId) {
    try {
      const city = await City.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (error) {
      console.log("somthing went wrong in city repositoty");
      throw { error };
    }
  }

  //======================getCity=====================//
  
  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log("somthing went wrong in city repository");
      throw { error };
    }
  }

  //=================getAllCities also use Search Filters==================//
 
  async getAllCities(filter) {
    try {
      if (filter.name) {
        const cities = await City.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
      }
      return cities;
      const cities = await City.findAll();
      return cities;
    } catch (error) {
      console.log("somthing went wrong in city repository");
      throw { error };
    }
  }

  //======================update======================//
  
  async updateCity(cityId, data) {
    //we can use also this mettthod
    // try{
    //   const city = await City.update(data,{
    //     where:{
    //       id:cityId
    //     }
    //   })
    //we can also use this method
    const city = await City.findByPk(cityId);
    city.name = data.name;
    await city.save();
    return city;
  }
  catch(error) {
    console.log("somthing went wrong in city repository");
    throw { error };
  }
}

module.exports = CityRepository;
