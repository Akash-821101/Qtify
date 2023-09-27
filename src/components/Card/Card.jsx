import React from "react";
import styles from "./Card.module.css";
import { Chip, Tooltip } from "@mui/material";

const Card = ({ data, type }) => {
  const { image, follows, title, likes, songs = [] } = data;

  switch (type) {
    case "album":
      return (
        <Tooltip title={`${songs.length} songs`} placement="top" arrow>
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <img src={image} style={{ width: "100%" }} alt="cardimage" />

              <div className={styles.banner}>
                <Chip
                  className={styles.chip}
                  label={`${follows} Follows`}
                  size="small"
                />
              </div>
            </div>
            <div className={styles.titleWrapper}>
              <p>{title}</p>
            </div>
          </div>
        </Tooltip>
      );

    case "song":
      return (
        <div className={styles.wrapper}>
          <div className={styles.card}>
            <img src={image} alt="song" loading="lazy" />
            <div className={styles.banner}>
              <div className={styles.pill}>
                <p
                  style={{
                    fontSize: "10px",
                    fontWeight: "400px",
                    lineHeight: "15px",
                  }}
                >
                  {likes} Likes
                </p>
              </div>
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
