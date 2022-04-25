const express = require('express');
const fetchPosts = require('../controllers/fetchPosts');
const savePostsToDb = require('../controllers/savePostsToDb');
const formatPosts = require('../controllers/formatPosts');
const getPostsByQuery = require('../controllers/getPostsByQuery');
const filterNonExistingPosts = require('../controllers/filterExistingPosts');
const addLabelsToPosts = require('../controllers/analyze/analyzePosts');

const router = express.Router();

router.get('/', async (req, res) => {
    const posts = await fetchPosts();
    const postsWithLabels = addLabelsToPosts(posts);
    const nonExistingPosts = await filterNonExistingPosts(postsWithLabels);
    if (nonExistingPosts.length > 0) {
        await savePostsToDb(nonExistingPosts);
    }
    const formatedPosts = formatPosts(postsWithLabels);
    res.send(formatedPosts);
});

router.get('/search/:query', async (req, res) => {
    const { query } = req.params;
    const matchingPosts = await getPostsByQuery(query);
    const formatedPosts = formatPosts(matchingPosts);
    res.send(formatedPosts);
});

module.exports = router;
