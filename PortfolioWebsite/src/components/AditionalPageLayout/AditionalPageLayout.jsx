import React from 'react'

// Styles
import styles from './AditionalPageLayout.module.css'

const AditionalPageLayout = ({children}) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default AditionalPageLayout