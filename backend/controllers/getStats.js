const Post = require('../models/post');

const getStats = async () => {
    const categories = {};
    const posts = await Post.find();
    posts.forEach((post) => {
        const postLabels = post.labels;
        if (postLabels.length > 0) {
            postLabels.forEach((category) => {
                categories[category] = categories[category]
                    ? categories[category] + 1
                    : 1;
            });
        }
    });
    return categories;
};

module.exports = getStats;
