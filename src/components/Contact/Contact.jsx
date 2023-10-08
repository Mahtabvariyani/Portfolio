import React from "react";
import { getimageUrl } from "../../utils";
import styles from "./Contact.module.css"

function Contact() {
  return (
    <footer id="contact" className={styles.container}>
     <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out </p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getimageUrl("contact/email.png")} alt="email" />
            <a href="mailto:mahtabvariyani@gmail.com">mahtabvariyani@gmail.com</a>
        </li>
        <li className={styles.link}>
            <img src={getimageUrl("contact/githubb.png")} alt="github" />
            <a href="https://github.com/Mahtabvariyani">Github.com/MahtabVariyani</a>
        </li>
        <li className={styles.link}>
            <img src={getimageUrl("contact/linkedin.png")} alt="linkedin" />
            <a href="https://www.linkedin.com/in/mahvariyani/">LinkedIn.com/MahVariyani</a>
        </li>
      </ul>
    </footer>
  );
}

export default Contact;
