import React from 'react'
import styles from './Link.module.css'

const Link = ({title, href, color}) => {
  return (
    <div className={styles.container}>
        <a href={href} className={`${styles.link} ${color}`}>{title}</a>
    </div>
  )
}

export default Link