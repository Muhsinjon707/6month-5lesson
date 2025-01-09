import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "./index.module.css";
import { useNavigate } from 'react-router-dom';

function PokemonGo() {
    const url = "https://pokeapi.co/api/v2/pokemon";

    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get(url)
            .then(response => {
                if (response.status == 200) {
                    setItems(response.data.results);
                    // console.log(response.data.results);
                }
            })
            .catch(error => console.log(error));
    }, []);

    const navigate = useNavigate();
    function redirectHome() {
        navigate("/");
    }

    return (
        <div className={styles.container}>
            <button onClick={redirectHome} className={styles.backButton}>Back</button>
            <div className={styles.wrapper}>
                {
                    items.length > 0 && items.map((item, index) => {
                        return (
                            <div className={styles.card} key = {index}>
                                <div>{item.name}</div>
                                <img src={item.url} alt="Image doesn't exist. API Problem" />
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default PokemonGo;