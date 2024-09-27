const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    post_id: {
        type: String,
        required: true,},
    user_id: {
        type: String,
        required: true,
        ref: 'AppUser', // Reference to AppUser model
    },
    content: {
        type: String,
        required: true,
        trim: true,
    },
    date_posted: {
        type: Date,
        default: Date.now, // Automatically set the date when the post is created
    },
});

const Post=mongoose.model('Post', postSchema);

module.exports = Post
