import React from 'react';
import Card from 'react-bootstrap/Card';
import Labels from './Labels';

const Post = ({ data: { title, content, author, date, labels } }) => {
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
                <Labels labels={labels} />
            </Card.Body>
        </Card>
    );
};

export default Post;
