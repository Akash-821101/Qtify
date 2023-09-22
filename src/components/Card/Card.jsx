import React from "react";
import styles from "./Card.module.css";
import { Chip } from "@mui/material";

const Card = ({ data, type }) => {
  switch (type) {
    case "album":
      const { image, follows, title } = data;
      return (
        <div className={styles.wrapper}>
          <div className={styles.card}>
            <img src={image} style={{ width: "100%" }} alt="cardimage" />

            <div className={styles.banner}>
              <Chip
                className={styles.chip}
                label={`${follows} Follows`}
                Follows
                size="small"
              />
            </div>
          </div>
          <div className={styles.titleWrapper}>
            <p>{title}</p>
          </div>
        </div>
      );

    default:
      <></>;
  }
};

export default Card;
