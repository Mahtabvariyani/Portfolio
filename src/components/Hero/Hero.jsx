import React from "react";
import { getimageUrl } from "../../utils";
import styles from "./Hero.module.css";
export default function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi , i'm Mah</h1>
        <p className={styles.description}>
          a Junior full-Stack developer with a love for coding and a knack for turning ideas into working web magic...
        </p>
        <a className={styles.contactBtn} href="mailto:variyanimahtab@gmail.com">
          Mail me
        </a>
      </div>
      <img
        className={styles.heroImg}
        src={getimageUrl("hero/myImage.jpeg")}
        alt="hero-image"
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
}
