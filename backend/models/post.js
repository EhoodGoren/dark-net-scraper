const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    labels: {
        type: [String],
        required: true,
    },
});

module.exports = mongoose.model('Post', postSchema);
