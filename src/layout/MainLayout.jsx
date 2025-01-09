import React from 'react';
import styles from "./index.module.css";

import { Link } from "react-router-dom"

function MainLayout({ children }) {
    return (
        <div>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <Link to="/">Muhsinjon.</Link>
                </div>
                <ul className={styles.nav}>
                    <li className={styles.navEle}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.navEle}>
                        <Link to="/json-posts">Json Posts</Link>
                    </li>
                    <li className={styles.navEle}>
                        <Link to="/pokemon-go">PokemonGO</Link>
                    </li>
                    <li className={styles.navEle}>
                        <Link to="/weather-forecast">Wheater</Link>
                    </li>
                    <li className={styles.navEle}>
                        <Link to="/random-users">Random-users</Link>
                    </li>
                    <li className={styles.navEle}>
                        <Link className={styles.formButton1} to="/login">Sign in</Link>
                    </li>
                    <li className={styles.navEle}>
                        <Link className={styles.formButton2} to="/register">Sign up</Link>
                    </li>
                    <li className={styles.navEle}>
                        <Link to="/contact">Contacts</Link>
                    </li>
                </ul>
            </header>
            <main>
                {children}
            </main>
        </div>
    );
}

export default MainLayout;