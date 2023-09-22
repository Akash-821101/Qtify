
import { useEffect, useState } from 'react';
import './App.css';

import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import getAlbums from './api/api';
import Section from './components/Section/Section';

function App() {
  const [topAlbums, setTopAlbums] = useState([])

  const generateAlbums = async () => {
    try {
      const data = await getAlbums();
      setTopAlbums(data);

    } catch(err) {
      console.log(err)

    }
  }

  useEffect(() => {
    generateAlbums()
  },[])

  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      {/* <div className="albumcontainer">
      {topAlbums.map((data) => {
        return (
          <Card key={data.id} data={data} type="album" />
        )
      })}
      </div> */}
      <div>
      <Section title="Top Albums" data={topAlbums} />
      </div>
    </div>
  );
}

export default App;
