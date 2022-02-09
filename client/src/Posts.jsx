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
                    <h3 className='post-title'>{title}</h3>
                    <div className='post-content'>{generateContent(content)}</div>
                    <div className='post-source'>
                        {author} | {`${date} UTC`}
                    </div>
                </div>
            )
        });
    }
    const generateContent = (content) => {
        const splitContent = content.split('\n');
        return splitContent.map((sentence, index) => (
            <p key={`sentence${index}`}>{sentence}</p>
        ));
    }

    return (
        <div>
            <button onClick={getPosts}>Get posts</button>
            {generatePosts()}
        </div>
    )
}

export default Posts;
