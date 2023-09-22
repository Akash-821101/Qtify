import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./TopAlbums.module.css";

const TopAlbums = () => {
  const [albums, setAlbums] = useState([]);

  // perform api call for topalbums
  const getAlbums = async () => {
    try {
      const res = await axios("https://qtify-backend-labs.crio.do/albums/top");
      setAlbums(res.data);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    let data = getAlbums();
    console.log(data);
  }, []);

  return (
    <div>
      <div className={styles.album}></div>
    </div>
  );
};

export default TopAlbums;
