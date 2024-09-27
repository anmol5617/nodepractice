const mongoose = require('mongoose');

const appUserSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
        unique: true, // Ensure each user_id is unique
    },
    user_name: {
        type: String,
        required: true,
        trim: true,
    },
    device_type: {
        type: String,
        required: true,
        enum: ['iOS', 'Android'], // Restrict to 'iOS' or 'Android'
    },
});

const appUser =mongoose.model('AppUser', appUserSchema);
module.exports = appUser
