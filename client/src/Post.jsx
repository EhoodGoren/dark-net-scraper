import React from 'react';
import Card from 'react-bootstrap/Card';

const Post = ({ data: { title, content, author, date } }) => {
    const generateContent = (postContent) => {
        const splitContent = postContent.split('\n');
        return splitContent.map((sentence, index) => (
            <p key={`sentence${index}`}>{sentence}</p>
        ));
    };
    return (
        <Card border="dark">
            <Card.Header as="h6">{title}</Card.Header>
            <Card.Body>
                {generateContent(content)}
                <footer className="blockquote-footer">
                    {author} | {date}
                </footer>
            </Card.Body>
        </Card>
    );
};

export default Post;
