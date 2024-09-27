import React from 'react'
import './experience.css'

function Experience() {
  return (
    <div className='expe'>
      <p>Expérience</p>
      <div className="expeItems">
        <div className="item">
          <div className="year">
            Mars 2024– Août 2024
          </div>
          <div className="dotline">
            <div className="dot"></div>
            <div className="line"></div>
          </div>
          <div className="content">
            <h2>Analyste Programmeur (Stage)</h2> 
              Institut de Mathématiques et de Sciences Physiques (IMSP) – Dangbo, Benin – (6 mois) <br />

              • Assistance aux utilisateurs pour la prise en main du supercalculateur de l’IMSP <br />
              • Assistance aux utilisateurs pour l’exécution des modèles de machine learning sur le supercalculateur <br />
              • Mise en place d’un site web de création de mails institutionnels aux etudiants <br />
              • IT support au sein de l’institut (dépannage du réseaux informatique et aide à la prise en main des logiciels) <br />
              • Assistant formateur à la formation d’initiation au calcul haute performance <br />
              • <span> Technologies </span>: <em> Python, C++, Slurm, Git, LaTeX, JavaScript</em> <br />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience