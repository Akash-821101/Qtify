import React from "react";
import headphone from "../../assets/vibrating-headphone 1.png";
import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <div className={styles.hero}>
      <div>
        <h1>100 Thousands songs, add-free</h1>
        <h1>over thousands podcast episode</h1>
      </div>
      <div>
        <img src={headphone} width={212} alt="headphone" />
      </div>
    </div>
  );
};

export default Hero;
