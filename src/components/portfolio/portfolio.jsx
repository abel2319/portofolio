import './portfolio.css'
import React from 'react'
import port from '../../assets/portfolio.png';
import garch from '../../assets/garch_.png';
import bpmn from '../../assets/bpmn.png';
import dah from '../../assets/dah.jpeg'


//https://github.com/abel2319/portofolio
export const Portfolio = () => {
  return (
    <div id='portfolio' className='port'>
      <p>Portfolio</p>
      <div className="portItems">
        <div className="item">
          <div className="image">
              <img src={port} alt="" />
          </div>
          <div className="itemContent">
            <div className="text">
              <h2 onClick={() => window.location.href = 'https://github.com/abel2319/portofolio'}>
                Mon portfolio
              </h2>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="image">
              <img src={garch} alt="" />
          </div>
          <div className="itemContent">
            <div className="text">
              <h2 onClick={() => window.location.href = 'https://github.com/abel2319/ML-For-Fun/blob/main/GARCH-Family/garch.pdf'}>
                GARCH - Volatilité Euro/Dollar
              </h2>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="image">
              <img src={bpmn} alt="" />
          </div>
          <div className="itemContent">
            <div className="text">
              <h2 onClick={() => window.location.href = 'https://github.com/abel2319/MBP-Flowchat'}>
                Éditeur de BPMN 2.0 avec AyaJs
              </h2>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="image">
              <img src={dah} alt="" />
          </div>
          <div className="itemContent">
            <div className="text">
              <h2 onClick={() => window.location.href = 'https://www.dataafriquehub.org/'}>
                Site web de Data Afrique Hub
              </h2>
            </div>
          </div>
        </div>
      </div>
      <button className='portBtn' onClick={()=>window.location.href = 'https://github.com/abel2319?tab=repositories'}>
        Voir plus
      </button>
    </div>
  )
}

