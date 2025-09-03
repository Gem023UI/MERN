import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';



const SinglePost = () => {

    const [post, setPost] = useState({});
    let { slug } = useParams();
    console.log(slug);

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_APP_API}post/${slug}`)
            .then(response => setPost(response.data))
            // .then(response => console.log(response))
            .catch(error => alert('Error loading single post'));
    }, []);

    return (

        <div className="container pb-5">
           
            <br />
            <h1>{post.title}</h1>
            <p className="lead">{post.content}</p>
            <p>
                Author <span className="badge" style={{ color: 'red'}}>{post.user}</span> Published on{' '}
                <span className="badge" style={{ color: 'red'}}>{new Date(post.createdAt).toLocaleString()}</span>
            </p>
        </div>
    );
};

export default SinglePost;