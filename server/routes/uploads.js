const express = require('express')
const router = express.Router()
const {Board} = require('../models/Boards')
const multer = require('multer')
const path = require('path')

var storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'uploads/')
    },
    filename: function(req,file,cb){
        cb(null,`${Date.now()}_${file.originalname}`)
    }
})

const fileFilter = function(req,file,callback){
    var ext = path.extname(file.originalname)
    // if(ext !== '.jpg' || ext !== '.jpeg')
    //     return callback(res.send('only jpg allowed'),false)
    
    callback(null,true)
}

var upload = multer({
    storage: storage,
    fileFilter: fileFilter
}).single("file")


router.post('/uploadimg',(req,res)=>{
    upload(req,res,err=>{
        if(err)
            return res.json({success: false, err})
        else
            return res.json({success:true, filePath:res.req.file.path, fileName:res.req.file.filename})
    })
})


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

router.post('/getpost',(req,res)=>{
    Board.findOne({_id: req.body.BoardID},(err,board)=>{
        if(err) return res.json({success:false, err})
        return res.status(200).json({success: true, board})
    })
})



module.exports = router