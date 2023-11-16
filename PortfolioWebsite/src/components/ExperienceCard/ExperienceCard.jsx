import React from 'react'

// Styles
import styles from './ExperienceCard.module.css'

const ExperienceCard = ({title, img, post, time}) => {
  return (
    <div className={styles.container}>
        <div className={styles.company}>
          <img src={img}></img>
          <h3>{title}</h3>
        </div>
        <p className={styles.spaced}>{post}</p>
        <p>{time}</p>
    </div>
  )
}

export default ExperienceCard