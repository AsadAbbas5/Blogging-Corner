const mongoose = require("mongoose")
const moment = require('moment/moment')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    createdon: {
        type: Date,
        default: moment().format("YYYY-MM-DD")
    }
});

const User = mongoose.model("users", userSchema)

module.exports = User;