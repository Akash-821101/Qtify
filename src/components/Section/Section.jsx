import React, { useState } from "react";
import styles from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";

const Section = ({ title, data }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {toggle ? "Show All" : "Collapse All"}
        </h4>
      </div>
      {!data.length ? (
        <CircularProgress />
      ) : (
        <div className={styles.wrapper}>
          {data.map((item) => (
            <Card key={item.id} data={item} type="album" />
          ))}
        </div>
      )}
    </div>
  );
};

export default Section;
