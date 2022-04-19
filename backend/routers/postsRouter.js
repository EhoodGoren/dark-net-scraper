const express = require('express');
const fetchPosts = require('../controllers/fetchPosts');
const savePostsToDb = require('../controllers/savePostsToDb');
const formatPosts = require('../controllers/formatPosts');
const getPostsByQuery = require('../controllers/getPostsByQuery');

const router = express.Router();

router.get('/', async (req, res) => {
    const posts = await fetchPosts();
    await savePostsToDb(posts);
    const formatedPosts = formatPosts(posts);
    res.send(formatedPosts);
});

router.get('/search/:query', async (req, res) => {
    const { query } = req.params;
    const matchingPosts = await getPostsByQuery(query);
    const formatedPosts = formatPosts(matchingPosts);
    res.send(formatedPosts);
});

module.exports = router;
