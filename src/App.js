import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";

import Navbar from './components/Navbar/Navbar';

import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import MyProjects from './pages/MyProjects';

// import ErrorPage from './ErrorPage';
// import Root from './routes/Root';
import './App.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='skills' element={<Skills />} />
          <Route path='projects' element={<MyProjects />} />
        </Routes>
      </div>
    </div>
  )
}
export default App;