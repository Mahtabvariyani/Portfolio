import React from "react";
import { getimageUrl } from "../../utils";
import styles from "./About.module.css";
import ReactPlayer from "react-player";
import { getVideoUrl } from "../../utils";
import { useEffect, useState } from "react";


  

function About() {
  const [domLoaded, setDomLoaded] = useState(false);
  
  useEffect(() => {
    setDomLoaded(true);
  }, []);
 
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
      {domLoaded && (
        <ReactPlayer
          playing={true}
          loop={true}
          volume={0}
          muted
          url={getVideoUrl('about/codeanimation.mp4')}
          height={"90vh"}
          width={"100%"}
          className={styles.aboutImage}
        />
        )}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>

            <div className={styles.aboutItemText}>
              <h3>Frontend developer </h3>
              <p>
              a Junior front-end developer, enthusiastic about React.js and  JavaScript and CSS. I'm eager to learn and contribute to creating engaging and user-friendly web interfaces.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
        
            <div className={styles.aboutItemText}>
              <h3>BackEnd developer </h3>
              <p>
              As a Junior back-end developer, I'm learning and growing my skills in Node.js, Express, MongoDB, and Next.js to build web applications with enthusiasm and dedication.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
  
export default About;
