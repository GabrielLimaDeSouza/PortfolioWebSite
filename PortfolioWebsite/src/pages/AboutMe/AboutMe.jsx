import React, { useEffect } from 'react'

// Styles 
import styles from './AboutMe.module.css'

// Imgs
import aboutMeImg from '../../assets/imgs/Foto.jpg'
import hotmartImg from '../../assets/imgs/companies/hotmart.png'

// Components
import Layout from '../../components/AditionalPageLayout/AditionalPageLayout'
import ExperienceCard from '../../components/ExperienceCard/ExperienceCard'

const AboutMe = () => {

  useEffect(() => {
    $.scrollify.destroy();

    return () => {
      $.scrollify({
        section: ".section",
        sectionName: false,
        setHeights: false,
        scrollSpeed: 1100,
        scrollbars: false,
        easing: "easeOutExpo",
        before: function(index, sections) {},
        after: function(index, sections) {}
      });
    };
  }, []);

  return (
    <Layout href="/#2">
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
          <ExperienceCard title="Hotmart" img={hotmartImg} post="Estagiário de Desenvolvimento Frontend" time="10/2023 - Atualmente" />
        </div>
      </div>
      </Layout> 
  )
}

export default AboutMe;