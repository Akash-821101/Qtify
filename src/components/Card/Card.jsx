import React from "react";
import styles from "./Card.module.css";
import cardimage from "../../assets/cardimg.png";

const Card = () => {
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.cardcontent}>
          <div>
            <img src={cardimage} style={{ width: "100%" }} alt="cardimage" />
          </div>
          <div className={styles.contentText}>102M Follows</div>
        </div>
        <p>New Bollywood</p>
      </div>
    </div>
  );
};

export default Card;
