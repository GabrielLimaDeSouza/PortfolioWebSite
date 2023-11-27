import React from 'react'

//Estilos
import projectsStyles from './ProjectsDesktop.module.css'

// Componentens
import ProjectsGroup from '../../../../components/ProjectsGroup/ProjectsGroup'
import Link from '../../../../components/Link/Link'

const DesktopProjects = () => {
  return (
    <div className="body black-body" id="projects">
      <div className="white-line">
          <h1 className="title white-title">PROJETOS</h1>
      </div>
      <div className={projectsStyles.divContent}>
          <ProjectsGroup />
      </div>
      <Link href="/projects" title="Mais projetos" color="white" />
  </div>
  )
}

export default DesktopProjects