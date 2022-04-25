import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Post from './Post';
import Loader from '../Loader/Loader';
import SearchBar from './SearchBar';

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
                <SearchBar setPosts={setPosts} setLoading={setLoading} />
                <br />
                {posts.map((post, index) => (
                    <Row className="m-3 g-0" key={`post-${index}`}>
                        <Post data={post} />
                    </Row>
                ))}
            </Container>
        </div>
    );
};

export default Posts;
