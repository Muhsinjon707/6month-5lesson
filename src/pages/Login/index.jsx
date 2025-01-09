import React, { useState, useEffect } from 'react';
import styles from "./index.module.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validate(email, password) {
        if (!email.includes("@")) {
            alert("Invalid email!");
            return false;
        }

        if (!password.length > 3) {
            alert("Invalid password1");
            return false;
        }

        return true;
    }

    function handleSubmit(e) {
        e.preventDefault();

        const isValid = validate(email, password);

        if (!isValid) {
            return;
        }

        let user = {
            email: email,
            password: password
        };

        console.log(user);
        setEmail("");
        setPassword("");
    }

    function handleReset(e) {
        e.preventDefault();
        setEmail("");
        setPassword("");
    }
    return (
        <div>
            <form className={styles.form}>
                <div className={styles.box}>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" placeholder="Enter email..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete='email' />
                </div>
                <div className={styles.box}>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" placeholder="Enter password..."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete='current-password' />
                </div>
                <div className={styles.actionButtons}>
                    <button type="submit" onClick={handleSubmit}>Submit</button>
                    <button type="reset" onClick={handleReset}>Reset</button>
                </div>
            </form>
        </div>
    );
}

export default Login;