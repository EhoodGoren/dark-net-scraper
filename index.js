const axios = require('axios');
const cheerio = require('cheerio');
const { pageMock } = require('./pageMock');

const fetchPosts = async () => {
    const $ = cheerio.load(pageMock, {
        xml: {
            normalizeWhitespace: true,
        }
    });
    const posts = $('#list > .row > .col-sm-12');
    return posts.map((_i, post) => {
        const title = $(post).find('h4').text();
        const author = $(post).find('.col-sm-6').text()
        const contentParts = $(post).find('ol > li');
        const content = contentParts.map((_i, sentence) => {
            return $(sentence).text();
        }).get().join('\n');
        return { title, content, author };
    }).get();
}

const getPosts = async () => {
    const posts = await fetchPosts();
    console.log(posts);
}
getPosts();
