const Post = require('../../models/post');
const addLabelsToPosts = require('../analyze/analyzePosts');

const addLabelsToSavedPosts = async () => {
    const posts = await Post.find();
    const postsWithLabels = addLabelsToPosts(posts);
    await Promise.all(
        postsWithLabels.map(async (post, index) => {
            await post.save();
        })
    );
};

addLabelsToSavedPosts();
