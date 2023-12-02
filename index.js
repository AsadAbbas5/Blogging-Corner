
require('dotenv').config()

const express = require('express')
const mongoose = require("mongoose")
const userRoutes = require("./controllers/users")
const app = express()
const cors = require("cors")
mongoose.connect('mongodb://127.0.0.1/BlogggingCorner').then(() => {
    console.log("dataabase connect successfully")
}).catch(err => {
    console.log(err)
})
app.use(cors());
app.use(express.json())
app.use('/api/user', userRoutes)
app.use('/api/addpost/add' ,userRoutes)
app.listen(5000, () => {
    console.log("app server listing to 5000")
})
