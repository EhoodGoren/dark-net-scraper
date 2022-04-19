const Post = require('../models/post');

const getPostsByQuery = async (query) => {
    const queryRegex = new RegExp(query, 'i');
    const matchingPosts = await Post.find().or([
        { content: queryRegex },
        { title: queryRegex },
        { author: queryRegex },
    ]);
    return matchingPosts;
};

module.exports = getPostsByQuery;
