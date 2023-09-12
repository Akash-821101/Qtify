
import './App.css';
import Card from './components/Card/Card';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Card/>
    </div>
  );
}

export default App;
