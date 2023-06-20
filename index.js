<<<<<<< Updated upstream
const express = require("express")
const mongoose = require('mongoose')

const app  = express()

app.listen(5000,()=>{
    console.log("server as listing to 5000")
    
})
mongoose.connect('mongodb://127.0.0.1/bloging_corner').then(()=>{
    console.log('database conect succefully')
}).catch(err=>{
    console.log(err)
})
=======
const express = require('express')

const app = express()

app.listen(5000,()=>{
    console.log('app listen to at 5000')
})
>>>>>>> Stashed changes
