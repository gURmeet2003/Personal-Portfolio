import React from "react";

import styles from "./Hero.module.css";
import getImageUrl from "../../../assets/about/pic.jpg";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Gurmeet</h1>
        <p className={styles.description}>
          I am a full-stack developer specializing in React.js, Node.js,
          Express.js, and MongoDB, building scalable, user-centric, and
          high-performance web applications. Skilled in optimization,
          responsiveness, and problem-solving, I excel in collaborative
          environments to deliver quality projects on time.
        </p>
        <a href="mailto:gurmeetrajsnm@email.com" className={styles.contactBtn}>
          Contact Me Bro
        </a>
      </div>
      <img
        src={getImageUrl}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
