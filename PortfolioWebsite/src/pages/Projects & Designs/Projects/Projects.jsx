import React from 'react'

// Styles
import styles from './Projects.module.css'

// Components
import Layout from '../../../components/AditionalPageLayout/AditionalPageLayout'

const Projects = () => {
  return (
    <Layout href="/#3">
      <div className={styles.title}>
          <h1>PROJETOS</h1>
      </div>
    </Layout>
  )
}

export default Projects