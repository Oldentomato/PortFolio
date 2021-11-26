const mongoose = require('mongoose')


const BoardSchema = mongoose.Schema({
    writer:{
        type: String
    },
    title:{
        type: String,
        maxLength: 15
    },
    contnet:{
        type: String,
        maxLength: 100
    },
    type:{
        type: String,
        maxLength: 15
    }
},{timestamps: true})

const Board = mongoose.model("Board", BoardSchema)

module.exports = {Board}
