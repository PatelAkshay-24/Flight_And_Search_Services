"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    
    //define relationship (like;one to one,many to one etc..)
    
    static associate(models) {
      // define association here
      this.hasMany(models.Airport, {
        foreignKey:"cityId"
      })
    }
  }
  City.init(  
    {
      name: { 
        type: DataTypes.STRING,
        unique:true,
        allowNull:false
      }
    },
    {
      sequelize,
      modelName: "City",
    }
  );
  return City;
};
