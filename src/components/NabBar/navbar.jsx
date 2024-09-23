import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import contactImg from '../../assets/bubble-chat.png'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <nav className="navbar">
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