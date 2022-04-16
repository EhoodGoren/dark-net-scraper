const formatDate = (date) => {
    return `${date.toLocaleString('en-US', {
        timeZone: 'UTC',
    })} UTC`;
};

const formatContent = (content) => {
    const splitContent = content.split('\n');
    return splitContent
        .filter((sentence) => {
            const trimmedSentence = sentence.trim();
            return trimmedSentence !== '';
        })
        .join('\n');
};

const formatPosts = (posts) => {
    return posts.map((post) => {
        const { date, content } = post;
        post.date = formatDate(date);
        post.content = formatContent(content);
        return post;
    });
};

module.exports = formatPosts;
