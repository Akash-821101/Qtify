import React, { useState } from "react";
import styles from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import BasicTabs from "../Tabs/Tabs";

const Section = ({
  title,
  data,
  type,
  filteredData = null,
  filterDataValues = [],
  value = 0,
  handleChange = null,
}) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {type === "song" ? null : toggle ? "Collapse All" : "Show All"}
        </h4>
      </div>
      {type === "song" ? (
        <BasicTabs value={value} handleChange={handleChange} />
      ) : null}
      {!data.length ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardWrapper}>
          {toggle ? (
            <div className={styles.wrapper}>
              {data.map((item) => (
                <Card key={item.id} data={item} type="album" />
              ))}
            </div>
          ) : (
            <Carousel
              data={data}
              componentRender={(ele) => <Card data={ele} type={type} />}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Section;
