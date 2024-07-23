const express = require('express')
const router = express.Router()
//import v1 folder
const v1ApiRoutes = require('./v1')

//router Middleware
router.use('/v1',v1ApiRoutes)


module.exports = router
