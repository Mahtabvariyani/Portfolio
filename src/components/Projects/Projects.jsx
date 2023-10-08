import React from "react";
import Projects from "../../data/projects.json";
import ProjectCard from "./ProjectCard";
import styles from "./Project.module.css"


function Project() {
  return (
    <section className={styles.container} id="projects">
      <h2  className={styles.title}>Projects</h2>
      <div  className={styles.projects}>
        {Projects.map((project, id) => {
          return <ProjectCard  key={id} project={project}/>;
        })}
      </div>
    </section>
  );
}

export default Project;