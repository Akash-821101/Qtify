
import { useEffect, useState } from 'react';
import './App.css';

import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import getAlbums, {newAlbums, fetchSongs} from './api/api';
import Section from './components/Section/Section';
import BasicsAccordion from './components/Accordian/BasicsAccordion';

function App() {
  const [topAlbums, setTopAlbums] = useState([])
  const [songsData, setSongsData] = useState([])
  const [filteredDataValues, setFilteredDataValues] = useState([])
  const [newCardAlbums, setNewCardAlbums] = useState([])
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue)=> {
    console.log(newValue)
    setValue(newValue);
  }

  const generateAllSongsData = async () => {
    try {
      const res = await fetchSongs()
      setSongsData(res);
      setFilteredDataValues(res);
      console.log(res)
    } catch(err) {
      console.error(err)
    }
   
    
  }

  const filteredData = (val) => {
    setFilteredDataValues(val)
  }

  const generateSongsData = (value) => {
    let key = null;
    if(value === 0) {
      filteredData(songsData);
      return;
    } else if(value === 1) {
      key = "rock"
    } else if(value === 2) {
      key = "pop"
    } else if(value === 3) {
      key = "jazz"
    } else if(value === 4) {
      key = "blues"
    }
    const res = songsData.filter(item => item.genre.key === key);
    filteredData(res)
  }

  useEffect(() => {
    generateSongsData(value)
  },[value])

  const generateAlbums = async () => {
    try {
      const data = await getAlbums();
      setTopAlbums(data);

    } catch(err) {
      console.log(err)

    }
  }

  const generateNewAlbums = async () => {
    try {
      const data = await newAlbums();
      setNewCardAlbums(data);

    } catch(err) {
      console.log(err)

    }
  }

  useEffect(() => {
    generateAlbums();

    generateNewAlbums();

    generateAllSongsData();
  },[])

  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <div className="cardSection">
      <Section title="Top Albums" type="album" data={topAlbums} />
      <Section title="New Albums" type="album" data={newCardAlbums} />
      <Section title="songs" type="song" data={filteredDataValues} filteredData={filteredData} value={value} filterDataValues={filteredDataValues} handleChange={handleChange}/>
      </div>
      <div className='accordianWrapper'>
        <h1>FAQs</h1>
        <BasicsAccordion/>
      </div>
    </div>

  );
}

export default App;
