const crudService = require('../services/crud-service')
const {AirportRepository} = require('../repository/index')


class AirportService extends crudService{
    constructor(){
        const airplaneRepository = new AirportRepository();
        super(airplaneRepository);
    }
}

module.exports = AirportService;