const { where } = require("sequelize");

class crudRepository {
  constructor(model) {
    this.model = model;
  }

  //=================create==========================//
  
  async create(data) {
    try {
      const result = await this.model.create(data);
      return result;
    } catch (error) {
      console.log("something went wrong in crud repository");
      throw { error };
    }
  }

  //=================Delete=========================//
  
  async destroy(modelId) {
    try {
      const result = await this.model.destroy({
        where: {
          id: modelId,
        },
      });
      return result;
    } catch (error) {
      console.log("something went wrong in crud repository");
      throw { error };
    }
  }

  //=================getData=======================//
  
  async getData(modelId) {
    try {
      const result = await this.model.findByPk(modelId);
      return result;
    } catch (error) {
      console.log("something went wrong in crud repository");
      throw { error };
    }
  }

  //================getAllData===================//
  
  async getAllData() {
    try {
      const result = await this.model.findAll();
      return result;
    } catch (error) {
      console.log("something went wrong in crud repository");
      throw { error };
    }
  }

  //================updateData===================//
  
  async updateData(data, modelId) {
    try {
      const result = await this.model.update(data, {
        where: {
          id: modelId,
        },
      });
      return result;
    } catch (error) {
      console.log("something went wrong in crud repository");
      throw { error };
    }
  }
}

module.exports = crudRepository;