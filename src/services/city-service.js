
const {CityRepository} = require('../repository/index')

class CityService{

    constructor(){
        this.cityrepository = new CityRepository()
    }

    //services//

    //==================Create Service===================//
    
    async createCity(data)// data means key value like("name":"ahmedabad")
    {
        try{
            const city = await this.cityrepository.createCity(data)
            return city;
        }catch(error){
            console.log("somthing went wrong at city service layer");
            throw {error}   
        }
    }

    //===================Delete Service=================//
    
    async deleteCity(cityId){
       try{
        const response = await this.cityrepository.deleteCity(cityId);
        return response;

       }catch(error){
        console.log("somthing went wrong at city service layer");
        throw {error}
       }
    }

    //===================update Service================//
    
    async updateCity(cityId,data){
        try{
            const city = await this.cityrepository.updateCity(cityId,data)
            return city;
        }catch(error){
            console.log("somthing went wrong at city service layer");
            throw {error};
        }
    }

    //===================getcity Service=================//
    
    async getCity(cityId){
        try{
            const city = await this.cityrepository.getCity(cityId);
            return city;
        }catch(error){
            console.log("somthing went wrong at city service layer");
            throw {error};
        }
    }

    //==================getAll Cities Service=============//
    
    async getAllCities(filter){
        try{
            const cities = await this.cityrepository.getAllCities({name:filter.name});
            return cities;
        }catch(error){
            console.log("something went wrong at city service layer");
            throw  {error}
        }
    }
    
}


//export Service
module.exports = CityService