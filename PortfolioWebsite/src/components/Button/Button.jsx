import React from 'react'
import styles from './Button.module.css'

const Button = (props) => {
  return (
    <div className={styles.divButton}>
        <a className={styles.textButton}>{props.text}</a>
    </div>
  )
}

export default Button