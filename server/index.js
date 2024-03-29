const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')
const config = require('./config/key.js')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

app.get('/test',(req,res)=>res.send('TEST'))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use('/api/board', require('./routes/uploads'))
app.use('/api/modify',require('./routes/modify'))
app.use('/uploads',express.static('uploads'))

mongoose.connect(config.mongoURI,{
    useNewUrlParser: true, useUnifiedTopology: true
}).then(()=> console.log('MongoDB Connected...'))
  .catch(err=> console.log(err))

app.listen(port,()=>{ console.log(`PorfolioApp listening on port ${port}!`)})

module.exports = app