const express = require('express');
const fetchPosts = require('../controllers/fetchPosts');
const savePostsToDb = require('../controllers/savePostsToDb');

const router = express.Router();

router.get('/', async (req, res) => {
    const posts = await fetchPosts();
    await savePostsToDb(posts);
    res.send(posts);
});

module.exports = router;
