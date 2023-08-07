import React from 'react'

// Icons
import {FiGithub} from 'react-icons/fi'
import {FaLinkedinIn} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.divFooter}>
        <div className={styles.divIcons}>
            <a href='https://github.com/GabrielLimaDeSouza' target='_blank'><FiGithub className={styles.icon}/></a>
            <a href='https://dribbble.com/GabrielLimaDeSouza' target='_blank'><FiDribbble className={styles.icon}/></a>
            <a href='https://www.linkedin.com/in/gabriel-lima-de-souza/' target='_blank'><FaLinkedinIn className={styles.icon}/></a>
        </div>
        <div className={styles.divCopy}>
            <p>Copyright © 2023 - Gabriel Lima - Todos os direitos reservados</p>
        </div>
    </footer>
  )
}

export default Footer