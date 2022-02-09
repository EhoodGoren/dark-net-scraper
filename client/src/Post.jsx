import React from "react";
import Card from 'react-bootstrap/Card'

const Post = ({ data: { title, content, author, date } }) => {

    const generateContent = (postContent) => {
        const splitContent = postContent.split('\n');
        return splitContent.map((sentence, index) => (
            <div key={`sentence${index}`}>{sentence}</div>
        ));
    }
    return(
        <>
            <Card border="dark" style={{ width: '18rem' }}>
                <Card.Header as="h6">{title}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        {generateContent(content)}
                    </Card.Text>
                        <footer className="blockquote-footer">
                            {author} | {date}
                        </footer>
                </Card.Body>
            </Card>
            <br />
        </>
    )
}

export default Post;
