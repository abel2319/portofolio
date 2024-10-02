import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NabBar/navbar';
import Intro from './components/Intro/intro';
import About from './components/about/about';
import Experience from './components/experiences/experience';
import Contact from './components/contact/contact';
import { Portfolio } from './components/portfolio/portfolio';
import Blog from './components/blog/blog';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Intro/>
        <About/>
        <Portfolio/>
        <Experience/>
        <Blog/>
        <Contact/>
      </div>
    </Router>
  ) 
} 

export default App;
