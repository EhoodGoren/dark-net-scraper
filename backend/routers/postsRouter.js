const express = require('express');
const fetchPosts = require('../controllers/fetchPosts');
const savePostsToDb = require('../controllers/savePostsToDb');
const formatPosts = require('../controllers/formatPosts');

const router = express.Router();

router.get('/', async (req, res) => {
    const posts = await fetchPosts();
    await savePostsToDb(posts);
    const formatedPosts = formatPosts(posts);
    res.send(formatedPosts);
});

module.exports = router;
