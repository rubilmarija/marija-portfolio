import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
