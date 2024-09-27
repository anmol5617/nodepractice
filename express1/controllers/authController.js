const jwt = require('jsonwebtoken')
const user = require("./../models/userModel")
const User = require('./../models/userModel')

const signToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    })
}

exports.signUp = async (req, res) => {
    try {
        const newUser = await user.create(req.body)
        const token = signToken(newUser._id)

        res.status(200).json({
            status: 'sucesss',
            message: "new user signed up ",
            token,
            data: {
                user: newUser
            }
        })
    } catch (err) {
        console.log(err)
        res.status(400).json({
            status: 'failed',
            message: "new user something went wrong"
        }
        )
    }
}
exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body

        //1 check if email and password exist
        if (!email || !password) {
            return next((err) => res.status(404).json({ message: "need email and password to proceed " }))
        }
        //2check if user exists and pasword is correct
        const user = await User.findOne({ email: email }).select('+password')
        console.log(user)

        if (!user || !await user.correctPassword(password, user.password)) {
            return next((err) => res.statue(401).json({ message: "incorrect password or email" }))
        }

        //if everything i ok send token to the client 
        const token = signToken(user._id)
        res.status(200).json({
            status: "loged in",
            token,
            data: { user }
        })
    } catch (err) {
        res.status(200).json({
            status: "failed",
            message: "something went wromg login"
        })
    }
}   