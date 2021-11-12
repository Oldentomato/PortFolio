const express = require('express')
const router = express.Router()
const {Board} = require('../models/Boards')

router.get('/',(req,res)=>{
    return res.status(200).json({success: true})
})

module.exports = router