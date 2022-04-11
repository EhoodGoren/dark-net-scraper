const mongoose = require('mongoose');
const Post = require('../models/post');

const savePostsToDb = async (posts) => {
    try {
        await Post.insertMany(posts);
    } catch (error) {
        throw error;
    }
};

module.exports = savePostsToDb;
