import React from 'react'
import { Link } from 'react-router-dom'

// Styles
import styles from './AditionalPageHeader.module.css'

// Icons
import {AiOutlineArrowLeft} from 'react-icons/ai'

const AditionalPageHeader = ({href}) => {
  return (
    <div className={styles.outerDiv}>
        <Link to={href}>
            <div className={styles.divArrowIcon}>
                <AiOutlineArrowLeft />
            </div>
        </Link>
    </div>
  )
}

export default AditionalPageHeader