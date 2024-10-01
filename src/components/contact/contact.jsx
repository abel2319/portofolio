import React from 'react'
import './contact.css'

function Contact() {
  return (
    <div className='cont'>
      <p>Mes coordonnees</p>
      <div className="contactItems">
        <div className="contactItem">
            <p onClick={()=> window.location.href = "https://duckduckgo.com/?t=ftsa&q=62100calais&iaxm=maps&source=about"}>
                <i className="fa-light fa-location-dot"></i> Calais 62100, France
            </p>
        </div>
      </div>
    </div>
  )
}

export default Contact