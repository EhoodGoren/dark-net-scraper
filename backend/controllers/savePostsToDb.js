const Post = require('../models/post');

const savePostsToDb = async (posts) => {
    try {
        await Post.insertMany(posts);
    } catch (error) {
        console.log(error);
    }
};

module.exports = savePostsToDb;
