import React from 'react';
import styles from "./index.module.css";

import { useLocation, useNavigate } from 'react-router-dom';

function Details() {
    const location = useLocation();

    console.log(location.state);
    const post = location.state;

    const navigate = useNavigate();
    function redirectPosts() {
        navigate("/json-posts");
    }

    return (
        <div className={styles.postDetail}>
            <div className={styles.innerDetail}>
                <h2>ID: {post.id}</h2>
                <h3>Title: {post.title}</h3>
                <h3>Text: {post.body}</h3>
            </div>

            <button onClick={redirectPosts} className={styles.backButton}>Back</button>
        </div>
    );
}

export default Details;