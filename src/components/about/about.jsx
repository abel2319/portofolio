import React from 'react';
import Slider from 'react-slick';
import './about.css';
import python from '../../assets/Python.png';
import c from '../../assets/C++.png';
import bash from '../../assets/Bash.png';
import html from '../../assets/html.png';
import jav from '../../assets/JavaScript-logo.png';
import linux from '../../assets/linux.png';
import flask from '../../assets/Flask.png';
import doc from '../../assets/Docker.png';
import git from '../../assets/Git.png';
import mys from '../../assets/mysql.png';
import postgre from '../../assets/Postgresql.png';
import mongo from '../../assets/mongodb-logo.png';
import node from '../../assets/nodejs.png';
import r from '../../assets/R_.png';
import scikit from '../../assets/scikit_learn.png';
import keras from '../../assets/keras.png';
import pandas from '../../assets/pandas.png';
import matplot from '../../assets/matplotlib.png';

const About = () => {
  const skillsItems = [
    { img: python, name: "Python" },
    { img: c, name: "C++" },
    { img: bash, name: "Bash" },
    { img: r, name: "R" },
    { img: git, name: "Git" },
    { img: jav, name: "JavaScript" },
    { img: html, name: "HTML5 && CSS3" },
    { img: mys, name: "MySQL" },
    { img: postgre, name: "PostgreSQL" },
    { img: mongo, name: "MongoDB" },
    { img: node, name: "Node.js" },
    { img: flask, name: "Flask" },
    { img: linux, name: "Linux" },
    { img: doc, name: "Docker" },
    { img: pandas, name: "Pandas" },
    { img: scikit, name: "Scikit Learn" },
    { img: keras, name: "Keras" },
    { img: matplot, name: "Matplotlib" },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    rows: 2,  // Deux lignes
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='about'>
      <p>À propos</p>
      <div className="content">
        <div className="dash"></div>
        <div>
          Je suis <span className="text">très curieux, entreprenant, travailleur et j'aime partager et travailler en équipe</span>. Je me passionne pour les sciences et en particulier les mathématiques et l'informatique car je suis farouchement convaincu qu'elles amélioreront considérablement notre monde.
        </div>
      </div>
      <div className="skills">
        <p>Mes compétences</p>
        <div className="skillsItems">
            {skillsItems.map((skill, index) => (
              <div key={index} className="Item">
                <img src={skill.img} alt={`${skill.name} logo`} />
                <p>{skill.name}</p>
              </div>
            ))}
        </div>
        <p>...</p>
      </div>
    </div>
  );
}

export default About;


/*import React from 'react'
import './about.css'
import python from '../../assets/Python.png'
import c from '../../assets/C++.png'
import bash from '../../assets/Bash.png'
import html from '../../assets/html.png'
import jav from '../../assets/JavaScript-logo.png'
import linux from '../../assets/linux.png'
import flask from '../../assets/Flask.png'
import doc from '../../assets/Docker.png'
import git from '../../assets/Git.png'
import mys from '../../assets/mysql.png'
import postgre from '../../assets/Postgresql.png'
import mongo from '../../assets/mongodb-logo.png'
import node from '../../assets/nodejs.png'
import r from '../../assets/R_.png'
import scikit from '../../assets/scikit_learn.png'
import keras from '../../assets/keras.png'
import pandas from '../../assets/pandas.png'
import matplot from '../../assets/matplotlib.png'

const About = () => {
  return (
    <div className='about'>
      <p>À propos</p>
      <div className="content">
        <div className="dash"></div>
        <div>
          Je suis <span className="text">très curieux, entreprenant, travailleur et j'aime partager et travailler en équipe</span>. Je me passionne pour les sciences et en particulier les mathématiques et l'informatique car je suis farouchement convaincu qu'elles amélioront considérablement sur notre monde.
        </div>
      </div>
      <div className="skills">
        <p>Mes compétences</p>
        <div className="skillsItems">
          <div className="Item">
            <img src={python} alt="python logo" />
            <p>Python</p>
          </div>
          <div className="Item">
            <img src={c} alt="c++ logo" />
            <p>C++</p>
          </div>
          <div className="Item">
            <img src={bash} alt="bash logo" />
            <p>Bash</p>
          </div>
          <div className="Item">
            <img src={r} alt="R logo" />
            <p>R</p>
          </div>
          <div className="Item">
            <img src={git} alt="git logo" />
            <p>Git</p>
          </div>
          <div className="Item">
            <img src={jav} alt="javascript logo" />
            <p>JavaScript</p>
          </div>
          <div className="Item">
            <img src={html} alt="html logo" />
            <p>HTML5 && CSS3</p>
          </div>
          <div className="Item mysql">
            <img src={mys} alt="MySQL logo" />
            <p>MySQL</p>
          </div>
          <div className="Item">
            <img src={postgre} alt="Postgrsql logo" />
            <p>Postgresql</p>
          </div>
          <div className="Item mongo">
            <img src={mongo} alt="Mongo logo" />
            <p>MongoDb</p>
          </div>
          <div className="Item node">
            <img src={node} alt="Node logo" />
            <p>Node Js</p>
          </div>
          <div className="Item flask">
            <img src={flask} alt="Flask logo" />
            <p>Flask</p>
          </div>
          <div className="Item">
            <img src={linux} alt="Linux logo" />
            <p>Linux</p>
          </div>
          <div className="Item doc">
            <img src={doc} alt="Docker logo" />
            <p>Docker</p>
          </div>
          <div className="Item">
            <img src={pandas} alt="Pandas logo" />
            <p>Pandas</p>
          </div>
          <div className="Item sci">
            <img src={scikit} alt="Scikit learn logo" />
            <p>Scikit learn</p>
          </div>
          <div className="Item">
            <img src={keras} alt="Keras logo" />
            <p>Keras</p>
          </div>
          <div className="Item">
            <img src={matplot} alt="Matplotlib logo" />
            <p>Matplotlib</p>
          </div>
        </div>
        <p>...</p>
      </div>
    </div>
  )
}

export default About*/