import React from "react";
import styles from "./search.module.css";
import icon from "../../assets/Search icon.png";

const Search = () => {
  return (
    <div>
      <form className={styles.wrapper}>
        <input className={styles.search} />
        <div>
          <button className={styles.searchButton} type="submit">
            <img src={icon} alt="searchIcon" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
