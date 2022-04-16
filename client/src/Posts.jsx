import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Post from './Post';
import Loader from './Loader/Loader';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const fetchedPosts = await axios.get('http://localhost:8080/posts');
            setPosts(fetchedPosts.data);
            setLoading(false);
        };
        fetchPosts();
        setInterval(fetchPosts, 1000 * 60 * 2);
    }, []);

    return (
        <div style={{ backgroundColor: '#D4D4D6' }}>
            {loading ? <Loader /> : <></>}
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
