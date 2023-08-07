import React from 'react'

// Estilo
import aboutMeStyles from './AboutMeDesktop.module.css'

// Img
import aboutMeFrameImg from '../../../../assets/imgs/FotoComQuadro.png'

const AboutMe = () => {
  return (
    <div className="body white-body" id="aboutMe">
          <div className="black-line">
              <h1 className="title black-title">SOBRE MIM</h1>
          </div>
          <div className={aboutMeStyles.divContent}>
              <div className={aboutMeStyles.divText}>
                  <p className={aboutMeStyles.text}>Meu nome é Gabriel Lima de Souza e eu moro em Belo Horizonte/MG. Sou estudante de Engenharia de Software na PUC Minas e atualmente estou no quinto período. Sou um Desenvolvedor Full Stack e minha linguagem preferida é o Javascript.</p>
              </div>
              <div className={aboutMeStyles.divImg}>
                  <img className={aboutMeStyles.img} src={aboutMeFrameImg} alt="" />
              </div>
          </div>
    </div>
  )
}

export default AboutMe