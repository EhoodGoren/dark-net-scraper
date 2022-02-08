const express = require('express');
const fetchPosts = require('../fetchPosts');

const router = express.Router();

router.get('/', async (req, res) => {
    const posts = await fetchPosts();
    res.send(posts);
});

module.exports = router;
