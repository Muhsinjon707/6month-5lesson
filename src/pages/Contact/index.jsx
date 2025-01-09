import React, { useState } from 'react';
import styles from "./index.module.css"

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function validate(name, email, message) {
        if (name.length < 3) {
            alert("Invalid username: ", name);
            return false;
        }

        if (!email.includes("@")) {
            alert("Invalid email: ", email);
            return false;
        }

        if (message.length < 0) {
            alert("Invalid message: ", message);
            return false;
        }
        return true;
    }

    function handleSend(e) {
        e.preventDefault();

        const isValid = validate(name, email, message);

        if (!isValid) {
            return;
        }

        let userDate = {
            username: name,
            useremail: email,
            usermessage: message
        }

        console.log(userDate);

        setName("");
        setEmail("");
        setMessage("");
    }    

    function handleReset(e) {
        e.preventDefault();
        setName("");
        setEmail("");
        setMessage("");
    }

    return (
        <div>
            <form className={styles.contactForm}>
                <div className={styles.area}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" placeholder="Enter name..." value={name} onChange={(e) => setName(e.target.value)} autoComplete='username' />
                </div>
                <div className={styles.area}>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" placeholder="Enter email..." value={email} onChange={(e) => setEmail(e.target.value)} autoComplete='email' />
                </div>
                <div className={styles.area}>
                    <label htmlFor="message">Message: </label>
                    <textarea name="message" id="message" placeholder="Enter message..." value={message} onChange={(e) => setMessage(e.target.value)} autoComplete='text'></textarea>
                </div>

                <div className={styles.actionField}>
                    <button type="submit" onClick={handleSend}>Send</button>
                    <button type="reset" onClick={handleReset}>Reset</button>
                </div>
            </form>
        </div>
    );
}

export default Contact;