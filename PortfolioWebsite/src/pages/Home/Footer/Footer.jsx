import React from 'react'

// Estilos
import footerStyles from './Footer.module.css'

// Componentes
import MobileHeader from '../../../components/Header/MobileHeader/MobileHeader'

// Icons
import {FiGithub} from 'react-icons/fi'
import {FaLinkedinIn} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const Footer = () => {
  return (
    <div className="body black-body">
      <MobileHeader />

      <div className={footerStyles.divContent}>
        <div className={footerStyles.linha}></div>
        <div className={footerStyles.informations}>
          <div className={footerStyles.copy}>
            <p>&copy; Gabriel Lima 2023</p>
          </div>
          <div className={footerStyles.divIcons}>
            <a href='https://github.com/GabrielLimaDeSouza' target='_blank'><FiGithub className={footerStyles.icon}/></a>
            <a href='https://dribbble.com/GabrielLimaDeSouza' target='_blank'><FiDribbble className={footerStyles.icon}/></a>
            <a href='https://www.linkedin.com/in/gabriel-lima-de-souza/' target='_blank'><FaLinkedinIn className={footerStyles.icon}/></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer