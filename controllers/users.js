const exress = require("express")
const router = exress.Router()
const cors = require("cors")
const bcrypt = require("bcrypt")
const User = require("../modules/User")
const { createToken } = require("../utils/Utils")

const veryfiUser = require("../middleWares/veryfiUser")


router.use([ "/add",'/profile',], veryfiUser)


// User signup
router.post("/signup", async (req, res) => {
    console.log("consoling the Body from the signup", req.body)
    try {
        if (!req.body.email)
            throw new Error("Email is required")
        if (!req.body.password)
            throw new Error("password is required")
        const userExsist = await User.findOne({ email: req.body.email })
        if (userExsist)
            throw new Error("Email Is Already registerd")
        const hashPassword = await bcrypt.hash(req.body.password, 10)
        console.log("Consoling the Hashed Password", hashPassword)
        const data = {
            email: req.body.email,
            password: hashPassword
        }

        const user = new User(data)
        await user.save()
        const signupuser = await User.findOne({ email: req.body.email })
        console.log("Consoling the Signup user", signupuser)
        res.status(200).send({
            success: true,
            user: signupuser
        })

    } catch (error) {
        res.status(400).send(error)

    }
})

// user signin
router.post("/signin", async (req, res) => {
    // console.log("Consoling the Body from the signin", req.body)
    try {
        if (!req.body.email)
            throw new Error("Email is required")
        if (!req.body.password)
            throw new Error("password is required")
        const user = await User.findOne({ email: req.body.email })
        console.log("Consoling user 1", user)
        if (!user) {
            throw new Error("Email or password invalied")
        }
        const ismatchpassword = await bcrypt.compare(req.body.password, user.password)

        if (!ismatchpassword) {
            throw new Error("email or password required")
        }
        console.log("Consoling user 2", user)
        const token = await createToken(user, 24 * 60)
        console.log(token)
        res.status(200).send({ user, token })
    } catch (error) {
        console.log(error)
        res.status(400).send(error)

    }
})

router.get("/profile", (req, res) => {

    if (!req.user) throw new Error("invalid request")
    res.status(200).send({ profileLoaded: true, user: req.user })
})

router.post("/add" ,(req,res)=>{     
       console.log('sdsad')

    try{
    }catch{

    }
})



module.exports = router