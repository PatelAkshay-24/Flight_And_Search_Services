class crudService {
  constructor(repository) {
    this.repository = repository;
  }

  //===========================create=============================//
  
  async create(data) {
    try {
      const result = await this.repository.create(data);
      return result;
    } catch (error) {
      console.log("something went wrong in crud services");
      throw { error };
    }
  }

  //===========================Delete============================//
  
  async destroy(id) {
    try {
        const result = await this.repository.destroy(id);
        return result;
    } catch (error) {
      console.log("something went wrong in crud repository");
      throw { error };
    }
  }

  //==========================GetData==========================//
  
  async getData(id) {
    try {
        const result = await this.repository.getData(id);
        return result;
    } catch (error) {
      console.log("something went wrong in crud services");
      throw { error };
    }
  }

  //=========================GetAllData=======================//
  
  async getAllData() {
    try {
        const result = await this.repository.getAllData();
        return result;
    } catch (error) {
      console.log("something went wrong in crud services");
      throw { error };
    }
  }

  //========================UpdateData========================//
  
  async updateData(data, id) {
    try {
        const result = await this.repository.updateData(data,id);
        return result;
    } catch (error) {
      console.log("something went wrong in crud services");
      throw { error };
    }
  }
}

module.exports = crudService;
