import React, { useState, useEffect } from 'react';
import styles from "./index.module.css";

function Register() {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [disabled, setDisabled] = useState(false);

    function validate(username, useremail, userpassword) {
        if (username.length < 3) {
            alert("Invalid username ", username);
            return false;
        }

        if (!useremail.includes("@")) {
            alert("invalid email ", useremail);
            return false;
        }

        if (userpassword.length < 3) {
            alert("Invalid password ", userpassword);
            return false;
        }

        return true;
    }

    function handleRegSubmit(e) {
        e.preventDefault();
        setDisabled(true);

        const isValid = validate(userName, userEmail, userPassword);

        if (!isValid) {
            return;
        }

        let userInfo = {
            name: userName,
            email: userEmail,
            password: userPassword
        }

        console.log(userInfo);
        setUserName("");
        setUserEmail("");
        setUserPassword("");
    }

    function handleRegReset(e) {
        e.preventDefault();
        setUserName("");
        setUserEmail("");
        setUserPassword("");
    }
    return (
        <div>
            <form className={styles.registerForm}>
                <div className={styles.field}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" placeholder="Enter name..." value={userName} onChange={(e) => setUserName(e.target.value)} autoComplete='name'/>
                </div>
                <div className={styles.field}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" placeholder="Enter email..." value={userEmail} onChange={(e) => setUserEmail(e.target.value)} autoComplete='email'/>
                </div>
                <div className={styles.field}>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" placeholder="Enter password..." value={userPassword} onChange={(e) => setUserPassword(e.target.value)}  autoComplete='current-password'/>
                </div>

                <div className={styles.actionBtns}>
                    <button type="submit" onClick={handleRegSubmit} disabled={disabled}>Submit</button>
                    <button type="reset" onClick={handleRegReset}>Reset</button>
                </div>
            </form>
        </div>
    );
}

export default Register;