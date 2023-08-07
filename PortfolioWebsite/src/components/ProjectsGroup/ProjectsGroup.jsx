import React from 'react'

import ProjectCard from '../ProjectCard/ProjectCard'

import styles from './ProjectsGroup.module.css'

import protonImg from '../../assets/imgs/projects/proton.png'
import monedasImg from '../../assets/imgs/projects/monedas.png'
import atelierImg from '../../assets/imgs/projects/atelier_picinin.png'
import arenaImg from '../../assets/imgs/projects/arena.png'
import medsImg from '../../assets/imgs/projects/meds.png'
import weatherappImg from '../../assets/imgs/projects/weather_app.png'


const ProjectsGroup = () => {
  return (
    <div className={styles.projectGroup}>
        <div className={styles.projectGroupContainer}>
          <div className={styles.firstLine}>
            <ProjectCard className={styles.projectCard} img={protonImg} title="ProtOn" description="Sistema de recomendação de protocolos odontológicos" languages={['Javascript', 'React', 'CSS', 'MongoDB', 'NodeJS']} link="https://github.com/GabrielLimaDeSouza/ProtOn" />
            <ProjectCard className={styles.projectCard} img={atelierImg} title="Atelier Picinin" description="Sistema de divulgação e gerenciamento do Atelier Picinin" languages={['Javascript', 'React', 'CSS', 'MongoDB', 'NodeJS']} link="https://github.com/GabrielLimaDeSouza/Atelier-Picinin" />
            <ProjectCard className={styles.projectCard} img={monedasImg} title="Mone.das" description="Sistema de moedas estudantil" languages={['Javascript', 'React', 'CSS', 'MongoDB', 'NodeJS']} link="https://github.com/GabrielLimaDeSouza/Mone.das" />
          </div>
          <div className={styles.secondLine}>
            <ProjectCard className={styles.projectCard} img={medsImg} title="MEDS" description="Projeto frontend de um sistema hospitalar" languages={['HTML', 'CSS', 'Javascript']} link="https://github.com/GabrielLimaDeSouza/MEDS" />
            <ProjectCard className={styles.projectCard} img={arenaImg} title="Arena" description="Sistema de organização de partidas esportivas" languages={['HTML', 'CSS', 'Javascript','NodeJS']}  link="https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2022-1-ti2-0924100-arena" />
            <ProjectCard className={styles.projectCard} img={weatherappImg} title="WeatherApp" description="Site de metereologia integrado com a API do OpenWeatherApp" languages={['Javascript', 'React', 'CSS']} link="https://github.com/GabrielLimaDeSouza/React/tree/main/WeatherApp" />
          </div>   
        </div>
    </div>
  )
}

export default ProjectsGroup