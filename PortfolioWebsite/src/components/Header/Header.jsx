import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.divHeader}>
        <div className={styles.nameHeader}>
            <p>GABRIEL LIMA</p>
        </div>
        <div className={styles.linksHeader}>
            <a href="">Projetos</a>
            <a href="">Sobre mim</a>
            <a href="">Contato</a>
        </div>
    </header>
  )
}

export default Header