const Post = require('../models/post');

const findLatestBlog = async () => {
    const latestBlog = await Post.find().sort({ date: -1 }).limit(1);
    return latestBlog[0];
};

const filterExistingPosts = async (posts) => {
    const latestBlog = await findLatestBlog();
    if (!latestBlog) return posts;
    return posts.filter((post) => {
        return post.date > latestBlog.date;
    });
};

module.exports = filterExistingPosts;
