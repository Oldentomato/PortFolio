const express = require('express')
const router = express.Router()
const {Board} = require('../models/Boards')

router.post('/readboard',(req,res)=>{
    Board.find({type: req.body.type},(err,board)=>{
        if(err) return res.json({success: false, err})
        return res.status(200).json({success: true, board})
    })
})

router.post('/createcontent',(req,res)=>{
    const board = new Board(req.body)
    
    board.save((err)=>{
        if(err) return res.json({success:false, err})
        return res.status(200).json({success:true})
    })
})


module.exports = router