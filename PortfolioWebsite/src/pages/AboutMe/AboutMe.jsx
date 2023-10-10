import React from 'react'

// Styles 
import styles from './AboutMe.module.css'

// Imgs
import aboutMeImg from '../../assets/imgs/Foto.jpg'

// Components
import AditionalPageLayout from '../../components/AditionalPageLayout/AditionalPageLayout'

const AboutMe = () => {
  return (
    <AditionalPageLayout href="/#2">
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>SOBRE MIM</h1>
        </div>
        <div className={styles.informationContainer}>
          <div className={styles.informationText}>
            <p>Sou um estudante de Engenharia de Software apaixonado por tecnologia e inovação, 
            sempre em busca de aprimorar meus conhecimentos e habilidades. 
            Meu objetivo é contribuir para o desenvolvimento de soluções eficientes, 
            adotando as melhores práticas de engenharia de software e 
            aplicando metodologias ágeis para entregar resultados de excelência.</p>
          </div>
          <div className={styles.informationImg}>
            <img src={aboutMeImg} alt="Foto Pessoal" />
          </div>
        </div>
        <div className={styles.experienceContainer}>
          <h3>EXPERIÊNCIAS</h3>
        </div>
      </div>
      </AditionalPageLayout> 
  )
}

export default AboutMe;