const jwt = require("jsonwebtoken")
const moment = require("moment/moment")

const createToken = (user, expireTimeInHours = 100) => {
    const payload = {
        uId: user.id,
        iat: moment().unix(),
        exp: moment().add(expireTimeInHours, "hours",).unix(),
        claims: {
            email: user.email,

        }

    }
    const token = new Promise((resolve, reject) => {
        jwt.sign(payload, process.env.JWT_TOKEN_KEY, (error, token) => {
            if (error) {
                reject(error)
            }
            resolve(token)
        })
    })
    return token
}

module.exports = {
    createToken,
}