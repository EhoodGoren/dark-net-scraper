const axios = require('axios');
const cheerio = require('cheerio');

const pageUrl = 'http://strongerw2ise74v3duebgsvug4mehyhlpa7f6kfwnas7zofs3kov7yd.onion/all'

const fetchPosts = async () => {
    const pageFetch = await axios.get(pageUrl, {
        proxy: {
            host: 'localhost',
            port: 8118
        }
    });
    const $ = cheerio.load(pageFetch.data, {
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

module.exports = fetchPosts;
