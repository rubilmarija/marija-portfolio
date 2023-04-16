import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Tools from './components/Tools/Tools';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Projects />
      <Tools />
      <Footer />
    </div>
  );
}

export default App;
