import React from 'react'
import './contact.css'
import email from '../../assets/email.png'
import phone from '../../assets/telephone.png'
import location from '../../assets/location.png'
import linkedin from '../../assets/linkedin.png'


function Contact() {
  return (
    <div id='contact' className='cont'>
      <div className="title">
        <div className="contDash"></div>
        <p>Mes coordonnées</p>
      </div>
      <div className="contactItems">
      <div className="contactItem">
            <p onClick={()=> window.location.href = "mailto:kpohinto.abel@gmail.com"}>
                <img src={email} alt="location" /> kpohinto.abel@gmail.com
            </p>
        </div>
        <div className="contactItem">
            <p onClick={()=> window.location.href = "#"}>
                <img src={phone} alt="location" /> +33 6 20 91 97 93
            </p>
        </div>
        <div className="contactItem">
            <p onClick={()=> window.location.href = "https://www.linkedin.com/in/abel-kpohinto-79b2b8236/"}>
                <img src={linkedin} alt="location" /> Abel KPOHINTO
            </p>
        </div>
        <div className="contactItem">
            <p onClick={()=> window.location.href = "https://duckduckgo.com/?t=ftsa&q=62100calais&iaxm=maps&source=about"}>
                <img src={location} alt="location" /> Calais 62100, France
            </p>
        </div>
      </div>
    </div>
  )
}

export default Contact