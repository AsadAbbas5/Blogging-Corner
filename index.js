const express   = require('express')
const mongoose = require("mongoose")
const app = express()

mongoose.connect('mongodb://127.0.0.1/BlogggingCorner').then(()=>{
    console.log("dataabase connect successfully")
}).catch(err=>{
    console.log(err)
})
app.listen(5000,()=>{
    console.log("app server listing to 5000")
})