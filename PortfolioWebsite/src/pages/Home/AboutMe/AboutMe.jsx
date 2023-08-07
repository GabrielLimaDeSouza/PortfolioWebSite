import React from 'react'

// Media Query
import { useMediaQuery } from 'react-responsive'

// Telas
import AboutMeDesktop from './Desktop/AboutMeDesktop'
import AboutMeMobile from './Mobile/AboutMeMobile'

const AboutMe = () => {
    const isDesktop = useMediaQuery({minWidth: 1000})

    return isDesktop ?
    <AboutMeDesktop />
    :
    <AboutMeMobile />

}

export default AboutMe