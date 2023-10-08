import React from "react";
import { getimageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";


export default function ProjectCard({project:{title,imageSrc,description,skills,demo,source}}) {
  return (
    <div  className={styles.container}>
      <img
        src={getimageUrl(imageSrc)}
        alt={`Image of  ${title}`}
        className={styles.image}
      />
      <h3  className={styles.title}>{title}</h3>
      <p  className={styles.description}>{description}</p>
      <ul  className={styles.skills}>
        {skills.map((skill, id) => {
         return ( <li key={id}  className={styles.skill}>{skill}</li>);
        })}
      </ul>
      <div  className={styles.links}>
        <a href={demo}  className={styles.link}>Demo</a>
        <a href={source}  className={styles.link}>Source</a>
      </div>
    </div>
  );
}
