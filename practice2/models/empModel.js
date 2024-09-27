const mongoose = require('mongoose')

const employeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    employecode: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    }
})
const Emp = mongoose.model('Emp', employeSchema)


module.exports = Emp