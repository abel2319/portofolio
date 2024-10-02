import React from 'react'
import './intro.css'
import abel from '../../assets/abel.png'
import cv from '../../assets/cv.png'
import { Link } from 'react-scroll'

const Intro = () => {
  return (
    <section id='home' className="intro">
      <div className="introContent">
        <span className="hello">Hello, </span>
        <span className="introText">
          I'm
          <span className="introName"> Abel KPOHINTO</span> <br/>
          a Data Scientist.
        </span>
        <p className='introPara'>I am a problem solver, passionated about Math and Programming...</p>
        <a href='https://drive.google.com/file/d/17h-SMWDBKW2tx-cY9se0ajFSo6PgnGn1/view?usp=sharing'>
          <button className="introBtn"><img src={cv} alt="MyResume" className='introImg'/>
            My Resume
          </button>
        </a>
      </div>
      <img src={abel} alt="profile" className='bg' />
    </section>
  )
}

export default Intro