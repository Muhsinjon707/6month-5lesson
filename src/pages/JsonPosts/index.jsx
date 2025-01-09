import React, { useState, useEffect } from 'react';
import styles from "./index.module.css";

import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function JsonPosts() {
    const [posts, setPosts] = useState([]);

    const url = "https://jsonplaceholder.typicode.com/posts";

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                if (response.status == 200) {
                    console.log(response.data);
                    setPosts(response.data);
                }
            })
            .catch((error) => console.log(error));
    }, []);

    const navigate = useNavigate();
    function redirectDetails(post) {
        navigate(`/details/${post.id}`, { state: post });
    }

    return (
        <div className={styles.container}>
            <Link className={styles.backButton} to="/">Home</Link>

            <div className={styles.wrapper}>
                {posts.length > 0 &&
                    posts.map((post) => {
                        return (
                            <div className={styles.card} key={post.id}>
                                <div className={styles.innerCard}>
                                    <h2>Id: {post.id}</h2>
                                    <h3>title: {post.title}</h3>
                                    <h3>text: {post.body}</h3>
                                </div>
                                <button onClick={() => redirectDetails(post)} className={styles.postDetails}>More</button>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}

export default JsonPosts;