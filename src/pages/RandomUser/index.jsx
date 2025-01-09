import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "./index.module.css";
import { useNavigate } from 'react-router-dom';

function RandomUser() {
    const [randomUser, setRandomUser] = useState([]);

    useEffect(() => {
        const url = "https://randomuser.me/api/";
        axios.get(url)
            .then(response => {
                if (response.status == 200) {
                    setRandomUser(response.data.results);
                    // console.log(response.data.results);
                }
            })
            .catch(error => console.log(error));
    }, []);

    const navigate = useNavigate();
    function redirectHome() {
        navigate("/");
    }

    function handleRefresh() {
        window.location.reload();
    }

    return (
        <div>
            <h2 className={styles.headTop}>
                <span>Random Users</span>
                <button onClick={handleRefresh} className={styles.refreshButton}>Refresh</button>
                <button onClick={redirectHome} className={styles.backButton}>Back to Home</button>
            </h2>
            {
                randomUser.length > 0 && randomUser.map((user, index) => {
                    return (
                        <div className={styles.card} key={index}>
                            <img className={styles.userPicture} src={user.picture.large} alt="" />
                            <div className={styles.userInfo}>
                                <h2>Cell phone: {user.dob.date}</h2>
                                <h4>Gender: {user.gender}</h4>

                                <h3>
                                    <div>Location: {user.location.city}</div>
                                    <div>Postcode: {user.location.postcode}</div>
                                </h3>
                                <h3>
                                    <div>Street: {user.location.street.name}</div>
                                    <div>Number: {user.location.street.number}</div>
                                </h3>
                                <h3>
                                    <div>Login: {user.login.username}</div>
                                    <div>Password: {user.login.password}</div>
                                </h3>
                                <h4>
                                    Phone: {user.phone}
                                </h4>
                                <h3>{user.email}</h3>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default RandomUser;