import axios from "axios";

const Backend_EndPoint = "https://qtify-backend-labs.crio.do"

const getAlbums = async () => {
    try {
      const res = await axios(`${Backend_EndPoint}/albums/top`);
     
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  export const newAlbums = async () => {
    try {
      const res = await axios(`${Backend_EndPoint}/albums/new`);
     
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  export const fetchSongs = async () => {
    try {
      const res = await axios(`${Backend_EndPoint}/songs`);
     
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  export default getAlbums;
  