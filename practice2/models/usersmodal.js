const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    name: String,
    isActive: Boolean,
    registered: Date,
    age: Number,
    gender: String,
    eyeColor: String,
    favoriteFruit: String,
    company: {
        title: String,
        email: String,
        phone: String
    },
    location: {
        country: String,
        address: String
    },
    tags: [String]
});

const User = mongoose.model('User', UserSchema)


module.exports = User