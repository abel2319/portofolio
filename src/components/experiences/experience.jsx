import React from 'react'
import './experience.css'

function Experience() {
  return (
    <div className='expe'>
      <p>Expérience</p>
      <div className="expeItems">
        <div className="expeItem">
          <div className="year">
            Mars - Août 2024 (6 mois)
          </div>
          <div className="dotline">
            <div className="dot"></div>
            <div className="line"></div>
          </div>
          <div className="expeContent">
            <span className='expeItemTitle'>Analyste Programmeur (Stage)</span>
            <p>
            <em>Institut de Mathématiques et de Sciences Physiques (IMSP) – Dangbo, Benin</em> <br />

            • Assistance aux utilisateurs pour la prise en main du supercalculateur de l’IMSP l’exécution des modèles de machine learning. <br />
            • Assistance aux utilisateurs pour l’exécution des modèles de machine learning sur le supercalculateur <br />
            • Mise en place d’un site web de création de mails institutionnels aux etudiants <br />
            • IT support au sein de l’institut (dépannage du réseaux informatique et aide à la prise en main des logiciels) <br />
            • Assistant formateur à la formation d’initiation au calcul haute performance <br />
            • <strong> Technologies </strong>: <em> Python, C++, Slurm, Git, LaTeX, JavaScript</em> <br />
            </p>
          </div>
        </div>
        <div className="expeItem">
          <div className="year">
          Août - Sep 2023 (1 mois)
          </div>
          <div className="dotline">
            <div className="dot"></div>
            <div className="line"></div>
          </div>
          <div className="expeContent">
          <span className='expeItemTitle'>Développeur web full-stack (Stage)</span>
            <p>
            <em>Open SI Benin</em> <br />
            • Prise en main du langage JavaScript pour le front et le backend <br />
            • Mise en place d’une application de gestion de tâche (todo list) <br />
            • <strong> Technologies </strong>: <em> JavaScript, NodeJS, TypeScript, JestJs</em> <br />
            </p>
          </div>
        </div>
        <div className="expeItem">
          <div className="year">
            Dec 2023 – Aujourd’hui (10 mois)
          </div>
          <div className="dotline">
            <div className="dot"></div>
            <div className="line"></div>
          </div>
          <div className="expeContent">
          <span className='expeItemTitle'>Co-Lead Software Engineer et Data Scientist (Volontariat)</span>
            <p>
            <em>Data Afrique Hub (DAH), Benin</em> <br />
            • Je suis un des responsables de l’équipe de développement de de gestion des données de la communauté <br />
            • Formateur à la formation d’initiation à python pour la data science (visualisation avec Matplotlib, Seaborn) <br />
            • Mise en place du Site Web et du dashboard de la communauté DAH <br />
            • Administration de l’espace d’hébergement de la communauté (O2Switch) <br />
            • Technologies : Python, Agile, JavaScript, React <br />
            • <strong> Technologies </strong>: <em> JavaScript, NodeJS, TypeScript, JestJs</em> <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience