import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar />
        <Hero />
      </div>
      <Footer />
    </div>
  );
}

export default App;
