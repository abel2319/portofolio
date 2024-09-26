import React, { useState, useEffect } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import contactImg from '../../assets/bubble-chat.png'
import {Link} from 'react-scroll'

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
        <Link className='navItem'>Home</Link>
        <Link className='navItem'>À propos</Link>
        <Link className='navItem'>Portfolio</Link>
        <Link className='navItem'>Blog</Link>
      </div>
      <button className="navBtn">
        <img src={contactImg} alt="" className='btnImg'/>
        Contactez moi
      </button>
    </nav>
  )
}

export default Navbar;