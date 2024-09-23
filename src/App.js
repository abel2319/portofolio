import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/NabBar/navbar';
import Intro from './components/Intro/intro';
import About from './components/about/about';
import { Portfolio } from './components/portfolio/portfolio';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Intro/>
        <About/>
        <Portfolio/>
      </div>
    </Router>
  ) 
} 

export default App;
