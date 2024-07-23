
const { response } = require('express');
const {CityService} = require('../services/index')
const {successCodes} = require('../utils/error-codes')
const cityservices = new CityService();


//POST. -> /city/create
const create = async (req,res)=>{
    try{

        const city = await cityservices.createCity(req.body);
        return res.status(successCodes.CREATED).json({
            data:city,
            success:true,
            message:'city is create successfully',
            error:{}
        })

    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'somthing went wrong city is not created',
            error:error
        })
    }

    
}

//DELETE. -> /city/:id
const destroy = async (req,res)=>{
    try{
        const response = await cityservices.deleteCity(req.params.id);
        return res.status(successCodes.OK).json({
            data:response,
            success:true,
            message:'city is successfully delete',
            error:{}
        })

    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'something went wrong city is not delete',
            error:error
        })
    }
    
}

//PATCH/PUT. -> /city
const update = async (req,res)=>{
    try{
        const city = await cityservices.updateCity(req.params.id,req.body);
        return res.status(successCodes.OK).json({
            data:city,
            success:true,
            message:'city is successfully update',
            error:{}
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'something went wrong city is not update3',
            error:error
        })
    }
    
}

//GET. -> /city/:id
const getCity = async (req,res)=>{
    try{
         const city = await cityservices.getCity(req.params.id);
         return res.status(successCodes.OK).json({
            data:city,
            success:true,
            message:' city is available',
            error:{}

         })

    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'data is not show',
            error:error
        })
    }
}

//GET. -> /city/findAll
const getAllCities = async (req,res)=>{
    try{
        
    const cities = await cityservices.getAllCities(req.query);
    return res.status(successCodes.OK).json({
        data:cities,
        success:true,
        message:"all cities is show",
        error:{}
    })

    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"somthing went wrong at city controller layer ",
            error:{error}
        })
    }
}

module.exports = {
    create,
    destroy,
    update,
    getCity,
    getAllCities

}