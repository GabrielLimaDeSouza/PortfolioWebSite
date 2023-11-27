import React from 'react'
import { Link } from 'react-router-dom'

// Styles
import styles from './AditionalPageLayout.module.css'

// Components
import AditionalPageHeader from '../Header/AditionalPageHeader/AditionalPageHeader'

const AditionalPageLayout = ({children, href}) => {
  return (
    <div className={styles.outerDiv}>
      <AditionalPageHeader href={href}/>
      <div className={styles.container}>
        {children}
      </div>
    </div>
  )
}

export default AditionalPageLayout