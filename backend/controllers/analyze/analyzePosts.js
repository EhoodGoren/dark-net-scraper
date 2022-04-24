const keywords = {
    Crypto: ['bitcoin', 'btc'],
    Hackers: ['hack', 'keylogger', 'trojan'],
    'Adult Content': ['porn', 'sex'],
    Weapons: ['guns', 'ammo'],
    Drugs: ['drug'],
};

const checkKeywords = (word) => {
    const categories = Object.values(keywords);
    for (let i = 0; i < categories.length; i++) {
        const category = categories[i];
        for (let j = 0; j < category.length; j++) {
            const keyword = category[j];
            if (word.includes(keyword)) {
                return Object.keys(keywords)[i];
            }
        }
    }
};

const analyzeText = (text) => {
    const labels = [];
    text.split(' ').forEach((word) => {
        const keyword = checkKeywords(word);
        if (keyword && !labels.includes(keyword)) {
            labels.push(keyword);
        }
    });
    return labels;
};

const addLabelsToPosts = (posts) => {
    if (!posts) return;
    return posts.map((post) => {
        const { title, content } = post;
        const titleLabels = analyzeText(title.toLowerCase());
        const contentLabels = analyzeText(content.toLowerCase());
        const postLabels = [...new Set([...titleLabels, ...contentLabels])];
        post.labels = postLabels;
        return post;
    });
};

module.exports = addLabelsToPosts;
