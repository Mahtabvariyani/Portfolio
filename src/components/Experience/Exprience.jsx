import React from "react";
import skills from "../../data/skills.json";
import { getimageUrl } from "../../utils";
import styles from "./Experience.module.css";

function Exprience() {
  return (
    <section id="experience" className={styles.container}>
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getimageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul></ul>
      </div>
    </section>
  );
}

export default Exprience;
