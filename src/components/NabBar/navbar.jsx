import React, { useState, useEffect } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import contactImg from '../../assets/bubble-chat.png'
import { IoClose, IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {  // Change 50 to the scroll position where you want the change to occur
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? ' scrolled' : ''}`}>
      <img src={logo} alt="logo" className='logo'/>
      <div className="navMenu">
        <a href='#home' className='navItem'>Home</a>
        <a href='#about' className='navItem'>À propos</a>
        <a href='#portfolio' className='navItem'>Portfolio</a>
        <a href='#blog' className='navItem'>Blog</a>
      </div>
      <a href="#contact">
        <button className="navBtn">
          <img src={contactImg} alt="" className='btnImg'/>
          Contactez moi
        </button>
      </a>
    </nav>
  )
}

export default Navbar;