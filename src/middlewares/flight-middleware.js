const {clientErrorCodes} = require('../utils/error-codes')

const validationCreateFlight = (req,res,next)=>{
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price 
    ){
        return res.status(clientErrorCodes.BAD_REQUEST).json({
            data:{},
            success:false,
            message:"bad request please check",
            error:"missing mandatory properties in flight"
        })
    }

    next();

}

module.exports = {
    validationCreateFlight
}