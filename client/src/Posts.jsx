import React, { useState } from "react";
import axios from 'axios';
import Post from "./Post";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        const fetchedPosts = await axios.get('http://localhost:8080/posts');
        setPosts(fetchedPosts.data);
    }
    const generatePosts = () => {
        return posts.map((post, index) => {
            return(
                <Post key={`post-${index}`} data={post} />
            )
        });
    }

    return (
        <div>
            <button onClick={getPosts}>Get posts</button>
            {generatePosts()}
        </div>
    )
}

export default Posts;
