import React from 'react';
import styles from "./index.module.css";

import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();

    function redirectPosts() {
        navigate("/json-posts");
    }

    function redirectPokemons() {
        navigate("/pokemon-go");
    }

    function redirectWeathers() {
        navigate("/weather-forecast");
    }

    function redirectRandomUsers() {
        navigate("/random-users")
    }

    return (
        <div className={styles.homeContent}>
            <div className={styles.links}>
                <h2>Json Posts</h2>
                <button onClick={redirectPosts}>Go to Posts</button>
            </div>
            <div className={styles.links}>
                <h2>Pokemon Go</h2>
                <button onClick={redirectPokemons}>Go to Pokemons</button>
            </div>
            <div className={styles.links}>
                <h2>Weather Forecast || <span className={styles.disabled}>Disabled</span></h2>
                <button onClick={redirectWeathers}>Go to Weather Forecast</button>
            </div>
            <div className={styles.links}>
                <h2>Random Users</h2>
                <button onClick={redirectRandomUsers}>Go to Random Users</button>
            </div>
        </div>
    );
}

export default Home;