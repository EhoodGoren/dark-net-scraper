require('dotenv').config();
const axios = require('axios');
const cheerio = require('cheerio');
const { pageMock } = require('../mocks/pageMock');

const pageUrl =
    'http://strongerw2ise74v3duebgsvug4mehyhlpa7f6kfwnas7zofs3kov7yd.onion/all';

const fetchPosts = async () => {
    const options = process.env.NODE_ENV
        ? {
              proxy: {
                  host: 'localhost',
                  port: 8118,
              },
          }
        : {};
    try {
        const pageFetch = await axios.get(pageUrl, options);
        return extractContent(pageFetch);
    } catch (error) {
        console.log(error);
        return extractContent({
            data: pageMock,
        });
    }
};

const extractContent = (page) => {
    const $ = cheerio.load(page.data, {});
    const posts = $('#list > .row:not(.text-center) > .col-sm-12');
    return posts
        .map((_i, post) => {
            const title = $(post).find('h4').text();
            const source = $(post).find('.col-sm-6').text();
            const { date, author } = deconstructSource(source);
            const contentParts = $(post).find('ol > li');
            const content = contentParts
                .map((_i, sentence) => {
                    return $(sentence).text();
                })
                .get()
                .join('\n');
            return { title, content, author, date };
        })
        .get();
};

const deconstructSource = (source) => {
    const dateRegex =
        /[0-9]{2} [a-zA-Z]+ [0-9]{4}, [0-9]{2}:[0-9]{2}:[0-9]{2} [a-zA-Z]+/;
    const dateMatch = source.match(dateRegex);
    const date = new Date(dateMatch[0]);
    const author = source.slice(0, dateMatch.index - 3);
    return { date, author };
};

module.exports = fetchPosts;
