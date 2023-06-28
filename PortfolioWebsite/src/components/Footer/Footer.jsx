import React from 'react'

import {FiGithub} from 'react-icons/fi'
import {FaLinkedinIn} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.divFooter}>
        <div className={styles.divIcons}>
            <FiGithub className={styles.icon}/>
            <FiDribbble className={styles.icon}/>
            <FaLinkedinIn className={styles.icon}/>
        </div>
        <div className={styles.divCopy}>
            <p>Copyright © 2023 - Gabriel Lima - Todos os direitos reservados</p>
        </div>
    </footer>
  )
}

export default Footer