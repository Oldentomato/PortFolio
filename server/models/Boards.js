const mongoose = require('mongoose')


const BoardSchema = mongoose.Schema({
    title:{
        type: String,
        maxLength: 15
    },
    content:{
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
