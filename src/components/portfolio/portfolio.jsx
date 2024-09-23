import './portfolio.css'
import React from 'react'
import port from '../../assets/portfolio.png'
import { useNavigate } from "react-router-dom";

export const Portfolio = () => {
  const navigate = useNavigate();
  const handleTitleClick = () => {
    window.location.href = 'https://www.github.com/abel2319';
  };
  return (
    <div className='port'>
      <p>Portfolio</p>
      <div className="portItems">
        <div className="item">
          <div className="image">
              <img src={port} alt="" />
          </div>
          <div className="itemContent" onClick={() => (window.location.href = 'www.github.com/abel2319')}>
            <div className="text">
              <h2 onClick={handleTitleClick}>Mon portfolio</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

