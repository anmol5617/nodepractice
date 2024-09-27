const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'you must have a name '],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'you must have an email'],
        lowercase: true,
        unique: true,
        validate: [validator.isEmail, 'plz provide a valid email']
    },
    photo: String,
    password: {
        type: String,
        required: [true, 'password is required '],
        minLength: 8,
        select: false
    },
    confirmPassword: {
        type: String,
        required: [true, 'confirm your password '],
        validate: {
            validator: function (el) {
                return el === this.password
            },
            message: "passwords are not same "
        }

    }

})
userSchema.pre('save', async function (next) {
    //this will only run if  password is actually modified 
    if (!this.isModified('password')) return next()
    ///hash the password with cost of 12
    this.password = await bcrypt.hash(this.password, 12)
    //deleting the password confirm field so it does not go to the data base it was just made to validate the password while signup
    this.confirmPassword = undefined
    next()
})

userSchema.methods.correctPassword = async function (candidatePassword, userpassword) {
    return await bcrypt.compare(candidatePassword, userpassword)
}

const User = mongoose.model('User', userSchema)

module.exports = User