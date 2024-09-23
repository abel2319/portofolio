import React from 'react'
import './intro.css'
import abel from '../../assets/abel.png'
import cv from '../../assets/cv.png'
import { Link } from 'react-scroll'

const Intro = () => {
  return (
    <section className="intro">
      <div className="introContent">
        <span className="hello">Hello, </span>
        <span className="introText">
          I'm
          <span className="introName"> Abel KPOHINTO</span> <br/>
          a Software Engineer and Data Scientist.
        </span>
        <p className='introPara'>I am a problem solver, passionated about Math and Programming...</p>
        <Link><button className="introBtn"><img src={cv} alt="MyResume" className='introImg'/> My Resume</button></Link>
      </div>
      <img src={abel} alt="profile" className='bg' />
    </section>
  )
}

export default Intro