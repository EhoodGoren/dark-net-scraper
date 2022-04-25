const express = require('express');
const fetchPosts = require('../controllers/scraping/fetchPosts');
const savePostsToDb = require('../controllers/db-entities-management/savePostsToDb');
const formatPosts = require('../controllers/formatPosts');
const getPostsByQuery = require('../controllers/db-entities-management/getPostsByQuery');
const filterNonExistingPosts = require('../controllers/filterExistingPosts');
const addLabelsToPosts = require('../controllers/analyze/analyzePosts');
const getStats = require('../controllers/getStats');

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

router.get('/stats', async (req, res) => {
    const stats = await getStats();
    res.send(stats);
});

module.exports = router;
