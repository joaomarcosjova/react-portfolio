import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/user.png")} alt="Cursor icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              I enjoy working closely with design teams to faithfully translate
               their designs right down to the last pixel. Daily, you'll find me
                using modern frontend technologies that bring the creative process
                 to life just as designers intended them to be.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>Technical</h3>
              <p>
              Right now you can find me hacking away primarily with ReactJs, 
              NodeJs, GraphQL, Netflify, and in general anything JavaScript, TypeScript,
               HTML and CSS related.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>Personal</h3>
              <p>
              I grew up in Angola & Cuba and moved to India many years ago. 
              Being Angolan, I try to visit family in Angola whenever I can.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
