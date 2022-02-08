import React, { useState } from "react";
import axios from 'axios';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        const fetchedPosts = await axios.get('http://localhost:8080/posts');
        setPosts(fetchedPosts.data);
    }
    const generatePosts = () => {
        return posts.map((post, index) => {
            const { title, content, author, date } = post;
            return(
                <div key={`post${index+1}`} className='posts'>
                    <h3>{title}</h3>
                    <div>{content}</div>
                    <div>{author}</div>
                    <div>{date}</div>
                </div>
            )
        })
    }
    return (
        <div>
            <button onClick={getPosts}>Get posts</button>
            {generatePosts()}
        </div>
    )
}

export default Posts;
