import React from 'react'

// Estilos
import projectsStyles from './ProjectsMobile.module.css'

// Imgs
import protonImg from '../../../../assets/imgs/projects/proton.png'
import atelierImg from '../../../../assets/imgs/projects/atelier_picinin.png'
import monedasImg from '../../../../assets/imgs/projects/monedas.png'

const DesktopProjects = () => {
    return (
        <div className="body black-body" id="projects">
            <div className="white-line">
                <h1 className="title white-title">PROJETOS</h1>
            </div>
            <div className={projectsStyles.divContent}>
                <div className={projectsStyles.project}>
                    <div className={projectsStyles.text}>
                        <div className={projectsStyles.projectTitle}>
                            <a href="https://github.com/GabrielLimaDeSouza/ProtOn" target="_blank"><p>ProtOn</p></a>
                        </div>
                        <div className={projectsStyles.projectDescription}>
                            <p>Sistema de recomendação de protolos odontológicos.</p>
                        </div>
                        <div className={projectsStyles.projectLanguages}>
                            <div className={projectsStyles.firstLanguage}>
                                <p>ReactJS</p>
                            </div>
                            <div className={projectsStyles.secondLanguage}>
                                <p>NodeJS</p>
                            </div>
                        </div>
                    </div>
                    <div className={projectsStyles.divImg}>
                        <a href="https://github.com/GabrielLimaDeSouza/ProtOn" target="_blank"><img className={projectsStyles.img} src={protonImg} alt="ProtOn" /></a>
                    </div>
                </div>
                <div className={projectsStyles.project}>
                    <div className={projectsStyles.text}>
                        <div className={projectsStyles.projectTitle}>
                            <a href="https://github.com/GabrielLimaDeSouza/Atelier-Picinin" target="_blank"><p>Atelier Picinin</p></a>
                        </div>
                        <div className={projectsStyles.projectDescription}>
                            <p>Sistema de divulgação e gerenciamento do Atelier Picinin.</p>
                        </div>
                        <div className={projectsStyles.projectLanguages}>
                            <div className={projectsStyles.firstLanguage}>
                                <p>ReactJS</p>
                            </div>
                            <div className={projectsStyles.secondLanguage}>
                                <p>NodeJS</p>
                            </div>
                        </div>
                    </div>
                    <div className={projectsStyles.divImg}>
                        <a href="https://github.com/GabrielLimaDeSouza/Atelier-Picinin" target="_blank"><img className={projectsStyles.img} src={atelierImg} alt="Atelier Picinin" /></a>
                    </div>
                </div>
                <div className={projectsStyles.project}>
                    <div className={projectsStyles.text}>
                        <div className={projectsStyles.projectTitle}>
                            <a href="https://github.com/GabrielLimaDeSouza/Mone.das" target="_blank"><p>Mone.das</p></a>
                        </div>
                        <div className={projectsStyles.projectDescription}>
                            <p>Sistema de moedas estudantil para faculdades e escolas.</p>
                        </div>
                        <div className={projectsStyles.projectLanguages}>
                            <div className={projectsStyles.firstLanguage}>
                                <p>ReactJS</p>
                            </div>
                            <div className={projectsStyles.secondLanguage}>
                                <p>NodeJS</p>
                            </div>
                        </div>
                    </div>
                    <div className={projectsStyles.divImg}>
                        <a href="https://github.com/GabrielLimaDeSouza/Mone.das" target="_blank"><img className={projectsStyles.img} src={monedasImg} alt="Mone.das" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DesktopProjects