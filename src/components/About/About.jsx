import React from "react";
import { getimageUrl } from "../../utils";
import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
        className={styles.aboutImage}
          src={getimageUrl("about/hero2.png")}
          alt="sitting with the laptop"
        />
        <ul className={styles.aboutItems}> 
          <li className={styles.aboutItem}>
            <img src={getimageUrl("about/about.png")} alt="cursur" />
            <div className={styles.aboutItemText} >
              <h3>Frontend developer </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum,
                unde. Lorem ipsum dolor sit amet.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getimageUrl("about/about.png")} alt="server" />
            <div  className={styles.aboutItemText} >
              <h3>BackEnd developer </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum,
                unde. Lorem ipsum dolor sit amet.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
