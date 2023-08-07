import React from 'react'

// Media Query
import { useMediaQuery } from 'react-responsive'

// Telas
import ProjectsDesktop from './Desktop/ProjectsDesktop'
import ProjectsMobile from './Mobile/ProjectsMobile'

const Projects = () => {
    const isDesktop = useMediaQuery({minWidth: 1000})

    return isDesktop ?
    <ProjectsDesktop />
    :
    <ProjectsMobile />

}

export default Projects