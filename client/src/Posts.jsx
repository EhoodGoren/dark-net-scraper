import React, { useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Post from './Post';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        const fetchedPosts = await axios.get('http://localhost:8080/posts');
        setPosts(fetchedPosts.data);
    };

    return (
        <div style={{ backgroundColor: '#D4D4D6' }}>
            <button onClick={getPosts}>Get posts</button>
            <Container>
                {posts.map((post, index) => (
                    <Row className="mb-3" key={`post-${index}`}>
                        <Post data={post} />
                    </Row>
                ))}
            </Container>
        </div>
    );
};

export default Posts;
