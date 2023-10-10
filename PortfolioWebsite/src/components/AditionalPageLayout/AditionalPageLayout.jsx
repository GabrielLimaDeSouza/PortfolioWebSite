import React from 'react'
import { Link } from 'react-router-dom'

// Styles
import styles from './AditionalPageLayout.module.css'

// Icons
import {AiOutlineArrowLeft} from 'react-icons/ai'

const AditionalPageLayout = ({children, href}) => {
  return (
    <div className={styles.outerDiv}>
      <Link to={href}>
        <div className={styles.divArrowIcon}>
          <AiOutlineArrowLeft />
        </div>
      </Link>
      <div className={styles.container}>
        {children}
      </div>
    </div>
  )
}

export default AditionalPageLayout