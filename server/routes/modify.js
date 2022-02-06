const express = require('express')
const router = express.Router()
const {Board} = require('../models/Boards')
const multer = require('multer')
const path = require('path')
const fs = require('fs')


router.post('/modifypost',(req,res)=>{
    Board.findByIdAndUpdate({_id: req.body.BoardID},
        {   title: req.body.title,
            content: req.body.content},
            (err,result)=>{
                if(err) return res.json({success: false, err})
                return res.status(200).json({success:true})
            })
})

router.post('/deletepost',(req,res)=>{
    Board.findByIdAndDelete({_id: req.body.BoardID},
        (err)=>{
            if(err) return res.json({success: false, err})
            return res.status(200).json({success: true})
        })
})

router.post('/deleteImg',(req,res)=>{
    fs.unlink(req.body.FilePath,(err)=>{
        if(err){
            console.log('사진 삭제 에러 : '+ err)
        }
        return res.status(200).json({success:true})
    })
})

module.exports = router